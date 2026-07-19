import { forwardRef, InputHTMLAttributes, useId } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  hint?: string;
  error?: string;
  type?: 'text' | 'email' | 'password' | 'search' | 'url';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, className, id, style, type = 'text', required, ...props },
  ref,
) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = [hint ? `${inputId}-hint` : undefined, error ? `${inputId}-error` : undefined]
    .filter(Boolean)
    .join(' ');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      {label ? (
        <label htmlFor={inputId} style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
          {label}
          {required ? <span aria-hidden="true"> *</span> : null}
        </label>
      ) : null}
      <input
        ref={ref}
        id={inputId}
        type={type}
        className={['wgh-input', className].filter(Boolean).join(' ')}
        style={{
          border: error ? '1px solid #dc2626' : '1px solid #cbd5e1',
          borderRadius: 10,
          padding: '0.7rem 0.85rem',
          fontSize: '0.95rem',
          outline: 'none',
          color: '#0f172a',
          backgroundColor: '#ffffff',
          ...style,
        }}
        aria-invalid={Boolean(error)}
        aria-describedby={descriptionId || undefined}
        required={required}
        {...props}
      />
      {hint && !error ? (
        <p id={`${inputId}-hint`} style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${inputId}-error`} style={{ margin: 0, fontSize: '0.85rem', color: '#dc2626' }}>
          {error}
        </p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';
