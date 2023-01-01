
import { useContext } from "react";
import { MenuContext } from "../context/menucontext";

export const useTheme = () => useContext(MenuContext)