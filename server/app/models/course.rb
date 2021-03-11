class Course < ApplicationRecord
  validates :date, presence: true
  validate :send_past_date_error, :send_taken_room_error

  belongs_to :classroom
  belongs_to :formation
  has_many :courses_users
  has_many :users, through: :courses_users

  def students
    users
  end

  def teacher
    formation.user
  end

  def room_available?
    !classroom.booked_dates.include?(date)
  end

  def send_taken_room_error
    unless room_available?
      errors.add(:classroom, "classroom already taken")
    end
  end

  def in_future?
    date > Date.today
  end

  def passed?
    !in_future?
  end

  def send_past_date_error
    unless in_future?
      errors.add(:date, "must be in future!")
    end
  end
end
