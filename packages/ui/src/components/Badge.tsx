import { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'success' | 'warning' | 'danger';
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, React.CSSProperties> = {
  neutral: {
    backgroundColor: '#e2e8f0',
    color: '#334155',
  },
  success: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  warning: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
  },
  danger: {
    backgroundColor: '#fee2e2',
    color: '#b91c1c',
  },
};

export function Badge({ children, className, variant = 'neutral', style, ...props }: BadgeProps) {
  const mergedClassName = ['wgh-badge', className].filter(Boolean).join(' ');

  return (
    <span
      className={mergedClassName}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        fontSize: '0.8rem',
        fontWeight: 700,
        padding: '0.3rem 0.65rem',
        ...variantStyles[variant],
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
