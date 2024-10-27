import { DateTime, IANAZone } from 'luxon';

interface UserPreferences {
  workStartTime: string; // Start time of the workday in 'HH:mm' format
  workEndTime: string; // End time of the workday in 'HH:mm' format
  preferredTimeZone: string; // IANA time zone string (e.g., 'America/New_York')
  workSessionDuration: number; // Work session duration in minutes
  breakDuration: number; // Break duration in minutes
}

/**
 * Schedules work sessions and breaks for a user, promoting mental well-being.
 *
 * @param preference - User preferences for work and break scheduling.
 * @returns - An object containing scheduled work sessions, breaks, and reminders.
 */
export const sheduleWorkAndBreaks = (preference: UserPreferences) => {
  const { workStartTime, workEndTime, preferredTimeZone, workSessionDuration, breakDuration } = preference;

  const workSession = [];
  const breakTime = [];
  if (!IANAZone.isValidZone(preferredTimeZone)) {
    throw new Error(
      `Invalid timezone: "${preferredTimeZone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  let currentTime = DateTime.fromFormat(workStartTime, 'HH:mm', { zone: preferredTimeZone });
  const endOfWorkDay = DateTime.fromFormat(workEndTime, 'HH:mm', { zone: preferredTimeZone });

  // Loop to schedule work sessions and breaks
  while (currentTime < endOfWorkDay) {
    const workSessionEnd = currentTime.plus({ minute: workSessionDuration });
    const breakTimeEnd = workSessionEnd.plus({ minute: breakDuration });

    // Add break time session to the shedule
    workSession.push({ start: currentTime.toFormat('hh:mm a'), end: workSessionEnd.toFormat('hh:mm a') });

    // Add break time to the shedule
    breakTime.push({ start: workSessionEnd.toFormat('hh:mm a'), end: breakTimeEnd.toFormat('hh:mm a') });

    currentTime = breakTimeEnd;
  }

  return {
    workSession,
    breakTime,
    reminders: ['Take a break!', 'Time for meditation or relaxation!'],
    endOfDayReminder: `Your workday ends at ${workEndTime}. Time to relax!`,
  };
};

interface focusUserPreferences {
  workStartTime: string; // Start time of the workday in 'HH:mm' format
  workEndTime: string; // End time of the workday in 'HH:mm' format
  preferredTimeZone: string; // IANA time zone string (e.g., 'America/New_York')
  focusDuration: number; // Focus session duration in minutes
  shortBreakDuration: number; // Break duration in minutes
}

/**
 * feature designed to schedule blocks of uninterrupted focus time throughout the day.
 * @param preference- User preference for daily work hours
 * @returns- An object containing focusSession and reminders.
 */
export const focusTimeManager = (preference: focusUserPreferences) => {
  const { workStartTime, workEndTime, preferredTimeZone, focusDuration, shortBreakDuration } = preference;

  const focusSession = [];

  if (!IANAZone.isValidZone(preferredTimeZone)) {
    throw Error(
      `Invalid timezone: "${preferredTimeZone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  let currentTime = DateTime.fromFormat(workStartTime, 'HH:mm', { zone: preferredTimeZone });
  const endOfDay = DateTime.fromFormat(workEndTime, 'HH:mm', { zone: preferredTimeZone });

  while (currentTime < endOfDay) {
    const focusEnd = currentTime.plus({ minutes: focusDuration });
    const breakEnd = focusEnd.plus({ minutes: shortBreakDuration });

    focusSession.push({ start: currentTime.toFormat('hh:mm a'), end: focusEnd.toFormat('hh:mm a') });

    currentTime = breakEnd;
  }

  return {
    focusSession,
    reminders: ['Time to focus!', 'Take a short break!', 'Focus time starts again soon!'],
  };
};

interface waterUserPreference {
  wakeUpTime: string;
  sleepTime: string;
  preferredTimeZone: string;
  intakeInterval: number;
}

/**
 * daily reminder for hydration that tracks when the user should drink water based on intervals
 * @param preference- User preference
 */
export const waterIntakeReminder = (preference: waterUserPreference) => {
  const { wakeUpTime, sleepTime, preferredTimeZone, intakeInterval } = preference;

  const reminders = [];

  if (!IANAZone.isValidZone(preferredTimeZone)) {
    throw new Error(
      `Invalid timezone: "${preferredTimeZone}". Please provide a valid IANA timezone (e.g., 'America/New_York').`,
    );
  }

  let currentTime = DateTime.fromFormat(wakeUpTime, 'HH:mm', { zone: preferredTimeZone });
  const sleepDateTime = DateTime.fromFormat(sleepTime, 'HH:mm', { zone: preferredTimeZone });

  while (currentTime < sleepDateTime) {
    const nextReminder = currentTime.plus({ minutes: intakeInterval });
    reminders.push(`Drink water at ${nextReminder.toFormat('hh:mm a')}`);
    currentTime = nextReminder;
  }

  return reminders;
};

/**
 * sleep schedule based on their desired wake-up time and how many hours of sleep they need.
 * @param {string} wakeUpTime
 * @param {number} sleepCycles
 * @param {string} preferredTimeZone
 */

export const sleepTimeAdvisor = (wakeUpTime: string, sleepCycles: number, preferredTimeZone: string) => {
  const cycleDuration = 90; // in minutes
  const totalSleepTime = cycleDuration * sleepCycles;

  const wakeUp = DateTime.fromFormat(wakeUpTime, 'HH:mm', { zone: preferredTimeZone });

  const suggestedSleepTime = wakeUp.minus({ minutes: totalSleepTime });

  return {
    suggestedSleepTime: suggestedSleepTime.toFormat('hh:mm a'),
    message: `To get ${sleepCycles} cycles of sleep, you should go to bed by ${suggestedSleepTime.toFormat('hh:mm a')}.`,
  };
};
