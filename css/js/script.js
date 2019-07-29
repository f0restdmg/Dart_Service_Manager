window.onload = function() {
    let acc = document.getElementsByClassName("service-acc__header");
    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.nextElementSibling.classList.toggle("service-acc__body");
        }
    }

    let burger_btn = document.querySelector('.burger-button');
    let burger_menu = document.querySelector('.menu');
    burger_btn.addEventListener('click', function() {
        burger_menu.classList.toggle('menu');
        burger_menu.classList.toggle('burger-menu');

    })


    $('.customers__slider').slick({
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: '<i class="fa fa-angle-down" aria-hidden="true"></i>',
        prevArrow: '<i class="fa fa-angle-up" aria-hidden="true"></i>',
    });


    let person = document.querySelectorAll('.person-photo');
    person.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            person.forEach((item) => {
                if (item === e.target) {
                    item.classList.add('active');
                    return;
                }
                item.classList.remove('active');
            });
        });
    });
}
