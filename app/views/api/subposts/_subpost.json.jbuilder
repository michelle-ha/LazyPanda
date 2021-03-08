json.extract! subpost, :id, :title, :author_id, :post_id

json.photo url_for(subpost.photo) if subpost.photo.attached?