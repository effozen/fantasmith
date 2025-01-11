import React, { type ReactNode } from 'react';
import Admonition from '@theme-original/Admonition';
import type AdmonitionType from '@theme/Admonition';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof AdmonitionType>;

export default function AdmonitionWrapper(props: Props): ReactNode {
  return (
    <>
      <Admonition {...props} />
    </>
  );
}
