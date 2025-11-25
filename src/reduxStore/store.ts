import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
import storage from "redux-persist/lib/storage";
import playersSlice from "./game/gameSlice";
import themeSlice from "./theme/themeSlice";

const persistGameConfig = {
  key: "game",
  storage: storageSession,
  blacklist: [],
};

const persistThemeConfig = {
  key: "theme",
  storage: storage,
  whitelist: ["mode"],
};

const rootReducer = combineReducers({
  game: persistReducer(persistGameConfig, playersSlice),
  theme: persistReducer(persistThemeConfig, themeSlice),
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
