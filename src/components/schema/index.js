import * as yup from "yup";


// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const phoneSchema = yup.object().shape({
  phoneNember: yup.number().required("لطفا شماره همراه خود را وارد کنید"),
});



