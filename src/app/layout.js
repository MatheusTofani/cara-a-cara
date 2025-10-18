
import "./globals.css";


export const metadata = {
  title: "Cara-a-Cara Minecraft",
  description: "Jogo cara-a-cara versão Minecraft",
  icons: {
    icon: "/items/bedrock.png"
  }
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
