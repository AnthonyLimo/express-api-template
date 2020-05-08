import { testEnvironmentalVariable } from '../settings';

export const indexPage = (req, res) => {
  res.json({ message: testEnvironmentalVariable });
};
