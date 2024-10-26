# Sleep Time Advisor.

## Description

The sleepTimeAdvisor function helps users determine an optimal bedtime based on their desired wake-up time, number of sleep cycles, and time zone. Each sleep cycle is assumed to last approximately 90 minutes, following standard recommendations for uninterrupted, restful sleep.

## Usage

```javascript
import { sleepTimeAdvisor } from 'world-clockify';

const result = sleepTimeAdvisor('07:00', 5, 'America/New_York');

console.log(result.suggestedSleepTime);
console.log(result.message);
```

## Expected Output

```bash
 bedtime, e.g., "11:30 PM"
"To get 5 cycles of sleep, you should go to bed by 11:30 PM."
```

## Parameters

```javascript
- {string} wakeUpTime
- {number} sleepCycles
- {string} preferredTimeZone
```

## Returns

- (object): As a result.
