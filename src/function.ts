import { DateTime } from 'luxon';

/**
 * Converts a date from one timezone to another.
 * @param {string} dateStr - The date in string format.
 * @param {string} fromZone - The source timezone.
 * @param {string} toZone - The target timezone.
 * @returns {string} - The converted date in the target timezone.
 */
export const convertTimeZone = (dateStr: string, fromZone: string, toZone: string): string => {
  return DateTime.fromISO(dateStr, { zone: fromZone }).setZone(toZone).toISO()!;
};

/**
 * Gets the current time in the specified timezone.
 * @param {string} timezone - The target timezone.
 * @returns {string} - The current time in ISO format for the given timezone.
 */
export const getCurrentTimeInZone = (timezone: string): string => {
  return DateTime.now().setZone(timezone).toISO()!;
};

/**
 * Calculates the time difference between two timezones in hours.
 * @param {string} timezone1 - First timezone.
 * @param {string} timezone2 - Second timezone.
 * @returns {number} - Time difference in hours.
 */
export const getTimeDifference = (timezone1: string, timezone2: string): number => {
  const now = DateTime.now();
  const zone1 = now.setZone(timezone1);
  const zone2 = now.setZone(timezone2);

  // Calculate the difference in offsets
  const diffInHours = (zone2.offset - zone1.offset) / 60;

  return diffInHours;
};

/**
 * Formats a date string for a given timezone in the specified format.
 * @param {string} dateStr - The date string in ISO format.
 * @param {string} fromZone - The source timezone.
 * @param {string} toZone - The target timezone.
 * @param {string} format - The format string for the output date.
 * @returns {string} - The formatted date string in the target timezone.
 */

export const formatDateInTimeZone = (dateStr: string, fromZone: string, toZone: string, format: string): string => {
  return DateTime.fromISO(dateStr, { zone: fromZone }).setZone(toZone).toFormat(format);
};
