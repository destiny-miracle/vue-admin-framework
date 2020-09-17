import routesHome from "./routes-home";
import routesIcon from "./routes-icon";
import routesRoutes from "./routes-routes";
import routesEditor from "./routes-editor";
import routesLXP from "./routes-lxp";
import AccountLogin from "@/views/AccountLogin";
import AdminLayout from "@/components/layout/AdminLayout.vue";
import i18n from "@/locales/i18n";

export default [
  {
    path: "/admin/login",
    name: "AccountLogin",
    component: AccountLogin,
    meta: {
      title: `${i18n.t("common.login")} - ${i18n.t("common.admin")} - ${i18n.t(
        "common.brand"
      )}`
    }
  },
  {
    path: "/admin",
    component: AdminLayout,
    redirect: { name: "Home" },
    children: [...routesHome, ...routesIcon, ...routesRoutes, ...routesEditor]
  },
  ...routesLXP
];
