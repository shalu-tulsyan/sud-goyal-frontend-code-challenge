import React, { useState } from 'react';
import './App.css';
import GetUserForm from './components/GetUserForm';
import NewUserForm from './components/NewUserForm';

function App()
{
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
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
    if (title!=null && body != null)
    {
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
      if (response.status === 201)
      {
        alert("successfully register user")
      }
      else
      {
        alert("failed user registration")
      }
      console.log(response.status)
    }
    else alert('please enter title and body')
    
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
      <GetUserForm />
    </div>
  );
}

export default App;
