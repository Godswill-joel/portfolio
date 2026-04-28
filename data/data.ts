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
