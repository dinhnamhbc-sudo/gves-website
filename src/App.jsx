import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CapabilitiesPage from "./pages/CapabilitiesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import FieldsPage from "./pages/FieldsPage.jsx";
import Home from "./pages/Home.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SubsidiariesPage from "./pages/SubsidiariesPage.jsx";

const pages = {
  home: Home,
  about: AboutPage,
  fields: FieldsPage,
  projects: ProjectsPage,
  capabilities: CapabilitiesPage,
  subsidiaries: SubsidiariesPage,
  news: NewsPage,
  contact: ContactPage,
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
