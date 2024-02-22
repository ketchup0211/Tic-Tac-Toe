import style from "./Game.module.css";
import Cell from "../components/Cell";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const CELL_NUMBER = 9;
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const { statusArr, turn } = useSelector((store) => store.gameStatus);
  useEffect(() => {
    // 현재 마크
    const currentMark = turn;

    // 승리 조건 확인
    const checkWinCondition = () => {
      for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
        const [a, b, c] = WINNING_COMBINATIONS[i];
        if (
          statusArr[a] === currentMark &&
          statusArr[b] === currentMark &&
          statusArr[c] === currentMark
        ) {
          return true;
        }
      }
      return false;
    };

    // 승리 조건 충족 시 알럿 창 띄우기
    if (checkWinCondition()) {
      alert(`Player ${currentMark} Wins!`);
    }
  }, [statusArr, turn]);
  return (
    <div className={style.board}>
      <div className={style.row}>
        <Cell id="0" />
        <Cell id="1" />
        <Cell id="2" />
      </div>
      <div className={style.row}>
        <Cell id="3" />
        <Cell id="4" />
        <Cell id="5" />
      </div>
      <div className={style.row}>
        <Cell id="6" />
        <Cell id="7" />
        <Cell id="8" />
      </div>
    </div>
  );
}

export default Game;
