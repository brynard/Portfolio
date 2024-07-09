var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents')
var sideMenu = document.getElementById("sideMenu");


function opentab(tabname){
    for(tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents)
    {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


function closeMenu(){
    sideMenu.style.right = "-200px"
}

function openMenu(){
    sideMenu.style.right= "0";
}

function getAge()
{
    let currentDate = new Date();
    currentDate = currentDate.getFullYear();
    age = currentDate-2000
    document.getElementById('age').innerHTML = age + ' years old';
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



