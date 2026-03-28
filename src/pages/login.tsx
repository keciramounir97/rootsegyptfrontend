import { useThemeStore } from "../store/theme";
import { NavLink, useNavigate } from "react-router-dom";
import { Lock, Mail, ShieldCheck, User } from "lucide-react";
import AOS from "aos";
import { useEffect, useState } from "react";
import { useAuth } from "../admin/components/AuthContext";
import { useTranslation } from "../context/TranslationContext";
import RootsPageShell from "../components/RootsPageShell";
import { isMockMode } from "../lib/mockApi";

const DEMO_ACCOUNTS = [
  { label: "Admin", email: "admin@rootsegypt.com", password: "password123", color: "text-amber-600 dark:text-amber-400", badge: "bg-amber-100 dark:bg-amber-900/40" },
  { label: "Researcher", email: "researcher@rootsegypt.com", password: "research123", color: "text-teal-600 dark:text-teal-400", badge: "bg-teal-100 dark:bg-teal-900/40" },
  { label: "Member", email: "demo@rootsegypt.com", password: "demo123", color: "text-blue-600 dark:text-blue-400", badge: "bg-blue-100 dark:bg-blue-900/40" },
];

export default function Login() {
  const { theme } = useThemeStore();
  const { login, user } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mockMode = isMockMode();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
    if (user) {
      navigate("/admin", { replace: true });
    }
  }, [user, navigate]);

  const cardBg = theme === "dark" ? "bg-[#0c1222]" : "bg-white";
  const borderColor = theme === "dark" ? "border-[#091326]" : "border-[#e8dfca]";
  const inputBg = theme === "dark" ? "bg-white/5" : "bg-black/5";
  const accent = theme === "dark" ? "text-teal" : "text-primary-brown";
  const isDark = theme === "dark";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
      setError(t("invalid_email", "Please provide a valid email before logging in"));
      return;
    }
    if (!password) {
      setError(t("password_required", "Password is required to sign you in"));
      return;
    }

    setLoading(true);
    try {
      const result = await login(trimmedEmail, password);
      if (result) {
        navigate("/admin", { replace: true });
      } else {
        setError(t("login_failed_no_user", "Login failed: No user data received"));
      }
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        err.message ||
        t("invalid_credentials", "Invalid credentials. Please check your email and password.")
      );
    } finally {
      setLoading(false);
    }
  };

  const fillDemo = (account: typeof DEMO_ACCOUNTS[0]) => {
    setEmail(account.email);
    setPassword(account.password);
    setError("");
  };

  return (
    <RootsPageShell
      hero={
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-center">
            {t("welcome_back", "Welcome Back")}
          </h1>
          <p className="text-lg opacity-80 text-center">
            {t("login_with_email_password", "Securely log in and continue building your Roots Egypt archive.")}
          </p>
        </div>
      }
      className="min-h-[calc(100vh-120px)]"
    >
      <section className="roots-section">
        <div
          data-aos="zoom-in"
          className={`interactive-card ${cardBg} relative mx-auto w-full max-w-md px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-12 rounded-2xl shadow-neu border ${borderColor}`}
        >
          {/* Demo credentials panel — only shown in mock mode */}
          {mockMode && (
            <div className={`mb-6 rounded-xl border ${isDark ? "border-amber-700/40 bg-amber-950/30" : "border-amber-300 bg-amber-50"} p-4`}>
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className={`w-4 h-4 ${isDark ? "text-amber-400" : "text-amber-600"}`} />
                <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-amber-400" : "text-amber-700"}`}>
                  Demo Mode — click to fill credentials
                </span>
              </div>
              <div className="space-y-2">
                {DEMO_ACCOUNTS.map((acc) => (
                  <button
                    key={acc.email}
                    type="button"
                    onClick={() => fillDemo(acc)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg border ${isDark ? "border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10" : "border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50"} transition-colors text-left`}
                  >
                    <div className="flex items-center gap-2">
                      <User className={`w-3.5 h-3.5 ${acc.color}`} />
                      <span className={`text-xs font-semibold ${acc.color}`}>{acc.label}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs ${isDark ? "text-white/60" : "text-gray-500"}`}>{acc.email}</div>
                      <div className={`text-xs ${isDark ? "text-white/40" : "text-gray-400"}`}>pw: {acc.password}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-semibold">
                {t("email", "Email")}
              </label>
              <div className={`flex items-center gap-3 p-3 rounded-md border ${borderColor} ${inputBg}`}>
                <Mail className={`w-5 h-5 ${accent}`} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className={`bg-transparent outline-none flex-1 ${isDark ? "text-white" : "text-[#091326]"}`}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold">
                {t("password", "Password")}
              </label>
              <div className={`flex items-center gap-3 p-3 rounded-md border ${borderColor} ${inputBg}`}>
                <Lock className={`w-5 h-5 ${accent}`} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className={`bg-transparent outline-none flex-1 ${isDark ? "text-white" : "text-[#091326]"}`}
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="interactive-btn btn-neu btn-neu--primary w-full px-6 py-3 disabled:opacity-60"
            >
              {loading ? t("please_wait", "Please wait...") : t("login", "Login")}
            </button>

            <div className="w-full h-px opacity-40 bg-primary-brown/25" />

            <div className="flex justify-between text-sm">
              <NavLink
                to="/resetpassword"
                className="interactive-link text-primary-brown hover:text-teal"
              >
                {t("forgot_password", "Forgot password?")}
              </NavLink>
              <NavLink
                to="/signup"
                className="interactive-link text-primary-brown font-semibold hover:text-teal"
              >
                {t("create_account", "Create account")}
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    </RootsPageShell>
  );
}
