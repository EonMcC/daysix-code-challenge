import type { Dayjs } from "dayjs";

// I would normally use an Enum, however with
// erasableSyntaxOnly turned on I used this workaround.
export const ERating = {
  above: "Above average",
  average: "Average",
  below: "Below average"
} as const;
export type ERatingType = (typeof ERating)[keyof typeof ERating];

export interface ITest {
  id: string;
  title: string;
  date: Dayjs;
  reps: number;
  rating: ERatingType;
}