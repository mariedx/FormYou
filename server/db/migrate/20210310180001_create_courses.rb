class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.date :date, null: false
      t.belongs_to :classroom, null: false, foreign_key: true
      t.belongs_to :formation, null: false, foreign_key: true

      t.timestamps
    end
  end
end
