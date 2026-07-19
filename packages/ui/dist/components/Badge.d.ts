import { HTMLAttributes } from 'react';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'neutral' | 'success' | 'warning' | 'danger';
}
export declare function Badge({ children, className, variant, style, ...props }: BadgeProps): import("react").JSX.Element;
