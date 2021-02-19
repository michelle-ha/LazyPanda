Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :posts do 
      resources :subposts, only: [:create, :destroy]
    end
  end
  
  root "static_pages#root"

end
