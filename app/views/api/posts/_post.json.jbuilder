json.extract! post, :id, :title, :body, :author_id
json.photo url_for(post.photo) if post.photo.attached?
