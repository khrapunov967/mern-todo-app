import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../../services/user";
import { userSliceInitialState } from "../../types/store";

export const fetchUserInfo = createAsyncThunk(
    "user/fetchUserInfo",
    async () => {
        const user = await User.getUserInfo();
        return user;
    }
);

const initialState: userSliceInitialState = {
    name: "",
    email: "",
    isFetching: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserInfo.pending, (state, action) => {
                state.isFetching = true;
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.email = action.payload.email;
                state.name = action.payload.name;
                state.isFetching = false;
            })
            .addCase(fetchUserInfo.rejected, (state) => {
                state.isFetching = false;
                state.email = "";
                state.name = "";
            })
    }
});

export default userSlice.reducer;