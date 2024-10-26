# Water Intake Reminder.

## Description

This function helps users build a consistent water intake routine, boosting physical well-being during work hours. Each reminder will prompt them to stay hydrated throughout their day, supporting overall health and focus.

## Usage

```javascript
import { waterIntakeReminder } from 'world-clockify';

const preference = {
  wakeUpTime: '08:00',
  sleepTime: '12:00',
  preferredTimeZone: 'America/New_York',
  intakeInterval: 60,
};

const waterIntake = waterIntakeReminder(preference);

console.log(waterIntake);
```

## Expected Output

```bash
{
      'Drink water at 09:30 am',
      'Drink water at 10:00 am',
      'Drink water at 10:30 am',
      'Drink water at 11:00 am',
}

```

## Parameters

- waterUserPreference(object): User inputs.

## Returns

- (object): As a result.
