module.exports = {
  getProduct: (req, res) => {
    const db = req.app.get("db");
    db.get_product()
      .then(dbResponse => res.status(200).send(dbResponse))
      .catch(err => {
        res.status(500).send({
          errorMessage: "it's not freaking working"
        });
      });
  }
};
