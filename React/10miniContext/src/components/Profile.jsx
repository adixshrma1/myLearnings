import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) return(
        <h2>Please Enter User Info.</h2>
    )
    else return(
        <h2>Hello! {user.username} </h2>
    )
}
