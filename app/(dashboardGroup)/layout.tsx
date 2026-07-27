import { SidebarProvider } from "@/components/ui/sidebar";

import DashboardSidebar from "./_components/DashboardSidebar";

import { getMe } from "@/service/getMe";
import { Navbar } from "@/components/ui/shared/navbar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />

      <SidebarProvider>
        <div className="flex flex-1">
          <DashboardSidebar user={user} />

          <main className="flex-1 min-w-0 p-6">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
