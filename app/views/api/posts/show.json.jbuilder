json.post do
    json.partial! '/api/posts/post', post: @post
    json.likeIds @post.like_ids
    json.subpostIds @post.subpost_ids
    json.reviewIds @post.review_ids
  
  end
  
  json.subposts do
    @post.subposts.each do |subpost|
  
        json.set! subpost.id do
            json.extract! subpost, :id, :title, :author_id, :post_id
            json.author subpost.author.name
            json.likeIds subpost.like_ids
            json.photo url_for(subpost.photo) if subpost.photo.attached?
            if subpost.author.profile_pic.attached?
                json.profilePicURL url_for(subpost.author.profile_pic)
            else
                json.profilePicURL 'https://lazypanda-seeds.s3-us-west-1.amazonaws.com/blank-profile-picture-973460_1280.webp'
                
            end
        end
    end
  end
  
  json.reviews do
    @post.reviews.each do |review|
  
        json.set! review.id do
            json.extract! review, :id, :content, :author_id, :post_id
            json.author review.author.name
            if review.author.profile_pic.attached?
                json.profilePicURL url_for(review.author.profile_pic)
            else
                json.profilePicURL 'https://lazypanda-seeds.s3-us-west-1.amazonaws.com/blank-profile-picture-973460_1280.webp'
                
            end
        end
    end
  end
  
  json.likes do
    @post.subposts.each do |subpost|
        subpost.likes.each do |like|
            json.set! like.id do
                json.partial! 'api/likes/like', like: like
            end
        end
    end
  
    @post.likes.each do |like|
        json.set! like.id do
            json.partial! 'api/likes/like', like: like
        end
    end
  end