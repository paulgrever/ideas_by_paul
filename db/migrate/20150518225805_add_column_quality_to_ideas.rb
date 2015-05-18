class AddColumnQualityToIdeas < ActiveRecord::Migration
  def change
    add_column :ideas, :quality, :integer, :default => 0
  end
end
