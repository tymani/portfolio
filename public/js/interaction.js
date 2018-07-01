$(document).ready(() => {

  $(".project-module").hover(function() {
    $(this.children[0]).css("border", "2px solid magenta");
    // $(this.children[0]).css("background-color", "magenta");
    $(this.children[1]).css("border", "2px solid magenta");
    $(this.children[1]).css("box-shadow", "3px 3px 3px 0px rgba(5,5,5,0.5)");
    $(this.children[1]).css("transform", "translateX(6px)");
    $(this.children[1]).css("transform", "translateY(5px)");
  }, function() {
      $(this.children[0]).css("border", "2px solid black");
      // $(this.children[0]).css("background-color", "white");
      $(this.children[1]).css("border", "2px solid black");
      $(this.children[1]).css("box-shadow", "6.5px 5.45px 3px 0px rgba(5,5,5,0.22)");
      $(this.children[1]).css("transform", "translateX(-6px)");
      $(this.children[1]).css("transform", "translateY(-5px)");

  });

});
