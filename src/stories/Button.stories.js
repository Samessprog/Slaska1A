import { jsx as _jsx } from "react/jsx-runtime";
import Button from "../Components/Button";
export default {
    title: "Components/Navbar",
    component: Button,
};
export const Red = () => _jsx(Button, { label: "Press", background: "red" });
export const Blue = () => _jsx(Button, { label: "Press", background: "blue" });
