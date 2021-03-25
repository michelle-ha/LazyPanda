
json.subpost do 
  json.extract! @subpost, :id, :title, :author_id, :post_id
  json.likeIds @subpost.like_ids

end

json.photo url_for(@subpost.photo) if @subpost.photo.attached?

json.author do 
    json.extract! @subpost.author, :id, :name, :email
    if @subpost.author.profile_pic.attached?
      json.profilePicURL url_for(@subpost.author.profile_pic)
    else
      json.profilePicURL 'https://lazypanda-seeds.s3-us-west-1.amazonaws.com/blank-profile-picture-973460_1280.webp'
      
   end
end

# json.likes do
#   @subpost.likes.each do |like|
#       json.set! like.id do
#           json.partial! 'api/likes/like', like: like
#       end
#   end
# end