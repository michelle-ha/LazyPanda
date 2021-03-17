class Subpost < ApplicationRecord
    validates :title, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :post

    has_one_attached :photo

    has_many :likes, as: :likeable,
        dependent: :destroy

end
