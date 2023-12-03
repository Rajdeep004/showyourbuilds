import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "PalettePulse",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
			<html lang="en">
				<body className={inter.className}>
					<ReduxProvider>
						{children}
					</ReduxProvider>
					<script
						src="https://kit.fontawesome.com/eae0ccc16c.js"
						crossOrigin="anonymous"
					></script>
				</body>
			</html>
	);
}
