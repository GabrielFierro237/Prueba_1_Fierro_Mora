const { Router } = require("express");
const { FetchData } = require("../lib/data");

const router = Router();
//endpoints
router
  .get("/personaje", (req, res) => {
    const {
      query: { id },
    } = req;
    res.json({
      msg: `Datos con el id: ${id}`,
      body: [
        (async () => {
          console.log(await FetchData.getCharacter(id));
        })(),
      ],
    });
  })
  .get("/array", (req, res) => {
    const {
        query: [ids],
      } = req;
      res.json({
        msg: `Datos con el numero de pagina: ${gene}`,
        body: [
          (async () => {
            console.log(await FetchData.getSpecificCharacters(ids));
          })(),
        ],
      });
  })
  .get("/numpag", (req, res) => {
    const {
      query: { pag },
    } = req;
    res.json({
      msg: `Datos con el numero de pagina: ${pag}`,
      body: [
        (async () => {
          console.log(await FetchData.getByPage(pag));
        })(),
      ],
    });
  })
  .get("/genero", (req, res) => {
    const {
      query: { gene },
    } = req;
    res.json({
      msg: `Datos con el numero de pagina: ${gene}`,
      body: [
        (async () => {
          console.log(await FetchData.getByCharacterGender(gene));
        })(),
      ],
    });
  });

module.exports.RouterIndex = router;
