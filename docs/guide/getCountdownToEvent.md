# Get Count down To Event

## Description

This feature calculates the countdown to a specified event date in a given timezone and returns the countdown in a human-readable format.

## Usage

```javascript
import { getCountdownToEvent } from 'world-clockify';

const eventDate = '2024-10-20T15:00:00';
const eventTimezone = 'America/New_York';

const countdown = getCountdownToEvent(eventDate, eventTimezone);
console.log(countdown);
```

## Expected Output

```bash
1 day, 1 hour, 30 minutes, 0 seconds
```

## Parameters

- eventDate (string): The event date string in ISO format.
- eventTimezone (string): The timezone of the event.

## Returns

Returns the countdown as an object with `{ days, hours, minutes, seconds }` ensuring each value is floored to the nearest integer.
