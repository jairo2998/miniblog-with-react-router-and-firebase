import { db } from "../firebase/config";
import { app } from "../firebase/config";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth(app);

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }
    const createUser = async (data) => {
        checkIfIsCancelled();
        setLoading(true);
        setError(null);

        try {
            const {user} = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await updateProfile(user, { displayName: data.displayName });
            return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes("Password")) {   
                systemErrorMessage = "A senha deve ter pelo menos 6 caracteres.";
            } else if (error.message.includes("email-already-in-use")) {
                systemErrorMessage = "Este email já está em uso.";
            } else if (error.message.includes("invalid-email")) {
                systemErrorMessage = "O e-mail digitado é inválido.";
            } else {
                systemErrorMessage = "Ocorreu um erro. Tente novamente mais tarde.";
            }

            setError(systemErrorMessage);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading
    };
};