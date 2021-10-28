import React from 'react';
import {LinkOutlined} from "@ant-design/icons";

import {extractStringFromTree, stringToCssId} from "../../utils/string-utils";
import {LinkIcon, StyledH1, StyledH2, StyledH3} from "./H.styles";

type HProps = {
  size: 1 | 2 | 3;
}

const H = (props: HProps): JSX.Element | null => {
  const {size} = props;
  const text = extractStringFromTree(props);

  let Comp;
  if (size === 1) {
    Comp = StyledH1;
  } else if (size === 2) {
    Comp = StyledH2;
  } else {
    Comp = StyledH3;
  }

  if (text) {
    const id = stringToCssId(text);

    return (
      <Comp id={id}>
        {text}
        <a href={`#${id}`}>
          <LinkIcon>
            <LinkOutlined size={16} />
          </LinkIcon>
        </a>
      </Comp>
    );
  }

  return null;
};

export default H;
