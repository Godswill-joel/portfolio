import {
    Palette,
    Monitor,
    Brush,
    LucideIcon
} from "lucide-react";
import {
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import { FaGithub, FaXTwitter, FaFacebookF } from "react-icons/fa6";


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

export type Skill = {
  name: string;
  value: number;
};

export const skillsLeft: Skill[] = [
  { name: "Web Design", value: 65 },
  { name: "HTML/CSS", value: 95 },
  { name: "JavaScript", value: 80 },
  {name: "Reactive Native", value: 65}
];

export const skillsRight: Skill[] = [
  { name: "React JS", value: 70 },
  { name: "Next Js", value: 60 },
  { name: "Tailwind Css", value: 99 },
  {name: "Node Js", value: 66}
];

export type ContactInfo = {
  id: string;
  icon: any;
  value: string;
};

export type SocialLink = {
  id: string;
  icon: any;
};

export type Field = {
  id: string;
  type: "input" | "textarea";
  placeholder: string;
};

export const contactInfo: ContactInfo[] = [
  { id: "phone", icon: Phone, value: "+234 904 937 5954 " },
  { id: "Whatsapp", icon: Phone, value: "+234 706 690 3185" },
  { id: "mail", icon: Mail, value: "asuquogodswill0@gmail.com" },
];

export const socials: SocialLink[] = [
  { id: "twitter", icon: FaXTwitter },
  { id: "facebook", icon: FaFacebookF },
  { id: "github", icon: FaGithub },
];

export const fields: Field[] = [
  { id: "name", type: "input", placeholder: "Name" },
  { id: "email", type: "input", placeholder: "Email" },
  {
    id: "message",
    type: "textarea",
    placeholder: "Tell us more about your needs.........",
  },
];

