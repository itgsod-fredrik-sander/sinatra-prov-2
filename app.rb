class App < Sinatra::Base
  enable :sessions

  get '/' do 
    @movies = Movie.all
    @cinemas = Cinema.all

    slim :index
  end

  get '/movie/:id/biographs' do |id|
    Movie.get(id).showings.cinemas.to_json
  end

  get '/movie/:movie_id/biographs/:cinema_id/showings' do |movie_id, cinema_id|
    Movie.get(movie_id).showings.all(:cinema_id => cinema_id).to_json
  end

  get '/cinema/:id/movies' do |id|
    showings = Cinema.get(1).showings
    movies = []

    showings.each {|showing| movies << Movie.get(showing.movie_id)}
    movies.uniq {|movie| movie.id}.to_json
  end

  get '/cinema/:cinema_id/movies/:movie_id/showings' do |cinema_id, movie_id|
    Cinema.get(cinema_id).showings.all(:movie_id => movie_id).to_json
  end
end