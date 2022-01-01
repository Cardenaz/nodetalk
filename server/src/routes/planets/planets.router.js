const express = require('express'); 

const {getAllPlanets,} = require("./planets.controller"); 

const planetsRouter = express.Router(); 

planetsRouter.get('/plantes', getAllPlanets);

module.exports = planetsRouter; 

