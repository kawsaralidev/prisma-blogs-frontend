import { LayoutDashboard, Users, FileText } from "lucide-react";

import { DashboardMenuItem } from "./author-dashboard-menu";

export const adminDashboardMenu: DashboardMenuItem[] = [
  {
    title: "Dashboard",
    href: "/admin-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin-dashboard/users",
    icon: Users,
  },
  {
    title: "Posts",
    href: "/admin-dashboard/posts",
    icon: FileText,
  },
];
