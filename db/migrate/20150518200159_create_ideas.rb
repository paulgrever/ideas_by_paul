class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :title
      t.string :body
      t.integer :quality_id
      t.timestamps null: false
    end
  end
end
