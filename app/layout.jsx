import "./globals.css";

export const metadata = {
  title: "TITAN NOVA | Premium Fitness Club",
  description:
    "A premium futuristic fitness club for hypertrophy, strength, conditioning, and elite transformation systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
