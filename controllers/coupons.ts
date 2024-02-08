const Coupon = require('../models/Coupon');
import { Request, Response } from 'express';

export const getCoupon = async (req: Request, res: Response): Promise<void> => {
    try {
        const coupon: any = await Coupon.findOne({ value: req.params.value });
        if (coupon) {
            if (coupon.isUsed) {
                res.status(400).json({ error: 'Промокод уже был использован' });
            } else {
                res.json(coupon);
            }
        } else {
            res.status(404).json({ error: 'Такого промокода не существует' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};

export const markCouponAsUsed = async (req: Request, res: Response): Promise<void> => {
    try {
        const coupon: any = await Coupon.findByIdAndUpdate(req.params.id, { isUsed: true });
        res.send(coupon);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Произошло что-то совсем немыслимое' });
    }
};

export const createCoupon = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            value,
            discount,
            isUsed,
            city,
            periods
        } = req.body;

        const coupon: any = await Coupon.create({
            value,
            discount,
            isUsed,
            city,
            periods
        });

        res.send(coupon);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
};
