require "rails_helper"

RSpec.describe "Edits", type: :feature do
  let!(:idea) do
    Idea.create(title: "Title Sample", body: "Body Sample")
  end

  it "can access the edit page", js:true do
    visit ideas_path
    click_link_or_button("Edit Info")
    expect(current_path).to eq(edit_idea_path(idea))
  end

  it "can edit the title", js:true do
    visit ideas_path
    click_link_or_button("Edit Info")
    fill_in("idea[title]", with: "New Title")
    click_link_or_button("Update Idea")
    expect(current_path).to eq(ideas_path)
    expect(page).to have_content("New Title")
  end
end