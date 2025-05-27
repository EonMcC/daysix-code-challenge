import { useContext, useEffect, useRef, useState } from "react";
import "./test.scss";
import { TestsContext } from "../../context/TestsProvider";
import SitStandAnimation from "../../assets/animations/sit-stand.gif";
import Edit from "../../assets/icons/edit.png";
import { RepInputModal } from "./rep-input-modal/RepInputModal";
import { useNavigate } from "react-router";
import { createNewTestEntry } from "./utils";

export const Test = () => {

  const navigate = useNavigate();
  const { tests, saveCurrentTest } = useContext(TestsContext);
  const timerId = useRef<number>(0);

  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [reps, setReps] = useState<number>(0);
  const [timer, setTimer] = useState(0);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(() => {
    return () => clearInterval(timerId.current);
  }, [])

  function handleStartEndClick() {
    if (isRunning) handleEnd();
    else handleStart();
  }

  function handleEnd() {
    createNewTestEntry(reps, tests, saveCurrentTest);
    navigate(`/result?variant=NEW`);
  }

  function handleStart() {
    setIsRunning(true);
    timerId.current = setInterval(() => {
      setTimer((prevTime => prevTime + 1))
    }, 1000)
  }

  function handleEditClick() {
    clearInterval(timerId.current);
    setShowModal(true);
  }

  return (
    <>
      <div className="test-screen">
        <h1>Sit & Stand Test</h1>

        <div className="test-screen__animation-cont">
          <img
            src={SitStandAnimation}
            alt=""
            aria-hidden="true"
            height="177"
            width="149"
          />
        </div>

        <p className="test-screen__timer">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>

        <hr />

        <div className="test-screen__counter-cont">
          <p>Reps Counter</p>
          <p>{reps}</p>
          <img
            src={Edit}
            alt="Input reps"
            onClick={handleEditClick}
          />
        </div>

        <hr />

        <button
          className="btn btn--primary"
          onClick={handleStartEndClick}
        >
          {isRunning ? "End Test" : "Start Test"}
        </button>
      </div>

      {showModal && (
        <RepInputModal
          updateCount={(event) => setReps(event)}
          close={() => setShowModal(false)}
        />
      )}
    </>
  );
};
