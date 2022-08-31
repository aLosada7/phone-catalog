// copied from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader
import { css } from '@emotion/react';

import { useThemeContext } from '@edene/foundations';

const loader = (color: string) => css`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${color};
  width: 50px;
  height: 50px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: auto;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  const { theme } = useThemeContext();

  return <div css={loader(theme.color)}></div>;
};
