class CreateFormationsCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :formations_categories do |t|
      t.belongs_to :category
      t.belongs_to :formation
      t.timestamps
    end
  end
end
