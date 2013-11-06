$(document).ready(function() {
ready = false

var player1 = new Player($("#player1_strip").data("player-name"));
var player2 = new Player($("#player2_strip").data("player-name"))


game = new Game(player1, player2);
game.noMove(4)

$(".start_sign_in").on('submit', function(event){
  event.preventDefault;
  game.letsGo;
});

  $(".p1winner").hide();
  $(".p2winner").hide();

 $(document).keyup(function(event){
    if (ready)  {
      game.keyup(event.which);
    }
  });


// var counter = 4;
// $(".go").hide();
// var interval = setInterval(function() {
//   $(".countdown").text(counter--);
//   if (counter === -1) {
//     $(".go").show()
//     $(".countdown").hide()
//     explode(".go")

//     clearInterval(interval);
//   }
// }, 1000);

// function declare_winner(player) {
//   var last_square = $(player).find('td:last-child');
//   if (last_square.hasClass("active")) {
//    var winning_player =$(player).data("player-name");
//    $(".game_winner").html(winning_player + " wins!");
//    $.post('/results', {winner: winning_player});
//    $(".quit").html('<a href="/"><button>Quit</button></a>');
//    $(".play_again").html('<a href="/game"><button>Play Again</button></a>');
//   }
// };

// function update_player_position(player) {
//   var active_square = $(player).find(".active");
//   var next_square = active_square.next();
//   var last_square = $('.racer_table').find('td:last-child');
//   active_square.removeClass('active');
//   next_square.addClass('active');
//   if (last_square.hasClass("active")) {
//     $(document).unbind("keyup");
//     declare_winner(player);
//   }
// };


// function explode(o) {
//   var $o = $(o);

//   $o.html($o.text().replace(/([\S])/g, "<span>$1</span>"));
//   $o.css("position", "relative");
//   $("span", $o).each(function(i) {
//     var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
//     var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

//     $(this).css({position: "relative",
//       opacity: 1,
//       fontSize: 12,
//       top: 0,
//       left: 0
//     }).animate({
//       opacity: 0,
//       fontSize: 84,
//       top: newTop,
//       left:newLeft
//     },5000);
//   });
// }

// function prevent_moving(number){
//   if(number == -1){
//    ready = true
//  }
//  else {
//   (number--);
//   setTimeout(function (){ prevent_moving(number)} , 1000);
// }
// };




});
