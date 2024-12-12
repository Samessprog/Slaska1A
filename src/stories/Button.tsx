// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className='tete' onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
      {label}
    </button>
  );
};
