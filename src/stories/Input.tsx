// Input.tsx
import React from "react";

interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: "text" | "password";
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  error,
  type = "text",
}) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{ borderColor: error ? "red" : "gray" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
