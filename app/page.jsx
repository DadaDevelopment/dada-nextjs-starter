export default function Home() {
  return (
    <main style={{ maxWidth: 640, margin: "80px auto", padding: 24, lineHeight: 1.6 }}>
      <h1 style={{ fontSize: 40 }}>Работает на Dada Cloud</h1>
      <p>
        Этот Next.js задеплоен из GitHub в Dada Cloud — российское облако с оплатой
        рублями и данными в РФ. Правь этот файл, коммить, и Dada пересоберёт приложение.
      </p>
      <p>
        <a href="https://cloud.dada-tuda.ru" style={{ color: "#2563eb" }}>cloud.dada-tuda.ru →</a>
      </p>
    </main>
  );
}
