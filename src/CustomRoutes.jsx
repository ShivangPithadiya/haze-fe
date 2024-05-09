import Layout from "./layouts";
import Page from "./pages";
const CustomRoutes = [
  {
    path: "/super-admin-login",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.SuperAdminAuthenticate,
    loginRequired: false,
  },
  {
    path: "/saved-designs",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.SavedDesigns,
    loginRequired: true,
  },

  {
    path: "/create-themne-1",
    exact: true,
    layout: Layout.ProductLayout,
    component: Page.ThemeAddProduct2,
    loginRequired: true,

  },
  {
    path: "/create-themne-2",
    exact: true,
    layout: Layout.ProductLayout,
    component: Page.ThemeAddProduct,
    loginRequired: true,

  },
  {
    path: '/product-customizer',
    layout: Layout.ProductLayout,
    component: Page.AddImage,
    exact: true,
    loginRequired: true,

  },
  {
    path: '/product-pricing-details',
    layout: Layout.PricingDetailsLayout,
    component: Page.PricingDetails,
    exact: true,
    loginRequired: true,

  },
  {
    path: '/product-preview',
    layout: Layout.PreviewLayout,
    component: Page.AddImage,
    exact: true,
    loginRequired: true,

  },

  {
    path: "/printing-methods",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PrintingMethods,
    loginRequired: true,

  },
  {
    path: "/printing-methods-add",
    exact: true,
    layout: Layout.PrintingLayout,
    component: Page.PrintingMethodsAdd,
    loginRequired: true,

  },
  {
    path: "/theme-builder",
    exact: true,
    layout: Layout.ThemeLayout,
    component: Page.ThemeBuilder,
    loginRequired: true,

  },
  {
    path: "/theme-selector",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.ThemeSelector,
    loginRequired: true,

  },
  {
    path: "/pricing-rules",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PricingRules,
    loginRequired: true,

  },
  {
    path: "/pricing-rules-simple-pricing",
    exact: true,
    layout: Layout.SimplePricingLayout,
    component: Page.SimplePricing,
    loginRequired: true,

  },
  {
    path: "/pricing-rules-advanced-pricing",
    exact: true,
    layout: Layout.AdvancedPricingLayout,
    component: Page.AdvancedPricing,
    loginRequired: true,

  },
  {
    path: "/my-products",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.MyProducts,
    loginRequired: true,

  },
  {
    path: "/super-admin-subscriptions",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.Subscriptions,
    loginRequired: true,

  },
  {
    path: "/orders",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.YourOrders,
    loginRequired: true,

  },
  {
    path: "/dashboard",
    exact: true,
    layout: Layout.DashboardLayout,
    component: Page.Dashboard,
    loginRequired: true,

  },
  {
    path: "/super-admin-dashboard",
    exact: true,
    layout: Layout.DashboardLayout,
    component: Page.SuperAdminDashboard,
    loginRequired: true,

  },
  {
    path: "/settings",
    exact: true,
    layout: Layout.SettingsLayout,
    component: Page.Settings,
    loginRequired: true,

  },
  {
    path: "/your-profile",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.YourProfile,
    loginRequired: true,

  },
  {
    path: "/user-management",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.UserManagement,
    loginRequired: true,

  },
    {
    path: "/user-manage",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.ManageUser,
    loginRequired: true,

  },
  {
    path: "/:page",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.Dashboard,
    loginRequired: true,

  },
  // {
  //   path: "/",
  //   exact: true,
  //   layout: Layout.LoginLayout,
  //   component: Page.Authenticate,
  // },
  // {
  //   path: "*",
  //   exact: true,
  //   layout: Layout.LoginLayout,
  //   component: Page.Authenticate,
  // },

];
export default CustomRoutes;
