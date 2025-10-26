export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
}

export const skills: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, icon: "Code2", category: "frontend" },
  { name: "CSS3", level: 90, icon: "Palette", category: "frontend" },
  { name: "JavaScript", level: 88, icon: "FileCode", category: "frontend" },
  { name: "TypeScript", level: 82, icon: "FileCode2", category: "frontend" },
  { name: "React", level: 85, icon: "Atom", category: "frontend" },
  { name: "Next.js", level: 80, icon: "Zap", category: "frontend" },
  { name: "Tailwind CSS", level: 90, icon: "Wind", category: "frontend" },
  
  // Backend
  { name: "Node.js", level: 78, icon: "Server", category: "backend" },
  { name: "Express", level: 75, icon: "Database", category: "backend" },
  { name: "MongoDB", level: 72, icon: "Database", category: "backend" },
  { name: "REST API", level: 80, icon: "Link", category: "backend" },
  
  // Tools & Other
  { name: "Git", level: 85, icon: "GitBranch", category: "tools" },
  { name: "GitHub", level: 88, icon: "Github", category: "tools" },
  { name: "Linux", level: 70, icon: "Terminal", category: "tools" },
  { name: "VS Code", level: 92, icon: "Code", category: "tools" },
  { name: "Figma", level: 65, icon: "Figma", category: "tools" },
  
  // AI & Python
  { name: "Python", level: 70, icon: "Code2", category: "ai" },
  { name: "AI Basics", level: 60, icon: "Bot", category: "ai" },
  { name: "Flask", level: 65, icon: "Flame", category: "ai" },
];

export const skillCategories = [
  { name: "Frontend Development", key: "frontend" as const },
  { name: "Backend Development", key: "backend" as const },
  { name: "Tools & Workflow", key: "tools" as const },
  { name: "AI & Python", key: "ai" as const },
];