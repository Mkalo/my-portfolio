import { LazyExoticComponent, useState, useEffect, lazy } from 'react';

import { useTranslation } from 'react-i18next';
import type ReactMarkdown from 'react-markdown';

import { formatDateDifference } from 'src/utils';

import TagsContainer from '../TagsContainer/TagsContainer';

export interface WorkHistoryItemProps {
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date; // undefined means it hasn't ended yet
  projects: {
    name: string;
    url?: string;
    description: string;
    tags: string[];
  }[];
}

const WorkHistoryItem = ({
  position,
  company,
  startDate,
  endDate,
  projects,
}: WorkHistoryItemProps) => {
  const { i18n } = useTranslation('home');
  const [ReactMarkdownComponent, setReactMarkdownComponent] =
    useState<LazyExoticComponent<typeof ReactMarkdown> | null>(null);

  useEffect(() => {
    setReactMarkdownComponent(lazy(() => import('react-markdown')));
  }, []);

  return (
    <article className="relative w-full" data-testid="root">
      <div className="absolute left-[4px] top-[10px] h-[calc(100%-10px)] border-l-2 border-zinc-200 dark:border-zinc-700" />
      <div className="absolute left-0 top-0 h-[10px] w-[10px] rounded-full border-2 border-blue-400 dark:border-blue-500" />
      <div className="relative top-[-5px] ml-7 flex flex-col gap-2">
        <header className="flex w-full flex-col justify-between lg:flex-row">
          <div className="flex-shrink-0">
            <h3 className="font-bold">{position}</h3>
            <span className="text-sm font-semibold text-zinc-600 dark:text-zinc-400">
              {company}
            </span>
          </div>
          <div className="flex w-fit flex-col text-zinc-500 dark:text-zinc-400">
            <div className="flex h-fit flex-shrink-0 items-center gap-1">
              <span className="text-xs font-semibold first-letter:capitalize">
                {startDate.toLocaleString(i18n.language, {
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'UTC',
                })}
              </span>
              {' - '}
              <span className="text-xs font-semibold first-letter:capitalize">
                {endDate?.toLocaleString(i18n.language, {
                  month: 'long',
                  year: 'numeric',
                  timeZone: 'UTC',
                }) ?? 'Present'}
              </span>
            </div>
            <span className="self-start text-xs font-semibold lg:self-end">
              {formatDateDifference(startDate, endDate)}
            </span>
          </div>
        </header>
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col">
            <h4 className="text-sm font-semibold">{project.name}</h4>
            {project.url && (
              <a
                className="text-xs font-semibold text-emerald-600 underline dark:text-emerald-500"
                href={project.url}
              >
                {project.url}
              </a>
            )}
            {ReactMarkdownComponent ? (
              <ReactMarkdownComponent
                remarkPlugins={[]}
                className="prose prose-zinc my-2 text-sm text-zinc-600 dark:prose-invert dark:text-zinc-300"
              >
                {project.description}
              </ReactMarkdownComponent>
            ) : (
              <p className="hidden">{project.description}</p>
            )}
            <TagsContainer tags={project.tags} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default WorkHistoryItem;
