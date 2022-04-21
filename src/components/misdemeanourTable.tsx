import React from "react";
import { Misdemeanour, MISDEMEANOURS } from "../docs/generate_misdemeanours";
import { IMisdemeanour } from "./misdemeanourContext";

const misdemeanourEmojiMap = new Map <Misdemeanour, string>();
misdemeanourEmojiMap.set(MISDEMEANOURS[0], '🤪' );
misdemeanourEmojiMap.set(MISDEMEANOURS[1], '🥗' );
misdemeanourEmojiMap.set(MISDEMEANOURS[2], '🗣') ;
misdemeanourEmojiMap.set(MISDEMEANOURS[3], '😈');


export const MisdemeanourTable : React.FC<IMisdemeanour> = ({citizenId, date, misdemeanour}) =>
    <>
        <div className="misdemean__item misdemean__item--citizenId">{citizenId}</div>
        <div className="misdemean__item">{date}</div>
        <div className="misdemean__item">{misdemeanour} = {misdemeanourEmojiMap.get(misdemeanour)}</div>
        <div className="misdemean__item"><img src='https://picsum.photos/200/200' alt = "alternative"/></div>
    </>