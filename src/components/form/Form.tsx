import React, { useRef, useState, useEffect } from "react";
import Inputs from "../inputs/Inputs";
import { Link } from "react-router-dom";
import { IoAlertCircle } from "react-icons/io5"
import { AiOutlineCamera } from "react-icons/ai"
import { login } from "../../services/auth"
import { register } from "../../services/auth"
import loadingSpinner from "../../assets/vectors/loading-gif.gif";
import { useNavigate } from "react-router-dom";
import user from "../../recoil/user";
import { useRecoilState } from "recoil";

//login form
interface submitBtnProps {
    disabled: boolean,
    loading: boolean,
    submit: Function,
    label: string,
}

const SumitBtn: React.FC<submitBtnProps> = ({ disabled, loading, submit, label }) => {
    return (
        <button disabled={disabled} onClick={() => submit()} className="text-white duration-75 active:bg-[#26b1c9] h-[50px] p-3 rounded-sm bg-[#33DDFB] w-full disabled:bg-gray-200 disabled:cursor-not-allowed dark:disabled:bg-gray-400">
            {loading ? <img src={loadingSpinner} className="w-5 m-auto" /> : "Login"}
        </button>
    )
}


const initialState = {
    email: {
        type: "email",
        label: "Email",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "User email required",
        value: ""
    },
    password: {
        type: "password",
        label: "Password",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "password required ( more that 4 characters )",
        value: ""
    },
    valid: false
}

export const LoginForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string | null>();
    const [User, setUser] = useRecoilState<any>(user);

    const [loginForm, setLoginForm] = useState<{
        email: {
            type: string,
            label: string,
            valid: boolean,
            touched: boolean,
            error: boolean,
            errorMessage: string,
            value: string
        }, password: {
            type: string,
            label: string,
            valid: boolean,
            touched: boolean,
            error: boolean,
            errorMessage: string,
            value: string
        }
        valid: boolean,
    }>(initialState);


    const loginHandler = () => {
        setMessageError(null);
        if (loading) return;

        const validForm = loginForm.valid;
        const previousValue = loginForm;
        previousValue.valid = false;
        setLoginForm({ ...previousValue })

        setLoading(true)
        const password = loginForm["password"].value;
        const email = loginForm["email"].value;
        login(email, password).then((result: any) => {
            console.log(result)
            setLoading(false)
            previousValue.valid = validForm;
            setLoginForm({ ...previousValue })
            const storeTken = localStorage.setItem("token", result.token);
            setUser({
                isLoggedIn: true,
                toke: result.token,
                ...user
            });
        }).catch(error => {
            previousValue.valid = validForm;
            setLoginForm({ ...previousValue })
            console.log(error)
            setLoading(false)
            setMessageError(error.length > 120 ? "something went wrong please try again" : error)
        })
    }

    const validateForm = () => {
        if (loginForm["password"].valid && loginForm["email"].valid) {
            const previousValue = loginForm;
            previousValue.valid = true;
            setLoginForm({ ...previousValue })
        } else {
            const previousValue = loginForm;
            previousValue.valid = false;
            setLoginForm({ ...previousValue })
        }
    }

    const onChange = (type: string, value: string) => {
        setMessageError(null);
        switch (type) {
            case "email":
                const previousEmailValue = loginForm;
                previousEmailValue["email"].value = value;
                const pattern = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
                const test = pattern.test(previousEmailValue["email"].value);
                previousEmailValue["email"].valid = test;
                setLoginForm({ ...previousEmailValue });
                validateForm()
                break
            case "password":
                let passwordValid = false;
                const previousPasswordValue = loginForm;
                previousPasswordValue["password"].value = value;
                const passwordArray = Array.from(value.toUpperCase());

                passwordValid = passwordArray.length >= 4 ? true : false;

                previousPasswordValue["password"].valid = passwordValid;
                setLoginForm({ ...previousPasswordValue });
                validateForm()
                break
            default:
                break;
        }

    }

    return <section className="w-full p-1">
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
            autoComplete="off"
            className="max-w-[700px] mt-20 border bg-white h-[400px] rounded-lg p-5 sm:p-10 m-auto flex flex-col gap-5 dark:bg-[#1A1A1A] dark:border-none ">
            <div className="">
                <Inputs disabled={loading} inputType="email" label="Email" valid={loginForm["email"].valid} onChange={(value: string) => onChange("email", value)} errorMessage="user email required !" />
            </div>
            <div className="">
                <Inputs disabled={loading} inputType="password" label="Password" valid={loginForm["password"].valid} onChange={(value: string) => onChange("password", value)} errorMessage="Invalid password! (more than 5 characters)" />
            </div>

            <div className="w-full">
                <SumitBtn disabled={!loginForm.valid} loading={loading} submit={loginHandler} label={"Login"} />
            </div>
            <div className=""><Link className="text-gray-500" to={"/register"}>dont have an account register <strong className="text-[#33DDFB]" >here</strong> </Link></div>
            {messageError && <p className="relative bottom-1 text-red-500 flex items-center gap-2">  <IoAlertCircle />  {messageError}</p>}
        </form>
    </section>
        ;
};




