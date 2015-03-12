class Room
  include DataMapper::Resource

  property :name, String
  property :number_of_seats, Integer
end