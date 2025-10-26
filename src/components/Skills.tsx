'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '@/data/skills';
import * as Icons from 'lucide-react';
import { Sparkles } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative ">
      {/* Subtle background effects */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Header with badge */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4"
            >
              <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                Technical Arsenal
              </span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>

          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => {
              const categorySkills = skills.filter(s => s.category === category.key);
              
              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div 
                      className="w-1 h-8 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"
                      animate={{ scaleY: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {category.name}
                  </motion.h3>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {categorySkills.map((skill, index) => {
                      // Dynamically get icon component
                      const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: index * 0.05,
                            type: 'spring',
                            stiffness: 100
                          }}
                          viewport={{ once: true }}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -8,
                            transition: { type: 'spring', stiffness: 400 }
                          }}
                          className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-all p-5 cursor-pointer border border-gray-100 dark:border-gray-700"
                        >
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-xl transition-all duration-300" />
                          
                          <div className="relative flex items-center gap-3">
                            <motion.div 
                              className="p-2.5 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <IconComponent className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-base text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
                                {skill.name}
                              </h4>
                            </div>
                          </div>

                          {/* Animated corner accent */}
                          <motion.div 
                            className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Skills Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-20 grid md:grid-cols-3 gap-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl shadow-lg p-8 text-center cursor-pointer border border-purple-100 dark:border-purple-800/30"
            >
              <motion.div 
                className="text-5xl mb-4"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                🚀
              </motion.div>
              <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Fast Learner
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Quick to adapt and master new technologies
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl shadow-lg p-8 text-center cursor-pointer border border-blue-100 dark:border-blue-800/30"
            >
              <motion.div 
                className="text-5xl mb-4"
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                💡
              </motion.div>
              <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Problem Solver
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Creative solutions to complex challenges
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-pink-900/20 rounded-2xl shadow-lg p-8 text-center cursor-pointer border border-pink-100 dark:border-pink-800/30"
            >
              <motion.div 
                className="text-5xl mb-4"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                🤝
              </motion.div>
              <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                Team Player
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Excellent communication and collaboration
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}