import {checkOrderStatus, registerOrder} from "../controllers/proxies";
const cors = require('cors');
const proxyRouter = require('express').Router();

const proxyCorsOptions = {
  origin: ['http://pay.tvoysklad.com', 'https://pay.tvoysklad.com', 'http://localhost:3000', 'https://localhost:3000']
};

router.post('/register', cors(proxyCorsOptions), registerOrder);

router.post('/check', cors(proxyCorsOptions),  checkOrderStatus);

module.exports = proxyRouter;
