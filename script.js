(function(){
  // Matrix rain
  var c=document.getElementById('rain'),x=c.getContext('2d'),cols,drops,fs=16,rainColor='#00ff41';
  var chars='0101010101010101010101010101010101010101';
  function size(){c.width=innerWidth;c.height=innerHeight;cols=Math.ceil(c.width/fs);drops=Array.from({length:cols},function(){return Math.random()*-50});}
  size();addEventListener('resize',size);
  setInterval(function(){
    x.fillStyle='rgba(2,10,4,.08)';x.fillRect(0,0,c.width,c.height);
    x.fillStyle=rainColor;x.font=fs+'px monospace';
    for(var i=0;i<cols;i++){
      x.fillText(chars[Math.floor(Math.random()*chars.length)],i*fs,drops[i]*fs);
      if(drops[i]*fs>c.height&&Math.random()>.975)drops[i]=0;
      drops[i]++;
    }
  },45);

  var $=function(i){return document.getElementById(i)};
  var timer,bitTimer;
  function bits(n){var s='';for(var i=0;i<n;i++)s+=Math.random()>.5?'1':'0';return s}
  var steps=['Initializing exploit kit...','Resolving target network...','Bypassing firewall...','Injecting payload [0x7F3A]...','Cracking encryption keys...','Gaining root access...','Extracting contacts & photos...','Covering tracks...','Finalizing...'];

  $('go').onclick=function(){
    var n=$('num').value.replace(/\D/g,'');
    if(n.length<10){$('err').textContent='اكتب رقم موبايل صحيح';return}
    $('err').textContent='';
    $('start').style.display='none';$('run').style.display='block';
    var term=$('term'),p=0,si=0;term.innerHTML='';
    term.innerHTML='[+] Target: '+n+'<br>';
    bitTimer=setInterval(function(){$('bits').textContent=bits(260)},60);
    timer=setInterval(function(){
      p+=Math.random()*1.2+0.4;
      if(p>=100)p=100;
      $('fill').style.width=p+'%';$('pct').textContent=Math.floor(p)+'%';
      if(Math.random()<.35&&si<steps.length){term.innerHTML+='[*] '+steps[si++]+'<br>'}
      else term.innerHTML+='<span style="color:#0a7a22">'+bits(34)+'</span><br>';
      term.scrollTop=term.scrollHeight;
      if(p>=100){
        clearInterval(timer);clearInterval(bitTimer);
        term.innerHTML+='[+] ACCESS GRANTED<br>';
        setTimeout(function(){
          $('run').style.display='none';$('done').style.display='block';rainColor='#ff2a4d';document.body.classList.add('hacked');document.querySelector('.card').classList.add('hacked');
          $('tgt').textContent='TARGET: '+n;
        },900);
      }
    },110);
  };
  $('again').onclick=function(){
    $('done').style.display='none';$('aware').style.display='none';$('pick').style.display='none';$('res').style.display='none';$('run').style.display='none';document.querySelector('.card').classList.remove('hacked');document.body.classList.remove('hacked');rainColor='#00ff41';
    $('fill').style.width='0';$('pct').textContent='0%';$('num').value='';
    $('start').style.display='block';
  };
  $('ok').onclick=function(){$('done').style.display='none';$('pick').style.display='block';};
  var pb=document.querySelectorAll('#pick .opt');
  for(var i=0;i<pb.length;i++)pb[i].onclick=function(){
    var t=this.getAttribute('data-t');
    $('pick').style.display='none';$('res').style.display='block';
    $('rt').textContent=t;
    var l=['[+] Connecting to device...','[+] Bypassing security...','[+] Dumping data...','[+] 100% DONE'],k=0;
    $('rlog').innerHTML='';$('ok2').style.display='none';
    var lt=setInterval(function(){
      $('rlog').innerHTML+=l[k++]+'<br>';
      if(k>=l.length){clearInterval(lt);$('ok2').style.display='block'}
    },600);
  };
  $('ok2').onclick=function(){$('res').style.display='none';$('aware').style.display='block';document.querySelector('.card').classList.remove('hacked');document.body.classList.remove('hacked');rainColor='#00ff41';};
  $('num').addEventListener('keydown',function(e){if(e.key==='Enter')$('go').click()});
})();
