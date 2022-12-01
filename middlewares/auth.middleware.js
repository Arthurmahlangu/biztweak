const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
module.exports = new JWTstrategy({
    secretOrKey: process.env.JWT_SECRET, 
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        return done(null, token.user);
    } catch (error) {
        done(error);
    }
})
