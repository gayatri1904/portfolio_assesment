import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, PieChart, FlaskRound as Flask, Archive, Users, Gift, User, TrendingUp } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: PieChart, label: 'Portfolios', path: '/portfolio' },
    { icon: Flask, label: 'Experimentals', path: '/experimentals' },
    { icon: Archive, label: 'Slack Archives', path: '/archives' },
    { icon: Users, label: 'Refer a friend', path: '/refer' },
    { icon: Gift, label: 'Gift a subscription', path: '/gift' },
    { icon: User, label: 'Account', path: '/account' }
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-bold text-gray-900">capitalmind</div>
            <div className="text-sm bg-teal-100 text-teal-700 px-2 py-0.5 rounded text-xs font-medium">
              premium
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                  isActive
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;