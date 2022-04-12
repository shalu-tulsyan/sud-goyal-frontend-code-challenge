import React from 'react';
import Input from '../Input';
import './styles.css';

type NewUserFormPropsType = {
    handleSubmit: (event: any) => void;
    handleBodyChange: (event: any) => void;
    handleTextChange: (event: any) => void;
    title: string;
    body: string;
}

export default function NewUserForm({handleSubmit,handleBodyChange,handleTextChange,title, body}: NewUserFormPropsType)
{
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <Input handleInputChange={handleTextChange} text={title} id="title" name="title" />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <Input handleInputChange={handleBodyChange} text={body} id="body" name="body" />
            </div>
            <div className="buttonContainer">
                <button type="submit">Register</button>
            </div>
        </form>
    );
}