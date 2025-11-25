import type { RootState } from "../store";

const getTheme = (state: RootState) => state.theme.mode;

export { getTheme };
