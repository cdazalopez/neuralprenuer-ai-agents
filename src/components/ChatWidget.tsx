import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SCRIPT_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const WIDGET_ID = "6a01f8e9218c3a024e5f5d9c";

// Routes that already have a contact / lead form — skip the chat widget here.
const EXCLUDED_ROUTES = new Set<string>([
  "/",
  "/contact",
  "/booking",
  "/opt-in",
  "/start",
  "/ig",
  "/internal-audit",
  "/legal/sms-opt-in",
]);

const removeWidget = () => {
  document
    .querySelectorAll<HTMLScriptElement>(`script[data-widget-id="${WIDGET_ID}"]`)
    .forEach((el) => el.remove());
  // LeadConnector injects these custom elements / containers when the widget mounts.
  document
    .querySelectorAll(
      "lc-chat-widget, #lc-chat-widget, [id^='lc-chat-widget'], [class*='lc-chat-widget']"
    )
    .forEach((el) => el.remove());
};

const ChatWidget = () => {
  const { pathname } = useLocation();
  const excluded = EXCLUDED_ROUTES.has(pathname);

  useEffect(() => {
    if (excluded) {
      removeWidget();
      return;
    }

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
