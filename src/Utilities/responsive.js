import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 500px) {
      ${props}
    }
  `;
};
export const tab = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};
export const fourK = (props) => {
  return css`
    @media only screen and (min-width: 1536px) {
      ${props}
    }
  `;
};
