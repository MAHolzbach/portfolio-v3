export type TCardData = {
  projectType: string;
  cardTitle: string;
  cardImg: string;
  altCardImg: string;
  cardDescription: string;
  tools: string;
  cardUrl: string | null;
  slug: string;
};

export type TCardProps = {
  key: string;
  title: string;
  img: string;
  altImg: string;
  description: string;
  tools: string;
  url: string | null;
  slug: string;
};

export type TSlugParams = { slug: string };

export type TProjectDetailsParams = { params: TSlugParams };
