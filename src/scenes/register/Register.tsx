import React from "react";
import { useRecoilState } from "recoil";
import RegisterNav from "../../components/navbar/registerNav";
import user from "../../recoil/user";
import { RegisterForm } from "../../components/form/Form";

const Register = () => {
    const [userSatate, setUserState] = useRecoilState(user);
    return <div className="w-full h-full bg-lightBackground dark:bg-darkBackground duration-500">
        <RegisterNav />
        <RegisterForm />
    </div>;
};

export default Register;
