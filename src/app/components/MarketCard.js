"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { sunset } from "../../../public/assets"; // Import the sunset image
import marketData from "../data/marketData.json"

const MarketCard = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data from JSON file
        setData(marketData[0]);
    }, []);
    return (
        <div className="h-[15rem] bg-white w-[90%] mx-auto mb-4 z-10 flex flex-col boxShadow">
            <div className="bg-blue-900 image-part">
                {/* Render the image */}
                <Image
                    src={sunset}
                    alt="sunset"
                    height={200} // Adjust the height according to your needs
                    width={300} // Adjust the width according to your needs
                    className="image"
                />
            </div>
            <div className="min-h-[40%] max-w-[90%] mx-auto pt-1">
                {/* Render title and description */}
                <p className="font-bold text-[13px] text-black">{data && data.title}</p>
                <p className="text-[12px] text-black">{data && data.description}</p>
            </div>
        </div>
    )
}

export default MarketCard;