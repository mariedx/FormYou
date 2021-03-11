class CreateCoursesUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :courses_users do |t|
      t.integer :note
      t.belongs_to :course, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
