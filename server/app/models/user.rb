class User < ApplicationRecord
    has_many :customised_memes
    has_secure_password
end