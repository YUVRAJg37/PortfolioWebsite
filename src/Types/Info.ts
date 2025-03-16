type TLink = {
  name: string;
  url: string;
  icon: string;
  route: boolean;
};

export type TInfo = {
  bio: string[];
  links: TLink[];
};
