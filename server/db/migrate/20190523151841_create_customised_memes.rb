class CreateCustomisedMemes < ActiveRecord::Migration[5.2]
  def change
    create_table :customised_memes do |t|
      t.string :name
      t.string :url

      t.timestamps
    end
  end
end
