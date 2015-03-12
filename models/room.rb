class Room
  include DataMapper::Resource

  property :name, String
  property :number_of_seats, Integer

  belongs_to :cinema
end