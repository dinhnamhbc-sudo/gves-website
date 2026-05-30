import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Solutions from "./pages/Solutions.jsx";
import Catalog from "./pages/Catalog.jsx";
import Documents from "./pages/Documents.jsx";
import Articles from "./pages/Articles.jsx";
import Projects from "./pages/Projects.jsx";
import Implementation from "./pages/Implementation.jsx";
import Contact from "./pages/Contact.jsx";

const pages = {
  home: Home,
  solutions: Solutions,
  catalog: Catalog,
  documents: Documents,
  articles: Articles,
  projects: Projects,
  implementation: Implementation,
  contact: Contact,
};

function getInitialPage() {
  const hash = window.location.hash.replace("#", "");
  return pages[hash] ? hash : "home";
}

export default function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const Page = useMemo(() => pages[activePage] || Home, [activePage]);

  useEffect(() => {
    const syncPageFromUrl = () => setActivePage(getInitialPage());
    window.addEventListener("hashchange", syncPageFromUrl);
    window.addEventListener("popstate", syncPageFromUrl);

    return () => {
      window.removeEventListener("hashchange", syncPageFromUrl);
      window.removeEventListener("popstate", syncPageFromUrl);
    };
  }, []);

  const navigate = (page) => {
    setActivePage(page);
    window.history.pushState(null, "", page === "home" ? "#" : `#${page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header activePage={activePage} onNavigate={navigate} />
      <main>
        <Page onNavigate={navigate} />
      </main>
      <Footer onNavigate={navigate} />
    </>
  );
}
