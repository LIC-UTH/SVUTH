import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  info: [],
  loading: false,
  error: null,
};
export const loginPage = createAsyncThunk(
  "auth/authenticate",
  async (combinedData) => {
    try {
      const response = await axios.post(
        `https://uth-api-boot.ut.edu.vn/api/v1/auth/authenticate?g-recaptcha-response=${combinedData.recaptcha}`,
        {
          username: combinedData.username,
          password: combinedData.password,
        }
      );
      const { token } = response.data.body;

      if (token) {
        const account = { token };
        localStorage.setItem("account", token);
        console.log("LocalStorage set: ", JSON.stringify(account));
      } else {
        console.error("Token not found in response");
      }

      return response.data;
    } catch (error) {
      console.error("Error during authentication:", error);
      throw error;
    }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginPage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginPage.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.body;
      })
      .addCase(loginPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
