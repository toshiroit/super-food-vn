import * as Yup from "yup";

const maxDate = () => {
  return new Date();
};
export const validateFilterOrderSchema = Yup.object().shape({
  text_search: Yup.string().max(300, "Kí tự quá nhiều").nullable(),
  date_start: Yup.date()
    .max(Yup.ref("date_end"), "Ngày bắt đầu không được nhỏ hơn ngày kết thúc")
    .nullable(),
  date_end: Yup.date()
    .min(Yup.ref("date_end"), "Ngày kết thúc không được nhỏ hơn ngày bắt đầu")
    .nullable(),
});
