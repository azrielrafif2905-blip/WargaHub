import { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
}

export function Card({ title, description, footer, children, className, style, ...props }: CardProps) {
  const mergedClassName = ['wgh-card', className].filter(Boolean).join(' ');

  return (
    <section className={mergedClassName} style={{ border: '1px solid #e2e8f0', borderRadius: 16, backgroundColor: '#ffffff', boxShadow: '0 10px 24px rgba(15, 23, 42, 0.04)', padding: '1.25rem', ...style }} {...props}>
      {title ? <h3 style={{ margin: '0 0 0.4rem', fontSize: '1.05rem', color: '#0f172a' }}>{title}</h3> : null}
      {description ? <p style={{ margin: '0 0 1rem', color: '#475569' }}>{description}</p> : null}
      {children ? <div>{children}</div> : null}
      {footer ? <div style={{ marginTop: '1rem', color: '#64748b' }}>{footer}</div> : null}
    </section>
  );
}
