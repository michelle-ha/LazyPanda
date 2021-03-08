# json.post do
#   json.partial! '/api/posts/post', post: @post
# end

# json.user do
#   json.partial! '/api/users/user', user: @post.user
# end

json.partial! '/api/posts/post', post: @post

@post.subposts.includes(:user).each do |subpost|
  json.subposts do
    json.set! subpost.id do
      json.partial! 'api/subposts/subpost', subpost: subpost
    end
  end

  json.users do
    json.set! subpost.author_id do
      json.extract! subpost.user, :id, :first_name, :last_name
    end
  end
end