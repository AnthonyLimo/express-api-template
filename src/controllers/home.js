import { testEnvironmentalVariable } from '../settings';

export const indexPage = (req, res) => res.send(200).json({ message: testEnvironmentalVariable });
