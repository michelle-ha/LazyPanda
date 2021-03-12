json.review do 
    json.extract! @review, :id, :content, :author_id, :post_id
end
  
  
json.author do 
    json.extract! @review.author, :id, :name, :email
end