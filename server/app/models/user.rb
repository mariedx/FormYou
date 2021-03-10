class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JwtDenylist

  validates :is_validated_by_admin, inclusion: { in: [ true, false ] }
  validates_presence_of :email, :first_name, :last_name, :role

  has_many :formations

  belongs_to :role

  def student?
    role.title == "student"
  end

  def teacher?
    role.title == "teacher"
  end

  def admin?
    role.title == "admin"
  end
end
