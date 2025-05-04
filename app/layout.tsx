import { ReactNode } from "react";
import SSECharacterListener from "./components/SSECharacterListener";
import "./styles.css";

export const metadata = {
  title: "HarperDB Next.js Application",
};

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <html>
    <body>
      <main>
        <h1>HarperDB Next.js Application</h1>
        <SSECharacterListener />
        {children}
      </main>
    </body>
  </html>
);

export default Layout;
