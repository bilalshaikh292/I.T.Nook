import express from "express";
import { dashboard, entry } from "../models/taskSchema.mjs";
import data from "../data.mjs";

const dashboard_Routes = express.Router();

dashboard_Routes.put("/updateCompletedTask/:id", async (req, res) => {
  const id_toUpdate = req.params.id;
  const new_moneyStatus = req.body.moneyStatus;
  const new_outDate = req.body.outDate;
  const new_money = req.body.amount;

  const dashboard_data = await entry.findOneAndUpdate(
    {id:id_toUpdate},
    {
      $set: {
        moneyStatus: new_moneyStatus,
        outDate: new_outDate,
        amount: new_money,
      },
    },
    { new: true }
  );
  if (!dashboard_data) {
    res.status(401).send({ message: "Invalid data" });
  }
});


dashboard_Routes.put("/updatependingtask/:id", async (req, res) => {
  const id_toUpdate = req.params.id;
  const new_Status = req.body.status;
  const new_Remark = req.body.remark;
  const new_Money = req.body.amount;

  const dashboard_data = await entry.findOneAndUpdate(
    {id:id_toUpdate},
    {
      $set: {
        status: new_Status,
        amount: new_Money,
        remark: new_Remark,
      },
    },
    { new: true }
  );
  if (!dashboard_data) {
    res.status(401).send({ message: "Invalid data" });
  }
});
dashboard_Routes.put("/updatetask/:id", async (req, res) => {
  const id_toUpdate = req.params.id;
  const new_name = req.body.name;
  const new_device = req.body.device;
  const new_otherAccessories = req.body.otherAccessories;
  const new_status = req.body.status;
  const new_remark = req.body.remark;
  const new_amount = req.body.amount;
  const new_moneyStatus = req.body.moneyStatus;
  const new_inDate = req.body.inDate;
  const new_outDate = req.body.outDate;
  const new_contactInfo = req.body.contactInfo;
  const new_problem = req.body.problem;
  const dashboard_data = await entry.findOneAndUpdate(
    {id:id_toUpdate},
    {
      $set: {
        name: new_name,
        device: new_device,
        otherAccessories: new_otherAccessories,
        status: new_status,
        remark: new_remark,
        amount: new_amount,
        money_status: new_moneyStatus,
        inDate: new_inDate,
        outDate: new_outDate,
        contactInfo: new_contactInfo,
        problem : new_problem,
      },
    },
    { new: true }
  );
  if (!dashboard_data) {
    res.status(401).send({ message: "Invalid data" });
  }
});
dashboard_Routes.get("/Data", async (req, res) => {
  const total_task = await entry.countDocuments({}); 
  const pending_task = await entry.countDocuments(
    {
      status:{ $regex: /^pending$/i }
});
  const complted_task = await entry.countDocuments({status:'Completed'});
  const totalMoney = await entry.aggregate([
    {
      $group: {
        _id: null,
        total_money: { $sum: '$amount' },
      },
    },
  ]);


  if (!pending_task) {
    res.status(401).send({ message: "Invalid data" });
  } else {
    res.send({
      total_task:total_task,
      pending_task:pending_task, 
      task_completed:complted_task,
      totalEarnings :totalMoney[0].total_money
    });
  }
});
dashboard_Routes.post("/newEntry", async (req, res) => {

  const highestEntry = await entry.findOne().sort({ id: -1 });
  const newId = highestEntry ? highestEntry.id + 1 : 1;
  const dashBoard = new entry({
    id: newId,
    name: req.body.name,
    device: req.body.device,
    otherAccessories: req.body.otherAccessories,
    status: req.body.status,
    remark: req.body.remark,
    money: req.body.money, 
    inDate: req.body.inDate,
    contactInfo: req.body.contactInfo,
    problem: req.body.problem,
  });
  const entry_data = await dashBoard.save();
  if (!entry_data) {
    res.status(401).send({
      message: "Invalid Data",
    });
  } else {
    res.send({
      _id: entry_data._id,
      id: entry_data.id,
      name: entry_data.name,
      device: entry_data.device,
      otherAccessories: entry_data.otherAccessories,
      status: entry_data.status,
      remark: entry_data.remark,
      money: entry_data.money,
      inDate: entry_data.inDate,
      contactInfo: entry_data.contactInfo,
    });
  }
});
dashboard_Routes.get("/totaltask", async (req, res) => {
  const data = await entry.find({});
  if (!data) {
    res.status(401).send({ message: "Invalid data" });
    console.log(hello);
  } else {
    res.json(data);
  }
});

dashboard_Routes.get("/pendingtask", async (req, res) => {
  const data = await entry.find({status:{ $regex: /^pending$/i }});
  if (!data) {
    res.status(401).send({ message: "Invalid data" });
    console.log(hello);
  } else {
    res.json(data);
  }
});
dashboard_Routes.get("/completedTask", async (req, res) => {
  const data = await entry.find({status:'Completed'});
  if (!data) {
    res.status(401).send({ message: "Invalid data" });
    console.log(hello);
  } else {
    res.json(data);
  }
});


dashboard_Routes.get("/pendingtask/:id", async (req, res) => {
  const id_toGet = req.params.id;
  const data = await entry.find({id:id_toGet});
  if (!data) {
    res.status(401).send({ message: "Invalid data" });
  } else {
    res.json(data);
  }
});

dashboard_Routes.get("/taskdetials/:id", async (req, res) => {
  const id_toGet = req.params.id;
  const data = await entry.find({id:id_toGet});
  if (!data) {
    res.status(401).send({ message: "Invalid data" });
  } else {
    res.json(data);
  }
});

dashboard_Routes.get("/allTaskId", async (req, res) => {
  const data = await entry.find({},'id');
  if (!data) {
    res.status(401).send({ message: "Invalid data" });
    console.log(hello);
  } else {
    res.json(data);
  }
});

dashboard_Routes.delete("/deleteEntry/:id", async (req, res) => {
  const id_toDelete = req.params.id;
  try {
    await entry.deleteOne({ id: id_toDelete });
    res.status(200).json({ message: "Entry successfully deleted" });
  } catch (error) {
    console.error("Error deleting entry:", error);
    res.status(500).json({ message: "Failed to delete entry", error: error.message });
  }
});


dashboard_Routes.get("/task/:id", async (req, res) => {
  const id_toGet = req.params.id;
  const data = await entry.find({id:id_toGet});
  if (!data) {
    res.status(401).send({ message: "Invalid data" });
  } else {
    res.json(data);
  }
});

export default dashboard_Routes;
