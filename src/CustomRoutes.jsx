import Layout from "./layouts";
import Page from "./pages";
const CustomRoutes = [
  {
    path: "/saved-designs",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.SavedDesigns,
  },

  {
    path: "/create-themne-1",
    exact: true,
    layout: Layout.ProductLayout,
    component: Page.ThemeAddProduct2,
  },
  {
    path: "/create-themne-2",
    exact: true,
    layout: Layout.ProductLayout,
    component: Page.ThemeAddProduct,
  },
  {
    path: '/product-customizer',
    layout: Layout.ProductLayout,
    component: Page.AddImage,
    exact: true,
  },
  {
    path: '/product-pricing-details',
    layout: Layout.PricingDetailsLayout,
    component: Page.PricingDetails,
    exact: true,
  },
  {
    path: '/product-preview',
    layout: Layout.PreviewLayout,
    component: Page.AddImage,
    exact: true,
  },

  {
    path: "/printing-methods",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PrintingMethods,
  },
  {
    path: "/printing-methods-add",
    exact: true,
    layout: Layout.PrintingLayout,
    component: Page.PrintingMethodsAdd,
  },
  {
    path: "/theme-builder",
    exact: true,
    layout: Layout.ThemeLayout,
    component: Page.ThemeBuilder,
  },
  {
    path: "/theme-selector",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.ThemeSelector,
  },
  {
    path: "/pricing-rules",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PricingRules,
  },
  {
    path: "/pricing-rules-simple-pricing",
    exact: true,
    layout: Layout.SimplePricingLayout,
    component: Page.SimplePricing,
  },
  {
    path: "/pricing-rules-advanced-pricing",
    exact: true,
    layout: Layout.AdvancedPricingLayout,
    component: Page.AdvancedPricing,
  },
  {
    path: "/my-products",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.MyProducts,
  },
  {
    path: "/subscriptions",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.Subscriptions,
  },
  {
    path: "/orders",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.YourOrders,
  },
  {
    path: "/dashboard",
    exact: true,
    layout: Layout.DashboardLayout,
    component: Page.Dashboard,
  },
  {
    path: "/settings",
    exact: true,
    layout: Layout.SettingsLayout,
    component: Page.Settings,
  },
  {
    path: "/your-profile",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.YourProfile,
  },
  {
    path: "/:page",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.Dashboard,
  },
  {
    path: "/",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.Authenticate,
  },
  {
    path: "*",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.Authenticate,
  },

];
export default CustomRoutes;
