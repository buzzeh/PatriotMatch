

$(function() {

    var pageNumber = 1;
    $("#NPButton").click(goToNext);
    $("#PPButton").click(goToPrevious);
    
    $('input[type=radio]').click(function(){
       //$('#logger').html( $('#logger').html() + '\n' + 'changed');
       var name = $(this).attr('name');       
      // $('#logger').html( $('#logger').html() + '\n' + name);
       $('input[type=radio][name=' + name +']').next('label').removeClass('selected');
       $(this).next().addClass('selected');
    });
    function goToNext() {
        if (pageNumber < 3)
            pageNumber++;
        if (pageNumber == 2) {
            $("#page1").fadeOut( function(){
                $("#page2").fadeIn();    
            } );
            
            $("#NPButton").fadeOut( function() {
                 $("#NPButton").fadeIn();
                   $("#PPButton").fadeIn();
            });
            }
        if (pageNumber == 3) {
            $("#page2").fadeOut( function() {
                  $("#page3").fadeIn();
            });
            $("#NPButton").fadeOut();
            $("#PPButton").fadeOut( function() {
                  $("#PPButton").fadeIn();
            });
        }
    }

    function goToPrevious() {
        if (pageNumber == 2) {
            $("#page2").fadeOut( function(){
                     $("#page1").fadeIn();
            });
       
            $("#NPButton").fadeOut();
            $("#PPButton").fadeOut( function() {
                $("#NPButton").fadeIn();
            });
            pageNumber--;
        }
        if (pageNumber == 3) {
            $("#page3").fadeOut( function() {
                       $("#page2").fadeIn();
            });
            $("#PPButton").fadeOut( function(){
                    $("#PPButton").fadeIn();
                    $("#NPButton").fadeIn();
            });
            pageNumber--;
        }
    }
});