class App < Sinatra::Base
  enable :sessions

  get '/' do 
    @movies = Movie.all

    slim :index
  end
end