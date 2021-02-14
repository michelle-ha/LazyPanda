class Post < ApplicationRecord
    validates :title, :body, presence: true

    belongs_to :author,
        class_name: :User
    has_one_attached :photo
end