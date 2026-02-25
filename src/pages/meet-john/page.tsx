
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const WHAT_I_BUILD = [
  {
    icon: 'ri-flashlight-line',
    title: 'Speed-to-lead + routing',
    desc: 'Capture and route leads to the right person in seconds — before the moment passes.',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Structured qualification + booking',
    desc: 'Ask the right questions automatically, book meetings, and prep your team with full context.',
  },
  {
    icon: 'ri-chat-follow-up-line',
    title: 'Post-interaction follow-up + memory',
    desc: 'Auto-generate follow-ups with context and next steps. Nothing forgotten, nothing dropped.',
  },
  {
    icon: 'ri-bar-chart-box-line',
    title: 'Pipeline truth + forecast hygiene',
    desc: 'Surface stalled deals and forecast risks before they become expensive surprises.',
  },
];

const WORK_TOGETHER = [
  {
    icon: 'ri-timer-flash-line',
    label: 'Executive Pressure Test',
    duration: '15 min',
    desc: 'Identify the fastest leverage point and the first workflow to ship.',
    cta: 'Book a call',
    href: 'https://YOUR_BOOKING_LINK_HERE',
  },
  {
    icon: 'ri-rocket-2-line',
    label: '30-day Sprint',
    duration: '30 days',
    desc: 'Ship one workflow end-to-end with a weekly scorecard to measure impact.',
    cta: 'Email John',
    href: 'mailto:john.peterson333@hotmail.com?subject=30-Day%20Sprint%20Inquiry',
  },
  {
    icon: 'ri-building-4-line',
    label: 'Fractional / Interim Leadership',
    duration: 'Ongoing',
    desc: 'Scale execution systems across teams with embedded senior leadership.',
    cta: 'Email John',
    href: 'mailto:john.peterson333@hotmail.com?subject=Fractional%20Leadership%20Inquiry',
  },
];

const FAQS = [
  {
    q: 'Is this industry-specific?',
    a: 'No. The execution leaks are universal — response time, follow-up, handoffs, and pipeline truth show up in every sector.',
  },
  {
    q: 'Do you build tools or use what we already have?',
    a: 'Usually start with what you have. Add only what\'s needed. The goal is leverage, not a new tech stack.',
  },
  {
    q: 'How fast do you see impact?',
    a: 'Weeks, not quarters — if we pick the right workflow. Speed depends on picking the highest-leverage starting point.',
  },
  {
    q: 'What does success look like?',
    a: 'Cycle time down, follow-through up, cleaner pipeline truth, measurable lift. Defined before we start.',
  },
  {
    q: 'Do you replace teams?',
    a: 'No — this makes teams execute consistently. The goal is leverage, not headcount reduction.',
  },
];

