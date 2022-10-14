export const formDateVN = (date: string): Date => {
  const dateNew = new Date(date);
  return dateNew;
};

export const formatDatePostSQL = (date: string) => {
  const zeroPad = (d: any) => {
    return ("0" + d).slice(-2)
  }
  var parsed = new Date(date)
  return [parsed.getUTCFullYear(), '/', zeroPad(parsed.getMonth() + 1), '/', zeroPad(parsed.getDate()), ' | ', zeroPad(parsed.getHours()), 'h-', zeroPad(parsed.getMinutes()), 'm'].join('')

}
