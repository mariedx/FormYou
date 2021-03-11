class Classroom < ApplicationRecord
  validates :name,
    presence: true,
    uniqueness: true

  has_many :courses

  def booked_dates
    booked = []
    courses.each do |course|
      booked.push(course.date)
    end
    booked
  end
end
