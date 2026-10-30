const sb=supabase.createClient('https://mtempwgbwaejvuoaplia.supabase.co','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10ZW1wd2did2FlanZ1b2FwbGlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzODgxNTgsImV4cCI6MjEwODk2NDE1OH0.OJmdVmsnuBXpaDAY1UuDvnWhNwzUGZLB-P2AZ2ixZnQ');
const WA='2348039220007';
const $=s=>document.querySelector(s);
const naira=n=>'₦'+Number(n).toLocaleString('en-NG');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ph='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><rect width="10" height="10" fill="#e8ecf2"/></svg>');
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2600)}
const head=a=>`<header><div class="bar"><a class="brand" href="index.html"><img src="logo.jpg" alt="">New Glory Resources</a><nav><a href="index.html" class="${a=='s'?'on':''}">Store</a><a href="blog.html" class="${a=='b'?'on':''}">Blog</a></nav>${a=='s'?'<button class="btn" id="cb" aria-label="Open cart">Cart (<span id="cc">0</span>)</button>':''}</div></header>`;
