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
Subpost.delete_all
Review.delete_all
Like.delete_all

ActiveRecord::Base.connection.tables.each do |t|
  ActiveRecord::Base.connection.reset_pk_sequence!(t)
end



u1 = User.create!(
  name: 'Demo User',
  password: 'password',
  email: 'guest@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/1.jfif')

u1.profile_pic.attach(io: file, filename: '1.jfif')

u2 = User.create!(
  name: 'Cindy Lee',
  password: 'password',
  email: 'kitty@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/216c8e2f8d76c0d42cee38516034d5df.jpg')

u2.profile_pic.attach(io: file, filename: '216c8e2f8d76c0d42cee38516034d5df.jpg')

u3 = User.create!(
  name: 'Panda Man',
  password: 'password',
  email: 'panda@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/70521e688d924112848396ec220a517b.png')

u3.profile_pic.attach(io: file, filename: '70521e688d924112848396ec220a517b.png')


u4 = User.create!(
  name: 'Beta Tester',
  password: 'password',
  email: 'tester@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/download+(1).jfif')

u4.profile_pic.attach(io: file, filename: 'download+(1).jfif')

u5 = User.create!(
  name: 'Lucca Puppers',
  password: 'password',
  email: 'lucca@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/download.jfif')

u5.profile_pic.attach(io: file, filename: 'download.jfif')

u6 = User.create!(
  name: 'Disney Maniac',
  password: 'password',
  email: 'disney@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/images.png')

u6.profile_pic.attach(io: file, filename: 'images.png')

u7 = User.create!(
  name: 'Post King',
  password: 'password',
  email: 'poster@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/profileIcon_snoo6c401ae9-a3ff-4a63-89de-31e86024ca9b-headshot.png')

u7.profile_pic.attach(io: file, filename: 'profileIcon_snoo6c401ae9-a3ff-4a63-89de-31e86024ca9b-headshot.png')

