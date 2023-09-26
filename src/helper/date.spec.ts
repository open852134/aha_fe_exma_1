import { describe, it, expect } from 'vitest';
import {
  formatDateToMonthYear,
  formatShortDate,
  isSameDay,
  isSameMonth,
} from './date';

describe('dateUtils', () => {
  describe('formatDateToMonthYear', () => {
    it('should format a date to "Month Year"', () => {
      const date = new Date('2022-09-20');
      expect(formatDateToMonthYear(date)).toBe('September 2022');

      const date2 = new Date('2022-01-20');
      expect(formatDateToMonthYear(date2)).toBe('January 2022');
    });
  });

  describe('formatShortDate', () => {
    it('should format a date to "Mon, Year"', () => {
      const date = new Date('2022-09-20');
      expect(formatShortDate(date)).toBe('Sep, 2022');

      const date2 = new Date('2022-01-20');
      expect(formatShortDate(date2)).toBe('Jan, 2022');
    });
  });

  describe('isSameDay', () => {
    it('should return true if two dates are on the same day', () => {
      const date1 = new Date('2022-09-20 10:00:00');
      const date2 = new Date('2022-09-20 15:30:00');
      expect(isSameDay(date1, date2)).toBe(true);
    });

    it('should return false if two dates are not on the same day', () => {
      const date1 = new Date('2022-09-20');
      const date2 = new Date('2022-09-21');
      expect(isSameDay(date1, date2)).toBe(false);
    });
  });

  describe('isSameMonth', () => {
    it('should return true if two dates are in the same month and year', () => {
      const date1 = new Date('2022-09-20');
      const date2 = new Date('2022-09-25');
      expect(isSameMonth(date1, date2)).toBe(true);
    });

    it('should return false if two dates are in different months', () => {
      const date1 = new Date('2022-09-30');
      const date2 = new Date('2022-10-01');
      expect(isSameMonth(date1, date2)).toBe(false);
    });

    it('should return false if two dates are in the same month but different years', () => {
      const date1 = new Date('2022-09-20');
      const date2 = new Date('2021-09-20');
      expect(isSameMonth(date1, date2)).toBe(false);
    });
  });
});
