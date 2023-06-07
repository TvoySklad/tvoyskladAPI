import {checkOrderStatus, registerOrder} from "../controllers/proxies";

const proxyRouter = require('express').Router();

router.post('/register', registerOrder);

router.post('/check', checkOrderStatus);

module.exports = proxyRouter;
