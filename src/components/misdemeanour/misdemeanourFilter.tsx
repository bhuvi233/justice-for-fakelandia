import React from "react";

interface MisdemeanourFilterProps {
    columnName: string;
    onChangeFilter: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const MisdemeanourFilter: React.FC<MisdemeanourFilterProps> = ({
    columnName,
    onChangeFilter,
}) => (
    <div className="misdemean__item item--title title--misdemean">
        <div>{columnName}</div>
        <select onChange={onChangeFilter}>
            <option value="all">All</option>
            <option value="rudeness">Rudeness</option>
            <option value="vegetables">Vegetables</option>
            <option value="lift">Lift</option>
            <option value="united">United</option>
        </select>
    </div>
);
