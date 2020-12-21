const routerx = require('express-promise-router');
const userController = require('../controllers/UserController.js');
const auth = require('../middlewares/auth');
const router = routerx();


//api/user/
router.get('/list',auth.verifyUsuario, userController.list);
router.post('/login', userController.login); 
router.post('/register', auth.verifyUsuario, userController.register);
router.put('/update',auth.verifyUsuario, userController.update);

module.exports = router;

