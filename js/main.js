const $=id=>document.getElementById(id);
const P=window.PROFILE;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const title=(icon,t)=>`<div class="section-title"><span class="text-xl">${icon}</span><h2>${t}</h2><span class="line"></span></div>`;
const logo=(src,size,fallback)=>`<div class="logo-box" style="width:${size}px;height:${size}px"><img src="${src}" alt="" onerror="this.parentNode.innerHTML='<span style=\\'font-size:${size/2.2}px\\'>${fallback}</span>'"></div>`;

// hero + about
$('logoText').textContent=P.logoText; $('heroStatus').textContent=P.status; $('heroName').textContent=P.name;
$('heroSub').textContent=P.subtitle; $('heroTag').textContent='> "'+P.tagline+'"'; $('heroIntro').textContent=P.intro; $('heroImg').src=P.heroImage;
$('abName').textContent=P.name.toUpperCase(); $('abTitle').textContent=P.about.title;
$('abBody').innerHTML=P.about.paragraphs.map(p=>`<p>${p}</p>`).join('')+`<div class="bg-baby-pink/50 p-4 rounded-xl border border-pink-border text-cozy-brown"><p class="font-pixel text-[10px] mb-2">✨ MY GOAL</p><p>${P.about.goal}</p></div>`;

// projects (small grid)
$('projects').innerHTML=title('🌸','FEATURED PROJECTS')+`<div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">`+PROJECTS.map(p=>{
 const inner=`<div class="flex items-center justify-between mb-3"><span class="w-10 h-10 rounded-lg bg-lavender-soft border border-lavender-dark flex items-center justify-center text-xl">${p.icon}</span><span class="chip">${esc(p.tag)}</span></div>
 <p class="font-pixel text-[9px] text-pink-border mb-1">${esc(p.name)}</p><h3 class="font-bold text-[13px] leading-snug mb-1.5">${esc(p.title)}</h3>
 <p class="text-[11px] text-cozy-brown-light leading-relaxed flex-1">${esc(p.desc)}</p>
 <div class="flex flex-wrap gap-1 mt-3">${p.tech.map(t=>`<span class="chip">${esc(t)}</span>`).join('')}</div>`;
 const cls='pixel-card hover-lift p-3.5 sm:p-4 flex flex-col';
 return p.link?`<a href="${p.link}" target="_blank" rel="noopener" class="${cls}">${inner}</a>`:`<div class="${cls}">${inner}</div>`}).join('')+`</div>
 <div class="text-right mt-5"><a href="${P.contact.github}" target="_blank" rel="noopener" class="font-pixel text-[9px] text-pink-border hover:underline">VIEW ALL ON GITHUB →</a></div>`;

// experience with logos
$('experience').innerHTML=title('⏳','EXPERIENCE & LEADERSHIP JOURNAL')+`<div class="space-y-4">`+EXPERIENCE.map(e=>`
 <div class="pixel-card p-4 sm:p-5 flex gap-4 items-start">${logo(e.logo,64,'🏢')}
 <div class="min-w-0"><span class="chip">${esc(e.date)}</span><h3 class="font-bold text-sm mt-2">${esc(e.role)}</h3><p class="text-[12px] text-pink-border font-semibold">${esc(e.org)}</p><p class="text-xs text-cozy-brown-light mt-1.5 leading-relaxed">${esc(e.desc)}</p></div></div>`).join('')+`</div>`;

// education: equal cards
$('education').innerHTML=title('🎓','EDUCATION')+`<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">`+EDUCATION.map(e=>`
 <div class="pixel-card hover-lift p-5 flex flex-col items-center text-center min-h-[250px]">${logo(e.logo,88,'🎓')}
 <h3 class="font-bold text-[13px] leading-snug mt-4">${esc(e.school)}</h3><p class="text-[11px] text-cozy-brown-light mt-1">${esc(e.degree)}</p>
 <p class="text-[11px] text-cozy-brown-light mt-1">${esc(e.note)}</p>
 <span class="chip mt-auto pt-1 !bg-lavender-soft !border-lavender-dark">${esc(e.year)}</span></div>`).join('')+`</div>`;

