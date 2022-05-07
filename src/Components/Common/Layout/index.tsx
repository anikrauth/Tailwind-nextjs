import Header from "./Header";
import Footer from "./Footer";


export default function Layout({ children } : { children: any }) {
  return (
    <main>
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </main>
  )
}
