import { DateTime, IANAZone } from 'luxon';

/**
 * Converts a date from one timezone to another.
 * @param {string} dateStr - The date in string format.
 * @param {string} fromZone - The source timezone.
 * @param {string} toZone - The target timezone.
 * @returns {string} - The converted date in the target timezone.
 */
export const convertTimeZone = (dateStr: string, fromZone: string, toZone: string): string => {
  const dateTime = DateTime.fromISO(dateStr, { zone: fromZone });

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

  // Return the current time in ISO format
  const currentTimeISO = currentTime.toISO();

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

  // Calculate the difference in offsets between the two timezones
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

  // Validate the date-time object
  if (!dateTime.isValid) {
    throw new Error(
      `Invalid date string: "${dateStr}". Ensure the date is in ISO format (e.g., 'YYYY-MM-DDTHH:mm:ss').`,
    );
  }

  // Convert to target timezone
  const converted = dateTime.setZone(toZone);

  // Format the converted date in the specified format
  const formattedDate = converted.toFormat(format);

  return formattedDate;
};

/**
 * Formats a date string based on the given locale and timezone.
 *
 * @param {string} dateStr - The date string in ISO format.
 * @param {string} locale - The locale to format the date (e.g., 'fr', 'en-US').
 * @param {string} timezone - The timezone for the date.
 * @returns - The formatted date string.
 */

export const formatDateForLocale = (dateStr: string, locale: string, timezone: string): string => {
  /* Create a DateTime object from the date string and timezone provided as arguments to the function.
   The date string is expected to be in ISO format (e.g., '2022-01-01T12:00:00'). */
  const date = DateTime.fromISO(dateStr, { zone: timezone });

  if (!date.isValid) {
    throw new Error(
      `Invalid date string: "${dateStr}". Ensure the date is in ISO format (e.g., 'YYYY-MM-DDTHH:mm:ss').`,
    );
  }

  if (!IANAZone.isValidZone(timezone)) {
    throw new Error(
      `Invalid timezone: "${timezone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  return date.setLocale(locale).toLocaleString(DateTime.DATETIME_FULL);
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

  return duration;
};

/**
 * Returns a list of all supported IANA timezones using the Javascript Intl API.
 * @returns {string[]} - An array of supported timezone strings.
 */
export const getSupportedTimezones = (): string[] => {
  const getListOfSupportedTimeZones = Intl.supportedValuesOf('timeZone');

  return getListOfSupportedTimeZones;
};

/**
 * Returns a list of all supported currency using the Javascript Intl API.
 * @returns {string[]} - An array of supported currency strings.
 */
export const getSupportedCrrency = (): string[] => {
  const getListOfSupportedCurrency = Intl.supportedValuesOf('currency');

  return getListOfSupportedCurrency;
};

/**
 * Returns a list of all supported calendar using the Javascript Intl API.
 * @returns {string[]} - An array of supported calendar strings.
 */
export const getSupportedCalendar = (): string[] => {
  const getListOfSupportedCalendar = Intl.supportedValuesOf('calendar');

  return getListOfSupportedCalendar;
};

/**
 * Get the countdown to a specific event in a given timezone.
 *
 * @param eventDate - The date of the event (ISO string format).
 * @param eventTimezone - The timezone of the event.
 * @returns - The countdown as an object (days, hours, minutes, seconds).
 */

export const getCountdownToEvent = (
  eventDate: string,
  eventTimezone: string,
): { days: number; hours: number; minutes: number; seconds: number } => {
  if (!IANAZone.isValidZone(eventTimezone)) {
    throw new Error(
      `Invalid timezone: "${eventTimezone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  if (!DateTime.fromISO(eventDate).isValid) {
    throw new Error(`Invalid date: "${eventDate}". Ensure the date is in ISO format (e.g., 'YYYY-MM-DDTHH:mm:ss').`);
  }
  const now = DateTime.now().setZone(eventTimezone);
  const eventTime = DateTime.fromISO(eventDate, { zone: eventTimezone });

  const diff = eventTime.diff(now, ['days', 'hours', 'minutes', 'seconds']).toObject();

  return {
    days: Math.floor(diff.days || 0),
    hours: Math.floor(diff.hours || 0),
    minutes: Math.floor(diff.minutes || 0),
    seconds: Math.floor(diff.seconds || 0),
  };
};
