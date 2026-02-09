export interface LinksGroupProps {
    label: string;
    link?: string;
    icon?: React.ElementType;
    links?: { label: string; link: string }[];
    items?: LinksGroupProps[];
}