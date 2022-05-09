class Api::MessagesController < ApplicationController

  def index
    render json: Message.all
  end

  def show
    render json: Message.find(params[:id])
  end

  def create
    @message = Message.new(item_params)
    if @message.save
      render json: @message
    else
      render json: { errors: @message.errors }, status: :unprocessable_entity 
    end
  end
   
  def update
    @message = Message.find(params[:id])
    if @list.update(message_params)
      render json: @item
    else 
      render json: { errors: @message.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    Message.find(params[:id]).destroy
    render json: { message: 'Message deleted' }
  end

  private

  def message_params
    params.require(:message).permit(:name, :email, :newmessage)
  end

end
