document.addEventListener('DOMContentLoaded', function() {
    const our_container = document.createElement('div');
    our_container.className = "our_container";
    document.body.appendChild(our_container);

    const ourSpanTag = document.createElement('span');
    ourSpanTag.className = 'span_tag';
    ourSpanTag.innerHTML = 'WHY CHOOSE US';
    our_container.appendChild(ourSpanTag);

    const ourH2Tag = document.createElement('h2');
    ourH2Tag.className = 'h2_tag';
    ourH2Tag.innerHTML = 'WHY WE ARE THE BEST';
    our_container.appendChild(ourH2Tag);

    const imageChanger = document.createElement('div');
    imageChanger.className = 'row';
    document.body.appendChild(imageChanger);

    const projectCol1 = document.createElement('div');
    projectCol1.className = 'project-col-1';
    const photos = document.createElement('div');
    photos.className = 'photos';
    const mainImage = document.createElement('img');
    mainImage.id = 'mainImage';
    mainImage.src = 'image/japan1.jpg';
    mainImage.alt = 'Main Image';
    photos.appendChild(mainImage);
    projectCol1.appendChild(photos);
    imageChanger.appendChild(projectCol1);

    const projectCol2 = document.createElement('div');
    projectCol2.className = 'project-col-2';
    imageChanger.appendChild(projectCol2);

    const images = [
        { src: 'image/japan1.jpg', title: "Genderless Kei - Japan's Hot", description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of" },
        { src: 'image/asset 9.jpeg', title: "Better Strategy & Quality", description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of" },
        { src: 'image/japan1.jpg', title: "Genderless Kei - Japan's Hot", description: "Set to launch on the manufacturer's new A330neo aircraft in 2017, it's offering lots of" }
    ];

    function changeImage(imageSrc) {
        mainImage.src = imageSrc;
    }

    images.forEach((image, index) => {
        const aboutPhotos = document.createElement('div');
        aboutPhotos.className = 'about-photos grey';

        if (index === 1) aboutPhotos.id = 'default-selected';
        aboutPhotos.addEventListener('mouseenter', function() {
            changeImage(image.src);
            aboutPhotos.classList.add('hovered');
        });
        aboutPhotos.addEventListener('mouseleave', function() {
            aboutPhotos.classList.remove('hovered');
        });

        const h3 = document.createElement('h3');
        h3.textContent = image.title;
        const p = document.createElement('p');
        p.textContent = image.description;

        aboutPhotos.appendChild(h3);
        aboutPhotos.appendChild(p);

        projectCol2.appendChild(aboutPhotos);
    });


    const whatPepoleSayRow = document.createElement('div');
    imageChanger.className = 'row';
    document.body.appendChild(whatPepoleSayRow);

    const whatPepoleSay=document.createElement('div');
    whatPepoleSay.className="whatPeopleSay";
    whatPepoleSayRow.appendChild(whatPepoleSay)


    const growthLine=document.createElement('div');
    growthLine.className='growthLine';
    whatPepoleSay.appendChild(growthLine);

    const growthSpan=document.createElement('span')
    growthSpan.className="growthSpan"
    growthSpan.innerHTML="EXPERTS GROWTH"
    growthLine.appendChild(growthSpan)

    const growth_h3_line=document.createElement('h3');
    growth_h3_line.className='growth_h3_line';
    growth_h3_line.innerHTML="OUR COMPANY GROWTH"
    growthLine.appendChild(growth_h3_line)

    const statusRow=document.createElement('div');
    statusRow.className='row'
    whatPepoleSay.appendChild(statusRow)
    
    const status=document.createElement('div')
    status.className="status";
    statusRow.appendChild(status)

    const status_img=document.createElement('img');
    status_img.className="status_img";
    status_img.src="image/heart1.svg";
    status.appendChild(status_img);

    const status_h1=document.createElement('h1');
    status_h1.innerHTML="1999 +";
    status_h1.className="status_h1";
    status.appendChild(status_h1)

    const status_p=document.createElement('p');
    status_p.className="status_p";
    status_p.innerHTML="Satisfied Customers"
    status.appendChild(status_p)



    const status1=document.createElement('div')
    status1.className="status1";
    statusRow.appendChild(status1)


    const status_img1=document.createElement('img');
    status_img1.className="status_img";
    status_img1.src="image/clock.svg";
    status1.appendChild(status_img1);

    const status_h1_1=document.createElement('h1');
    status_h1_1.innerHTML="1591+";
    status_h1_1.className="status_h1";
    status1.appendChild(status_h1_1)

    const status_p_1=document.createElement('p');
    status_p_1.className="status_p";
    status_p_1.innerHTML="Days Of Operation"
    status1.appendChild(status_p_1)

    const status2=document.createElement('div')
    status2.className="status2";
    statusRow.appendChild(status2)


    const status_img2=document.createElement('img');
    status_img2.className="status_img";
    status_img2.src="image/Path 4402.svg";
    status2.appendChild(status_img2);

    const status_h1_2=document.createElement('h1');
    status_h1_2.innerHTML="2834+";
    status_h1_2.className="status_h1";
    status2.appendChild(status_h1_2)

    const status_p_2=document.createElement('p');
    status_p_2.className="status_p";
    status_p_2.innerHTML="Complete Project"
    status2.appendChild(status_p_2)

    const status3=document.createElement('div')
    status3.className="status3";
    statusRow.appendChild(status3)


    const status_img3=document.createElement('img');
    status_img3.className="status_img";
    status_img3.src="image/Path 4406.svg";
    status3.appendChild(status_img3);

    const status_h1_3=document.createElement('h1');
    status_h1_3.innerHTML="7532+";
    status_h1_3.className="status_h1";
    status3.appendChild(status_h1_3)

    const status_p_3=document.createElement('p');
    status_p_3.className="status_p";
    status_p_3.innerHTML="Win Awards"
    status3.appendChild(status_p_3)



    const feedBack_row=document.createElement('div');
    feedBack_row.className='row';
    whatPepoleSay.appendChild(feedBack_row);


    const feedBack_container=document.createElement('div');
    feedBack_container.className="feedBack_container";
    feedBack_row.appendChild(feedBack_container);


    const feedback_text=document.createElement('span');
    feedback_text.className="feedback_text";
    feedback_text.innerHTML="CLIENT'S FEEDBACK";
    feedBack_container.appendChild(feedback_text)


    const feedback_h1=document.createElement('h1')
    feedback_h1.className="feedback_h1"
    feedback_h1.innerHTML="PEOPLE SAY'S ABOUT US !"
    feedBack_container.appendChild(feedback_h1);


    const feedback_pTag=document.createElement('p');
    feedback_pTag.className="feedback_pTag";
    feedback_pTag.innerHTML=`Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is <br>
    reproduced below for those interested. Sections Bonorum at Malorum Original.`
    feedBack_container.appendChild(feedback_pTag);



    const feedbackSpan=document.createElement('span');
    feedbackSpan.className="feedbackSpan";
    feedbackSpan.innerHTML=`<span class="span1">JANNAT TUMPA </span> - COO, AMERIMAR ENTERPRISES, INC.`
    feedBack_container.appendChild(feedbackSpan)


    const footer=document.createElement('div');
    footer.className='footer';
    document.body.appendChild(footer);

    const footerIcon=document.createElement('div');
    footerIcon.className="footerIcon";
    footer.appendChild(footerIcon);

    const iconImage=document.createElement('img');
    iconImage.src="image/Group 500.png";
    iconImage.className="iconImage"
    footerIcon.appendChild(iconImage)



});
