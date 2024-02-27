const { Users } = require("../db.js");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use("auth-google",new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/",
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
    const googleMail = profile.emails[0].value;

    const [user, created] = await Users.findOrCreate({
      where: { email: googleMail },
      defaults: {
        name: profile.displayName,
        googleId: profile.id,
        is_verified: true
      }
    })

    console.log(user);
    
    cb(null, user)
  }
));

passport.serializeUser((user, cb) => {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
  
});

passport.deserializeUser((user, cb) => {
  process.nextTick(function() {
    return cb(null, user);
  });
  
});