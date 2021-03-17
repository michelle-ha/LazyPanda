
json.subpost do 
  json.extract! @subpost, :id, :title, :author_id, :post_id
  json.likeIds subpost.like_ids

end

json.photo url_for(@subpost.photo) if @subpost.photo.attached?

json.author do 
    json.extract! @subpost.author, :id, :name, :email
end

