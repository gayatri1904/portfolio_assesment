import React from 'react';
import { Download } from 'lucide-react';
import { tradingReturns } from '../data/mockData';

const TradingReturnsTable: React.FC = () => {
  const formatPercentage = (value: number) => {
    const sign = value >= 0 ? '' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  const getTextColor = (value: number) => {
    if (value > 0) return 'text-green-600';
    if (value < 0) return 'text-red-600';
    return 'text-gray-900';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Trailing Returns</h2>
          <button className="flex items-center space-x-2 text-teal-600 hover:text-teal-700 transition-colors">
            <Download className="w-4 h-4" />
            <span className="text-sm font-medium">Export</span>
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                NAME
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                YTD
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                1D
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                1W
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                1M
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                3M
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                6M
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                1Y
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                3Y
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                SI
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                DD
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                MAXDD
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Focused
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused.ytd)}`}>
                {formatPercentage(tradingReturns.focused.ytd)}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused["1d"])}`}>
                {formatPercentage(tradingReturns.focused["1d"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused["1w"])}`}>
                {formatPercentage(tradingReturns.focused["1w"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused["1m"])}`}>
                {formatPercentage(tradingReturns.focused["1m"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused["3m"])}`}>
                {formatPercentage(tradingReturns.focused["3m"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused["6m"])}`}>
                {formatPercentage(tradingReturns.focused["6m"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused["1y"])}`}>
                {formatPercentage(tradingReturns.focused["1y"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused["3y"])}`}>
                {formatPercentage(tradingReturns.focused["3y"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused.si)}`}>
                {formatPercentage(tradingReturns.focused.si)}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused.dd)}`}>
                {formatPercentage(tradingReturns.focused.dd)}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.focused.maxdd)}`}>
                {formatPercentage(tradingReturns.focused.maxdd)}
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                NIFTY50
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50.ytd)}`}>
                {formatPercentage(tradingReturns.nifty50.ytd)}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50["1d"])}`}>
                {formatPercentage(tradingReturns.nifty50["1d"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50["1w"])}`}>
                {formatPercentage(tradingReturns.nifty50["1w"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50["1m"])}`}>
                {formatPercentage(tradingReturns.nifty50["1m"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50["3m"])}`}>
                {formatPercentage(tradingReturns.nifty50["3m"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50["6m"])}`}>
                {formatPercentage(tradingReturns.nifty50["6m"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50["1y"])}`}>
                {formatPercentage(tradingReturns.nifty50["1y"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50["3y"])}`}>
                {formatPercentage(tradingReturns.nifty50["3y"])}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50.si)}`}>
                {formatPercentage(tradingReturns.nifty50.si)}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50.dd)}`}>
                {formatPercentage(tradingReturns.nifty50.dd)}
              </td>
              <td className={`px-6 py-4 whitespace-nowrap text-sm text-center font-medium ${getTextColor(tradingReturns.nifty50.maxdd)}`}>
                {formatPercentage(tradingReturns.nifty50.maxdd)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 px-6 pb-4">
        <p className="text-xs text-gray-500">
          Note: Returns above 1 year are annualised
        </p>
      </div>
    </div>
  );
};

export default TradingReturnsTable;