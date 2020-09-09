import React, { Component } from 'react';
import Navbar from "./navbar/Navbar";
import YouTube from 'react-youtube';

export default class Reviews extends Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 0,
      },
    };
    const {videoId} = this.props
    return(
     <React.Fragment>
      <Navbar />
          	<div
    			style={{
      			  position: 'static'
   				 }}
  			 >
  			 <h1 className="text-main-title text-center py-4"> MacBookPro Review </h1>
  				<div className="text-center">
  				<YouTube 
   				 	 videoId="OWVqn2qc2ls"
    				 opts={opts}
    				 onReady={this.VideoOnReady}
    			 /> 
    			 </div>
  				
    		  </div>
    		  
    		  	<div
    			style={{
      			  position: 'static'
   				 }}
  			 >
  			 <h1 className="text-main-title text-center py-4"> Dell Inspiron Review </h1>
  			 <div className="text-center">
  				<YouTube 
   				 	 videoId="xOor9AN420Y"
    				 opts={opts}
    				 onReady={this.VideoOnReady}
    			 /> 
    			 </div>
    		  </div>
    		  
    		  	  	<div
    			style={{
      			  position: 'static'
   				 }}
  			 >
  			 <h1 className="text-main-title text-center py-4"> Microsoft Surface Review </h1>
  			 <div className="text-center">
  				<YouTube 
   				 	 videoId="aeaBaTqmu8Q"
    				 opts={opts}
    				 onReady={this.VideoOnReady}
    			 /> 
    			 </div>
    		  </div>
     </React.Fragment>
     );
  }
}