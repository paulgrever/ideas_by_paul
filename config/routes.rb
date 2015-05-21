Rails.application.routes.draw do
  root 'ideas#index'
  resources :ideas
  patch '/ideas/:id/quality', to: 'ideas#quality'
end
