import { useDispatch, useSelector } from "react-redux";
import style from "./Cell.module.css";
import { useEffect, useState } from "react";
import { setTurn } from "../redux/modules/gameStatusReducer";
import { setGameState } from "../redux/modules/gameStatusReducer";
function Cell({ id }) {
  const dispatch = useDispatch();
  const turn = useSelector((store) => store.gameStatus.turn);
  const [value, setValue] = useState("");

  const onClickHandler = (event) => {
    event.preventDefault();
    dispatch(setGameState(+id));
    setValue(turn);
    dispatch(setTurn());
  };

  return (
    <button
      className={style.cell}
      onClick={onClickHandler}
      disabled={value !== ""}
    >
      {value}
    </button>
  );
}

export default Cell;
