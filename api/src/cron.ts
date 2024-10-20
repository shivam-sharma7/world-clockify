import { CronJob } from 'cron';
import https from 'https';

const URL: string = 'https://world-clockify-api.onrender.com/';

export const job = new CronJob('*/10 * * * * *', function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log('Get request sent successfully');
      } else {
        console.log('Get request failed');
      }
    })
    .on('error', (e) => {
      console.error('Error while sending req', e);
    });
});
