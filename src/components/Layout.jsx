import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(max-width: 1024px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const [search, setSearch] = useState("");

  const handleToggleCollapse = () => {
    if (isMobile) {
      setMobileOpen((prev) => !prev);
    } else {
      setCollapsed((prev) => !prev);
    }
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="flex min-h-screen">
        <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} onClose={closeMobile} />
        <div className="flex-1">
          <Header
            onToggleCollapse={handleToggleCollapse}
            dark={dark}
            onToggleDark={() => setDark((prev) => !prev)}
            search={search}
            onSearch={setSearch}
          />
          <main className="mx-auto p-4 md:p-6 lg:p-8 max-w-screen-2xl">
            <div key={useLocation().pathname} className="page-transition">
              <Outlet context={{ search }} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
