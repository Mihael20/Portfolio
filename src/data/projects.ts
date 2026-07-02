import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "coffee-shop-android",
    title: "Coffee Shop App",
    description: "A Coffee Shop mobile application developed using Android Studio.",
    icon: "/skills/android.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mihael20/Coffee-Shop",
    tags: ["Android Studio", "Java", "Mobile"],
  },
  {
    id: "fullstack-spring-java",
    title: "Fullstack Spring Java",
    description: "A fullstack web application developed using Spring Boot and Java.",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mihael20/Proekt-Fullstack-Spring-Java",
    tags: ["Java", "Spring Boot", "Fullstack"],
  },
  {
    id: "snaplogic",
    title: "SnapLogic",
    description: "A SnapLogic integration project.",
    icon: "/skills/nextjs.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/Mihael20/SnapLogic",
    tags: ["SnapLogic", "Integration"],
  },
  {
    id: "devops-intern",
    title: "DevOps Intern Project",
    description: "A DevOps internship project.",
    icon: "/skills/docker.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/nikolanino/intern_mihael",
    tags: ["DevOps", "CI/CD"],
  },
];

export default projects;