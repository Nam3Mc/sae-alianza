const express = require('express');
const router = express.Router();
const pageController = require('../controllers/pageController');

router.get('/', pageController.getInicio);
router.get('/quienes-somos', pageController.getQuienesSomos);
router.get('/que-hacemos', pageController.getQueHacemos);
router.get('/programas', pageController.getProgramas);
router.get('/transparencia', pageController.getTransparencia);
router.get('/alianzas', pageController.getAlianzas);
router.get('/participa', pageController.getParticipa);
router.get('/contacto', pageController.getContacto);

module.exports = router;