import SideNav from "./components/SideNav";
import "./layout.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="sideNavWrapper">
          <SideNav />
        </div>
        <div className="contentWrapper">{children}</div>
      </body>
    </html>
  );
}
