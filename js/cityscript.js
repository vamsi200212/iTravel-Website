var cit = localStorage.getItem("myCity");
document.title = cit;

if(cit=="Hyderabad"){
   document.getElementById("city-n").innerHTML = "Hyderabad";
   document.getElementById("city-tag").innerHTML = "- City of Pearls -";
}else if(cit=="Bangalore"){
   document.getElementById("city-n").innerHTML = "Bangalore";
   document.getElementById("city-tag").innerHTML = "- IT Capital of India -";
   document.getElementById("city-info-1").innerHTML = "Bangalore, officially known as Bengaluru, is a city located in the southern part of India. It is the capital city of the state of Karnataka and is known as the \"Silicon Valley\" of India, as it is a major hub for information technology (IT) and other high-tech industries"
   document.getElementById("city-info-2").innerHTML = "The city has a rich cultural history and is known for its pleasant climate, beautiful parks, and vibrant nightlife. It is also home to several world-renowned educational and research institutions, including the Indian Institute of Science (IISc), Indian Institute of Management (IIM), and National Law School of India University (NLSIU)."
   document.getElementById("city-info-3").innerHTML = "Bangalore is also famous for its diverse cuisine, which includes traditional South Indian dishes like dosa, idli, and vada, as well as international cuisine from all over the world. The city is also known for its shopping malls, street markets, and handicraft stores that offer a wide range of products at affordable prices."
   document.getElementById("sec1").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6)50%,rgba(0,0,0,0.6)50%),url(./images/banga-2.jpg)";
   document.getElementById("sec1").style.backgroundPosition = "center";
   document.getElementById("places-container").innerHTML = 
   '<div class="visit-title" id="visit">Places to visit in Bangalore</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://r4.wallpaperflare.com/wallpaper/35/554/469/arquitectura-bangalore-palace-wallpaper-47699a2b76baf5555cdd5810985729d3.jpg" width="100%" class="pl-img" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Bangalore Palace</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://i.pinimg.com/originals/24/2a/20/242a20a0bca86d54e823f861a1c2cf96.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Nandi Hills</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://fastly.4sqi.net/img/general/width960/31471541_hYVsLBCwiCJwWPrjxbhAaZbsxEyN7dDyRkCmaUYUOBg.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">UB City Mall</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://w0.peakpx.com/wallpaper/687/933/HD-wallpaper-iskcon-bengaluru-iskon-karnataka-temple.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">ISKON Temple</h3>'+
   '</div>'+
   

   '<a class="prev" onclick="plusSlides(-1)">&#10094</a>'+
   '<a class="next" onclick="plusSlides(+1)">&#10095</a>';
   document.getElementById("dot-container").innerHTML = 
   '<span class="dot" onclick="currentSlide(1)"></span>'+
   '<span class="dot" onclick="currentSlide(2)"></span>'+
   '<span class="dot" onclick="currentSlide(3)"></span>'+
   '<span class="dot" onclick="currentSlide(4)"></span>';
}else if(cit=="Mumbai"){
   document.getElementById("city-n").innerHTML = "Mumbai";
   document.getElementById("city-tag").innerHTML = "- Financial Capital of India -";
   document.getElementById("city-info-1").innerHTML = "Mumbai, formerly known as Bombay, is a city located on the western coast of India. It is the capital city of the state of Maharashtra and is the most populous city in India. Mumbai is known for its cosmopolitan culture, diverse population, and vibrant nightlife.The city is home to several iconic landmarks, including the Gateway of India, Marine Drive, and the Taj Mahal Palace Hotel. It is also famous for its film industry, commonly known as Bollywood, which produces the largest number of films in the world."
   document.getElementById("city-info-2").innerHTML = "Mumbai is a major financial hub and is home to several important financial institutions, including the Reserve Bank of India and the Bombay Stock Exchange. The city is also home to several prominent educational institutions, including the Indian Institute of Technology (IIT) and the Tata Institute of Social Sciences (TISS).Mumbai has a rich history and culture, reflected in its architecture, festivals, and cuisine. The city is known for its street food, which includes popular dishes like vada pav, pav bhaji, and bhel puri. Mumbai's vibrant nightlife includes a wide range of restaurants, bars, and clubs, making it a popular destination for young people."
   document.getElementById("city-info-3").innerHTML = "However, the city faces several challenges, including traffic congestion, pollution, and a shortage of affordable housing. Despite these challenges, Mumbai remains a dynamic and bustling city, attracting people from all over India and the world."
   document.getElementById("sec1").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6)50%,rgba(0,0,0,0.6)50%),url(./images/mum-2.jpg)";
   document.getElementById("sec1").style.backgroundPosition = "center";
   document.getElementById("visit").innerHTML = "Places to visit in Mumbai";
   document.getElementById("places-container").innerHTML = 
   '<div class="visit-title" id="visit">Places to visit in Mumbai</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://images.unsplash.com/photo-1582477795644-d2b3348c0e75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1460&q=80" width="100%" class="pl-img" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Gateway of India</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://c0.wallpaperflare.com/preview/829/279/707/india-mumbai-marine-drive-beach.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Marine Drive Road</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Bandra Worli Sea</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://freakytraveller.in/wp-content/uploads/2012/12/Elephanta_caves.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Elephanta Caves</h3>'+
   '</div>'+
   

   '<a class="prev" onclick="plusSlides(-1)">&#10094</a>'+
   '<a class="next" onclick="plusSlides(+1)">&#10095</a>';
   document.getElementById("dot-container").innerHTML = 
   '<span class="dot" onclick="currentSlide(1)"></span>'+
   '<span class="dot" onclick="currentSlide(2)"></span>'+
   '<span class="dot" onclick="currentSlide(3)"></span>'+
   '<span class="dot" onclick="currentSlide(4)"></span>';
}else if(cit=="Delhi"){
   document.getElementById("city-n").innerHTML = "Delhi";
   document.getElementById("city-tag").innerHTML = "- Capital of India -";
   document.getElementById("city-info-1").innerHTML = "Delhi is the capital city of India and is located in the northern part of the country. It is a vibrant and diverse city that has a rich history and culture. Delhi is known for its magnificent monuments, vibrant markets, and delicious street food. The city is divided into two parts: Old Delhi and New Delhi. Old Delhi is the historic part of the city, which was once the capital of the Mughal Empire. It is home to several famous landmarks, including the Red Fort, Jama Masjid, and Chandni Chowk. New Delhi, on the other hand, is the modern part of the city that was designed and built during British colonial rule. It is home to several government buildings, including the Rashtrapati Bhawan, Parliament House, and India Gate."
   document.getElementById("city-info-2").innerHTML = "Delhi is also famous for its food, which includes a wide range of street food, including chaat, parathas, and kebabs. The city has a diverse population, and its cuisine reflects its cultural diversity. Delhi is also known for its shopping, with several popular markets like Chandni Chowk, Karol Bagh, and Connaught Place, offering a range of goods at affordable prices. The city is also home to several prestigious educational institutions, including the University of Delhi and the Indian Institute of Technology (IIT) Delhi. It is a major center of commerce, with several important industries, including information technology, telecommunications, and textiles."
   document.getElementById("city-info-3").innerHTML = "Despite its many attractions, Delhi faces several challenges, including pollution, traffic congestion, and a shortage of affordable housing. The city, however, continues to grow and evolve, with plans to improve infrastructure and make it a better place to live and work."
   document.getElementById("sec1").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6)50%,rgba(0,0,0,0.6)50%),url(./images/delhi-2.jpg)";
   document.getElementById("sec1").style.backgroundPosition = "center";
   document.getElementById("visit").innerHTML = 'PLaces to visit in Delhi';
   document.getElementById("places-container").innerHTML = 
   '<div class="visit-title" id="visit">Places to visit in Delhi</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" width="100%" class="pl-img" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">India Gate</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://images.unsplash.com/photo-1576519465852-4d119fcccf33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">RED FORT</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ul0zvwkqxnyorrfgzbyo/Hauz%20Khas%20Complex%20Ticket%20in%20Delhi.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Hauz Khas</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://images.pexels.com/photos/768043/pexels-photo-768043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Qutub Minar</h3>'+
   '</div>'+
   

   '<a class="prev" onclick="plusSlides(-1)">&#10094</a>'+
   '<a class="next" onclick="plusSlides(+1)">&#10095</a>';
   document.getElementById("dot-container").innerHTML = 
   '<span class="dot" onclick="currentSlide(1)"></span>'+
   '<span class="dot" onclick="currentSlide(2)"></span>'+
   '<span class="dot" onclick="currentSlide(3)"></span>'+
   '<span class="dot" onclick="currentSlide(4)"></span>';
}else if(cit=="Chennai"){
   document.getElementById("city-n").innerHTML = "Chennai";
   document.getElementById("city-tag").innerHTML = "- Cultural Capital of South India -";
   document.getElementById("city-info-1").innerHTML = "Chennai is a city located in the southern part of India, in the state of Tamil Nadu. It is the capital city of the state and one of the largest cities in the country. With a rich cultural heritage and a history that dates back several centuries, Chennai is known for its beautiful beaches, magnificent temples, and delicious food. The city is situated on the Coromandel Coast of the Bay of Bengal and has a tropical climate, with hot and humid summers and moderate winters. Chennai is a major commercial and industrial hub and is home to several industries, including automobile manufacturing, software development, and hardware manufacturing."
   document.getElementById("city-info-2").innerHTML = "The city is situated on the Coromandel Coast of the Bay of Bengal and has a tropical climate, with hot and humid summers and moderate winters. Chennai is a major commercial and industrial hub and is home to several industries, including automobile manufacturing, software development, and hardware manufacturing. Some of the popular tourist attractions in Chennai include the Marina Beach, the Kapaleeswarar Temple, the Fort St. George, and the Government Museum. The city is also famous for its culinary delights, including the famous South Indian filter coffee and a variety of spicy and flavorful vegetarian dishes."
   document.getElementById("city-info-3").innerHTML = "Overall, Chennai is a vibrant and dynamic city that combines traditional Indian culture with modern technology and industry. It is a popular tourist destination and a hub for business and commerce in South India."
   document.getElementById("sec1").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6)50%,rgba(0,0,0,0.6)50%),url(./images/chennai-2.jpg)";
   document.getElementById("sec1").style.backgroundPosition = "center";
   document.getElementById("visit").innerHTML = 'PLaces to visit in Chennai';
   document.getElementById("places-container").innerHTML = 
   '<div class="visit-title" id="visit">Places to visit in Chennai</div>'+
   '<div class="myPlaces fade">'+
      '<img src="./images/chennai.jpg" width="100%" class="pl-img" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">kapaleeshwarar temple</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://images.pexels.com/photos/3159360/pexels-photo-3159360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">MARINA BEACH</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://expressavenue.in/images/mall.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Express Avenue Mall</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://chennaimath.org/Slides/Slide%202.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Rama Krishna Temple</h3>'+
   '</div>'+
   

   '<a class="prev" onclick="plusSlides(-1)">&#10094</a>'+
   '<a class="next" onclick="plusSlides(+1)">&#10095</a>';
   document.getElementById("dot-container").innerHTML = 
   '<span class="dot" onclick="currentSlide(1)"></span>'+
   '<span class="dot" onclick="currentSlide(2)"></span>'+
   '<span class="dot" onclick="currentSlide(3)"></span>'+
   '<span class="dot" onclick="currentSlide(4)"></span>';
}else if(cit=="Pune"){
   document.getElementById("city-n").innerHTML = "Pune";
   document.getElementById("city-tag").innerHTML = "- Queen of Deccan -";
   document.getElementById("city-info-1").innerHTML = "Pune is a city located in the western part of India, in the state of Maharashtra. It is the second-largest city in the state and is known for its rich history, vibrant culture, and excellent educational institutions. The city is situated at the foothills of the Sahyadri mountain range and has a pleasant climate throughout the year, with mild winters and moderate summers. Pune is known as the \"Oxford of the East\" due to its large number of educational institutions, including some of the top-ranked engineering and management schools in the country."
   document.getElementById("city-info-2").innerHTML = "Pune is also famous for its rich history, dating back to the 8th century AD, when it was the capital of the Maratha Empire. The city is home to several historical monuments, including the Shaniwar Wada, a palace fort built by the Maratha Empire, and the Aga Khan Palace, which served as a prison for Mahatma Gandhi during the Indian independence movement. Apart from its historical significance and educational institutions, Pune is also known for its vibrant culture and arts scene. The city is home to several museums, art galleries, and cultural centers that showcase the rich cultural heritage of the region. The Pune International Film Festival and the Pune Festival are two popular cultural events that take place in the city every year."
   document.getElementById("city-info-3").innerHTML = "Pune is also known for its delicious food, with a variety of vegetarian and non-vegetarian dishes that reflect the region's rich culinary heritage. Some of the popular dishes include the spicy Misal Pav, the sweet and tangy Mastani, and the famous street food, Vada Pav. Overall, Pune is a vibrant and dynamic city that offers a blend of history, culture, education, and industry. It is a popular destination for tourists, students, and professionals alike, and is known for its warm and welcoming people."
   document.getElementById("sec1").style.backgroundImage = "linear-gradient(rgba(0,0,0,0.6)50%,rgba(0,0,0,0.6)50%),url(./images/pune-2.jpg)";
   document.getElementById("sec1").style.backgroundPosition = "center";
   document.getElementById("visit").innerHTML = 'PLaces to visit in Pune';
   document.getElementById("places-container").innerHTML = 
   '<div class="visit-title" id="visit">Places to visit in Pune</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://yometro.com/images/places/shaniwar-wada-palace.jpg" width="100%" class="pl-img" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Shaniwar wada palaace</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://punetourism.co.in/images/places-to-visit/headers/aga-khan-palace-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Aga Khan Palace</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://punetourism.co.in/images/places-to-visit/headers/osho-ashram-pune-tourism-entry-fee-timings-holidays-reviews-header.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Osho Ashram</h3>'+
   '</div>'+
   '<div class="myPlaces fade">'+
      '<img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68518-Katraj-Snake-Park.jpg" class="pl-img" width="100%" height="95%" style="object-fit: cover;">'+
      '<h3 class="place-name">Katraj Snake Park</h3>'+
   '</div>'+
   

   '<a class="prev" onclick="plusSlides(-1)">&#10094</a>'+
   '<a class="next" onclick="plusSlides(+1)">&#10095</a>';
   document.getElementById("dot-container").innerHTML = 
   '<span class="dot" onclick="currentSlide(1)"></span>'+
   '<span class="dot" onclick="currentSlide(2)"></span>'+
   '<span class="dot" onclick="currentSlide(3)"></span>'+
   '<span class="dot" onclick="currentSlide(4)"></span>';
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myPlaces");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 