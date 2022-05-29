//function to set about
var base_url = "https://icircles.app/";
let username = "";
let authorImgUrl = "";
aboutRender = (about) => {
  username = about.username;//for globally access

  //user tab name
  username = about.username;
  document.getElementById("tabName").innerHTML = `${about.username}`;


  //home
  let fName = about.firstname;
  let lName = about.lastname;
  let fullName = fName.concat(" ", lName);
  const nameLength = fullName.length;
  if(nameLength>16){
    document.getElementById("fullName").style.fontSize = "35px";
  }
  document.getElementById("fullName").innerHTML = `I am ${fullName}`;
  document.getElementById("Designation").innerHTML = `${about.designation}`;

  //About description
  let htmlText = "";
  const strShort = about.about_me;
  const strlong = about.about_me;
  // 👇️ First 25 words
  const shortDescription = strShort.split(" ").slice(0, 30).join(" ");
  const longDescription = strlong.split(" ").slice(31, 100).join(" ");

  if(shortDescription.length<50){
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("homeUserAbout").innerHTML = `${about.about_me}`;
  }else{
    htmlText = `
    <div><span id="shortTitle">${shortDescription}</span><span id="dots"> ... </span></div>
    <div id="more">${longDescription}</div>
    `;
    document.getElementById("homeUserAboutDiv").innerHTML = htmlText;
  }

  // Resume url
  document.getElementById("ResumeUrl").href = base_url + about.resume;

  //home address and phone
  document.getElementById("address").innerHTML =`<i class="fa-solid fa-location-dot p-2"></i> ${about.address}`;


//Social Icons
  let socialIcon = ``;
  if (about.facebook) {
    socialIcon += `<a style="color: #fff; padding:10px; font-size:20px" href=${about.facebook} role="button"><i class="fab fa-facebook-f fa-lg"></i></a>`;
  }
  if (about.twitter) {
    socialIcon += `<a style="color: #fff; padding:10px; font-size:20px" href=${about.twitter} role="button"><i class="fab fa-twitter fa-lg"></i></a>`;
  }
  if (about.instagram) {
    socialIcon += `<a style="color: #fff; padding:10px; font-size:20px" href=${about.instagram} role="button"><i class="fab fa-instagram fa-lg"></i></a>`;
  }
  if (about.linkedin) {
    socialIcon += `<a style="color: #fff; padding:10px; font-size:20px" href=${about.linkedin} role="button"><i class="fab fa-linkedin fa-lg"></i></a>`;
  }
  if (about.github) {
    socialIcon += `	<a style="color: #fff; padding:10px; font-size:20px" href=${about.github} role="button"><i class="fab fa-github fa-lg"></i></a>`;
  }
  if (about.whatsapp) {
    socialIcon += `	<a style="color: #fff; padding:10px; font-size:20px" href=${about.whatsapp} role="button"><i class="fab fa-whatsapp fa-lg"></i></a>`;
  }
  if (about.skype) {
    socialIcon += `	<a style="color: #fff; padding:10px; font-size:20px" href=${about.skype} role="button"><i class="fab fa-skype fa-lg"></i></a>`;
  }
  document.getElementById("SocialIcons").innerHTML = socialIcon;

};

//function to set work experiences
workExperienceRender = (experiences) => {
  var length = experiences.length;
  if(length===0){
    document.getElementById("experienceSection").style.display= "none";
  }

  let htmlText = "";
  experiences.map((expData,index) => {
    let end_date = expData.to_date.split("-");
    const thatYear = new Date(expData.from_date);
    let year = thatYear.getFullYear();

    if(index%2===0){
      htmlText += `
      <div class="col-12 mt-3">
                <div class="row align-items-center">
                  <div class="col-5 text-end">
                  <div class="experiance_left">
                    <h3>${expData.company_name}</h3>
                    <h3>${year}</h3>
                  </div>
                  </div>
                  <div class="col-2 text-center">
                    <div class="experiance_icon">
                      <img src="images/serviceicon1.png" alt="">
                    </div>
                  </div>
                  <div class="col-5">
                      <div class="experiance_right experiance_befor_one">
                        <h5>${expData.job_title}</h5>
                        <p>${expData.details}</p>
                        </div>
                  </div>
                </div>
              </div>   
      `;
    }else{
      htmlText += `
                 <div class="col-12 mt-3">
                   <div class="row align-items-center flex-row-reverse">
                     <div class="col-5 text-start">
                      <div class="experiance_left">
                      <h3>${expData.company_name}</h3>
                      <h3>${year}</h3>
                      </div>
                     </div>
                     <div class="col-2 text-center">
                        <div class="experiance_icon">
                         <img src="images/serviceicon2.png" alt="">
                        </div>
                     </div>
                     <div class="col-5">
                          <div class="experiance_right experiance_befor_two">
                          <h5>${expData.job_title}</h5>
                          <p>${expData.details}</p>
                          </div>
                     </div>
                   </div>
                 </div>
      `;
    }
  });
  document.getElementById("experienceFullCard").innerHTML = htmlText;
};

