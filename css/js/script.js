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
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-angle-down" aria-hidden="true"></i>',
    prevArrow: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
  });
}); 

const person = document.querySelectorAll('.person-photo');
  person.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      person.forEach((item) => {
        if (item === e.target) {
          item.classList.add('active')
          return
        }
        item.classList.remove('active')
      })
    })
  })
