export type NavItem = {
  title: string;
  href: string;
  dropdown: boolean;
};

export type MainNavItem = NavItem;

export type HeadingOrParagraphText = {
  text: string;
  className?: string;
};

export type CustomCarouselType = {
  length: number;
  dots: boolean;
  carouselNavigation: boolean;
  className?: string;
};

type SuggestedTour = {
  title: string;
  description: string;
  pageTitle: string;
  banner: string;
  bannerAlt: string;
  slug: string;
};

export type breadcrumbData = {
  name: string;
  href: string;
};
