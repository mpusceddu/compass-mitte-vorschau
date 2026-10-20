// Eine neue, gleichberechtigte Auswahl beim Laden, ohne laufenden Wechsel.
(async()=>{
 const target=document.getElementById('random-signers');
 if(!target)return;
 try{
  const response=await fetch(new URL('assets/unterzeichnende.json',document.baseURI));
  if(!response.ok)throw new Error('Namensliste nicht erreichbar');
  const records=await response.json();
  if(!Array.isArray(records))throw new Error('Ungültige Namensliste');
  const seen=new Set();
  const names=[];
  for(const record of records){
   if(typeof record.name!=='string')continue;
   const name=record.name.trim().replace(/\s+/g,' ');
   const key=name.normalize('NFC').toLocaleLowerCase('de-DE');
   if(!name||seen.has(key))continue;
   seen.add(key);names.push(name);
  }
  if(!names.length)throw new Error('Leere Namensliste');
  const selected=[];
  for(let i=0;i<Math.min(3,names.length);i++){
   const index=i+Math.floor(Math.random()*(names.length-i));
   [names[i],names[index]]=[names[index],names[i]];
   selected.push(names[i]);
  }
  const fragment=document.createDocumentFragment();
  for(const name of selected){
   const row=document.createElement('div');row.className='person';
   const inner=document.createElement('div');
   const heading=document.createElement('h3');heading.textContent=name;
   const label=document.createElement('small');label.textContent='Unterstützt CompassMitte';
   inner.append(heading,label);row.append(inner);fragment.append(row);
  }
  target.replaceChildren(fragment);
 }catch{
  // Bei einem Ladefehler bleibt der Hinweis zur vollständigen Liste sichtbar.
 }
})();
