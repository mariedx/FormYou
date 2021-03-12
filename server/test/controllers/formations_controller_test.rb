require "test_helper"

class FormationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @formation = formations(:one)
  end

  test "should get index" do
    get formations_url, as: :json
    assert_response :success
  end

  test "should create formation" do
    assert_difference('Formation.count') do
      post formations_url, params: { formation: { description: @formation.description, title: @formation.title, user_id: @formation.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show formation" do
    get formation_url(@formation), as: :json
    assert_response :success
  end

  test "should update formation" do
    patch formation_url(@formation), params: { formation: { description: @formation.description, title: @formation.title, user_id: @formation.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy formation" do
    assert_difference('Formation.count', -1) do
      delete formation_url(@formation), as: :json
    end

    assert_response 204
  end
end
