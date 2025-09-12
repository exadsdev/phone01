import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { SITE, BRAND, DEFAULT_OG, KEYWORDS } from "./seo.config";

export const metadata = {
  metadataBase: new URL(SITE),
  title: `${BRAND} | ขายมือถือ PG Phone ทุกรุ่น`,
   icons: { icon: "/icon.png" },
  description:
    "PG Phone ร้านขายมือถือออนไลน์ ยี่ห้อ PG Phone ทุกรุ่น เช่น PG V9, PG V8 และรุ่นอื่น ๆ พร้อมโปรโมชั่นพิเศษ",
  keywords: KEYWORDS.join(", "),
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    title: `${BRAND} | ขายมือถือ PG Phone ทุกรุ่น`,
    description:
      "PG Phone ร้านขายมือถือออนไลน์ ยี่ห้อ PG Phone ทุกรุ่น เช่น PG V9, PG V8 และรุ่นอื่น ๆ พร้อมโปรโมชั่นพิเศษ",
    images: [
      {
        url: DEFAULT_OG,
        width: 800,
        height: 600,
        alt: "PG Phone - ขายมือถือ PG Phone ทุกรุ่น",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
            <Main/> 
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
