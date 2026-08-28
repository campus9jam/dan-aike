import type { Config } from 'tailwindcss'
export default { content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#111827', paper:'#F7F8FA', brand:'#111827', accent:'#F59E0B', success:'#16A34A' }, boxShadow:{ soft:'0 12px 35px rgba(15,23,42,.08)' }, borderRadius:{'2xl':'1.25rem'} } }, plugins:[] } satisfies Config
