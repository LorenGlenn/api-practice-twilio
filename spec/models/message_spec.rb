require 'rails_helper'

describe Message, :vcr => true do
  it "doesn't save the message if twilio gives an error" do
    message = Message.new(:body => 'hi', :to => '1111111', :from => '9714071682')
    expect(message.save).to be false
  end
  it 'adds an error if the number is invalid' do
    message = Message.new(:body => 'hi', :to => '1111111', :from => '9714071682')
    message.save
    expect(message.errors[:base]).to eq(["The 'To' number 1111111 is not a valid phone number."])
  end
end
