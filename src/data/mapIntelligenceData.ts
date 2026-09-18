export interface GeoIntelligenceNode {
  id: string;
  name: string;
  category: "chokepoint" | "semiconductor" | "finance" | "energy" | "logistics";
  coordinates: [number, number]; // [lat, lng]
  region: "North America" | "Europe" | "Asia-Pacific" | "Middle East" | "Latin America" | "Global";
  status: "critical" | "disrupted" | "elevated_risk" | "nominal";
  riskScore: number; // 0 - 100
  dailyThroughputUSD: string;
  primaryCommodity: string;
  currentIncident?: string;
  recommendedMitigation: string;
  lastTelemetryUpdate: string;
}

export interface TransitRoute {
  id: string;
  name: string;
  category: "maritime" | "air_freight" | "pipeline";
  waypoints: [number, number][];
  status: "congested" | "rerouting" | "nominal" | "blocked";
  transitDelayDays: number;
  flowVolume: string;
  vesselsTracked: number;
}

export const INITIAL_GEO_NODES: GeoIntelligenceNode[] = [
  {
    id: "NODE-SUEZ",
    name: "Suez Canal & Red Sea Transit Corridor",
    category: "chokepoint",
    coordinates: [29.9737, 32.5599],
    region: "Middle East",
    status: "critical",
    riskScore: 94,
    dailyThroughputUSD: "$9.6B / day",
    primaryCommodity: "Container Freight, Hydrocarbons & LNG",
    currentIncident: "Ongoing maritime security threat causing +14 day rerouting around Cape of Good Hope.",
    recommendedMitigation: "Enact secondary intermodal rail bypass & Cape freight fuel hedge contracts.",
    lastTelemetryUpdate: "3 min ago",
  },
  {
    id: "NODE-BAB-EL-MANDEB",
    name: "Bab-el-Mandeb Strait",
    category: "chokepoint",
    coordinates: [12.5833, 43.3333],
    region: "Middle East",
    status: "critical",
    riskScore: 92,
    dailyThroughputUSD: "$8.2B / day",
    primaryCommodity: "Crude Oil, Petrochemicals, Consumer Electronics",
    currentIncident: "Maritime missile / drone zone alert. War risk premiums elevated by 380%.",
    recommendedMitigation: "Authorize armed escort transit or divert dry bulk through alternative corridors.",
    lastTelemetryUpdate: "6 min ago",
  },
  {
    id: "NODE-STRAIT-MALACCA",
    name: "Strait of Malacca",
    category: "chokepoint",
    coordinates: [2.5, 101.5],
    region: "Asia-Pacific",
    status: "elevated_risk",
    riskScore: 68,
    dailyThroughputUSD: "$14.8B / day",
    primaryCommodity: "Middle East Crude to East Asia, Finished Electronics",
    currentIncident: "Congestion surge at Singapore anchorage; average turnaround +36 hours.",
    recommendedMitigation: "Shift critical JIT component air-freight allotments to Changi / KL hub.",
    lastTelemetryUpdate: "12 min ago",
  },
  {
    id: "NODE-TSMC-HSINCHU",
    name: "TSMC Fab 12 / 20 Hub (Hsinchu Science Park)",
    category: "semiconductor",
    coordinates: [24.7833, 121.0],
    region: "Asia-Pacific",
    status: "elevated_risk",
    riskScore: 78,
    dailyThroughputUSD: "$3.4B / day",
    primaryCommodity: "3nm / 2nm Leading-Edge Substrates & CoWoS Packaging",
    currentIncident: "Geopolitical naval drills in Taiwan Strait triggering wafer air-cargo logistics buffer alerts.",
    recommendedMitigation: "Double safety stock buffer at Kumamoto (JASM) and Phoenix Fab 21 depots.",
    lastTelemetryUpdate: "18 min ago",
  },
  {
    id: "NODE-ASML-VELDHOVEN",
    name: "ASML EUV Headquarters (Veldhoven)",
    category: "semiconductor",
    coordinates: [51.4167, 5.4],
    region: "Europe",
    status: "nominal",
    riskScore: 32,
    dailyThroughputUSD: "$1.8B / day",
    primaryCommodity: "High-NA Twinscan EXE:5000 Lithography Systems",
    currentIncident: "Export control compliance screening active. Delivery cycle nominal at 18 months.",
    recommendedMitigation: "Secure Tier-2 optical component supply contracts with Carl Zeiss Jena.",
    lastTelemetryUpdate: "45 min ago",
  },
  {
    id: "NODE-PANAMA-CANAL",
    name: "Panama Canal Miraflores Locks",
    category: "chokepoint",
    coordinates: [8.9959, -79.5936],
    region: "Latin America",
    status: "disrupted",
    riskScore: 74,
    dailyThroughputUSD: "$5.1B / day",
    primaryCommodity: "US Grain, LNG, Automotive Carriers",
    currentIncident: "Gatun Lake reservoir drought quota cap limiting daily transits to 27 slots.",
    recommendedMitigation: "Pre-book auction slots 45 days in advance or route US East Coast via rail bridge.",
    lastTelemetryUpdate: "8 min ago",
  },
  {
    id: "NODE-STRAIT-HORMUZ",
    name: "Strait of Hormuz",
    category: "chokepoint",
    coordinates: [26.5667, 56.25],
    region: "Middle East",
    status: "critical",
    riskScore: 89,
    dailyThroughputUSD: "$19.2B / day",
    primaryCommodity: "20% of Global Seaborne Petroleum Liquids",
    currentIncident: "Heightened naval inspection threats. Tanker insurance war riders active.",
    recommendedMitigation: "Utilize East-West Petroline pipeline to Yanbu on the Red Sea.",
    lastTelemetryUpdate: "5 min ago",
  },
  {
    id: "NODE-NYSE-WALLST",
    name: "New York Financial Center & Wall St Data Core",
    category: "finance",
    coordinates: [40.7069, -74.009],
    region: "North America",
    status: "nominal",
    riskScore: 24,
    dailyThroughputUSD: "$280B / day",
    primaryCommodity: "Equity Clearing, Treasury Liquidity & Settlement",
    currentIncident: "Algorithmic high-frequency volatility spikes around FOMC rate decisions.",
    recommendedMitigation: "Maintain real-time Fedwire collateral reserves above 125% of baseline.",
    lastTelemetryUpdate: "1 min ago",
  },
  {
    id: "NODE-ROTTERDAM-PORT",
    name: "Port of Rotterdam Logistics Gateway",
    category: "logistics",
    coordinates: [51.95, 4.13],
    region: "Europe",
    status: "nominal",
    riskScore: 38,
    dailyThroughputUSD: "$7.5B / day",
    primaryCommodity: "Refined Fuels, Chemicals, European Intermodal Freight",
    currentIncident: "Hinterland Rhine barge draft constraints during seasonal low water.",
    recommendedMitigation: "Activate dry rail freight shuttle from Maasvlakte to Ruhr Valley.",
    lastTelemetryUpdate: "22 min ago",
  },
  {
    id: "NODE-SHANGHAI-YANGSHAN",
    name: "Shanghai Yangshan Deepwater Automated Port",
    category: "logistics",
    coordinates: [30.63, 122.06],
    region: "Asia-Pacific",
    status: "nominal",
    riskScore: 42,
    dailyThroughputUSD: "$16.4B / day",
    primaryCommodity: "Industrial Machinery, Solar PV Cells, Electric Vehicles",
    currentIncident: "Peak automated AGV throughput operating at 96% yard density.",
    recommendedMitigation: "Diversify feeder transshipment to Ningbo-Zhoushan.",
    lastTelemetryUpdate: "14 min ago",
  },
  {
    id: "NODE-CHANDLER-FAB",
    name: "Intel Ocotillo Campus (Chandler, AZ)",
    category: "semiconductor",
    coordinates: [33.27, -111.88],
    region: "North America",
    status: "nominal",
    riskScore: 28,
    dailyThroughputUSD: "$1.4B / day",
    primaryCommodity: "Intel 18A / Intel 3 Advanced Packaging",
    currentIncident: "Cleanroom expansion qualification testing on schedule for volume production.",
    recommendedMitigation: "Verify local utility reclaim water contracts under Colorado River tier restrictions.",
    lastTelemetryUpdate: "50 min ago",
  },
  {
    id: "NODE-STRAIT-TAIWAN",
    name: "Taiwan Strait Maritime Corridor",
    category: "chokepoint",
    coordinates: [24.0, 119.5],
    region: "Asia-Pacific",
    status: "critical",
    riskScore: 86,
    dailyThroughputUSD: "$11.0B / day",
    primaryCommodity: "Electronics, Optical Fibers, Battery Modules",
    currentIncident: "Maritime security exclusion zone advisory alerts during regional patrols.",
    recommendedMitigation: "Direct freight vessels to east of Taiwan (Luzon Strait / Philippine Sea passage).",
    lastTelemetryUpdate: "9 min ago",
  },
  {
    id: "NODE-TOKYO-FIN",
    name: "Tokyo Financial Center (Nihonbashi / Otemachi)",
    category: "finance",
    coordinates: [35.684, 139.774],
    region: "Asia-Pacific",
    status: "nominal",
    riskScore: 31,
    dailyThroughputUSD: "$95B / day",
    primaryCommodity: "JGB Sovereign Yields, Yen FX Clearing, Nikkei 225 Indices",
    currentIncident: "BOJ interest rate normalization monitoring and foreign exchange carry trade shifts.",
    recommendedMitigation: "Automate dynamic cross-currency swap hedges to insulate USD/JPY exposures.",
    lastTelemetryUpdate: "15 min ago",
  },
  {
    id: "NODE-BENGALURU-DESIGN",
    name: "Bengaluru Semiconductor Design & EDA Hub",
    category: "semiconductor",
    coordinates: [12.9716, 77.5946],
    region: "Asia-Pacific",
    status: "elevated_risk",
    riskScore: 64,
    dailyThroughputUSD: "$1.2B / day",
    primaryCommodity: "EDA Tape-out IP, VLSI Core Logic & Verification",
    currentIncident: "Bengaluru Design Risk: EDA compute load peak during 3nm architectural sprint causing tape-out milestone variance.",
    recommendedMitigation: "Expand hybrid cloud EDA compute nodes and synchronize tape-out signoff with Sanand ATMP packaging pipeline.",
    lastTelemetryUpdate: "2 min ago",
  },
  {
    id: "NODE-SANAND-ATMP",
    name: "Sanand ATMP & Advanced Packaging Facility",
    category: "semiconductor",
    coordinates: [22.9904, 72.3804],
    region: "Asia-Pacific",
    status: "critical",
    riskScore: 88,
    dailyThroughputUSD: "$2.4B / day",
    primaryCommodity: "Flip-chip BGA, 2.5D Substrate Packaging & Memory",
    currentIncident: "Sanand ATMP Risk: Critical lead-time bottleneck on ABF substrate imports; thermal testing cleanroom ramp rate at 78%.",
    recommendedMitigation: "Activate secondary air-freight bridge for high-density substrates and dual-source thermal interface materials.",
    lastTelemetryUpdate: "1 min ago",
  },
  {
    id: "NODE-MYSURU-INTEGRATION",
    name: "Mysuru Compound Semi & Fab Integration Corridor",
    category: "semiconductor",
    coordinates: [12.2958, 76.6394],
    region: "Asia-Pacific",
    status: "elevated_risk",
    riskScore: 71,
    dailyThroughputUSD: "$850M / day",
    primaryCommodity: "SiC / GaN Power Discretes & Subsystem Modules",
    currentIncident: "Mysuru Integration Risk: Correlated delivery lag with Bengaluru core tapeout; ultra-pure gas supply pipeline calibration.",
    recommendedMitigation: "Buffer ultra-pure nitrogen reserves and establish automated qualification telemetry with Gujarat ATMP hub.",
    lastTelemetryUpdate: "4 min ago",
  },
];

