import jwt from "jsonwebtoken";
import config from "./config.mjs";
import User from "./models/userSchema.mjs";

export const generateToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      config.JWT_SECRET,
      {expiresIn : '1h'}
    );
  };
  
  export const isAuth = (req, res, next) => {
    const bearerToken = req.headers.authorization;
    if (!bearerToken) {
      res.status(401).send({ message: 'Token is not supplied' });
    } else {
      const token = bearerToken.slice(7, bearerToken.length);
      jwt.verify(token, config.JWT_SECRET, (err, data) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = data;
          next();
        }
      });
    }
  };
  export const isAdmin = async(req, res, next) =>{
    const isaAdmin = req.headers.isadmin;
    if(isaAdmin){
      const user = await User.findById(req.headers.userid);
      if(user){
        if(user.isAdmin){
          next();
        }
        else{
          console.log("not a valid admin")
          res.status(401).send({ message: 'Not A valid Admin'});
        }
      }
      else{
        console.log("not a valid user")
        res.status(401).send({ message: 'User Error'});
      }
    }
    else{
      res.status(401).send({ message: 'Not A valid Admin'});
    }
  };