const db = require("../models")
const jwt = require('jsonwebtoken');
const pluralize = require('pluralize')
const { failResponse } = require("../helpers/methods");


const handler = async (auth, params, method, path, route) => {

    const model = path.split("/")[1]

    const self = await db.user.findOne({ 
        where: { id: auth.id } 
    })

    let rules = await db.rule.findOne({ 
        where: { role: self.role, path: route.path, model, method } 
    })

    if (rules) {
        if (model == "users") {
            if (params.id) {
                if (params.id == self.id) {
                    if (rules.owner) {
                        return true
                    }
                } else {
                    if (rules.other) {
                        return true
                    }
                    
                    if (rules.group) {
                        const user = await db.user.findOne({ 
                            where: { id: params.id }
                        })

                        console.log(user)

                        const userRole = await db.role.findOne({ 
                            where: { name: user.role } 
                        })

                        const authRole = await db.role.findOne({ 
                            where: { name: self.role } 
                        })
    
                        if (userRole.group == authRole.group) {
                            return true
                        }
                    }
                }
            } else {
                if (rules.other) return true
            }
        } else {
            if (params.id) {
                const name = pluralize.singular(model)

                const found = await db[name].findOne({ 
                    where: { id: params.id }
                })

                if (found) {
                    if (found.userId == self.id) {
                        if (rules.owner) {
                            return true
                        }
                    } else {
                        if (rules.other) {
                            return true
                        }

                        if (rules.group) {
                            const user = await db.user.findOne({ 
                                where: { id: found.userId }
                            })
    
                            const userRole = await db.role.findOne({ 
                                where: { name: user.role } 
                            })
    
                            const authRole = await db.role.findOne({ 
                                where: { name: self.role } 
                            })
        
                            if (userRole.group == authRole.group) {
                                return true
                            }
                        }
                    }
                } else {
                    if (rules.other) return true
                }
            } else {
                if (rules.other) return true
            }
        }
    }

    return false

}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = async (req, res, next) => {
    const { params, method, headers, path, route } = req

    const { authorization } = headers

    if (!authorization) {
        return res.
            status(403).
            send(failResponse("Authentication failed."))
    }

    const token = authorization.split(' ')[1]

    if (!token) {
        return res.
            status(403).
            send(failResponse("Authentication failed."))
    }

    const verify = await jwt.verify(token, process.env.TOKEN_SECRET)

    if (!verify) {
        return res.
            status(403).
            send(failResponse("Authentication failed."))
    }

    const auth = await jwt.decode(token)

    const tokenData = await db.token.findOne({ where: { token, userId: auth.id, type: "Access-Token" } })

    if (!tokenData) {
        return res.
            status(403).
            send(failResponse("Authentication failed."))
    }

    const now = new Date()

    if (now > tokenData.expiry) {
        await db.token.destroy({ where: { id: tokenData.id } })
        
        return res.
            status(403).
            send(failResponse("Token expired."))
    }

    const isSuccess = await handler(auth, params, method, path, route)

    if (!isSuccess) {
        return res.
            status(parseInt(process.env.AUTHORIZATION_FAIL_CODE)).
            send(failResponse("Authorization failed."))
    }

    req.auth = auth
    
    next()
}