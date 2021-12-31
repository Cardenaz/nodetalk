const express = require('express'); 

const planetsRouter = express.Router(); 

planetsRouter.get('/plantes', getAllPlanets);

module.exports = planetsRouter; 

