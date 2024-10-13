<h1 align='center'>world-clockify</h1>

## Features

- Convert date/time between different timezones.
- Get the current time in any timezone.
- Calculate the time difference (in hours) between two timezones.
<!-- TODO:  Supports both JavaScript and TypeScript -->

## Installation

You can install the package via npm or yarn.

```bash
# npm
npm install world-clockify

# yarn
yarn add world-clockify

```

## Usage

After installation, you can use the library as follows:

```javascript
import { convertTimeZone, getCurrentTimeInZone, getTimeDifference } from 'world-clockify';

// Convert time between timezones
const convertedTime = convertTimeZone('2024-01-01T12:00:00', 'America/New_York', 'Europe/London');
console.log(convertedTime); // Outputs: '2024-01-01T17:00:00.000Z'

// Get current time in a specific timezone
const currentTime = getCurrentTimeInZone('America/New_York');
console.log(currentTime); // Outputs the current time in ISO format

// Calculate time difference between two timezones
const timeDifference = getTimeDifference('America/New_York', 'Europe/London');
console.log(timeDifference); // Outputs: 5 (hours)
```
