class Showing
  include DataMapper::Resource

  property :id, Serial
  property :start_time, DateTime

  belongs_to :movie
  belongs_to :room
  belongs_to :cinema
end