import { Inter } from "next/font/google";
import Header from "../../components/header"; // Note: Ensure correct case for 'Header'
import Footer from "../../components/footer";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/styles/bootstrap-variables.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Reapplay.com",
  description: "Download the latest APK files for your favorite apps and games",
  alternates:{canonical: `${process.env.NEXT_PUBLIC_API_URL}`}
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Eudoxus+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className={inter.className}>
    <Header />
    <main>{children}</main>
    <Footer />
    </body>
    </html>
  );
}
