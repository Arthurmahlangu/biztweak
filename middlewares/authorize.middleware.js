const methods = require("../helpers/methods")

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = (req, res, next) => {
    
    const excludeURL = [
        "/api/v1/user/register",
        "/api/v1/user/auth-email",
    ]

    const validateRequest = (id) => {
        // 1. Check user_id exists
        // 2. If exists, does it match mine or If not, does it have others
        // 3. If user_id belong to other, does other user have same role as mine or not

        if (id === null) {

        } else {

        }
    }

    if (!excludeURL.includes(req.url)) {
        let isAuthorized = false
        switch (req.method) {
            case 'GET':
                console.log('GET REQUEST')
                isAuthorized = validateRequest(req.param.id || null)
                break;
            case 'POST':
                console.log('POST REQUEST')
                
                break;
            case 'PUT':
                console.log('PUT REQUEST')
                
                break;
            case 'DELETE':
                console.log('DELETE REQUEST')
                
                break;
        
            default:
                break;
        }

        if (!isAuthorized) {
            return res.status(401).send(methods.failResponse("Access denied"))
        }
    }

    next()
}
