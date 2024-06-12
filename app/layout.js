import MainHeader from "@/component/main-header";
import "./globals.css";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <body>
          <div id="page">
            <MainHeader />
            {children}
          </div>
        </body>
      </body>
    </html>
  );
}
