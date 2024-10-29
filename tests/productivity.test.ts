import { describe, it, expect } from 'vitest';
import {
  sheduleWorkAndBreaks,
  focusTimeManager,
  waterIntakeReminder,
  sleepTimeAdvisor,
  energyLevelTracker,
} from '../src/productivity/productivity.js';
describe('Time and productivity management', () => {
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

  it('should suggest sleep time', () => {
    const wakeUpTime = '07:00';
    const sleepCycles = 5;
    const timeZone = 'America/New_York';

    const result = sleepTimeAdvisor(wakeUpTime, sleepCycles, timeZone);
    expect(result.suggestedSleepTime).toBe('11:30 PM');
    expect(result.message).toBe('To get 5 cycles of sleep, you should go to bed by 11:30 PM.');
  });

  it('should monitor user energy levels throughout the day', () => {
    const energyLevels = [
      { time: '08:00', level: 'high' as 'high' },
      { time: '12:00', level: 'medium' as 'medium' },
      { time: '15:00', level: 'low' as 'low' },
      { time: '18:00', level: 'medium' as 'medium' },
    ];
    const expectedSuggestions = [
      { time: '08:00', suggestion: 'Focus on high-priority tasks.' },
      { time: '12:00', suggestion: 'Engage in light tasks or exercise.' },
      { time: '15:00', suggestion: 'Take a break or meditate.' },
      { time: '18:00', suggestion: 'Engage in light tasks or exercise.' },
    ];
    const suggestions = energyLevelTracker(energyLevels);
    expect(suggestions).toEqual(expectedSuggestions);
  });
});
