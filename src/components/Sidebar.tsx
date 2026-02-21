import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, FolderKanban, Settings, Waves, PieChart } from 'lucide-react';

export const Sidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: FolderKanban, label: 'Projects', path: '/projects' },
        { icon: PieChart, label: 'Analytics', path: '/analytics' },
        { icon: Users, label: 'Team', path: '/team' },
        { icon: Settings, label: 'Settings', path: '/settings' },
    ];

    return (
        <aside className="sidebar glass-panel">
            <div className="sidebar-header">
                <Waves className="logo-icon" size={28} />
                <span className="logo-text text-gradient">Nexus Analytics</span>
            </div>

            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>

            <div className="sidebar-footer">
                <div className="system-status">
                    <div className="status-indicator online"></div>
                    <span>System Online</span>
                </div>
            </div>
        </aside>
    );
};
