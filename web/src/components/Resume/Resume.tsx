import { useTranslation } from 'react-i18next';

import WorkHistoryItem, {
  IWorkHistoryItemProps,
} from 'src/components/WorkHistoryItem/WorkHistoryItem';
import { useTheme } from 'src/hooks/useTheme';
import BriefcaseOutline from 'src/images/briefcase-outline.svg';
import CalendarOutline from 'src/images/calendar-outline.svg';
import CallOutline from 'src/images/call-outline.svg';
import DownloadOutline from 'src/images/download-outline.svg';
import FileTrayFullOutline from 'src/images/file-tray-full-outline.svg';
import GithubIcon from 'src/images/github.svg';
import LibraryOutline from 'src/images/library-outline.svg';
import LinkedinIcon from 'src/images/linkedin.svg';
import LocationOutline from 'src/images/location-outline.svg';
import MailOutline from 'src/images/mail-outline.svg';
import ProfileImage from 'src/images/profile.webp';
import SchoolOutline from 'src/images/school-outline.svg';
import ThrophyOutline from 'src/images/trophy-outline.svg';

import AwardItem, { IAwartItemProps } from '../AwardItem/AwardItem';
import EducationHistoryItem, {
  IEducationHistoryItemProps,
} from '../EducationHistoryItem/EducationHistoryItem';
import ProfilePicture from '../ProfilePicture/ProfilePicture';
import SideProjectItem, {
  ISideProjectItemProps,
} from '../SideProjectItem/SideProjectItem';
import TagsContainer from '../TagsContainer/TagsContainer';
import TechnicalSkillsTable, {
  TechnicalSkill,
} from '../TechnicalSkillsTable/TechnicalSkillsTable';

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
  workHistory: IWorkHistoryItemProps[];
  sideProjects: ISideProjectItemProps[];
  educationHistory: IEducationHistoryItemProps[];
  awards: IAwartItemProps[];
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
  sideProjects,
  educationHistory,
  awards,
  showDownloadButton = false,
}: ResumeProps) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  return (
    <article>
      <header className="relative flex flex-col gap-8 sm:flex-row sm:gap-12">
        {showDownloadButton && (
          <a
            role="button"
            className="absolute right-0 top-0 flex items-center rounded-full p-2 align-middle hover:bg-zinc-200 dark:hover:bg-zinc-700"
            href={`https://render-resume.mkalo.dev/?lng=${i18n.language}${
              theme === 'dark' ? '&darkMode=true' : ''
            }`}
            target="_blank"
            rel="noreferrer"
            aria-label="download resume"
          >
            <DownloadOutline className="h-6 w-6" />
          </a>
        )}
        <div className="flex flex-shrink-0 flex-col gap-4">
          <div className="flex justify-center">
            <ProfilePicture src={ProfileImage} />
          </div>
        </div>
        <hgroup className="flex flex-col">
          <div className="mb-4 flex flex-col">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold">{name}</h2>
              <div className="flex items-center gap-1">
                <a
                  href="https://www.linkedin.com/in/matheus-costa-ab44151bb"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinIcon
                    className="h-6 w-6 text-black dark:text-white"
                    aria-label="linkedin"
                  />
                </a>
                <a
                  href="https://github.com/Mkalo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon
                    className="h-6 w-6 text-black dark:text-white"
                    aria-label="github"
                  />
                </a>
              </div>
            </div>
            <p className="font-medium">{position}</p>
          </div>
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
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
          <TechnicalSkillsTable technicalSkills={technicalSkills} />
          <div className="flex w-full flex-col gap-3">
            <h3 className="font-semibold">{t('additionalSkills')}:</h3>
            <TagsContainer tags={additionalSkills} />
          </div>
        </div>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 lg:flex-row lg:gap-32">
        <div className="flex h-fit shrink-0 items-center gap-3">
          <BriefcaseOutline className="h-6 w-6" aria-label="briefcase" />
          <h2 className="text-xl font-semibold">{t('workHistory')}</h2>
        </div>
        <div className="flex w-full flex-col gap-6">
          {workHistory.map((item) => (
            <WorkHistoryItem
              key={`${item.company}-${item.position}`}
              {...item}
            />
          ))}
        </div>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 lg:flex-row lg:gap-32">
        <div className="flex h-fit shrink-0 items-center gap-3">
          <FileTrayFullOutline className="h-6 w-6" aria-label="file tray" />
          <h2 className="text-xl font-semibold">{t('sideProjects')}</h2>
        </div>
        <div className="flex w-full flex-col gap-6">
          {sideProjects.map((item) => (
            <SideProjectItem key={item.name} {...item} />
          ))}
        </div>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 lg:flex-row">
        <div className="flex h-fit w-[250px] shrink-0 items-center gap-3">
          <SchoolOutline className="h-6 w-6" aria-label="school" />
          <h2 className="text-xl font-semibold">{t('education')}</h2>
        </div>
        <div className="flex w-full flex-col gap-6">
          {educationHistory.map((item) => (
            <EducationHistoryItem
              key={`${item.institution}-${item.degree}`}
              {...item}
            />
          ))}
        </div>
      </section>
      <hr className="my-4 sm:my-8" />
      <section className="flex flex-col gap-4 lg:flex-row">
        <div className="flex h-fit w-[250px] shrink-0 items-center gap-3">
          <ThrophyOutline className="h-6 w-6" aria-label="trophies" />
          <h2 className="text-xl font-semibold">{t('awards')}</h2>
        </div>
        <div className="flex w-full flex-col gap-6">
          {awards.map((item) => (
            <AwardItem key={item.name} {...item} />
          ))}
        </div>
      </section>
    </article>
  );
};

export default Resume;
