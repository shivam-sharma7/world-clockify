import { Request, Response } from 'express';
import {
  getCurrentTimeInZone,
  getSupportedTimezones,
  getTimeDifference,
  convertTimeZone,
  calculateDuration,
  formatDateInTimeZone,
  getSupportedCrrency,
  getSupportedCalendar,
  formatDateForLocale,
  getCountdownToEvent,
} from 'world-clockify';

export const fetchCurrentTimeInZone = async (req: Request, res: Response) => {
  const { timezone } = req.query;

  try {
    if (typeof timezone === 'string') {
      const currentTime = getCurrentTimeInZone(timezone);
      res.status(200).json({ currentTime });
    } else {
      res.status(400).json({ message: 'Invalid timezone parameter' });
    }
  } catch (error) {
    console.error('Error fetching current time:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const fetchSupportedTimezones = async (_req: Request, res: Response) => {
  try {
    const timezones = getSupportedTimezones();
    res.status(200).json({ timezones });
  } catch (error) {
    console.error('Error fetching supported timezones:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const fetchSupportedCrrency = async (req: Request, res: Response) => {
  try {
    const crrencies = getSupportedCrrency();
    res.status(200).json({ crrencies });
  } catch (error) {
    console.error('Error fetching supported currencies:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const fetchSupportedCalendar = async (req: Request, res: Response) => {
  try {
    const calendar = getSupportedCalendar();
    res.status(200).json({ calendar });
  } catch (error) {
    console.error('Error fetching supported calendar:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const fetchConvertedTime = async (req: Request, res: Response) => {
  const { date, fromZone, toZone } = req.query;

  try {
    if (typeof date === 'string' && typeof fromZone === 'string' && typeof toZone === 'string') {
      const convertedTime = convertTimeZone(date, fromZone, toZone);
      res.status(200).json({ convertedTime });
    } else {
      res.status(400).json({ message: 'Invalid parameters' });
    }
  } catch (error) {
    console.error('Error fetching converted time:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const fetchTimeDifference = async (req: Request, res: Response) => {
  const { timezone1, timezone2 } = req.query;

  try {
    if (typeof timezone1 === 'string' && typeof timezone2 === 'string') {
      const timeDifference = getTimeDifference(timezone1, timezone2);
      /*
       * The response will be in the format: { timeDifference: 'x hours' }
       */
      res.status(200).json({ timeDifference: `${timeDifference} hours` });
    } else {
      res.status(400).json({ message: 'Invalid timezone parameters' });
    }
  } catch (error) {
    console.error('Error fetching time difference:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const calculateDurationBetweenDates = (req: Request, res: Response) => {
  const { startDateStr, endDateStr, timezone, unit } = req.query;

  try {
    if (unit === 'days' || unit === 'hours' || unit === 'minutes') {
      const duration = calculateDuration(String(startDateStr), String(endDateStr), String(timezone), unit);
      res.json({ duration, unit });
    } else {
      res.status(400).json({ message: 'Invalid unit parameter' });
    }
  } catch (error) {
    console.error('Error calculating duration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const formatDateInTimezone = (req: Request, res: Response) => {
  const { date, fromZone, toZone, format } = req.query;

  try {
    if (
      typeof date === 'string' &&
      typeof fromZone === 'string' &&
      typeof toZone === 'string' &&
      typeof format === 'string'
    ) {
      const formattedDate = formatDateInTimeZone(date, fromZone, toZone, format);
      res.status(200).json({ formattedDate });
    } else {
      res.status(400).json({ message: 'Invalid parameters' });
    }
  } catch (error) {
    console.error('Error formatting date:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const formatDateLocale = async (req: Request, res: Response) => {
  const { dateStr, locale, timezone } = req.query;

  try {
    if (typeof dateStr === 'string' && typeof locale === 'string' && typeof timezone === 'string') {
      const formatDateLocale = formatDateForLocale(dateStr, locale, timezone);
      res.status(200).json({ formatDateLocale });
    } else {
      res.status(400).json({ message: 'Invalid parameters' });
    }
  } catch (error) {
    console.error('Error formatting date for local:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const countDownToEvent = async (req: Request, res: Response) => {
  const { eventDate, eventTimezone } = req.query;

  try {
    if (typeof eventDate === 'string' && typeof eventTimezone === 'string') {
      const countdown = getCountdownToEvent(eventDate, eventTimezone);
      res.status(200).json({ countdown });
    } else {
      res.status(400).json({ message: 'Invalid parameters' });
    }
  } catch (error) {
    console.error('Error getting countdown to event:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
