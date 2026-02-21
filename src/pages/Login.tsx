import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LogIn, Waves, User, Lock, AlertCircle } from 'lucide-react';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { login, isAuthenticated, error, clearError } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard', { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!username || !password) return;

        setIsSubmitting(true);
        await login(username, password);
        setIsSubmitting(false);
    };

    return (
        <div className="login-container">
            <div className="login-card glass-panel animate-fade-in">
                <div className="login-header">
                    <div className="logo-container">
                        <Waves className="logo-icon" size={32} />
                    </div>
                    <h2>Welcome Back</h2>
                    <p className="subtitle">Sign in to access your analytics dashboard</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    {error && (
                        <div className="error-message">
                            <AlertCircle size={18} />
                            <span>{error}</span>
                        </div>
                    )}

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <div className="input-with-icon">
                            <User size={18} className="input-icon" />
                            <input
                                id="username"
                                type="text"
                                className="input-field"
                                placeholder="Enter 'admin'"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                    if (error) clearError();
                                }}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-with-icon">
                            <Lock size={18} className="input-icon" />
                            <input
                                id="password"
                                type="password"
                                className="input-field"
                                placeholder="Enter 'admin123'"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    if (error) clearError();
                                }}
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary login-btn"
                        disabled={isSubmitting || !username || !password}
                    >
                        {isSubmitting ? (
                            <span className="spinner"></span>
                        ) : (
                            <>
                                <LogIn size={18} />
                                Sign In
                            </>
                        )}
                    </button>

                    <div className="demo-credentials">
                        <p>Demo Credentials:</p>
                        <p><strong>Username:</strong> admin | <strong>Password:</strong> admin123</p>
                    </div>
                </form>
            </div>
        </div>
    );
};
