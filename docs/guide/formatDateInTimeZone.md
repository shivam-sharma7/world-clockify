# Format Date in Time Zone

## Description

This feature allows you to format a date string for a given timezone in the specified format.

## Usage

```javascript
import { formatDateInTimeZone } from 'world-clockify';

const formattedDate = formatDateInTimeZone(
  '2023-10-01T12:00:00',
  'America/New_York',
  'Asia/Kolkata',
  'yyyy LLL dd HH:mm:ss',
);
console.log('Formatted Date:', formattedDate);
```

## Expected Output

```bash
Formatted Date: 2023 Oct 02 21:30:00
```

## Parameters

- dateStr (string): The date string in ISO format.
- fromZone (string): The source timezone.
- toZone (string): The target timezone.
- format (string): The format to use for the output date string.

## Returns

- (string): The formatted string in the target timezone.
