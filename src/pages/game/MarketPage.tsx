import { useState } from 'react';
import ChartIcon from '../../components/icons/ChartIcon';
import TrendingUpIcon from '../../components/icons/TrendingUpIcon';
import TrendingDownIcon from '../../components/icons/TrendingDownIcon';
import ShopIcon from '../../components/icons/ShopIcon';
import BriefcaseIcon from '../../components/icons/BriefcaseIcon';
import { mockPlayer, mockMarketPrices, mockMarketHistory, mockInvestments, mockPurchaseHistory } from '../../data/mocks';

type Tab = 'market' | 'invest' | 'history';

export default function MarketPage() {
  const [activeTab, setActiveTab] = useState<Tab>('market');

  // Simple normalization for the chart
  const maxVal = Math.max(...mockMarketHistory.map(d => d.value));
  const minVal = Math.min(...mockMarketHistory.map(d => d.value));
  const range = maxVal - minVal;
  
  // Create SVG points for the chart
  const points = mockMarketHistory.map((d, i) => {
    const x = (i / (mockMarketHistory.length - 1)) * 100; // 0 to 100%
    const y = 100 - ((d.value - minVal) / range) * 100; // 0 to 100% (inverted for SVG)
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-neutral-900 tracking-tight">Market Network</h1>
          <p className="text-neutral-500 font-medium">Global Exchange & Black Market</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
             <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Net Worth</div>
             <div className="text-2xl font-bold text-neutral-900">${(mockPlayer.money + 12500).toLocaleString()}</div>
          </div>
          <div className="h-10 w-px bg-neutral-200"></div>
          <div className="text-right">
             <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Liquid Cash</div>
             <div className="text-2xl font-bold text-green-600">${mockPlayer.money.toLocaleString()}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-3 space-y-2">
           <button
             onClick={() => setActiveTab('market')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
               activeTab === 'market' 
                 ? 'bg-neutral-900 text-white shadow-md' 
                 : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-transparent hover:border-neutral-200'
             }`}
           >
             <div className="w-5 h-5"><ShopIcon /></div>
             <span>Commodities</span>
           </button>
           <button
             onClick={() => setActiveTab('invest')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
               activeTab === 'invest' 
                 ? 'bg-neutral-900 text-white shadow-md' 
                 : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-transparent hover:border-neutral-200'
             }`}
           >
             <div className="w-5 h-5"><ChartIcon /></div>
             <span>Investments</span>
           </button>
           <button
             onClick={() => setActiveTab('history')}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${
               activeTab === 'history' 
                 ? 'bg-neutral-900 text-white shadow-md' 
                 : 'bg-white text-neutral-600 hover:bg-neutral-50 border border-transparent hover:border-neutral-200'
             }`}
           >
             <div className="w-5 h-5"><BriefcaseIcon /></div>
             <span>History</span>
           </button>

           {/* Mini Economy Status Card */}
           <div className="mt-6 bg-white border border-neutral-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="text-xs font-bold text-neutral-500 uppercase">Market Status</span>
              </div>
              <div className="text-sm font-medium text-neutral-900">
                Inflation is stabilizing. Tech sector booming.
              </div>
           </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-9">
          
          {/* Economy Graph - Visible on all tabs or just dashboard? Let's keep it on Market/Invest for context */}
          {(activeTab === 'market' || activeTab === 'invest') && (
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                   <h2 className="text-lg font-bold text-neutral-900">Global Market Index</h2>
                   <div className="flex items-center gap-2 mt-1">
                      <span className="text-2xl font-bold text-neutral-900">1,342.50</span>
                      <span className="flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        <div className="w-4 h-4"><TrendingUpIcon /></div>
                        +2.4%
                      </span>
                   </div>
                </div>
                <div className="flex gap-2">
                   {['1D', '1W', '1M', '1Y'].map(t => (
                      <button key={t} className={`px-3 py-1 text-xs font-bold rounded-lg ${t === '1W' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'}`}>{t}</button>
                   ))}
                </div>
              </div>
              
              {/* Custom SVG Line Chart */}
              <div className="h-48 w-full relative">
                 <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Grid lines */}
                    <line x1="0" y1="0" x2="100" y2="0" stroke="#f5f5f5" strokeWidth="1" />
                    <line x1="0" y1="25" x2="100" y2="25" stroke="#f5f5f5" strokeWidth="1" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="#f5f5f5" strokeWidth="1" />
                    <line x1="0" y1="75" x2="100" y2="75" stroke="#f5f5f5" strokeWidth="1" />
                    <line x1="0" y1="100" x2="100" y2="100" stroke="#f5f5f5" strokeWidth="1" />
                    
                    {/* The Chart Line */}
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d={`M0,100 L0,${100 - ((mockMarketHistory[0].value - minVal) / range) * 100} ${points} L100,100 Z`} fill="url(#gradient)" />
                    <polyline 
                       fill="none" 
                       stroke="#10b981" 
                       strokeWidth="2" 
                       points={points} 
                       strokeLinecap="round" 
                       strokeLinejoin="round"
                    />
                 </svg>
                 {/* X-Axis Labels */}
                 <div className="flex justify-between mt-2 text-xs font-bold text-neutral-400">
                    {mockMarketHistory.map(d => <span key={d.day}>{d.day}</span>)}
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'market' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {mockMarketPrices.map((item, idx) => (
                 <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                       <h3 className="font-bold text-lg text-neutral-900">{item.resource}</h3>
                       <span className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${item.change >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          <div className="w-3 h-3">
                            {item.change >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
                          </div>
                          {item.change > 0 ? '+' : ''}{item.change}%
                       </span>
                    </div>
                    <div className="flex items-end justify-between">
                       <div className="text-2xl font-bold text-neutral-900">${item.price}</div>
                       <div className="flex gap-2">
                          <button className="px-3 py-1.5 bg-neutral-100 text-neutral-600 text-xs font-bold rounded-lg hover:bg-neutral-200">SELL</button>
                          <button className="px-3 py-1.5 bg-neutral-900 text-white text-xs font-bold rounded-lg hover:bg-neutral-800">BUY</button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          )}

          {activeTab === 'invest' && (
             <div className="bg-white border border-neutral-200 rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full text-left">
                   <thead className="bg-neutral-50 border-b border-neutral-200">
                      <tr>
                         <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Asset Name</th>
                         <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider text-right">Shares Owned</th>
                         <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider text-right">Current Price</th>
                         <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider text-right">Trend</th>
                         <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider text-right">Action</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-neutral-100">
                      {mockInvestments.map(inv => (
                         <tr key={inv.id} className="hover:bg-neutral-50/50">
                            <td className="px-6 py-4 font-bold text-neutral-900">{inv.name}</td>
                            <td className="px-6 py-4 text-right font-medium text-neutral-700">{inv.shares}</td>
                            <td className="px-6 py-4 text-right font-medium text-neutral-900">${inv.currentPrice}</td>
                            <td className="px-6 py-4 text-right">
                               <div className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${inv.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                  <div className="w-3 h-3">
                                     {inv.trend === 'up' ? <TrendingUpIcon /> : <TrendingDownIcon />}
                                  </div>
                                  {inv.trend === 'up' ? 'Bullish' : 'Bearish'}
                               </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                               <button className="text-sm font-bold text-neutral-900 hover:text-blue-600">Manage</button>
                            </td>
                         </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          )}

          {activeTab === 'history' && (
             <div className="space-y-4">
                {mockPurchaseHistory.map(tx => (
                   <div key={tx.id} className="bg-white border border-neutral-200 p-4 rounded-xl flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-4">
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            tx.type === 'sale' ? 'bg-green-100 text-green-600' : 'bg-neutral-100 text-neutral-600'
                         }`}>
                            <div className="w-5 h-5">
                               {tx.type === 'sale' ? <TrendingUpIcon /> : <ShopIcon />}
                            </div>
                         </div>
                         <div>
                            <div className="font-bold text-neutral-900">{tx.item}</div>
                            <div className="text-xs text-neutral-500">{tx.date} • {tx.amount} units</div>
                         </div>
                      </div>
                      <div className={`font-bold text-lg ${tx.type === 'sale' ? 'text-green-600' : 'text-neutral-900'}`}>
                         {tx.type === 'sale' ? '+' : '-'}${tx.cost}
                      </div>
                   </div>
                ))}
             </div>
          )}

        </div>
      </div>
    </div>
  );
}
