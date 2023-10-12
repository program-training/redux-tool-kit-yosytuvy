import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalSliceState {
    animal: string;
}

const initialState: AnimalSliceState = { animal: "" };
const animalSlice = createSlice({
    name: "animalSlice",
    initialState: initialState,
    reducers: {
        update(state: AnimalSliceState, action: PayloadAction<string>) {
            state.animal = action.payload;
            return state;
        },
    },
});

export const { update } = animalSlice.actions;
export default animalSlice.reducer;
