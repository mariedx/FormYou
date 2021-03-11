class CoursesUser < ApplicationRecord
  belongs_to :course
  belongs_to :user

  validate :send_users_number_error, :send_not_student_error, :send_already_subscribed_error

  def student_already_subscribed?
    students_ids = course.students.map do |student|
      student.id
    end
    students_ids.include?(user.id)
  end

  def send_already_subscribed_error
    if student_already_subscribed?
      errors.add(:user, 'already subscribed to this course')
    end
  end

  def max_users_number_reached?
    max_users_number = 20
    course.users.length <= max_users_number
  end

  def send_users_number_error
    unless max_users_number_reached?
      errors.add(:users, "maximum number of students has been reached.")
    end
  end

  def send_not_student_error
    unless user.student?
      errors.add(:user, "must be a student")
    end
  end
end
