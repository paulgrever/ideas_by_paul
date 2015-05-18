class RemoveColumnQualityIdFromIdeas < ActiveRecord::Migration
  def change
    remove_column :ideas, :quality_id
  end
end
