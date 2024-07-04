import { formatDateDifference } from '.';

describe('utils', () => {
  describe('formatDateDifference', () => {
    it('should return formatted date difference in years and months', () => {
      const firstDate = new Date('2022-01-01');
      const secondDate = new Date('2023-07-01');

      const result = formatDateDifference(firstDate, secondDate);

      expect(result).toBe('1 year 6 months');
    });

    it('should return "1 month" if the difference is less than a year', () => {
      const firstDate = new Date('2023-01-01');
      const secondDate = new Date('2023-02-01');

      const result = formatDateDifference(firstDate, secondDate);

      expect(result).toBe('1 month');
    });

    it('should default to current date if the second argument is not provided', () => {
      const firstDate = new Date('2022-01-01');
      const currentDate = new Date('2023-07-01');

      const spy = jest
        .spyOn(global, 'Date')
        .mockImplementation(() => currentDate);

      const result = formatDateDifference(firstDate);

      expect(result).toBe('1 year 6 months');

      spy.mockRestore();
    });
  });
});
