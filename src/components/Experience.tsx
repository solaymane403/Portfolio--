'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Wrench, CheckCircle2, TrendingUp } from 'lucide-react';
import CounterAnimation from './CounterAnimation';

const experiences = [
  {
    icon: Briefcase,
    title: 'Freelance Web Developer',
    organization: 'Self-Employed',
    period: '2023 - Present',
    description: 'Building custom websites and web applications for clients. Specialized in React, Next.js, and modern front-end development.',
    achievements: [
      'Delivered 10+ successful projects',
      'Maintained 98% client satisfaction rate',
      'Built responsive, SEO-optimized websites'
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Wrench,
    title: 'Technical Support Specialist',
    organization: 'Tech Solutions Co.',
    period: '2022 - 2023',
    description: 'Provided technical support for hardware and software issues. Specialized in PC maintenance, troubleshooting, and system optimization.',
    achievements: [
      'Resolved 200+ technical issues',
      'Reduced average resolution time by 30%',
      'Trained new team members on best practices'
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'Web Development Bootcamp',
    organization: 'Online Learning Platform',
    period: '2022',
    description: 'Intensive full-stack web development program covering modern JavaScript frameworks, backend technologies, and deployment strategies.',
    achievements: [
      'Completed 500+ hours of coursework',
      'Built 15+ portfolio projects',
      'Graduated with honors'
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Award,
    title: 'Certifications & Courses',
    organization: 'Various Platforms',
    period: '2021 - Present',
    description: 'Continuous learning through online courses and certifications in web development, cloud technologies, and modern frameworks.',
    achievements: [
      'React Developer Certification',
      'Node.js Backend Specialization',
      'Git & GitHub Mastery Course'
    ],
    color: 'from-green-500 to-teal-500',
  },
];

export default function Experience() {
  const stats = [
    { number: 2, suffix: '+', label: 'Years Experience' },
    { number: 15, suffix: '+', label: 'Projects Completed' },
    { number: 10, suffix: '+', label: 'Happy Clients' },
    { number: 98, suffix: '%', label: 'Success Rate' },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4"
            >
              <TrendingUp className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Career Journey
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Experience & Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional journey and continuous learning path in tech
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center group cursor-pointer"
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    <CounterAnimation end={stat.number} suffix={stat.suffix} />
                  </span>
                </motion.div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
                <motion.div
                  className="mt-3 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Line */}
            {/* <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-600 via-blue-500 to-purple-600 md:-translate-x-0.5" /> */}

            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-16 md:mb-20`}
                >
                  {/* Timeline Dot with Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ type: 'spring', delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${exp.color} rounded-2xl flex items-center justify-center shadow-2xl`}
                    >
                      <IconComponent className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`ml-32 md:ml-0 ${isEven ? 'md:mr-1/2 md:pr-16' : 'md:ml-1/2 md:pl-16'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl relative overflow-hidden group"
                    >
                      {/* Animated gradient overlay */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                      />

                      {/* Period Badge */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${exp.color} text-white rounded-full text-sm font-bold mb-4 shadow-lg`}
                      >
                        {exp.period}
                      </motion.div>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {exp.title}
                      </h3>
                      
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold mb-4">
                        {exp.organization}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements List */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 group/item"
                          >
                            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-500 group-hover/item:scale-125 transition-transform" />
                            <span className="text-sm text-gray-600 dark:text-gray-400 group-hover/item:text-gray-900 dark:group-hover/item:text-gray-200 transition-colors">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}