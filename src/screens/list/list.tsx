import { useNavigate } from "react-router";
import "./list.scss";
import { useContext } from "react";
import { TestsContext } from "../../context/TestsProvider";
import { TestEntry } from "./test-entry/TestEntry";
import Plus from "../../assets/icons/plus.png";

export const List = () => {

  const navigate = useNavigate();
  const { tests } = useContext(TestsContext);

  return (
    <div className="list-screen">
      <header>
        <div className="list-screen__header-content">
          <h1>Sit & Stand Tests</h1>
          <button
            className="list-screen__header-content__btn"
            onClick={() => navigate("/test")}
          >
            <img src={Plus} alt="Start new test" />
          </button>
        </div>
      </header>

      <ul>
        {tests.map((test) => {
          return (
            <TestEntry test={test} key={test.id} />
          )
        })}
      </ul>

    </div>
  );
};
