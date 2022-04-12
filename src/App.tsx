import React, { useState } from 'react';
import './App.css';
import NewUserForm from './components/NewUserForm';

function App()
{
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function handleTextChange(event: any)
  {
    setTitle(event.target.value);
  }

  function handleBodyChange(event: any)
  {
    setBody(event.target.value);
  }

  async function handleSubmit(event: any)
  {
    event.preventDefault();
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    console.log(response.json())
  }

  return (
    <div className="App">
      <NewUserForm
        title={title}
        body={body}
        handleTextChange={handleTextChange}
        handleBodyChange={handleBodyChange}
        handleSubmit={(event: any) => handleSubmit(event)}
      />
    </div>
  );
}

export default App;