//function to set Skills
skillRender = (skills) => {
  var length = skills.length;
  if(length===0){
    document.getElementById("skillSection").style.display= "none";
  }

  let htmlText = "";
  skills.map((skills) => {
    if (skills.skill_level == "Advanced") {
      htmlText += `
      <div class="progress_wrapeer">
          <h6>${skills.name}</h6>
          <span class="thirdProgress">95%</span>
      </div>
      <div class="progress">
          <div class="progress-value value_3"></div>
        </div>
            `;
    }
    if (skills.skill_level == "Intermediate") {
      htmlText += `
      <div class="progress_wrapeer">
      <h6>${skills.name}</h6>
      <span class="fourProgress">85%</span>
  </div>
  <div class="progress">
      <div class="progress-value value_4"></div>
    </div>
            `;
    }
    if (skills.skill_level == "Beginner") {
      htmlText += `
      <div class="progress_wrapeer">
      <h6>${skills.name}</h6>
          <span class="secondProgress">40%</span>
      </div>
      <div class="progress">
          <div class="progress-value value_2"></div>
        </div>
            `;
    }
  });
  document.getElementById("skillBar").innerHTML = htmlText;
};

// function to set user educations information
educationsRender = (educations) => {
  var length = educations.length;
  if(length===0){
    document.getElementById("educationSection").style.display= "none";
  }

  let htmlText = "";
  educations.map((eduData) => {
    let end_date = eduData.to_date.split("-");
    const thatYear = new Date(eduData.from_date);
    let year = thatYear.getFullYear();
      htmlText += `

      <div class="col-md-6 col-lg-4">
        <div class="education_card">
              <div class="card_text">
              <h2 class="mt-3 text-center">${eduData.degree_name}</h2>
              <h5 class="mt-3 text-center">${eduData.institution_name}</h5>
                  <p>${eduData.details}</p>
                  <a class="text-bottom" href="#">More</a>
              </div>
        </div>  
    </div>
      `;
  });
  document.getElementById("educationSectionData").innerHTML = htmlText;
};


//function to set services
serviceRender = (services) => {
  var length = services.length;
  if(length===0){
    document.getElementById("servicesSection").style.display= "none";
  }

  let htmlText = "";
  services.map((serviceData) => {
    const str = serviceData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");

    htmlText += ` 

    <div class="col-md-6 col-lg-3">
        <div class="service_card">
              <div class="card_img">
                    <img src="${base_url}/${serviceData.thumb}" alt="">
              </div>
              <div class="card_text">
                    <h4>${serviceData.service_name}</h4>
                    <p>${shortDescription}  ...</p>
                    <a href="#">Visit</a>
              </div>
        </div>  
    </div>
    `;
  });
  document.getElementById("servicesData").innerHTML = htmlText;
};

//function to set languages
languageRender = (languages) => {
  var length = languages.length;
  if(length===0){
    document.getElementById("languageSection").style.display= "none";
  }


  let htmlText = "";
  languages.map((languages) => {

      htmlText +=`
      <div class="col-md-4 col-sm-6 col-lg-2">
          <div class="language_item">
                <div class="language_img">
                    <span>${languages.title}
                    </span>
                </div>
                <div class="language_discription text-center">
                    <a href="#">${languages.level}</a>
                </div>
          </div>
      </div>
      `;
  
  });
  document.getElementById("languageSectionData").innerHTML = htmlText;
};


