import * as Yup from "yup";

const regex = `^[0-9]{3}-[0-9]{3}-[0-9]{4}$`

export const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    number: Yup.string().matches(regex, 'Wrong format! The number must be 111-111-1111')
        .min(12, "Too short!")
        .max(12, "Too long!")
        .required("Required"),
});
