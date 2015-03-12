require_relative 'models_helper'

describe Movie do 
  before do
    DataMapper.auto_migrate!
    
    @movie = Movie.create(name: 'The Duplo Movie')
    @cinema = Cinema.create(name: 'Bioslottet')
    @room = Room.create(name: 'Sal 1', cinema_id: @cinema.id, number_of_seats: 240)
    @showing = Showing.create(movie_id: @movie.id, cinema: @cinema, room: @room, start_time: DateTime.strptime('2015-03-13 21:15', '%Y-%m-%d %H:%M') )
  end

  describe 'movie associations' do 

    it 'should return the correct showing start time' do 
      expect( @movie.showings.first.start_time.to_s).to match '2015-03-13T21:15:00+00:00'
    end

  end

  describe 'cinema associations' do 

    it 'should return the correct room name' do 
      expect( @cinema.rooms.first.name ).to match 'Sal 1'
    end

    it 'should return the correct showing start time' do 
      expect( @cinema.showings.first.start_time.to_s).to match '2015-03-13T21:15:00+00:00'
    end
  end

  describe 'room associations' do 
    it 'should return the correct cinema name' do 
      expect( @room.cinema.name).to match 'Bioslottet'
    end

    it 'should return the correct showing start time' do 
      expect( @room.showings.first.start_time.to_s).to match '2015-03-13T21:15:00+00:00'
    end
  end

  describe 'showing associations' do 
    it 'should return the correct movie name' do 
      expect( @showing.movie.name ).to match 'The Duplo Movie'
    end

    it 'should return the correct room name' do 
      expect( @showing.room.name ).to match 'Sal 1'
    end

    it 'should return the correct cinema name' do 
      expect( @showing.cinema.name ).to match 'Bioslottet'
    end
  end

  describe ''
end