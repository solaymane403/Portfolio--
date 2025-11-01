'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills, skillCategories } from '@/data/skills';
import * as Icons from 'lucide-react';
import { Sparkles, TrendingUp, Award, Zap } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Get skills for active category
  const displayedSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  // Group skills by category for "all" view
  const groupedSkills = activeCategory === 'all'
    ? skillCategories.map(cat => ({
        category: cat,
        skills: skills.filter(s => s.category === cat.key)
      }))
    : null;

  // Calculate stats
  const totalSkills = skills.length;
  const advancedSkills = skills.filter(s => s.level >= 80).length;
  const averageLevel = Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length);

  return (
    <section id="skills" className="py-20 px-4 relative">
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
          <div className="text-center mb-12">
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
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              Tools and technologies I use to bring ideas to life
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4 border border-purple-200 dark:border-purple-800/30"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">{totalSkills}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Total Skills</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800/30"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{advancedSkills}</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Advanced (80%+)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 rounded-xl p-4 border border-pink-200 dark:border-pink-800/30"
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span className="text-2xl font-bold text-pink-600 dark:text-pink-400">{averageLevel}%</span>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Avg Proficiency</p>
              </motion.div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md'
              }`}
            >
              <span className="relative z-10">All Skills</span>
              {activeCategory === 'all' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </button>
            {skillCategories.map((category) => {
              const categoryCount = skills.filter(s => s.category === category.key).length;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 relative overflow-hidden group ${
                    activeCategory === category.key
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105 hover:shadow-md'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {category.name}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === category.key
                        ? 'bg-white/20'
                        : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                    }`}>
                      {categoryCount}
                    </span>
                  </span>
                  {activeCategory === category.key && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            {activeCategory === 'all' ? (
              // Compact grouped view for "All Skills"
              <motion.div
                key="all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {groupedSkills?.map((group, groupIndex) => {
                  const IconComponent = (Icons as any)[group.skills[0]?.icon] || Icons.Code;
                  
                  // Gradient variations for each category
                  const gradients = [
                    'from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5',
                    'from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5',
                    'from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5',
                    'from-orange-500/10 to-red-500/10 dark:from-orange-500/5 dark:to-red-500/5',
                    'from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5',
                    'from-pink-500/10 to-rose-500/10 dark:from-pink-500/5 dark:to-rose-500/5',
                  ];
                  
                  return (
                    <motion.div
                      key={group.category.key}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: groupIndex * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`bg-gradient-to-br ${gradients[groupIndex % gradients.length]} backdrop-blur-sm rounded-2xl shadow-lg p-6 border-2 border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300`}
                    >
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-300 dark:border-gray-600">
                        <motion.div 
                          className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-xl shadow-md"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                            {group.category.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                            {group.skills.length} {group.skills.length === 1 ? 'skill' : 'skills'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill) => {
                          // Determine skill level badge and color
                          const levelBadge = skill.level >= 90 ? '🔥' : skill.level >= 80 ? '⭐' : skill.level >= 70 ? '💎' : '';
                          const levelColor = skill.level >= 90 
                            ? 'bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800' 
                            : skill.level >= 80 
                              ? 'bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700';
                          
                          return (
                            <motion.span
                              key={skill.name}
                              whileHover={{ scale: 1.08, y: -2 }}
                              className={`px-4 py-2 ${levelColor} rounded-xl text-sm font-semibold border-2 hover:shadow-lg transition-all cursor-default inline-flex items-center gap-1.5`}
                              title={`${skill.level}% proficiency`}
                            >
                              {levelBadge && <span className="text-base">{levelBadge}</span>}
                              {skill.name}
                            </motion.span>
                          );
                        })}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              // Detailed card view for specific category
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {displayedSkills.map((skill, index) => {
                  const IconComponent = (Icons as any)[skill.icon] || Icons.Code;
                  
                  // Get skill level color
                  const levelColor = skill.level >= 90 
                    ? 'from-purple-600 to-pink-600' 
                    : skill.level >= 80 
                      ? 'from-blue-600 to-cyan-600'
                      : skill.level >= 70
                        ? 'from-green-600 to-emerald-600'
                        : 'from-gray-600 to-gray-500';
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.05,
                        type: 'spring',
                        stiffness: 100
                      }}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -8,
                        transition: { type: 'spring', stiffness: 400 }
                      }}
                      className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 cursor-pointer border-2 border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-600 overflow-hidden"
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/5 group-hover:to-blue-500/5 rounded-2xl transition-all duration-300" />
                      
                      {/* Animated glow effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-center gap-3 mb-4">
                          <motion.div 
                            className="p-3 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/40 dark:to-blue-900/40 rounded-xl shadow-md"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <IconComponent className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </motion.div>
                          <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors flex-1">
                            {skill.name}
                          </h4>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${levelColor} rounded-full relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            Proficiency Level
                          </span>
                          <span className={`text-sm font-bold bg-gradient-to-r ${levelColor} bg-clip-text text-transparent`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Animated corner accent */}
                      <motion.div 
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Additional Skills Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
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