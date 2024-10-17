import express from 'express';
import {
  fetchCurrentTimeInZone,
  fetchSupportedTimezones,
  fetchConvertedTime,
  fetchTimeDifference,
  calculateDurationBetweenDates,
  formatDateInTimezone,
} from '../controllers/timezone.controller';

const router = express.Router();

router.get('/currenttime', fetchCurrentTimeInZone);
router.get('/supportedtimezone', fetchSupportedTimezones);
router.get('/converttimezone', fetchConvertedTime);
router.get('/timedifference', fetchTimeDifference);
router.get('/calculateduration', calculateDurationBetweenDates);
router.get('/formattimezone', formatDateInTimezone);

export default router;
