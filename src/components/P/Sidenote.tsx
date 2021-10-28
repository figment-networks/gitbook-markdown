import { Collapse } from 'antd'
import React from 'react'
import styled from 'styled-components'

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

const StyledCollapse = styled(Collapse)`
  padding: 10px;
  background: rgba(114, 146, 176, 0.1);
  border-radius: 4px;
  margin: 15px 0;
`

const StyledTitle = styled.span`
  font-weight: 600;
`
