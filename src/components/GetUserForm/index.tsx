import React, { useEffect, useState } from 'react';
import  GoogleMapComponent from '../GoogleMap';
import './styles.css'

type UserType = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: number;
        geo: {
            lat: number;
            lng: number
        }
    };
    phone: number;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}

export default function GetUserForm()
{
    const [users, setUsers] = useState<UserType[]>([]);
    const [selectedUser, setSelectedUser] = useState(0);

    var locationArray = Array.from(users.map((user, index) =>
    {
        return {
            name: user.address.suite.concat(user.address.street).concat(user.address.city),
            location: {
                lat: Number(users[index].address.geo.lat),
                lng: Number(users[index].address.geo.lng)
            }
        }
    }))

    function handleChange(event: any)
    {
        setSelectedUser(event.target.value)
    }

    function handleSubmit(event: any)
    {
        event.preventDefault();
        if (selectedUser === 0) alert("please select a user");
    }

    useEffect(() =>
    {
        const response = fetch('https://jsonplaceholder.typicode.com/users');
        response.then((result) =>
        {
            
            result.json().then((data) =>
            {
                setUsers(data)
            })
        })
    },[]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="formFieldContainer">
            <label className="labelText" htmlFor="users">Select user</label>
            <select className="optionContainer" value={selectedUser} onChange={(event: any)=>handleChange(event)} id="users">
                <option value={0}>select user</option>
                    {users.map((user, index) =>
                    {
                        return <option value={user.id} key={index}> {user.username} </option>
                    })}
            </select>
            </div>
            <button>Submit</button>
            <GoogleMapComponent locations={locationArray} />
        </form>
    );
}
