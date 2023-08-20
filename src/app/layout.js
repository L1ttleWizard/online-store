"use client";
import { ScaleLoader } from "react-spinners";
import "animate.css";
import { Inter } from "next/font/google";
import StoreProvider from "@/redux/StoreProvider";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "@/redux/store";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <PersistGate
            loading={<ScaleLoader height={50} width={50} />}
            persistor={persistor}
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </PersistGate>
        </StoreProvider>
      </body>
    </html>
  );
}
