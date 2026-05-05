import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Providers } from "@/components/providers"; // Update path if necessary

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Authentication Check
  const isAdmin = true; // Set to true for testing, change to your actual auth logic
  
  if (!isAdmin) {
    redirect("/login");
  }

  return (
    <Providers>
      {/* The Providers component contains the SidebarProvider and AppSidebar */}
      {/* The children will be rendered inside the AppSidebarInset automatically */}
      {children}
    </Providers>
  );
}
