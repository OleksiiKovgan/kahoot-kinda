import { useDispatch } from "react-redux";
import type { AppDispatch } from "../reduxStore/store";

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
