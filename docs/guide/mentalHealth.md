# Mental Health Time Manager.

## Description

The Mental Health Time Manager is a feature aimed at helping users manage their work schedules in a way that promotes mental well-being. This feature would recommend break times, relaxation periods, and work blocks based on user-defined work habits, productivity cycles, and time zones

## Usage

```javascript
import { sheduleWorkAndBreaks } from 'world-clockify';

const userPreferences = {
  workStartTime: '09:00',
  workEndTime: '18:00',
  preferredTimeZone: 'America/New_York',
  workSessionDuration: 25, // in minutes
  breakDuration: 5, // in minutes
};

// Get a mental health-friendly schedule for the day
const dailySchedule = scheduleWorkAndBreaks(userPreferences);

console.log(dailySchedule);
```

## Expected Output

```bash
{
  workSession: [
    { start: '09:00 AM', end: '09:25 AM' },
    { start: '09:30 AM', end: '09:55 AM' },

  ],
  breakTime: [
    { start: '09:25 AM', end: '09:30 AM' },
    { start: '09:55 AM', end: '10:00 AM' },

  ],
  reminders: [
    'Take a break in 5 minutes!',
    'Time to meditate: Try a deep breathing exercise.',

  ],
  endOfDayReminder: 'Your workday ends at 6:00 PM. Time to wind down!',
}

```

## Parameters

- userPreferences(object): The date string in ISO format.

## Returns

- (object): As a result.
