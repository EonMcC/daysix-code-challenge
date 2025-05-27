import { createContext, useEffect, useState } from "react";
import type { FC, ReactNode, Dispatch, SetStateAction } from "react";
import { ERating, type ITest } from "../types";
import { loadFromLS, saveToLS } from "../helpers/storage-helper";
import dayjs from "dayjs";

const testsState = {
  tests: [],
  currentTest: {
    id: "",
    title: "",
    date: dayjs(),
    reps: 0,
    rating: ERating.average
  },
  setTests: () => [],
  addToTests: () => [],
  saveCurrentTest: () => { }
}

interface ITestCtx {
  tests: ITest[];
  currentTest: ITest;
  setTests: Dispatch<SetStateAction<ITest[]>>;
  addToTests: (test: ITest) => void;
  saveCurrentTest: (test: ITest) => void;
}

const TestsContext = createContext<ITestCtx>(testsState);

const TestsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [tests, setTests] = useState<ITest[]>([]);
  const [currentTest, setCurrentTest] = useState<ITest>({
    ...testsState.currentTest
  });

  useEffect(() => {
    setTests(loadFromLS);
  }, [])

  function addToTests(test: ITest) {
    setTests((prevTests) => {
      const newTestsCtx = [test, ...prevTests];
      saveToLS(newTestsCtx);
      return newTestsCtx;
    })
  }

  function saveCurrentTest(test: ITest) {
    setCurrentTest(test);
  }

  return (
    <TestsContext.Provider value={{ tests, currentTest, setTests, addToTests, saveCurrentTest }}>
      {children}
    </TestsContext.Provider>
  )
}

export { TestsProvider, TestsContext }