const moment = require("moment-timezone");

const userSystemTimeZone = "Singapore Standard Time";

const parseZone = (date) => {
  console.log("date", date);
  console.log(
    "computed date",
    moment(date, "YYYY-MM-DDTHH:mm:ssZ")
      .parseZone()
      .tz(userSystemTimeZone, true)
  );
  return moment(date).parseZone().tz(userSystemTimeZone, true).toDate();
};

parseZone("2024-03-20T15:00:55");
