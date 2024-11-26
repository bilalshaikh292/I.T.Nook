import app from './app.mjs';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import userRouter from './routers/userRoutes.mjs'
import dashboard_Routes from './routers/dashboardRoutes.mjs';
import { isAdmin, isAuth } from './utils.mjs';

app.use(bodyParser.json());

app.use("/users", userRouter);
app.use("/dashboard",isAuth,isAdmin,dashboard_Routes);

mongoose.connect(process.env.MONGODB_URL).then(
    () =>{
        console.log("Connected to DataBase");
    }
).catch(
    (err) =>{
        console.error(err);
    }
)

const PORT = process.env.PORT || 5000; 


app.listen( PORT,() => {
console.log(`server is listeinig at http://localhost:${PORT}`);
}); 