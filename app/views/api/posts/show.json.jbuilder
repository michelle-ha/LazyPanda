json.partial! "api/posts/post", post: @post


# json.authors do
#     json.set! post.author.id do
#       json.extract! post.author, :id, :name, :email
#     end
#   end
# end

# json.author do
#     json.name @post.author.name
#   end


