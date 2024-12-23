import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/DocItem/Content';

import styles from './styles.module.css';
// import TagsListInline from "@theme/TagsListInline";
import Tag from "@theme/Tag";

/**
 Title can be declared inside md content or declared through
 front matter and added manually. To make both cases consistent,
 the added title is added under the same div.markdown block
 See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120

 We render a "synthetic title" if:
 - user doesn't ask to hide it with front matter
 - the markdown content does not already contain a top-level h1 heading
 */
function useSyntheticTitle(): string | null {
  const {metadata, frontMatter, contentTitle} = useDoc();
  const shouldRender =
    !frontMatter.hide_title && typeof contentTitle === 'undefined';
  if (!shouldRender) {
    return null;
  }
  return metadata.title;
}

/**
 * 주어진 날짜를 "YYYY년 MM월 DD일 W요일" 형식의 문자열로 변환합니다.
 * @param date - 변환할 날짜 (Date 객체 또는 타임스탬프)
 * @returns 형식화된 날짜 문자열
 */
function formatTimestamp(date: Date | number): string {
  // Date 객체로 변환
  const d = typeof date === 'number' ? new Date(date) : date;

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(d.getDate()).padStart(2, '0');

  // 요일 배열 (일요일부터 시작)
  const weekDays = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const weekDay = weekDays[d.getDay()];

  return `${year}년 ${month}월 ${day}일 ${weekDay}`;
}

function TagsList({tags}) {
  return (<ul className={clsx(styles.tags, 'padding--none')}>
    {tags.map((tag) => (
      <li key={tag.permalink} className={styles.tag}>
        <Tag {...tag} />
      </li>
    ))}
  </ul>);
}

export default function DocItemContent({children}: Props): JSX.Element {
  const syntheticTitle = useSyntheticTitle();
  const {metadata} = useDoc();
  const {editUrl, lastUpdatedAt, lastUpdatedBy, tags} = metadata;
  const formatedLastUpdatedAt = formatTimestamp(lastUpdatedAt);

  return (
    <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
      {syntheticTitle && (
        <header className={styles.titleHeader}>
          <b className={styles.timestamp}>
            <time itemProp={formatedLastUpdatedAt}>
              {formatedLastUpdatedAt}
            </time>
          </b>
          <Heading as="h1">{syntheticTitle}</Heading>
          <div className={styles.titleCol}>
            <TagsList tags={tags}/>
          </div>
        </header>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
