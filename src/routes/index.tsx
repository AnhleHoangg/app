import { Home } from "../page/home/Home";
import Contact from "../page/contact/Contact";
import config from "../config";
import Login from "../page/login/Login";
import { Shop } from "../page/shop/Shop";
import { Page } from "../page/page/Page";

// Public routes
const publicRoutes = [
  { path: config.Routes.home, component: Home },
  { path: config.Routes.contact, component: Contact },
  { path: config.Routes.loginRegister, component: Login },
  { path: config.Routes.shop, component: Shop },
  { path: config.Routes.page, component: Page },
];

export { publicRoutes };
