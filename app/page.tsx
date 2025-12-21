"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  MessageSquare,
  Award,
  Shield,
  Video,
  Filter,
  TrendingUp,
  Star,
  Mail,
  Send,
  ArrowRight,
  CheckCircle,
  BarChart3,
  Heart,
  MessageCircle,
  Upload,
  Search,
  Eye,
} from "lucide-react";

type Mode = "athlete" | "coach" | "mentor" | "parent";

export default function AboutPage() {
  const [selectedMode, setSelectedMode] = useState<Mode>("athlete");

  const heroRef = useRef(null);

  const modes = [
    {
      id: "athlete" as Mode,
      title: "Athlete",
      icon: Trophy,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "coach" as Mode,
      title: "Coach/Scout",
      icon: Search,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "mentor" as Mode,
      title: "Mentor",
      icon: Star,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "parent" as Mode,
      title: "Parent/Admin",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
  ];

  const modeFeatures = {
    athlete: {
      title: "Build Your Volleyball Identity",
      description:
        "Create a comprehensive profile, upload highlights, track your progress, and get noticed by coaches and scouts.",
      features: [
        "Profile creation with stats and metrics",
        "Highlight video uploads",
        "Points system with rewards up to $250",
        "Community engagement and networking",
        "Progress tracking and analytics",
      ],
      visual: "athlete-dashboard",
    },
    coach: {
      title: "Discover & Connect with Talent",
      description:
        "Advanced filtering tools help you find the perfect athletes. Filter by city, position, age, and more.",
      features: [
        "Advanced filtering (city, position, age)",
        "Athlete discovery dashboard",
        "Direct messaging system",
        "Analytics and progress tracking",
        "Efficient scouting workflow",
      ],
      visual: "coach-dashboard",
    },
    mentor: {
      title: "Guide the Next Generation",
      description:
        "Share your expertise, provide feedback, and stay connected to the volleyball community.",
      features: [
        "Share insights and resources",
        "View and comment on highlights",
        "Provide feedback to athletes",
        "Community engagement",
        "Stay connected to the sport",
      ],
      visual: "mentor-interface",
    },
    parent: {
      title: "Stay Informed & Ensure Safety",
      description:
        "Monitor your athlete's activity, ensure OVA-compliant communication, and support their development.",
      features: [
        "Activity monitoring dashboard",
        "Transparent communication oversight",
        "Progress tracking",
        "Safety and compliance features",
        "Support athlete development",
      ],
      visual: "parent-dashboard",
    },
  };

  const valueProps = [
    {
      icon: Trophy,
      title: "Build Your Volleyball Identity",
      description: "Showcase your skills, track progress, and build your reputation in the volleyball community.",
    },
    {
      icon: Users,
      title: "Connect with Coaches & Scouts",
      description: "Discover opportunities and get noticed by coaches and scouts looking for talent like you.",
    },
    {
      icon: Award,
      title: "Earn Rewards",
      description: "Participate in challenges, engage with the community, and earn points with prizes up to $250.",
    },
    {
      icon: Shield,
      title: "Safe & Transparent",
      description: "OVA-compliant communication ensures a safe environment for all athletes and families.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Sign Up & Choose Your Role",
      description: "Create your account and select whether you're an Athlete, Coach, Mentor, or Parent.",
    },
    {
      number: "02",
      title: "Complete Your Profile",
      description: "Add your information, stats, photos, and highlights to build your volleyball identity.",
    },
    {
      number: "03",
      title: "Start Connecting & Engaging",
      description: "Explore the community, connect with others, and participate in challenges and discussions.",
    },
    {
      number: "04",
      title: "Track Progress & Earn Rewards",
      description: "Monitor your growth, earn points through engagement, and compete for prizes.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-slate-900 to-slate-800"
      >
        <div className="absolute inset-0 bg-grid-slate-100/[0.03] bg-[size:20px_20px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-32 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-lg md:text-xl text-primary font-semibold mb-4"
            >
              Join 60+ athletes, coaches, and mentors
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Connect, Compete, and Grow in{" "}
              <span className="text-primary">Volleyball</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 text-balance"
            >
              LockerLink is the premier platform connecting athletes, coaches,
              scouts, mentors, and parents in the volleyball community. Build
              your identity, discover opportunities, and earn rewards.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="https://lockerlink.vercel.app"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow min-h-[44px] flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800 text-primary border-2 border-primary rounded-2xl font-semibold text-lg hover:bg-slate-700 transition-colors min-h-[44px] flex items-center justify-center"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why LockerLink Section */}
      <section className="py-20 md:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Why LockerLink?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to succeed in volleyball, all in one platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop, index) => (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-700"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <prop.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {prop.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {prop.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode Breakdown Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Choose Your Experience
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              LockerLink adapts to your role in the volleyball community.
            </p>
          </motion.div>

          {/* Mode Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {modes.map((mode) => {
              const Icon = mode.icon;
              const isSelected = selectedMode === mode.id;
              return (
                <motion.button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-6 rounded-2xl border-2 transition-all ${
                    isSelected
                      ? `bg-gradient-to-br ${mode.color} border-transparent text-white shadow-xl`
                      : "bg-slate-800 border-slate-600 text-slate-200 hover:border-primary/50"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 mx-auto mb-3 ${
                      isSelected ? "text-white" : "text-slate-300"
                    }`}
                  />
                  <div className="font-semibold text-sm md:text-base">
                    {mode.title}
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Mode Content */}
          <motion.div
            key={selectedMode}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {modeFeatures[selectedMode].title}
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {modeFeatures[selectedMode].description}
              </p>
              <ul className="space-y-4">
                {modeFeatures[selectedMode].features.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 md:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Get started in four simple steps.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-700 h-full">
                  <div className="text-6xl font-bold text-primary/30 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to succeed in volleyball.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "Highlight Uploads",
                description: "Upload and showcase your best plays with video previews and thumbnails.",
              },
              {
                icon: TrendingUp,
                title: "Points System",
                description: "Earn points through engagement and compete on the leaderboard for prizes.",
              },
              {
                icon: MessageSquare,
                title: "Direct Messaging",
                description: "Connect with coaches, scouts, and other athletes through secure messaging.",
              },
              {
                icon: Filter,
                title: "Advanced Filtering",
                description: "Coaches can filter athletes by city, position, age, and more.",
              },
              {
                icon: Users,
                title: "Social Feed",
                description: "Stay connected with the community through posts, likes, and comments.",
              },
              {
                icon: BarChart3,
                title: "Progress Tracking",
                description: "Monitor your growth with detailed analytics and statistics.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-slate-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all border border-slate-700"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Have questions? We&apos;d love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700"
          >
            <ContactForm />

            <div className="mt-12 pt-12 border-t border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:lockerlinkofficial@gmail.com"
                    className="text-primary hover:underline"
                  >
                    lockerlinkofficial@gmail.com
                  </a>
                </div>
                <div>
                  <MessageSquare className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">
                    Discord
                  </div>
                  <a
                    href="https://discord.gg/lockerlink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Join Community
                  </a>
                </div>
                <div>
                  <Send className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold text-white mb-1">
                    Social
                  </div>
                  <div className="text-slate-300 text-sm">Follow us</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Dark Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        {/* Secondary gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-blue-800/40 to-slate-700/50"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Join 60+ athletes, coaches, and mentors building the
              future of volleyball.
            </p>
            <motion.a
              href="https://lockerlink.vercel.app"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-white text-primary rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 transition-all min-h-[44px] flex items-center justify-center gap-2 mx-auto backdrop-blur-sm"
            >
              Sign Up Free <ArrowRight className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-white mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-500"
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-white mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-500"
          placeholder="your.email@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-white mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none placeholder:text-slate-500"
          placeholder="Tell us how we can help..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting || submitted}
        whileHover={{ scale: submitted ? 1 : 1.02 }}
        whileTap={{ scale: submitted ? 1 : 0.98 }}
        className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] flex items-center justify-center gap-2"
      >
        {submitted ? (
          <>
            <CheckCircle className="w-5 h-5" /> Message Sent!
          </>
        ) : isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send className="w-5 h-5" />
          </>
        )}
      </motion.button>
    </form>
  );
}

