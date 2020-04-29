class Api::MusicsController < ApplicationController
  protect_from_forgery :except => [:create,:update,:destroy]

  def index
    @musics = Music.all
    render 'index',formats:'json',handlers:'jbuilder'
  end

  def show
    @music = Music.find(params[:id])
    render 'show', formats:'json', handlers: 'jbuilder'
  end

  def create
    @music = Music.new(music_params)
    if @music.save
      head :no_content
    else
      render json:@music.errors,status: :unprocessable_entity
    end
  end

  def update
    @music = Music.find(params[:id])
    if @music.update (music_params)
      render 'index', formats:'json', handlers: 'jbuilder'
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @music = Music.find(params[:id])
    if @music.destroy
      head :no_content
    else
      render json: @music.errors, status: :unprocessable_entity
    end
  end

  private

  def music_params
    params.fetch(:music,{}).permit(
      :title,:artist,:genre
    )
  end
end
