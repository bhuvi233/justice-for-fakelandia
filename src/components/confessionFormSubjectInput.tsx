import React from "react";

interface FormSubjectInputProps {
    subject: string,
    onChangeSubjectInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ConfessionFormSubjectInput:React.FC<FormSubjectInputProps> = ({subject, onChangeSubjectInput}) => 
    <>
        <label htmlFor='subject'>Subject: </label>
        <input id='subject' type='text' value={subject} onChange={onChangeSubjectInput} />
    </>