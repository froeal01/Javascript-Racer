class User < ActiveRecord::Base
  validates :name, uniqueness: true
  has_many :games_users
  has_many :games, through: :game_users
end
