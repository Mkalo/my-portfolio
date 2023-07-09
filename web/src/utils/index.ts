export function formatDateDifference(first: Date, second?: Date) {
  second = second || new Date();
  const difference = Math.abs(first.getTime() - second.getTime());

  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.max(
    Math.round((difference / (1000 * 60 * 60 * 24 * 365) - years) * 12),
    1
  );

  const yearsString = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
  const monthsString = `${months} month${months > 1 ? 's' : ''}`;

  return `${yearsString} ${monthsString}`;
}
