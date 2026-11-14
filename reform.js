function showPage(name){
  document.querySelectorAll('.page').forEach(function(p){
    p.classList.remove('active');
  });
  let newPage = document.getElementById('page-' + name);
  newPage.classList.add('active');
  let cards = newPage.querySelectorAll('.mock-card, .s-card, .page-box');
  cards.forEach(function(card, index){
    card.classList.remove('card-anim');
    setTimeout(function(){
      card.classList.add('card-anim');
    }, index * 100);
  });
  window.scrollTo({top:0, behavior:'smooth'});
  document.getElementById('navLinks').classList.remove('show');
}
function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('show');
}
document.getElementById('consultForm').addEventListener('submit', function(e){
  e.preventDefault();
  let name = document.getElementById('fName').value.trim();
  let phone = document.getElementById('fPhone').value.trim();
  let err = document.getElementById('formError');
  let msg = document.getElementById('formMsg');
  if(!name || name.length < 3){ err.innerText="⚠️ Sahi naam likho"; return; }
  let clean = phone.replace(/\s/g,'').replace('+91','');
  if(!/^[6-9]\d{9}$/.test(clean)){ err.innerText="⚠️ Sahi 10-digit number daalo"; return; }
  err.innerText="";
  msg.innerText="✅ Thank you "+name+"! Request mil gayi, hum call karenge.";
  this.reset();
});