export default function MeetJohnPage() {
  const [scrolled, setScrolled] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/97 backdrop-blur-md border-b border-[#D9DEE3] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-8 h-8 flex items-center justify-center bg-[#0F2233] rounded-md">
                <i className="ri-bar-chart-grouped-line text-white text-sm"></i>
              </div>
              <span
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  scrolled ? 'text-[#0F2233]' : 'text-white'
                }`}
              >
                John Peterson
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {[
                { label: 'Overview', href: '/#overview' },
                { label: "What's inside", href: '/#whats-inside' },
                { label: 'The framework', href: '/#framework' },
                { label: '30-day plan', href: '/#plan' },
                { label: 'Meet John', href: '/meet-john' },
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    link.href === '/meet-john'
                      ? scrolled
                        ? 'text-[#0F2233] font-semibold'
                        : 'text-white font-semibold'
                      : scrolled
                      ? 'text-[#3E4C59] hover:text-[#0F2233]'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://YOUR_BOOKING_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#0F2233] text-white text-sm font-medium rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap"
              >
                Book a Meeting
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-[#0F2233]' : 'bg-white'} ${showMobileMenu ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-[#0F2233]' : 'bg-white'} ${showMobileMenu ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 transition-all ${scrolled ? 'bg-[#0F2233]' : 'bg-white'} ${showMobileMenu ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {showMobileMenu && (
            <div className="lg:hidden py-5 border-t border-[#D9DEE3] bg-white">
              <div className="flex flex-col gap-4">
                {[
                  { label: 'Overview', href: '/#overview' },
                  { label: "What's inside", href: '/#whats-inside' },
                  { label: 'The framework', href: '/#framework' },
                  { label: '30-day plan', href: '/#plan' },
                  { label: 'Meet John', href: '/meet-john' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setShowMobileMenu(false)}
                    className="text-sm font-medium text-[#3E4C59] hover:text-[#0F2233] text-left cursor-pointer whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="https://YOUR_BOOKING_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-[#0F2233] text-white text-sm font-medium rounded-md hover:bg-[#133044] transition-colors text-center cursor-pointer whitespace-nowrap"
                >
                  Book a Meeting
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center pt-20 pb-24 bg-gradient-to-b from-[#0F2233] to-[#133044] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[400px] bg-[#2F6F8F]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-[#2F6F8F]/08 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F8F]"></span>
                <span className="text-xs font-medium text-white/60 tracking-widest uppercase">
                  Senior Operator · AI Execution
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
                Meet John<br />Peterson
              </h1>
              <p className="text-lg lg:text-xl text-white/65 font-light leading-relaxed mb-10 max-w-lg">
                I help leaders design AI into execution — so results compound, not just experiments.
              </p>

              {/* Bullets */}
              <ul className="space-y-3.5 mb-12">
                {[
                  { icon: 'ri-settings-3-line', text: 'Operating model: Signal → Action → Follow-through → Accountability' },
                  { icon: 'ri-focus-3-line', text: 'Focus: cycle time, follow-up consistency, handoffs, pipeline truth' },
                  { icon: 'ri-line-chart-line', text: 'Outcome: speed + decision quality + more revenue per headcount' },
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 flex items-center justify-center rounded-md flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(47,111,143,0.25)' }}
                    >
                      <i className={`${b.icon} text-xs`} style={{ color: '#7EC8E3' }}></i>
                    </div>
                    <span className="text-sm text-white/70 leading-relaxed">{b.text}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://YOUR_BOOKING_LINK_HERE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0F2233] text-sm font-semibold rounded-md hover:bg-[#F7F9FB] transition-colors cursor-pointer whitespace-nowrap shadow-md"
                >
                  <i className="ri-calendar-line text-base"></i>
                  Book a Meeting
                </a>
                <a
                  href="mailto:john.peterson333@hotmail.com?subject=Meet%20John%20%E2%80%94%20AI%20Execution"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-white/25 text-white/85 text-sm font-medium rounded-md hover:border-white/50 hover:text-white hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-mail-line text-base"></i>
                  Email John
                </a>
              </div>
            </div>

            {/* Right: Video block */}
            <div className="flex flex-col items-center lg:items-end">
              <div
                className="w-full max-w-md rounded-2xl overflow-hidden border"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  borderColor: 'rgba(255,255,255,0.12)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.3)',
                }}
              >
                {/* Video thumbnail with play button */}
                <div className="relative w-full aspect-video bg-[#0a1a28] flex items-center justify-center group cursor-pointer">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F2233] via-[#133044] to-[#1a3d55]"></div>
                  {/* Subtle grid pattern */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                  ></div>
                  {/* Play button */}
                  <a
                    href="https://VIDEO_LINK_PLACEHOLDER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 flex flex-col items-center gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 group-hover:border-white/50 transition-all duration-300"
                    >
                      <i className="ri-play-fill text-2xl text-white ml-1"></i>
                    </div>
                    <span className="text-xs text-white/50 tracking-wide">Watch the intro</span>
                  </a>
                </div>
                {/* Caption */}
                <div
                  className="px-5 py-4 flex items-center gap-3 border-t"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center rounded-md flex-shrink-0"
                    style={{ background: 'rgba(47,111,143,0.25)' }}
                  >
                    <i className="ri-video-line text-xs" style={{ color: '#7EC8E3' }}></i>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/80">Short message (40s)</p>
                    <p className="text-xs text-white/40">John Peterson · AI Execution</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── What I Build ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              The Work
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933] mb-4">
              What I build
            </h2>
            <p className="text-base text-[#3E4C59] leading-relaxed max-w-xl mx-auto">
              I don't sell "AI tools." I build workflows and operating cadence that make execution consistent.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHAT_I_BUILD.map((item, i) => (
              <div
                key={i}
                className="bg-[#F7F9FB] border border-[#D9DEE3] rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-white border border-[#D9DEE3] rounded-lg mb-4">
                  <i className={`${item.icon} text-base text-[#2F6F8F]`}></i>
                </div>
                <h3 className="text-sm font-bold text-[#1F2933] mb-2">{item.title}</h3>
                <p className="text-xs text-[#3E4C59] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Works ── */}
      <section className="py-24 lg:py-32 bg-[#F7F9FB]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
                Track Record
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933] mb-6 leading-tight">
                Why this works
              </h2>
              <p className="text-base text-[#3E4C59] leading-relaxed mb-8">
                AI becomes leverage when it's designed into the operating rhythm and measured weekly.
              </p>
              <a
                href="https://YOUR_BOOKING_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F2233] text-white text-sm font-semibold rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-calendar-line text-base"></i>
                Book a Meeting
              </a>
            </div>

            <div className="space-y-4">
              {[
                { icon: 'ri-user-settings-line', text: 'Turnaround + growth operator (not a prompt hobbyist)' },
                { icon: 'ri-percent-line', text: 'Gross margin: -8% → +45%' },
                { icon: 'ri-arrow-up-line', text: 'Revenue growth: +28%' },
                { icon: 'ri-team-line', text: 'Built repeatable systems in complex stakeholder environments' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#D9DEE3] rounded-xl px-6 py-5 flex items-center gap-4 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-[#F7F9FB] border border-[#D9DEE3] rounded-lg flex-shrink-0">
                    <i className={`${item.icon} text-base text-[#2F6F8F]`}></i>
                  </div>
                  <p className="text-sm font-medium text-[#1F2933] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How We Can Work Together ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              Engagement Options
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933]">
              How we can work together
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {WORK_TOGETHER.map((option, i) => (
              <div
                key={i}
                className="bg-[#F7F9FB] border border-[#D9DEE3] rounded-xl p-7 flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-white border border-[#D9DEE3] rounded-lg mb-5">
                  <i className={`${option.icon} text-base text-[#2F6F8F]`}></i>
                </div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-base font-bold text-[#1F2933] leading-snug">{option.label}</h3>
                  <span className="flex-shrink-0 text-xs font-semibold text-[#2F6F8F] bg-white border border-[#D9DEE3] px-2.5 py-1 rounded-full whitespace-nowrap">
                    {option.duration}
                  </span>
                </div>
                <p className="text-sm text-[#3E4C59] leading-relaxed mb-6 flex-1">{option.desc}</p>
                <a
                  href={option.href}
                  target={option.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={option.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0F2233] hover:text-[#2F6F8F] transition-colors cursor-pointer whitespace-nowrap"
                >
                  {option.cta}
                  <i className="ri-arrow-right-line text-sm"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 lg:py-32 bg-[#F7F9FB]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              Common Questions
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933]">
              Quick FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white border border-[#D9DEE3] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left cursor-pointer"
                >
                  <span className="text-sm font-semibold text-[#1F2933]">{faq.q}</span>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <i
                      className={`ri-add-line text-base text-[#2F6F8F] transition-transform duration-200 ${
                        openFaq === i ? 'rotate-45' : ''
                      }`}
                    ></i>
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 border-t border-[#D9DEE3]">
                    <p className="text-sm text-[#3E4C59] leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 lg:py-32 bg-[#0F2233]">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-5">
            Ready to start?
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
            Let's find your fastest<br />leverage point.
          </h2>
          <p className="text-base text-white/55 leading-relaxed max-w-lg mx-auto mb-10">
            15 minutes. No pitch. Just a clear view of where execution is leaking and what to build first.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://YOUR_BOOKING_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0F2233] text-sm font-semibold rounded-md hover:bg-[#F7F9FB] transition-colors cursor-pointer whitespace-nowrap shadow-md"
            >
              <i className="ri-calendar-line text-base"></i>
              Book a Meeting
            </a>
            <a
              href="mailto:john.peterson333@hotmail.com?subject=Meet%20John%20%E2%80%94%20AI%20Execution"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent border border-white/25 text-white/85 text-sm font-medium rounded-md hover:border-white/50 hover:text-white hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap"
            >
              <i className="ri-mail-line text-base"></i>
              Email John
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#F7F9FB] border-t border-[#D9DEE3] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-2.5 cursor-pointer">
              <div className="w-7 h-7 flex items-center justify-center bg-[#0F2233] rounded-md">
                <i className="ri-bar-chart-grouped-line text-white text-xs"></i>
              </div>
              <span className="text-sm font-semibold text-[#1F2933]">John Peterson</span>
            </Link>
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-[#3E4C59]">
              <a href="mailto:john.peterson333@hotmail.com" className="hover:text-[#2F6F8F] transition-colors cursor-pointer">
                john.peterson333@hotmail.com
              </a>
              <span className="hidden md:inline text-[#D9DEE3]">|</span>
              <span>© 2026 John Peterson</span>
              <span className="hidden md:inline text-[#D9DEE3]">|</span>
              <a
                href="https://readdy.ai/?ref=logo"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-[#2F6F8F] transition-colors cursor-pointer"
              >
                Powered by Readdy
              </a>
            </div>
          </div>
          <div className="mt-5 pt-5 border-t border-[#D9DEE3]">
            <p className="text-xs text-[#3E4C59]/60 text-center">
              This guide is educational and does not constitute legal, financial, or regulated advice.
            </p>
          </div>
        </div>
      </footer>

      {/* ── Mobile sticky CTA ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#D9DEE3] px-4 py-3 z-40">
        <a
          href="https://YOUR_BOOKING_LINK_HERE"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#0F2233] text-white text-sm font-semibold rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
        >
          <i className="ri-calendar-line text-base"></i>
          Book a Meeting
        </a>
      </div>

    </div>
  );
}
