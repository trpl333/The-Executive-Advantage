import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYouPage() {
  const navigate = useNavigate();

  // Use the same public PDF you already deploy from /public
  const pdfUrl = "/executive-advantage.pdf";

  useEffect(() => {
    const t = setTimeout(() => {
      // Same-tab navigation (not a popup)
      window.location.assign(pdfUrl);
    }, 2000);

    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F2233] to-[#133044] flex flex-col items-center justify-center px-6 py-20">
      {/* Card */}
      <div
        className="w-full max-w-lg rounded-2xl p-10 text-center"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Icon */}
        <div
          className="w-14 h-14 flex items-center justify-center rounded-xl mx-auto mb-7"
          style={{ background: "rgba(47,111,143,0.25)" }}
        >
          <i className="ri-checkbox-circle-line text-2xl" style={{ color: "#7EC8E3" }} />
        </div>

        {/* Headline */}
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          You&apos;re in.
        </h1>

        {/* Body */}
        <p className="text-sm text-white/60 leading-relaxed max-w-sm mx-auto mb-10">
          Opening your PDF now… If it doesn’t open automatically, use the button below.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {/* Backup button (same tab) */}
          <a
            href={pdfUrl}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0F2233] text-sm font-semibold rounded-md hover:bg-[#F7F9FB] transition-colors cursor-pointer whitespace-nowrap shadow-md"
          >
            <i className="ri-download-2-line text-base"></i>
            Download the PDF
          </a>

          <a
            href="mailto:john.peterson333@hotmail.com?subject=Executive%20Advantage%20%E2%80%94%20Quick%20Question"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/25 text-white/85 text-sm font-medium rounded-md hover:border-white/50 hover:text-white hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap"
          >
            <i className="ri-mail-line text-base"></i>
            Email John
          </a>
        </div>
      </div>

      {/* Back link */}
      <button
        onClick={() => navigate("/")}
        className="mt-8 inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors cursor-pointer whitespace-nowrap"
      >
        <i className="ri-arrow-left-line text-sm"></i>
        Back to home
      </button>

      {/* Brand mark */}
      <div className="mt-14 flex items-center gap-2 opacity-40">
        <div className="w-6 h-6 flex items-center justify-center bg-white/20 rounded-md">
          <i className="ri-bar-chart-grouped-line text-white text-xs"></i>
        </div>
        <span className="text-xs font-semibold text-white tracking-wide">John Peterson</span>
      </div>
    </div>
  );
}
