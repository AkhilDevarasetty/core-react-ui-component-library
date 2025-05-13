import React from 'react';
import { ButtonProps } from '@lib/types/ButtonProps';

/**
 * A simple button component for demonstration purposes.
 */
export const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className }) => (
  <button type={type} onClick={onClick} className={className}>
    {label}
  </button>
);

export default Button;
