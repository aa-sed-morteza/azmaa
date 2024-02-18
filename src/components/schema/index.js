import { faMinimize } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";

const emailValidate =
/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const phoneSchema = yup.object().shape({
  phoneNember: yup.number().required("لطفا شماره همراه خود را وارد کنید"),
  type: yup.string().required("لطفا نوع کاربری خود را انتخاب کنید"),
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

export const generalInfoSchema = yup.object().shape({
  firstName: yup.string().required("لطفا نام خود را وارد کنید"),
  lastName: yup.string().required("لطفا نام خانوادگی خود را وارد کنید"),
  birthPlace: yup.string().required("لطفا نام محل تولد خود را وارد کنید"),
  personalCode: yup
    .number()
    .min(10, "حداقل ۱۰ رقم وارد کنید")
    .required("لطفا کد ملی خود را وارد کنید"),
  birthDay: yup.string().required("لطفا تاریخ تولد خود را وارد کنید"),
  mobileNumber: yup.number().required("لطفا شماره مویابل خود را وارد کنید"),
  email: yup.string().required("لطفا  ایمیل خود را وارد کنید"),
  address: yup.string().required("لطفا آدرس  خود را وارد کنید"),
  phoneNubmer: yup
    .number()
    .min(10, "حداقل ۸ رقم وارد کنید")
    .required("لطفا شماره تلفن ثابت  خود را وارد کنید"),
});

export const passSchema = yup.object().shape({
  password: yup.string().required("لطفا رمز عبور خود را وارد کنید"),
});

export const contactSchema = yup.object().shape({
  mobileNumber: yup.number().required("لطفا شماره مویابل خود را وارد کنید"),
  email: yup.string().matches(emailValidate, "ایمیل صحیح وارد کنید").required("لطفا  ایمیل خود را وارد کنید"),
  address: yup.string().required("لطفا آدرس  خود را وارد کنید"),
  phoneNubmer: yup
  .number()
  .typeError("لطفا  عدد وارد کنید")
  .min(10, "حداقل ۸ رقم وارد کنید")
  .required("لطفا شماره تلفن ثابت  خود را وارد کنید"),
});

export const selectAreaSchema = yup.object().shape({
  voteNumber: yup.number().required("لطفا تعداد آرا خود را وارد کنید"),
  areaName: yup.string().required("لطفا  حوزه انتخابی خود را انتخاب کنید"),
  commission: yup.string().required("لطفا نام کمیسیون مورد نظر  خود را انتخاب کنید"),
});

export const AreaSchema = yup.object().shape({
  voteNumber: yup.number().required("لطفا تعداد آرا خود را وارد کنید"),
  areaName: yup.string().required("لطفا  حوزه انتخابی خود را انتخاب کنید"),
});

export const commissionSchema = yup.object().shape({
  commission: yup.string().required("لطفا نام کمیسیون مورد نظر  خود را انتخاب کنید"),
});

export const dutieHistoryAreaSchema = yup.object().shape({
  dutie: yup.string().required("لطفا موضوع سابقه خود را وارد کنید"),
  dateFrom: yup.date().required("لطفا  تاریخ شروع فعالیت خود را انتخاب کنید"),
  dateTo: yup.date().required("لطفا تاریخ پایان فعالیت  خود را انتخاب کنید"),
});

export const logInSchema = yup.object().shape({
  userName: yup.string().required("لطفا نام کاربری خود را وارد کنید"),
  password: yup.string().required("لطفا رمز عبور خود را انتخاب کنید"),
});

export const typeSchema = yup.object().shape({
  type: yup.string().required("لطفا نوع مطلب  خود را انتخاب کنید"),
});

export const contentSchema = yup.object().shape({
  title: yup.string().required("لطفا عنوان مطلب  خود را وارد  کنید"),
  expand: yup.string().required("لطفا متن مطلب  خود را وارد  کنید"),
});

export const UploadPictSchema = yup.object().shape({
  picOne: yup
    .mixed()
    .required("لطفا تصویرمطلب خود را بارگزاری کنید")
    .test("حجم فایل زیاد است", (value) => {
      return value && value.size <= 2000000;
    })
    .test(
      "نوع فایل",
      "نوع فایل باید یکی از فرمت های نامبرده باشد: .jpeg, .jpg, .bmp, .pdf and .doc",
      (value) => {
        return (
          value &&
          (value.type === "image/jpeg" ||
            value.type === "image/bmp" ||
            value.type === "image/png" ||
            value.type === "application/pdf" ||
            value.type === "application/msword")
        );
      }
    ),
  // picTwo: yup
  //   .mixed()
  //   .required("لطفا تصویرمطلب خود را بارگزاری کنید")
  //   .test("حجم فایل زیاد است", (value) => {
  //     return value && value.size <= 2000000;
  //   })
  //   .test(
  //     "نوع فایل",
  //     "نوع فایل باید یکی از فرمت های نامبرده باشد: .jpeg, .jpg, .bmp, .pdf and .doc",
  //     (value) => {
  //       return (
  //         value &&
  //         (value.type === "image/jpeg" ||
  //           value.type === "image/bmp" ||
  //           value.type === "image/png" ||
  //           value.type === "application/pdf" ||
  //           value.type === "application/msword")
  //       );
  //     }
  //   ),
});

export const LinkSchema = yup.object().shape({
  // document: yup.string().required("لطفا سند مطلب خود را بارگزاری کنید"),
  // link: yup.string().required("لطفا لینک مطلب خودرا وارد کنید"),
});

export const selectActionTypeSchema = yup.object().shape({
  type: yup.string().required("لطفا عنوان فعالیت  خود را انتخاب  کنید"),
  description: yup
    .string()
    .required("لطفا فعالیت مورد نظر  خود را انتخاب  کنید"),
});

export const selectEnvoyTypeSchema = yup.object().shape({
  type: yup.string().required("لطفا دسته نامزد خود را انتخاب  کنید"),
  envoy: yup.string().required("لطفا نامزد مورد نظر  خود را انتخاب  کنید"),
});

export const voteSchema = yup.object().shape({
  vote: yup.string().required("لطفا رای نامزد را انتخاب کنید"),
});

export const documentSchema = yup.object().shape({
  // document: yup.string().required("لطفا سند خود را بارگزاری کنید"),
});

export const suggestSchema = yup.object().shape({
  type: yup.string().required("لطفا نوع فعالیت خود را انتخاب کنید"),
});

export const provinceSchema = yup.object().shape({
  province: yup.string().required("لطفا استان مورد خود را انتخاب کنید"),
  city: yup.array().required("لطفا شهر مورد خود را انتخاب کنید"),
});
