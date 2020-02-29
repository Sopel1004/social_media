import React, { useState, useEffect } from 'react';
import firebase from '../config/firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        auth: false,
        user: null,
        loading: true
    });

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setCurrentUser({
                    auth: true,
                    user: user,
                    loading: false
                });
            } else {
                setCurrentUser({
                    auth: false,
                    user: null,
                    loading: false
                });
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
