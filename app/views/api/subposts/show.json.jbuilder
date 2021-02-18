json.subpost do
    json.partial! '/api/subposts/subpost', subpost: @subpost
  end
  
  json.author do
    json.partial! '/api/users/user', user: @subpost.author
  end
  