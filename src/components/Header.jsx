import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/authProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                console.log(error);
            })
    }


    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <button className="btn btn-ghost text-xl">daisyUI</button>
                <Link className='btn btn-ghost text-m' to="/">Home</Link>
                <Link className='btn btn-ghost text-m' to="/login">Login</Link>
                <Link className='btn btn-ghost text-m' to="/register">Register</Link>
                {
                    user ? <>
                    <span>{user.email}</span>
                    <button onClick={()=> handleLogout()} className='btn btn-xs'> Sign-Out </button>
                    </> : <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;