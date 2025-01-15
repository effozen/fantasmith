import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof CodeBlockType>;

export default function CodeBlockWrapper(props: Props): JSX.Element {
  const title = props.className ? props.className.replace('language-', '') : undefined;

  return (
    <>
      <CodeBlock showLineNumbers title={title} {...props} />
    </>
  );
}
