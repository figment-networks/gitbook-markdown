import styled from "styled-components";

export const StyledLink = styled.a`
  &&& {
    color: ${({theme}) => theme.colors.yellowDark};

    &:hover {
      text-decoration: underline;
    }
  }
`;
