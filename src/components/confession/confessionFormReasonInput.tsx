interface ReasonInputProps{
    reason : string;
    onChangeReason : (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ConfessionFormReasonInput : React.FC<ReasonInputProps> = ({reason, onChangeReason}) => {
    return (
        <>
            <label htmlFor='reason'>Reason for contact: </label>
            <select value={reason} onChange={onChangeReason} >
                <option></option>
                <option value='rudeness'>Mild Public Rudeness</option>
                <option value='vegetables'>Not Eating Your Vegetables </option>
                <option value='lift'>Speaking in a Lift </option>
                <option value='united'>Supporting Manchester United </option>
                <option value='talk'>I just want to talk</option>
                </select>
        </>
    );
};