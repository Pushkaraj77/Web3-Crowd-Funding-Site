import {
  createCampaign,
  dashboard,
  logout,
  payment,
  profile,
  withdraw,
  hospital_light,
  hospitaldark,
  orphandark,
  orphanlight,
  oldage_light,
  oldage_dark,
  financial_dark,
  financial_light,
  refugee_dark,
  refugee_light,
  calamity_dark,
  calamity_light,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "create-campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
  },
  {
    name: "all-campaigns",
    imgUrl: payment,
    link: "/all-campaigns",
  },
  // {
  //   name: 'withdraw',
  //   imgUrl: withdraw,
  //   link: '/',
  //   disabled: true,
  // },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
  },
  {
    name: "logout",
    imgUrl: logout,
    link: "/",
  },
];

export const categories = [
  {
    name: "Medical",
    imgUrl: { theme_light: hospital_light, theme_dark: hospitaldark },
  },
  {
    name: "Orphanage",
    imgUrl: { theme_light: orphanlight, theme_dark: orphandark },
  },
  {
    name: "Oldage",
    imgUrl: { theme_light: oldage_dark, theme_dark: oldage_light },
  },
  {
    name: "Financial",
    imgUrl: { theme_light: financial_dark, theme_dark: financial_light },
  },
  {
    name: "Refugee",
    imgUrl: { theme_light: refugee_dark, theme_dark: refugee_light },
  },
  {
    name: "Calamity",
    imgUrl: { theme_light: calamity_dark, theme_dark: calamity_light },
  },
];
