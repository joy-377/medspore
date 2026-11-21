export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const today=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
export const dateOffset=(offset=0)=>{const d=new Date();d.setDate(d.getDate()+offset);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`};
export const clamp=(n,lo,hi)=>Math.max(lo,Math.min(hi,n));
export const pct=(a,b)=>b?Math.round(100*a/b):0;
export const safeInt=(n,fallback=0)=>Number.isFinite(Number(n))?Math.trunc(Number(n)):fallback;
export const fmtTime=seconds=>{seconds=Math.max(0,Math.floor(seconds));return `${String(Math.floor(seconds/3600)).padStart(2,'0')}:${String(Math.floor(seconds%3600/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`};
export const hash=s=>{let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
export const shuffle=(arr,seed=Date.now())=>{const a=[...arr];let x=seed>>>0;for(let i=a.length-1;i>0;i--){x^=x<<13;x^=x>>>17;x^=x<<5;const j=(x>>>0)%(i+1);[a[i],a[j]]=[a[j],a[i]]}return a};
export const debounced=(fn,ms=250)=>{let t;return(...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),ms)}};
export function textPreview(s,max=105){s=String(s||'').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();return s.length>max?s.slice(0,max-1)+'…':s}
export function protectUrl(s){try{const u=new URL(s,location.origin);return u.origin===location.origin?u.pathname+u.search:'#'}catch{return '#'}}
