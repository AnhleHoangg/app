import { Home } from "../page/home/Home";
import Contact from "../page/contact/Contact";
import config from "../config";

// Public routes
const publicRoutes = [
  { path: config.Routes.home, component: Home },
  { path: config.Routes.contact, component: Contact },
];

export { publicRoutes };
