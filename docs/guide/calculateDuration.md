Calculate Duration

## Description

This feature allows you to calculate the duration between two dates in a specified unit.

## Usage

```javascript
import { calculateDuration } from 'world-clockify';

const duration = calculateDuration('2023-10-01T12:00:00', '2023-10-02T12:00:00', 'hours');
console.log('Duration (in hours):', duration);
```

## Expected Output

```bash
Duration (in hours): 24
```

## Parameters

- startDate (string): The start date string in ISO format.
- endDate (string): The end date string in ISO format.
- unit (string): The unit to calculate the duration (hours, minutes, seconds, days, months, years).

## Returns

- (number): The duration between the two dates in the specified unit.
