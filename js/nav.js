function generateHeaderContent() {
    const headerContent = `
      <div class="container-fluid">
        <div class="row tm-brand-row">
          <div class="col-lg-4 col-md-6 col-11">
            <div class="tm-brand-container tm-bg-white-transparent">
              <i class="fas fa-2x fa-pen tm-brand-icon"></i>
              <div class="tm-brand-texts">
                <h1 class="text-uppercase tm-brand-name">Portofolio</h1>
                <p class="small">Wahyu Ageng Satrio / XII-RPL-1</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-6 col-1">
            <div class="tm-nav">
              <nav class="navbar navbar-expand-lg navbar-light tm-bg-white-transparent tm-navbar">
                <button class="navbar-toggler" type="button"
                  data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <div class="tm-nav-link-highlight"></div>
                      <a class="nav-link" href="#index">Home</a>
                    </li>
                    <li class="nav-item">
                      <div class="tm-nav-link-highlight"></div>
                      <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                      <div class="tm-nav-link-highlight"></div>
                      <a class="nav-link" href="#Project & Skill">Project & Skill</a>
                    </li>
                    <li class="nav-item">
                      <div class="tm-nav-link-highlight"></div>
                      <a class="nav-link" href="#mytool">MyTool</a>
                    </li>
                    <li class="nav-item">
                      <div class="tm-nav-link-highlight"></div>
                      <a class="nav-link" href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    `;
  
    // Set header content
    document.getElementById('headerContent').innerHTML = headerContent;
  
  
  
    // Mark active page
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-item a');
  
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.parentElement.classList.add('active');
      }
    });
  }
  
  // Panggil fungsi untuk menghasilkan konten header
  generateHeaderContent();
  
  const texts = ['Student', 'Designer', 'Artist'];
  let index = 0;
  const dynamicText = document.getElementById('dynamicText');
  
  function fadeInOut() {
    // Menggunakan GSAP untuk animasi fade out
    gsap.to(dynamicText, { opacity: 0, duration: 0.5, onComplete: () => {
      dynamicText.innerText = `i'M ${texts[index]}`;
      // Menggunakan GSAP untuk animasi fade in
      gsap.to(dynamicText, { opacity: 1, duration: 0.5 });
      index = (index + 1) % texts.length;
    }});
  }
  
  setInterval(fadeInOut, 3000);
  
      // Select all tabs
const tabs = document.querySelectorAll('.tabs a');

// Set the index of the initially active tab
let activeTabIndex = 0;

// Function to switch to the next tab
// Function to switch to the next tab
function switchTab() {
    // Remove 'active' class from all tabs and tab contents
    tabs.forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tabgroup > div').forEach(tabContent => {
        tabContent.style.opacity = '0';
        tabContent.style.display = 'none';
    });

    // Get the next tab index
    activeTabIndex = (activeTabIndex + 1) % tabs.length;

    // Add 'active' class to the next tab
    tabs[activeTabIndex].classList.add('active');

    // Get the target tab content ID from the href attribute
    const targetId = tabs[activeTabIndex].getAttribute('href');

    // Show the target tab content with fade-in animation
    const targetTabContent = document.querySelector(targetId);
    targetTabContent.style.display = 'block';
    setTimeout(() => {
        targetTabContent.style.opacity = '1';
    }, 50);
}


// Set an interval to switch tabs every 5 seconds
const intervalId = setInterval(switchTab, 5000);

// Stop the interval when the user interacts with the tabs
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        clearInterval(intervalId);
    });
});

$(function(){
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();  
    $('.tabs a').click(function(e){
      e.preventDefault();
      var $this = $(this),
          tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
          others = $this.closest('li').siblings().children('a'),
          target = $this.attr('href');
      others.removeClass('active');
      $this.addClass('active');
      $(tabgroup).children('div').hide();
      $(target).show();

      // Scroll to tab content (for mobile)
      if($(window).width() < 992) {
          $('html, body').animate({
              scrollTop: $("#first-tab-group").offset().top
          }, 200);    
      }              
    })

    $('.tm-carousel').slick({
        dots: true,
          infinite: false,
          arrows: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 2,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                  arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                  arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                  arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });  
});

  