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
  cardImg: string;
  altCardImg: string;
  description: string;
  tools: string;
  url: string | null;
  slug: string;
};

export type TImageData = {
  id: number;
  mobileImage: boolean;
  title: string;
  src: string;
  blurredDataUrl?: string;
};

export type TImageToggleProps = {
  images: TImageData[];
};

export type TDetailsPageData = {
  tools: string;
  detailsTitle: string;
  visitUrl: string | null;
  detailsSubtitle: string;
  detailsTask: string;
  detailsChallenges: string;
  detailsResults: string;
  detailsComments: string;
  detailsTeam: string;
  repoUrl?: string | null;
  imageSectionTitle?: string | null;
  images: TImageData[];
};

export type TSlugParams = { slug: string };

export type TProjectDetailsParams = {
  params: TSlugParams;
};
