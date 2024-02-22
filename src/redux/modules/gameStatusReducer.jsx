import { createSlice } from "@reduxjs/toolkit";
const CELL_NUMBER = 9;

const initialState = {
  statusArr: [
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
    "null",
  ],
  isEnd: false,
  turn: "X",
};

const gameStatusSlice = createSlice({
  name: "gameStatus",
  initialState,
  reducers: {
    setGameState(state, action) {
      state.statusArr[action.payload] = state.turn;
    },
    setTurn(state, action) {
      switch (state.turn) {
        case "O":
          state.turn = "X";
          break;
        case "X":
          state.turn = "O";
          break;
        default:
          break;
      }
    },
    setEnd(state, action) {
      state.isEnd = action.payload;
    },
  },
});

export const { setGameState, setTurn } = gameStatusSlice.actions;
export default gameStatusSlice.reducer;
