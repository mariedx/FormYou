class ApplicationController < ActionController::API
  before_action :configure_permitted_params, if: :devise_controller?
  
  def render_jsonapi_response(resource)
    if resource.errors.empty?
      render jsonapi: resource
    else
      render jsonapi_errors: resource.errors, status: 400
    end
  end

  # Configure the authorization of params for controller devise only on sign up and update pages 
  def configure_permitted_params
    devise_parameter_sanitizer.permit(:sign_up) { |u| u.permit(:first_name, :last_name, :is_validated_by_admin, :email, :password, :password_confirmation)}
    devise_parameter_sanitizer.permit(:account_update) { |u| u.permit(:first_name, :last_name, :is_validated_by_admin,:email, :password, :password_confirmation, :current_password) }
  end
end
