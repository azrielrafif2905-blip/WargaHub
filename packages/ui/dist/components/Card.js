import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Card({ title, description, footer, children, className, style, ...props }) {
    const mergedClassName = ['wgh-card', className].filter(Boolean).join(' ');
    return (_jsxs("section", { className: mergedClassName, style: { border: '1px solid #e2e8f0', borderRadius: 16, backgroundColor: '#ffffff', boxShadow: '0 10px 24px rgba(15, 23, 42, 0.04)', padding: '1.25rem', ...style }, ...props, children: [title ? _jsx("h3", { style: { margin: '0 0 0.4rem', fontSize: '1.05rem', color: '#0f172a' }, children: title }) : null, description ? _jsx("p", { style: { margin: '0 0 1rem', color: '#475569' }, children: description }) : null, children ? _jsx("div", { children: children }) : null, footer ? _jsx("div", { style: { marginTop: '1rem', color: '#64748b' }, children: footer }) : null] }));
}
