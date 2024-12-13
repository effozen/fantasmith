import React from 'react';
import Copyright from '@theme-original/Footer/Copyright';
import type CopyrightType from '@theme/Footer/Copyright';
import type {WrapperProps} from '@docusaurus/types';
import {SocialIcons} from "@site/src/components/SocialIcons";

type Props = WrapperProps<typeof CopyrightType>;

export default function CopyrightWrapper(props: Props): JSX.Element {
  return (
    <div style={{display: "flex", flexDirection: "column", gap:"1.25rem"}}>
      <SocialIcons />
      <Copyright {...props} />
    </div>
  );
}
