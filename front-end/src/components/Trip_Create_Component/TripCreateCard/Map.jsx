import React, {useState, useEffect, useRef} from 'react'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import car from '../../../assets/img/travel.png'
import './Map.css'




const Map = () => {
  mapboxgl.accessToken = ''
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(108.19932539579814);
  const [lat, setLat] = useState(16.05734896197262);
  const [zoom, setZoom] = useState(10);
  const coordinate = [
    {
      'name': 'a',
      'lng': 108.220100399999990,
      'lat': 16.053943600000000
    },
    {
      'name': 'b',
      'lng': 108.215334500000000,
      'lat': 16.070770700000000
    },
    {
      'name': 'c',
      'lng': 108.210121100000000,
      'lat': 16.052415800000000
    },
    {
      'name': 'd',
      'lng': 108.230303200000000,
      'lat': 16.063678600000000
    },
    {
      'name': 'e',
      'lng': 108.204007499999990,
      'lat': 16.059353100000000
    },
    
  ]
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });

    map.current.on('load', () => {
      // Map is fully loaded, now add markers
      coordinate.forEach(item => {
        const marker = document.createElement('div');
        marker.className = 'custom-marker';
        marker.style.backgroundColor = 'red';
        marker.style.width = '30px';
        marker.style.height = '30px';

        new mapboxgl.Marker(marker)
          .setLngLat([item.lng, item.lat])
          .addTo(map.current);
      });
    });



  //  return () => {
  //   if (map.current) {
  //     map.current.remove();
  //   }
  // };
 }, [lng, lat, zoom]);

    // Add a marker




  const [viewport, setViewport] = useState({
    latitude: 16.05734896197262, // initial latitude
    longitude: 108.19932539579814, // initial longitude
    zoom: 8, // initial zoom level
  });
  return (
    <div ref={mapContainer} className='w-full h-screen'>

    </div>
  )
}

export default Map

      {/* <ReactMapGl
        {...viewport}
        mapboxApiAccessToken= ''
        mapStyle="mapbox://styles/mapbox/streets-v12"
        onViewportChange={handleViewportChange}
      >
        marker
      </ReactMapGl>     */}