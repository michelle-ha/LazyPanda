
json.review do 
    json.extract! @review, :id, :content, :author_id, :post_id
end
  
  
json.author do 
    json.extract! @review.author, :id, :name, :email
    if @review.author.profile_pic.attached?
        json.profilePicURL url_for(@review.author.profile_pic)
    else
        json.profilePicURL 'https://lazypanda-seeds.s3-us-west-1.amazonaws.com/blank-profile-picture-973460_1280.webp'
        
    end
end

  