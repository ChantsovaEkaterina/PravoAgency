$(document).ready(function() {
  function showModal(id) {
    $("#modal").css("display", "block");

    if (id % 2 == 0) {
      $("#modal").addClass("modal-left");
      $("#modal-close>img").attr("src", "images/modal-left.png");
      $(".services-block.first").css("visibility", "hidden");
      $(".services-block.third").css("visibility", "hidden");
    }
    else {
      $("#modal").addClass("modal-right");
      $("#modal>div").addClass("col-sm-offset-6");
      $("#modal-close>img").attr("src", "images/modal-right.png");
      $(".services-block.second").css("visibility", "hidden");
      $(".services-block.forth").css("visibility", "hidden");
    };

    var text = "";

    switch (id) {
      case 1:
        text = $(".services-block.first .services-header").html();
        break;
      case 2:
        text = $(".services-block.second .services-header").html();
        break;
      case 3:
        text = $(".services-block.third .services-header").html();
        break;
      case 4:
        text = $(".services-block.forth .services-header").html();
        break;
    };

    $("#modal-service-header").html(text);

  }

  function closeModal() {
    if ($("#modal").hasClass("modal-left")) {
      $("#modal").removeClass("modal-left");
    };
    if ($("#modal").hasClass("modal-right")) {
      $("#modal").removeClass("modal-right");
    };
    if ($("#modal>div").hasClass("col-sm-offset-6")) {
      $("#modal>div").removeClass("col-sm-offset-6");
    };

    $("#modal").css("display", "none");
    $(".services-block").css("visibility", "visible");
  }

  $(window).resize(function(){
    if (!$("modal").is(':visible')) {
      $(".services-block").css("visibility", "visible");
      $("#modal").hide();
    }
  });

  $("#info1").click(function(){
    showModal(1);
  });
  $("#info2").click(function(){
    showModal(2);
  });
  $("#info3").click(function(){
    showModal(3);
  });
  $("#info4").click(function(){
    showModal(4);
  });
  $("#modal-close").click(function(){
    closeModal();
  });
});
