
    var acc = document.getElementsByClassName("service-acc__header");
    var text = document.getElementsByClassName(".service-acc__body.show");

  for (var i = 0; i < acc.length; i++){
      acc[i].onclick = function(){
        this.nextElementSibling.classList.toggle("service-acc__body");
        }
          
      }
  