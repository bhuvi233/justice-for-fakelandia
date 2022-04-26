import React from "react";

interface ConfessionFormTextareaProps {
    confession: string;
    onChangeConfession: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const ConfessionFormTextareaInput: React.FC<
    ConfessionFormTextareaProps
> = ({ confession, onChangeConfession }) => (
    <textarea
        value={confession}
        placeholder="Minimum 100 characters"
        rows={10}
        cols={80}
        onChange={onChangeConfession}
    ></textarea>
);
