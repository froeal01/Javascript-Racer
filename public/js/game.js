function Game(player1, player2){
  this.player1 = player1;
  this.player2 = player2;

}

Game.prototype.keyup = function(event){
    if (event===49){
      this.player1.updatePlayerPosition();
      this.render(this.player1, $('#player1_strip'));
      if (this.player1.position === 22){
        this.finish(this.player1.name);
      }
    }
    if (event===50){
      this.player2.updatePlayerPosition();
      this.render(this.player2, $('#player2_strip'));
         if (this.player2.position === 22){
        this.finish(this.player2.name);
      }
    }
}

Game.prototype.render = function(player,row){
  $(row.children("td")).removeClass('active');
  $(row.children()).eq(player.position).addClass('active');

}

Game.prototype.finish = function(player){
$(document).unbind("keyup");
$(".game_winner").html(player + " is the winner!");
$.post('/results',{winner: player});
$(".quit").html("<a href='/'><button>Quit</button></a>");
$(".play_again").html("<a href='/game_board'><button>Play Again</button></a>");
}




Game.prototype.letsGo = function(){
$.post('/game')
}

Game.prototype.noMove = function(number){
    if(number == -1){
    ready = true
 }
 else { 
  this.countDown(number);
  (number--);
  console.log(this)
  setTimeout(function() { game.noMove(number)} , 1000);
}
};

Game.prototype.countDown = function(number){
$(".go").hide();
var interval = setInterval(function() {
  $(".countdown").text(number);
  if (number === 0) {
    $(".go").show()
    $(".countdown").hide()
    explode(".go")

    clearInterval(interval);
  }
}, 1000);

}


function explode(o) {
  var $o = $(o);

  $o.html($o.text().replace(/([\S])/g, "<span>$1</span>"));
  $o.css("position", "relative");
  $("span", $o).each(function(i) {
    var newTop = Math.floor(Math.random()*500)*((i%2)?1:-1);
    var newLeft = Math.floor(Math.random()*500)*((i%2)?1:-1);

    $(this).css({position: "relative",
      opacity: 1,
      fontSize: 12,
      top: 0,
      left: 0
    }).animate({
      opacity: 0,
      fontSize: 84,
      top: newTop,
      left:newLeft
    },5000);
  });
}










