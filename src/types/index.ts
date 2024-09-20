export type SkillCategory = "Programming Languages" | "Frontend Technologies" | "Backend Technologies" | "Tools/Frameworks";
export type SkillsData = {
  [category: string]: Skill[]; 
};


  type Skill = {
    name: string;
    icon: string;
  };
  
  export interface Project {
    title: string;
    description: string;
    demoLink: string;
    codeLink: string;
    technology:string[];
    imageUrl?:string;
  }
  