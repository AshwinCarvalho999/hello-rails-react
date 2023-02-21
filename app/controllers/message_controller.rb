class MessageController < ApplicationController
  def index; end

  def greeting
    @messages = Message.all.sample
    render json: @messages, status: 200
  end
end
