import styled, {css} from "styled-components";

const headingWithLinkMixin = css`
  margin-left: -20px;
  padding-left: 20px;
  position: relative;

  a {
    visibility: hidden;
  }

  &:hover {
    a {
      visibility: visible;
    }
  }
`;

export const StyledH1 = styled.h1`
  font-size: 30px;

  ${headingWithLinkMixin}
`;

export const StyledH2 = styled.h2`
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 24px;

  ${headingWithLinkMixin}
`;

export const StyledH3 = styled.h3`
  margin-top: 0.75em;
  margin-bottom: 0.75em;
  font-size: 17px;

  ${headingWithLinkMixin}
`;

export const LinkIcon = styled.div`
  position: absolute;
  left: -4px;
  top: 0;

  svg {
    color: #777;
  }
`;

