import { LucideIcon } from "lucide-react";
import { LayoutDashboard, FileText, PlusCircle } from "lucide-react";

export interface DashboardMenuItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const authorDashboardMenu: DashboardMenuItem[] = [
  {
    title: "Dashboard",
    href: "/author-dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "My Posts",
    href: "/author-dashboard/my-posts",
    icon: FileText,
  },
  {
    title: "Create Post",
    href: "/author-dashboard/create-post",
    icon: PlusCircle,
  },
];
