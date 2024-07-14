const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

const inside_container = document.createElement('div');
inside_container.className = 'inside_container';
container.appendChild(inside_container);

const header = document.createElement('div');
header.innerText = 'AWARD WINNING';
header.className = "header";
inside_container.appendChild(header);

const downHeader = document.createElement('div');
downHeader.className = "downHeader";
downHeader.innerHTML = `DIGITAL MARKETING <br> AGENCY`;
inside_container.appendChild(downHeader);

const paragraphs = document.createElement('p');
paragraphs.innerHTML = `Morbi sed nec ricus finibus feugiat et fermentum nibh. Pellentesque <br>
vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus <br>
feugiat et fermentu`;
inside_container.appendChild(paragraphs);

const imageDiv = document.createElement('div');
imageDiv.className = 'image-container';
container.appendChild(imageDiv);

const button = document.createElement('button');
button.innerText = 'CONTACT US';
button.className = 'button';
inside_container.appendChild(button);

const image = document.createElement('img');
image.src = 'image/asset.png';
image.className = 'image_1';
imageDiv.appendChild(image);



const details_cotainer = document.createElement ('div');
details_cotainer.className = "details_container";
document.body.appendChild(details_cotainer);


const work = document.createElement('div');
work.className="work";
details_cotainer.appendChild(work)



const p_tag=document.createElement('p');
p_tag.className="p_tag"
p_tag.innerHTML="WHAT WE DO";
work.appendChild(p_tag)

const h_tag=document.createElement('h');
h_tag.className="h_tag"
h_tag.innerHTML=`SERVICES PROVIDE<br>
FOR YOU `;
work.appendChild(h_tag)


const about=document.createElement('div');
about.className="about";
about.innerHTML= `Morbi sed nec ricus finibus feugiat et fermentum nibh. Pellentesque <br>
vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus <br>
feugiat et fermentu`;
details_cotainer.appendChild(about)






