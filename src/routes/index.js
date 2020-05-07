import express from 'express';
import { testEnvironmentalVariable } from '../settings';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentalVariable }));

export default indexRouter;
