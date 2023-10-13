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
        <SideNav />
        {children}
      </body>
    </html>
  );
}
