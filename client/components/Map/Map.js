import React from 'react'
import {render} from 'react-dom'
import {Map, Marker, Popup, TileLayer, LayerGroup} from 'react-leaflet'
import PostForm from '../PostForm'


class MapComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            zoom: 13,
            position: [24.470901, 39.612236],
            lat:24.470901,
            lan:39.612236
        }
    }
    
    componentDidMount() {
        let self = this; 
        const map = this.map.leafletElement;
        
        // map.locate({setView: true, watch: true}).on('locationfound', function (e) {
        //  self.setState({
        //       position: [e.latitude, e.longitude]
        //     })
        //   // self.props.actions.update_location({lat: e.latitude, long: e.longitude})
        //  })
        //  .on('locationerror', function (e) {
        //     console.log('locationerror',e);
        //  });
         
        }
        updateMarker = (e) => {
            // this.props.updateMarkerPosition(e.latlng.lat, e.latlng.lng);
            // this.setState({
            //     lat: e.latlng.lat,
            //     lng: e.latlng.lng
            // })
            console.log(e)
        }

        
        
render(){

    const {posts, actions} = this.props;
  

    let list = [];
    for (let i = 0; i < posts.length; i++) {
    let profile_picture = '<img class="img-circle" src= '+ posts[i].userImage+'></img>'
    let divIcon = L.divIcon({className: 'custom-div-icon', iconSize:20, html: profile_picture});
  
   const [longitude, latitude] = posts[i].location.coordinates;
    const pos=[latitude, longitude]
   // console.log('render icon,',divIcon)
 list.push(
   <Marker position={pos} icon={divIcon} key={posts[i]._id}>
   <Popup>
      <PostForm actions={actions} user_posts={posts[i]}/>
    </Popup>
   </Marker>
  )
 }
    return(
        <Map  center={this.state.position}
        click={this.updateMarker()}
          zoom={this.state.zoom}
           ref={map => { this.map = map}}>
       <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'></TileLayer>
                <LayerGroup>
                    {list}
                </LayerGroup>
</Map>
  );
    
}

}
export default MapComponent;