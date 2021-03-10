class Api::UsersController < Api::BaseController

  before_action :find_user, only: [ :show, :destroy ]

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
end
