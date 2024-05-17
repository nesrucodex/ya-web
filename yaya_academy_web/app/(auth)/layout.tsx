"use client";
import { Inter, Montserrat } from "next/font/google";
import "../(client)/globals.css";
import "@mantine/core/styles.css";
import { CookiesProvider } from "next-client-cookies/server";
import { ColorSchemeScript } from "@mantine/core";
import { MantineProvider, createTheme, darken } from "@mantine/core";
import { useState } from "react";
import NavBar from "@/components/NavBar";
import AppDrawer from "@/components/Drawer";
import HomeNavBar from "@/components/HomeNavbar";
import Footer from "@/components/Footer";
import ReduxProvider from "@/lib/Provider";

// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: [] });

// export const metadata: Metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };

const lightTheme = createTheme({
  colors: {},
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
});

const darkTheme = createTheme({
  primaryColor: "orange",
});

const theme = createTheme({
  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [stickNavBar, setStickNavBar] = useState(false);
  const [logged_in, setLoggedin] = useState(true);
  // const AppTheme = useAppSelector((state) => state.themeReducer.theme);
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={montserrat.className}>
        <MantineProvider theme={darkTheme}>
          {/* <Provider store={store}> */}

          <ReduxProvider>
            {/* <Provider store={store}> */}
            <CookiesProvider>{children}</CookiesProvider>
          </ReduxProvider>
          {/* </Provider> */}
        </MantineProvider>
      </body>
    </html>
  );
}
