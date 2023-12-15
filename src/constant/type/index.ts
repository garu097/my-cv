export type ITimeLine = {
  title?: string;
  subTitle?: string;
  contentStyle?: any;
  contentArrowStyle?: any;
  encloseURL?: string;
  iconURL?: string;
  icon?: string;
  date: string;
  paragraph: string;
};

export type IInfoAuthor = {
  [key: string]: {
    url?: string;
    icon: string;
    name?: string;
  };
};

export type IFavourite = {
  [key: string]: {
    icon: string;
    description: string;
  };
};

export type IValidField = {
  [key: string]: boolean;
};
