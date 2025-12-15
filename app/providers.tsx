"use client";

import { ClerkProvider } from "@clerk/nextjs";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
			{children}
		</ClerkProvider>
	);
}
