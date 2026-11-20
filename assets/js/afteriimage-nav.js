(()=>{'use strict';const nav=document.querySelector('nav.nav');if(!nav)return;if(!nav.querySelector('a[href="/afteriimage/about/"]')){const about=document.createElement('a');about.href='/afteriimage/about/';about.textContent='About';nav.appendChild(about)};document.querySelectorAll('.editorial-menu-toggle').forEach(el=>el.remove());nav.classList.remove('editorial-collapsible','is-open');[['/afteriimage/relationships/','Relationships'],['/afteriimage/culture/','Pop Culture']].forEach(([url,label])=>{if(!nav.querySelector('a[href="'+url+'"]')){const a=document.createElement('a');a.href=url;a.textContent=label;const next=nav.querySelector('a[href="/afteriimage/lifestyle/"]');nav.insertBefore(a,next||null)}});const bar=document.createElement('div');bar.className='ai-mobile-bar';bar.innerHTML='<a class="ai-mobile-brand" href="/afteriimage/" aria-label="AFTERIIMAGE. homepage">AFTERIIMAGE.</a><button class="ai-mobile-toggle" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="ai-mobile-navigation">+</button>';nav.id='ai-mobile-navigation';nav.parentNode.insertBefore(bar,nav);bar.appendChild(nav);const btn=bar.querySelector('button');function close(){bar.classList.remove('is-open');btn.textContent='+';btn.setAttribute('aria-expanded','false');btn.setAttribute('aria-label','Open navigation')}btn.addEventListener('click',()=>{const opened=bar.classList.toggle('is-open');btn.textContent=opened?'×':'+';btn.setAttribute('aria-expanded',String(opened));btn.setAttribute('aria-label',opened?'Close navigation':'Open navigation')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});document.addEventListener('click',e=>{if(!bar.contains(e.target))close()});})();
/* AFTERIIMAGE article advertising: slots render only when AdSense fills them. */
(()=>{'use strict';
const publisher='ca-pub-1429790773820527',slot='1146268467';
const path=location.pathname;
const articlePage=path.startsWith('/stories/')||path.startsWith('/anatomy/');
if(!articlePage)return;
const article=document.querySelector('article');
if(!article)return;
const paragraphs=[...article.children].filter(el=>el.tagName==='P'&&!el.classList.contains('eyebrow')&&!el.classList.contains('stand'));
if(paragraphs.length<7)return;
const css=document.createElement('style');
css.textContent='.ai-ad-unit{max-width:760px;margin:34px auto;min-width:0;overflow:hidden}.ai-ad-unit:not(:has(ins[data-ad-status="filled"])){display:none}.ai-ad-unit ins.adsbygoogle{display:block;width:100%}';
document.head.appendChild(css);
const positions=[Math.floor(paragraphs.length*.34),Math.floor(paragraphs.length*.72)];
positions.forEach(i=>{
const wrap=document.createElement('aside');wrap.className='ai-ad-unit';wrap.setAttribute('aria-label','Advertisement');
const ins=document.createElement('ins');ins.className='adsbygoogle';ins.style.display='block';ins.dataset.adClient=publisher;ins.dataset.adSlot=slot;ins.dataset.adFormat='auto';ins.dataset.fullWidthResponsive='true';wrap.appendChild(ins);
paragraphs[i].after(wrap);
});
const script=document.createElement('script');script.async=true;script.crossOrigin='anonymous';script.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client='+publisher;script.onload=()=>{document.querySelectorAll('.ai-ad-unit ins.adsbygoogle').forEach(()=>{try{(window.adsbygoogle=window.adsbygoogle||[]).push({})}catch(e){}})};document.head.appendChild(script);
})();
