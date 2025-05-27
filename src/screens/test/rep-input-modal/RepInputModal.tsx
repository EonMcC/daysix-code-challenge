import { useState, type FC } from "react";
import "./RepInputModal.scss";
import Close from "../../../assets/icons/close.png";

export const RepInputModal: FC<{
  updateCount: (count: number) => void;
  close: () => void;
}> = ({
  updateCount,
  close
}) => {

    const [count, setCount] = useState(0);

    function handleUpdateClick(count: number) {
      updateCount(count);
      close();
    }

    return (
      <>
        <div
          className="modal-mask"
          onClick={close}
        />

        <div className="rep-input-modal">
          <p>Edit Reps</p>

          <img
            src={Close}
            alt="Close modal"
            className="rep-input-modal__close-btn"
            onClick={close}
          />

          <label htmlFor="count">Count</label>
          <input
            name="count"
            type="number"
            onChange={(event) => setCount(+event.target.value)}
          />

          <button
            className="btn btn--tertiary"
            onClick={() => handleUpdateClick(count)}
          >
            Update
          </button>
        </div>
      </>
    )
  }