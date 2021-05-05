# Git
- create repo
- clone repo

# Setup https://open.appacademy.io/learn/full-stack-online/react/rails-react-redux-configuration-checklist

# Backend
- rails  _5.2.3_ new app-name -d=postgresql --skip-turbolink
<!-- create new rails app w/ postgresql database -->
<!-- why skip turbo links? -->
- pgstart
<!-- start postgres -->
- rails db:create
<!-- create new database -->
- rails g model modelName
<!-- Note: name is not plural -->
<!-- creates table + model -->
<!-- Can also write in trminal: rails g model Currency name description maxsupply:bigint currency_symbol slug -->
  <!-- Currency = model name. name, description, etc = properties. Default type is string -->
- rails db:migrate
<!-- note: rails db:rollback can be used to change table params (then run rails db:migrate again) -->
- paste seed data into seeds.rb 
- rails db:seed
- rails g controller api/controllerNames
- create methods in controller
- Create routes based on controller methods. Test w/ rails routes
<!-- In routes.rb, set defaults: {format: :json} on your namespace :api -->
<!-- Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :controllerNames ...
  end
  root "static_pages#root"
end -->
- create views
  <!-- example: api/users/show.json.jbuilder -->
  <!-- jbuilder:  tool we will use to customize the JSON responses we send back from our rails server. (don't end down sensitive info) -->

# Testing
- rails c
<!-- - Examples: Currency.count, Currency.first, Currency.last -->
- rails s. localhost:3000
- Test your routes using $.ajax methods in the console or with Postman

# Frontend
