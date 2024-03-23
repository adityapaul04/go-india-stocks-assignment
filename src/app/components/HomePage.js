"use client";
import { useState, useEffect } from "react";
import discussionData from "../data/discussionData.json"
import DiscussionForumCard from "./DiscussionForumCard";
import MarketCard from "./MarketCard";

const HomePage = () => {

    const [open, setOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState("discussion");
    const [action, setAction] = useState("Discussion Forum");

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        setPosts(discussionData[0]);
    }, []);

    return (
        // <div className="h-full md:pt-6 md:flex md:flex-row">
        <div className="h-full md:pt-6 md:flex md:flex-row w-full">
            <div className="h-full inline-block md:flex md:flex-col md:w-[70%] desktop-view">
                <h1 className="submit desktop-view ext-[#cb5963]">DISCUSSION FORUM</h1>
                <div className="pt-4 desktop-view">
                    <DiscussionForumCard />
                    <DiscussionForumCard />
                    <DiscussionForumCard />
                    <DiscussionForumCard />
                </div>
            </div>
            <div className=" h-full inline-block md:flex md:flex-col md:w-[25%] desktop-view">
                <h1 className="submit desktop-view text-[#cb5963]">MARKET STORIES</h1>
                <div className="pt-4 desktop-view">
                    <MarketCard />
                    <MarketCard />
                    <MarketCard />
                </div>
            </div>
            <div className="mobile-view min-w-[90%] mx-auto h-full">
                <div className="flex flex-row min-w-[100%]">
                    <div className="min-w-[50%]">
                        <h1 className={action === "Market Stories" ? "submit" : "submit "} onClick={() => {
                            setAction("Discussion Forum")
                        }}>Discussion Forum</h1>
                    </div>
                    <div className="min-w-[50%]">
                        <h1 className={action === "Discussion Forum" ? "submit" : "submit "} onClick={() => {
                            setAction("Market Stories")
                        }}>Market Stories</h1>
                    </div>
                </div>
                {action === "Discussion Forum" &&
                    <div className="pt-4 min-h-[100vh]">
                        <DiscussionForumCard />
                        <DiscussionForumCard />
                        <DiscussionForumCard />
                        <DiscussionForumCard />
                    </div>
                }
                {action === "Market Stories" &&
                    <div className="pt-4 min-h-[100vh]">
                        <MarketCard/>
                        <MarketCard />
                        <MarketCard />
                    </div>
                }
            </div>
        </div>
    )
}

export default HomePage;