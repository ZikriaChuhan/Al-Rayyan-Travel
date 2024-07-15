import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { SessionProvider } from "next-auth/react";
import ClientSessionProvider from "./component/ClientSessionProvider";

config.autoAddCss = false;


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Al-Rayyan Travel",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <ClientSessionProvider>
        {children}
        </ClientSessionProvider>
        </body>
    </html>
  );
}
