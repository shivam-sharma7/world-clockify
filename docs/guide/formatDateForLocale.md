# Format Date based on the given locale and timezone.

## Description

This feature allows you to format a date string based on the given locale and timezone.

## Usage

```javascript
import { formatDateForLocale } from 'world-clockify';

const formattedDateFR = formatDateForLocale('2024-10-17T10:30:00', 'fr', 'Europe/Paris');
const formattedDateUS = formatDateForLocale('2024-10-17T10:30:00', 'en-US', 'America/New_York');

console.log('Formatted Date (FR):', formattedDateFR);
console.log('Formatted Date (US):', formattedDateUS);
```

## Expected Output

```bash
Formatted Date (FR): jeudi 17 octobre 2024 à 12:30:00 heure d’Europe centrale
Formatted Date (US): Thursday, October 17, 2024, 06:30:00 AM Eastern Daylight Time

```

## Parameters

- dateStr (string): The date string in ISO format.
- local (string): The target local (e.g., 'fr', 'en-US').
- timezone (string): The format to use for the output date string.

## Returns

- (string): The formatted string in the target local.
