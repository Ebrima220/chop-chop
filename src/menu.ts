export type Badge = "Popular" | "Spicy" | "Vegetarian" | "Breakfast";

export type Dish = {
  name: string;
  kitchen: string;
  price: string;
  badge: Badge;
  image: string;
};

export type Area = {
  name: string;
  minutes: number;
};

export const dishes: Dish[] = [
  {
    name: "Benachin",
    kitchen: "Mamma Binta's Kitchen · Westfield",
    price: "D250",
    badge: "Popular",
    image: "/dish-1.svg",
  },
  {
    name: "Domoda",
    kitchen: "Kairaba Corner · Kololi",
    price: "D200",
    badge: "Popular",
    image: "/dish-2.svg",
  },
  {
    name: "Chicken yassa",
    kitchen: "Senegambia Grill · Kololi",
    price: "D350",
    badge: "Spicy",
    image: "/dish-3.svg",
  },
  {
    name: "Afra",
    kitchen: "Afra Terrace · Bakau",
    price: "D400",
    badge: "Spicy",
    image: "/dish-4.svg",
  },
  {
    name: "Supakanja",
    kitchen: "Aunty Haddy's · Serrekunda",
    price: "D180",
    badge: "Vegetarian",
    image: "/dish-5.svg",
  },
  {
    name: "Tapalapa and egg",
    kitchen: "Morning Bread · Bakau",
    price: "D75",
    badge: "Breakfast",
    image: "/dish-6.svg",
  },
];

export const areas: Area[] = [
  { name: "Serrekunda", minutes: 25 },
  { name: "Bakau", minutes: 30 },
  { name: "Kololi", minutes: 35 },
  { name: "Brusubi", minutes: 40 },
  { name: "Bijilo", minutes: 45 },
  { name: "Lamin", minutes: 50 },
];
