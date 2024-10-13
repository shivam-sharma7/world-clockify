import { describe, it, expect } from 'vitest';
import { convertTimeZone, getCurrentTimeInZone, getTimeDifference } from '../src/function.js';

describe('Timezone-Aware Date Helper', () => {
  it('should convert date between timezones', () => {
    const dateStr = '2024-01-01T12:00:00';
    const converted = convertTimeZone(dateStr, 'America/New_York', 'Europe/London');
    expect(converted).toBe('2024-01-01T17:00:00.000+00:00'); // Adjusted expected value
  });

  it('should get current time in a specific timezone', () => {
    const current = getCurrentTimeInZone('America/New_York');
    expect(current).toBeDefined(); // We can't assert exact time, just check it exists.
  });

  it('should calculate time difference between two timezones', () => {
    const diff = getTimeDifference('America/New_York', 'Europe/London');
    expect(diff).toBe(5); // Assuming DST is not in effect.
  });
});
