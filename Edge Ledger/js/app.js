function initMap() {

    const loc = { lat: 34.074540, lng: 74.787730 };
    const map = new google.maps.Map(document.querySelector('.map'), {
      center: loc,
      zoom: 12
    });

    const marker = new google.maps.Marker({position:loc, map: map});
  }


// Sticky Menu Opacity when Scroll

window.addEventListener('scroll', () => {
    if(scrollY > 150)
        document.getElementById('navbar').style.opacity = 0.9;
    else
    document.getElementById('navbar').style.opacity = 1;
});

// Smooth Scroll

$(document).ready(function() {
    $('#navbar a, .btn').on('click',function(event) {
        if(this.hash !== '') {
            event.preventDefault();

            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 60
            }, 800);
        }
    });
});