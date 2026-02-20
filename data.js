/**
 * Static Food Data
 *
 * All menu items and categories for the application are defined here
 * as exported arrays. Each food item includes an id, image path, name,
 * description, and price. This data is used across the Home, Explore,
 * and Food Detail pages.
 *
 * No backend or database is required -- this file serves as the
 * single source of truth for all menu content.
 */

// -- Popular Categories --
// Displayed on the Home page as a grid of category cards.
// Each category has an id, image, and display name.
export const popularCategories = [
  {
    id: "pc-1",
    img: "/jollof.png",
    name: "Jollof Delights",
  },
  {
    id: "pc-2",
    img: "/pounded-yam.png",
    name: "Swallow & Soups",
  },
  {
    id: "pc-3",
    img: "/suya.png",
    name: "Grills & BBQ",
  },
  {
    id: "pc-4",
    img: "/puff-puff.png",
    name: "Sweet Treats",
  },
  {
    id: "pc-5",
    img: "/pounded-yam.png",
    name: "Jollof Delights",
  },
  {
    id: "pc-6",
    img: "/suya.png",
    name: "Grills & BBQ",
  },
];

// -- Chef's Specials --
// Featured dishes shown on the Home page.
// Each card links to its Food Detail page via the id field.
export const chefsSpecials = [
  {
    id: "cs-1",
    img: "/pepper-soup.png",
    name: "Spicy Tilapia Pepper Soup",
    price: "#3,500",
    desc: "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
  },
  {
    id: "cs-2",
    img: "/jollof.png",
    price: "#3,500",
    name: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
  },
  {
    id: "cs-3",
    price: "#3,500",
    img: "/jollof.png",
    name: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
  },
  {
    id: "cs-4",
    img: "/jollof.png",
    price: "#3,500",
    name: "Jollof Rice & Smoked Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
  },

  {
    id: "cs-5",
    img: "/j-and-fried-chicken.png",
    price: "#3,500",
    name: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
  },
  {
    id: "cs-6",
    img: "/p-and-egusi.png",
    price: "#3,500",
    name: "Egusi Soup & Pounded Yam",
    desc: "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
  },
];

// -- Explore: Popular Items --
// Shown in the "Popular" section of the Explore page.
export const explorePopular = [
  {
    id: "ep-1",
    img: "/jollof.png",
    name: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "#3,500",
  },
  {
    id: "ep-2",
    img: "/eba-egusi.png",
    name: "Eba & Egusi Soup (Goat Meat)",
    desc: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    price: "#3,500",
  },
  {
    id: "ep-3",
    img: "/edikaikong.png",
    name: "Pounded Yam & Edikaikong",
    desc: "Traditional pounded yam with rich, leafy Edikaikong soup",
    price: "#3,800",
  },
  {
    id: "ep-4",
    img: "/snail.png",
    name: "Peppered Snail",
    desc: "Spicy and savory peppered snail, perfect as a starter.",
    price: "#2,500",
  },
  {
    id: "ep-5",
    img: "/grilled-tilapia.png",
    name: "Grilled Tilapia Fish",
    desc: "Whole grilled tilapia seasoned with our special spices.",
    price: "#4,500",
  },
  {
    id: "ep-6",
    img: "/jollof.png",
    name: "Jollof Rice & Fried Chicken",
    desc: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "#3,500",
  },
];

// -- Explore: Jollof Rice and Entrees --
// Shown in the "Jollof Rice & Entrees" section of the Explore page.
export const entrees = [
  {
    id: "en-1",
    img: "/j-smoked-fish.png",
    name: "Jollof Rice & Smoked Fish",
    desc: "Flavorful jollof rice served with perfectly smoked fish.Jollof Rice & Smoked Fish",
    price: "#3,500",
  },
  {
    id: "en-2",
    img: "/jollof.png",
    name: "Party Jollof Rice (Veg)",
    desc: "Vegetarian party jollof, full of rich flavors.",
    price: "#3,500",
  },
  {
    id: "en-3",
    img: "/jollof.png",
    name: "Party Jollof Rice (Veg)",
    desc: "Vegetarian party jollof, full of rich flavors.",
    price: "#3,500",
  },
];

// -- Explore: Swallow and Soups --
// Shown in the "Swallow & Soups" section of the Explore page.
export const swallow = [
  {
    id: "sw-1",
    img: "/amala.png",
    name: "Amala, Gbegiri & Ewedu (Goat Meat)",
    desc: "Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup.",
    price: "#3,500",
  },
  {
    id: "sw-2",
    img: "/fufu.png",
    name: "Fufu & Okra Soup (Fish)",
    desc: "Light Fufu served with fresh okra soup and tilapia fish.",
    price: "#3,500",
  },
  {
    id: "sw-3",
    img: "/fufu.png",
    name: "Fufu & Okra Soup (Fish)",
    desc: "Light Fufu served with fresh okra soup and tilapia fish.",
    price: "#3,500",
  },
];

// -- Menu Categories --
// Used by the MenuCategories sidebar on the Explore page.
// Each category has an id, display name, and a sectionId that
// corresponds to the HTML id of the section it links to for smooth scrolling.
export const menuCategories = [
  { id: "mc-1", name: "Popular", sectionId: "popular" },
  { id: "mc-2", name: "Jollof Rice & Entrees", sectionId: "entrees" },
  { id: "mc-3", name: "Swallow & Soups", sectionId: "swallow" },
  { id: "mc-4", name: "Grills & BBQ", sectionId: "grills" },
  { id: "mc-5", name: "Sweet Treats", sectionId: "sweet-treats" },
  { id: "mc-6", name: "Pepper Soup", sectionId: "pepper-soup" },
  { id: "mc-7", name: "Sides & Extras", sectionId: "sides" },
];
