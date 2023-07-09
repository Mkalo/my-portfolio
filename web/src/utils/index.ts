import i18n from 'src/i18n/config';

export function formatDateDifference(first: Date, second?: Date) {
  second = second || new Date();
  const difference = Math.abs(first.getTime() - second.getTime());

  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.max(
    Math.round((difference / (1000 * 60 * 60 * 24 * 365) - years) * 12),
    1
  );

  const yearsString = i18n.t('yearsWithCount', { count: years });
  const monthsString = i18n.t('monthsWithCount', { count: months });

  return years > 0 ? `${yearsString} ${monthsString}` : monthsString;
}
