const apiRouterUser = require('./users.js');
const routerx = require('express-promise-router');
const apiRouterCategoria =require('./categoria');
const apiRouterArticulo = require('./articulo');

const router = routerx();

router.use('/usuario', apiRouterUser); //.com/api/user
router.use('/categoria', apiRouterCategoria); //.com/api/user
router.use('/articulo', apiRouterArticulo);

module.exports = router;