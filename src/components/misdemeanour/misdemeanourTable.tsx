import React from "react";
import { Misdemeanour, MISDEMEANOURS } from "../../docs/generate_misdemeanours";
import { IMisdemeanour } from "./misdemeanourContext";

interface MisdemeanourMapProps {
    description: string;
    image: string;
}

const misdemeanourEmojiMap = new Map<Misdemeanour, MisdemeanourMapProps>();
misdemeanourEmojiMap.set(MISDEMEANOURS[0], {
    description: "Mild Public Rudeness = 🤪",
    image: "https://picsum.photos/200",
});
misdemeanourEmojiMap.set(MISDEMEANOURS[1], {
    description: "Not Eating Your Vegetables = 🥗",
    image: "https://picsum.photos/201",
});
misdemeanourEmojiMap.set(MISDEMEANOURS[2], {
    description: "Speaking in a Lift = 🗣",
    image: "https://picsum.photos/202",
});
misdemeanourEmojiMap.set(MISDEMEANOURS[3], {
    description: "Supporting Manchester United = 😈",
    image: "https://picsum.photos/203",
});

export const MisdemeanourTable: React.FC<IMisdemeanour> = ({
    citizenId,
    date,
    misdemeanour,
}) => (
    <>
        <div className="misdemean__item misdemean__item--citizenId">
            {citizenId}
        </div>
        <div className="misdemean__item">{date}</div>
        <div className="misdemean__item">
            {misdemeanourEmojiMap.get(misdemeanour)?.description}
        </div>
        <div className="misdemean__item">
            <img
                src={misdemeanourEmojiMap.get(misdemeanour)?.image}
                alt="alternative"
            />
        </div>
    </>
);
