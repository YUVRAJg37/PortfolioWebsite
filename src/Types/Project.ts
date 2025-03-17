export type TProjectType = {
  title: string;
  description: string;
  link: string;
  icon: string;
  tags: string[];
};

export type TProjectsType = {
  title: string;
  projects: TProjectType[];
};
