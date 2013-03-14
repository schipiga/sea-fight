require 'sinatra'

set :static_folder, 'static'

get '/' do
  erb :index
end
