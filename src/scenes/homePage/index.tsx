import React from "react";
import PageWeapper from "../../components/HOC/pageWeapper";
import Header from "../../components/navbar/index"
import Profile from "../../components/profile/Profile";
import Post from "../../components/post/Post";
import NewPost from "../../components/newPost/NewPost";
import Adds from "../../components/Adds/Add";
import FriendList from "../../components/friendList/FriendList";
import TopDirectionBtn from "../../components/UI/topDirectionBtn";



const HomePage = () => {
    return <div>
        <div className="scrollRef"></div>
        <Header />
        <PageWeapper>
            <>
                <TopDirectionBtn />
                <div className="self-start relative w-full tablet:max-w-[320px]  h-full ">
                    <Profile />
                </div>

                <div className="w-full pc:max-w-[550px]  min-w-[300px] ">
                    <NewPost />
                    <Adds classes="mb-4 pc:hidden" />
                    <Post />
                    <Post />
                    <Post />
                </div>
                <div className="self-start ">
                    <div className="h-full    hidden  pc:flex  relative mr-5">
                        <Adds classes="" />
                    </div>
                    <FriendList />
                </div>

            </>
        </PageWeapper>
    </div>;
};

export default HomePage;
