class Api::V1::MessagesController < ApplicationController
  def index
    random_message = Message.all.sample
    render json: random_message, status: :ok
  end
end
