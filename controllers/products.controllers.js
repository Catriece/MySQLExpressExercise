import query from "../db/utils";

const getAll = async () => {
  return await query(
    "SELECT ProductID, CategoryID, Name, Price, StockLevel FROM products ORDER BY Name"
  );
};

const getOne = async (ProductID) => {
  return await query(
    "SELECT ProductID, CategoryID, Name, Price, StockLevel FROM products WHERE ProductID = ?",
    [ProductID]
  );
};

const getSaleItems = async () => {
  return await query(
    `SELECT ProductID, CategoryID, Name, Price, StockLevel FROM products WHERE OnSale = ${1}`
  );
};

const addItem = async (newProduct) => {
  return await query("INSERT INTO products SET ?", [newProduct]);
};

const updateProduct = async (updatedProduct, ProductID) => {
  return await query("UPDATE products SET ? WHERE ProductID = ?", [
    updatedProduct,
    ProductID,
  ]);
};

const removeProduct = async (ProductID) => {
  return await query("DELETE FROM products WHERE ProductID = ?", [ProductID]);
};

export default {
  getAll,
  getOne,
  getSaleItems,
  addItem,
  updateProduct,
  removeProduct,
};
