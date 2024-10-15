import { DateTime, IANAZone, Duration } from 'luxon';

/**
 * Converts a date from one timezone to another.
 * @param {string} dateStr - The date in string format.
 * @param {string} fromZone - The source timezone.
 * @param {string} toZone - The target timezone.
 * @returns {string} - The converted date in the target timezone.
 */
export const convertTimeZone = (dateStr: string, fromZone: string, toZone: string): string => {
  const dateTime = DateTime.fromISO(dateStr, { zone: fromZone });

  // Debug: Print the original date with timezone info
  console.log('Original DateTime:', dateTime.toString());

  if (!IANAZone.isValidZone(fromZone)) {
    throw new Error(
      `Invalid source timezone: "${fromZone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  // Validate the target timezone
  if (!IANAZone.isValidZone(toZone)) {
    throw new Error(
      `Invalid target timezone: "${toZone}". Please provide a valid IANA timezone (e.g., 'Europe/London').`,
    );
  }

  if (!dateTime.isValid) {
    throw new Error(
      `Invalid date string: "${dateStr}". Ensure the date is in ISO format (e.g., 'YYYY-MM-DDTHH:mm:ss').`,
    );
  }

  const converted = dateTime.setZone(toZone);

  // Debug: Print the converted date with timezone info
  console.log('Converted DateTime:', converted.toString());

  return converted.toISO()!;
};

/**
 * Gets the current time in the specified timezone.
 * @param {string} timezone - The target timezone.
 * @returns {string} - The current time in ISO format for the given timezone.
 */
export const getCurrentTimeInZone = (timezone: string): string => {
  if (!IANAZone.isValidZone(timezone)) {
    throw new Error(
      `Invalid timezone: "${timezone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }
  // Get the current time in the specified timezone
  const currentTime = DateTime.now().setZone(timezone);
  console.log('Current DateTime in Zone:', currentTime.toString());

  // Return the current time in ISO format
  const currentTimeISO = currentTime.toISO();
  console.log('Current DateTime in ISO Format:', currentTimeISO);

  return currentTimeISO ?? '';
};

/**
 * Calculates the time difference between two timezones in hours.
 * @param {string} timezone1 - First timezone.
 * @param {string} timezone2 - Second timezone.
 * @returns {number} - Time difference in hours.
 */
export const getTimeDifference = (timezone1: string, timezone2: string): number => {
  if (!IANAZone.isValidZone(timezone1)) {
    throw new Error(
      `Invalid first timezone: "${timezone1}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  if (!IANAZone.isValidZone(timezone2)) {
    throw new Error(
      `Invalid second timezone: "${timezone2}". Please provide a valid IANA timezone (e.g., 'Asia/Kolkata').`,
    );
  }

  const now = DateTime.now();
  const zone1 = now.setZone(timezone1);
  const zone2 = now.setZone(timezone2);

  // Calculate the difference in offsets
  const diffInHours = (zone2.offset - zone1.offset) / 60;
  //Debug: Print differences
  console.log(`Difference in offsets between ${timezone1} and ${timezone2} in hours is:`, diffInHours);

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
  if (!IANAZone.isValidZone(fromZone)) {
    throw new Error(
      `Invalid source timezone: "${fromZone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  if (!IANAZone.isValidZone(toZone)) {
    throw new Error(
      `Invalid target timezone: "${toZone}". Please provide a valid IANA timezone (e.g., 'Europe/London').`,
    );
  }

  const dateTime = DateTime.fromISO(dateStr, { zone: fromZone });
  console.log('Original DateTime:', dateTime.toString());

  // Validate the date-time object
  if (!dateTime.isValid) {
    throw new Error(
      `Invalid date string: "${dateStr}". Ensure the date is in ISO format (e.g., 'YYYY-MM-DDTHH:mm:ss').`,
    );
  }

  // Convert to target timezone
  const converted = dateTime.setZone(toZone);
  console.log('Converted DateTime:', converted.toString());

  // Format the converted date
  const formattedDate = converted.toFormat(format);
  console.log('Formatted DateTime:', formattedDate);

  return formattedDate;
};

/**
 * Calculates the duration between two dates across timezones.
 * @param {string} startDateStr - The start date in string format (ISO).
 * @param {string} endDateStr - The end date in string format (ISO).
 * @param {string} timezone - The timezone in which the calculation is made.
 * @returns {object} - The duration between the dates in days, hours, and minutes.
 */
export const calculateDuration = (
  startDateStr: string,
  endDateStr: string,
  timezone: string,
  unit: 'days' | 'hours' | 'minutes',
) => {
  if (!IANAZone.isValidZone(timezone)) {
    throw new Error(
      `Invalid timezone: "${timezone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  const startDate = DateTime.fromISO(startDateStr, { zone: timezone });
  const endDate = DateTime.fromISO(endDateStr, { zone: timezone });

  if (!startDate.isValid) {
    throw new Error(`Invalid start date: "${startDateStr}". Ensure the date is in ISO format (e.g., 'YYYY-MM-DD').`);
  }

  if (!endDate.isValid) {
    throw new Error(`Invalid end date: "${endDateStr}". Ensure the date is in ISO format (e.g., 'YYYY-MM-DD').`);
  }

  // Calculate difference in specified unit
  const duration = endDate.diff(startDate, unit).as(unit);
  console.log(`Difference between ${startDate.toString()} and ${endDate.toString()} in ${unit}:`, duration);

  return duration;
};
