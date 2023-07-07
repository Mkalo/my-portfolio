import { useTranslation } from 'react-i18next';

import BriefcaseOutline from 'src/images/briefcase-outline.svg';
import CalendarOutline from 'src/images/calendar-outline.svg';
import LibraryOutline from 'src/images/library-outline.svg';
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
  yearsOfExperience: number;
  technicalSkills: TechnicalSkill[];
  additionalSkills: string[];
}

const Resume = ({
  name,
  position,
  description,
  yearsOfExperience,
  technicalSkills,
  additionalSkills,
}: ResumeProps) => {
  const { t } = useTranslation();

  return (
    <main>
      <header className="flex flex-col gap-8 sm:flex-row sm:gap-16">
        <div className="flex justify-center">
          <ProfilePicture src={ProfileImage} />
        </div>
        <hgroup className="flex flex-col">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="mb-4 font-medium">{position}</p>
          <p>{description}</p>
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
      <section className="flex flex-col gap-4 sm:flex-row sm:gap-32">
        <div className="flex h-fit shrink-0 items-center gap-3">
          <BriefcaseOutline className="h-6 w-6" aria-label="briefcase" />
          <h2 className="text-xl font-semibold">Work History</h2>
        </div>
        <p>TODO</p>
      </section>
    </main>
  );
};

export default Resume;
