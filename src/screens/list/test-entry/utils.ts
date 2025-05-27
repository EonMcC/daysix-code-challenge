import dayjs from "dayjs";
import { ERating, type ITest } from "../../../types";

export function calcTimeSinceTest(test: ITest) {
  const today = dayjs().startOf("day");
  const testDay = dayjs(test.date).startOf("day");
  const diff = today.diff(testDay, 'day');

  if (diff === 0) return "Today";
  if (diff === 1) return "Yesterday";

  return `${diff} days ago`;
}

export function getRatingClass(test: ITest) {
  if (test.rating === ERating.above) return "test-entry__reps--green";
  if (test.rating === ERating.average) return "test-entry__reps--yellow";
  return "test-entry__reps--red";
}