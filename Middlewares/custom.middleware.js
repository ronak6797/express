function createUser(req, res) {
  console.log(">>>req", req.body);
  User.create(req.body)
    .then(() => {
      res.status(201).send("Succesffully created!!");
    })
    .catch((err) => {
      res.status(500).json({ Message: err });
    });
}

module.exports = { createUser }