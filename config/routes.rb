Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'message#index'

  # get 'greeting/random', to: 'message#greeting' 
  # Defines the root path route ("/")
  # root "articles#index"
end
