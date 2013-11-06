function Player(name){
  this.name= name
  this.position = 0
}

Player.prototype.updatePlayerPosition=function(){
    this.position ++;

}