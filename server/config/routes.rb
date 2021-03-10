Rails.application.routes.draw do
  default_url_options :host => "http://localhost:3000/"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [ :index, :show, :destroy ]
    resources :formations
    resources :categories
    resources :formations_categories
    resources :classrooms
  end

  devise_for :users,
  defaults: { format: :json },
  path: '',
  path_names: {
    sign_in: 'api/login',
    sign_out: 'api/logout',
    registration: 'api/signup'
  },
  controllers: {
    sessions: 'sessions',
    registrations: 'registrations'
  }
end
