var periods = {
  month: 30 * 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000
};

export function formatTime(timeCreated) {
  var diff = Date.now() - new Date(timeCreated);

  if (diff > periods.month) {
    return Math.floor(diff / periods.month) + "m ago";
  } else if (diff > periods.week) {
    return Math.floor(diff / periods.week) + "w ago";
  } else if (diff > periods.day) {
    return Math.floor(diff / periods.day) + "d ago";
  } else if (diff > periods.hour) {
    return Math.floor(diff / periods.hour) + "h ago";
  } else if (diff > periods.minute) {
    return Math.floor(diff / periods.minute) + "m ago";
  }

  return "Just now";
}
