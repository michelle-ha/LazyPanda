json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'post', post: post
      json.subpostIds []
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