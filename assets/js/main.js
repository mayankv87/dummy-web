$(document).ready(function() {
    
  
  /* this code is for tab*/
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });


  /* this code is for reading json and show data on html page*/
    var tblData = '';
    var dataAPI = "./assets/js/code-test.json";
    $.getJSON( dataAPI, {
      format: "json"
    })
      .done(function( data ) {
        $.each( data, function( i, item ) {
            console.log(item);
            tblData += "<tr><td>"+ item.name + "</td><td>" + item.apy + "</td><td>" + item.earnings + "</td></tr>";
        });
        var tblHeaders = "<tr><th></th><th>Annual percentage Yield</th><th>Est. earnings for 1 Year</th></tr>";
        tblData = tblHeaders.concat(tblData);
        $('#rates-data').html(tblData);
      });


      /* this code is to show login overlay on click */
        var modal = $('#login');

        $("#login-btn").on('click', function(){
            modal.css('display', 'block'); 
        });

        $(".close").on('click', function(){
            modal.css('display', 'none'); 
        });
});