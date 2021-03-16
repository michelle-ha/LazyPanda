json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
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