$(window).on('resize',imageGrid);
$(window).ready(imageGrid);

function imageGrid() {
    var $vw = $('.wrapper').height();
    var $imageEach = $('.image-grid-each');
    var image = $('.image-grid-each img');
    // var img_height = image.height();
    // var img_width = image.width();
    // var img_diff = img_height - img_width;

        // slice every 3 images to make a row.
        for (var i = 0; i < $imageEach.length; i += 3) {
            $imageEach.slice(i, i+3).wrapAll("<div class='image-grid-slice'></div>");
            }
        //adjust the margin according to screen size.
        if ($vw < 700) {
            $($imageEach).css('margin','10px 5px');
        }
        else if ($vw > 700) {
            $($imageEach).css('margin','20px 10px');
        }
    }


    // $('.image-grid-each').each(function(i){
    //     var $object_bottom = $(this).offset().top + $(this).height();
    //     var $object_right = $(this).offset().left + $(this).width();
    //     var $object_top = $(this).offset().top;
    //
    //     if($vw < $object_bottom){
    //         $(this).css({
    //
    //         });
    //     }
    //     console.log($object_right);
    // });

$(function() {

    $("html, body").mousewheel(function(event, delta) {
        var mult = 1;
        var $this = $(this);
        if (event.timeStamp - $this.data('oldtimeStamp') < 1000) {
            //calculate easing here
            mult = 1000 / (event.timeStamp - $this.data('oldtimeStamp'));
        }
        $this.data('oldtimeStamp', event.timeStamp);
        this.scrollLeft -= (delta) * mult;
        event.preventDefault();
    });
});


function sidebarTog(){
$('.chap-title').hide();
  $(".sidebar-wrapper").hover(function(e) {
      e.preventDefault();
      $(".wrapper, .sidebar-nav, .sidebar-wrapper, .sidebar-line").toggleClass("toggled");
      var sidebarLen = $('.sidebar-wrapper').width();
      var sidebar = $('.sidebar-wrapper');
    //    console.log ($('.sidebar-wrapper').width());
      if(sidebarLen < 50){
        //  $(sidebar).css('border','3px solid red');
         $(".chap-title").show();
      }
      if(sidebarLen > 50){
        $(".chap-title").hide();
      }
  });
}

$( document ).ready(function() {
sidebarTog();
imageGrid();
});
