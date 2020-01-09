
  $(document).ready(function () {   

    $('li#index').click(function () {
      $('header').show();

           event.preventDefault();
    });
    $('li#spring').click(function () {
        alert("Spring Show!"); 
 
    });
    
});