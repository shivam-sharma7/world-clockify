import express from 'express';
import {
  fetchCurrentTimeInZone,
  fetchSupportedTimezones,
  fetchConvertedTime,
  fetchTimeDifference,
  calculateDurationBetweenDates,
  formatDateInTimezone,
  formatDateLocale,
  fetchSupportedCrrency,
  fetchSupportedCalendar,
  countDownToEvent,
} from '../controllers/timezone.controller';
import { limiter } from '../middleware/ratelimit';

const router = express.Router();

router.get('/currenttime', fetchCurrentTimeInZone);
router.get('/supportedtimezone', limiter, fetchSupportedTimezones);
router.get('/currency', fetchSupportedCrrency);
router.get('/calendar', fetchSupportedCalendar);
router.get('/converttimezone', limiter, fetchConvertedTime);
router.get('/timedifference', fetchTimeDifference);
router.get('/calculateduration', limiter, calculateDurationBetweenDates);
router.get('/formattimezone', limiter, formatDateInTimezone);
router.get('/formatdatelocale', limiter, formatDateLocale);
router.get('/countdownevent', limiter, countDownToEvent);

export default router;
