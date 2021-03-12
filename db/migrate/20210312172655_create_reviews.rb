class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :content, null: false
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
  end
end