//function to set portfolio
portfolioRender = (portfolios) => {
  var length = portfolios.length;
  if(length===0){
    document.getElementById("portfolioSection").style.display= "none";
  }

  let htmlText = "";
  const keys = Object.keys(portfolios);
  keys.map((key, index) => {
    portfolios[key].map((item, index) => {
    htmlText +=`
    <div class="col-md-6  col-lg-3 mt-3">
        <div class="portfolio_card">
              <div class="card_img">
                    <img src="${base_url+"/"+item.image}" alt="">
              </div>
              <div class="card_text">
                    <p>${item.details}</p>
                    <a href="#">View</a>
              </div>
        </div>  
    </div>
    `;
  })
});

  document.getElementById("portfolioData").innerHTML = htmlText;
};

//function to set awards
awardRender = (awards) => {
  var length = awards.length;
  if(length===0){
    document.getElementById("awardSection").style.display= "none";
  }

  let htmlText = "";
  awards.map((awardData) => {
    const thatYear = new Date(awardData.created_date);
    let year = thatYear.getFullYear();
    const str = awardData.details;
    // 👇️ First 25 words
    const shortDescription = str.split(" ").slice(0, 25).join(" ");
    htmlText += `

    <div class="col-lg-6 mt-5">
          <div class="award_item">
              <div class="item_logo">
                    <img src="images/award_icon.png" alt="">
              </div>
              <div class="item_text">
                    <h4>${awardData.title}</h4>
                    <h5>${year}</h5>
                    <p>${shortDescription} ...</p>
              </div>
          </div>
    </div>
    `;
  });
  document.getElementById("awardSectionData").innerHTML = htmlText;
};

//function to set interests
interestRender = (interest) => {
  var length = interest.length;
  if(length===0){
    document.getElementById("interestSection").style.display= "none";
  }

  let htmlText = "";
  interest.map((interestData) => {
    htmlText += `
    <div class="col-md-6 col-lg-3 text-center">
    <div class="interest_item">
         <div class="round_cercle">
             <i class="">${interestData.title}</i>
         </div>
     </div>
  </div>
    `;
  });
  document.getElementById("interestSectionData").innerHTML = htmlText;
};

//function to set blogs or journal
blogRender = (blogs) => {
  var length = blogs.length;
  if(length===0){
    document.getElementById("blogSection").style.display= "none";
  }

  let htmlText = "";
  const keys = Object.keys(blogs);
  keys.map((key) => {
    blogs[key].map((item) => {
      const thatYear = new Date(item.created_date);
      let year = thatYear.getFullYear();
      let day = thatYear.toLocaleString("en-US", { "weekday": "long" }); // Monday
      let month = thatYear.toLocaleString('en-us', { month: 'long' }); /* June */
      let date = thatYear.getDate() /* 9 */


      const str = item.description;
      // 👇️ First 25 words
      const shortDescription = str.split(" ").slice(0, 45).join(" ");
      const longtDescription = str.split(" ").slice(46, 120).join(" ");
      htmlText += `
      <div class="col-md-6 col-lg-4 list-element">
        <div class="journal_img_item">
           <img src=${base_url+"/"+item.image} alt="">
       </div>
        <div class="journal_text">
           <h4>${item.title}</h4>
           <h5>${month} ${day} ${year} </h5>
           <p>${shortDescription}</p>
        </div>
    </div>
      `;
    });
  });
  document.getElementById("journalSectionData").innerHTML = htmlText;
  
};

//function to set references
referenceRender = (references) => {
  var length = references.length;
  if(length===0){
    document.getElementById("referenceSection").style.display= "none";
  }

  let htmlText = "";
  references.map((referenceData)=>{
      htmlText += `
      <div class="col-sm-6 col-lg-3 text-center ">
        <div class="reffer_card">
              <div class="reffer_text">
                  <h4>${referenceData.name}</h4>
                  <h5>${referenceData.email}</h5>
                  <h6><a href="#">Massage</a></h6>
              </div>
        </div>
      </div>
      `;
     });
  document.getElementById("referencesData").innerHTML = htmlText;
};

