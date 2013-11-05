helpers  do

  def player_validate
    if self == User.where("name=?", name).first
      self
    end
  end

end
