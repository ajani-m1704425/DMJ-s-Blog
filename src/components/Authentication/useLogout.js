import React from 'react';
import UseAuthContext from '../Context/useAuthContext';

const useLogout = () => {
    const {dispatch} = UseAuthContext()

    const logout = () => {
        localStorage.removeItem('User')

        dispatch({type:"LOGOUT"})
    }

    return {logout};
};

export default useLogout;