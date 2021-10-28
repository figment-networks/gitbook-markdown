import React from 'react';

import {StyledLink} from "./A.styles";

type AProps = {
  children: React.ReactNode & React.ReactNode[];
  href?: string;
}
const A = (props: AProps): JSX.Element => {
  const {children, href} = props;
  return <StyledLink href={href} target="_blank" rel="noreferrer">{children}</StyledLink>
};

export default A;
