import {
    BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import {
    Briefcase, Activity, DollarSign, TrendingUp, Calendar, ArrowUpRight
} from 'lucide-react';
import { projects, monthlyData, summaryMetrics } from '../mockData';

export const Dashboard = () => {
    return (
        <div className="dashboard animate-fade-in">
            <div className="dashboard-header">
                <div>
                    <h1 className="page-title">Analytics Overview</h1>
                    <p className="page-subtitle">Welcome to your project command center.</p>
                </div>
                <div className="date-filter btn btn-outline">
                    <Calendar size={16} />
                    <span>Last 7 Months</span>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="summary-grid">
                <div className="summary-card card">
                    <div className="card-icon-wrapper primary">
                        <Briefcase size={24} />
                    </div>
                    <div className="card-info">
                        <p className="card-label">Total Projects</p>
                        <h3 className="card-value">{summaryMetrics.totalProjects}</h3>
                    </div>
                    <div className="trend positive">
                        <ArrowUpRight size={16} />
                        <span>+12%</span>
                    </div>
                </div>

                <div className="summary-card card">
                    <div className="card-icon-wrapper success">
                        <Activity size={24} />
                    </div>
                    <div className="card-info">
                        <p className="card-label">Active Projects</p>
                        <h3 className="card-value">{summaryMetrics.activeProjects}</h3>
                    </div>
                    <div className="trend positive">
                        <ArrowUpRight size={16} />
                        <span>+4%</span>
                    </div>
                </div>

                <div className="summary-card card">
                    <div className="card-icon-wrapper warning">
                        <DollarSign size={24} />
                    </div>
                    <div className="card-info">
                        <p className="card-label">Total Budget</p>
                        <h3 className="card-value">${(summaryMetrics.totalBudget / 1000).toFixed(0)}k</h3>
                    </div>
                    <div className="trend">
                        <span>Stable</span>
                    </div>
                </div>

                <div className="summary-card card">
                    <div className="card-icon-wrapper info">
                        <TrendingUp size={24} />
                    </div>
                    <div className="card-info">
                        <p className="card-label">Completion Rate</p>
                        <h3 className="card-value">{summaryMetrics.completionRate}%</h3>
                    </div>
                    <div className="trend positive">
                        <ArrowUpRight size={16} />
                        <span>+2.4%</span>
                    </div>
                </div>
            </div>

            {/* Charts Section */}
            <div className="charts-grid">
                <div className="chart-card card">
                    <h3 className="chart-title">Revenue & Expenses Trend</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="name" stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} />
                                <YAxis stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                                    itemStyle={{ color: 'var(--text-primary)' }}
                                />
                                <Legend />
                                <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#818cf8" strokeWidth={3} dot={{ r: 4, fill: '#818cf8' }} activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#f472b6" strokeWidth={3} dot={{ r: 4, fill: '#f472b6' }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="chart-card card">
                    <h3 className="chart-title">Active Projects Over Time</h3>
                    <div className="chart-container">
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                <XAxis dataKey="name" stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} />
                                <YAxis stroke="var(--text-secondary)" tick={{ fill: 'var(--text-secondary)' }} />
                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderRadius: '8px' }}
                                />
                                <Bar dataKey="activeProjects" name="Active Projects" fill="#34d399" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Data Table Section */}
            <div className="table-section card">
                <div className="table-header">
                    <h3 className="chart-title">Project Portfolio</h3>
                    <button className="btn btn-primary btn-sm">View All</button>
                </div>
                <div className="table-responsive">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>ID</th>
                                <th>Manager</th>
                                <th>Status</th>
                                <th>Budget</th>
                                <th>Spent</th>
                                <th>Progress</th>
                                <th>Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td className="font-medium">{project.name}</td>
                                    <td className="text-secondary">{project.id}</td>
                                    <td>
                                        <div className="table-user">
                                            <div className="avatar-sm">{project.manager.charAt(0)}</div>
                                            <span>{project.manager}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                                            {project.status}
                                        </span>
                                    </td>
                                    <td>${project.budget.toLocaleString()}</td>
                                    <td>${project.spent.toLocaleString()}</td>
                                    <td>
                                        <div className="progress-cell">
                                            <span>{project.progress}%</span>
                                            <div className="progress-bar-bg">
                                                <div
                                                    className="progress-bar-fill"
                                                    style={{
                                                        width: `${project.progress}%`,
                                                        backgroundColor: project.progress === 100 ? 'var(--success)' : 'var(--primary)'
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-secondary">{project.dueDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
