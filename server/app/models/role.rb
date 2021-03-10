class Role < ApplicationRecord
  validates :title, presence: true

  has_many :users
end
