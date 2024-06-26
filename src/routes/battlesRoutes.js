const express = require('express');
const router = express.Router();
const battlesController = require('../controllers/battlesController');

router.post('/battles', battlesController.createBattle);
router.get('/battles', battlesController.getAllBattles);
router.get('/battles/:name', battlesController.getBattlesByHero);

module.exports = router;