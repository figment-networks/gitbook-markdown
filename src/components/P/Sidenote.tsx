import { Collapse } from 'antd'
import React from 'react'
import {StyledCollapse, StyledTitle} from './Sidenote.styles'

const {Panel} = Collapse

export default function SideNote({ text, children }: { text: string, children: any }): JSX.Element | null {

  const textMatches = text.match(/{%\s*sidenote\s*title="(.*)"\s*%}\n*(.*)/);

  if (textMatches) {
    const lastChild = children[children.length - 1] as string;

    if (children.length > 1) {
      children[children.length - 1] = lastChild.replace(
        /{%\s*endsidenote\s*%}/g,
        '',
      );
    }

    const firstNode = textMatches[1] as string;
    const renderedChildren = children.map((child, index) => {
      if (index === 0) {
        return `${firstNode} `;
      } else {
        return child;
      }
    });

    return (
      <StyledCollapse ghost defaultActiveKey={['1']}>
        <Panel header={<StyledTitle>{textMatches[1]}</StyledTitle>} key="1">
        <p>{renderedChildren}</p>
        </Panel>
      </StyledCollapse>
    );
  }

  return null;
}
