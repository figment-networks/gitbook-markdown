import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import Code from './components/Code/Code';
import Hr from "./components/Hr/Hr";
import A from "./components/A/A";
import P from "./components/P/P";
import Blockquote from "./components/Blockquote/Blockquote";
import H from "./components/H/H";
import Li from "./components/Li/Li";
import Img from "./components/Img/Img";

export type CustomMarkdownProps = {
  children: string;
}

const CustomMarkdown = (props: CustomMarkdownProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <ReactMarkdown
      plugins={[gfm]}
      rawSourcePos={true}
      children={children}
      components={{
        code({inline, className, children}) {
          return <Code className={className} inline={inline}>{children}</Code>
        },
        hr: ({sourcePosition}) => {
          return <Hr sourcePosition={sourcePosition} />;
        },
        a: ({href}) => {
          return <A href={href} />;
        },
        p: ({children}) => {
          return <P>{children}</P>
        },
        blockquote: ({children}) => {
          return <Blockquote>{children}</Blockquote>;
        },
        h1: ({...props}) => {
          return <H size={1} {...props}/>;
        },
        h2: ({...props}) => {
          return <H size={2} {...props}/>;
        },
        h3: ({...props}) => {
          return <H size={3} {...props}/>;
        },
        li: ({children}) => {
          return <Li>{children}</Li>
        },
        img: ({src, alt}) => {
          return <Img src={src as string} alt={alt} />
        },
      }}
    />
  );
};

export default CustomMarkdown;
