import { atom } from "recoil";


const user = atom({
    key: "user_stats_10",
    default:
    {
        isLoggedIn: false,
        mode: "light",
        user: null,
        token: null,
        posts: [],
    }
})

export default user