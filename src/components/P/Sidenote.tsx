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

    return (
      <StyledCollapse ghost defaultActiveKey={['1']}>
        <Panel header={<StyledTitle>{textMatches[1]}</StyledTitle>} key="1">
        <p>{children}</p>
        </Panel>
      </StyledCollapse>
    );
  }

  return null;
}
