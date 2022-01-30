const btns = document.querySelectorAll('.btn');
const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slide = [...document.querySelectorAll('.slide')];
let currentIndex = 0; 

function moveSlider(dir){
  // const width = sliderContainer.clientWidth;
  if(dir === 'next'){
    currentIndex++;
    slider.style.transform = `translateX(-${100 * currentIndex}%)`;
  } else {
    currentIndex --;
    slider.style.transform = `translateX(${100 * currentIndex}%)`;
  }
  switch (currentIndex){
    case 0: 
      document.querySelector('#prev').classList.add('hidden');
      break;
    case slide.length - 1:
      document.querySelector('#next').classList.add('hidden');
      break;
    default: 
      btns.forEach(b => b.classList.remove('hidden'));
    break;
  }
}

function handleBtnClick(e){
  console.log(e.currentTarget.id);
  e.currentTarget.id === "next" ? moveSlider('next') : moveSlider('prev');
}

btns.forEach(b => {
  b.addEventListener('click', handleBtnClick)
})