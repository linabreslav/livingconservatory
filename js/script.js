

// rotate arrow
$( ".dropdownicon" ).click(function() {
    //alert($( this ).css( "transform" ));
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(180deg)");
    } else {
        $(this).css("transform","" );
    }
});

// drop-down toggle 
$( ".dropdownicon" ).click(function() {
  $( "#flexhover1" ).toggle( "slow", function() {
  });
});
