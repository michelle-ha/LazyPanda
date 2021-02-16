# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'


User.delete_all
Post.delete_all

u1 = User.create!(
  name: 'Demo User',
  password: 'password',
  email: 'guest@gmail.com'
)

u2 = User.create!(
  name: 'Cindy Lee',
  password: 'password',
  email: 'kitty@gmail.com'
)

u3 = User.create!(
  name: 'Panda Man',
  password: 'password',
  email: 'panda@gmail.com'
)

p1 = Post.create!(
  author_id: u1.id,
  title: "Cutest animal drawings",
  body: "Post your favorite animal drawings here! Hedgehog to start us off. :)."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

p1.photo.attach(io: file, filename: 'cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

p2 = Post.create!(
  author_id: u2.id,
  title: "Foods that are too cute to eat",
  body: "Share your experiences with foods that you feel guilty eating because they're too cute!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute-marshmallows.png')

p2.photo.attach(io: file, filename: 'cute-marshmallows.png')

p3 = Post.create!(
  author_id: u3.id,
  title: "Worst pickup lines",
  body: "We've all heard or said them. Share your most memorable ones here!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/pickup-thumb.jpg')

p3.photo.attach(io: file, filename: 'pickup-thumb.jpg')

p4 = Post.create!(
  author_id: u3.id,
  title: "Funniest memes ever",
  body: "Share your favorites here!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Cat+Meme+Netflix+Funny+1000x666.png')

p4.photo.attach(io: file, filename: 'Cat+Meme+Netflix+Funny+1000x666.png')