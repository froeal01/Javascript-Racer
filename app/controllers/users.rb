post '/start' do
session.clear
player_1 = User.create(name: params[:player_1])
player_2 =User.create(name: params[:player_2])

session[:player_1]=player_1.id
session[:player_2]=player_2.id

redirect to '/game'
end


