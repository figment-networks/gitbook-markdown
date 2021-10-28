import React from 'react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Typography} from 'antd';

type CodeProps = {
  className?: string;
  inline?: boolean;
  children: React.ReactNode & React.ReactNode[];
};

const Code = (props: CodeProps): JSX.Element => {
  const {className, inline, children} = props;
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter
      language={match[1]}
      PreTag="div"
      customStyle={{margin: '1.5em 0'}}
      style={dracula}
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <Typography.Text code>{children}</Typography.Text>
  );
};

export default Code;
