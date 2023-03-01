require 'test_helper'

class CustomisedMemesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get customised_memes_index_url
    assert_response :success
  end

  test "should get new" do
    get customised_memes_new_url
    assert_response :success
  end

  test "should get show" do
    get customised_memes_show_url
    assert_response :success
  end

  test "should get create" do
    get customised_memes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get customised_memes_destroy_url
    assert_response :success
  end

end
