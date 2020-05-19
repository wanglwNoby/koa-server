const Router = require('koa-router');
const loginController = require('../controllers/loginController.js');

const router = new Router();

router.get('/check', loginController.check);
router.post('/logon', loginController.logon);

module.exports = router;
