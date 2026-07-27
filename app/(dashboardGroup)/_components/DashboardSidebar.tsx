"use client";

/* Dashboard Sidebar */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LayoutDashboard, PlusCircle } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ISidebarItem, NavbarProps } from "@/lib/types";
import { sidebarMenuItems } from "../_config/sideBarMenuItems";

export default function DashboardSidebar({ user }: NavbarProps) {
  const pathname = usePathname();

  let navItem: ISidebarItem[] = [];
  if (user.data.profile.role === "USER") {
    navItem = sidebarMenuItems.USER;
  } else if (user.data.profile.role === "AUTHOR") {
    navItem = sidebarMenuItems.AUTHOR;
  } else if (user.data.profile.role === "ADMIN") {
    navItem = sidebarMenuItems.ADMIN;
  }

  return (
    <Sidebar collapsible="none" className="h-[calc(100svh-0rem)] border-r">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-5 w-5" />
          </div>

          <div>
            <h2 className="font-semibold">Dashboard</h2>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItem.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />

                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
