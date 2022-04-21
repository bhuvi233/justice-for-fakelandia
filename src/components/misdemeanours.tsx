import React, { useContext } from "react";
import { IMisdemeanour, MisdemeanourContext } from "./misdemeanourContext";
import { MisdemeanourTable } from "./misdemeanourTable";

export const Misdemeanours: React.FC = () => {

    const misdemeanours: IMisdemeanour[] = useContext(MisdemeanourContext);

    return (
        <div className="misdemean__container">
            <div className="misdemean__item item--title misdemean__item--citizenId">Citizen ID</div>
            <div className="misdemean__item item--title">Date</div>
            <div className="misdemean__item item--title">Misdemeanour</div>
            <div className="misdemean__item item--title">Punishment Idea</div>
            {misdemeanours.map ((misdemeanour, index) => 
                    <MisdemeanourTable 
                        citizenId={misdemeanour.citizenId}
                        date={misdemeanour.date}
                        misdemeanour= {misdemeanour.misdemeanour}/>
            )}
            
        </div>
    );
}