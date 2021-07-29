import React, { useContext, useState } from 'react';
import UserContext from "../context/UserContext";

const Profile = () => {
    const {user, setUser} = useContext(UserContext)
    console.log(user);
    const [loading, setLoading] = useState(false)
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({
                id: 1,
                username: "Harry",
                bio: "Lorem ipsum"
            })
            setLoading(false)
        }, 1500)
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            {
                !user && <button onClick={handleLogin}>{loading ? "loading..." : "log in"}</button>

            }

            <br/><code>{JSON.stringify(user)}</code> <br/>
            {
                user && <button onClick={handleLogout}>log out</button>

            }
        </div>
    );
};

export default Profile;