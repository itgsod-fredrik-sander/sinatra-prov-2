module Get
  module Root

    def self.registered(app)
      app.get '/' do 
        slim :index
      end
    end

  end
end