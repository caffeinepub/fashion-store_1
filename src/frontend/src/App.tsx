import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Fish,
  Key,
  Mail,
  Phone,
  ShieldCheck,
  Smartphone,
  Users,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

// ─── Quiz Data ───────────────────────────────────────────────
const quizQuestions = [
  {
    id: 1,
    type: "Email",
    from: "support@paypa1.com",
    subject: "Urgent: Your account has been suspended",
    body: "Your PayPal account has been suspended due to suspicious activity. You must verify your identity immediately by clicking the link below or your account will be permanently closed within 24 hours.",
    link: "http://paypa1-secure.verify-account.com/login",
    answer: "phishing" as const,
    explanation:
      "The domain 'paypa1.com' uses the number '1' instead of the letter 'l' — a classic spoofing technique. The urgent threat and suspicious link are red flags.",
  },
  {
    id: 2,
    type: "Email",
    from: "newsletter@spotify.com",
    subject: "New Music For You This Week 🎵",
    body: "Hi there! We've curated a fresh playlist based on your listening history. Discover new artists you might love this week, including trending tracks across your favorite genres.",
    link: "https://spotify.com/discover-weekly",
    answer: "safe" as const,
    explanation:
      "This email comes from the legitimate Spotify domain, contains no urgency or threats, and links to the official spotify.com domain. It's a routine newsletter.",
  },
  {
    id: 3,
    type: "SMS",
    from: "+1-555-9023",
    subject: "You're a winner!",
    body: "Congratulations! You've been selected as this week's lucky winner of $1,000 cash. Claim your prize within 2 hours before it expires! Click the link to collect your reward.",
    link: "http://bit.ly/claim-prize-xyz",
    answer: "phishing" as const,
    explanation:
      "Unsolicited prize notifications are almost always scams. The shortened URL hides the real destination, and the artificial urgency ('2 hours') is a manipulation tactic.",
  },
  {
    id: 4,
    type: "Email",
    from: "notifications@chase.com",
    subject: "Your monthly statement is ready",
    body: "Dear John Smith, your monthly account statement for October is now available. Please log in to your Chase account at chase.com to view your full statement and recent transactions.",
    link: "https://chase.com/account",
    answer: "safe" as const,
    explanation:
      "The email uses your real name (personalized), creates no artificial urgency, and directs you to the official chase.com domain. This matches legitimate bank communication patterns.",
  },
  {
    id: 5,
    type: "Email",
    from: "IT-Department@company-secure.net",
    subject: "IMMEDIATE ACTION REQUIRED: Password Reset",
    body: "Your corporate password has been compromised. You must reset it immediately using the secure portal below. Failure to act within 1 hour will result in your account being locked and IT will be notified.",
    link: "http://company-secure.net/reset-portal",
    answer: "phishing" as const,
    explanation:
      "Legitimate IT departments don't use third-party domains like 'company-secure.net'. The extreme urgency and threats of account lockout are social engineering tactics designed to bypass critical thinking.",
  },
];

