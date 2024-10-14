<div align="center">

<h1 style="color: #3498db;">World-Clockify</h1>
<a href="https://github.com/shivam-sharma7/world-clockify/actions/workflows/ci.yml"><img alt="Node.js CI" src="https://github.com/shivam-sharma7/world-clockify/actions/workflows/ci.yml/badge.svg"></a>
<a href="https://www.npmjs.com/package/world-clockify"><img alt="npm version" src="https://img.shields.io/npm/v/world-clockify"></a>
<a href="https://github.com/shivam-sharma7/world-clockify/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/shivam-sharma7/world-clockify"></a>
<a href="./LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/shivam-sharma7/world-clockify"></a>
 
</div>

<br/>

This is a lightweight and timezone-aware date utility package built on top of the powerful Luxon library. It simplifies the handling of complex timezone-based date operations, making it especially useful for global teams managing scheduling across multiple timezones.

## Key Features

- Convert date/time between different timezones. (e.g. Asia/Kolkata).
- Get the current time in any timezone. (e.g., Asia/Kolkata)
- Calculate the time difference (in hours) between two timezones.
- Supports for both JavaScript and TypeScript developer.

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
import { convertTimeZone, getCurrentTimeInZone, getTimeDifference, formatDateInTimeZone } from 'world-clockify';

// Convert time between timezones
const convertedTime = convertTimeZone('2024-01-01T12:00:00', 'America/New_York', 'Europe/London');
console.log(convertedTime); // Outputs: '2024-01-01T17:00:00.000Z'

// Get current time in a specific timezone
const currentTime = getCurrentTimeInZone('America/New_York');
console.log(currentTime); // Outputs the current time in ISO format

// Calculate time difference between two timezones
const timeDifference = getTimeDifference('America/New_York', 'Europe/London');
console.log(timeDifference); // Outputs: 5 (hours)

const dateStr = '2024-10-14T12:00:00';
const fromZone = 'UTC';
const toZone = 'America/New_York';
const format = 'MM/dd/yyyy HH:mm';

// Example usage:
console.log(formatDateInTimeZone(dateStr, fromZone, toZone, format)); //output: 10/14/2024 08:00
```

## Development

See [Contributing](./CONTRIBUTING.md).

## Support

Give a ⭐️ if this project helped you!
You can also sponsor me on [Github](https://github.com/sponsors/shivam-sharma7)
