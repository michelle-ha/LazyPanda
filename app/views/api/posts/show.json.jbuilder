json.post do
  json.partial! '/api/posts/post', post: @post
end

json.subposts do
  @post.subposts.each do |subpost|

      json.set! subpost.id do
          json.extract! subpost, :id, :title, :author_id, :post_id
          json.author subpost.author.name
          json.photo url_for(subpost.photo) if subpost.photo.attached?
      end
  end
end

json.reviews do
  @post.reviews.each do |review|

      json.set! review.id do
          json.extract! review, :id, :content, :author_id, :post_id
          json.author review.author.name
      end
  end
end