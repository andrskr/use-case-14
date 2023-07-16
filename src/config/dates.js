import { randomIntFromInterval } from "../lib/random-int-from-interval";

const defaultDateFormatParams = {
  value: { weekday: "long", year: "numeric", month: "long", day: "numeric" },
};

const DATES_COUNT = 4;

export const dates = Array.from({ length: DATES_COUNT }, (_, index) => {
  return {
    id: index,
    value: new Date(
      Date.UTC(
        randomIntFromInterval(2000, 2023),
        randomIntFromInterval(0, 11),
        randomIntFromInterval(1, 31),
        randomIntFromInterval(0, 23),
        randomIntFromInterval(0, 59),
        randomIntFromInterval(0, 59)
      )
    ),
    formatParams: defaultDateFormatParams,
  };
});
