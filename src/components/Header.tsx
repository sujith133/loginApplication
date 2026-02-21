import { LogOut, Bell, Search } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Header = () => {
    const { user, logout } = useAuthStore();

    return (
        <header className="header glass-panel">
            <div className="header-search">
                <Search size={18} className="search-icon" />
                <input
                    type="text"
                    placeholder="Search projects, reports, or data..."
                    className="search-input"
                />
            </div>

            <div className="header-actions">
                <button className="icon-btn" aria-label="Notifications">
                    <Bell size={20} />
                    <span className="badge">3</span>
                </button>

                <div className="user-profile">
                    <img src={user?.avatar} alt={user?.name} className="avatar" />
                    <div className="user-info">
                        <span className="user-name">{user?.name}</span>
                        <span className="user-role">{user?.role}</span>
                    </div>
                </div>

                <button
                    onClick={logout}
                    className="btn btn-outline logout-btn"
                    aria-label="Logout"
                >
                    <LogOut size={16} />
                    <span>Logout</span>
                </button>
            </div>
        </header>
    );
};
