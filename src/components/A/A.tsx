import React from 'react';

import {StyledLink} from "./A.styles";

type AProps = {
  href?: string;
}
const A = (props: AProps): JSX.Element => {
  const {href} = props;
  return <StyledLink href={href} target="_blank" rel="noreferrer" />
};

export default A;
