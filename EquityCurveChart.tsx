import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart,
  Area,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts';
import { equityData } from '../data/mockData';

const EquityCurveChart: React.FC = () => {
  const [fromDate, setFromDate] = useState('2019-01-01');
  const [toDate, setToDate] = useState('2024-04-24');

  const filteredData = equityData.filter(item => {
    const itemDate = new Date(item.date);
    const start = new Date(fromDate);
    const end = new Date(toDate);
    return itemDate >= start && itemDate <= end;
  });

  const formatDate = (tickItem: any) => {
    return new Date(tickItem).toLocaleDateString('en-US', { 
      month: 'short', 
      year: '2-digit' 
    });
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900 mb-2">
            {new Date(label).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(1)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Equity curve</h2>
            <p className="text-sm text-gray-500 mt-1">Live since 2019-01-01</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">From date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label className="text-sm font-medium text-gray-700">To date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Equity Curve Chart */}
        <div className="h-96 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <ReferenceLine y={100} stroke="#d1d5db" strokeDasharray="2 2" />
              <Line 
                type="monotone" 
                dataKey="focused" 
                stroke="#10b981" 
                strokeWidth={2} 
                dot={false}
                name="Focused"
              />
              <Line 
                type="monotone" 
                dataKey="nifty" 
                stroke="#3b82f6" 
                strokeWidth={2} 
                dot={false}
                name="NIFTY50"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Drawdown Chart */}
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                tickFormatter={formatDate}
                stroke="#6b7280"
                fontSize={12}
              />
              <YAxis 
                domain={[-50, 0]}
                stroke="#6b7280"
                fontSize={12}
              />
              <Tooltip 
                formatter={(value: any) => [`${value.toFixed(1)}%`, 'Drawdown']}
                labelFormatter={(label) => new Date(label).toLocaleDateString()}
              />
              <Area
                type="monotone"
                dataKey="drawdown"
                stroke="#ef4444"
                fill="#fee2e2"
                strokeWidth={1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EquityCurveChart;