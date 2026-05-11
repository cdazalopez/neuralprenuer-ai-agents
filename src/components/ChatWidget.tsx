import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SCRIPT_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const WIDGET_ID = "6a01f8e9218c3a024e5f5d9c";

// Show chat widget on all routes.
const EXCLUDED_ROUTES = new Set<string>([]);

const CHAT_WIDGET_SELECTORS = [
  `script[data-widget-id="${WIDGET_ID}"]`,
  `script[src="${SCRIPT_SRC}"]`,
  "script[src*='widgets.leadconnectorhq.com']",
  "script[src*='leadconnectorhq']",
  "iframe[src*='chat-widget']",
  "iframe[src*='widgets.leadconnectorhq.com']",
  "iframe[src*='leadconnectorhq']",
  "iframe[id*='chat']",
  "lc-chat-widget",
  "chat-widget",
  "#lc-chat-widget",
  "[id*='lc-chat-widget']",
  "[class*='lc-chat-widget']",
  "[id*='leadconnector-chat']",
  "[class*='leadconnector-chat']",
  "[id*='chat-widget']",
  "[class*='chat-widget']",
  "[class*='ChatWidget']",
  "[class*='LeadConnector']",
].join(",");

const HIDE_STYLE_ID = "lc-chat-widget-hide-style";

const HIDE_CSS = `
  ${CHAT_WIDGET_SELECTORS} {
    display: none !important;
    visibility: hidden !important;
    opacity: 0 !important;
    pointer-events: none !important;
  }
`;

const installHideStyle = () => {
  if (document.getElementById(HIDE_STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = HIDE_STYLE_ID;
  style.textContent = HIDE_CSS;
  document.head.appendChild(style);
};

const removeHideStyle = () => {
  document.getElementById(HIDE_STYLE_ID)?.remove();
};

const removeWidget = () => {
  document.querySelectorAll(CHAT_WIDGET_SELECTORS).forEach((el) => el.remove());
};

const isExcludedRoute = (pathname: string): boolean => {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  if (EXCLUDED_ROUTES.has(normalized)) return true;
  // Exclude all service detail pages (e.g., /services/ai-receptionist)
  if (normalized.startsWith("/services/")) return true;
  return false;
};

const ChatWidget = () => {
  const { pathname } = useLocation();
  const excluded = isExcludedRoute(pathname);

  useEffect(() => {
    if (excluded) {
      installHideStyle();
      removeWidget();
      const observer = new MutationObserver(removeWidget);
      observer.observe(document.documentElement, { childList: true, subtree: true });
      const cleanupTimer = window.setInterval(removeWidget, 500);

      return () => {
        observer.disconnect();
        window.clearInterval(cleanupTimer);
      };
    }

    removeHideStyle();

    if (document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    script.setAttribute(
      "data-resources-url",
      "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
    );
    script.setAttribute("data-widget-id", WIDGET_ID);
    script.setAttribute("data-source", "WEB_USER");
    document.body.appendChild(script);
  }, [excluded]);

  return null;
};

export default ChatWidget;
