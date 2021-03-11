class Course < ApplicationRecord
  validates :date, presence: true
  validate :send_past_date_error

  belongs_to :classroom
  belongs_to :formation

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
