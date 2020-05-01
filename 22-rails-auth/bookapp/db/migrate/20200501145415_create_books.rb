class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :books do |t|
      t.string :title
      t.text :desc
      t.references :user
      
      t.timestamps
    end
  end
end