//register form
const registerInitialValue = {
    email: {
        type: "email",
        label: "Email",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "User email required",
        value: ""
    },
    password: {
        type: "password",
        label: "Password",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "password required ( more that 4 characters )",
        value: "",
    },
    firstName: {
        type: "text",
        label: "First Name",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "First name not provided",
        value: ""
    },
    lastName: {
        type: "text",
        label: "Last name",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "last name name not provided",
        value: ""
    },
    location: {
        type: "text",
        label: "Location",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "Location not provided !",
        value: ""
    },
    occupation: {
        type: "text",
        label: "Occupation",
        valid: false,
        touched: false,
        error: false,
        errorMessage: "Occupation not provided !",
        value: ""
    },
    valid: false
}

export const RegisterForm = () => {
    const [registerForm, setRegisterForm] = useState(registerInitialValue);
    const imagePicker = React.useRef<any>(null);
    const [profileImage, setProfileIamge] = useState<any>(null);
    const imageSrc = useRef<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const navigate = useNavigate();

    const registerHandler = () => {
        setErrorMessage(null);
        setLoading(true)
        const validForm = registerForm.valid;

        const previousValue = registerForm;
        previousValue.valid = false;
        setRegisterForm({ ...previousValue })

        previousValue.valid = false;
        const firstName = registerForm["firstName"].value;
        const lastName = registerForm["lastName"].value;
        const email = registerForm["email"].value;
        const password = registerForm["password"].value;
        const occupation = registerForm["occupation"].value;
        const location = registerForm["location"].value;

        register({ email, password, firstName, lastName, occupation, location, profileImage })
            .then(result => {
                setLoading(false);
                console.log(result);
                previousValue.valid = validForm;
                setRegisterForm({ ...previousValue })
                navigate("/");
            }).catch(error => {
                setLoading(false);
                setErrorMessage(error.length > 120 ? "something went wrong please try again" : error);
                previousValue.valid = validForm;
                setRegisterForm({ ...previousValue })
            })
    }

    function selectImageProfile() {
        const file = (imagePicker.current.files[0]);
        if (file) {
            setProfileIamge(file)
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                imageSrc.current.src = result;
            }
            reader.readAsDataURL(file)
        }
    }
    const clickImagePicker = () => {
        imagePicker.current.click()
    }

    const validateTheForm = (): void => {

        if (registerForm["email"].valid &&
            registerForm["password"].valid
            && registerForm["occupation"].valid
            && registerForm["location"].valid
            && registerForm["firstName"].valid
            && registerForm["lastName"].valid) {

            const formPreviousValue = registerForm;
            formPreviousValue.valid = true
            setRegisterForm({ ...formPreviousValue })
        } else {
            const formPreviousValue = registerForm;
            formPreviousValue.valid = false
            setRegisterForm({ ...formPreviousValue })
        }
    }


    const onChange = (type: string, value: any,) => {
        setErrorMessage(null);
        switch (type) {
            case "firstName":
                console.log("second")
                const initialFirstName = registerForm;
                initialFirstName["firstName"].value = value;
                if (initialFirstName["firstName"].value.length > 2) {
                    initialFirstName["firstName"].valid = true;
                    setRegisterForm({ ...initialFirstName })
                } else {
                    initialFirstName["firstName"].valid = false;
                    setRegisterForm({ ...initialFirstName })
                }
                validateTheForm()
                break;
            case "lastName":
                const initialLast = registerForm;
                initialLast["lastName"].value = value;
                if (initialLast["lastName"].value.length > 2) {
                    initialLast["lastName"].valid = true;
                    setRegisterForm({ ...initialLast })
                } else {
                    initialLast["lastName"].valid = false;
                    setRegisterForm({ ...initialLast })
                }
                validateTheForm()
                break;
            case "location":
                const initialLocation = registerForm;
                initialLocation["location"].value = value;
                if (initialLocation["location"].value.length > 2) {
                    initialLocation["location"].valid = true;
                    setRegisterForm({ ...initialLocation })
                } else {
                    initialLocation["location"].valid = false;
                    setRegisterForm({ ...initialLocation })
                }
                validateTheForm()
                break;
            case "occupation":
                const initialOccupation = registerForm;
                initialOccupation["occupation"].value = value;
                if (initialOccupation["occupation"].value.length > 2) {
                    initialOccupation["occupation"].valid = true;
                    setRegisterForm({ ...initialOccupation })
                } else {
                    initialOccupation["occupation"].valid = false;
                    setRegisterForm({ ...initialOccupation })
                }
                validateTheForm()
                break;
            case "email":
                const previousEmailValue = registerForm;
                previousEmailValue["email"].value = value;
                const pattern = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
                const test = pattern.test(previousEmailValue["email"].value);
                previousEmailValue["email"].valid = test;
                setRegisterForm({ ...previousEmailValue });
                validateTheForm()
                break;
            case "password":
                let passwordValid = false;
                const previousPasswordValue = registerForm;
                previousPasswordValue["password"].value = value;
                const passwordArray = Array.from(value.toUpperCase());

                passwordValid = passwordArray.length >= 4 ? true : false;

                previousPasswordValue["password"].valid = passwordValid;
                setRegisterForm({ ...previousPasswordValue })
                validateTheForm()
        }
    }

    return <div>
        <section className="w-full p-1">
            <form className="max-w-[700px] mt-10 border bg-white  rounded-lg p-4 sm:p-10 m-auto flex flex-col gap-5 dark:bg-[#1A1A1A] dark:border-none mb-10 " onSubmit={(e) => {
                e.preventDefault();
            }}>
                <div className="w-32 h-32 my-5 md:w-52 md:h-52 overflow-hidden rounded-full m-auto  border flex justify-center items-center">
                    <img
                        className="w-full z-20 object-cover h-full relative"
                        ref={imageSrc}
                        alt="" />
                    <AiOutlineCamera onClick={() => clickImagePicker()} className="text-gray-400 text-3xl z-50 cursor-pointer  absolute" />
                    <input
                        onChange={(event) => {
                            selectImageProfile()
                        }} className="hidden"
                        type="file"
                        accept="image/*"
                        ref={imagePicker} />
                </div>

                <div className="h-4">
                    {errorMessage && <p className="relative bottom-1 text-red-500 flex items-center gap-2">  <IoAlertCircle />  {errorMessage}</p>}

                </div>


                <div className="w-full flex flex-col md:flex-row gap-6">
                    <div className="w-full">
                        < Inputs disabled={loading} errorMessage={registerForm["firstName"].errorMessage} inputType={registerForm["firstName"].type} onChange={(value: string) => { onChange("firstName", value) }} label={registerForm["firstName"].label} valid={registerForm["firstName"].valid} />
                    </div>
                    <div className="w-full">
                        <Inputs disabled={loading} errorMessage={registerForm["lastName"].errorMessage} inputType={"text"} onChange={(value: string) => { onChange("lastName", value) }} label={registerForm["lastName"].label} valid={registerForm["lastName"].valid} />
                    </div>
                </div>

                <div className="w-full flex gap-4">
                    <Inputs disabled={loading} errorMessage={registerForm["location"].errorMessage} inputType={"text"} onChange={(value: string) => { onChange("location", value) }} label={registerForm["location"].label} valid={registerForm["location"].valid} />
                </div>

                <div className="w-full flex gap-4">
                    <Inputs disabled={loading} errorMessage={registerForm["occupation"].errorMessage} inputType={"text"} onChange={(value: string) => { onChange("occupation", value) }} label={registerForm["occupation"].label} valid={registerForm["occupation"].valid} />
                </div>

                <div className="w-full flex gap-4">
                    <Inputs disabled={loading} errorMessage={registerForm["email"].errorMessage} inputType={"text"} onChange={(value: string) => { onChange("email", value) }} label={registerForm["email"].label} valid={registerForm["email"].valid} />
                </div>

                <div className="w-full flex gap-4">
                    <Inputs disabled={loading} errorMessage={registerForm["password"].errorMessage} inputType={"password"} onChange={(value: string) => { onChange("password", value) }} label={registerForm["password"].label} valid={registerForm["password"].valid} />
                </div>
                <div className="w-full">
                    <SumitBtn disabled={!registerForm.valid} loading={loading} submit={registerHandler} label={"Login"} />
                </div>
                <Link className="text-gray-500" to={"/"}>Already have an account <strong className="text-[#33DDFB]" >here</strong> </Link>
            </form>
        </section>
    </div>
}

