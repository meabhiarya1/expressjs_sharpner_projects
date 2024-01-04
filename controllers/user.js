const User = require("../models/user");

exports.getUser = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
  }
};

exports.addUser = async (req, res, next) => {
  const { name, email, number } = req.body; // Destructure for clarity
  // console.log(name, email, number);

  try {
    const user = await User.create({ name, email, number });
    console.log("User created:", user);
    res.json(user);
  } catch (err) {
    console.error(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  await User.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.json("Deleted")
    })
    .catch((err) => console.log(err));
};
