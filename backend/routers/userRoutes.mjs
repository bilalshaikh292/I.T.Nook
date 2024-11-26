import  express  from "express";
import User from "../models/userSchema.mjs";
import { generateToken } from "../utils.mjs";
import {mailer, transporter} from "../sendmail.mjs";

const userRouter = express.Router();

userRouter.post(
    '/register',
    (async (req,res) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
          });
          const createdUser = await user.save();
          if (!createdUser) {
            res.status(401).send({
              message: 'Invalid User Data',
            });
          } else {
            res.send({
              _id: createdUser._id,
              firstName: createdUser.firstName,
              lastName: createdUser.lastName,
              email: createdUser.email,
              isAdmin: createdUser.isAdmin,
            });
          }
    })
);
userRouter.post(
  '/signin',
      (async (req, res) => {
      const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
      });
      if (!signinUser) {
        res.status(401).send({
          message: 'Invalid Email or Password!',
        });
      }
      else{
        res.send({
          _id: signinUser._id,
          name: signinUser.firstName,
          isAdmin: signinUser.isAdmin,
          token: generateToken(signinUser),
        });
      }
    }));

    userRouter.post('/sendmail', async (req, res) => {
      const name = req.body.name;
      const contact = req.body.contact;
      const message = req.body.message;
      try {
        await mailer(name,contact,message);
        res.status(200).send('Email sent successfully');
    } catch (err) {
        res.status(500).send('Error sending email');
    }
  });

  userRouter.get('/getUserData',async(req,res) =>{
    const id = req.headers.userid;
    const data = await User.findOne({_id:id});
    try{
      res.send({
        name :data.name,
        email: data.email,
      })
    }
    catch(error){
      res.status(404).send({message : 'User Not Found!'})
    }

  }

  );

  userRouter.put('/updateDetials',async(req,res) =>{
    const id = req.headers.userid;
    const newName = req.body.updatedName;
    const newEmail = req.body.updatedEmail;
try{
    const data = await User.findOneAndUpdate(
      {_id :id},{
        $set : {
          name : newName,
          email : newEmail,
        }
      },
      {new : true}
    );
    console.log("done"); 
    res.status(200).send({message: "Successfully Updated"})
  }

  catch(error){
    console.log(error)
    res.status(500).send({message : "error Updating" })
  }
  });

  userRouter.put('/updatePassword',async(req,res) =>{
    const id = req.headers.userid;
    const oldPass = req.body.oldPass;
    const newPass = req.body.newPass;
    
    const user = await User.findById(id);

    if(user.password !== oldPass){
      res.status(401).send({message : 'Wrong Old Password '})
    }
try{
    const data = await User.findOneAndUpdate(
      {_id :id},{
        $set : {
          password : newPass,
        }
      },
      {new : true}
    );
    console.log("done"); 
    res.status(200).send({message: "Successfully Updated"})
  }

  catch(error){
    console.log(error)
    res.status(500).send({message : "error Updating" })
  }
  });
 


export default userRouter;