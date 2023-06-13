import express from "express";
import products from "../controllers/products.controllers";

const router = express.Router();

// retrieve all products or specific products (sale products included)

router.get("/:id?", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data;

    if (id == "onsale") {
      data = await products.getSaleItems();
    } else if (id) {
      [data] = await products.getOne(parseInt(id));
    } else {
      data = await products.getAll();
    }

    res.json(data);
  } catch (err) {
    next(err);
  }
});

// adding new product
router.post("/", async (req, res, next) => {
  try {
    let newProduct = req.body;
    let data = await products.addItem(newProduct);

    res.json(data);
  } catch (err) {
    next(err);
  }
});

//updating exisiting product
router.put("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let updatedProduct = req.body;
    let data = await products.updateProduct(updatedProduct, id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// removing an existing product
router.delete("/:id", async (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await products.removeProduct(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
