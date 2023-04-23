const tours = require("../models/Tour.js");

const createTour = async (req, res) => {
  const { img, main } = req.body;
  console.log(img, main);
  const newtour = new tours({
    photo: img,
    title: main.title,
    desc: main.desc,
    address: main.address,
    maxGroupSize: main.maxGroupSize,
    price: main.price,
    distance: main.distance,
    city: main.city,
    reviews: main.reviews,
    featured: main.featured,
  });
  try {
    const tour = await newtour.save();
    res.status(200).json({
      success: true,
      message: "successfully added the tour",
      data: tour,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "failed to add the tour", data: error });
  }
};

const getTour = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const fetched = await tours
      .find()
      .populate("reviews")
      .skip(page * 8)
      .limit(8);
    res.status(200).send(fetched);
  } catch (error) {
    res.status(500).json(error);
  }
};
const getfeatured = async (req, res) => {
  try {
    const fetched = await tours
      .find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "successfull",
      count: fetched.length,
      data: fetched,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
//updatae tour
const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updated = await tours.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
};
//delete tour
const deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    const deleted = await tours.findByIdAndDelete(id);
    res.status(200).json("deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};
const singleTour = async (req, res) => {
  const id = req.params.id;

  try {
    const single = await tours.findById(id).populate("reviews");
    if (!single) {
      res.status(400).json("unavailabel in datastore");
    } else {
      res.status(200).send(single);
    }
  } catch (error) {
    res.status(500).json("no place");
  }
};
const gettoursearch = async (req, res) => {
  const city = new RegExp(req.query.city, "i");
  const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);
  try {
    const fetched = await tours
      .find({
        city,
        distance: { $gte: distance },
        maxGroupSize: { $gte: maxGroupSize },
      })
      .populate("reviews");
    res.status(200).send(fetched);
  } catch (error) {
    res.status(500).json(error);
  }
};
// count the number of document
const estimate = async (req, res) => {
  try {
    const count = await tours.estimatedDocumentCount();
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getfeatured,
  getTour,
  createTour,
  singleTour,
  updateTour,
  estimate,
  deleteTour,
  gettoursearch,
};
