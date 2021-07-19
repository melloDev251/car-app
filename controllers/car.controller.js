const carModel = require("../models/car.model");
const userModel = require("../models/user.model");
const objectID = require("mongoose").Types.ObjectId;


module.exports.readCar = (req, res) => {
  carModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
};

module.exports.createCar = async (req, res) => {
 
  const newCar = new carModel({
    carId: req.body.carId,
    mark: req.body.mark,
    description: req.body.description,
    comments: [],
  });

  try {
    const car = await newCar.save();
    return res.status(201).json(car);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports.commentCar = (req, res) => {
  if (!objectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    return carModel.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          comments: {
            commenterId: req.body.commenterId,
            commenterPseudo: req.body.commenterPseudo,
            text: req.body.text,
            timestamp: new Date().getTime(),
          },
        },
      },
      { new: true },
      (err, docs) => {
        if (!err) return res.send(docs);
        else return res.status(400).send(err);
      }
    );
  } catch (err) {
    return res.status(400).send(err);
  }
};
