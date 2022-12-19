import React, { useRef, useState } from "react";
import user from "../../recoil/user";
import { BiImageAlt } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai"
import { IoCloseOutline } from "react-icons/io5";
import errorFile from "../../assets/vectors/server.png"
import { useEffect } from "react";
import LinkParaGraph from "../../widgets/linkParaGraph";




const NewPost = () => {
    const uploadvideoInput = useRef<any>();
    const uploadImageInput = useRef<any>();
    const [postText, setPostText] = useState<string>("");
    const [postContents, setTestContents] = useState<any>();
    const [postType, setPostType] = useState<"image" | "video" | null>();
    const textAreaRef = useRef<any>(null);
    const image = useRef<any>();
    const video = useRef<any>();
    const [failSize, setFailsize] = useState<boolean>(false);
    const [fileSize, setFileSize] = useState<number>(0);
    const [sizeExp, setSizeExp] = useState<string>();

    const resizeTextArea = () => {
        textAreaRef.current.style.height = "auto";
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
    };
    useEffect(resizeTextArea, [postText]);



    const onclickSelectInput = (type: string) => {
        switch (type) {
            case "video":
                uploadvideoInput.current.click();
                break;
            case "image":
                uploadImageInput.current.click();
                break
            default:
                break;
        }
    }


    function selectImage() {
        setFailsize(false)
        const file = (uploadImageInput.current.files[0]);
        if (file) {
            setTestContents(file);
            setPostType("image")
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                image.current.src = result;
            }
            reader.readAsDataURL(file)

            reader.onerror = () => {
                alert('fail to load your file !')
            }
        }
    }

    function selectVideo() {
        setFailsize(false)
        const file = uploadvideoInput.current.files[0];
        if (file) {
            if (file.size >= 1000000) {
                const mb = Math.floor(file.size / 1000000);
                const gb: any = (file.size / 1000000000).toFixed(2);
                const gbVerify: number = Math.floor(file.size / 1000000000);
                if (gbVerify > 0) {
                    setPostType(null)
                    setSizeExp("gb");
                    setFileSize(gb);
                    return setFailsize(true);
                }
                if (file.size >= 20000000) {
                    setSizeExp('mb');
                    setFileSize(mb);
                    return setFailsize(true);
                }
            }
            setTestContents(file);
            setPostType("video")
            const reader = new FileReader();
            reader.onload = function () {
                const result = reader.result;
                video.current.src = result;
            }
            reader.readAsDataURL(file)
        }
    }

    // max-w-[550px] 

    return <aside className="w-full   pb-8 py-4 px-4 bg-white border dark:border-none dark:bg-[#1A1A1A] rounded-lg self-start mb-10">
        <input type="file" accept="video/*" name="" id="" className="hidden" ref={uploadvideoInput} onChange={() => selectVideo()} />
        <input type="file" accept="image/*" name="" id="" className="hidden" ref={uploadImageInput} onChange={() => selectImage()} />
        <div className="flex justify-between gap-5  ">
            <div className="w-[50px] h-[50px]  rounded-full overflow-hidden">
                <img className="w-full h-full  object-cover"
                    src="https://media.istockphoto.com/id/459368695/photo/young-black-beauty-with-afro-hairstyle.jpg?s=612x612&w=0&k=20&c=5wJEThtNBqNY3c748Fl6Sg-gKH4dJuv8d8mRUCHs6DQ=" alt="" />
            </div>

            <div className="w-[90%] p-5  flex items-center bg-gray-200 dark:bg-[#3e3c3cce] rounded-[10px]">
                <textarea
                    defaultValue={postText}
                    rows={1}
                    ref={textAreaRef}
                    style={{
                        inlineSize: "100%",
                        overflowWrap: "break-word",
                    }}
                    onChange={(e) => { setPostText(e.target.value) }}
                    className="w-full p-[2px] resize-none overflow-hidden dark:text-gray-300 bg-transparent border-none outline-none text-[14px] " placeholder="what's on your mind...">
                </textarea>
            </div>
        </div>

        <div className="w-full mb-5">
            {postText && <>

                <p style={{

                    breakAfter: "all",
                    inlineSize: "100%",
                    overflowWrap: "break-word",

                }} className="mt-5 text-gray-600 dark:text-gray-50">
                    <LinkParaGraph paragraph={postText} />
                </p>

            </>}
        </div>


        <div
            className="w-full h-full overflow-hidden mt-3 relative  ">
            {postType && <div
                onClick={() => {
                    setTestContents(null);
                    setPostType(null);
                    image.current.src = '';
                    video.current.src = '';
                }}
                style={{
                    background: 'rgba(0,0,0, 0.8)',
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                }}
                className="w-[50px] active:scale-[1.4] duration-200 rounded-full h-[50px] flex items-center justify-center absolute top-5 left-6 z-50">
                <IoCloseOutline className="text-white text-2xl" />
            </div>
            }
            {postType === 'image' && <img
                ref={image}
                className="max-h-[500px]  object-cover w-full rounded-lg " alt="" />
            }

            {postType === 'video' &&
                <video
                    ref={video}
                    className="max-h-[500px]  object-cover w-full rounded-lg relative z-0" controls ></video>
            }

            {failSize &&
                <div className="w-full h-[250px] flex-col font-bold  dark:bg-[#3e3c3cce] bg-gray-100 flex items-center justify-center relative rounded-lg">
                    <div className="absolute left-3 h-8 w-8 rounded-full border border-gray-500 flex justify-center items-center top-3 cursor-pointer" onClick={() => setFailsize(false)}>
                        <IoCloseOutline className="text-gray-600 dark:text-white text-[20px]" />
                    </div>

                    <h1 className="relative bottom-5 text-gray-600 dark:text-gray-50 !">File too large😥</h1>
                    <p className="text-[14px] text-gray-600 dark:text-gray-50 font-thin relative bottom-4">You can't apload a video of more than 20mb !</p>
                    <img className="w-[60px]" src={errorFile} alt="" />
                    <p className="mt-3 dark:text-gray-200">file size: {fileSize}{sizeExp}</p>
                </div>
            }
        </div>

        <div className="flex w-full mt-4 gap-10 relative border-t pt-3 dark:border-t-[#ffffff10]">
            <div className="flex items-center gap-1 cursor-pointer" onClick={() => onclickSelectInput("image")}>
                <BiImageAlt className="text-gray-700 dark:text-gray-300" />
                <p className="text-gray-500 dark:text-gray-50">Image</p>
            </div>

            <div className="flex items-center gap-1 cursor-pointer" onClick={() => onclickSelectInput("video")}>
                <AiOutlineVideoCameraAdd className="text-gray-700 dark:text-gray-300" />
                <p className="text-gray-500 dark:text-gray-50">video</p>
            </div>

            <button className="absolute right-4 bg-[#35d3ef] active:bg-[#3296a8] px-7 py-2 text-gray-100 rounded-full text-[14px]">
                post
            </button>
        </div>
    </aside>
};

export default NewPost;
