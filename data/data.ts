import {
    Palette,
    Monitor,
    PencilRuler,
    Brush,
    BarChart3,
    Megaphone,
    LucideIcon
} from "lucide-react";


export type Service = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export const services: Service[] = [
    {
        title: "Video Editing",
        description:
            "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: Palette,
    },
    {
        title: "Video Shooting",
        description:
            "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: Palette,
    },
    {
        title: "Web Development",
        description:
            "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: Monitor,
    },
    {
        title: "App Development",
        description:
            "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        icon: Brush,
    },
];


export type ResumeItem = {
  id: number;
  startYear: number;
  endYear: number;
  title: string;
  subtitle: string;
  description: string;
};

export const navItems = [
  'Home',
  'About Me',
  'What I Do',
  'Resume',
  'Portfolio',
  'Testimonial',
  'Contact',
];

export const educationData: ResumeItem[] = [
  {
    id: 1,
    startYear: 2000,
    endYear: 2004,
    title: 'Computer Science',
    subtitle: 'International University',
    description:
      'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
  },
  {
    id: 2,
    startYear: 2005,
    endYear: 2008,
    title: 'Bachelor Degree',
    subtitle: 'University of California',
    description:
      'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
  },
  {
    id: 3,
    startYear: 2009,
    endYear: 2010,
    title: 'Master Degree',
    subtitle: 'Harvard University',
    description:
      'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
  },
];

export const experienceData: ResumeItem[] = [
  {
    id: 1,
    startYear: 2012,
    endYear: 2013,
    title: 'Jr. UI UX Designer',
    subtitle: 'Themeforest',
    description:
      'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
  },
  {
    id: 2,
    startYear: 2014,
    endYear: 2016,
    title: 'Jr. Product Designer',
    subtitle: 'Dribbble',
    description:
      'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
  },
  {
    id: 3,
    startYear: 2017,
    endYear: 2019,
    title: 'Product Designer',
    subtitle: 'Adobe',
    description:
      'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
  },
];
