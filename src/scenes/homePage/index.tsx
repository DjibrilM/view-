import React from "react";
import PageWeapper from "../../components/HOC/pageWeapper";
import Header from "../../components/navbar/index"
import Profile from "../../components/profile/Profile";
import Post from "../../components/post/Post";
import NewPost from "../../components/newPost/NewPost";
import Adds from "../../components/Adds/Add";


const HomePage = () => {
    return <div>
        <Header />
        <PageWeapper>
            <>
                <Profile />

                <div className="w-full pc:max-w-[550px]  min-w-[300px] ">
                    <NewPost />
                    <Adds classes="mb-4 pc:hidden" />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="h-full    hidden  pc:flex self-start relative mr-5">
                    <Adds classes="" />
                </div>

            </>
        </PageWeapper>
    </div>;
};

export default HomePage;
