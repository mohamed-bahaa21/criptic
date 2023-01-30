"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{16275:function(e,a,t){t.d(a,{Z:function(){return k}});var r=t(26042),s=t(69396),l=t(85893),n=t(67294),i=t(79521),c=t(9253),m=t(46888),d=t(86108),u=t(13123),o=t(94423),x=t(60134),h=t(69074),v=t(59186),p=t(7290),g=t(59637),f=t(59121),j=t(20997),b=[{id:1,coin:{icon:(0,l.jsx)(x.p,{}),name:"Bitcoin",symbol:"BTC"},prices:[{name:1,value:15187.44},{name:2,value:21356.99},{name:3,value:34698.98},{name:4,value:37587.55},{name:5,value:17577.4},{name:6,value:26577.4},{name:7,value:23577.4},{name:8,value:18577.4},{name:9,value:28577.4}],usd_price:"30382.81",usd_price_change_24h:-4.06,usd_marketcap:"572.34 B",usd_volume_24h:"43.43 B"},{id:2,coin:{icon:(0,l.jsx)(h.k,{}),symbol:"ETH",name:"Ethereum"},prices:[{name:1,value:25187.44},{name:2,value:67356.99},{name:3,value:34698.98},{name:4,value:37587.55},{name:5,value:27577.4},{name:6,value:55577.4},{name:7,value:48577.4},{name:8,value:28577.4},{name:9,value:61577.4}],usd_price:"1882.03",usd_price_change_24h:-6.63,usd_marketcap:"243.87 B",usd_volume_24h:"21.39 B"},{id:3,coin:{icon:(0,l.jsx)(v.Z,{}),symbol:"USDT",name:"Tether USD"},prices:[{name:1,value:12187.44},{name:2,value:21356.99},{name:3,value:37698.98},{name:4,value:39587.55},{name:5,value:29577.4},{name:6,value:31577.4},{name:7,value:47577.4},{name:8,value:36577.4},{name:9,value:28577.4}],usd_price:"1.01",usd_price_change_24h:.5,usd_marketcap:"72.35 B",usd_volume_24h:"25.43 B"},{id:4,coin:{icon:(0,l.jsx)(p.m,{}),symbol:"BNB",name:"Binance Coin"},prices:[{name:1,value:15187.44},{name:2,value:16356.99},{name:3,value:17698.98},{name:4,value:37587.55},{name:5,value:17577.4},{name:6,value:20577.4},{name:7,value:29577.4},{name:8,value:33577.4},{name:9,value:39577.4}],usd_price:"302.45",usd_price_change_24h:.06,usd_marketcap:"42.41 B",usd_volume_24h:"13.98 B"},{id:5,coin:{icon:(0,l.jsx)(g.V,{}),symbol:"USDC",name:"USD Coin"},prices:[{name:1,value:10187.44},{name:2,value:21356.99},{name:3,value:34698.98},{name:4,value:35587.55},{name:5,value:45577.4},{name:6,value:39577.4},{name:7,value:28577.4},{name:8,value:33577.4},{name:9,value:20577.4}],usd_price:"1.00",usd_price_change_24h:0,usd_marketcap:"28.33 B",usd_volume_24h:"5.54 B"},{id:6,coin:{icon:(0,l.jsx)(f.P,{}),symbol:"ADA",name:"Cardano"},prices:[{name:1,value:25187.44},{name:2,value:21356.99},{name:3,value:34698.98},{name:4,value:37587.55},{name:5,value:17577.4},{name:6,value:26577.4},{name:7,value:23577.4},{name:8,value:18577.4},{name:9,value:28577.4}],usd_price:"0.5797",usd_price_change_24h:2.6,usd_marketcap:"19.16 B",usd_volume_24h:"1.5 B"},{id:7,coin:{icon:(0,l.jsx)(j.S,{}),symbol:"DOGE",name:"Doge Coin"},prices:[{name:1,value:9187.44},{name:2,value:21356.99},{name:3,value:34698.98},{name:4,value:37587.55},{name:5,value:17577.4},{name:6,value:55577.4},{name:7,value:49577.4},{name:8,value:28577.4},{name:9,value:28577.4}],usd_price:"0.0823",usd_price_change_24h:1.06,usd_marketcap:"10.77 B",usd_volume_24h:"345.43 M"}],y=t(98768),_=t(33741),N=[{Header:"#",accessor:"id",minWidth:60,maxWidth:80},{Header:"Name",accessor:"coin",Cell:function(e){var a=e.cell.value;return(0,l.jsx)("div",{className:"mb-5 grid grid-cols-3 gap-4 text-sm text-gray-900 last:mb-0 dark:text-white",children:(0,l.jsxs)("div",{className:"col-span-2 flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-6 shrink-0",children:a.icon}),(0,l.jsxs)("span",{className:"flex flex-col gap-0.5",children:[(0,l.jsx)("span",{className:"whitespace-nowrap text-xs font-medium capitalize",children:a.name}),(0,l.jsx)("span",{className:"text-xs font-normal text-gray-500 dark:text-gray-400",children:a.symbol})]})]})})},minWidth:140,maxWidth:260},{Header:function(){return(0,l.jsx)("div",{className:"ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",children:"Price"})},accessor:"usd_price",Cell:function(e){var a=e.cell.value;return(0,l.jsxs)("div",{className:"ltr:text-right rtl:text-left",children:["$",a]})},minWidth:100,maxWidth:140},{Header:function(){return(0,l.jsx)("div",{className:"ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",children:"24H Change"})},accessor:"usd_price_change_24h",Cell:function(e){var a=e.cell.value;return(0,l.jsxs)("div",{className:"ltr:text-right rtl:text-left ".concat(a>0?"text-green-500":"text-red-500"),children:[a,"%"]})},minWidth:100,maxWidth:140},{Header:function(){return(0,l.jsx)("div",{className:"ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",children:"24H Volume"})},accessor:"usd_volume_24h",Cell:function(e){var a=e.cell.value;return(0,l.jsxs)("div",{className:"ltr:text-right rtl:text-left",children:["$",a]})},minWidth:100,maxWidth:140},{Header:function(){return(0,l.jsx)("div",{className:"ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",children:"Market Cap"})},accessor:"usd_marketcap",Cell:function(e){var a=e.cell.value;return(0,l.jsxs)("div",{className:"flex items-center justify-end",children:["$",a]})},minWidth:100,maxWidth:140},{Header:function(){return(0,l.jsx)("div",{className:"ltr:ml-auto ltr:text-right rtl:mr-auto rtl:text-left",children:"7D Chart"})},accessor:"prices",Cell:function(e){var a=e.cell.value;return(0,l.jsx)("div",{className:"h-10 w-full",children:(0,l.jsx)(c.h,{width:"100%",height:"100%",children:(0,l.jsxs)(m.T,{data:a,children:[(0,l.jsx)("defs",{children:(0,l.jsxs)("linearGradient",{id:"liquidity-gradient",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,l.jsx)("stop",{offset:"5%",stopColor:"#bc9aff",stopOpacity:.5}),(0,l.jsx)("stop",{offset:"100%",stopColor:"#7645D9",stopOpacity:0})]})}),(0,l.jsx)(d.u,{type:"natural",dataKey:"value",stroke:"#7645D9",strokeWidth:1.5,fill:"url(#liquidity-gradient)",dot:!1})]})})})},minWidth:200,maxWidth:300}];function k(){(0,_.t)(),(0,y.G)();var e=n.useMemo((function(){return b}),[]),a=n.useMemo((function(){return N}),[]),t=(0,i.useTable)({columns:a,data:e},i.useSortBy,i.useResizeColumns,i.useFlexLayout,i.usePagination),c=t.getTableProps,m=t.getTableBodyProps,d=t.state,x=t.headerGroups,h=t.page,v=t.prepareRow;d.pageIndex;return(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)("div",{className:"rounded-tl-lg rounded-tr-lg bg-white px-4 pt-6 dark:bg-light-dark md:px-8 md:pt-8",children:(0,l.jsx)("div",{className:"flex flex-col items-center justify-between border-b border-dashed border-gray-200 pb-5 dark:border-gray-700 md:flex-row",children:(0,l.jsx)("h2",{className:"mb-3 shrink-0 text-lg font-medium uppercase text-black dark:text-white sm:text-xl md:mb-0 md:text-2xl",children:"Top Cryptocurrency"})})}),(0,l.jsx)("div",{className:"-mx-0.5",children:(0,l.jsx)(u.Z,{style:{width:"100%"},children:(0,l.jsx)("div",{className:"px-0.5",children:(0,l.jsxs)("table",(0,s.Z)((0,r.Z)({},c()),{className:"transaction-table w-full border-separate border-0",children:[(0,l.jsx)("thead",{className:"text-sm text-gray-500 dark:text-gray-300",children:x.map((function(e,a){return(0,n.createElement)("tr",(0,s.Z)((0,r.Z)({},e.getHeaderGroupProps()),{key:a}),e.headers.map((function(e,a){return(0,n.createElement)("th",(0,s.Z)((0,r.Z)({},e.getHeaderProps(e.getSortByToggleProps())),{key:a,className:"group bg-white px-2 py-5 font-normal first:rounded-bl-lg last:rounded-br-lg ltr:first:pl-8 ltr:last:pr-8 rtl:first:pr-8 rtl:last:pl-8 dark:bg-light-dark md:px-4"}),(0,l.jsxs)("div",{className:"flex items-center",children:[e.render("Header"),e.canResize&&(0,l.jsx)("div",(0,s.Z)((0,r.Z)({},e.getResizerProps()),{className:"resizer ".concat(e.isResizing?"isResizing":"")})),(0,l.jsx)("span",{className:"ltr:ml-1 rtl:mr-1",children:e.isSorted?e.isSortedDesc?(0,l.jsx)(o._,{}):(0,l.jsx)(o._,{className:"rotate-180"}):(0,l.jsx)(o._,{className:"rotate-180 opacity-0 transition group-hover:opacity-50"})})]}))})))}))}),(0,l.jsx)("tbody",(0,s.Z)((0,r.Z)({},m()),{className:"text-xs font-medium text-gray-900 dark:text-white 3xl:text-sm",children:h.map((function(e,a){return v(e),(0,n.createElement)("tr",(0,s.Z)((0,r.Z)({},e.getRowProps()),{key:a,className:"mb-3 items-center rounded-lg bg-white uppercase shadow-card last:mb-0 dark:bg-light-dark"}),e.cells.map((function(e,a){return(0,n.createElement)("td",(0,s.Z)((0,r.Z)({},e.getCellProps()),{key:a,className:"px-2 py-4 tracking-[1px] ltr:first:pl-4 ltr:last:pr-4 rtl:first:pr-8 rtl:last:pl-8 md:px-4 md:py-6 md:ltr:first:pl-8 md:ltr:last:pr-8 3xl:py-5"}),e.render("Cell"))})))}))}))]}))})})})]})}},25057:function(e,a,t){t.d(a,{Z:function(){return d}});var r=t(85893),s=t(94184),l=t.n(s),n=t(9253),i=t(98687),c=t(56880),m=[{name:"Page A",uv:1200,pv:800},{name:"Page B",uv:2600,pv:100},{name:"Page C",uv:1900,pv:1600},{name:"Page D",uv:2280,pv:1508},{name:"Page E",uv:1290,pv:3500},{name:"Page F",uv:1690,pv:3e3},{name:"Page G",uv:2590,pv:4500}];function d(e){var a=e.chartWrapperClass;return(0,r.jsxs)("div",{className:"rounded-lg bg-gray-900 p-6 text-white dark:bg-light-dark sm:p-8",children:[(0,r.jsx)("h3",{className:"text-xl font-medium tracking-tighter text-white sm:text-3xl",children:"74.8%"}),(0,r.jsx)("p",{className:"mt-2 mb-1 text-xs font-medium text-gray-400 sm:text-sm",children:"Compare to $1,812 last week"}),(0,r.jsx)("div",{className:l()("h-60 w-full",a),children:(0,r.jsx)(n.h,{width:"100%",height:"100%",children:(0,r.jsxs)(i.w,{data:m,children:[(0,r.jsx)(c.x,{type:"natural",dataKey:"pv",stroke:"#1E40AF",strokeWidth:4,dot:!1}),(0,r.jsx)(c.x,{type:"natural",dataKey:"uv",stroke:"#374151",strokeWidth:4,dot:!1})]})})})]})}},27822:function(e,a,t){t.d(a,{Z:function(){return o}});var r=t(85893),s=t(60134),l=t(69074),n=t(59186),i=t(7290),c=t(59637),m=t(59121),d=t(20997),u={BTC:(0,r.jsx)(s.p,{}),ETH:(0,r.jsx)(l.k,{}),USDT:(0,r.jsx)(n.Z,{}),BNB:(0,r.jsx)(i.m,{}),USDC:(0,r.jsx)(c.V,{}),ADA:(0,r.jsx)(m.P,{}),DOGE:(0,r.jsx)(d.S,{})};function o(e){var a=e.from,t=e.to;return(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsxs)("div",{className:"flex items-center",children:[(0,r.jsx)("div",{className:"relative",children:u[a]}),(0,r.jsx)("div",{className:"ltr:-ml-1.5 rtl:-mr-1.5",children:u[t]})]}),(0,r.jsxs)("div",{className:"whitespace-nowrap text-sm font-medium uppercase text-black ltr:ml-3 rtl:mr-3 dark:text-white",children:[a,"-",t]})]})}},78897:function(e,a,t){t.d(a,{Z:function(){return x}});var r=t(85893),s=t(60134),l=t(69074),n=t(59186),i=t(7290),c=t(59637),m=t(59121),d=t(20997),u=(s.p,l.k,n.Z,i.m,c.V,m.P,d.S,[{from:"BTC",to:"USDC",volume:"434.2M"},{from:"USDT",to:"DOGE",volume:"356.4M"},{from:"ADA",to:"BNB",volume:"295.6M"},{from:"USDT",to:"USDC",volume:"402.5M"},{from:"ETH",to:"DOGE",volume:"590.2M"},{from:"BTC",to:"ADA",volume:"104.6M"}]),o=t(27822);function x(e){var a=e.limit;return(0,r.jsxs)("div",{className:"rounded-lg bg-white p-6 shadow-card dark:bg-light-dark sm:p-8",children:[(0,r.jsx)("h3",{className:"mb-6 text-base font-medium uppercase",children:"Top Pools"}),(0,r.jsxs)("div",{className:"mb-5 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400",children:[(0,r.jsx)("span",{className:"col-span-2",children:"Pool"}),(0,r.jsx)("span",{children:"Volume"})]}),u.slice(0,null!==a&&void 0!==a?a:-1).map((function(e,a){var t=e.from,s=e.to;return(0,r.jsxs)("div",{className:"mb-5 flex items-center justify-between text-sm text-gray-900 last:mb-0 dark:text-white",children:[(0,r.jsx)("div",{className:"col-span-2 flex items-center gap-2",children:(0,r.jsx)(o.Z,{from:t,to:s})}),(0,r.jsx)("span",{children:e.volume})]},a)}))]})}},64619:function(e,a,t){t.d(a,{Z:function(){return c}});var r=t(85893),s=t(94184),l=t.n(s),n=t(47311),i=t(2440);function c(e){var a=e.className;return(0,r.jsxs)("button",{className:l()("flex h-10 w-full items-center whitespace-nowrap rounded-lg border-2 border-dashed border-gray-500 bg-gray-100 px-6 text-sm uppercase tracking-wider text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white lg:h-12 3xl:h-13",a),children:[(0,r.jsx)("span",{className:"mr-3.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white lg:h-6 lg:w-6",children:(0,r.jsx)(n.v,{className:"h-auto w-2.5 lg:w-auto"})}),(0,r.jsx)("span",{className:"mr-3.5 flex-grow text-justify text-xs lg:text-sm",children:"Top Up Balance"}),(0,r.jsx)(i.Q,{className:"rtl:rotate-180"})]})}},90587:function(e,a,t){t.d(a,{$:function(){return i}});var r=t(48658),s=t(12299),l=t(10405),n=t(51705),i=[{id:"0",name:"Bitcoin",symbol:"BTC",balance:"0.2231345",usdBalance:"11,032.24",logo:r.Z,change:"+12.5%",isChangePositive:!0,color:"#FDEDD4"},{id:"1",name:"Tether",symbol:"USDT",balance:"1.2345",usdBalance:"1,032.24",logo:s.Z,change:"-1.5%",isChangePositive:!1,color:"#E1F9F1"},{id:"2",name:"Cardano",symbol:"ADA",balance:"1.2370",usdBalance:"532.94",logo:l.Z,change:"+12.5%",isChangePositive:!0,color:"#DBE3FF"},{id:"3",name:"Binance",symbol:"BUSD",balance:"240.55",usdBalance:"340.24",logo:n.Z,change:"+1.5%",isChangePositive:!0,color:"#FBF5D5"}]}}]);