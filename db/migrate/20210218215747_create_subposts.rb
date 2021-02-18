class CreateSubposts < ActiveRecord::Migration[5.2]
  def change
    create_table :subposts do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :post_id, null: false
      t.timestamps
    end
    add_index :subposts, :post_id
    add_index :subposts, :author_id
  end
end
