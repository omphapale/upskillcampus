
import brakeImg from '@assets/generated_images/red_high_performance_brake_caliper.png';
import headlightImg from '@assets/generated_images/modern_led_car_headlight_assembly.png';
import tireImg from '@assets/generated_images/all_terrain_tire_with_aggressive_tread.png';
import engineImg from '@assets/stock_images/car_engine_parts_mod_c8807a3e.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  brand: string;
  description: string;
  specs: Record<string, string>;
  inStock: boolean;
}

export const CATEGORIES = [
  { id: 'brakes', name: 'Brakes', image: brakeImg },
  { id: 'engine', name: 'Engine Parts', image: engineImg },
  { id: 'tires', name: 'Tires & Wheels', image: tireImg },
  { id: 'lights', name: 'Lighting', image: headlightImg },
  { id: 'electronics', name: 'Electronics', image: headlightImg }, // Placeholder
  { id: 'tools', name: 'Tools', image: engineImg }, // Placeholder
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Brembo GT Series Brake Kit',
    category: 'brakes',
    price: 1250.00,
    rating: 4.8,
    reviews: 124,
    image: brakeImg,
    brand: 'Brembo',
    description: 'High-performance braking system designed for track and street use. Features 6-piston calipers and drilled rotors.',
    specs: { 'Material': 'Aluminum', 'Rotor Size': '355mm', 'Pistons': '6' },
    inStock: true
  },
  {
    id: '2',
    name: 'Xenon LED Headlight Conversion',
    category: 'lights',
    price: 189.99,
    rating: 4.5,
    reviews: 89,
    image: headlightImg,
    brand: 'Philips',
    description: 'Bright white 6000K light output. Plug and play installation for most vehicles.',
    specs: { 'Lumens': '12000', 'Color Temp': '6000K', 'Life': '30000 hrs' },
    inStock: true
  },
  {
    id: '3',
    name: 'Scorpion All-Terrain Tire',
    category: 'tires',
    price: 245.50,
    rating: 4.9,
    reviews: 210,
    image: tireImg,
    brand: 'Pirelli',
    description: 'Aggressive tread pattern for maximum traction off-road while maintaining on-road comfort.',
    specs: { 'Size': '265/70R17', 'Load Range': 'E', 'Warranty': '50k miles' },
    inStock: true
  },
  {
    id: '4',
    name: 'V8 Performance Intake Manifold',
    category: 'engine',
    price: 899.00,
    rating: 4.7,
    reviews: 45,
    image: engineImg,
    brand: 'Holley',
    description: 'Increases airflow and horsepower. Compatible with LS series engines.',
    specs: { 'Material': 'Cast Aluminum', 'RPM Range': '1500-6500', 'Finish': 'Black' },
    inStock: true
  },
  {
    id: '5',
    name: 'Ceramic Brake Pads (Front)',
    category: 'brakes',
    price: 65.99,
    rating: 4.4,
    reviews: 312,
    image: brakeImg,
    brand: 'Bosch',
    description: 'Low dust, quiet operation ceramic brake pads. Direct OEM replacement.',
    specs: { 'Position': 'Front', 'Material': 'Ceramic', 'Wear Sensor': 'Included' },
    inStock: true
  },
  {
    id: '6',
    name: 'Forged Piston Set',
    category: 'engine',
    price: 650.00,
    rating: 5.0,
    reviews: 12,
    image: engineImg,
    brand: 'CP Pistons',
    description: 'High-strength forged pistons for boosted applications.',
    specs: { 'Bore': '4.030"', 'Compression': '10.5:1', 'Material': '2618 Alloy' },
    inStock: false
  }
];
