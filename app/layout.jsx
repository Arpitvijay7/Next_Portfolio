import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

//Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Arpit Vijay",
  description: "Myself ArpitVijayvergiya, A passionate web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
