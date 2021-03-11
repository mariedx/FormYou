class Api::FormationsCategoriesController < Api::BaseController

  before_action :set_formations_category, only: [:show, :update, :destroy]
  before_action :authenticate_user!
  before_action :render_if_not_admin

  # GET /formations
  def index
    @formations_categories = FormationsCategory.all

    render json: @formations_categories
  end

  # GET /formations/1
  def show
    render json: @formations_category
  end

  # POST /formations
  def create
    @formations_category = FormationsCategory.new(formations_category_params)

    if @formations_category.save
      render json: @formations_category, status: :created
    else
      render json: @formations_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /formations/1
  def update
    if @formations_category.update(formations_category_params)
      render json: @formations_category
    else
      render json: @formations_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /formations/1
  def destroy
    @formations_category.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_formations_category
      @formations_category = FormationsCategory.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def formations_category_params
      params.require(:formations_category).permit(:formation_id, :category_id)
    end
end