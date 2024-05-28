// app/layout.tsx

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { Inter } from "next/font/google";
import { theme } from "@/theme";
import Auth0ProviderWithRouter from './auth0-provider';

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";

import "./globals.css";

export const metadata = {
    title: "AI Matrix | Next-Generation AI Automation Framework",
    description:
        "Bridging the gap between AI capabilities and real-world business.",
};

// If loading.tsx a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.className}>
        <head>
            <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            <title>AI Matrix</title>
            <ColorSchemeScript defaultColorScheme="auto" />
        </head>
        <body>
        <Auth0ProviderWithRouter>
            <MantineProvider theme={theme} defaultColorScheme="dark">
                <Notifications position="bottom-right" zIndex={1000} />
                <ModalsProvider>{children}</ModalsProvider>
            </MantineProvider>
        </Auth0ProviderWithRouter>
        </body>
        </html>
    );
}
