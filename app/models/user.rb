class User < ApplicationRecord
    attr_reader :password

    validates :email, :session_token, presence: true, uniqueness: true
    validates :name, :password_digest, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post

    has_many :subposts,
        foreign_key: :author_id,
        class_name: :Subpost

    has_many :reviews,
        foreign_key: :author_id,
        class_name: :Review

    has_many :likes,
        foreign_key: :author_id,
        class_name: :Like

    has_one_attached :profile_pic


    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

end


