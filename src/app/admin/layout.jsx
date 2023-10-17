import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import "../style.css";
export default function Layout({ children }) {
  return (
    <>
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
