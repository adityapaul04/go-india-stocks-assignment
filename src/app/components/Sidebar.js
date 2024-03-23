"use client";
import { useState } from "react";
import Image from "next/image";
import { bell, control, discussion, market, user } from "../../../public/assets";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const Menus = [
        { title: "Discussion Forum", src: discussion },
        { title: "Market Stories", src: market },
        { title: "Sentiment" },
        { title: "Market" },
        { title: "Sector" },
        { title: "Watchlist" },
        { title: "Events" },
        { title: "News/Interview" },
    ];

    return (
        <div className="min-h-screen">
            <div
                className={`${open ? "w-72" : "w-0 "
                    } bg-[#1e375f] min-h-[125vh] pt-8 md:relative duration-300 absolute z-[999]`}
            >
                <div
                    className="absolute cursor-pointer -right-4 top-[40%] w-6 h-24 bg-[#1e375f]  justify-center flex items-center"
                    onClick={() => setOpen(!open)}
                >
                    <Image
                        src={control}
                        className={`w-3 ${!open && "rotate-180"}`}
                        alt="control-icon"
                        width
                        height
                    />
                </div>
                <div className="flex gap-x-4 spacy items-center pl-3 pr-8 pb-8">
                    <div className="flex flex-row text-center justify-center items-center">
                        {open && (
                            <Image
                                src={user}
                                alt="user-icon"
                                width={25}
                                height={25}
                            />
                        )}
                        <h1
                            className={`pl-2 text-white origin-left duration-200 border-none ${!open && "scale-0"}`}
                        >
                            Hello, User
                        </h1>
                    </div>
                    <div className="flex flex-row items-center">
                        <Image src={bell} alt="bell-icon" width={18} height={18} />
                    </div>
                </div>
                {open && <hr className="border-b-1 border-white w-full" />}
                <ul className="pt-6 pl-2">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            {Menu.src ? (
                                <Image src={Menu.src} alt="menu" width={22} height={22} />
                            ) : (
                                <div style={{ width: 20, height: 20 }} />
                            )}
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;