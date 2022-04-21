import React, { useContext, useEffect, useState } from "react";
import { IMisdemeanour, MisdemeanourContext } from "./misdemeanourContext";
import { MisdemeanourFilter } from "./misdemeanourFilter";
import { MisdemeanourTable } from './misdemeanourTable';

export const Misdemeanours: React.FC = () => {
    const [filtervalue, setFilterValue] = useState("all");
    const [localMisdemeanours, setLocalMisdemeanours] = useState<Array<IMisdemeanour>>([]);

    const misdemeanours: IMisdemeanour[] = useContext(MisdemeanourContext);

    useEffect(()=> {
        if (filtervalue !== 'all') 
            setLocalMisdemeanours(
                misdemeanours.filter(misdemeanour => 
                        misdemeanour.misdemeanour === filtervalue));
        else
            setLocalMisdemeanours(misdemeanours)
    },[misdemeanours, filtervalue]);

    return (
        <div className="misdemean__container">
            <div className="misdemean__item item--title misdemean__item--citizenId">Citizen ID</div>
            <div className="misdemean__item item--title">Date</div>
            <MisdemeanourFilter columnName="Misdemeanour" onChangeFilter={e => setFilterValue(e.target.value)} />
            <div className="misdemean__item item--title">Punishment Idea</div>
    
            {localMisdemeanours.map ((misdemeanour, index) => 
                    <MisdemeanourTable 
                        key = {index}
                        citizenId={misdemeanour.citizenId}
                        date={misdemeanour.date}
                        misdemeanour= {misdemeanour.misdemeanour}/>
            )}
        </div>
    );
}
