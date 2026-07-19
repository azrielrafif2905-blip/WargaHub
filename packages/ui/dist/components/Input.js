import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
export const Input = forwardRef(function Input({ label, hint, error, className, id, style, type = 'text', required, ...props }, ref) {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const descriptionId = [hint ? `${inputId}-hint` : undefined, error ? `${inputId}-error` : undefined]
        .filter(Boolean)
        .join(' ');
    return (_jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '0.4rem' }, children: [label ? (_jsxs("label", { htmlFor: inputId, style: { fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }, children: [label, required ? _jsx("span", { "aria-hidden": "true", children: " *" }) : null] })) : null, _jsx("input", { ref: ref, id: inputId, type: type, className: ['wgh-input', className].filter(Boolean).join(' '), style: {
                    border: error ? '1px solid #dc2626' : '1px solid #cbd5e1',
                    borderRadius: 10,
                    padding: '0.7rem 0.85rem',
                    fontSize: '0.95rem',
                    outline: 'none',
                    color: '#0f172a',
                    backgroundColor: '#ffffff',
                    ...style,
                }, "aria-invalid": Boolean(error), "aria-describedby": descriptionId || undefined, required: required, ...props }), hint && !error ? (_jsx("p", { id: `${inputId}-hint`, style: { margin: 0, fontSize: '0.85rem', color: '#64748b' }, children: hint })) : null, error ? (_jsx("p", { id: `${inputId}-error`, style: { margin: 0, fontSize: '0.85rem', color: '#dc2626' }, children: error })) : null] }));
});
Input.displayName = 'Input';
