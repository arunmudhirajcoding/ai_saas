import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { UserSentrySetup } from "@/components/UserSentrySetup";
import FeedbackButton from "@/components/FeedbackButton";
import Providers from "./providers";

const bricolage = Bricolage_Grotesque({
	variable: "--font-bricolage",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tekytalk",
	description: "Real-time AI Teaching Platform",
	icons: { icon: "/logo.png" },
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${bricolage.variable} antialiased`}>
				{/* everything client-only lives under <Providers> */}
				<Providers>
					<UserSentrySetup />
					<Navbar />
					{children}
					<FeedbackButton />
				</Providers>
			</body>
		</html>
	);
}
