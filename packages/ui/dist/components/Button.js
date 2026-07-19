import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
const baseStyles = {
    border: 'none',
    borderRadius: 999,
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.95rem',
    fontWeight: 600,
    padding: '0.7rem 1rem',
    transition: 'background-color 160ms ease, color 160ms ease, box-shadow 160ms ease',
};
const variantStyles = {
    primary: {
        backgroundColor: '#2563eb',
        color: '#ffffff',
        boxShadow: '0 8px 20px rgba(37, 99, 235, 0.18)',
    },
    secondary: {
        backgroundColor: '#eff6ff',
        color: '#1d4ed8',
    },
    ghost: {
        backgroundColor: 'transparent',
        color: '#334155',
        padding: '0.7rem 0.8rem',
    },
};
export const Button = forwardRef(function Button({ children, className, variant = 'primary', fullWidth = false, type = 'button', style, disabled, ...props }, ref) {
    const mergedClassName = ['wgh-button', className].filter(Boolean).join(' ');
    return (_jsx("button", { ref: ref, type: type, className: mergedClassName, style: {
            ...baseStyles,
            ...variantStyles[variant],
            ...(fullWidth ? { width: '100%' } : {}),
            ...(disabled ? { opacity: 0.65, cursor: 'not-allowed' } : {}),
            ...style,
        }, disabled: disabled, ...props, children: children }));
});
Button.displayName = 'Button';
