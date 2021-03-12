class Api::CoursesUsersController < Api::BaseController
  before_action :set_courses_user, only: [:show, :update, :destroy]

  # GET /courses_users
  def index
    @courses_users = CoursesUser.all

    render json: @courses_users
  end

  # GET /courses_users/1
  def show
    render json: @courses_user
  end

  # POST /courses_users
  def create
    @courses_user = CoursesUser.new(courses_user_params)

    if @courses_user.save
      render json: @courses_user, status: :created
    else
      render json: @courses_user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /courses_users/1
  def update
    if @courses_user.update(courses_user_params)
      render json: @courses_user
    else
      render json: @courses_user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /courses_users/1
  def destroy
    @courses_user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_courses_user
      @courses_user = CoursesUser.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def courses_user_params
      params.require(:courses_user).permit(:note, :course_id, :user_id)
    end
end
