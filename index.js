const { query } = require("express");
const express = require("express");

//genero una aplicacion express
const app = express();

const { RouterIndex } = require("./routes/index");

app.use("/prueba", RouterIndex);

// const { FetchData } = require("./lib/data");
// (async () => {
//   console.log(await FetchData.getByCharacterGender("male"));
// })();
app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
