json.extract! user, :id, :email, :name

if user.profile_pic.attached?
    json.profilePicURL url_for(user.profile_pic)
else
    json.profilePicURL 'https://lazypanda-seeds.s3-us-west-1.amazonaws.com/blank-profile-picture-973460_1280.webp'
  
end

