const swiper1 = new Swiper('.swiper-coninaer-1 ', {
    effect: "coverflow",
    loop: 'true',
      grabCursor: true,
      spaceBetween: 30,
      centeredSlides: true,
      slidesPerView: "auto",
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
  });
  
const swiper2 = new Swiper('.swiper-container-2 ', {
    loop: 'true',
      grabCursor: true,
      spaceBetween: 30,
      updateOnWindowResize: true,
      centeredSlides: true,
      slidesPerView: "auto",
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
  });


const job = document.querySelectorAll('.job')
const advantagesMobile = document.querySelectorAll('.advantages-item.mobile')


const toggleText = (e, text) => {
  if(text.className.includes('hide')){
    e.target.src = './images/close-btn.svg'
    text.classList.remove('hide')
    text.classList.add('open')
  } else {
    e.target.src = './images/add-btn.svg'
    text.classList.remove('open')
    text.classList.add('hide')
  }
}


job.forEach(el => {
  const btn = el.querySelector('.add-btn')
  const jobTasks = el.querySelector('.job-tasks')
  btn.addEventListener('click', (e) => toggleText(e, jobTasks))
})

advantagesMobile.forEach(el => {
  const btn = el.querySelector('.add-btn')
  const text = el.querySelector('p')
  btn.addEventListener('click', (e) => toggleText(e, text))
})
