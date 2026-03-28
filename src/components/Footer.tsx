import { useEffect, useMemo, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Send,
} from "lucide-react";
import { useTranslation } from "../context/TranslationContext";
import { api } from "../api/client";
import EgyptianLogoMark from "./EgyptianLogoMark";
import { CONTACT_PHONE_TEL, CONTACT_PHONE_DISPLAY } from "../constants/contact";

interface FooterProps {
  data?: {
    enabled: boolean;
    fineprint?: string;
    brandTagline?: string;
  };
}

const fallbackFooter = {
  enabled: true,
  fineprint: "© Roots Egypt. All rights reserved.",
  brandTagline: undefined as string | undefined,
};

export default function Footer({ data }: FooterProps) {
  const { t } = useTranslation();
  const [footer, setFooter] = useState(data || fallbackFooter);
  const [loaded, setLoaded] = useState(Boolean(data));
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState({
    type: "",
    message: "",
  });
  const [newsletterLoading, setNewsletterLoading] = useState(false);

  // Footer is now static - no API call needed
  useEffect(() => {
    if (data) {
      setFooter(data);
      setLoaded(true);
    } else {
      setFooter(fallbackFooter);
      setLoaded(true);
    }
  }, [data]);

  const navLinks = useMemo(
    () => [
      { label: t("home", "Home"), href: "/" },
      { label: t("resources", "Resources"), href: "/gallery" },
      { label: t("sources_and_archives", "Sources & Archives"), href: "/sourcesandarchives" },
      { label: t("periods", "Periods"), href: "/periods" },
    ],
    [t]
  );

  const resourceLinks = useMemo(
    () => [
      { label: t("gallery", "Gallery"), href: "/gallery" },
      { label: t("genealogy_gallery", "Genealogy Gallery"), href: "/genealogy-gallery" },
      { label: t("library", "Library"), href: "/library" },
      { label: t("audio_library", "Audio Library"), href: "/audio" },
      { label: t("articles", "Articles"), href: "/articles" },
    ],
    [t]
  );

  const socialLinks = useMemo(
    () => [
      { Icon: Facebook, href: "https://facebook.com" },
      { Icon: Twitter, href: "https://twitter.com" },
      { Icon: Instagram, href: "https://instagram.com" },
      { Icon: Youtube, href: "https://youtube.com" },
    ],
    []
  );

  const handleNewsletterSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const email = newsletterEmail.trim();
    if (!email) {
      setNewsletterStatus({
        type: "error",
        message: t("newsletter_email_required", "Email is required."),
      });
      return;
    }

    try {
      setNewsletterLoading(true);
      setNewsletterStatus({ type: "", message: "" });
      await api.post("/newsletter", { email });
      setNewsletterEmail("");
      setNewsletterStatus({
        type: "success",
        message: t(
          "newsletter_success",
          "Thanks! We will reach out to you soon."
        ),
      });
    } catch (err: any) {
      setNewsletterStatus({
        type: "error",
        message:
          err.response?.data?.message ||
          t("newsletter_failed", "Failed to subscribe."),
      });
    } finally {
      setNewsletterLoading(false);
    }
  };

  if (!loaded || footer?.enabled === false) return null;

  return (
    <footer className="heritage-footer text-white">
      <div className="heritage-footer-grid page-container max-w-[var(--content-max)] mx-auto py-8 sm:py-10 lg:py-12">
        <div className="heritage-footer-column">
          <div className="heritage-logo flex flex-row flex-wrap items-center gap-3 mb-4">
            <EgyptianLogoMark size={44} className="text-teal shrink-0" />
            <div className="flex flex-col gap-1 min-w-0 text-left">
              <span className="navbar-logo-brand text-[clamp(1rem,2.5vw,1.35rem)]">
                <span className="navbar-logo-roots text-white">Roots</span>
                <span className="navbar-logo-egypt">Egypt</span>
              </span>
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="text-sm text-dark-beige/90 hover:text-teal transition-colors interactive-link inline-flex items-center gap-1.5 w-fit"
              >
                <Phone size={14} className="text-teal shrink-0" aria-hidden />
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>
          <p className="text-dark-beige/90 mb-6 leading-relaxed">
            {footer.brandTagline ||
              t(
                "footer_desc",
                "The premier platform for preserving Egyptian family heritage and ancestry."
              )}
          </p>
          <div className="heritage-social-links flex gap-4">
            {socialLinks.map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group w-10 h-10 rounded-full bg-white/10 hover:bg-teal/20 flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon size={18} className="text-teal group-hover:text-terracotta transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="heritage-footer-column">
          <h3 className="text-lg font-bold mb-4 text-teal">{t("links", "Quick Links")}</h3>
          <ul className="heritage-footer-links space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-dark-beige/80 hover:text-teal transition-colors inline-block interactive-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="heritage-footer-column">
          <h3 className="text-lg font-bold mb-4 text-terracotta">{t("resources", "Resources")}</h3>
          <ul className="heritage-footer-links space-y-2">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="text-dark-beige/80 hover:text-terracotta transition-colors inline-block interactive-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="heritage-footer-column">
          <h3 className="text-lg font-bold mb-4 text-date-palm">{t("contact", "Contact")}</h3>
          <ul className="heritage-footer-links space-y-3">
            <li className="flex items-center gap-2 text-dark-beige/80">
              <MapPin size={16} className="text-teal" />
              <span>{t("location_opening_soon", "Location opening soon")}</span>
            </li>
            <li className="flex items-center gap-2 text-dark-beige/80">
              <Mail size={16} className="text-terracotta" />
              <a href="mailto:contact@rootsegypt.com" className="hover:text-teal transition-colors interactive-link">
                contact@rootsegypt.com
              </a>
            </li>
            <li className="flex items-center gap-2 text-dark-beige/80">
              <Phone size={16} className="text-lotus-deep shrink-0" />
              <a
                href={`tel:${CONTACT_PHONE_TEL}`}
                className="hover:text-teal transition-colors interactive-link"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2 text-dark-beige/80">
              <MessageCircle size={16} className="text-date-palm" />
              <span>{t("contact_whatsapp_line", "WhatsApp: +20 2 XXX XXXX")}</span>
            </li>
            <li className="flex items-center gap-2 text-dark-beige/80">
              <Clock size={16} className="text-teal" />
              <span>{t("contact_hours_week", "Sun–Thu: 9:00–18:00 (Cairo time)")}</span>
            </li>
          </ul>
          <form className="mt-6 space-y-4" onSubmit={handleNewsletterSubmit}>
            <p className="text-sm uppercase tracking-[0.3em] text-teal font-semibold">
              {t("newsletter", "Newsletter")}
            </p>
            <p className="text-sm text-dark-beige/80">
              {t(
                "newsletter_prompt",
                "Leave your email and we will reach out to you."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(event) => {
                  setNewsletterEmail(event.target.value);
                  if (newsletterStatus.message) {
                    setNewsletterStatus({ type: "", message: "" });
                  }
                }}
                placeholder={t("email", "Email")}
                className="heritage-input flex-1 min-w-0 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-teal/45"
                aria-label={t("email", "Email")}
              />
              <button
                type="submit"
                className="interactive-btn btn-neu btn-neu--gold px-5 py-2.5 disabled:opacity-60 flex items-center justify-center gap-2 shrink-0"
                disabled={newsletterLoading}
              >
                <Send size={16} />
                {newsletterLoading
                  ? t("subscribing", "Subscribing...")
                  : t("subscribe", "Subscribe")}
              </button>
            </div>
            {newsletterStatus.message ? (
              <p
                className={`text-sm font-medium ${newsletterStatus.type === "success"
                  ? "text-green-400"
                  : "text-red-400"
                  }`}
              >
                {newsletterStatus.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
      <div className="heritage-footer-meta border-t border-white/10 bg-dark-coffee py-4 text-center text-sm text-dark-beige/60">
        {footer.fineprint || "© Roots Egypt. All rights reserved."}
      </div>
    </footer>
  );
}

