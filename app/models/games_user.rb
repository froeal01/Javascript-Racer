# class NumberOfUsers < ActiveRecord::Validations
#     def correct_user_num
#       record.user.length <= 2
#       record.error << "The game must have two players"
#     end
#  end




class GamesUser < ActiveRecord::Base
  # validates_with NumberOfUsers
  belongs_to :game
  belongs_to :user
end
