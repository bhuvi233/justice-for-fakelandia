import React from "react";

export const ConfessionFormTextareaInput: 
    React.FC<{onChangeConfession:(e: React.ChangeEvent<HTMLTextAreaElement>) => void;}> = 
        ({onChangeConfession}) =>   
    <textarea 
        placeholder="Minimum 100 characters" 
        rows= {10} 
        cols ={80} 
        onChange={onChangeConfession}>
    </textarea>