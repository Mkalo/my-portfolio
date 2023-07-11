import { useEffect, useState, lazy, LazyExoticComponent } from 'react';

import { useTranslation } from 'react-i18next';
import type ReactMarkdown from 'react-markdown';

import BriefcaseOutline from 'src/images/briefcase-outline.svg';
import CalendarOutline from 'src/images/calendar-outline.svg';
import CallOutline from 'src/images/call-outline.svg';
import LibraryOutline from 'src/images/library-outline.svg';
import LocationOutline from 'src/images/location-outline.svg';
import MailOutline from 'src/images/mail-outline.svg';
import ProfileImage from 'src/images/profile.webp';
import { formatDateDifference } from 'src/utils';

import ProfilePicture from '../ProfilePicture/ProfilePicture';

interface TechnicalSkill {
  name: string;
  years: number;
  level: string;
}

interface ResumeProps {
  name: string;
  position: string;
  description: string;
  cellphone: string;
  formattedCellphone: string;
  email: string;
  location: string;
  yearsOfExperience: number;
  technicalSkills: TechnicalSkill[];
  additionalSkills: string[];
  workHistory: WorkHistoryItemProps[];
}

interface WorkHistoryItemProps {
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

function WorkHistoryItem({
  position,
  company,
  startDate,
  endDate,
  projects,
}: WorkHistoryItemProps) {
  const { i18n } = useTranslation('home');
  const [ReactMarkdownComponent, setReactMarkdownComponent] =
    useState<LazyExoticComponent<typeof ReactMarkdown> | null>(null);

  useEffect(() => {
    setReactMarkdownComponent(lazy(() => import('react-markdown')));
  }, []);

  return (
    <article className="relative w-full">
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
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-zinc-300 px-2 py-0.5 text-xs dark:border-zinc-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

const Resume = ({
  name,
  position,
  description,
  cellphone,
  formattedCellphone,
  email,
  location,
  yearsOfExperience,
  technicalSkills,
  additionalSkills,
  workHistory,
}: ResumeProps) => {
  const { t } = useTranslation();

  return (
    <article>
      <header className="flex flex-col gap-8 sm:flex-row sm:gap-12">
        <div className="flex flex-shrink-0 flex-col gap-4">
          <div className="flex justify-center">
            <ProfilePicture src={ProfileImage} />
          </div>
        </div>
        <hgroup className="flex flex-col">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p className="mb-4 font-medium">{position}</p>
          <p className="mb-4">{description}</p>
          <div className="flex w-fit flex-wrap gap-x-6 gap-y-2 rounded bg-zinc-200 p-4 dark:bg-zinc-900">
            <div className="flex flex-shrink-0 items-center gap-2">
              <MailOutline className="h-6 w-6" aria-label="mail" />
              <a
                href={`mailto:${email}`}
                className="text-emerald-600 underline dark:text-emerald-500"
              >
                {email}
              </a>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <CallOutline className="h-6 w-6" aria-label="phone" />
              <a
                href={`tel:${cellphone}`}
                className="text-emerald-600 underline dark:text-emerald-500"
              >
                {formattedCellphone}
              </a>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2">
              <LocationOutline className="h-6 w-6" aria-label="location" />
              <p>{location}</p>
            </div>
          </div>
        </hgroup>
      </header>

      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-3">
          <CalendarOutline className="h-6 w-6" aria-label="calendar" />
          <h2 className="text-base font-semibold">{t('yearsOfExperience')}</h2>
        </div>
        <p>{t('yearsWithCount', { count: yearsOfExperience })}</p>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <LibraryOutline className="h-6 w-6" aria-label="library" />
          <h2 className="text-xl font-semibold">{t('technicalSkills')}</h2>
        </div>
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
          <table className="w-full max-w-[400px] flex-shrink-0 table-fixed border-collapse overflow-hidden rounded-t-lg shadow-sm shadow-zinc-500 [&_td]:px-5 [&_td]:py-2 [&_th]:px-5 [&_th]:py-2">
            <thead>
              <tr className="bg-emerald-500 dark:text-zinc-800">
                <th className="w-[40%] text-left">{t('skill')}</th>
                <th className="w-[20%] text-left">{t('years')}</th>
                <th className="w-[40%] text-left">{t('level')}</th>
              </tr>
            </thead>
            <tbody className="[&>*:last-child]:border-emerald-500 [&>*:nth-of-type(even)]:bg-zinc-200 dark:[&>*:nth-of-type(even)]:bg-zinc-900 [&_tr]:border-b [&_tr]:border-zinc-400 dark:[&_tr]:border-zinc-500">
              {technicalSkills.map((skill) => (
                <tr key={skill.name}>
                  <td className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {skill.name}
                  </td>
                  <td className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {skill.years}
                  </td>
                  <td className="overflow-hidden text-ellipsis whitespace-nowrap">
                    {skill.level}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">{t('additionalSkills')}:</h3>
            <ul className="flex list-inside list-disc flex-wrap gap-x-4 gap-y-1">
              {additionalSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 md:flex-row md:gap-32">
        <div className="flex h-fit shrink-0 items-center gap-3">
          <BriefcaseOutline className="h-6 w-6" aria-label="briefcase" />
          <h2 className="text-xl font-semibold">{t('workHistory')}</h2>
        </div>
        <div className="flex flex-col gap-6">
          {workHistory.map((item) => (
            <WorkHistoryItem
              key={`${item.company}-${item.position}`}
              {...item}
            />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;
