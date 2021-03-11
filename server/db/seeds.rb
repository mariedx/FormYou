# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'date'

puts "$" * 50
puts "Creating the three roles"

Role.create(title: "student")
Role.create(title: "teacher")
Role.create(title: "admin")

puts "$" * 50
puts "Roles created"


puts "$" * 50
puts "Creating three users"

User.create(
  email: "student1@tst.tst",
  first_name: "Élève",
  last_name: "Student",
  password: "123456",
  password_confirmation: "123456",
  role_id: 1
)

User.create(
  email: "teacher1@tst.tst",
  first_name: "Prof",
  last_name: "Teacher",
  password: "123456",
  password_confirmation: "123456",
  role_id: 2
)

User.create(
  email: "admin1@tst.tst",
  first_name: "Admin",
  last_name: "Admin",
  password: "123456",
  password_confirmation: "123456",
  role_id: 3
)

puts "$" * 50
puts "Users created"


puts "$" * 50
puts "Creating single formation"

Formation.create(
  title: "Titre de la formation",
  description: "Ceci est une description sympathique",
  user_id: 2
)

puts "$" * 50
puts "Formation created"

puts "$" * 50
puts "Creating three classrooms"

Classroom.create(name: "Aaha")
Classroom.create(name: "Braaha")
Classroom.create(name: "Cadabraaha")

puts "$" * 50
puts "Classroom created"

puts "$" * 50
puts "Creating course"

Course.create(
  date: Date.parse(Time.now.strftime("%Y-%m-%d")),
  classroom_id: 1,
  formation_id: 1
)

Course.create(
  date: Date.parse("2021-06-20"),
  classroom_id: 1,
  formation_id: 1
)

puts "$" * 50
puts "Courses created"

puts "$" * 50
puts "Creating two categories"

Category.create(title: "design")
Category.create(title: "web development")

puts "$" * 50
puts "Categories created"
