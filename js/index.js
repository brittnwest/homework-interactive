$(document).ready(function(){
  $(".additional-text").hide();
  $(".collapse-article").hide();
  $(".expand-article").on("click", function(event){
              event.preventDefault();
  });
  $(".collapse-article").on("click", function(event){
              event.preventDefault();
  });

  $("#myModal").on("show", function(event){
              event.preventDefault();
  });
  $("#form").submit(function(e){
                e.preventDefault();
            });
})


$("#btn btn-primary").click(function(){
  $("#myModal").dialog("close");
})
$("#readMore1").click(function(){
    $("#addText1").slideDown("slow");
    $("#addText1").show();
    $("#readMore1").hide();
    $("#readLess1").show();
});

$("#readLess1").click(function(){
    $("#addText1").slideUp("slow");
    $("#addText1").hide();
    $("#readMore1").show();
    $("#readLess1").hide();

});

$("#readMore2").click(function(){
    $("#addText2").slideDown("slow");
    $("#addText2").show();
    $("#readMore2").hide();
    $("#readLess2").show();
});

$("#readLess2").click(function(){
    $("#addText2").slideUp("slow");
    $("#addText2").hide();
    $("#readMore2").show();
    $("#readLess2").hide();

});

$("#learn-more").click(function(){
  $("#more-about").slideDown("slow");
  $("#more-about").show();
  $("#learn-more").hide();
})

$("#sign-up").click(function(){

         // show Modal
         $('#myModal').modal('show:true');
    });
// $("#readMore2").click(function(){
//   if ($("#addText2").is(":visible")) {
//     $("#addText2").slideUp("slow");
//     $("#addText2").hide();
//     $("#readMore2").html("Read More >>");
//   }
//   else {
//     $("#addText2").slideDown("slow");
//     $("#addText2").show();
//     $("#readMore2").html("Read Less >>");
//   }
// });