// certificates (small grid)
$('certificates').innerHTML=title('📜','CERTIFICATES')+`<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">`+CERTIFICATES.map(c=>`
 <div class="pixel-card hover-lift flex flex-col overflow-hidden">
  <div class="cert-img ${c.image?'cursor-zoom-in':''}" ${c.image?`onclick="openCert('${c.image}')"`:''}>${c.image?`<img loading="lazy" src="${c.image}" alt="${esc(c.title)}">`:'<span class="text-3xl">📜</span>'}</div>
  <div class="p-2.5 flex flex-col gap-1.5 flex-1"><h3 class="font-bold text-[11px] leading-snug">${esc(c.title)}</h3>
  <p class="text-[10px] text-pink-border font-semibold"><i class="fa-solid fa-building-columns mr-1"></i>${esc(c.from)}</p>
  <div class="flex flex-wrap gap-1 mt-auto">${c.skills.map(s=>`<span class="chip">${esc(s)}</span>`).join('')}</div></div></div>`).join('')+`</div>`;

// contact
const C=P.contact;
$('contact').innerHTML=title('📬','SEND NOTE TO LAIBA')+`<div class="pixel-card p-5 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
 <div class="md:col-span-5 space-y-4"><p class="text-xs text-cozy-brown-light leading-relaxed">${C.blurb}</p>
 <div class="font-pixel text-[10px] space-y-3 break-all"><p>📧 <a href="mailto:${C.email}" class="hover:underline">${C.email}</a></p><p>📍 ${C.location}</p>
 <p>🔗 <a href="${C.github}" target="_blank" rel="noopener" class="hover:underline">github.com/puuumeow</a></p><p>💼 <a href="${C.linkedin}" target="_blank" rel="noopener" class="hover:underline">linkedin.com/in/puumeow</a></p></div></div>
 <form class="md:col-span-7 space-y-3" onsubmit="sendMail(event)">
  <input name="n" required placeholder="Your Name" class="w-full bg-baby-pink/40 border border-pink-border rounded-lg p-3 text-sm focus:outline-none focus:border-cozy-brown">
  <input name="e" type="email" required placeholder="Your Email" class="w-full bg-baby-pink/40 border border-pink-border rounded-lg p-3 text-sm focus:outline-none focus:border-cozy-brown">
  <textarea name="m" rows="4" required placeholder="Your message..." class="w-full bg-baby-pink/40 border border-pink-border rounded-lg p-3 text-sm focus:outline-none focus:border-cozy-brown"></textarea>
  <button class="pixel-btn-sm !bg-pink-accent font-pixel !text-xs !py-3 w-full justify-center font-bold">🚀 SEND MESSAGE</button></form></div>`;
function sendMail(e){e.preventDefault();const f=e.target;
 location.href=`mailto:${C.email}?subject=${encodeURIComponent('Portfolio message from '+f.n.value)}&body=${encodeURIComponent(f.m.value+'\n\n'+f.n.value+' ('+f.e.value+')')}`;}

// modals
function toggleAbout(){$('aboutModal').classList.toggle('hidden-modal')}
function openCert(src){$('lightboxImg').src=src;$('lightbox').classList.remove('hidden-modal')}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('aboutModal').classList.add('hidden-modal');$('lightbox').classList.add('hidden-modal')}});

// music
function toggleMusic(){const a=$('bgm'),b=$('musicBtn');
 if(a.paused){a.play().then(()=>{$('musicText').textContent='music off';$('musicIcon').textContent='🎶';b.setAttribute('aria-pressed','true')}).catch(()=>{})}
 else{a.pause();$('musicText').textContent='music on';$('musicIcon').textContent='🎵';b.setAttribute('aria-pressed','false')}}

// pixie dust
(()=>{const cv=$('pixieCanvas'),ctx=cv.getContext('2d');let ps=[];const small=innerWidth<640;
 const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};addEventListener('resize',rs);rs();
 const col=['#F4B8E4','#C6B5F0','#F7D678','#C5E8D8'];
 const mk=(x,y)=>({x:x??Math.random()*cv.width,y:y??Math.random()*cv.height,s:Math.random()*3+1,vx:(Math.random()-.5)*.8,vy:(Math.random()-.5)*.8,c:col[Math.random()*4|0],o:Math.random()*.7+.3});
 const N=small?12:30;for(let i=0;i<N;i++)ps.push(mk());
 addEventListener('mousemove',e=>{if(Math.random()>.6)ps.push(mk(e.clientX,e.clientY))});
 if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
 (function a(){ctx.clearRect(0,0,cv.width,cv.height);ps=ps.filter(p=>{p.x+=p.vx;p.y+=p.vy;p.s-=.01;ctx.globalAlpha=p.o;ctx.fillStyle=p.c;ctx.fillRect(p.x,p.y,p.s,p.s);return p.s>.2});
  while(ps.length<N)ps.push(mk());requestAnimationFrame(a)})()})();
