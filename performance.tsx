"use client";

import { motion } from "framer-motion";
import { Zap, Target } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface MetricCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  trend?: string;
  color: string;
}

export default function Performance() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const metrics: MetricCard[] = [
    {
      icon: <Zap className="w-8 h-8" />,
      value: "4-5",
      label: "Submissions / Day",
      description: "Qualified candidate submissions every day",
      trend: "Consistent delivery",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "5-8",
      label: "Offers / Month",
      description: "Offers closed each month",
      trend: "Strong conversion",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="performance"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Performance Metrics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Placement Excellence
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Consistent daily delivery and steady monthly offers across 
            Fortune 500 partnerships.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
              />

              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} p-2.5 mb-4 text-white shadow-lg`}
                >
                  {metric.icon}
                </div>

                <div className="mb-2">
                  <p className="text-4xl font-bold text-white">
                    {inView ? metric.value : "0"}
                  </p>
                </div>

                <p className="font-semibold text-slate-200 mb-2">{metric.label}</p>
                <p className="text-sm text-slate-400 mb-3">{metric.description}</p>

                {metric.trend && (
                  <p className="text-xs font-semibold text-cyan-400 inline-block bg-cyan-500/10 px-2 py-1 rounded">
                    {metric.trend}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            {
              title: "Quality > Quantity",
              description: "Strategic selection methodology focusing on high-value placements",
              icon: "🎯",
            },
            {
              title: "Consistent Delivery",
              description: "Steady daily submissions that keep hiring pipelines moving",
              icon: "⚡",
            },
            {
              title: "Global Operations",
              description: "6 regions managed with multi-timezone expertise and coordination",
              icon: "🌍",
            },
          ].map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300"
            >
              <p className="text-4xl mb-3">{achievement.icon}</p>
              <h4 className="text-lg font-bold text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-slate-400 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
