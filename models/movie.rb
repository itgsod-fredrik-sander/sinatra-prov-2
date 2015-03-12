class Movie
  include DataMapper::Resource

  property :id, Serial
  property :name, Serial
  property :runtime, Integer

  has n, :showings
end