class Post < ApplicationRecord
    validates :title, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

    has_many :subposts

    has_many :reviews

    has_many :likes, as: :likeable,
        dependent: :destroy
end
