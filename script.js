// Small interactive touches
document.addEventListener('DOMContentLoaded', ()=>{
  // reveal animation
  document.querySelectorAll('.card').forEach((c,i)=>{
    c.style.opacity = 0;
    c.style.transform = 'translateY(18px)';
    setTimeout(()=> {
      c.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.8,.2,1)';
      c.style.opacity = 1;
      c.style.transform = 'none';
    }, 220 + i*120);
  });
});
