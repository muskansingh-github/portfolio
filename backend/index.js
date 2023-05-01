const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
express.urlencoded({ extended: true }) 
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful!"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  name: String,
  email: String, 
  description: String,
});

const User = new mongoose.model("User", userSchema);

app.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const description = req.body.description;
  const user = new User({ 
    name,  
    email, 
    description
}); 

  user.save();
  res.send({ message: "Data Saved!" }); 
});

app.get("/download", function (req, res) {
  res.download("./Muskan Singh's CV.pdf");
});

app.listen(process.env.PORT || 9002, () => {
  console.log("BE started at port 9002");
});
