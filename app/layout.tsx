import { ReactNode } from "react";
import Navigation from "./components/Navigation";
import SSECharacterListener from "./components/SSECharacterListener";
import { ThemeProvider } from "./components/theme-provider";
import "./output.css";


export const metadata = {
  title: "HarperDB Next.js Application",
};

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="bg-black text-primary-background grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] ">
          <Navigation />
          <main>
            <h1>HarperDB Next.js Application</h1>
            <SSECharacterListener />
            {children}
          </main>
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default Layout;
