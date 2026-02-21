import { create } from 'zustand';

interface User {
    id: string;
    username: string;
    name: string;
    role: string;
    avatar: string;
}

interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    isAuthenticated: false,
    user: null,
    error: null,

    login: async (username, password) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (username === 'admin' && password === 'admin123') {
            const user: User = {
                id: 'usr-1',
                username: 'admin',
                name: 'Jane Doe',
                role: 'Administrator',
                avatar: 'https://i.pravatar.cc/150?u=jane.doe'
            };
            set({ isAuthenticated: true, user, error: null });
        } else {
            set({ error: 'Invalid username or password' });
        }
    },

    logout: () => {
        set({ isAuthenticated: false, user: null, error: null });
    },

    clearError: () => {
        set({ error: null });
    }
}));
