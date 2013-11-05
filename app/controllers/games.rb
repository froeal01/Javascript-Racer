require 'time'

get '/game' do
@game = Game.create!
session[:id]= @game.id
@game.users << User.find(session[:player_1])
@game.users << User.find(session[:player_2])

@player_names =[]
@game.users.each do |x|
  @player_names << x.name
end
erb :game
end


get '/game_board' do

@player_1 = User.find(session[:player_1])
@player_2 = User.find(session[:player_2])
session[:start_time]= Time.now+4



erb :game_board
end

post '/results' do
session[:end_time]=Time.now
@game = Game.find(session[:id])
@game.update_attributes(winner: params[:winner], time: session[:end_time]-session[:start_time])

end