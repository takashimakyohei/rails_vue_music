Rails.application.routes.draw do
  root 'home#index'
  namespace :api do
    resources :musics, only:[:index,:show,:create,:update,:destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
