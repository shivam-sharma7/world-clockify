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

const router = express.Router();

router.get('/currenttime', fetchCurrentTimeInZone);
router.get('/supportedtimezone', fetchSupportedTimezones);
router.get('/currency', fetchSupportedCrrency);
router.get('/calendar', fetchSupportedCalendar);
router.get('/converttimezone', fetchConvertedTime);
router.get('/timedifference', fetchTimeDifference);
router.get('/calculateduration', calculateDurationBetweenDates);
router.get('/formattimezone', formatDateInTimezone);
router.get('/formatdatelocale', formatDateLocale);
router.get('/countdownevent', countDownToEvent);

export default router;
