import React from 'react';

import {StyledListItem} from "./Li.styles";

type LiProps = {
  children: React.ReactNode & React.ReactNode[];
}

const Li = (props: LiProps): JSX.Element => {
  const {children} = props;
  return <StyledListItem>{children}</StyledListItem>;
};

export default Li;
