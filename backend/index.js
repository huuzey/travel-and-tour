const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const app = express();
const tourroute = require("./routes/addtour");
const authroute = require("./routes/authroute");
const userroute = require("./routes/userroute");
const reviewroute = require("./routes/reviewroute");
const bookingroute = require("./routes/bookingroute");
const formidable = require("formidable");
const cloudy = require("./utils/cloudinary");
const Tour = require("./models/Tour");
const corsoptions = {
  origin: true,
  credentials: true,
};
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/v1/place", tourroute);
app.use("/api/v1/auth", authroute);
app.use("/api/v1/user", userroute);
app.use("/api/v1/review", reviewroute);
app.use("/api/v1/booking", bookingroute);
app.post("/image-upload", (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (err, field, files) => {
    try {
      const response = await cloudinary.uploader.upload(
        files.image.filepath,

        {
          cloud_name: "dfanahqm3",
          api_key: "292927319546494",
          api_secret: "lAVuKBqco0HwEHnnjcbl_RbZQYw",
          secure: true,
          folder: "traveler",
        }
      );
      res.status(200).json(response.secure_url);
    } catch (error) {
      console.log(error);
    }
  });
});
app.use("/image-get", async (req, res) => {
  try {
    const { resources } = await cloudy.search
      .expression("folder:traveler")
      .sort_by("public_id", "desc")
      .execute();
    const publicids = resources.map((file) => file.public_id);
    res.send(publicids);
  } catch (error) {
    console.log(error);
  }
});
PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, console.log("connected"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server connected ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
