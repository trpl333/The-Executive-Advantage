import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Overview', id: 'overview', type: 'scroll' },
  { label: "What's inside", id: 'whats-inside', type: 'scroll' },
  { label: 'The framework', id: 'framework', type: 'scroll' },
  { label: '30-day plan', id: 'plan', type: 'scroll' },
  { label: 'About', id: 'about', type: 'scroll' },
  { label: 'Meet John', href: '/meet-john', type: 'link' },
];

const WHATS_INSIDE = [
  { icon: 'ri-arrow-right-up-line', text: 'The shift: tools vs execution design' },
  { icon: 'ri-search-eye-line', text: 'Where revenue leaks hide (universal patterns)' },
  { icon: 'ri-flow-chart', text: 'The model: Signal → Action → Follow-through → Accountability' },
  { icon: 'ri-list-check-2', text: 'The five workflows to build first' },
  { icon: 'ri-shield-line', text: 'Governance without handcuffs' },
  { icon: 'ri-bar-chart-box-line', text: 'Weekly scorecard (what to measure)' },
  { icon: 'ri-calendar-check-line', text: 'A 30-day rollout plan' },
  { icon: 'ri-file-list-3-line', text: 'One-page blueprint + executive questions' },
];

const FRAMEWORK_STEPS = [
  { icon: 'ri-radar-line', label: 'Signal', desc: 'Capture intent and context in real time before the moment passes.' },
  { icon: 'ri-flashlight-line', label: 'Action', desc: 'Execute the right response immediately — no lag, no guesswork.' },
  { icon: 'ri-refresh-line', label: 'Follow-through', desc: 'Ensure every commitment is tracked and nothing falls through.' },
  { icon: 'ri-checkbox-circle-line', label: 'Accountability', desc: 'Measure outcomes, close loops, and improve continuously.' },
];

const WORKFLOWS = [
  { num: '01', title: 'Speed-to-lead + routing', desc: 'Capture, qualify, and route leads to the right person in seconds — not hours.' },
  { num: '02', title: 'Structured qualification + meeting booking', desc: 'Ask the right questions, book meetings automatically, and prep your team with context.' },
  { num: '03', title: 'Post-interaction follow-up + memory', desc: 'Auto-generate follow-ups with full context and next steps. Nothing forgotten.' },
  { num: '04', title: 'Pipeline truth + forecast hygiene', desc: 'Surface stalled deals, missing data, and forecast risks before they become problems.' },
  { num: '05', title: 'Renewal / at-risk customer save loop', desc: 'Identify churn signals early and trigger proactive outreach to save revenue.' },
];

const ROLES = [
  { icon: 'ri-user-star-line', title: 'CEO / President', desc: 'Drive execution velocity across the entire organization.' },
  { icon: 'ri-line-chart-line', title: 'CRO / VP Sales / Revenue Leader', desc: 'Eliminate revenue leaks and sharpen forecast accuracy.' },
  { icon: 'ri-settings-4-line', title: 'COO / Ops Leader', desc: 'Build scalable systems that improve with every interaction.' },
  { icon: 'ri-team-line', title: 'GTM Leaders', desc: 'Ship measurable execution gains in weeks, not quarters.' },
];

