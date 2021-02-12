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

p2 = Post.create!(
  author_id: u2.id,
  title: "Vestibulum eu viverra mauris. In non risus sollicitudin, sagittis ex",
  body: "Sed sed nunc eget leo vehicula cursus. Cras maximus justo sit amet ex sagittis, et sollicitudin dolor rhoncus. Quisque quis pellentesque sapien. Nullam sem nibh, consectetur nec dolor eu, pretium porttitor lectus. In at vulputate tellus. Phasellus nec diam risus. Sed in odio ipsum. Morbi nec quam mi. Donec posuere lobortis ornare. Cras iaculis condimentum odio, gravida fermentum libero gravida sit amet. Suspendisse feugiat sodales dolor, ullamcorper viverra nulla ullamcorper nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur convallis, leo pulvinar accumsan tincidunt, ex leo tristique eros, vitae tempus urna lectus et quam.

  Proin iaculis facilisis orci. Maecenas imperdiet, magna vitae pretium lobortis, eros massa consectetur erat, id imperdiet leo augue vulputate augue. In sodales mi eget sagittis viverra. Vestibulum volutpat mollis euismod. Praesent dictum, metus eu commodo maximus, libero ligula dignissim mi, vitae tempor ante ipsum in ligula. Pellentesque tortor neque, commodo eget porttitor eu, euismod et nisi. Quisque pharetra nisl vel lorem hendrerit, a maximus nisl tincidunt."
)