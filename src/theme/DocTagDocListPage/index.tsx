import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  usePluralForm,
} from '@docusaurus/theme-common';
import Translate, {translate} from '@docusaurus/Translate';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/DocTagDocListPage';
import Unlisted from '@theme/ContentVisibility/Unlisted';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

// Very simple pluralization: probably good enough for now
function useNDocsTaggedPlural() {
  const {selectMessage} = usePluralForm();
  return (count: number) =>
    selectMessage(
      count,
      translate(
        {
          id: 'theme.docs.tagDocListPageTitle.nDocsTagged',
          description:
            'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One doc tagged|{count} docs tagged',
        },
        {count},
      ),
    );
}

function usePageTitle(props: Props): string {
  const nDocsTaggedPlural = useNDocsTaggedPlural();
  return translate(
    {
      id: 'theme.docs.tagDocListPageTitle',
      description: 'The title of the page for a docs tag',
      message: '{nDocsTagged} with "{tagName}"',
    },
    {nDocsTagged: nDocsTaggedPlural(props.tag.count), tagName: props.tag.label},
  );
}

function DocItem({doc, docImg}: { doc: Props['tag']['items'][number], docImg:string }): JSX.Element {

  return (
    <article className={clsx(styles.tagContainer)}>
      <Link to={doc.permalink}>
        <Heading as="h2">{doc.title}</Heading>
      </Link>
      <div className={styles.docImgContainer}>
        <img src={docImg} className={styles.docImg}/>
      </div>
      {doc.description && <p>{doc.description}</p>}
    </article>
  );
}

function DocTagDocListPageMetadata({
                                     title,
                                     tag,
                                   }: Props & { title: string }): JSX.Element {
  return (
    <>
      <PageMetadata title={title} description={tag.description}/>
      <SearchMetadata tag="doc_tag_doc_list"/>
    </>
  );
}

function DocTagDocListPageContent({
                                    tag,
                                    title
                                  }: Props & { title: string }): JSX.Element {
  console.log(tag.items);

  // const img= tag

  return (
    <HtmlClassNameProvider
      className={clsx(ThemeClassNames.page.docsTagDocListPage)}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main className="col col--8 col--offset-2">
            {tag.unlisted && <Unlisted/>}
            <header className="margin-bottom--xl">
              <Heading as="h1">{title}</Heading>
              {tag.description && <p>{tag.description}</p>}
              <Link href={tag.allTagsPath}>
                <Translate
                  id="theme.tags.tagsPageLink"
                  description="The label of the link targeting the tag list page">
                  View all tags
                </Translate>
              </Link>
            </header>
            {/*<section className="margin-vert--lg">*/}
            <section className={clsx('row')}>
              {tag.items.map((doc, index) => (
                <article key={doc.id} className={clsx("col col--6", styles.tagList)}>
                  <DocItem doc={doc} docImg={tag.items[index]["permalink"]}/>
                </article>
              ))}
            </section>
          </main>
        </div>
      </div>
    </HtmlClassNameProvider>
  );
}

export default function DocTagDocListPage(props: Props): JSX.Element {
  const title = `🔖 ${props.tag.label} 태그`;

  // console.log(props);

  return (
    <>
      <DocTagDocListPageMetadata {...props} title={title}/>
      <DocTagDocListPageContent {...props} title={title}/>
    </>
  );
}
