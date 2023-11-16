import { Home } from "../page/home/Home";
import Contact from "../page/contact/Contact";
import config from "../config";
import Login from "../page/login/Login";
import { Shop } from "../page/shop/Shop";
import { Page } from "../page/page/Page";
import { ShoppingCart } from "../page/shopping-cart/ShoppingCart";
import { SingerProduct } from "../page/singer-product/SingerProduct";
import { NotFound } from "../page/404/NotFound";
import { SingerPage } from "../page/page/SingerPage";


// Public routes
const publicRoutes = [
  { path: config.Routes.home, component: Home },
  { path: config.Routes.contact, component: Contact },
  { path: config.Routes.loginRegister, component: Login },
  { path: config.Routes.shop, component: Shop },
  { path: config.Routes.page, component: Page },
  { path: config.Routes.shoppingcart, component: ShoppingCart },
  { path: config.Routes.singerproduct, component: SingerProduct },
  { path: config.Routes.notfound, component: NotFound },
  { path: config.Routes.singerpage, component: SingerPage },
];

export { publicRoutes };
