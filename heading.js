const aboutRow = document.createElement('div');
aboutRow.className = 'about_row';
document.body.appendChild(aboutRow);

const aboutDetails = [
    { src: 'image/1.svg', title: 'Clarified Vision & Target', description: 'Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit, <br> sed diam nonumy' },
    { src: 'image/2.svg', title: 'High Performance', description: 'Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit, <br> sed diam nonumy' },
    { src: 'image/3.svg', title: 'Maintain Security', description: 'Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit, <br> sed diam nonumy' },
    { src: 'image/4.svg', title: 'Better Strategy & Quality', description: 'Lorem ipsum dolor sit amet, <br> consectetur adipisicing elit, <br> sed diam nonumy' }
];

aboutDetails.forEach(detail => {
    const aboutCol = document.createElement('div');
    aboutCol.className = 'about_col';
    aboutRow.appendChild(aboutCol);

    const aboutImg = document.createElement('img');
    aboutImg.className = 'about';
    aboutImg.src = detail.src;
    aboutImg.alt = 'arrow';
    aboutCol.appendChild(aboutImg);

    const h3Tag = document.createElement('h3');
    h3Tag.innerText = detail.title;
    aboutCol.appendChild(h3Tag);

    const pTag = document.createElement('p');
    pTag.className = 'about_p_tag';
    pTag.innerHTML = detail.description;
    aboutCol.appendChild(pTag);
});

const ourProject = document.createElement('div');
ourProject.className = 'ourProject';

const ourProjectDetails = document.createElement('div');
ourProjectDetails.className = 'ourProjectDetails';
ourProject.appendChild(ourProjectDetails);

const ourSpanTag = document.createElement('span');
ourSpanTag.className = 'span_tag';
ourSpanTag.innerHTML = 'WHY CHOSE US';
ourProjectDetails.appendChild(ourSpanTag);

const ourH2Tag = document.createElement('h2');
ourH2Tag.className = 'h2_tag';
ourH2Tag.innerHTML = 'WHY WE ARE BEST';
ourProjectDetails.appendChild(ourH2Tag);
document.body.insertBefore(ourProject, aboutRow);


