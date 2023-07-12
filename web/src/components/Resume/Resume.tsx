import { useTranslation } from 'react-i18next';

import WorkHistoryItem, {
  WorkHistoryItemProps,
} from 'src/components/WorkHistoryItem/WorkHistoryItem';
import { useTheme } from 'src/hooks/useTheme';
import BriefcaseOutline from 'src/images/briefcase-outline.svg';
import CalendarOutline from 'src/images/calendar-outline.svg';
import CallOutline from 'src/images/call-outline.svg';
import DownloadOutline from 'src/images/download-outline.svg';
import LibraryOutline from 'src/images/library-outline.svg';
import LocationOutline from 'src/images/location-outline.svg';
import MailOutline from 'src/images/mail-outline.svg';
import ProfileImage from 'src/images/profile.webp';

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
  showDownloadButton?: boolean;
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
  showDownloadButton = false,
}: ResumeProps) => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <article>
      <header className="relative flex flex-col gap-8 sm:flex-row sm:gap-12">
        {showDownloadButton && (
          <a
            role="button"
            className="absolute right-0 top-0 flex items-center rounded-full p-2 align-middle hover:bg-zinc-200 dark:hover:bg-zinc-700"
            href={`http://render-resume-eb.eba-mr3e2sa6.us-east-1.elasticbeanstalk.com/${
              theme === 'dark' ? '?darkMode=true' : ''
            }`}
            target="_blank"
            rel="noreferrer"
          >
            <DownloadOutline className="h-8 w-8" />
          </a>
        )}
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
            <tbody className="[&>*:last-child]:!border-emerald-500 [&>*:nth-of-type(even)]:bg-zinc-200 dark:[&>*:nth-of-type(even)]:bg-zinc-900 [&_tr]:border-b [&_tr]:border-zinc-400 dark:[&_tr]:border-zinc-500">
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
