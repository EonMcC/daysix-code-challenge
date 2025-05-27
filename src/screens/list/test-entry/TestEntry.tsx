import { useContext, type FC } from "react";
import { type ITest } from "../../../types";
import NavArrowRight from "../../../assets/icons/nav-arrow-right.png";
import "./TestEntry.scss";
import { useNavigate } from "react-router";
import { TestsContext } from "../../../context/TestsProvider";
import { calcTimeSinceTest, getRatingClass } from "./utils";


export const TestEntry: FC<{ test: ITest }> = ({ test }) => {

  const navigate = useNavigate();
  const { saveCurrentTest } = useContext(TestsContext);

  const timeSinceTest = calcTimeSinceTest(test);

  function handleTestClick() {
    saveCurrentTest(test);
    navigate("/result?variant=OLD");
  }

  return (
    <li
      className="test-entry"
      onClick={handleTestClick}
    >
      <div className="test-entry__overview">
        <p><strong>{test.title}</strong></p>
        <p>{timeSinceTest}</p>
      </div>

      <div className="test-entry__reps">
        <p><strong>Score: {test.reps}</strong></p>
        <p className={getRatingClass(test)}><strong>{test.rating}</strong></p>
      </div>

      <img
        src={NavArrowRight}
        alt="View test"
        height="34"
        width="34"
      />
    </li>
  )
}