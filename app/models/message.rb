class Message < ApplicationRecord
  validates :name, :email, :newmessage, presence: true
end
