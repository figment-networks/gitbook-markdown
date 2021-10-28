import React from 'react';
import {StyledAlert} from "../../index.styles";

type BlockquoteProps = {
  children: React.ReactNode & React.ReactNode[];
};

const Blockquote = (props: BlockquoteProps): JSX.Element => {
  const {children} = props;
  return <StyledAlert message={children} type="info" showIcon />;
};

export default Blockquote;
