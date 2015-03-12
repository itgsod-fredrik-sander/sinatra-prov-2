require_relative 'models_helper'

describe Movie do 
  before do
    @movie = Movie.first(name: 'The Duplo Movie')
  end

  describe 'associations' do 

    it 'should return the correct showing time' do 
      expect (@movie.showings.first.start_time).to match '2015-03-13T21:15:00+00:00'
    end

  end

end