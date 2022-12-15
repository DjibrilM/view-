import axios from "axios";


export interface registerParams {
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    location: string,
    occupation: string,
    profileImage: any,
}

export const login = (email: string, password: string) => {
    const promise = new Promise((resolve: Function, reject: Function) => {
        axios.post("http://localhost:8080/auth/login", {
            email: email,
            password: password,
        }).
            then(result => {
                resolve(result.data);
            }).catch(err => {
                const errorMessage = err.response?.data.message;
                reject(errorMessage ? errorMessage : "something went wrong please check your network !");
            })
    })
    return promise
}


export const register = ({ email, password, firstName, lastName, occupation, location, profileImage }: registerParams) => {
    const promise = new Promise((resolve: Function, reject: Function) => {
        const datas = new FormData();
        datas.append("email", email)
        datas.append("password", password);
        datas.append("firstName", firstName);
        datas.append("lastName", lastName);
        datas.append("occupation", occupation);
        datas.append("location", location);
        datas.append("file", profileImage);
        axios({
            data: datas,
            method: "post",
            url: "http://localhost:8080/auth/register",
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            resolve(result.data);
        }).catch(err => {
            const errorMessage = err.response?.data.message;
            reject(errorMessage ? errorMessage : "something went wrong please check your network !");
        })
    })

    return promise;
}

export const verify = (token: string) => {
    const promise = new Promise((resolve: Function, reject: Function) => {

        axios({
            url:"http://localhost:8080/auth/verifyUser",
            method:"post",
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then(result => {
                resolve(result.data);
            }).catch(err => {
                console.log(err);
                reject(err);
            })
    })

    return promise
}