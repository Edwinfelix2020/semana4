const router = require('express').Router()
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth');


//api/user/
router.get('/list', auth.verificarVendedor, userController.list);
router.post('/register', auth.verificarAdministrador, userController.register);
router.put('/update', auth.verificarAdministrador, userController.update);

router.post('/signin', userController.signin);

module.exports = router;
