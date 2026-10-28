(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return;
  const $ = (selector, root=document) => root.querySelector(selector);
  const esc = (value) => String(value ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const svg = (name, klass='icon') => `<svg class="${klass}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
  const symbols = {layers:'▦', sparkles:'✳', chart:'↗', accessibility:'⌘', route:'⌁', database:'◈', notes:'≡',code:'</>'};

  $('#hero-photo').src = data.foto;
  $('#email-link').href = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent('Contato pelo portfólio')}`;
  $('#github-link').href = data.redes.github;
  $('#linkedin-link').href = data.redes.linkedin;
  $('#instagram-link').href = data.redes.instagram;
  $('#year').textContent = String(new Date().getFullYear());

  function experienceItem(item, idx) {
    return `<article class="timeline-item reveal">
      <div class="timeline-date"><span>0${idx+1} / </span>${esc(item.periodo)}</div>
      <div class="timeline-main"><div><h3 class="timeline-company">${esc(item.empresa)}</h3><p class="timeline-role">${esc(item.cargo)}</p><span class="timeline-location">${esc(item.local)}</span></div>
      <div class="timeline-description"><p>${esc(item.resumo)}</p><ul>${item.pontos.map(p=>`<li>${esc(p)}</li>`).join('')}</ul><div class="tag-stack">${item.ferramentas.map(t=>`<span>${esc(t)}</span>`).join('')}</div></div></div>
    </article>`;
  }
  $('#timeline').innerHTML = data.experiencias.map(experienceItem).join('');

  function projectCard(p) {
    return `<article class="project-card reveal" data-id="${esc(p.id)}">
      <div class="project-visual visual-${esc(p.visual)}"><span class="visual-number">${esc(p.numero)}</span><span class="visual-outline"></span><span class="visual-chip">${esc(p.categoria.toUpperCase())}</span><span class="visual-icon" aria-hidden="true">${esc(symbols[p.icon]||'✳')}</span></div>
      <div class="project-body"><div class="project-card-head"><span class="project-kicker">PROJETO / ${esc(p.numero)}</span><span class="project-status">${esc(p.status)}</span></div><h3 class="project-title">${esc(p.titulo)}</h3><p class="project-subtitle">${esc(p.subtitulo)}</p><p class="project-summary">${esc(p.resumo)}</p><div class="project-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="project-card-foot"><span class="project-year">${esc(p.ano)}</span><button class="details-button" type="button" data-project="${esc(p.id)}" aria-label="Ver detalhes de ${esc(p.titulo)}">Ver detalhes ${svg('up')}</button></div></div>
    </article>`;
  }
  let filter = 'Todos';
  function renderProjects(){
    const items = filter === 'Todos' ? data.projetos : data.projetos.filter(p=>p.categoria===filter);
    $('#projects-grid').innerHTML = items.map(projectCard).join('');
    $('#project-visible-count').textContent = `Exibindo ${items.length} ${items.length===1?'projeto':'projetos'}`;
    observeReveals();
  }
  $('#projects-total').textContent = String(data.projetos.length).padStart(2,'0');
  $('#filters').addEventListener('click', e=>{
    const b = e.target.closest('[data-filter]'); if (!b) return;
    filter = b.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(button=>{
      const active = button===b;button.classList.toggle('active',active);button.setAttribute('aria-pressed', String(active));
    });
    renderProjects();
  });

  const dialog = $('#project-modal');
  function openProject(id){
    const p = data.projetos.find(item=>item.id===id); if (!p) return;
    $('#modal-content').innerHTML = `<div class="modal-head"><span>PROJETO ${esc(p.numero)} / ${esc(p.ano)}</span><span>${esc(p.status.toUpperCase())}</span></div><h2 id="modal-title">${esc(p.titulo)}</h2><p class="modal-intro">${esc(p.resumo)}</p><div class="modal-section"><h3>O DESAFIO</h3><p>${esc(p.problema)}</p></div><div class="modal-section"><h3>CAMINHO PROPOSTO / EXECUTADO</h3><p>${esc(p.abordagem)}</p></div><div class="modal-section"><h3>TECNOLOGIAS E APRENDIZADOS</h3><div class="modal-list">${[...p.tags,...p.aprendizados].map(t=>`<span>${esc(t)}</span>`).join('')}</div></div><p class="modal-note">${esc(p.nota)}</p>${p.link?`<a class="modal-link" target="_blank" rel="noopener noreferrer" href="${esc(p.link)}">Visitar projeto publicado ${svg('up')}</a>`:''}`;
    if (typeof dialog.showModal==='function'){dialog.showModal();document.body.classList.add('modal-open')}else {dialog.setAttribute('open','');document.body.classList.add('modal-open')}
  }
  function closeProject(){dialog.close?.();dialog.removeAttribute('open');document.body.classList.remove('modal-open')}
  $('#projects-grid').addEventListener('click',e=>{const b=e.target.closest('[data-project]');if(b)openProject(b.dataset.project)});
  $('#modal-close').addEventListener('click',closeProject);
  dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
  dialog.addEventListener('click',e=>{if(e.target===dialog)closeProject()});

  $('#skill-grid').innerHTML = data.conhecimentos.map((s,i)=>`<article class="skill-card reveal"><span class="skill-n">/ 0${i+1}</span><h3>${esc(s.titulo)}</h3><p>${esc(s.texto)}</p><div class="skill-tags">${s.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></article>`).join('');

  const menu = $('#main-menu'), menuToggle = $('#menu-toggle');
  function closeMenu(){menu.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');menuToggle.innerHTML=svg('menu')}
  menuToggle.addEventListener('click',()=>{
    const opened=menu.classList.toggle('is-open'); menuToggle.setAttribute('aria-expanded',String(opened));menuToggle.setAttribute('aria-label',opened?'Fechar menu':'Abrir menu');menuToggle.innerHTML=svg(opened?'close':'menu');
  });
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('is-open')) closeMenu()});

  const themeToggle=$('#theme-toggle');
  try{const preferred=localStorage.getItem('yuri-theme');if(preferred==='dark'||preferred==='light')document.documentElement.dataset.theme=preferred}catch{}
  function syncTheme(){const light=document.documentElement.dataset.theme==='light';themeToggle.innerHTML=svg(light?'moon':'sun');themeToggle.setAttribute('aria-label',light?'Usar tema escuro':'Usar tema claro');}
  syncTheme();
  themeToggle.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;try{localStorage.setItem('yuri-theme',next)}catch{}syncTheme()});

  const toast=$('#toast'); let toastTimeout;
  function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>toast.classList.remove('show'),2600)}
  $('#copy-email').addEventListener('click', async()=>{
    try {
      if (!navigator.clipboard?.writeText) throw Error('clipboard indisponível');
      await navigator.clipboard.writeText(data.email);showToast('E-mail copiado!');
    }catch {showToast(`Copie: ${data.email}`)}
  });

  let revealObserver;
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -15px 0px'});
  }
  function observeReveals(){ document.querySelectorAll('.reveal:not(.is-visible)').forEach(el=>{if(revealObserver)revealObserver.observe(el);else el.classList.add('is-visible')}) }
  renderProjects();observeReveals();
  const progress=$('#reading-progress');
  let scrollTicking=false;
  function onScroll(){if(scrollTicking)return;scrollTicking=true;requestAnimationFrame(()=>{const h=document.documentElement.scrollHeight-window.innerHeight; progress.style.width=(h>0?Math.min(100,(window.scrollY/h)*100):0)+'%';scrollTicking=false})}
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  const links=[...document.querySelectorAll('.nav-links a')];
  if ('IntersectionObserver' in window){
    const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}})},{rootMargin:'-25% 0px -64% 0px'});
    links.forEach(a=>{const id=a.getAttribute('href')?.slice(1);const sec=document.getElementById(id);if(sec)sectionObserver.observe(sec)});
  }
})();
