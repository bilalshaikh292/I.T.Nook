import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  total_earining: { type: Number },
  pending_task: { type: Number },
  task_completed: { type: Number },
});

const work_Data = new mongoose.Schema({
  id: { type: Number, unique: true, required: true },
  name: { type: String },
  device: { type: String },
  otherAccessories: { type: String},
  status: { type: String ,default : "pending"},
  remark: { type: String ,default : "-" },
  amount: { type: Number ,default :0},
  moneyStatus : {type : String, default : 'unpaid'},
  inDate: { type: String, default :"-" },
  outDate : {type : String ,default : '-'},
  contactInfo: { type: Number },
  problem:{type : String,default:"-"}
});

const entry = mongoose.model("device_entry", work_Data);

const dashboard = mongoose.model("dashboard_data", taskSchema);

export { entry, dashboard };
