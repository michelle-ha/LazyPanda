
json.subpost do
  json.partial! '/api/subposts/subpost', subpost: @subpost
end

json.photo url_for(@subpost.photo) if @subpost.photo.attached?


json.user do
  json.partial! '/api/users/user', user: @review.user
end