class App < Sinatra::Base
  enable :sessions

  get '/' do 
    @movies = Movie.all

    slim :index
  end

  get '/movie/:id/biographs' do |id|
    Movie.get(id).showings.cinemas.to_json
  end
end