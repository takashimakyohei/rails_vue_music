class CreateMusics < ActiveRecord::Migration[5.2]
  def change
    create_table :musics do |t|
      t.string :title,null:false
      t.string :artist,null:false
      t.string :genre,null:false

      t.timestamps
    end
  end
end
