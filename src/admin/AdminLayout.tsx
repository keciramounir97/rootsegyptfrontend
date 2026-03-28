import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useThemeStore } from "../store/theme";
import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import Breadcrumb from "./components/Breadcrumb";

export default function AdminLayout() {
  const [open, setOpen] = useState(true);
  const { theme } = useThemeStore();
  const isDark = theme === "dark";

  return (
    <div className="admin-shell min-h-screen relative">
      {/* Permanent Egyptian photo background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img
          src="/assets/egypt-bg.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          isDark
            ? "bg-[#060e1c]/92"
            : "bg-[#f5f1e8]/88"
        }`} />
      </div>

      <AdminHeader sidebarOpen={open} onToggleSidebar={() => setOpen((v) => !v)} />
      <AdminSidebar open={open} onClose={() => setOpen(false)} onToggle={() => setOpen((v) => !v)} />
      <main
        className={`transition-all duration-300 pt-20 pb-10 px-4 sm:px-6 ${
          open ? "lg:pl-72" : ""
        }`}
      >
        <div className="admin-panel max-w-7xl mx-auto">
          <div className="admin-panel-shell rounded-xl backdrop-blur-sm">
            <Breadcrumb />
            <Outlet context={{ sidebarOpen: open }} />
          </div>
        </div>
      </main>
    </div>
  );
}
