import * as Yup from "yup";
import LoginAndRegisterService from "../Service/loginAndRegisterService";
import loginAndRegisterService from "../Service/loginAndRegisterService";


const registerSchema = Yup.object({
    username: Yup.string().required('Tên đăng nhập không được để trống').min(6, 'Ít nhất 6 kí tự').max(12, 'Tối đa 12 ký tự')
        .matches(/^[A-Za-z0-9]+(?:[ _][A-Za-z0-9]+)*$/, 'Tên đăng nhập không được chứa kí tự đặc biệt')
        .test('unique', 'Tên đăng nhập đã tồn tại', async (value) => {
            let checkUsername = await LoginAndRegisterService.checkUsername(value);
            return !checkUsername.data;
        }),
    email: Yup.string().email('Email không hợp lệ')
        .required('Vui lòng nhập email')
        .test('unique', 'Email đã tồn tại', async (value) => {
            let checkEmail = await LoginAndRegisterService.checkEmail(value);
            return !checkEmail.data;
        }),
    password: Yup.string()
        .required('Mật khẩu không được bỏ trống')
        .min(6, 'Mật khẩu phải chứa ít nhất 6 kí tự').max(12, 'Tối đa 12 ký tự')
        .matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
            'Mật khẩu phải chứa chữ cái viết hoa, viết thường và ký tự số'
        ),
    confirmPassword: Yup.string()
        .required('Vui lòng xác nhận lại mật khẩu')
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
});

const loginSchema = Yup.object({
    username: Yup.string().required("Vui lòng nhập tên tài khoản").test("Check username", "Tên tài khoản không tồn tại", async (value) => {
        const checkUser = await loginAndRegisterService.checkUsername(value);
        return checkUser.data
    }),
    password: Yup.string().required("Vui lòng nhập mật khẩu")
})


export {registerSchema, loginSchema}