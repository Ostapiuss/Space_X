import React from "react";

import { styled } from "@stitches/react";

interface ButtonInterface {
  className?: string,
  onClick?: () => void,
  text: string,
  type?: "button" | "reset" | "submit",
}
const StyledButtonModal = styled("button", {
  backgroundColor: 'transparent',
  border: '2px solid white',
  padding: '4px 13px',
  color: 'white',
  fontWeight: 500,
  cursor: 'pointer',
  textTransform: 'uppercase',
  lineHeight: 1.71,
  letterSpacing: '2px',

  transition: 'background-color 0.2s linear, color 0.2s linear',

  '&:hover': {
    backgroundColor: 'white',
    color: '#11141f'
  }
});

const Button: React.FC<ButtonInterface> = ({ className, text, onClick, type }) => {
  // @ts-ignore
  return (
    <StyledButtonModal className={className} onClick={onClick} type={type}>
      { text }
    </StyledButtonModal>
  )
};

export default Button;
