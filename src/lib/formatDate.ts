export const formDateVN = (date: string): Date => {
  const dateNew = new Date(date);
  return dateNew;
};

export const formatDatePostSQL = (date: string) => {
  const zeroPad = (d: any) => {
    return ("0" + d).slice(-2);
  };
  var parsed = new Date(date);
  return [
    parsed.getUTCFullYear(),
    "/",
    zeroPad(parsed.getMonth() + 1),
    "/",
    zeroPad(parsed.getDate()),
    " | ",
    zeroPad(parsed.getHours()),
    "h-",
    zeroPad(parsed.getMinutes()),
    "m",
  ].join("");
};

export const timeSince = (date: any) => {
  const time = new Date(date).getTime();
  const diff = Number(new Date()) - time;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;
  switch (true) {
    case diff < minute:
      const seconds = Math.round(diff / 1000);
      return `${seconds} ${seconds > 1 ? "giây trước" : "second"} `;
    case diff < hour:
      return Math.round(diff / minute) + " phút ";
    case diff < day:
      return Math.round(diff / hour) + " giờ ";
    case diff < month:
      return Math.round(diff / day) + " ngày ";
    case diff < year:
      return Math.round(diff / month) + " tháng ";
    case diff > year:
      return Math.round(diff / year) + " năm ";
    default:
      return "";
  }
};
