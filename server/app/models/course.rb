class Course < ApplicationRecord
  belongs_to :classroom
  belongs_to :formation
end
