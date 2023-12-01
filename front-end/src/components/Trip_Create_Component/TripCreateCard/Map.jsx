import React, {useState, useEffect, useRef} from 'react'
import mapboxgl, { Popup } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css'
import { useSelector } from 'react-redux';
import restaurant from '../../../assets/Map/restaurant.png'
import hotel from '../../../assets/Map/hotel.png'




const Map = () => {
  const token = mapboxgl.accessToken = 'pk.eyJ1IjoidGllbmRhdGdsIiwiYSI6ImNscDB5eTcyODA5ZGwyaXBqNDFrZjg4d2wifQ.v201xmqTHSI9wQ0JlM3RdQ'
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(108.19932539579814);
  const [lat, setLat] = useState(16.05734896197262);
  const [zoom, setZoom] = useState(12);
  const bounds = [
    [108.12510034866294, 16.182744632493126],
    [108.35461158869451,15.842007748522835]
  ]

  const locationList = useSelector((state) => state.tripCreate.markerList)
  console.log('im here')
 
  useEffect(() => {
    // Initialize map only once
    if (!map.current) {
      console.log('map reload')
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom
      });
      // map.current.setMaxBounds(bounds)
  
      map.current.on('load', () => {
        // Map is fully loaded
      });
    }
  
    const markers = [];
  
    // Add markers
    locationList.forEach((item, index) => {
      const marker = document.createElement('div');
      marker.className = 'custom-marker';
      if(item.category === 'Hotel')
      {
        marker.style.backgroundImage = `url(${hotel})`;
      }
      else if(item.category === 'Restaurant')
      {
        marker.style.backgroundImage = `url(${restaurant})`;
      }
      marker.style.backgroundSize = '40px 40px'
      marker.style.width = '40px';
      marker.style.height = '40px';
      marker.innerHTML = `<h1 class = 'text-base font-semibold z-[99] py-[1px] px-[8px] rounded-full bg-red-400 text-white text-center absolute -top-5 left-0'>${index+1}</h1>`
  
      markers.push(
        new mapboxgl.Marker(marker)
          .setLngLat([item.longitude, item.latitude])
          .addTo(map.current)
      );

      // Add popups
      const popup = new mapboxgl.Popup()
      .setLngLat([item.longitude, item.latitude])
      .setHTML(`
      <div class=' rounded-xl flex items-center border border-slate-900 w-full'>
        <div class = 'w-1/3 mx-2 my-2 border border-slate-900'>
          <img src = ${restaurant} alt='img' class = 'object-cover'/>
        </div>
        <div class = 'w-2/3'>
          <p class='text-base font-semibold text-slate-900'>${item.name}</p>
        </div>
      </div>
      `)


      marker.addEventListener('mouseenter', () => {
        popup.addTo(map.current)
        console.log('hover')
      })

      marker.addEventListener('mouseleave', () => {
        popup.remove()
        console.log('unhover')
      })
    });
  
    // Cleanup function to remove markers when component unmounts or when coordinates change
    return () => {
      // Remove existing markers
      markers.forEach(marker => marker.remove());
    };
  }, [lng, lat, zoom, locationList, bounds]);


  const [viewport, setViewport] = useState({
    latitude: 16.05734896197262, // initial latitude
    longitude: 108.19932539579814, // initial longitude
    zoom: 8, // initial zoom level
  });

  const waypoints = locationList.map(item => [item.longitude, item.latitude])
  const waypointsString = waypoints.map(point => point.join(',')).join(';')

  //Get direction
  const handleGetDirection = async() =>{
    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${waypointsString}?steps=true&geometries=geojson&access_token=${token}`,
      {
         method: 'GET' 
      }
    )
    const json = await query.json()
    const data = json.routes[0]
    const route = data.geometry.coordinates
    console.log(data)
    const geojson = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: route
      }
    }

    if(map.current.getSource('route')) {
      map.current.getSource('route').setData(geojson)
    }
    else {
      map.current.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: geojson
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round'
        },
        paint: {
          'line-color': '#3887be',
          'line-width': 5,
          'line-opacity': 0.75
        }
      });
    }
  }
  return (
    <div ref={mapContainer} className='w-full h-[90vh] relative'> 
      <button className=' absolute top-0 right-0 z-50' onClick={handleGetDirection}>Click me!</button>
    </div>
  )
}

export default Map
