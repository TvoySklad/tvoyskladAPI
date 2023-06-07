import { Request, Response } from 'express';
import axios from "axios";

export const registerOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.post('https://payment.alfabank.ru/payment/rest/register.do', {}, {
         params: req.query
        });
        res.status(response.status).send(response.data);
    } catch (error: any) {
        res.status(error.response.status).send(error.response.data);
    }
};

export const checkOrderStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await axios.post('https://payment.alfabank.ru/payment/rest/getOrderStatus.do', {}, {
            params: req.query
        })
        res.status(response.status).send(response.data);
    } catch (error: any) {
        res.status(error.response.status).send(error.response.data);
    }
};
