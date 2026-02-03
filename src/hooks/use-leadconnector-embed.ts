import { useEffect } from "react";

const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

/**
 * Ensures the LeadConnector form embed script is present.
 * The script is responsible for sizing/embedding behavior that can remove internal iframe scrollbars.
 */
export function useLeadConnectorEmbed() {
  useEffect(() => {
    // Avoid duplicate script tags across pages/components.
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_SRC}"]`
    );
    if (existing) return;

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Keep the script for other pages (do not remove on unmount).
    };
  }, []);
}
