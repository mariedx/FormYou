require "test_helper"

class CoursesUsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @courses_user = courses_users(:one)
  end

  test "should get index" do
    get courses_users_url, as: :json
    assert_response :success
  end

  test "should create courses_user" do
    assert_difference('CoursesUser.count') do
      post courses_users_url, params: { courses_user: { course_id: @courses_user.course_id, note: @courses_user.note, user_id: @courses_user.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show courses_user" do
    get courses_user_url(@courses_user), as: :json
    assert_response :success
  end

  test "should update courses_user" do
    patch courses_user_url(@courses_user), params: { courses_user: { course_id: @courses_user.course_id, note: @courses_user.note, user_id: @courses_user.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy courses_user" do
    assert_difference('CoursesUser.count', -1) do
      delete courses_user_url(@courses_user), as: :json
    end

    assert_response 204
  end
end
