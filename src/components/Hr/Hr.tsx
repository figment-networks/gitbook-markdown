import React from 'react';
import {Divider} from "antd";
import {Position} from "react-markdown/lib/ast-to-react";

type HrProps = {
  sourcePosition?: Position;
}

const Hr = (props: HrProps): JSX.Element | null => {
  const {sourcePosition} = props;
  if (sourcePosition && sourcePosition.start.line !== 1) {
    return <Divider />;
  } else {
    return null;
  }
};

export default Hr;
