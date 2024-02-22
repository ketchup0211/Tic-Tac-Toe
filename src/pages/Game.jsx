import style from "./Game.module.css";
import Cell from "../components/Cell";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Game() {
  const statusArr = useSelector((store) => store.gameStatus.statusArr);
  useEffect(() => {
    //test code
    // console.log(statusArr);
    // statusArr.map((item) => console.log(item));
    // 종료 조건을 충족하는지 확인, 종료 조건 충족 시 alert 창 띄우기.
  }, [statusArr]);
  //[O, O, X, O, ...]
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
