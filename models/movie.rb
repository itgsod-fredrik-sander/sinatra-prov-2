class Movie
  include DataMapper::Resource

  property :id, Serial
  property :name, String
  property :runtime, Integer

  has n, :showings
end