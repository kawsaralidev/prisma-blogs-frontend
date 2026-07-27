import { FileText, LayoutDashboard } from "lucide-react";
import { AUTHOR_SIDEBAR_ITEMS } from "./authorSidebarItems";
import { ADMIN_SIDEBAR_ITEMS } from "./adminSidebarItems";

import { ISidebarItem } from "@/lib/types";

const USER_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "User Dashboard",
    href: "/user-dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "My Posts",
    href: "/user-dashboard/my-post",
    icon: FileText,
  },
];

export const sidebarMenuItems = {
  USER: USER_SIDEBAR_ITEMS,
  AUTHOR: AUTHOR_SIDEBAR_ITEMS,
  ADMIN: ADMIN_SIDEBAR_ITEMS,
};
