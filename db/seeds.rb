# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all

u1 = User.create!(
  name: 'User',
  password: 'password',
  email: 'guest@gmail.com'
)

u2 = User.create!(
  name: 'Cindy',
  password: 'password',
  email: 'kitty@gmail.com'
)

p1 = Post.create!(
  author_id: u1.id,
  title: "Aliquam ultricies neque non lectus",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis metus, porta ut tincidunt et, interdum eget nisi. Maecenas non lacinia dolor, ornare blandit est. Quisque augue sem, dictum eu purus et, ornare facilisis dui. Quisque ultricies gravida leo eu convallis. Nullam luctus non odio at rhoncus. Nulla laoreet sit amet justo sed convallis. Morbi lectus lectus, pellentesque et semper vitae, tincidunt eu justo. Mauris enim lacus, cursus id elit et, vestibulum volutpat quam. Curabitur gravida tortor dolor, quis scelerisque felis fermentum eu."
)