const db = require("../models")
const jwt = require('jsonwebtoken');
const pluralize = require('pluralize')
const { failResponse } = require("../helpers/methods");


const handler = async (auth, params, method, path) => {

    const model = path.split("/")[1]

    const self = await db.user.findOne({ 
        where: { id: auth.id } 
    })

    const rules = await db.rule.findOne({ 
        where: { role: self.role, model, method } 
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

                if (found.userid) {
                    if (found.userid == self.id) {
                        if (rules.owner) {
                            return true
                        }
                    } else {
                        if (rules.other) {
                            return true
                        }

                        if (rules.group) {
                            const user = await db.user.findOne({ 
                                where: { id: found.userid }
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
    const { params, method, headers, path } = req
    const { authorization } = headers

    try {
        if (!authorization) {
            return res.
                status(parseInt(process.env.AUTHORIZATION_FAIL_CODE)).
                send(failResponse("Authentication failed."))
        }
    
        const token = authorization.split(' ')[1]
    
        if (!token) {
            return res.
                status(parseInt(process.env.AUTHORIZATION_FAIL_CODE)).
                send(failResponse("Authrntication failed."))
        }
    
        const verify = jwt.verify(token, process.env.TOKEN_SECRET)
    
        if (!verify) {
            return res.
                status(parseInt(process.env.AUTHORIZATION_FAIL_CODE)).
                send(failResponse("Authorization failed."))
        }
    
        const auth = jwt.decode(token)
        const isSuccess = await handler(auth, params, method, path)
    
        if (!isSuccess) {
            return res.
                status(parseInt(process.env.AUTHORIZATION_FAIL_CODE)).
                send(failResponse("Authorization failed."))
        }

        req.auth = auth
    
        next()
    } catch (error) {
        return res.
            status(parseInt(process.env.AUTHORIZATION_FAIL_CODE)).
            send(failResponse("Authorization failed."))
    }
 }