import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import WorkoutProvider from "@/context/WorkoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog — Workout Library",
  description:
    "Choose workouts, create your daily plan, and track your training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <WorkoutProvider>
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <ToastContainer
            position="bottom-right"
            autoClose={2500}
            theme="dark"
          />
        </WorkoutProvider>
      </body>
    </html>
  );
}