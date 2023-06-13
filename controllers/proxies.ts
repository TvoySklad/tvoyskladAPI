import { Request, Response } from 'express';
import axios, { AxiosRequestConfig } from "axios";

export const registerOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const axiosConfig: AxiosRequestConfig = {
      params: req.query,
      headers: {
        'Access-Control-Allow-Origin': 'https://pay.tvoysklad.com/'
      }
    };

    const response = await axios.post('https://payment.alfabank.ru/payment/rest/register.do', {}, axiosConfig);
    res.status(response.status).send(response.data);
  } catch (error: any) {
    res.status(error.response.status).send(error.response.data);
  }
};

export const checkOrderStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const axiosConfig: AxiosRequestConfig = {
      params: req.query,
      headers: {
        'Access-Control-Allow-Origin': 'https://pay.tvoysklad.com/'
      }
    };

    const response = await axios.post('https://payment.alfabank.ru/payment/rest/getOrderStatus.do', {}, axiosConfig);
    res.status(response.status).send(response.data);
  } catch (error: any) {
    res.status(error.response.status).send(error.response.data);
  }
};
