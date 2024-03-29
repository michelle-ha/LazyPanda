Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :posts
    resources :subposts, only: [:create, :destroy]
    resources :reviews, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
  
  end
  
  root "static_pages#root"

end
