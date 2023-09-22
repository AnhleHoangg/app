import { Home } from "../page/home/Home";
import Contact from "../page/contact/Contact";
import config from "../config";
import Login from "../page/login/Login";

// Public routes
const publicRoutes = [
  { path: config.Routes.home, component: Home },
  { path: config.Routes.contact, component: Contact },
  { path: config.Routes.login, component: Login },
];

export { publicRoutes };
