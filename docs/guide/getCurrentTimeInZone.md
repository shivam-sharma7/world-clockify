# Get Current Time in Zone

## Description

This feature allows you to get the current time in any specified timezone.

## Usage

```javascript
import { getCurrentTimeInZone } from 'world-clockify';

const currentTimeInKolkata = getCurrentTimeInZone('Asia/Kolkata');
console.log('Current Time in Kolkata:', currentTimeInKolkata);
```

## Expected Output

Note: The actual output will vary depending on the current time when the function is called

```bash
Current Time in Kolkata: 2023-10-01T21:30:00+05:30
```

## Parameters

- timezone (string): The timezone to get the current time.

## Returns

- (string): The current date/time in ISO format.
