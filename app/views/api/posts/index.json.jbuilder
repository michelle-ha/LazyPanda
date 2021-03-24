json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
      json.likeIds post.like_ids
      json.reviewIds post.review_ids
      json.subpostIds post.subpost_ids
    end
  end
end

json.users do
    @posts.each do |post|
        json.set! post.author.id do
            json.extract! post.author, :id, :name, :email
        end
    end
end

json.reviews do
  @posts.each do |post|
    post.reviews.each do |review|
      json.set! review.id do
        json.extract! review, :id, :content, :author_id, :post_id
        json.author review.author.name

      end
    end
  end
end

json.likes do
  @posts.each do |post|
      post.likes.each do |like|
          json.set! like.id do
              json.partial! 'api/likes/like', like: like
          end
      end
  end
end

json.subposts do
  @posts.each do |post|
    post.subposts.each do |subpost|
      json.set! subpost.id do
          json.extract! subpost, :id, :title, :author_id, :post_id
          json.author subpost.author.name
          json.photo url_for(subpost.photo) if subpost.photo.attached?
      end
    end
  end
end