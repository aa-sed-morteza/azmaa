import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const phoneSchema = yup.object().shape({
  phoneNember: yup.number().required("لطفا شماره همراه خود را وارد کنید"),
});

export const infoSchema = yup.object().shape({
  firstName: yup.string().required("لطفا نام خود را وارد کنید"),
  lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  birthPlace: yup.string().required("لطفا نام محل تولد خود را وارد کنید"),
  personalCode: yup
    .number()
    .min(10, "حداقل ۱۰ رقم وارد کنید")
    .required("لطفا کد ملی خود را وارد کنید"),
  birthDay: yup.string().required("لطفا تاریخ تولد خود را وارد کنید"),
});

export const passSchema = yup.object().shape({
  password: yup.number().required("لطفا رمز عبور خود را وارد کنید"),
});

export const contactSchema = yup.object().shape({
  mobileNumber: yup.number().required("لطفا شماره مویابل خود را وارد کنید"),
  email: yup.string().required("لطفا  ایمیل خود را وارد کنید"),
  address: yup.string().required("لطفا آدرس  خود را وارد کنید"),
  phoneNubmer: yup
    .number()
    .min(10, "حداقل ۸ رقم وارد کنید")
    .required("لطفا شماره تلفن ثابت  خود را وارد کنید"),
});

export const selectAreaSchema = yup.object().shape({
  voteNumber: yup.number().required("لطفا تعداد آرا خود را وارد کنید"),
  areaName: yup.string().required("لطفا  حوزه انتخابی خود را انتخاب کنید"),
  commission: yup.string().required("لطفا نام کمیسیون  خود را انتخاب کنید"),

});

export const dutieHistoryAreaSchema = yup.object().shape({
  dutie: yup.string().required("لطفا موضوع سابقه خود را وارد کنید"),
  dateFrom: yup.date().required("لطفا  تاریخ شروع فعالیت خود را انتخاب کنید"),
  dateTo: yup.date().required("لطفا تاریخ پایان فعالیت  خود را انتخاب کنید"),

});
