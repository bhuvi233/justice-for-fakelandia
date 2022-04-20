import React, { useContext } from "react";
import { IMisdemeanour, MisdemeanourContext } from "./misdemeanourContext";
import { MisdemeanourTable } from "./misdemeanourTable";

export const Misdemeanours: React.FC = () => {

    const misdemeanours: IMisdemeanour[] = useContext(MisdemeanourContext);

    return (
        <div className="misdemean__container">
            <div className="misdemean__item misdemean__item--citizenId">Citizen ID</div>
            <div className="misdemean__item">Date</div>
            <div className="misdemean__item">Misdemeanour</div>
            <div className="misdemean__item">Punishment Idea</div>
            {misdemeanours.map ((misdemeanour, index) => 
                    <MisdemeanourTable 
                        citizenId={misdemeanour.citizenId}
                        date={misdemeanour.date}
                        misdemeanour= {misdemeanour.misdemeanour}/>
            )}
            
        </div>
    );
}