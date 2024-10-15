# Get Time Zone Offset Difference

## Description

This feature allows you to calculate the time difference (in hours) between two timezones.

## Usage

```javascript
import { getTimeZoneOffsetDifference } from 'world-clockify';

const timeDifference = getTimeZoneOffsetDifference('America/New_York', 'Asia/Kolkata');
console.log('Time Difference (in hours):', timeDifference);
```

## Expected Output

```bash
Time Difference (in hours): 9.5
```

## Parameters

- timezone1 (string): The first timezone.
- timezone2 (string): The second timezone.

## Returns

- (number): The time difference (in hours) between the two timezones.
