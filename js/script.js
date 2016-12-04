
// hide when page loads
$("#flexhover1").hide();
// hide when page loads
$("#flexhover2").hide();
// hide when page loads
$("#flexhover3").hide();

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
$( ".dropdownicon1" ).click(function() {
  $( "#flexhover1" ).toggle( "slow", function() {
  });
});

// drop-down toggle 2
$( ".dropdownicon2" ).click(function() {
  $( "#flexhover2" ).toggle( "slow", function() {
  });
});

// drop-down toggle 3
$( ".dropdownicon3" ).click(function() {
  $( "#flexhover3" ).toggle( "slow", function() {
  });
});
