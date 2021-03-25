json.extract! post, :id, :title, :body, :author_id
json.author post.author.name
json.photo url_for(post.photo) if post.photo.attached?

if post.author.profile_pic.attached?
    json.profilePicURL url_for(post.author.profile_pic)
else
    json.profilePicURL 'https://lazypanda-seeds.s3-us-west-1.amazonaws.com/blank-profile-picture-973460_1280.webp'
end