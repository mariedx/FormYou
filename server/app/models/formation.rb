class Formation < ApplicationRecord
  belongs_to :user

  validate :is_user_teacher

  validates :title,
  presence: true,
  length: { minimum: 5 }

  validates :description,
  presence: true,
  length: { in: 10..1000 }

  def is_user_teacher
    unless user.teacher?
      errors.add(:role, "must be teacher!")
    end
  end
end