class Category < ApplicationRecord
  has_many :formations_categories
  has_many :formations, through: :formations_categories
end
