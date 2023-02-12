import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
import "./globals.css";
import Provider from "./Provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Header */}
          <Header />
          {/* Navbar */}
          <Navbar />
          {/* SearchBox */}
          <SearchBox />

          {children}
        </Provider>
      </body>
    </html>
  );
}