u8 = User.create!(
  name: 'Couch Potato',
  password: 'password',
  email: 'couch@gmail.com'
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/profile_pics/rage-flip-avatar-2.jpg')

u8.profile_pic.attach(io: file, filename: 'rage-flip-avatar-2.jpg')

u9 = User.create!(
  name: 'Bobby Lee',
  password: 'password',
  email: 'bobby@gmail.com'
)

u10 = User.create!(
  name: 'Mathew Burns',
  password: 'password',
  email: 'matt@gmail.com'
)

p1 = Post.create!(
  author_id: u1.id,
  title: "Cutest animal drawings",
  body: "Post your favorite animal drawings here! Hedgehog to start us off. :)."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

p1.photo.attach(io: file, filename: 'cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

r1 = Review.create!(
  author_id: u1.id,
  post_id: p1.id,
  content: "Thanks for the responses!"
)

r2 = Review.create!(
  author_id: u2.id,
  post_id: p1.id,
  content: "The pictures made me smile :)"
)

r3 = Review.create!(
  author_id: u2.id,
  post_id: p1.id,
  content: "Please share more!"
)

p2 = Post.create!(
  author_id: u2.id,
  title: "Foods that are too cute to eat",
  body: "Share your experiences with foods that you feel guilty eating because they're too cute!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute-marshmallows.png')

p2.photo.attach(io: file, filename: 'cute-marshmallows.png')

r4 = Review.create!(
  author_id: u1.id,
  post_id: p2.id,
  content: "I would never be able to eat any of these"
)

r5 = Review.create!(
  author_id: u3.id,
  post_id: p2.id,
  content: "I want to learn how to make these!"
)

r6 = Review.create!(
  author_id: u3.id,
  post_id: p2.id,
  content: "Going to spend forever watching youtube tutorials!"
)

r7 = Review.create!(
  author_id: u4.id,
  post_id: p2.id,
  content: "Now these are the foods that deserve instagram features"
)

r8 = Review.create!(
  author_id: u4.id,
  post_id: p2.id,
  content: "I would totally try out the foods setting on my phone camera if I ever saw these in real life"
)

p3 = Post.create!(
  author_id: u3.id,
  title: "Worst pickup lines",
  body: "We've all heard or said them. Share your most memorable ones here!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/pickup-thumb.jpg')

p3.photo.attach(io: file, filename: 'pickup-thumb.jpg')

r10 = Review.create!(
  author_id: u3.id,
  post_id: p3.id,
  content: "Thanks for participating! Made my day"
)

r9 = Review.create!(
  author_id: u4.id,
  post_id: p3.id,
  content: "Omg. Please tell me guys don't actually say these horrid pickup lines"
)

r11 = Review.create!(
  author_id: u1.id,
  post_id: p3.id,
  content: "Great icebreakers for sure"
)

p4 = Post.create!(
  author_id: u3.id,
  title: "Funniest memes ever",
  body: "Share your favorites here!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Cat+Meme+Netflix+Funny+1000x666.png')

p4.photo.attach(io: file, filename: 'Cat+Meme+Netflix+Funny+1000x666.png')

r12 = Review.create!(
  author_id: u1.id,
  post_id: p4.id,
  content: "I feel like memes will never go away"
)

r13 = Review.create!(
  author_id: u2.id,
  post_id: p4.id,
  content: "Brings back so many memories"
)

r14 = Review.create!(
  author_id: u4.id,
  post_id: p4.id,
  content: "Shocked no one posted up that one with the cute baby making a fist"
)

p5 = Post.create!(
  author_id: u4.id,
  title: "Disney animals re-created into humans!",
  body: "People are so creative!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/disney+animals+to+people/bambi.jpg')

p5.photo.attach(io: file, filename: 'bambi.jpg')

r15 = Review.create!(
  author_id: u5.id,
  post_id: p5.id,
  content: "Gonna binge disney movies tonight for sure~!"
)

r16 = Review.create!(
  author_id: u1.id,
  post_id: p5.id,
  content: "Disney will never get old"
)

r17 = Review.create!(
  author_id: u2.id,
  post_id: p5.id,
  content: "Classics ftw!"
)

p6 = Post.create!(
  author_id: u5.id,
  title: "Hilariously bad movie plot explanations. Go!",
  body: "A Creepy Old Man Finally Achieves His Goal Of Being Able To Touch A 14 Year Old Boy"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/A+Creepy+Old+Man+Finally+Achieves+His+Goal+Of+Being+Able+To+Touch+A+14+Year+Old+Boy.jpg')

p6.photo.attach(io: file, filename: 'A+Creepy+Old+Man+Finally+Achieves+His+Goal+Of+Being+Able+To+Touch+A+14+Year+Old+Boy.jpg')

r18 = Review.create!(
  author_id: u1.id,
  post_id: p6.id,
  content: "I'm never going to look at these movies the same way."
)

r19 = Review.create!(
  author_id: u2.id,
  post_id: p6.id,
  content: "Omg. Hilarious"
)

r20 = Review.create!(
  author_id: u3.id,
  post_id: p6.id,
  content: "lol. Way too true"
)

r20 = Review.create!(
  author_id: u4.id,
  post_id: p6.id,
  content: "My mind has been wrecked"
)

p7 = Post.create!(
  author_id: u6.id,
  title: "Brutally honest motivational quotes",
  body: "A little progress everyday..."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Brutally+honest+motivational+quotes/A+little+progrss+every+day.jpg')

p7.photo.attach(io: file, filename: 'A+little+progrss+every+day.jpg')

r21 = Review.create!(
  author_id: u4.id,
  post_id: p7.id,
  content: "Made me both laugh and cry inside"
)

r22 = Review.create!(
  author_id: u5.id,
  post_id: p7.id,
  content: "Struck a little too close to home..."
)

r23 = Review.create!(
  author_id: u1.id,
  post_id: p7.id,
  content: "Way too truthful for me"
)

r24 = Review.create!(
  author_id: u2.id,
  post_id: p7.id,
  content: "At least I'm not the only one that thinks this way"
)

p8 = Post.create!(
  author_id: u7.id,
  title: "Covid tweets that are just a little too real",
  body: "Made me cringe a little inside."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/Bad+habits.jpg')

p8.photo.attach(io: file, filename: 'Bad+habits.jpg')

r25 = Review.create!(
  author_id: u6.id,
  post_id: p8.id,
  content: "This is way too depressing"
)

r26 = Review.create!(
  author_id: u8.id,
  post_id: p8.id,
  content: "Omg. It's already been a year"
)

r27 = Review.create!(
  author_id: u9.id,
  post_id: p8.id,
  content: "God. When will things gets better?"
)

r28 = Review.create!(
  author_id: u10.id,
  post_id: p8.id,
  content: "At least vaccinations are more available now"
)

r29 = Review.create!(
  author_id: u1.id,
  post_id: p8.id,
  content: "Malls are finally open!"
)

p9 = Post.create!(
  author_id: u8.id,
  title: "Advertising fails",
  body: "Makes me wonder if they did this on purpose."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Advertising+fails/Choose+abortion.+Life+kills.jpg')

p9.photo.attach(io: file, filename: 'Choose+abortion.+Life+kills.jpg')

r30 = Review.create!(
  author_id: u1.id,
  post_id: p9.id,
  content: "My brain hurts now!"
)

r31 = Review.create!(
  author_id: u2.id,
  post_id: p9.id,
  content: "I just destroyed my throat wheezing and laughing at all of these. I need water."
)

r32 = Review.create!(
  author_id: u3.id,
  post_id: p9.id,
  content: "It's like Dr Seuss got together with Yoda to write some of these."
)

r33 = Review.create!(
  author_id: u4.id,
  post_id: p9.id,
  content: "So many of these are due to people not understanding that westerners read left to right, not top to bottom."
)

r34 = Review.create!(
  author_id: u5.id,
  post_id: p9.id,
  content: "I actually thought my head would explode reading these."
)

r35 = Review.create!(
  author_id: u6.id,
  post_id: p9.id,
  content: "Why is it that when we make signs we completely forget that we read left to right?"
)


s1 = Subpost.create!(
  author_id: u1.id, 
  post_id: p1.id, 
  title: "Dino go rawr rawr!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/animal+drawings/40-408946_drawing-bedrooms-kawaii-kawaii-cute-animal-drawings.png')

s1.photo.attach(io: file, filename: '40-408946_drawing-bedrooms-kawaii-kawaii-cute-animal-drawings.png')

s5 = Subpost.create!(
  author_id: u1.id, 
  post_id: p1.id, 
  title: "Pandas ftw :)"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/animal+drawings/412658.jpg')

s5.photo.attach(io: file, filename: '412658.jpg')

s6 = Subpost.create!(
  author_id: u2.id, 
  post_id: p1.id, 
  title: "Someone needs to make this!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/animal+drawings/49-497964_cute-animal-drawings-kawaii.png')

s6.photo.attach(io: file, filename: '49-497964_cute-animal-drawings-kawaii.png')

s7 = Subpost.create!(
  author_id: u2.id, 
  post_id: p1.id, 
  title: "Someone was bored during class. Haha"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/animal+drawings/cute-animal-pencil-drawings-iantha-naicker-fb2.jpg')

s7.photo.attach(io: file, filename: 'cute-animal-pencil-drawings-iantha-naicker-fb2.jpg')

s8 = Subpost.create!(
  author_id: u3.id, 
  post_id: p1.id, 
  title: "He looks so real!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/animal+drawings/cute-pug-olga-shvartsur.jpg')

s8.photo.attach(io: file, filename: 'cute-pug-olga-shvartsur.jpg')

s2 = Subpost.create!(
  author_id: u1.id, 
  post_id: p2.id, 
  title: "This would make me actually eat veggies"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute+foods/07c747201a2dc4f6569d0c91e981db2a.jpg')

s2.photo.attach(io: file, filename: '07c747201a2dc4f6569d0c91e981db2a.jpg')

s9 = Subpost.create!(
  author_id: u1.id, 
  post_id: p2.id, 
  title: "Peenngguuuuuuin!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute+foods/Animal-Shaped-Snacks.jpg')

s9.photo.attach(io: file, filename: 'Animal-Shaped-Snacks.jpg')

s10 = Subpost.create!(
  author_id: u3.id, 
  post_id: p2.id, 
  title: "Oink oink"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute+foods/cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

s10.photo.attach(io: file, filename: 'cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

s11 = Subpost.create!(
  author_id: u4.id, 
  post_id: p2.id, 
  title: "Let's eat them aaaaaall!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute+foods/foodart02.jpg')

s11.photo.attach(io: file, filename: 'foodart02.jpg')

s12 = Subpost.create!(
  author_id: u4.id, 
  post_id: p2.id, 
  title: "Doooooggies!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/cute+foods/puppybuns.jpg')

s12.photo.attach(io: file, filename: 'puppybuns.jpg')

s3 = Subpost.create!(
  author_id: u2.id, 
  post_id: p3.id, 
  title: "I would be so offended..."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/pickup+lnes/11_1379429185_540x540.jpg')

s3.photo.attach(io: file, filename: '11_1379429185_540x540.jpg')

s13 = Subpost.create!(
  author_id: u2.id, 
  post_id: p3.id, 
  title: "I can't look at priests the same way"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/pickup+lnes/84064611.jpg')

s13.photo.attach(io: file, filename: '84064611.jpg')

s14 = Subpost.create!(
  author_id: u3.id, 
  post_id: p3.id, 
  title: "How geeks flirst"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/pickup+lnes/a5bWEMy_460s.jpg')

s14.photo.attach(io: file, filename: 'a5bWEMy_460s.jpg')

s15 = Subpost.create!(
  author_id: u4.id, 
  post_id: p3.id, 
  title: "Ew. Just ew."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/pickup+lnes/cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

s15.photo.attach(io: file, filename: 'cute-little-hedgehog-floral-summer-bouquet-cute-little-hedgehog-girl-floral-bouquet-152001765.jpg')

s16 = Subpost.create!(
  author_id: u1.id, 
  post_id: p3.id, 
  title: "Ok. This would've made me laugh"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/pickup+lnes/maxresdefault.jpg')

s16.photo.attach(io: file, filename: 'maxresdefault.jpg')

s4 = Subpost.create!(
  author_id: u3.id, 
  post_id: p4.id, 
  title: "I was that younger sibling..."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/meme/BrotherQuotesMemes.jpg')

s4.photo.attach(io: file, filename: 'rotherQuotesMemes.jpg')

s17 = Subpost.create!(
  author_id: u3.id, 
  post_id: p4.id, 
  title: "...and then you end up with none"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/meme/animalmemes-14.jpg')

s17.photo.attach(io: file, filename: 'animalmemes-14.jpg')

s18 = Subpost.create!(
  author_id: u4.id, 
  post_id: p4.id, 
  title: "Been there. Done that."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/meme/funny-teacher-meme-1531500140.jpg')

s18.photo.attach(io: file, filename: 'funny-teacher-meme-1531500140.jpg')

s19 = Subpost.create!(
  author_id: u1.id, 
  post_id: p4.id, 
  title: "That's how I defend myelf each time I stuff my face."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/meme/more-the-merrier-31380-2.webp')

s19.photo.attach(io: file, filename: 'more-the-merrier-31380-2.webp')

s20 = Subpost.create!(
  author_id: u2.id, 
  post_id: p4.id, 
  title: "Just keep smiling..."
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/meme/workmemes.jpg')

s20.photo.attach(io: file, filename: 'workmemes.jpg')

s21 = Subpost.create!(
  author_id: u1.id, 
  post_id: p5.id, 
  title: "Just want to pinch their cheeks!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/disney+animals+to+people/chip%2Bdale.jpg')

s21.photo.attach(io: file, filename: 'chip%2Bdale.jpg')


s22 = Subpost.create!(
  author_id: u2.id, 
  post_id: p5.id, 
  title: "He was always my favorite <3"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/disney+animals+to+people/flounder.jpg')

s22.photo.attach(io: file, filename: 'flounder.jpg')

s23 = Subpost.create!(
  author_id: u3.id, 
  post_id: p5.id, 
  title: "Jungle Book ftw"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/disney+animals+to+people/jungle+book.jpg')

s23.photo.attach(io: file, filename: 'jungle+book.jpg')

s24 = Subpost.create!(
  author_id: u4.id, 
  post_id: p5.id, 
  title: "I just want to snuggle Eeyore"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/disney+animals+to+people/tigger+%2B+eeyore.jpg')

s24.photo.attach(io: file, filename: 'tigger+%2B+eeyore.jpg')

s25 = Subpost.create!(
  author_id: u6.id, 
  post_id: p5.id, 
  title: "Give him some honey!"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/disney+animals+to+people/winnie+the+pooh.jpg')

s25.photo.attach(io: file, filename: 'winnie+the+pooh.jpg')

s26 = Subpost.create!(
  author_id: u6.id, 
  post_id: p6.id, 
  title: "A group Of midgets go on a hike to get rid of jewelry"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/A+Group+Of+Midgets+Go+On+A+Hike+To+Get+Rid+Of+Jewelry.jpg')

s26.photo.attach(io: file, filename: 'A+Group+Of+Midgets+Go+On+A+Hike+To+Get+Rid+Of+Jewelry.jpg')

s27 = Subpost.create!(
  author_id: u6.id, 
  post_id: p6.id, 
  title: "A teenage girl marries a foot fetishist to escape her abusive family"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/A+Teenage+Girl+Marries+A+Foot+Fetishist+To+Escape+Her+Abusive+Family.jpg')

s27.photo.attach(io: file, filename: 'A+Teenage+Girl+Marries+A+Foot+Fetishist+To+Escape+Her+Abusive+Family.jpg')

s28 = Subpost.create!(
  author_id: u1.id, 
  post_id: p6.id, 
  title: "Everyone tries the ice bucket challenge"
)

file = open('https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/Everyone+Tries+The+Ice+Bucket+Challenge.jpg')

s28.photo.attach(io: file, filename: 'A+Teenage+Girl+Marries+A+Foot+Fetishist+To+Escape+Her+Abusive+Family.jpg')

s29 = Subpost.create!(
  author_id: u1.id, 
  post_id: p6.id, 
  title: "Guy's wife dies so he gets high"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/Guy's+Wife+Dies+So+He+Gets+High.jpg")

s29.photo.attach(io: file, filename: "Guy's+Wife+Dies+So+He+Gets+High.jpg")

s30 = Subpost.create!(
  author_id: u2.id, 
  post_id: p6.id, 
  title: "Older sister ruins younger sister's chances of appearing on television"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/Older+Sister+Ruins+Younger+Sister's+Chances+Of+Appearing+On+Television.jpg")

s30.photo.attach(io: file, filename: "Older+Sister+Ruins+Younger+Sister's+Chances+Of+Appearing+On+Television.jpg")

s31 = Subpost.create!(
  author_id: u3.id, 
  post_id: p6.id, 
  title: "Rock brings rock to a rock"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/Rock+Brings+Rock+To+A+Rock.jpg")

s31.photo.attach(io: file, filename: "Rock+Brings+Rock+To+A+Rock.jpg")

s32 = Subpost.create!(
  author_id: u4.id, 
  post_id: p6.id, 
  title: "Skinny kid makes a black friend, father doesn’t approve"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Hilariously+bad+movie+plot+explanations/Skinny+Kid+Makes+A+Black+Friend%2C+Father+Doesn%E2%80%99t+Approve.jpg")

s32.photo.attach(io: file, filename: "Skinny+Kid+Makes+A+Black+Friend%2C+Father+Doesn%E2%80%99t+Approve.jpg")

s33 = Subpost.create!(
  author_id: u1.id, 
  post_id: p7.id, 
  title: "I can and I will"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Brutally+honest+motivational+quotes/I+can+and+I+will.jpg")

s33.photo.attach(io: file, filename: "I+can+and+I+will.jpg")

s34 = Subpost.create!(
  author_id: u1.id, 
  post_id: p7.id, 
  title: "Prove them wrong"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Brutally+honest+motivational+quotes/Prove+them+wrong.jpg")

s34.photo.attach(io: file, filename: "Prove+them+wrong.jpg")

s35 = Subpost.create!(
  author_id: u2.id, 
  post_id: p7.id, 
  title: "Stop hating yourself"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Brutally+honest+motivational+quotes/Stop+hating+yourself.jpg")

s35.photo.attach(io: file, filename: "Stop+hating+yourself.jpg")

s36 = Subpost.create!(
  author_id: u3.id, 
  post_id: p7.id, 
  title: "Stop wishing, start doing"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Brutally+honest+motivational+quotes/Stop+wishing%2C+start+doing.jpg")

s36.photo.attach(io: file, filename: "Stop+wishing%2C+start+doing.jpg")

s37 = Subpost.create!(
  author_id: u6.id, 
  post_id: p7.id, 
  title: "Your only limit is you"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Brutally+honest+motivational+quotes/Your+only+limit+is+you.jpg")

s37.photo.attach(io: file, filename: "Your+only+limit+is+you.jpg")

s38 = Subpost.create!(
  author_id: u9.id, 
  post_id: p8.id, 
  title: "Habits are so hard to stop"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/Habits+are+hard+to+stop.jpg")

s38.photo.attach(io: file, filename: "Habits+are+hard+to+stop.jpg")

s39 = Subpost.create!(
  author_id: u10.id, 
  post_id: p8.id, 
  title: "Too true..."
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/Too+true....jpg")

s39.photo.attach(io: file, filename: "Too+true....jpg")

s40 = Subpost.create!(
  author_id: u10.id, 
  post_id: p8.id, 
  title: "I can relate. Haha."
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/I+can+relate.jpg")

s40.photo.attach(io: file, filename: "I+can+relate.jpg")

s41 = Subpost.create!(
  author_id: u1.id, 
  post_id: p8.id, 
  title: "I can't believe there was a shortage."
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/I+can't+believe+there+was+a+shortage.jpg")

s41.photo.attach(io: file, filename: "I+can't+believe+there+was+a+shortage.jpg")

s42 = Subpost.create!(
  author_id: u2.id, 
  post_id: p8.id, 
  title: "I'm not complaining."
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/I'm+not+complaining.jpg")

s42.photo.attach(io: file, filename: "I'm+not+complaining.jpg")

s43 = Subpost.create!(
  author_id: u2.id, 
  post_id: p8.id, 
  title: "Just another day..."
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/Just+another+day.jpg")

s43.photo.attach(io: file, filename: "Just+another+day.jpg")

s44 = Subpost.create!(
  author_id: u3.id, 
  post_id: p8.id, 
  title: "One benefit from Covid. At least to me. Haha"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/One+benefit+from+Covid.jpg")

s44.photo.attach(io: file, filename: "One+benefit+from+Covid.jpg")

s45 = Subpost.create!(
  author_id: u4.id, 
  post_id: p8.id, 
  title: "One year later"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/One+year+later.jpg")

s45.photo.attach(io: file, filename: "One+year+later.jpg")

s46 = Subpost.create!(
  author_id: u5.id, 
  post_id: p8.id, 
  title: "Too feral for society"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/covid/Too+feral+for+society.jpg")

s46.photo.attach(io: file, filename: "Too+feral+for+society.jpg")

s47 = Subpost.create!(
  author_id: u1.id, 
  post_id: p9.id, 
  title: "Don't do it"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Advertising+fails/Don't+do+it.jpg")

s47.photo.attach(io: file, filename: "Don't+do+it.jpg")

s48 = Subpost.create!(
  author_id: u2.id, 
  post_id: p9.id, 
  title: "Well... that got my attention"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Advertising+fails/Well...+that+got+my+attention.jpg")

s48.photo.attach(io: file, filename: "Well...+that+got+my+attention.jpg")

s49 = Subpost.create!(
  author_id: u3.id, 
  post_id: p9.id, 
  title: "He scares me, too"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Advertising+fails/He+scares+me%2C+too.jpg")

s49.photo.attach(io: file, filename: "Advertising+fails/He+scares+me%2C+too.jpg")

s50 = Subpost.create!(
  author_id: u7.id, 
  post_id: p9.id, 
  title: "I would be insulted if they were talking about my children"
)

file = open("https://lazypanda-seeds.s3-us-west-1.amazonaws.com/Advertising+fails/I+would+be+insulted+if+they+were+talking+about+my+children.jpg")

s50.photo.attach(io: file, filename: "I+would+be+insulted+if+they+were+talking+about+my+children.jpg")


like2 = Like.create!(
    author_id: u2.id,
    likeable_type: 'Post',
    likeable_id: p1.id,
)

like3 = Like.create!(
    author_id: u3.id,
    likeable_type: 'Post',
    likeable_id: p1.id,
)


like5 = Like.create!(
    author_id: u4.id,
    likeable_type: 'Post',
    likeable_id: p3.id,
)

like6 = Like.create!(
    author_id: u6.id,
    likeable_type: 'Post',
    likeable_id: p4.id,
)

like7 = Like.create!(
    author_id: u6.id,
    likeable_type: 'Post',
    likeable_id: p6.id,
)

like8 = Like.create!(
    author_id: u1.id,
    likeable_type: 'Subpost',
    likeable_id: s12.id,
)

like9 = Like.create!(
    author_id: u4.id,
    likeable_type: 'Subpost',
    likeable_id: s30.id,
)


