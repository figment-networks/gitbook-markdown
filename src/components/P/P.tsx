import React from 'react';
import {Tag, Typography} from "antd";
import {FileOutlined} from "@ant-design/icons";

import {extractStringFromTree} from "../../utils/string-utils";
import {GitbookHintType, gitbookHintTypeToAntd} from "../../utils/markdown-utils";
import {StyledAlert} from "../../index.styles";
import VideoPlayer from "../VideoPlayer";

type PProps = {
  children: React.ReactNode & React.ReactNode[];
};

const P = (props: PProps) => {
  const {children} = props;

  const text = extractStringFromTree(props);

  if (typeof text === 'string') {
    if (text.includes('{% hint')) {
      const styleMatches = text.match(/{%\s*hint\s*style="(\w+)"\s*%}/);
      const textMatches = text.match(
        /{%\s*hint\s*style="\w+"\s*%}\s*(.*)/,
      );

      const style = styleMatches && styleMatches[1]
        ? gitbookHintTypeToAntd(styleMatches[1] as GitbookHintType)
        : 'info';

      if (textMatches) {
        const lastChild = children[children.length - 1] as string;

        if (children.length > 1) {
          children[children.length - 1] = lastChild.replace(
            /{%\s*endhint\s*%}/g,
            '',
          );
        }

        const firstNode = textMatches[1] as string;
        const renderedChildren = children.map((child, index) => {
          if (index === 0) {
            return firstNode;
          } else {
            return child;
          }
        });
        return (
          <StyledAlert
            message={<Typography.Text>{renderedChildren}</Typography.Text>}
            type={style as "info" | "success" | "warning" | "error" | undefined}
            showIcon
          />
        );
      } else {
        return null;
      }
    } else if (text.includes('{% embed')) {
      const linkComponent = children[1] as JSX.Element;
      const captionString = children[2] as string;
      const captionMatches = captionString.match(/.*caption="(.*?)"/);

      let caption = '';
      if (captionMatches) {
        caption = `Video: ${captionMatches[1]}`;
      }

      return (
        <VideoPlayer url={linkComponent.props.href} caption={caption} />
      );
    } else if (text.includes('{% code')) {
      const matches = text.match(/{%\s*code\s*title="([\w/.]+)"\s*%}/);
      if (matches && matches.length > 1) {
        return <Tag icon={<FileOutlined />}>{matches[1]}</Tag>;
      }

      return null;
    } else if (text.includes('{% endcode')) {
      return null;
    }
  }

  return <Typography.Paragraph>{children}</Typography.Paragraph>;
};

export default P;