export const INITIAL_TRANSIT_ROUTES: TransitRoute[] = [
  {
    id: "ROUTE-EURASIA-SEA",
    name: "Far East to Western Europe (Cape Bypass)",
    category: "maritime",
    waypoints: [
      [31.23, 121.47], // Shanghai
      [1.35, 103.82],  // Singapore
      [-34.35, 18.49], // Cape of Good Hope
      [14.71, -17.46], // Dakar
      [51.95, 4.13],   // Rotterdam
    ],
    status: "rerouting",
    transitDelayDays: 14,
    flowVolume: "3.2M TEU / mo",
    vesselsTracked: 142,
  },
  {
    id: "ROUTE-TRANSPACIFIC",
    name: "Trans-Pacific Mega-Corridor (Shenzhen -> Long Beach)",
    category: "maritime",
    waypoints: [
      [22.54, 114.05], // Shenzhen
      [31.23, 121.47], // Shanghai
      [35.0, 160.0],   // North Pacific
      [33.74, -118.26] // Port of Long Beach
    ],
    status: "nominal",
    transitDelayDays: 0,
    flowVolume: "2.8M TEU / mo",
    vesselsTracked: 188,
  },
  {
    id: "ROUTE-MIDDLEEAST-CRUDE",
    name: "Persian Gulf to Japan Energy Line",
    category: "maritime",
    waypoints: [
      [26.56, 56.25],  // Hormuz
      [12.0, 75.0],    // Arabian Sea
      [2.5, 101.5],    // Malacca
      [22.0, 120.0],   // Luzon Strait
      [35.44, 139.63], // Tokyo Bay
    ],
    status: "congested",
    transitDelayDays: 3,
    flowVolume: "14.5M bbl / day",
    vesselsTracked: 96,
  },
  {
    id: "ROUTE-PANAMA-ATLANTIC",
    name: "US Gulf LNG to East Asia (Panama Transit)",
    category: "maritime",
    waypoints: [
      [29.76, -95.36], // Houston Ship Channel
      [8.99, -79.59],  // Panama Canal
      [15.0, -120.0],  // Central Pacific
      [34.69, 135.50], // Osaka Bay
    ],
    status: "congested",
    transitDelayDays: 8,
    flowVolume: "1.1M MT LNG / mo",
    vesselsTracked: 44,
  },
  {
    id: "ROUTE-SEMICON-INDIA",
    name: "SEMICON India Transit Corridor (Bengaluru -> Mysuru -> Mumbai -> Sanand)",
    category: "air_freight",
    waypoints: [
      [12.9716, 77.5946], // Bengaluru Design
      [12.2958, 76.6394], // Mysuru Fab
      [18.96, 72.82],     // Mumbai Air Cargo / Nhava Sheva
      [22.9904, 72.3804], // Sanand ATMP
    ],
    status: "rerouting",
    transitDelayDays: 2,
    flowVolume: "180K Multi-die Packages / mo",
    vesselsTracked: 28,
  },
];
