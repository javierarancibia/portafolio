$('#myModal').modal(options)

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
        event.preventDefault();

        var link = this.hash;

        $('html, body').animate({
            scrollTop: $(link).offset().top
          }, 800, function(){
            window.location.hash = link;
          });
      } 
    });
  

       