import { ERating, type ITest } from "../../types";
import dayjs from "dayjs";

export function getTestRating(score: number) {
  if (score > 14) return ERating.above;
  if (score >= 10) return ERating.average;
  return ERating.below;
}

export function createNewTestEntry(
  reps: number,
  tests: ITest[],
  saveCurrentTest: (test: ITest) => void
) {
  saveCurrentTest({
    id: crypto.randomUUID(),
    title: `Test ${tests.length + 1}`,
    date: dayjs(),
    reps,
    rating: getTestRating(reps)
  })
}