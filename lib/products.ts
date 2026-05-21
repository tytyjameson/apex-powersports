export type Condition = 'New' | 'Pre-Owned'
export type Category = 'Motorcycle' | 'Side-by-Side' | 'Jet Ski' | 'ATV' | 'Dirt Bike'

export interface Product {
  id: string
  img: string
  badge?: 'new' | 'sale' | 'hot'
  badgeText?: string
  make: string
  model: string
  year: number
  category: Category
  condition: Condition
  name: string
  sub: string
  engine: string
  hp: string
  topSpeed: string
  weight: string
  seatHeight: string
  fuelTank: string
  price: number
  priceDisplay: string
  originalPrice?: string
  colors: { hex: string; name: string }[]
  features: string[]
  galleryImgs: string[]
  sku: string
  stock: string
  rating: number
  reviewCount: number
  monthlyPayment: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'kawasaki-ninja-zx10r-2025',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kwasaki_ZX-10R_tokyo.JPG/640px-Kwasaki_ZX-10R_tokyo.JPG',
    badge: 'new', badgeText: 'New 2025',
    make: 'Kawasaki', model: 'Ninja ZX-10R', year: 2025,
    category: 'Motorcycle', condition: 'New',
    name: 'Kawasaki Ninja ZX-10R',
    sub: 'Superbike · 998cc Inline-4',
    engine: '998cc Inline-4', hp: '203 HP', topSpeed: '186 mph',
    weight: '441 lbs', seatHeight: '32.7 in', fuelTank: '4.5 gal',
    price: 16999, priceDisplay: '$16,999',
    colors: [
      { hex: '#84cc16', name: 'Lime Green' },
      { hex: '#dc2626', name: 'Candy Red' },
      { hex: '#1e3a8a', name: 'Pearl Blue' },
      { hex: '#1a1a1a', name: 'Flat Black' },
    ],
    features: [
      'Showa Balance Free Fork (BFF) fully adjustable suspension',
      'Brembo M50 monobloc front brake calipers with steel-braided lines',
      'Kawasaki Cornering Management Function (KCMF) with 6-axis IMU',
      'Lean-angle-sensitive traction control and launch control',
      '4.3" Full-Color TFT with Rideology smartphone connectivity',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kwasaki_ZX-10R_tokyo.JPG/800px-Kwasaki_ZX-10R_tokyo.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2007KawasakiNinjaZX10R-001.jpg/800px-2007KawasakiNinjaZX10R-001.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Kawasaki_Ninja_ZX-10R_2006.jpg/800px-Kawasaki_Ninja_ZX-10R_2006.jpg',
    ],
    sku: 'KAW-ZX10R-2025', stock: 'In Stock · Ships in 3–5 days',
    rating: 4.9, reviewCount: 127, monthlyPayment: '$289',
  },
  {
    id: 'can-am-maverick-x3-2024',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg/640px-2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg',
    badge: 'sale', badgeText: 'Save $3,000',
    make: 'Can-Am', model: 'Maverick X3 Turbo RR', year: 2024,
    category: 'Side-by-Side', condition: 'New',
    name: 'Can-Am Maverick X3',
    sub: 'Side-by-Side · 195 HP Turbo',
    engine: '900cc Turbo', hp: '195 HP', topSpeed: '72 mph',
    weight: '1,647 lbs', seatHeight: 'N/A', fuelTank: '10.5 gal',
    price: 29999, priceDisplay: '$29,999', originalPrice: '$32,999',
    colors: [
      { hex: '#f97316', name: 'Can-Am Red' },
      { hex: '#1a1a1a', name: 'Triple Black' },
      { hex: '#94a3b8', name: 'Steel Gray' },
    ],
    features: [
      'FOX 2.5 Podium RC2 front and rear shocks with remote reservoir',
      '72 in. industry-leading stance for maximum stability',
      'Smart-Lok front differential with 4 selectable modes',
      'Rotax 900 ACE Turbo RR engine with 195 HP',
      'Bead-lock capable 14 in. aluminum wheels',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg/800px-2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg',
    ],
    sku: 'CAM-MX3-TRR-2024', stock: 'In Stock · Ready for pickup',
    rating: 4.8, reviewCount: 94, monthlyPayment: '$512',
  },
  {
    id: 'sea-doo-rxt-x-300-2025',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sea-Doo_RXP-X_260_2012.jpg/640px-Sea-Doo_RXP-X_260_2012.jpg',
    badge: 'hot', badgeText: 'Best Seller',
    make: 'Sea-Doo', model: 'RXT-X 300', year: 2025,
    category: 'Jet Ski', condition: 'New',
    name: 'Sea-Doo RXT-X 300',
    sub: 'Jet Ski · 300 HP Supercharged',
    engine: '1630cc Supercharged', hp: '300 HP', topSpeed: '67 mph',
    weight: '840 lbs', seatHeight: '24.2 in', fuelTank: '18.5 gal',
    price: 18499, priceDisplay: '$18,499',
    colors: [
      { hex: '#dc2626', name: 'Fiery Red' },
      { hex: '#1e3a8a', name: 'Deep Blue' },
      { hex: '#1a1a1a', name: 'Stealth Black' },
    ],
    features: [
      'Rotax 1630 ACE supercharged engine producing 300 HP',
      'Ergolock seating system for max rider control at speed',
      'Advanced Traction Control (ATC) system',
      'T3-R hull design for predictable, precise handling',
      '7.8" LCD display with full connectivity',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sea-Doo_RXP-X_260_2012.jpg/800px-Sea-Doo_RXP-X_260_2012.jpg',
    ],
    sku: 'SD-RXTX300-2025', stock: 'Low Stock · 3 remaining',
    rating: 4.9, reviewCount: 211, monthlyPayment: '$316',
  },
  {
    id: 'can-am-outlander-1000r-2025',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CanAm_ATV.jpg/640px-CanAm_ATV.jpg',
    badge: 'new', badgeText: 'New 2025',
    make: 'Can-Am', model: 'Outlander 1000R', year: 2025,
    category: 'ATV', condition: 'New',
    name: 'Can-Am Outlander 1000R',
    sub: 'ATV · 89 HP V-Twin',
    engine: '976cc V-Twin', hp: '89 HP', topSpeed: '60 mph',
    weight: '754 lbs', seatHeight: '33.1 in', fuelTank: '5.4 gal',
    price: 14299, priceDisplay: '$14,299',
    colors: [
      { hex: '#f97316', name: 'Can-Am Red' },
      { hex: '#166534', name: 'Boreal Green' },
      { hex: '#1a1a1a', name: 'Triple Black' },
    ],
    features: [
      'Rotax 976cc V-twin engine with 89 HP',
      'Visco-Lok QE auto-locking front differential',
      'Tri-Mode Dynamic Power Steering (DPS)',
      'Arched double A-arm front suspension with 9 in. travel',
      'ProMount accessory system for easy add-ons',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CanAm_ATV.jpg/800px-CanAm_ATV.jpg',
    ],
    sku: 'CAM-OUT1000R-2025', stock: 'In Stock',
    rating: 4.7, reviewCount: 63, monthlyPayment: '$244',
  },
  {
    id: 'ktm-450-sx-f-2024',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/KTM_350_EXC-F.jpg/640px-KTM_350_EXC-F.jpg',
    make: 'KTM', model: '450 SX-F', year: 2024,
    category: 'Dirt Bike', condition: 'New',
    name: 'KTM 450 SX-F',
    sub: 'Dirt Bike · 449cc Motocross',
    engine: '449cc Single', hp: '63 HP', topSpeed: '80 mph',
    weight: '222 lbs', seatHeight: '37.6 in', fuelTank: '1.98 gal',
    price: 10799, priceDisplay: '$10,799',
    colors: [
      { hex: '#f97316', name: 'KTM Orange' },
      { hex: '#1a1a1a', name: 'Factory Black' },
    ],
    features: [
      'SOHC single-cylinder engine with titanium valves',
      'WP XACT 48 mm closed-cartridge front fork',
      'WP XACT rear shock with PDS (Progressive Damping System)',
      'Brembo hydraulic clutch and brakes',
      'Magura hydraulic clutch for precise feel',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/KTM_350_EXC-F.jpg/800px-KTM_350_EXC-F.jpg',
    ],
    sku: 'KTM-450SXF-2024', stock: 'In Stock',
    rating: 4.8, reviewCount: 88, monthlyPayment: '$184',
  },
  {
    id: 'honda-cbr1000rr-r-2024',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2007KawasakiNinjaZX10R-001.jpg/640px-2007KawasakiNinjaZX10R-001.jpg',
    badge: 'sale', badgeText: 'Save $2,500',
    make: 'Honda', model: 'CBR1000RR-R Fireblade SP', year: 2024,
    category: 'Motorcycle', condition: 'New',
    name: 'Honda CBR1000RR-R',
    sub: 'Superbike · 1000cc Inline-4',
    engine: '999cc Inline-4', hp: '214 HP', topSpeed: '188 mph',
    weight: '443 lbs', seatHeight: '32.9 in', fuelTank: '4.2 gal',
    price: 28999, priceDisplay: '$28,999', originalPrice: '$31,499',
    colors: [
      { hex: '#dc2626', name: 'Grand Prix Red' },
      { hex: '#1a1a1a', name: 'Matte Black' },
    ],
    features: [
      '214 HP inline-4 engine derived from MotoGP RC213V-S',
      'Öhlins Smart EC 2.0 semi-active suspension',
      'Brembo Stylema caliper brakes with 330mm rotors',
      'Honda Selectable Torque Control (HSTC) with 9-axis IMU',
      'Aerodynamic winglets generating 40 lbs of downforce',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/2007KawasakiNinjaZX10R-001.jpg/800px-2007KawasakiNinjaZX10R-001.jpg',
    ],
    sku: 'HON-CBR1000SP-2024', stock: 'In Stock · 2 remaining',
    rating: 5.0, reviewCount: 42, monthlyPayment: '$495',
  },
  {
    id: 'yamaha-yxz1000r-ss-2024',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Yamaha_YXZ1000R_2016.jpg/640px-Yamaha_YXZ1000R_2016.jpg',
    badge: 'hot', badgeText: 'Top Rated',
    make: 'Yamaha', model: 'YXZ1000R SS', year: 2024,
    category: 'Side-by-Side', condition: 'New',
    name: 'Yamaha YXZ1000R SS',
    sub: 'Side-by-Side · 998cc 3-Cylinder',
    engine: '998cc Inline-3', hp: '112 HP', topSpeed: '70 mph',
    weight: '1,389 lbs', seatHeight: 'N/A', fuelTank: '7.9 gal',
    price: 21799, priceDisplay: '$21,799',
    colors: [
      { hex: '#1d4ed8', name: 'Team Yamaha Blue' },
      { hex: '#1a1a1a', name: 'Midnight Black' },
      { hex: '#dc2626', name: 'Racing Red' },
    ],
    features: [
      'Pure Sport Sequential Shift Technology (SST)',
      'Long-travel, fully-independent suspension — 16 in. rear travel',
      `Yamaha's first pure sport side-by-side with a sequential gearbox`,
      'Fox 2.0 Performance shocks front and rear',
      'Sport-tuned EPS (Electric Power Steering)',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Yamaha_YXZ1000R_2016.jpg/800px-Yamaha_YXZ1000R_2016.jpg',
    ],
    sku: 'YAM-YXZ1000SS-2024', stock: 'In Stock',
    rating: 4.7, reviewCount: 157, monthlyPayment: '$372',
  },
  {
    id: 'yamaha-fx-svho-2023',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sea-Doo_RXP-X_260_2012.jpg/640px-Sea-Doo_RXP-X_260_2012.jpg',
    make: 'Yamaha', model: 'FX SVHO', year: 2023,
    category: 'Jet Ski', condition: 'Pre-Owned',
    name: 'Yamaha FX SVHO',
    sub: 'Jet Ski · 1812cc Supercharged',
    engine: '1812cc Supercharged', hp: '260 HP', topSpeed: '67 mph',
    weight: '828 lbs', seatHeight: '23.8 in', fuelTank: '18.5 gal',
    price: 16299, priceDisplay: '$16,299',
    colors: [
      { hex: '#1d4ed8', name: 'Deep Blue' },
      { hex: '#1a1a1a', name: 'Graphite' },
    ],
    features: [
      'Yamaha Marine 1.8L High Output supercharged engine',
      'RiDE dual throttle/reverse system for precise docking',
      'NanoXcel2 ultra-lightweight hull material',
      'Yamaha Connext touchscreen display with Bluetooth',
      'Cruise Assist and No Wake Mode standard',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sea-Doo_RXP-X_260_2012.jpg/800px-Sea-Doo_RXP-X_260_2012.jpg',
    ],
    sku: 'YAM-FXSVHO-2023', stock: 'Pre-Owned · Certified',
    rating: 4.6, reviewCount: 73, monthlyPayment: '$278',
  },
  {
    id: 'polaris-sportsman-850-2025',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CanAm_ATV.jpg/640px-CanAm_ATV.jpg',
    badge: 'new', badgeText: 'New 2025',
    make: 'Polaris', model: 'Sportsman 850', year: 2025,
    category: 'ATV', condition: 'New',
    name: 'Polaris Sportsman 850',
    sub: 'ATV · 850cc Trail Rated',
    engine: '850cc Single', hp: '60 HP', topSpeed: '55 mph',
    weight: '631 lbs', seatHeight: '34.0 in', fuelTank: '4.5 gal',
    price: 11499, priceDisplay: '$11,499',
    colors: [
      { hex: '#1d4ed8', name: 'Polaris Blue' },
      { hex: '#166534', name: 'Sage Green' },
      { hex: '#1a1a1a', name: 'Matte Black' },
    ],
    features: [
      'ProStar 850 engine with EFI for reliable starts',
      'High-performance front and rear MacPherson strut suspension',
      'On-Demand True AWD/2WD — no buttons to push',
      '11-in. front ground clearance for trail confidence',
      'Integrated front and rear racks with LinQ attachment points',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CanAm_ATV.jpg/800px-CanAm_ATV.jpg',
    ],
    sku: 'POL-SP850-2025', stock: 'In Stock',
    rating: 4.6, reviewCount: 109, monthlyPayment: '$196',
  },
  {
    id: 'ducati-panigale-v4-2023',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Kawasaki_Ninja_ZX-10R_2006.jpg/640px-Kawasaki_Ninja_ZX-10R_2006.jpg',
    make: 'Ducati', model: 'Panigale V4', year: 2023,
    category: 'Motorcycle', condition: 'Pre-Owned',
    name: 'Ducati Panigale V4',
    sub: 'Superbike · 1103cc V4',
    engine: '1103cc V4', hp: '214 HP', topSpeed: '199 mph',
    weight: '436 lbs', seatHeight: '31.5 in', fuelTank: '4.2 gal',
    price: 23595, priceDisplay: '$23,595',
    colors: [
      { hex: '#dc2626', name: 'Ducati Red' },
      { hex: '#1a1a1a', name: 'Stealth Black' },
    ],
    features: [
      'Desmosedici Stradale V4 engine from Ducati MotoGP program',
      'Öhlins Smart EC 2.0 semi-active suspension system',
      'Cornering ABS with track-tuned Brembo Stylema calipers',
      'Aerodynamic winglets generating measurable downforce',
      'Full Ducati Performance data logger compatible',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Kawasaki_Ninja_ZX-10R_2006.jpg/800px-Kawasaki_Ninja_ZX-10R_2006.jpg',
    ],
    sku: 'DUC-PV4-2023-PO', stock: 'Pre-Owned · 1 Available',
    rating: 4.9, reviewCount: 38, monthlyPayment: '$402',
  },
  {
    id: 'husqvarna-fc-450-2024',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/KTM_350_EXC-F.jpg/640px-KTM_350_EXC-F.jpg',
    badge: 'sale', badgeText: 'Save $1,200',
    make: 'Husqvarna', model: 'FC 450', year: 2024,
    category: 'Dirt Bike', condition: 'Pre-Owned',
    name: 'Husqvarna FC 450',
    sub: 'Dirt Bike · 450cc Factory Edition',
    engine: '449cc Single', hp: '62 HP', topSpeed: '78 mph',
    weight: '224 lbs', seatHeight: '37.4 in', fuelTank: '1.98 gal',
    price: 9999, priceDisplay: '$9,999', originalPrice: '$11,199',
    colors: [
      { hex: '#f59e0b', name: 'Husqvarna Yellow' },
      { hex: '#1a1a1a', name: 'Matte Black' },
    ],
    features: [
      'SOHC 449cc engine with titanium valves and new cylinder head',
      'WP XACT 48mm USD closed-cartridge front fork',
      'Map Select Switch for engine character adjustment',
      'Neken handlebar with Magura HC3 hydraulic clutch',
      'Brembo braking system front and rear',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/KTM_350_EXC-F.jpg/800px-KTM_350_EXC-F.jpg',
    ],
    sku: 'HUS-FC450-2024-PO', stock: 'Pre-Owned · Certified',
    rating: 4.7, reviewCount: 55, monthlyPayment: '$171',
  },
  {
    id: 'can-am-defender-max-hd9-2025',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg/640px-2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg',
    badge: 'new', badgeText: 'New 2025',
    make: 'Can-Am', model: 'Defender MAX HD9', year: 2025,
    category: 'Side-by-Side', condition: 'New',
    name: 'Can-Am Defender MAX HD9',
    sub: 'Side-by-Side · 6-Seat Utility',
    engine: '854cc V-Twin', hp: '72 HP', topSpeed: '60 mph',
    weight: '1,820 lbs', seatHeight: 'N/A', fuelTank: '10.5 gal',
    price: 19299, priceDisplay: '$19,299',
    colors: [
      { hex: '#f97316', name: 'Can-Am Red' },
      { hex: '#166534', name: 'Mossy Oak' },
      { hex: '#1a1a1a', name: 'Triple Black' },
    ],
    features: [
      'Rotax HD V-twin engine built for load and tow',
      '1,500 lb towing capacity and 1,000 lb payload',
      '6-passenger seating — largest in its class',
      'HD Intelligent Throttle Control (iTC) with EFI',
      'Angle-adjustable cargo box with easy dump',
    ],
    galleryImgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg/800px-2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg',
    ],
    sku: 'CAM-DEFMHD9-2025', stock: 'In Stock',
    rating: 4.5, reviewCount: 47, monthlyPayment: '$329',
  },
]

export const MAKES = [...new Set(PRODUCTS.map(p => p.make))].sort()
export const CATEGORIES: Category[] = ['Motorcycle', 'Side-by-Side', 'Jet Ski', 'ATV', 'Dirt Bike']
export const YEARS = [...new Set(PRODUCTS.map(p => p.year))].sort((a, b) => b - a)