//function to set clients
clientRender = (clients) => {
  var length = clients.length;
  if(length===0){
    document.getElementById("clientSection").style.display= "none";
  }

  let htmlText = "";
  clients.map((clientData)=>{
     if(clientData.image==null){
      htmlText += `
      <div class="col-sm-6 col-md-6 col-lg-3 text-center ">
        <div class="Clients_card">
              <div class="Clients_text">
                  <h4>${clientData.client_name}</h4>
                  <div class="client_add">
                      <a href="#"><i class="fa-solid fa-user-plus"></i></a>
                      <a href="#"><span>Masssage</span></a>
                  </div>
              </div>
        </div>
      </div>
      `
     }else if(clientData.image!=null ){
      htmlText += `
      <div class="col-sm-6 col-md-6 col-lg-3 text-center ">
      <div class="Clients_card">
           <div class="reffer_img">
                <img src="https://icircles.app/uploads/user/${username}/${clientData.image}" alt="">
           </div>
           <div class="Clients_text">
                <h4>${clientData.client_name}</h4>
                <div class="client_add">
                   <a href="#"><i class="fa-solid fa-user-plus"></i></a>
                   <a href="#"><span>Masssage</span></a>
                </div>
           </div>
       </div>
     </div>
      `
     }
  });
  document.getElementById("clientSectionData").innerHTML = htmlText;
};


//function to set the whole ui
render = (data) => {
 aboutRender(data.about);
 workExperienceRender(data.experiences);
 skillRender(data.subskills);
 educationsRender(data.educations);
 serviceRender(data.services);
 languageRender(data.languages);
 portfolioRender(data.portfolios);
 awardRender(data.awards);
 interestRender(data.interests);
 blogRender(data.blogs);
 referenceRender(data.references);
 clientRender(data.clients);
};


//Fetch api
var url = document.URL;
let usrnm = url.split('/'); 
fetch("https://icircles.app/api/profile/usermicrosite/"+usrnm[usrnm.length-1])
  .then((responsse) => responsse.json())
  .then((data) => { 
    console.log(data);
    render(data);
  });

//Get dynamic aside ul list
fetch("https://icircles.app/api/profile/usermicrosite/"+usrnm[usrnm.length-1])
  .then((responsse) => responsse.json())
  .then((data) => { 
  
    //Get all the field length
    const experienceLength = data.experiences.length;
    const subskillsLength = data.subskills.length;
    const servicesLength = data.services.length;
    const educationsLength = data.educations.length;
    const languagesLength = data.languages.length;
    const referencesLength = data.references.length;
    const clientsLength = data.clients.length;
    const interestsLength = data.interests.length;
    const awardsLength = data.awards.length;
    const portfoliosLength = Object.keys(data.portfolios).length;
    const blogsLength = Object.keys(data.blogs).length;
    const testimonialsLength = data.testimonials.length;


    let asideUl = ``;
    if (data.user_id) {
      asideUl += `
      <li><a href="#banner">Home</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li><a href="#banner">About me</a></li>
        `;
    }
    if (experienceLength>=1) {
      asideUl += `
      <li><a href="#experiance">Experiance</a></li>
        `;
    }
    if (subskillsLength>=1) {
      asideUl += `
      <li><a href="#skill">Skills</a></li>
        `;
    }
    if (educationsLength>=1) {
      asideUl += `
      <li><a href="#education">Education</a></li>
        `;
    }
    if (servicesLength>=1) {
      asideUl += `
    	<li><a href="#service">Services</a></li>
        `;
    }
    if (languagesLength>=1) {
      asideUl += `
      <li><a href="#language">Languages</a></li>
        `;
    }
    if (portfoliosLength>=1) {
      asideUl += `
      <li><a href="#portfolio">Portfolio</a></li>
        `;
    }
    if (awardsLength>=1) {
      asideUl += `
      <li><a href="#award">Awards</a></li>
        `;
    }
    if (interestsLength>=1) {
      asideUl += `
      <li><a href="#interest">Interests</a></li>
        `;
    }
    if (clientsLength>=1) {
      asideUl += `
      <li><a href="#Clients">Clients</a></li>
        `;
    }
    if (blogsLength>=1) {
      asideUl += `
      <li><a href="#journal">Journal</a></li>
        `;
    }
    if (referencesLength>=1) {
      asideUl += `
      <li><a href="#reference">References</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li><a href="#appointment">Appointment</a></li>
        `;
    }
    if (data.user_id) {
      asideUl += `
      <li><a href="#contact">Contact</a></li>
        `;
    }


    document.getElementById("headerNav").innerHTML = asideUl;
    document.getElementById("dropdownListId").innerHTML = asideUl;
  });


