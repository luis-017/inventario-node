const connection = require('../config/db');

// CREAR
exports.crearProducto = (req, res) => {
  connection.query("INSERT INTO productos SET ?", req.body, (err) => {
    if (err) throw err;
    res.send("Producto creado");
  });
};

// LISTAR
exports.listarProductos = (req, res) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// OBTENER POR ID
exports.obtenerProductoPorId = (req, res) => {
  connection.query("SELECT * FROM productos WHERE id = ?", [req.params.id], (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

// ACTUALIZAR
exports.actualizarProducto = (req, res) => {
  connection.query("UPDATE productos SET ? WHERE id = ?", [req.body, req.params.id], (err) => {
    if (err) throw err;
    res.send("Producto actualizado");
  });
};

// ELIMINAR
exports.eliminarProducto = (req, res) => {
  connection.query("DELETE FROM productos WHERE id = ?", [req.params.id], (err) => {
    if (err) throw err;
    res.send("Producto eliminado");
  });
};