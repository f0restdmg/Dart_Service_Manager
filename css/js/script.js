var acc = document.getElementsByClassName("service-acc__header");
  for (var i = 0; i < acc.length; i++){
      acc[i].onclick = function(){
        this.nextElementSibling.classList.toggle("service-acc__body");
        }
          
      }

 $(document).ready(function(){
  $('.customers__slider').slick({
    vertical : true,
    slidesToShow: 2,
    slidesToScroll: 1
  });
}); 
