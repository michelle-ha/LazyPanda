class Post < ApplicationRecord
    validates :title, :body, presence: true

    belongs_to :user,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

    has_many :subposts
end
