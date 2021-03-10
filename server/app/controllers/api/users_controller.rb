class Api::UsersController < Api::BaseController

  before_action :authenticate_user!
  before_action :find_user, only: [ :show, :destroy ]
  before_action :render_if_not_author_or_admin, only: [ :show, :destroy ]
  before_action :render_if_not_admin, only: [:index]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render_jsonapi_response(@user)
  end

  def destroy
    if @user
      @user.destroy
      # Add success data
      render json: success_data, status: 200
    end
  end

  private

  def find_user
    @user = User.find(params[:id])
  end

  def success_data
    {
      status: "200",
      message: "Destroyed successfully!"
    }
  end

  def render_if_not_author_or_admin
    unless current_user == @user || current_user.admin?
      render json: not_author_data, status: 403
    end
  end

  def not_author_data
    {
      status: "403",
      error: "You are not the author of this profile!"
    }
  end

  def render_if_not_admin
    unless current_user.admin?
      render json: not_admin_data, status: 403
    end
  end

  def not_admin_data
    {
      status: "403",
      error: "You are not an admin!"
    }
  end
end
