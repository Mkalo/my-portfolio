import { useTranslation } from 'react-i18next';

export interface TechnicalSkill {
  name: string;
  years: number;
  level: string;
}

interface ITechnicalSkillsTableProps {
  technicalSkills: TechnicalSkill[];
}

const TechnicalSkillsTable = ({
  technicalSkills,
}: ITechnicalSkillsTableProps) => {
  const { t } = useTranslation();

  return (
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
  );
};

export default TechnicalSkillsTable;
