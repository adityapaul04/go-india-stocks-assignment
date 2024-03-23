"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { avatar, comment, like, share, sunset, view, } from "../../../public/assets";
import discussionData from "../data/discussionData.json"

const DiscussionForumCard = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        // Fetch data from JSON file
        setPosts(discussionData[0]);
    }, []);
    return (
        <div className="h-44 bg-white boxShadow w-[90%] mx-auto mb-4 z-10 px-3">
            <div>
                <div className="flex flex-row topRow justify-center items-center">
                    <div className="flex justify-center items-center gap-4">
                        <div className="z-50 w-14 h-14 rounded-full bg-white max-sm:w-10 max-sm:h-10">
                            <Image src={avatar} alt="Avatar" height width />
                        </div>
                        <div>
                            <p className="text-gray-800 font-bold text-[15px] max-sm:text-[13px]">{posts && posts.username}</p>
                        </div> 
                        <div className="py-1 px-3 bg-[#23549f] text-white rounded-2xl">
                            <p className="text-[13px] max-sm:text-[10px]">{posts && posts.sector}</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div>
                            <p className="text-[14px] text-blue-700 font-semibold max-sm:text-[12px]">{posts && posts.timestamp}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center max-w-[85%] mx-auto mb-4 ">
                    <div>
                        <p className="text-[18px] text-gray-600 font-medium max-sm:text-[14px]">{posts && posts.description}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between space-x-4 max-w-[95%] mx-auto">
                    <div className="flex space-x-2 items-center">
                        <div className="">
                            <Image src={like} alt="like" height="20" width="20" />
                        </div>
                        <div>
                            <p className="font-semibold text-[12px] text-black max-sm:text-[10px]">{posts && posts.likes}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="">
                            <Image src={view} alt="like" height="20" width="20" />
                        </div>
                        <div>
                            <p className="font-semibold text-[12px] text-black max-sm:text-[10px]">{posts && posts.views}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="">
                            <Image src={comment} alt="like" height="20" width="20" />
                        </div>
                        <div>
                            <p className="font-semibold text-[12px] text-black max-sm:text-[10px]">{posts && posts.comments}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <div className="">
                            <Image src={share} alt="like" height="20" width="20" />
                        </div>
                        <div>
                            <p className="font-semibold text-[12px] text-black max-sm:text-[10px]">Share</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscussionForumCard