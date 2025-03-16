type ProjectType = {
  title: string;
  description: string;
  link: string;
  icon: string;
  tags: string[];
};

export type ProjectsType = {
  title: string;
  projects: ProjectType[];
};
