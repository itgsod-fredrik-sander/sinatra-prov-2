require_relative 'models_helper'

describe Movie do 
  before do
    DataMapper.auto_migrate!
    
    @movie = Movie.create(name: 'The Duplo Movie')
    @cinema = Cinema.create(name: 'Bioslottet')
    @room = Room.create(name: 'Sal 1', cinema_id: @cinema.id, number_of_seats: 240)
    @showing = Showing.create(movie_id: @movie.id, cinema: @cinema, room: @room, start_time: DateTime.strptime('2015-03-13 21:15', '%Y-%m-%d %H:%M') )
  end

  describe 'associations' do 

    it 'should not work' do 
      expect( @movie.showings.first.room.name ).to match 'test'
      #expect (@movie.showings.first.start_time).to_s.to_match '2015-03-13T21:15:00+00:00'
    end

  end

end