import { LayoutDashboard, User } from "lucide-react";

import { DashboardMenuItem } from "./author-dashboard-menu";

export const userDashboardMenu: DashboardMenuItem[] = [
  {
    title: "Dashboard",
    href: "/user-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profile",
    href: "/user-dashboard/profile",
    icon: User,
  },
];
