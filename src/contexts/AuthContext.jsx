import { createContext, useContext, useState, useEffect } from 'react';
import { USERS } from '../data/users.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const saved = localStorage.getItem('lms_mkp_auth');
            return saved ? JSON.parse(saved) : null;
        } catch { return null; }
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem('lms_mkp_auth', JSON.stringify(user));
        } else {
            localStorage.removeItem('lms_mkp_auth');
        }
    }, [user]);

    function login(username, password) {
        const found = USERS.find(u => u.username === username && u.password === password);
        if (found) {
            const { password: _, ...safeUser } = found;
            setUser(safeUser);
            return { success: true, user: safeUser };
        }
        return { success: false, error: 'Username atau password salah' };
    }

    function logout() {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
}

export default AuthContext;
