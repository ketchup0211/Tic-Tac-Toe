import { configureStore } from "@reduxjs/toolkit";
import gameStatus from "../modules/gameStatusReducer";
const store = configureStore({
  reducer: {
    gameStatus,
  },
});

export default store;
