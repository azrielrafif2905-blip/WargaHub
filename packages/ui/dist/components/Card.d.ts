import { HTMLAttributes, ReactNode } from 'react';
export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
    title?: ReactNode;
    description?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}
export declare function Card({ title, description, footer, children, className, style, ...props }: CardProps): import("react").JSX.Element;
