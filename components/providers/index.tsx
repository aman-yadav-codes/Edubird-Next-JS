import { cookies } from "next/headers";
import { AppSidebar } from "../app-sidebar";
import { AppSidebarInset } from "../app-sidebar-inset";
import { SidebarProvider } from "../ui/sidebar";

type ProviderProps = {
	children: React.ReactNode;
};

export async function Providers({ children }: ProviderProps) {
	const cookieStore = await cookies();

	const sidebarState = cookieStore.get("sidebar:state")?.value;

	let defaultOpen = true;

	if (sidebarState) {
		defaultOpen = sidebarState === "true";
	}

	return (
		<SidebarProvider defaultOpen={defaultOpen}>
			<AppSidebar>
				<AppSidebarInset>{children}</AppSidebarInset>
			</AppSidebar>
		</SidebarProvider>
	);
}
