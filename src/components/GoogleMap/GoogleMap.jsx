
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div>My Marker</div>;


const SimpleMap = ()=>{
  const defaultProps = {
    center: {
      lat: 23.802743313183626, 
      lng: 90.41280411304209,
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div className='mx-auto' style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
        />
      </GoogleMapReact>
    </div>
  );
}
export default SimpleMap