export default function HomePage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    bottleneck: '',
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // -------------------------------------------------------------------------
  // Scroll handling
  // -------------------------------------------------------------------------
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setShowMobileMenu(false);
  };

  // -------------------------------------------------------------------------
  // Form submission with error handling
  // -------------------------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client‑side validation
    if (!formData.firstName || !formData.email || !formData.bottleneck || !formData.agree) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const body = new URLSearchParams();
      body.append('firstName', formData.firstName);
      body.append('lastName', formData.lastName);
      body.append('email', formData.email);
      body.append('company', formData.company);
      body.append('role', formData.role);
      body.append('bottleneck', formData.bottleneck);
      body.append('agree', formData.agree ? 'Yes' : 'No');

      const res = await fetch('https://formspree.io/f/mlgwzgbv', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Server error: ${res.status} – ${errText}`);
      }

      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Sorry, something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* ── Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/97 backdrop-blur-md border-b border-[#D9DEE3] shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Brand */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 cursor-pointer"
            >
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
            </button>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) =>
                link.type === 'link' ? (
                  <Link
                    key={link.label}
                    to={link.href!}
                    className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      scrolled ? 'text-[#3E4C59] hover:text-[#0F2233]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id!)}
                    className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      scrolled ? 'text-[#3E4C59] hover:text-[#0F2233]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              )}
              <button
                onClick={() => scrollToSection('download')}
                className="px-5 py-2.5 bg-[#0F2233] text-white text-sm font-medium rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap"
              >
                Get the PDF
              </button>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="lg:hidden p-2 cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all ${
                    scrolled ? 'bg-[#0F2233]' : 'bg-white'
                  } ${showMobileMenu ? 'rotate-45 translate-y-1.5' : ''}`}
                ></span>
                <span
                  className={`w-full h-0.5 transition-all ${
                    scrolled ? 'bg-[#0F2233]' : 'bg-white'
                  } ${showMobileMenu ? 'opacity-0' : ''}`}
                ></span>
                <span
                  className={`w-full h-0.5 transition-all ${
                    scrolled ? 'bg-[#0F2233]' : 'bg-white'
                  } ${showMobileMenu ? '-rotate-45 -translate-y-2' : ''}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile menu */}
          {showMobileMenu && (
            <div className="lg:hidden py-5 border-t border-[#D9DEE3] bg-white">
              <div className="flex flex-col gap-4">
                {NAV_LINKS.map((link) =>
                  link.type === 'link' ? (
                    <Link
                      key={link.label}
                      to={link.href!}
                      onClick={() => setShowMobileMenu(false)}
                      className="text-sm font-medium text-[#3E4C59] hover:text-[#0F2233] text-left cursor-pointer whitespace-nowrap"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id!)}
                      className="text-sm font-medium text-[#3E4C59] hover:text-[#0F2233] text-left cursor-pointer whitespace-nowrap"
                    >
                      {link.label}
                    </button>
                  )
                )}
                <button
                  onClick={() => scrollToSection('download')}
                  className="px-5 py-2.5 bg-[#0F2233] text-white text-sm font-medium rounded-md hover:bg-[#133044] transition-colors text-center cursor-pointer whitespace-nowrap"
                >
                  Get the PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 pb-24 bg-gradient-to-b from-[#0F2233] to-[#133044] overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#2F6F8F]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2F6F8F]"></span>
            <span className="text-xs font-medium text-white/60 tracking-widest uppercase">
              Executive Mini-Guide
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
            The Executive<br />Advantage
          </h1>
          <p className="text-xl lg:text-2xl text-white/70 font-light mb-5 tracking-tight">
            Designing AI Into Revenue Execution
          </p>
          <p className="text-base text-white/55 leading-relaxed max-w-xl mx-auto mb-12">
            A short, practical mini‑guide for senior leaders who want AI to drive real execution —
            not random experimentation.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            <button
              onClick={() => scrollToSection('download')}
              className="px-7 py-3.5 bg-white text-[#0F2233] text-sm font-semibold rounded-md hover:bg-[#F7F9FB] transition-colors cursor-pointer whitespace-nowrap shadow-md"
            >
              Get the PDF
            </button>
            <a
              href="mailto:john.peterson333@hotmail.com?subject=Executive%20Advantage%20Pressure%20Test"
              className="px-7 py-3.5 bg-transparent border border-white/25 text-white/85 text-sm font-medium rounded-md hover:border-white/50 hover:text-white hover:bg-white/5 transition-all cursor-pointer whitespace-nowrap"
            >
              Request a 15‑minute pressure test
            </a>
          </div>

          {/* Glass cards */}
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              {
                icon: 'ri-settings-3-line',
                text: 'Design AI into the operating rhythm: Signal → Action → Follow-through → Accountability',
              },
              {
                icon: 'ri-shield-check-line',
                text: 'Fix universal execution leaks: response time, follow-up, handoffs, pipeline truth',
              },
              {
                icon: 'ri-rocket-line',
                text: 'Ship measurable workflows in 30 days — no hype, no buzzwords',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl p-6 border"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  borderColor: 'rgba(255,255,255,0.12)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-lg mb-4"
                  style={{ background: 'rgba(47,111,143,0.25)' }}
                >
                  <i className={`${card.icon} text-base`} style={{ color: '#7EC8E3' }}></i>
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Quiet Advantage ── */}
      <section id="overview" className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-5">
            The Quiet Advantage
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933] mb-6 leading-tight">
            The leaders who win with AI<br />don't just "use tools."
          </h2>
          <p className="text-base text-[#3E4C59] leading-relaxed max-w-2xl mx-auto">
            The advantage isn't curiosity. It's designing AI into execution so cycle time drops,
            follow-through becomes consistent, and decisions improve. AI becomes operating leverage —
            not a side project.
          </p>
        </div>
      </section>

      {/* ── What's Inside ── */}
      <section id="whats-inside" className="py-24 lg:py-32 bg-[#F7F9FB]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              The Guide
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933]">
              What you'll get in 10 minutes
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHATS_INSIDE.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#D9DEE3] rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-[#F7F9FB] border border-[#D9DEE3] rounded-lg mb-4">
                  <i className={`${item.icon} text-base text-[#2F6F8F]`}></i>
                </div>
                <p className="text-sm text-[#1F2933] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Framework ── */}
      <section id="framework" className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              The Operating Model
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933]">
              Four steps. One system.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {FRAMEWORK_STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-[#F7F9FB] border border-[#D9DEE3] rounded-xl p-7 h-full hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                  <div className="w-10 h-10 flex items-center justify-center bg-[#0F2233] rounded-lg mb-5">
                    <i className={`${step.icon} text-base text-white`}></i>
                  </div>
                  <h3 className="text-base font-bold text-[#1F2933] mb-2">{step.label}</h3>
                  <p className="text-sm text-[#3E4C59] leading-relaxed">{step.desc}</p>
                </div>
                {i < FRAMEWORK_STEPS.length - 1 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center">
                    <i className="ri-arrow-right-s-line text-xl text-[#2F6F8F]"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Flow label */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {FRAMEWORK_STEPS.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#3E4C59] tracking-wide">{step.label}</span>
                {i < FRAMEWORK_STEPS.length - 1 && (
                  <i className="ri-arrow-right-line text-xs text-[#D9DEE3]"></i>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 Workflows ── */}
      <section id="plan" className="py-24 lg:py-32 bg-[#F7F9FB]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              Where to Start
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933]">
              The five workflows to build first
            </h2>
          </div>
          <div className="space-y-4">
            {WORKFLOWS.map((w, i) => (
              <div
                key={i}
                className="bg-white border border-[#D9DEE3] rounded-xl p-7 flex items-start gap-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-[#F7F9FB] border border-[#D9DEE3] rounded-lg">
                  <span className="text-xs font-bold text-[#2F6F8F] tracking-wide">{w.num}</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1F2933] mb-1.5">{w.title}</h3>
                  <p className="text-sm text-[#3E4C59] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              Audience
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933]">
              Built for leaders who own outcomes
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROLES.map((role, i) => (
              <div
                key={i}
                className="bg-[#F7F9FB] border border-[#D9DEE3] rounded-xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 flex items-center justify-center bg-white border border-[#D9DEE3] rounded-lg mb-4">
                  <i className={`${role.icon} text-base text-[#2F6F8F]`}></i>
                </div>
                <h3 className="text-sm font-bold text-[#1F2933] mb-1.5">{role.title}</h3>
                <p className="text-xs text-[#3E4C59] leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Download Form ── */}
      <section id="download" className="py-24 lg:py-32 bg-[#F7F9FB]">
        <div className="max-w-xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-4">
              Get the Guide
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1F2933] mb-3">
              Get the PDF
            </h2>
            <p className="text-sm text-[#3E4C59] leading-relaxed">
              Drop your info and I'll send the guide + a quick note on where I'd start based on
              your bottleneck.
            </p>
          </div>

          <form
            id="pdf-download-form"
            data-readdy-form
            onSubmit={handleSubmit}
            className="bg-white border border-[#D9DEE3] rounded-xl p-8 shadow-sm"
          >
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold text-[#1F2933] mb-1.5 uppercase tracking-wide"
                  >
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#D9DEE3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2F6F8F] focus:border-[#2F6F8F] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-semibold text-[#1F2933] mb-1.5 uppercase tracking-wide"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#D9DEE3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2F6F8F] focus:border-[#2F6F8F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-[#1F2933] mb-1.5 uppercase tracking-wide"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#D9DEE3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2F6F8F] focus:border-[#2F6F8F] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-semibold text-[#1F2933] mb-1.5 uppercase tracking-wide"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#D9DEE3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2F6F8F] focus:border-[#2F6F8F] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-xs font-semibold text-[#1F2933] mb-1.5 uppercase tracking-wide"
                >
                  Role / Title
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#D9DEE3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2F6F8F] focus:border-[#2F6F8F] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="bottleneck"
                  className="block text-xs font-semibold text-[#1F2933] mb-1.5 uppercase tracking-wide"
                >
                  Biggest execution bottleneck <span className="text-red-400">*</span>
                </label>
                <select
                  id="bottleneck"
                  name="bottleneck"
                  required
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm text-[#1F2933] border border-[#D9DEE3] rounded-md focus:outline-none focus:ring-1 focus:ring-[#2F6F8F] focus:border-[#2F6F8F] transition-colors cursor-pointer bg-white"
                >
                  <option value="">Select one…</option>
                  <option value="Speed-to-lead">Speed-to-lead</option>
                  <option value="Follow-up consistency">Follow-up consistency</option>
                  <option value="Handoffs">Handoffs</option>
                  <option value="Pipeline truth / forecasting">
                    Pipeline truth / forecasting
                  </option>
                  <option value="Renewals / churn risk">Renewals / churn risk</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  required
                  checked={formData.agree}
                  onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                  className="mt-0.5 w-4 h-4 border-[#D9DEE3] rounded cursor-pointer accent-[#0F2233]"
                />
                <label htmlFor="agree" className="text-xs text-[#3E4C59] leading-relaxed cursor-pointer">
                  I agree to receive the PDF and a follow‑up note.{' '}
                  <span className="text-red-400">*</span>
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#0F2233] text-white text-sm font-semibold rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              >
                {isSubmitting ? 'Sending…' : 'Send the PDF'}
              </button>

              <p className="text-xs text-[#3E4C59]/70 text-center">
                No spam. No selling your info. One guide + one follow‑up note.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* ── From the Author ── */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* Left column */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-5">
                From the author
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#1F2933] leading-snug mb-5">
                I wrote this for leaders who want AI to move outcomes — not generate noise.
              </h2>
              <p className="text-base text-[#3E4C59] leading-relaxed mb-8">
                I&apos;m John Peterson — a senior commercial leader and builder. I help teams design AI into the operating rhythm so execution gets faster, follow-through becomes consistent, and decisions improve.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  { icon: 'ri-flow-chart', text: 'Operating model: Signal → Action → Follow-through → Accountability' },
                  { icon: 'ri-focus-3-line', text: 'Best starting points: Speed-to-lead, follow-up, handoffs, pipeline truth' },
                  { icon: 'ri-bar-chart-box-line', text: 'Success looks like: Cycle time down, cleaner pipeline truth, measurable lift per headcount' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#F7F9FB] border border-[#D9DEE3] rounded-lg mt-0.5">
                      <i className={`${item.icon} text-sm text-[#2F6F8F]`}></i>
                    </div>
                    <p className="text-sm text-[#3E4C59] leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Link
                  to="/meet-john"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F2233] text-white text-sm font-semibold rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-play-circle-line text-base"></i>
                  Meet John (40-sec video)
                  <i className="ri-arrow-right-line text-sm"></i>
                </Link>
                <a
                  href="mailto:john.peterson333@hotmail.com?subject=Executive%20Advantage%20%E2%80%94%20Quick%20Question"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2F6F8F] hover:text-[#0F2233] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-mail-line text-base"></i>
                  Email John
                  <i className="ri-arrow-right-line text-sm"></i>
                </a>
              </div>
            </div>

            {/* Right column — Credibility panel */}
            <div className="bg-[#F7F9FB] border border-[#D9DEE3] rounded-xl p-8">
              <h3 className="text-base font-bold text-[#1F2933] mb-1.5">Credibility, not hype</h3>
              <p className="text-sm text-[#3E4C59] leading-relaxed mb-7">
                A few proof points that explain why this guide is built for real operators.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Turnaround', metric: '-8% → +45%', desc: 'Gross margin improvement' },
                  { label: 'Growth', metric: '+28%', desc: 'Revenue growth' },
                  { label: 'Systems', metric: 'Execution design', desc: 'Workflows + cadence + scorecard' },
                  { label: 'Leadership', metric: 'Hands-on', desc: 'Operator mindset with executive ownership' },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#D9DEE3] rounded-lg p-5"
                  >
                    <p className="text-xs font-semibold tracking-widest uppercase text-[#2F6F8F] mb-2">
                      {card.label}
                    </p>
                    <p className="text-lg font-bold text-[#1F2933] mb-1">{card.metric}</p>
                    <p className="text-xs text-[#3E4C59] leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>

              <a
                href="mailto:john.peterson333@hotmail.com?subject=Executive%20Advantage%20%E2%80%94%20My%20Bottleneck&body=My%20biggest%20execution%20bottleneck%20is%3A%20"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F2233] text-white text-sm font-semibold rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap"
              >
                <i className="ri-send-plane-line text-base"></i>
                Send bottleneck
                <i className="ri-arrow-right-line text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#F7F9FB] border-t border-[#D9DEE3] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 flex items-center justify-center bg-[#0F2233] rounded-md">
                <i className="ri-bar-chart-grouped-line text-white text-xs"></i>
              </div>
              <span className="text-sm font-semibold text-[#1F2933]">John Peterson</span>
            </div>
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
              This guide is educational and does not constitute legal, financial, or regulated
              advice.
            </p>
          </div>
        </div>
      </footer>

      {/* ── Mobile sticky CTA ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#D9DEE3] px-4 py-3 z-40">
        <button
          onClick={() => scrollToSection('download')}
          className="w-full py-3 bg-[#0F2233] text-white text-sm font-semibold rounded-md hover:bg-[#133044] transition-colors cursor-pointer whitespace-nowrap"
        >
          Get the PDF
        </button>
      </div>
    </div>
  );
}
