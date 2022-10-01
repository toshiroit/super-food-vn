export const checkPhone = (
  phone: string,
  country: "VIE" | "JAPAN"
): boolean => {
  const regexPhoneVN = "/^(?([0-9]{3}))?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/";
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  let result: boolean = false;
  if (phone) {
    if (country === "VIE") {
      var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
      if (phone.match(phoneno)) {
        return true;
      } else {
        return false;
      }
    } else if (country === "JAPAN") {
      return (result = true);
    }
  }
  return result;
};
