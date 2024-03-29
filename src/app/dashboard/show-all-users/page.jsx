"use client"
import React, {useState, useEffect} from 'react';
import "./globals.css";

const Show_all_users = () => {
    const [users, setusers] = useState([])
    let api = "http://127.0.0.1:8000/api/user/show";
    useEffect(() => {
        fetch(api)
        .then((response) => response.json())
        .then((data) => setusers(data))
        .catch((error) => new Error(error));
    }, [])

    let all_users = users.map((user, index) => {
        return (
            <tr className='text-center' key={index}>
                <td> {user.id} </td>
                <td> {user.name} </td>
                <td> {user.email} </td>
                <td className='d-flex justify-content-center gap-3'>
                    <button className='btn btn-outline-success fs-5 py-1 px-2'>Edit</button>
                </td>
            </tr>
        )})

    return (
        <div className="user_management">
            <h1 className='my-4 text-center' style={{textTransform: 'uppercase', color: 'teal'}}>users management 👨‍💻👩‍💻</h1>
            <table className="table table-striped table-hover p-2 border">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>#id</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>user name</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>email</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>action</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {all_users}
                    </tbody>
                </table>
        </div>
    )
}

export default Show_all_users;