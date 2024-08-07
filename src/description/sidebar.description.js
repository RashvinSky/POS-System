import {
  applicationsIcon,
  customersIcon,
  dashboardIcon,
  // discountIcon,
  inventoryIcon,
  kitchenIcon,
  ordersIcon,
  productsIcon,
  ratingsIcon,
  reportsIcon,
  settingsIcon,
  tablesIcon,
} from "../assets/icons/sidebar";

export const menuItems = [
  {
    type: "item",
    icon: dashboardIcon,
    to: "/dashboard",
    name: "sidebar.dashboard",
  },
  { type: "item", icon: tablesIcon, to: "/table", name: "sidebar.tables" },
  {
    type: "accordion",
    icon: productsIcon,
    title: "Products",
    links: [
      { to: "/products", name: "Products" },
      { to: "/categories", name: "Categories" },
      { to: "/variations", name: "Variations" },
      { to: "/units", name: "Units" },
      { to: "/base-units", name: "Base Units" },
    ],
  },
  {
    type: "accordion",
    icon: productsIcon,
    title: "Purchases",
    links: [
      { to: "/purchases", name: "Purchases" },
      { to: "/purchase-return", name: "Purchases Return" },
    ],
  },
  {
    type: "accordion",
    icon: productsIcon,
    title: "Sales",
    links: [
      { to: "/sales", name: "Sales" },
      { to: "/sales-return", name: "Sales Return" },
    ],
  },
  // {
  //   type: "item",
  //   icon: discountIcon,
  //   to: "/discounts",
  //   name: "sidebar.discounts",
  // },
  {
    type: "accordion",
    icon: customersIcon,
    title: "Peoples",
    links: [
      { to: "/suppliers", name: "Suppliers" },
      { to: "/customers", name: "Customers" },
    ],
  },
  { type: "heading", name: "sidebar.features" },
  {
    type: "item",
    icon: ordersIcon,
    to: "/orders",
    name: "sidebar.orders",
  },
  {
    type: "item",
    icon: kitchenIcon,
    to: "/kitchen",
    name: "sidebar.kitchen",
  },
  {
    type: "item",
    icon: inventoryIcon,
    to: "/inventory",
    name: "sidebar.inventory",
  },
  {
    type: "item",
    icon: ratingsIcon,
    to: "/ratings",
    name: "sidebar.ratings",
  },
  {
    type: "item",
    icon: reportsIcon,
    to: "/reports",
    name: "sidebar.reports",
  },
  {
    type: "item",
    icon: applicationsIcon,
    to: "/applications",
    name: "sidebar.applications",
  },
  {
    type: "item",
    icon: settingsIcon,
    to: "/settings",
    name: "sidebar.settings",
  },
];
