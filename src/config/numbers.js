import { randomNumberFormInterval } from "../lib/random-number-from-interval";
import { randomIntFromInterval } from "../lib/random-int-from-interval";

const defaultNumberFormatParams = {
  value: { minimumFractionDigits: 3, maximumSignificantDigits: 3 },
};

export const numbers = [
  {
    id: 0,
    value: randomNumberFormInterval(0, 100, randomIntFromInterval(0, 3)),
    formatParams: defaultNumberFormatParams,
  },
  {
    id: 1,
    value: randomNumberFormInterval(1000, 9_999, randomIntFromInterval(0, 3)),
    formatParams: defaultNumberFormatParams,
  },
  {
    id: 2,
    value: randomNumberFormInterval(
      100_000,
      999_999,
      randomIntFromInterval(0, 3)
    ),
    formatParams: defaultNumberFormatParams,
  },
  {
    id: 3,
    value: randomNumberFormInterval(
      1_000_000,
      999_999_999,
      randomIntFromInterval(0, 3)
    ),
    formatParams: defaultNumberFormatParams,
  },
];
