const userModel = require("../models/user.model")

const objectID = require("mongoose").Types.ObjectId;

// display all users
module.exports.getAllUsers = async (req, res) => {
  const users = await userModel.find().select(); 
  res.status(200).json(users);
};


// test id database
module.exports.userInfo = (req, res) => {
    console.log(req.params);
    if (!objectID.isValid(req.params.id))
        return res
          .status(400)
          .send("ID unknown in the database : " + req.params.id);

    userModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log("ID unknown in the database : " + err);
    })
};