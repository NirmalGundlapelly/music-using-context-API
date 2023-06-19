import React, { Component } from 'react'
import { MusicContext } from './MusicContext'

import { Data } from './Data'



export default class MusicContextProvider extends Component{
    constructor(props) {
        super(props)
        this.state = { playlist: [], allSongs: Data, songDetails:{}}
    }


    handleFavorite = (item) => {
        const { playlist } = this.state
        const toggleLikedItem = {...item, isFavorite:true}

        const isSongAlreadyPresent = playlist.find((each) => each.id == item.id)
        if (isSongAlreadyPresent){
            const UpdatedPlaylist = playlist.filter((each)=> each.id != item.id)
            this.setState({playlist:UpdatedPlaylist})
        }else{
            const UpdatedPlaylist = [...playlist, toggleLikedItem]
            this.setState({playlist:UpdatedPlaylist})
        }
        
    }

    handleDelete = (product) => {
        const updatedPlaylist = this.state.playlist.filter((each)=> each.id !== product.id)
        this.setState({playlist: updatedPlaylist})
    }


    render() {
        console.log('liked', this.state.playlist)
        return (
            <MusicContext.Provider value={{ ...this.state, handleFavorite: this.handleFavorite, handleDelete:this.handleDelete }}>
                {this.props.children}
            </MusicContext.Provider>
        )
    }
}