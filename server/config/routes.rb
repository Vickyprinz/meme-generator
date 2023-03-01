Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :new, :create, :show]
  resources :customised_memes, only: [:index, :create, :show, :update, :destroy]

  post '/signin', to: 'users#signin'
  post '/signup', to: 'users#signup'
  get '/validate', to: 'users#validate'
  get '/dashboard', to: 'users#dashboard'
  post '/memes', to: 'customised_memes#memes'

end
