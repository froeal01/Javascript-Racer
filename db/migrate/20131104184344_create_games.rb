class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.string :time
      t.timestamp
    end
  end
end
