import { describe, it, expect } from 'vitest';
import {
  convertTimeZone,
  getCurrentTimeInZone,
  getTimeDifference,
  formatDateInTimeZone,
  formatDateForLocale,
  calculateDuration,
  getSupportedTimezones,
  getSupportedCrrency,
  getSupportedCalendar,
  getCountdownToEvent,
  sheduleWorkAndBreaks,
  focusTimeManager,
  waterIntakeReminder,
} from '../src/function.js';

describe('Timezone-Aware Date Helper', () => {
  it('should convert date between timezones', () => {
    const dateStr = '2024-01-01T12:00:00';
    const fromZone = 'America/New_York';
    const toZone = 'Europe/London';

    const converted = convertTimeZone(dateStr, fromZone, toZone);
    expect(converted).toBe('2024-01-01T17:00:00.000+00:00');
  });

  it('should get current time in a specific timezone', () => {
    const current = getCurrentTimeInZone('America/New_York');
    expect(current).toBeDefined(); // We can't assert exact time, just check it exists.
  });

  it('should calculate time difference between two timezones', () => {
    const diff = getTimeDifference('America/New_York', 'Europe/London');
    expect(diff).toBe(5); // New York is 5 hours behind London
  });

  it('should format date correct for a different timezone', () => {
    const dateStr = '2024-10-14T12:00:00';
    const fromZone = 'UTC';
    const toZone = 'America/New_York';
    const format = 'MM/dd/yyyy HH:mm';

    const result = formatDateInTimeZone(dateStr, fromZone, toZone, format);
    expect(result).toBe('10/14/2024 08:00');
  });

  it('should format date string based on the given locale and timezone.', () => {
    const dateStr = '2024-10-17T10:30:00';
    const local = 'en-US';
    const timeZone = 'America/New_York';

    const result = formatDateForLocale(dateStr, local, timeZone);
    expect(result).toBe('October 17, 2024 at 10:30 AM EDT');
  });

  it('should handle other timezones and format correctly', () => {
    const dateStr = '2024-10-14T12:00:00';
    const fromZone = 'UTC';
    const toZone = 'Asia/Tokyo';
    const format = 'yyyy-MM-dd HH:mm';

    const result = formatDateInTimeZone(dateStr, fromZone, toZone, format);
    expect(result).toBe('2024-10-14 21:00');
  });

  it('should calculates the duration between two dates across timezones ', () => {
    const startDate = '2024-10-10';
    const endDate = '2024-10-13';
    const timezone = 'UTC';
    const unitInDays = 'days';
    const unitInHours = 'hours';
    const unitInMinutes = 'minutes';

    const durationInDays = calculateDuration(startDate, endDate, timezone, unitInDays);
    const durationInHours = calculateDuration(startDate, endDate, timezone, unitInHours);
    const durationInMinutes = calculateDuration(startDate, endDate, timezone, unitInMinutes);

    expect(durationInDays).toBe(3); // 3 days difference
    expect(durationInHours).toBe(72); // 3 days * 24 hours = 72 hours
    expect(durationInMinutes).toBe(4320); // 72 hours * 60 minutes = 4320 minutes
  });

  it('should returns a list of all supported IANA timezones', () => {
    const timezones = getSupportedTimezones();
    expect(timezones).toBeInstanceOf(Array);
  });

  it('should returns a list of all supported currency', () => {
    const currencies = getSupportedCrrency();
    expect(currencies).toBeInstanceOf(Array);
  });

  it('should returns a list of all supported calendar', () => {
    const calenders = getSupportedCalendar();
    expect(calenders).toBeInstanceOf(Array);
  });

  it('should calculate the countdown to a specific event', () => {
    const eventDate = '2024-10-20T15:00:00';
    const eventTimezone = 'America/New_York';
    const countdown = getCountdownToEvent(eventDate, eventTimezone);

    expect(countdown).toHaveProperty('days');
    expect(countdown).toHaveProperty('hours');
    expect(countdown).toHaveProperty('minutes');
    expect(countdown).toHaveProperty('seconds');
  });
  it('should  work sessions and breaks for a user', () => {
    const preferences = {
      workStartTime: '09:00',
      workEndTime: '17:00',
      preferredTimeZone: 'America/New_York',
      workSessionDuration: 50,
      breakDuration: 10,
    };

    const dailySchedule = sheduleWorkAndBreaks(preferences);

    expect(dailySchedule.workSession.length).toBeGreaterThan(0);
    expect(dailySchedule.breakTime.length).toBeGreaterThan(0);

    expect(dailySchedule.workSession[0]).toEqual({
      start: '09:00 AM',
      end: '09:50 AM',
    });

    expect(dailySchedule.breakTime[0]).toEqual({
      start: '09:50 AM',
      end: '10:00 AM',
    });

    expect(dailySchedule.endOfDayReminder).toBe('Your workday ends at 17:00. Time to relax!');
  });

  it('should assists users in managing focused work sessions throughout their day', () => {
    const preference = {
      workStartTime: '09:00',
      workEndTime: '17:00',
      preferredTimeZone: 'America/New_York',
      focusDuration: 50,
      shortBreakDuration: 10,
    };

    const schedule = focusTimeManager(preference);

    expect(schedule.focusSession.length).toBeGreaterThan(0);

    expect(schedule.focusSession[0]).toEqual({
      start: '09:00 AM',
      end: '09:50 AM',
    });
  });

  it('should remind to drink water', () => {
    const preference = {
      wakeUpTime: '08:00',
      sleepTime: '12:00',
      preferredTimeZone: 'America/New_York',
      intakeInterval: 60,
    };

    const waterIntake = waterIntakeReminder(preference);

    // Expected reminders at hourly intervals from 8:00 AM to 12:00 PM
    const expectedReminders = [
      'Drink water at 09:00 AM',
      'Drink water at 10:00 AM',
      'Drink water at 11:00 AM',
      'Drink water at 12:00 PM',
    ];

    expect(waterIntake).toEqual(expectedReminders);
  });
});
