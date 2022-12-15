const { successResponse, failResponse } = require("../helpers/methods")
const { 
    createRule, 
    getRules, 
    getRule, 
    updateRule, 
    deleteRule 
} = require("../services/rule.service")

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createRule = async (req, res) => {

    const { role, path, model, method, owner, group, other } = req.body
    const service = await createRule({
        role, path, model, method, owner, group, other
    })

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Rule created", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getRules = async (req, res) => {

    const service = await getRules() 
    
    res.send(
        successResponse("Rules.", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.getRule = async (req, res) => {

    const service = await getRule(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Rule", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.updateRule = async (req, res) => {

    const { role, path, model, method, owner, group, other } = req.body
    const service = await updateRule(req.params.id, {
        role, path, model, method, owner, group, other
    })

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Updated", {
            data: service.data
        })
    )
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.deleteRule = async (req, res) => {

    const service = await deleteRule(req.params.id)

    if (service.error) {
        res.send(
            failResponse(service.message)
        )
    }

    res.send(
        successResponse("Delete rule", {
            data: []
        })
    )
}
