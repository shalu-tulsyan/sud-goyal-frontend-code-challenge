import React from 'react';
import './styles.css';

type InputPropsType = {
    handleInputChange: (event: any) => void;
    text: string;
    id: string;
    name: string
}

export default function Input({handleInputChange, text, id, name}:InputPropsType)
{
    return (
        <input onChange={handleInputChange} value={text} id={id} name={name} />
    );
}