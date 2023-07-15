import { useTranslation } from 'react-i18next';

export interface IEducationHistoryItemProps {
  institution: string;
  degree: string;
  startDate: Date;
  endDate?: Date;
}

const EducationHistoryItem = ({
  institution,
  degree,
  startDate,
  endDate,
}: IEducationHistoryItemProps) => {
  const { t, i18n } = useTranslation();

  return (
    <article className="relative w-full">
      <header className="flex w-full flex-col">
        <div className="flex h-fit flex-shrink-0 items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="first-letter:capitalize">
            {startDate.toLocaleString(i18n.language, {
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC',
            })}
          </span>
          {' - '}
          <span className="first-letter:capitalize">
            {endDate?.toLocaleString(i18n.language, {
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC',
            }) ?? t('present')}
          </span>
        </div>
        <h3 className="py-[6px] text-base font-semibold">{institution}</h3>
      </header>
      <p className="text-sm text-zinc-600 dark:text-zinc-300">{degree}</p>
    </article>
  );
};

export default EducationHistoryItem;
