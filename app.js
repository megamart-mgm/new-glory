const sb=supabase.createClient('https://mtempwgbwaejvuoaplia.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZW1wd2did2FlanZ1b2FwbGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzODgxNTgsImV4cCI6MjEwODk2NDE1OH0.OJmdVmsnuBXpaDAY1UuDvnWhNwzUGZLB-P2AZ2ixZnQ');
const WA='2348039220007';
const $=s=>document.querySelector(s);
const naira=n=>'₦'+Number(n).toLocaleString('en-NG');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ph='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10" fill="#e8ecf2"/></svg>');
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2600)}

const getCart=()=>{try{return JSON.parse(localStorage.getItem('ngr_cart')||'[]')}catch(e){return[]}};
const saveCart=c=>{try{localStorage.setItem('ngr_cart',JSON.stringify(c))}catch(e){}};
const head=a=>`<header><div class="bar"><a class="brand" href="index.html"><img src="logo.jpg" alt="">New Glory Resources</a><nav id="nv" aria-label="Main"><a href="index.html" class="${a=='s'||a=='p'?'on':''}">Store</a><a href="water.html" class="${a=='w'?'on':''}">New Glory Waters &amp; Beverages</a><a href="blog.html" class="${a=='b'?'on':''}">Blog</a></nav>${a=='s'?'<button class="btn" id="cb" aria-label="Open cart">Cart (<span id="cc">0</span>)</button>':a=='p'?'<a class="btn" href="index.html#cart" style="text-decoration:none;display:inline-flex;align-items:center">Cart (<span id="cc">0</span>)</a>':''}<button class="btn menu" id="mb" aria-label="Menu" aria-controls="nv" aria-expanded="false"><svg width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" fill="none"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button></div></header>`;
document.addEventListener('click',e=>{const b=e.target.closest('#mb'),n=$('#nv');if(b){const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)}else if(n&&!e.target.closest('#nv'))n.classList.remove('open')});
