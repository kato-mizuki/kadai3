require "test_helper"

class UsresControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get usres_new_url
    assert_response :success
  end

  test "should get show" do
    get usres_show_url
    assert_response :success
  end

  test "should get edit" do
    get usres_edit_url
    assert_response :success
  end
end
