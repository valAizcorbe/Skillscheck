module.exports = {
  getInventory: (req, res, next) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(dbResponse => res.status(200).send(dbResponse))
      .catch(err => {
        res.status(500).send({
          errorMessage: "it's not freaking working"
        });
      });
  },
  createProduct: (req, res) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;
    db.create_product([name, price, img])
      .then(data => res.status(200).send(data))
      .catch(err => {
        res.status(500).send({ errorMessage: "it's not freaking working" });
      });
  },
  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;
    db.delete_product(id)
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "it's not freaking working" });
      });
  },
  updateProduct: (req, res) => {
    const { id } = req.params;
    const { name, price, img } = req.body;
    const db = req.app.get("db");
    db.update_product([name, price, img])
      .then(data => res.status(200).send(data))
      .catch(err => res.status(500).send(err));
  }
};
