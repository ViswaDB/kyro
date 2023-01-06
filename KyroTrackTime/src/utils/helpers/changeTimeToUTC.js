import moment from 'moment';

export function changeTimeToUTC(time) {
  var local = moment(time, 'YYYY-MM-DD hh:mm A').format(); // local time zone
  var utc = moment(local).utc().format(); //utc
  console.log(local, utc, moment.utc(utc).local().format('hh:mm A'));
  return utc;
}

export function getTodayDate() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();

  var newdate = '';
  if (month < 10) {
    newdate = year + '-0' + month + '-' + day;
  } else {
    newdate = year + '-' + month + '-' + day;
  }
  if (day < 10) {
    newdate = year + '-0' + month + '-0' + day;
  } else {
    newdate = year + '-' + month + '-' + day;
  }

  return newdate;
}

export function getYesterdayDate() {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months from 1-12
  var day = dateObj.getUTCDate()-1;
  var year = dateObj.getUTCFullYear();

  var newdate = '';
  if (month < 10) {
    newdate = year + '-0' + month + '-' + day;
  } else {
    newdate = year + '-' + month + '-' + day;
  }
  if (day < 10) {
    newdate = year + '-0' + month + '-0' + day;
  } else {
    newdate = year + '-' + month + '-' + day;
  }

  return newdate;
}

export function getDay(momentDate) {
  const today = moment(momentDate).isSame(moment(), 'day');
  const yesterday = moment(momentDate).isSame(
    moment().subtract(1, 'day'),
    'day',
  );

  if (today) {
    return 'Today';
  } else if (yesterday) {
    return 'Yesterday';
  } else {
    return momentDate.slice(0,15);
  }
}