// ─── Header ──────────────────────────────────────────────────
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background:
          "linear-gradient(to bottom, oklch(0.09 0.025 252 / 0.98), oklch(0.09 0.025 252 / 0.85))",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid oklch(0.74 0.12 185 / 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.74 0.12 185 / 0.15)" }}
            >
              <ShieldCheck
                className="w-5 h-5"
                style={{ color: "oklch(0.74 0.12 185)" }}
              />
            </div>
            <span
              className="text-xl font-bold tracking-tight"
              style={{ color: "oklch(0.74 0.12 185)" }}
            >
              PhishGuard
            </span>
          </div>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            data-ocid="nav.panel"
          >
            {["Learn", "Quizzes", "Scams", "About"].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm font-medium transition-colors hover:text-teal-500 relative group"
                style={{ color: "oklch(0.68 0.03 250)" }}
                data-ocid={`nav.${item.toLowerCase()}.link`}
              >
                {item}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ background: "oklch(0.74 0.12 185)" }}
                />
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="text-sm font-medium transition-colors hover:text-teal-500"
              style={{ color: "oklch(0.68 0.03 250)" }}
              data-ocid="nav.login.link"
            >
              Log In
            </button>
            <button
              type="button"
              onClick={() => scrollTo("quizzes")}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{
                background: "oklch(0.60 0.22 260)",
                color: "white",
              }}
              data-ocid="nav.getstarted.button"
            >
              Get Started
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg"
            style={{ background: "oklch(0.74 0.12 185 / 0.1)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden px-4 pb-4 pt-2 flex flex-col gap-3"
            style={{ background: "oklch(0.11 0.03 252)" }}
          >
            {["Learn", "Quizzes", "Scams", "About"].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-left py-2 text-sm font-medium"
                style={{ color: "oklch(0.68 0.03 250)" }}
              >
                {item}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("quizzes")}
              className="mt-2 px-4 py-2 rounded-full text-sm font-semibold"
              style={{ background: "oklch(0.60 0.22 260)", color: "white" }}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.74 0.12 185 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(0.74 0.12 185 / 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Badge
              className="mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest"
              style={{
                background: "oklch(0.74 0.12 185 / 0.15)",
                color: "oklch(0.74 0.12 185)",
                border: "1px solid oklch(0.74 0.12 185 / 0.3)",
              }}
            >
              🛡️ Cybersecurity Education
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Master Cybersecurity <br />
              <span style={{ color: "oklch(0.74 0.12 185)" }}>
                with PhishGuard.
              </span>
            </h1>
            <p
              className="text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              style={{ color: "oklch(0.68 0.03 250)" }}
            >
              Learn to recognize phishing attacks, social engineering tactics,
              and credential theft schemes before they compromise you.
              Interactive quizzes reinforce real-world defense skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => scrollTo("learn")}
                className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 hover:shadow-glow flex items-center gap-2 justify-center"
                style={{
                  background: "oklch(0.74 0.12 185)",
                  color: "oklch(0.09 0.025 252)",
                }}
                data-ocid="hero.startlearning.primary_button"
              >
                Start Learning Today <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("quizzes")}
                className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
                style={{
                  background: "oklch(0.16 0.035 252)",
                  color: "oklch(0.85 0.01 250)",
                  border: "1px solid oklch(0.74 0.12 185 / 0.3)",
                }}
                data-ocid="hero.takequiz.secondary_button"
              >
                Take a Quiz
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {[
                { label: "Lessons", value: "50+" },
                { label: "Quiz Questions", value: "200+" },
                { label: "Learners", value: "12K+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-2xl font-bold"
                    style={{ color: "oklch(0.74 0.12 185)" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "oklch(0.55 0.025 250)" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right illustration */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow circle */}
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.74 0.12 185 / 0.12) 0%, transparent 70%)",
                  transform: "scale(1.4)",
                }}
              />
              <div
                className="relative rounded-full flex items-center justify-center animate-float"
                style={{
                  width: 360,
                  height: 360,
                  background:
                    "radial-gradient(circle at 40% 40%, oklch(0.15 0.04 252), oklch(0.10 0.025 252))",
                  border: "1px solid oklch(0.74 0.12 185 / 0.2)",
                  boxShadow:
                    "0 0 80px oklch(0.74 0.12 185 / 0.15), inset 0 0 40px oklch(0.74 0.12 185 / 0.05)",
                }}
              >
                <img
                  src="/assets/generated/phishguard-shield-transparent.dim_480x480.png"
                  alt="PhishGuard Shield"
                  className="w-72 h-72 object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Key Concepts ─────────────────────────────────────────────
function KeyConcepts() {
  const concepts = [
    {
      icon: <Mail className="w-6 h-6" />,
      num: "01",
      title: "Email Phishing",
      desc: "Deceptive emails impersonating trusted entities to steal credentials, financial info, or install malware through fraudulent links and attachments.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      num: "02",
      title: "Social Engineering",
      desc: "Psychological manipulation exploiting human trust, fear, and urgency to bypass security controls and extract sensitive information.",
    },
    {
      icon: <Key className="w-6 h-6" />,
      num: "03",
      title: "Credential Theft",
      desc: "Attacks specifically designed to harvest usernames and passwords via fake login pages, keyloggers, or malicious browser extensions.",
    },
  ];

  return (
    <section id="learn" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Key Phishing{" "}
            <span style={{ color: "oklch(0.74 0.12 185)" }}>Concepts</span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "oklch(0.68 0.03 250)" }}
          >
            Understanding the fundamentals is the first step toward protecting
            yourself and your organization from cyber threats.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="concepts.list"
        >
          {concepts.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 group"
              style={{
                background: "oklch(0.13 0.03 252 / 0.8)",
                border: "1px solid oklch(0.74 0.12 185 / 0.12)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                backdropFilter: "blur(10px)",
              }}
              data-ocid={`concepts.item.${i + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "oklch(0.74 0.12 185 / 0.12)",
                  color: "oklch(0.74 0.12 185)",
                }}
              >
                {c.icon}
              </div>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "oklch(0.74 0.12 185 / 0.6)" }}
              >
                {c.num}
              </span>
              <h3 className="text-lg font-bold mt-1 mb-3">{c.title}</h3>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "oklch(0.68 0.03 250)" }}
              >
                {c.desc}
              </p>
              <button
                type="button"
                className="text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
                style={{ color: "oklch(0.74 0.12 185)" }}
                data-ocid={`concepts.learnmore.button.${i + 1}`}
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Phishing Types ───────────────────────────────────────────
function PhishingTypes() {
  const types = [
    {
      icon: <Fish className="w-10 h-10" />,
      title: "Spear Phishing",
      badge: "Targeted",
      desc: "Highly personalized attacks that use your name, job title, or personal details gathered from social media to craft convincing deceptive messages that appear to come from trusted colleagues or organizations.",
      risk: "Critical",
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "Smishing",
      badge: "SMS-Based",
      desc: "Phishing conducted via SMS text messages, often using fake package delivery alerts, bank warnings, or prize notifications with malicious short links designed to steal your credentials or install malware.",
      risk: "High",
    },
    {
      icon: <Phone className="w-10 h-10" />,
      title: "Vishing",
      badge: "Voice-Based",
      desc: "Voice phishing where criminals call pretending to be banks, government agencies, or tech support. They use social engineering scripts to extract passwords, account numbers, or one-time verification codes.",
      risk: "High",
    },
  ];

  const riskColor: Record<string, string> = {
    Critical: "oklch(0.65 0.22 27)",
    High: "oklch(0.70 0.18 50)",
  };

  return (
    <section id="scams" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Phishing Types{" "}
            <span style={{ color: "oklch(0.74 0.12 185)" }}>Explained</span>
          </h2>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "oklch(0.68 0.03 250)" }}
          >
            Attackers use many channels beyond email. Know their tactics to stay
            protected.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="types.list"
        >
          {types.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: "oklch(0.13 0.03 252 / 0.8)",
                border: "1px solid oklch(0.22 0.03 252)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
              data-ocid={`types.item.${i + 1}`}
            >
              {/* Top illustration area */}
              <div
                className="h-40 flex flex-col items-center justify-center gap-3"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.11 0.04 252), oklch(0.16 0.05 252))",
                  borderBottom: "1px solid oklch(0.22 0.03 252)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "oklch(0.74 0.12 185 / 0.12)",
                    color: "oklch(0.74 0.12 185)",
                  }}
                >
                  {t.icon}
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: `${riskColor[t.risk]}22`,
                    color: riskColor[t.risk],
                    border: `1px solid ${riskColor[t.risk]}44`,
                  }}
                >
                  {t.badge}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{t.title}</h3>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: riskColor[t.risk] }}
                  >
                    {t.risk} Risk
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.68 0.03 250)" }}
                >
                  {t.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quiz Section ─────────────────────────────────────────────
function QuizSection() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<"phishing" | "safe" | null>(null);
  const [finished, setFinished] = useState(false);

  const q = quizQuestions[current];
  const progress = (current / quizQuestions.length) * 100;

  const handleAnswer = (choice: "phishing" | "safe") => {
    if (answered !== null) return;
    setAnswered(choice);
    if (choice === q.answer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (current + 1 >= quizQuestions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setAnswered(null);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setAnswered(null);
    setFinished(false);
  };

  return (
    <section id="quizzes" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Test Your{" "}
            <span style={{ color: "oklch(0.74 0.12 185)" }}>
              Detection Skills
            </span>
          </h2>
          <p style={{ color: "oklch(0.68 0.03 250)" }}>
            Can you spot the phish? Analyze each message and make your call.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {finished ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="rounded-2xl p-10 text-center"
              style={{
                background: "oklch(0.13 0.03 252 / 0.9)",
                border: "1px solid oklch(0.74 0.12 185 / 0.2)",
                boxShadow: "0 0 60px oklch(0.74 0.12 185 / 0.1)",
              }}
              data-ocid="quiz.success_state"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: "oklch(0.74 0.12 185 / 0.15)" }}
              >
                <ShieldCheck
                  className="w-10 h-10"
                  style={{ color: "oklch(0.74 0.12 185)" }}
                />
              </div>
              <h3 className="text-3xl font-bold mb-2">Quiz Complete!</h3>
              <p
                className="text-5xl font-extrabold my-6"
                style={{ color: "oklch(0.74 0.12 185)" }}
              >
                {score}/{quizQuestions.length}
              </p>
              <p className="mb-2" style={{ color: "oklch(0.68 0.03 250)" }}>
                {score === quizQuestions.length
                  ? "Perfect score! You're a cybersecurity pro."
                  : score >= 3
                    ? "Good work! Keep sharpening your skills."
                    : "Keep practicing — every lesson makes you safer."}
              </p>
              <button
                type="button"
                onClick={handleRestart}
                className="mt-8 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                style={{
                  background: "oklch(0.74 0.12 185)",
                  color: "oklch(0.09 0.025 252)",
                }}
                data-ocid="quiz.restart.button"
              >
                Try Again
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              data-ocid="quiz.panel"
            >
              {/* Progress + score bar */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "oklch(0.13 0.03 252 / 0.9)",
                  border: "1px solid oklch(0.22 0.03 252)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.35)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "oklch(0.68 0.03 250)" }}
                  >
                    Question {current + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm"
                      style={{ color: "oklch(0.68 0.03 250)" }}
                    >
                      Score:
                    </span>
                    <span
                      className="font-bold"
                      style={{ color: "oklch(0.74 0.12 185)" }}
                    >
                      {score}/{current + (answered ? 1 : 0)}
                    </span>
                  </div>
                </div>
                <Progress
                  value={progress}
                  className="h-1.5 mb-6"
                  style={{
                    background: "oklch(0.22 0.03 252)",
                  }}
                />

                {/* Email/SMS preview */}
                <div
                  className="rounded-xl p-4 mb-6"
                  style={{
                    background: "oklch(0.10 0.025 252)",
                    border: "1px solid oklch(0.20 0.03 252)",
                  }}
                >
                  <div
                    className="flex items-center gap-2 mb-3 pb-3"
                    style={{ borderBottom: "1px solid oklch(0.18 0.03 252)" }}
                  >
                    <div
                      className="px-2 py-0.5 rounded text-xs font-semibold"
                      style={{
                        background:
                          q.type === "Email"
                            ? "oklch(0.60 0.22 260 / 0.2)"
                            : "oklch(0.74 0.12 185 / 0.15)",
                        color:
                          q.type === "Email"
                            ? "oklch(0.75 0.15 260)"
                            : "oklch(0.74 0.12 185)",
                      }}
                    >
                      {q.type}
                    </div>
                    <AlertTriangle
                      className="w-4 h-4"
                      style={{ color: "oklch(0.70 0.18 50)" }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: "oklch(0.55 0.025 250)" }}
                    >
                      Is this legitimate or a phishing attempt?
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span
                        className="font-semibold min-w-[4rem]"
                        style={{ color: "oklch(0.55 0.025 250)" }}
                      >
                        From:
                      </span>
                      <span
                        className="font-mono"
                        style={{ color: "oklch(0.75 0.05 250)" }}
                      >
                        {q.from}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <span
                        className="font-semibold min-w-[4rem]"
                        style={{ color: "oklch(0.55 0.025 250)" }}
                      >
                        Subject:
                      </span>
                      <span style={{ color: "oklch(0.90 0.01 250)" }}>
                        {q.subject}
                      </span>
                    </div>
                    <div
                      className="mt-3 pt-3"
                      style={{ borderTop: "1px solid oklch(0.18 0.03 252)" }}
                    >
                      <p
                        className="leading-relaxed"
                        style={{ color: "oklch(0.75 0.02 250)" }}
                      >
                        {q.body}
                      </p>
                      <p
                        className="mt-2 text-xs font-mono break-all"
                        style={{ color: "oklch(0.60 0.22 260)" }}
                      >
                        {q.link}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Answer feedback */}
                <AnimatePresence>
                  {answered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-5 overflow-hidden"
                    >
                      <div
                        className="rounded-xl p-4 flex gap-3"
                        style={{
                          background:
                            answered === q.answer
                              ? "oklch(0.74 0.12 185 / 0.1)"
                              : "oklch(0.65 0.22 27 / 0.1)",
                          border:
                            answered === q.answer
                              ? "1px solid oklch(0.74 0.12 185 / 0.3)"
                              : "1px solid oklch(0.65 0.22 27 / 0.3)",
                        }}
                        data-ocid={
                          answered === q.answer
                            ? "quiz.success_state"
                            : "quiz.error_state"
                        }
                      >
                        {answered === q.answer ? (
                          <CheckCircle2
                            className="w-5 h-5 mt-0.5 shrink-0"
                            style={{ color: "oklch(0.74 0.12 185)" }}
                          />
                        ) : (
                          <XCircle
                            className="w-5 h-5 mt-0.5 shrink-0"
                            style={{ color: "oklch(0.65 0.22 27)" }}
                          />
                        )}
                        <div>
                          <p className="font-semibold text-sm mb-1">
                            {answered === q.answer
                              ? "Correct!"
                              : "Not quite — let's learn from this."}
                          </p>
                          <p
                            className="text-xs leading-relaxed"
                            style={{ color: "oklch(0.68 0.03 250)" }}
                          >
                            {q.explanation}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {!answered ? (
                    <>
                      <Button
                        onClick={() => handleAnswer("phishing")}
                        className="flex-1 h-12 rounded-xl text-sm font-semibold hover:scale-[1.02] transition-transform"
                        style={{
                          background: "oklch(0.60 0.22 260)",
                          color: "white",
                          border: "none",
                        }}
                        data-ocid="quiz.flagphishing.button"
                      >
                        🎣 Flag as Phishing
                      </Button>
                      <Button
                        onClick={() => handleAnswer("safe")}
                        className="flex-1 h-12 rounded-xl text-sm font-semibold hover:scale-[1.02] transition-transform"
                        style={{
                          background: "oklch(0.18 0.035 252)",
                          color: "oklch(0.85 0.01 250)",
                          border: "1px solid oklch(0.30 0.03 252)",
                        }}
                        data-ocid="quiz.marksafe.button"
                      >
                        ✅ Mark as Safe
                      </Button>
                    </>
                  ) : (
                    <Button
                      onClick={handleNext}
                      className="flex-1 h-12 rounded-xl text-sm font-semibold hover:scale-[1.02] transition-transform flex items-center gap-2 justify-center"
                      style={{
                        background: "oklch(0.74 0.12 185)",
                        color: "oklch(0.09 0.025 252)",
                        border: "none",
                      }}
                      data-ocid="quiz.next.button"
                    >
                      {current + 1 >= quizQuestions.length
                        ? "See Results"
                        : "Next Question"}{" "}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────
function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: "oklch(0.09 0.025 252)",
        borderTop: "1px solid oklch(0.74 0.12 185 / 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "oklch(0.74 0.12 185 / 0.15)" }}
            >
              <ShieldCheck
                className="w-5 h-5"
                style={{ color: "oklch(0.74 0.12 185)" }}
              />
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: "oklch(0.74 0.12 185)" }}
            >
              PhishGuard
            </span>
          </div>

          {/* Nav links */}
          <nav
            className="flex items-center gap-6 flex-wrap justify-center"
            data-ocid="footer.panel"
          >
            {["Learn", "Quizzes", "Scams", "About"].map((item) => (
              <button
                type="button"
                key={item}
                onClick={() =>
                  document
                    .getElementById(item.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm transition-colors hover:text-teal-500"
                style={{ color: "oklch(0.55 0.025 250)" }}
                data-ocid={`footer.${item.toLowerCase()}.link`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
          style={{
            borderTop: "1px solid oklch(0.18 0.025 252)",
            color: "oklch(0.45 0.02 250)",
          }}
        >
          <p>
            Created by{" "}
            <span style={{ color: "oklch(0.68 0.03 250)" }}>
              Rangat Pankaj Kumar Sharma
            </span>
          </p>
          <p>© {year} PhishGuard. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 transition-colors"
              style={{ color: "oklch(0.55 0.025 250)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <KeyConcepts />
        <PhishingTypes />
        <QuizSection />
      </main>
      <Footer />
    </div>
  );
}
