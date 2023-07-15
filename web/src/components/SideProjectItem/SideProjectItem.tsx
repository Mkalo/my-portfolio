import { LazyExoticComponent, lazy, useEffect, useState } from 'react';

import type ReactMarkdown from 'react-markdown';

import TagsContainer from '../TagsContainer/TagsContainer';

export interface ISideProjectItemProps {
  name: string;
  url?: string;
  description: string;
  tags: string[];
}

const SideProjectItem = ({
  name,
  url,
  tags,
  description,
}: ISideProjectItemProps) => {
  const [ReactMarkdownComponent, setReactMarkdownComponent] =
    useState<LazyExoticComponent<typeof ReactMarkdown> | null>(null);

  useEffect(() => {
    setReactMarkdownComponent(lazy(() => import('react-markdown')));
  }, []);

  return (
    <article className="relative w-full">
      <header className="flex w-full flex-col">
        <h3 className="text-base font-semibold">{name}</h3>
        {url && (
          <a
            className="w-fit text-xs font-semibold text-emerald-600 underline dark:text-emerald-500"
            href={url}
          >
            {url}
          </a>
        )}
      </header>
      {ReactMarkdownComponent ? (
        <ReactMarkdownComponent
          remarkPlugins={[]}
          className="prose prose-zinc my-2 text-sm text-zinc-600 dark:prose-invert dark:text-zinc-300"
        >
          {description}
        </ReactMarkdownComponent>
      ) : (
        <p className="hidden">{description}</p>
      )}
      <TagsContainer tags={tags} />
    </article>
  );
};

export default SideProjectItem;
