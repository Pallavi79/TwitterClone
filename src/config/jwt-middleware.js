require('dotenv').config();
const JWT = require('passport-jwt');
const User = require('../models/user');


const JwtStrategy = JWT.Strategy;
const ExtractJwt = JWT.ExtractJwt;
const secretKey = process.env.SECRET_KEY;
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:secretKey
}

const passportAuth = (passport) => {
    try {
        passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
            console.log("req sent to strategy");
            const user = await User.findById(jwt_payload.id);
            if (!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));
    } catch (err) {
        console.log(err);
        throw err;
    }
};

module.exports = passportAuth;