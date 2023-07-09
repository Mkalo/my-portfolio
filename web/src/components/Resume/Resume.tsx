import { Suspense, lazy } from 'react';

import { useTranslation } from 'react-i18next';

import BriefcaseOutline from 'src/images/briefcase-outline.svg';
import CalendarOutline from 'src/images/calendar-outline.svg';
import CallOutline from 'src/images/call-outline.svg';
import LibraryOutline from 'src/images/library-outline.svg';
import LocationOutline from 'src/images/location-outline.svg';
import MailOutline from 'src/images/mail-outline.svg';
import ProfileImage from 'src/images/profile.webp';
import { formatDateDifference } from 'src/utils';

import ProfilePicture from '../ProfilePicture/ProfilePicture';

const ReactMarkdown = lazy(() => import('react-markdown'));

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
              <span className="text-xs font-semibold text-emerald-600 underline dark:text-emerald-500">
                {project.url}
              </span>
            )}
            <Suspense
              fallback={
                <div role="status" className="my-2">
                  <svg
                    aria-hidden="true"
                    className="mr-2 h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              }
            >
              <ReactMarkdown
                remarkPlugins={[]}
                className="prose prose-zinc my-2 text-sm text-zinc-600 dark:prose-invert dark:text-zinc-300"
              >
                {project.description}
              </ReactMarkdown>
            </Suspense>
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
