class Chapter < ActiveRecord::Base
  belongs_to :book
  has_many :reactions

  validates :book_id, :number, presence: true

end
