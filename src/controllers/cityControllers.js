const City = require("../models/City");

const cityService = require("../services/cityService");

let controller = {
  getCities: async function (req, res) {
    try {
      let cities = await City.find();
      res.json(cities);
    } catch (error) {
      res.json({ error: error });
    }
  },

  getCityById: async function (req, res) {
    const id = req.params.id;

    try {
      let cityId = await cityService.getCityId(id);
      res.json(cityId);
    } catch (error) {
      res.json({ error: error });
    }
  },

  getCityById: async function (req, res) {
    const id = req.params.id;
    //    req.query.id =

    console.log(id);
    res.json("OK");
  },

  addCity: async function (req, res) {
    try {
      // let city = await new City({
      //   country: req.body.country,
      //   city: req.body.city,
      //   description: req.body.description,
      //   image: req.body.image,
      // }).save();

      let cityObtained = await cityService.saveCity(
        req.body.country,
        req.body.city,
        req.body.description,
        req.body.image
      );

      res.json(cityObtained);
    } catch (error) {
      res.json({ error: error });
    }
  },
};

module.exports = controller;
