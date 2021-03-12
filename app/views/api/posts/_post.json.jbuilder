json.extract! post, :id, :title, :body, :author_id
json.author post.author.name
json.photo url_for(post.photo) if post.photo.attached?
