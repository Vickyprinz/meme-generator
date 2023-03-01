class AddUserToCustomisedMeme < ActiveRecord::Migration[5.2]
  def change
    add_reference :customised_memes, :user, foreign_key: true
  end
end
