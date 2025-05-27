import { useContext, useState } from "react";
import "./Result.scss";
import { useNavigate, useSearchParams } from "react-router";
import { ResultText } from "./result-text/ResultText";
import { TestsContext } from "../../context/TestsProvider";
import dayjs from "dayjs";
import NavArrowLeft from "../../assets/icons/nav-arrow-left.png";

export const Result = () => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const variant = searchParams.get("variant");
  const isNew = variant === "NEW";

  const { currentTest, addToTests } = useContext(TestsContext);

  const [showAll, setShowAll] = useState(false);

  function handleSubmit() {
    addToTests(currentTest);
    navigate("/");
  }

  return (
    <div className="result">
      {isNew && <h1 className="result__top-line">Test Result</h1>}
      {!isNew && (
        <div className="result__top-line">
          <img
            src={NavArrowLeft}
            alt="Go back"
            height="34"
            width="34"
            onClick={() => navigate("/")}
          />
          <h1>{currentTest.title}</h1>
        </div>
      )}

      {isNew && <p>Hi Jane, great job on doing another sit stand test. Your results are in.</p>}
      {!isNew && <p>Test date {dayjs(currentTest.date).format("DD MMM YYYY")}</p>}

      <hr />

      <div className="result__repetitions-cont">
        <p>Repetitions</p>
        <p>{currentTest.reps}</p>
      </div>

      <hr />

      <div className="result__comparison-cont">
        <div className="result__comparison-cont__line">
          <p>Above Average: </p>
          <p>Men: &gt;14, Women: &gt;20</p>
        </div>

        <hr />

        <div className="result__comparison-cont__line">
          <p>Average: </p>
          <p>Men: 10-14, Women: 12-19</p>
        </div>

        <hr />

        <div className="result__comparison-cont__line">
          <p>Below Average: </p>
          <p>Men: &lt;10, Women: &lt;12</p>
        </div>

        <hr />
      </div>

      <p>How does this compare</p>
      <ResultText
        reps={currentTest.reps}
        showAll={showAll}
      />

      <button
        className="result__view-btn"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "View less" : "View more"}
      </button>

      <div className="result__btn-cont">
        <button
          className="btn btn--secondary"
          onClick={() => navigate("/test")}
        >
          {isNew ? "Try Again" : "Start New Test"}
        </button>

        {isNew && (
          <button
            className="btn btn--primary"
            onClick={handleSubmit}
          >
            Submit Result
          </button>
        )}
      </div>
    </div>
  )
}