import React from "react";
import { useRecoilState } from "recoil";
import RegisterNav from "../../components/navbar/registerNav";
import user from "../../recoil/user";
import { LoginForm } from "../../components/form/Form";

const LoginPage = () => {
    const [userSatate, setUserState] = useRecoilState(user);
    return <div className="w-full h-[100vh] bg-lightBackground dark:bg-darkBackground duration-500">
        <RegisterNav />
        <LoginForm />
    </div>;
};

export default LoginPage;
