Rails.application.routes.draw do
  root 'ideas#index'
  resources :ideas, only: [:index, :edit]
end
