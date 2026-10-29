(function(){
var f=document.getElementById('form-contato');
if(!f||!window.fetch||!window.URLSearchParams)return;
var btn=document.getElementById('form-enviar'),ok=document.getElementById('form-ok'),erro=document.getElementById('form-erro');
f.addEventListener('submit',function(e){
e.preventDefault();
ok.hidden=true;erro.hidden=true;
// honeypot: robô preencheu o campo escondido, finge que enviou
if(f.elements.website.value){f.reset();ok.hidden=false;return;}
var txt=btn.textContent;btn.disabled=true;btn.textContent='Enviando...';
fetch(f.action,{method:'POST',body:new URLSearchParams(new FormData(f))})
.then(function(r){if(!r.ok)throw new Error(r.status);f.reset();ok.hidden=false;})
.catch(function(){erro.hidden=false;})
.finally(function(){btn.disabled=false;btn.textContent=txt;});
});
})();
