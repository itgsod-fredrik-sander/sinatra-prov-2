class Movie
  include DataMapper::Resource

  property :name, Serial
  property :runtime, Integer
end