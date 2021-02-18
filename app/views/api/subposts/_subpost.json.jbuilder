json.extract! subpost, :id, :title, :post_id, :author_id
json.photo url_for(subpost.photo) if subpost.photo.attached?

