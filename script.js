const steps=[
 ['El cuerpo','La sangre con poco oxígeno vuelve desde los tejidos al corazón a través de las venas cavas.','La sangre lleva CO₂ y necesita volver a los pulmones para realizar el intercambio de gases.'],
 ['Aurícula derecha','La aurícula derecha recibe la sangre que llega del cuerpo.','Después, la sangre pasa al ventrículo derecho.'],
 ['Ventrículo derecho','El ventrículo derecho impulsa la sangre hacia los pulmones mediante las arterias pulmonares.','Aquí empieza la circulación pulmonar.'],
 ['Pulmones','En los capilares de los pulmones, la sangre libera dióxido de carbono y recoge oxígeno.','Ahora la sangre es rica en oxígeno y vuelve al corazón por las venas pulmonares.'],
 ['Aurícula izquierda','La aurícula izquierda recibe la sangre rica en oxígeno procedente de los pulmones.','Después pasa al ventrículo izquierdo.'],
 ['Ventrículo izquierdo','El ventrículo izquierdo impulsa con fuerza la sangre hacia todo el cuerpo mediante la aorta.','Aquí empieza la circulación sistémica.'],
 ['El cuerpo','La sangre llega a los capilares de los tejidos y entrega oxígeno y nutrientes.','Después recoge CO₂ y otros desechos y vuelve a las venas. ¡El ciclo comienza otra vez!']
];
const nodes=[...document.querySelectorAll('.node')], bar=document.getElementById('progressBar'), title=document.getElementById('stageTitle'), text=document.getElementById('stageText'), tip=document.getElementById('tip');
let timer=null, current=0;
function showStep(i){current=i;nodes.forEach((n,k)=>n.classList.toggle('active',k===i));bar.style.width=((i)/(steps.length-1)*100)+'%';title.textContent=steps[i][0];text.textContent=steps[i][1];tip.innerHTML='💡 '+steps[i][2];}
function start(){clearInterval(timer);showStep(0);let i=0;timer=setInterval(()=>{i++;showStep(i);if(i===steps.length-1)clearInterval(timer)},1800)}
document.getElementById('startBtn').addEventListener('click',start);document.getElementById('repeatBtn').addEventListener('click',()=>{document.getElementById('simulador').scrollIntoView({behavior:'smooth'});setTimeout(start,500)});
nodes.forEach((n,i)=>n.addEventListener('click',()=>showStep(i)));
document.querySelectorAll('[data-answer]').forEach(b=>b.addEventListener('click',()=>{const old=b.textContent;b.textContent=b.dataset.answer;b.disabled=true;b.style.lineHeight='1.4';}));
document.querySelectorAll('.quiz-options button').forEach(b=>b.addEventListener('click',()=>{const r=document.getElementById('quizResult');r.textContent=b.dataset.correct==='true'?'✅ ¡Correcto! La aorta lleva la sangre desde el ventrículo izquierdo hacia el cuerpo.':'❌ No es esa. Piensa en el gran vaso que sale del ventrículo izquierdo.'}));
showStep(0);
