import React from "react";
import "../Style/CSS/index.css";

// Typowanie propsów dla komponentu Button
interface ButtonProps {
  label: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
  backgroundColor?: string;
  style?: React.CSSProperties;
  selo?: "90" | "20"; // Typ dla 'selo'
  isChecked?: boolean; // Nowy props dla 'checkbox'
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  size = "medium",
  backgroundColor = "#ff6347",
  style,
  selo,
  isChecked = false, // Domyślnie checkbox jest nieaktywny
}) => {
  const buttonSizeClass =
    size === "small"
      ? "btn-small"
      : size === "large"
      ? "btn-large"
      : "btn-medium";

  // Dodanie dynamicznej klasy w zależności od stanu isChecked
  const checkedClass = isChecked ? "btn-checked" : "";

  return (
    <button
      onClick={onClick}
      className={`${buttonSizeClass} ${checkedClass}`} // Zastosowanie klasy dla checkboxa
      style={{ backgroundColor, ...style }}
    >
      {label}
    </button>
  );
};
