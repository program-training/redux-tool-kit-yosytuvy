import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "./animalSlice";

const store = configureStore({
    reducer: {
        animal: animalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
