const sliderContainer = document.createElement('div');
sliderContainer.className = 'slider-container';
document.body.appendChild(sliderContainer)


const slider = document.createElement('div');
slider.className = 'slider';
const sliderInner = document.createElement('div');
sliderInner.className = 'slider-inner';

const images = [
  'image/asset 1.png',
  'image/asset 4.png',
  'image/asset 1.png',
  'image/asset 4.png',
  'image/asset 1.png',
  'image/asset 4.png',
  'image/asset 1.png',
  'image/asset 4.png'
];

images.forEach(src => {
  const card = document.createElement('div');
  card.className = 'card';

  const imgContainer = document.createElement('div');
  imgContainer.className = 'img';
  const img = document.createElement('img');
  img.src = src;
  img.draggable = false;
  imgContainer.appendChild(img);

  const layer = document.createElement('div');
  layer.className = 'layer';
  const icon = document.createElement('img');
  icon.src = "image/icon.svg";
  const h3 = document.createElement('h3');
  h3.textContent = 'WEB DEVELOPMENT';
  const p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, quod impedit?';
  const a = document.createElement('a');
  a.className = 'btn';
  a.target = '_blank';
  a.href = 'https://www.fylehq.com/';
  a.innerHTML = 'READ MORE <img class="arrow" src="image/arrow.png" alt="arrow">';

    layer.appendChild(icon);
    layer.appendChild(h3);
    layer.appendChild(p);
    layer.appendChild(a);

    card.appendChild(imgContainer);
    card.appendChild(layer);

    sliderInner.appendChild(card);
  });

slider.appendChild(sliderInner);
sliderContainer.appendChild(slider);

const dotContainer = document.createElement('div');
dotContainer.className = 'dot-container';
const visibleSlides = 4;
for (let i = 0; i < visibleSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) {
      dot.classList.add('red-dot');
    } else {
      dot.classList.add('black-dot');
    }
    dotContainer.appendChild(dot);
  };

sliderContainer.appendChild(dotContainer);

document.body.appendChild(sliderContainer);


  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  let direction = 1;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100 / visibleSlides}%)`;
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('red-dot', dotIndex === index);
      dot.classList.toggle('black-dot', dotIndex !== index);
    });
  }

  function nextSlide() {
    if (currentIndex === images.length - visibleSlides) {
      direction = -1;
    } else if (currentIndex === 0) {
      direction = 1;
    }
    currentIndex += direction;
    showSlide(currentIndex);
  }

  function prevSlide() {
    if (currentIndex === 0) {
      direction = 1;
    } else if (currentIndex === images.length - visibleSlides) {
      direction = -1;
    }
    currentIndex -= direction;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 2000);

dots.forEach((dot, index) => {
dot.addEventListener('click', () => {
  currentIndex = index;
  showSlide(currentIndex);
  });
});

showSlide(currentIndex);

