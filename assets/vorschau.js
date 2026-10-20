const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
function setMenu(open){
 menu?.setAttribute('aria-expanded',String(open));
 if(menu)menu.textContent=open?'Schließen':'Menü';
 nav?.classList.toggle('open',open);
}
menu?.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
nav?.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false)});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){
  setMenu(false);menu.focus();
 }
});
document.querySelectorAll('[data-demo-form]').forEach(form=>{
 form.addEventListener('submit',event=>event.preventDefault());
 const button=form.querySelector('[data-demo-submit]');
 button.addEventListener('click',()=>{
  if(!form.reportValidity())return;
  const kind=form.dataset.kind;
  form.querySelector('.form-status').textContent=kind==='signature'?'Vorschau erfolgreich ausprobiert. Es wurde keine Unterschrift gespeichert und keine E-Mail versendet.':kind==='newsletter'?'Vorschau erfolgreich ausprobiert. Es wurde kein Newsletter bestellt.':'Vorschau erfolgreich ausprobiert. Ihre Nachricht wurde nicht versendet.';
 });
 button.disabled=false;
});
const search=document.getElementById('signer-search');
if(search){const items=[...document.querySelectorAll('[data-signer]')];const groups=[...document.querySelectorAll('.signer-group')];const normalize=s=>s.toLocaleLowerCase('de-DE').normalize('NFD').replace(/[\u0300-\u036f]/g,'');search.addEventListener('input',()=>{const q=normalize(search.value.trim());let count=0;items.forEach(li=>{const show=normalize(li.dataset.search).includes(q);li.hidden=!show;if(show)count++});groups.forEach(group=>group.hidden=![...group.querySelectorAll('[data-signer]')].some(li=>!li.hidden));document.getElementById('signer-status').textContent=q?(count===0?'Keine passenden Einträge gefunden.':`${count} passende Einträge in der Quellliste.`):'Quellstand: veröffentlichte Liste · geprüft am 19. Oktober 2026';});}
