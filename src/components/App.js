import React from 'react';
import Header from './Header';
import movie from '../apis/movie';
import axios from 'axios';
import VideoList from './VideoList';
import {API_URL, API_KEY,IMAGE_BASE_URL, BACKDROP_SIZE,POSTER_SIZE} from '../config';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    

    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
       const response = await axios.get(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${term}`, {
             params: {
                 q: term
             }/*
         }).then((response)=>{
            console.log(response);
         }).catch((err)=>{
            console.log(err);
            */
         });
          
         this.setState({ videos: response.data.results });
       // 

        
    // `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`


     //  this.setState({ videos: response.data.items });
/*
        fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${term}`)
        .then((response)=>{
            return response.json();
        })
        .then((result)=>{
             console.log(result);
        });
*/
    };

    onVideoSelect = video => {
        console.log('From the App!', video);
    };

    render() {
        console.log(this.state.videos);
        return (
            <div>
                <Header onFormSubmit={this.onTermSubmit} />
                 <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;