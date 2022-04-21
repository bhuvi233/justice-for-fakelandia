import { createContext } from "react";
import { Misdemeanour } from "../../docs/generate_misdemeanours";

export interface IMisdemeanour {
    citizenId : number;
    misdemeanour: Misdemeanour;
    date: string;
}


export const MisdemeanourContext = createContext<Array<IMisdemeanour>>([{
    citizenId: 0,
    misdemeanour: 'rudeness',
    date: "20-04-2022"
}]);