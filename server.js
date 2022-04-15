const cron = require('node-cron');
const twitter = require('./controllers/twitter');
const keys = require('./secret');

cron.schedule('* * * * *', () => {
  console.log('running a task every minute');
});
