import React from "react";
import { IMisdemeanour } from "./misdemeanourContext";

export const MisdemeanourTable : React.FC<IMisdemeanour> = ({citizenId, date, misdemeanour}) =>
    <>
        <div className="misdemean__item misdemean__item--citizenId">{citizenId}</div>
        <div className="misdemean__item">{date}</div>
        <div className="misdemean__item">{misdemeanour}</div>
        <div className="misdemean__item"><img src='https://picsum.photos/200/200' alt = "alternative"/></div>
    </>