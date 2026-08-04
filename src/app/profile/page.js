"use client"
import React, { useState } from "react";
import { User } from "../_features/user";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [favLang, setFavLang] = useState("");
    const [phone, setPhone] = useState("");
    const addUser = (name, dob, favLang) => {
        if(name == "" || dob == "" || favLang == "") return;
        const newUsers = [...users, {id: users.length + 1, name: name, phone: phone, dob: dob, favLang: favLang}];
        setUsers(newUsers);
        setName("");
        setDOB("");
        setFavLang("");
    }
    return (
        <div id="content2">
        <div id="main2">
            <div id="inputs2">
            <input onChange={(event) => { setName(event.target.value)}} value={name} className="input2" placeholder="username"></input>
            <input onChange={(event) => { setDOB(event.target.value)}} value={dob} className="input2" placeholder="date of birth"></input>
            <input onChange={(event) => { setPhone(event.target.value)}} value={phone}  className="input2" placeholder="phone number"></input>
            <input onChange={(event) => { setFavLang(event.target.value)}} value={favLang}  className="input2" placeholder="favorite coding language"></input>
            <button onClick={() => addUser(name, dob, favLang)} id="button2">Add User</button>
            </div>
            <div id="users2">
                <p>Users:</p>
                {users.map((user) => {
                    return <User key={user.id} name={user.name} phone={user.phone} dob={user.dob} favLang={user.favLang}/>
                })}
            </div>
        </div>
        </div>
    )
}