export const metadata = {
  title: "Dada Cloud — Next.js starter",
  description: "Deploy Next.js from GitHub to Dada Cloud. RU cards, data in Russia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0 }}>{children}</body>
    </html>
  );
}
