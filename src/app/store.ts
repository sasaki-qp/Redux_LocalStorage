import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from "../slice/userSlice"
import todoReducer from "../slice/todoSlice"
import { load, LoadOptions, RLSOptions, save } from "redux-localstorage-simple"

const loadOptions: LoadOptions = {
  namespace: "user",
}

const saveOptions: RLSOptions = {
  ignoreStates: ["todo"],
  namespace: "user",
}

export const store = configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
  preloadedState: load(loadOptions),
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(save(saveOptions))
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
