import { styled } from "@stitches/react";

export const StyledLaunchCard = styled("div", {
  backgroundColor: '#18181a',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 15px 10px',

  '> .launch-card-details': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  }
});
