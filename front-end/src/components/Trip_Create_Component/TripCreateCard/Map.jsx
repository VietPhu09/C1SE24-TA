import React, {useState, useEffect, useRef} from 'react'
import mapboxgl, { Popup } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css'
import { useSelector, useDispatch } from 'react-redux';
import restaurant from '../../../assets/Map/restaurant.png'
import hotel from '../../../assets/Map/hotel.jpg'
import sight from '../../../assets/Map/sight.png'
import Loading from '../../Loading_Component/Loading'
import axios from 'axios'
import { storeTempLocations } from '../../../redux/tripSlice';

import { updatedLocationOrder, getLocationArray} from '../../../redux/tripSlice';





const Map = () => {
  
  const dispatch = useDispatch()
  const [distance, setDistance] = useState()
  const [newDistance, setNewDistance] = useState()
  const [showDistance, setShowDistance] = useState(false)
  const [showNewDistance, setShowNewDistance] = useState(false)
  const [routeInfo, setRouteInfo] = useState(false)
  const [showCalculateDistance, setShowCalculateDistance] = useState(true)

  const token = mapboxgl.accessToken = 'pk.eyJ1IjoidGllbmRhdGdsIiwiYSI6ImNscDB5eTcyODA5ZGwyaXBqNDFrZjg4d2wifQ.v201xmqTHSI9wQ0JlM3RdQ'
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(108.19932539579814);
  const [lat, setLat] = useState(16.05734896197262);
  const [zoom, setZoom] = useState(12);

  const [loading, setLoading] = useState(false)

  const locationList = useSelector((state) => state.tripCreate.markerList)
  const itemIndex = useSelector((state) => state.tripCreate.index)
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
      else if(item.category === "Sight Seeing")
      {
        marker.style.backgroundImage = `url(${sight})`
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
      })

      marker.addEventListener('mouseleave', () => {
        popup.remove()
      })
    });
  
    // Cleanup function to remove markers when component unmounts or when coordinates change
    return () => {
      // Remove existing markers
      markers.forEach(marker => marker.remove());
    };
  }, [lng, lat, zoom, locationList]);


  const [viewport, setViewport] = useState({
    latitude: 16.05734896197262, // initial latitude
    longitude: 108.19932539579814, // initial longitude
    zoom: 8, // initial zoom level
  });

  const waypoints = locationList.map(item => [item.longitude, item.latitude])
  const waypointsString = waypoints.map(point => point.join(',')).join(';')

      //remove layer direction
      useEffect(() =>{
        if(map.current.getLayer('route'))
        {
          map.current.removeLayer('route')
          console.log('remove')
        }
        if(map.current.getSource('route')){
          map.current.removeSource('route')
          console.log('remove source')
        }
        setRouteInfo(false)
      }, [itemIndex, locationList.length])

      
      useEffect(() => {
        setShowCalculateDistance(true)
        console.log('change')
      },[ locationList])

  //Get direction
  const handleGetDirection = async() =>{
    setLoading(true)
    try{
      const response = await axios.get(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${waypointsString}?steps=true&geometries=geojson&access_token=${token}`
      );
    
      const data = response.data.routes[0];
      const route = data.geometry.coordinates;
      console.log(data)
      setDistance(data.distance)
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
        setRouteInfo(true)
      }
    } catch (err) {console.error(err)}
    finally {setLoading(false); setShowCalculateDistance(false); setShowNewDistance(false); setShowDistance(true)}
  
  }

  const handleOptimizing = async() => {
    const matrixToken = 'pk.eyJ1IjoidGllbmRhdGdsIiwiYSI6ImNscDB5cjMxODBkbHYycnFveG9oMW02czQifQ.1Gvp-oFUgvHOKCU1VmkSrw'
    try {
      //set temp location list
      dispatch(storeTempLocations(locationList))
      //call api
      setLoading(true);
      const response = await axios.get(`https://api.mapbox.com/directions-matrix/v1/mapbox/driving/${waypointsString}?access_token=${matrixToken}`);
      const durations = response.data.durations;
      console.log('data', response.data)
      console.log(durations);
      //get distance
      class Graph {
        constructor() {
            this.vertices = [];
            this.edges = {};
        }

        addVertex(vertex) {
            this.vertices.push(vertex);
            this.edges[vertex] = {};
        }

        addEdge(vertex1, vertex2, distance) {
            this.edges[vertex1][vertex2] = distance;
            this.edges[vertex2][vertex1] = distance;
        }

        createGraphFromDurations(durations) {
          // Lấy số lượng đỉnh
          const numVertices = durations[0].length;
      
          // Tạo đỉnh
          for (let i = 0; i < numVertices; i++) {
              const vertex = i + 1; // Sử dụng số thay vì ký tự
              this.addVertex(vertex);
          }
      
          // Thêm cạnh từ mảng durations
          for (let i = 0; i < numVertices; i++) {
              for (let j = i + 1; j < numVertices; j++) {
                  const vertex1 = i + 1;
                  const vertex2 = j + 1;
                  const distance = Number(durations[i][j]);
      
                  if (!isNaN(distance)) {
                      this.addEdge(vertex1, vertex2, distance);
                  } else {
                      console.error(`Invalid distance value at (${i}, ${j}).`);
                  }
              }
          }
      }      

      generateRandomPath() {
        const shuffledVertices = this.vertices.slice(); // Copy danh sách đỉnh để không làm thay đổi danh sách chính
        shuffledVertices.shift(); // Loại bỏ đỉnh xuất phát (đỉnh 1) khỏi danh sách
        for (let i = shuffledVertices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledVertices[i], shuffledVertices[j]] = [shuffledVertices[j], shuffledVertices[i]];
        }
        return [1, ...shuffledVertices]; // Thêm đỉnh xuất phát và kết thúc vào đầu và cuối lộ trình
    }
    

        calculateTotalDistance(path) {
            let totalDistance = 0;

            for (let i = 0; i < path.length - 1; i++) {
                const currentVertex = path[i];
                const nextVertex = path[i + 1];
                totalDistance += this.edges[currentVertex][nextVertex];
            }

            return totalDistance;
        }

        runGeneticAlgorithm(iterations) {
          let bestPath = null;
          let minDistance = Infinity;
          const visitedPaths = new Set(); // Sử dụng Set để lưu trữ các lộ trình đã thăm
      
          for (let i = 0; i < iterations; i++) {
              const randomPath = this.generateRandomPath();
              const pathKey = randomPath.join(','); // Chuyển đổi mảng thành chuỗi để so sánh
            
              // Kiểm tra xem lộ trình đã được thăm chưa
              if (!visitedPaths.has(pathKey)) {
                  const distance = this.calculateTotalDistance(randomPath);
                  if (distance < minDistance) {
                      minDistance = distance;
                      bestPath = randomPath;
                  }
      
                  // Thêm lộ trình vào danh sách đã thăm
                  visitedPaths.add(pathKey);
              }
          }
      
          return { path: bestPath, totalDistance: minDistance };
      }
      
    }

    //tinh lo trinh ngan nhat
    const graph = new Graph();

    graph.createGraphFromDurations(durations);
    console.log("Vertices:", graph.vertices);
    console.log("Edges:", graph.edges);

    const { path, totalDistance } = graph.runGeneticAlgorithm(10000);

    if (path) {
        const formattedPath = path.join(' -> ');
        console.log(`Lộ trình ngắn nhất là ${path} with total distance ${totalDistance} km`);
    } else {
        console.log('Không có lộ trình hợp lệ.');
    }

    //dua ra lo trinh thich hop
    const waypointsArray = waypointsString.split(';')
    //sap xep lai
    const reorderArray = path.map(index => waypointsArray[index-1])
    console.log('array', reorderArray)

    //tao chuoi request string moi
    const waypointsStringOptimizing = reorderArray.join(';') 

    

    //new direction
    const directionResponse = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${waypointsStringOptimizing}?steps=true&geometries=geojson&access_token=${token}`
    );
  
    const data = directionResponse.data.routes[0];
    const route = data.geometry.coordinates;
    console.log(data)
    setNewDistance(data.distance)
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

    //rearrange
    console.log(reorderArray)
    //convert old array to new array
    const newReorderArray = reorderArray.map(item =>{
      const [longitude, latitude] = item.split(',')
      return [longitude, latitude]
    })

    const sortedData = locationList.slice().sort((a, b) => {
      const keyA = newReorderArray.findIndex(coords => coords[0] === a.longitude && coords[1] === a.latitude);
      const keyB = newReorderArray.findIndex(coords => coords[0] === b.longitude && coords[1] === b.latitude);
      return keyA - keyB;
  });

  //save to redux
  dispatch(updatedLocationOrder(sortedData))
  dispatch(getLocationArray(sortedData[0].day))


    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false); setShowNewDistance(true)
    }
  }

  const formatDateTripList = (input) => {

    try{
      const date = new Date(input)
      const options = {month: 'long', day: 'numeric'}
      return date.toLocaleDateString('en-US', options)
    }
    catch(err){console.error(err)}

}

  //keep old locations
  const oldLocation = useSelector((state) => state.tripCreate.tempLocations)
  const handleKeepOldLocation = () => {
    dispatch(updatedLocationOrder(oldLocation))
    dispatch(getLocationArray(oldLocation[0].day))
    setShowNewDistance(false)
  }
  const handleKeepNewLocation = () => {
    setShowDistance(false)
  }
  return (
      <div className=' relative h-screen'>
      <div ref={mapContainer} className='w-full h-[90vh]'> 
      {
        routeInfo && (
          <>
          {
            showDistance && (
              <div className=' absolute top-0 left-0 bg-white shadow-md ml-2 mt-2 py-2 px-4 z-50 rounded-md'>
                {
                  locationList.length > 0 && (
                    <>
                    <p className='text-lg font-medium text-blue-500'>{formatDateTripList(locationList[0].day)} route :</p>
                    <p className='text-lg font-medium text-slate-900'>Locations: <span className=' text-blue-500'>{locationList.length}</span></p>
                    <p className='text-lg font-medium text-slate-900'>Distance: <span className=' text-blue-500'>{(distance/1000).toFixed(1)}</span> km </p>
                    {
                      showNewDistance && (
                        <div className='flex items-center justify-between w-full'>
                          <button onClick={handleKeepOldLocation} className=' w-full px-5 rounded-md text-white text-lg font-medium bg-green-600 hover:bg-green-700 hover:border-green-700'>Keep</button>
                        </div>
                      )
                    }
                    </>
                  )
                }       
              </div>    
            )
          }
          
          {showNewDistance && (
             <div className=' absolute top-0 right-2 bg-white shadow-md ml-2 mt-2 py-2 px-4 z-50 rounded-md'>
             {
               locationList.length > 0 && (
                 <>
                 <p className='text-lg font-medium text-red-500'>New {formatDateTripList(locationList[0].day)} route :</p>
                 <p className='text-lg font-medium text-slate-900'>Locations: <span className=' text-blue-500'>{locationList.length}</span></p>
                 <p className='text-lg font-medium text-slate-900'>Distance: <span className=' text-red-500 text-xl font-semibold'>{(newDistance/1000).toFixed(1)}</span> km </p>
                 <div className='flex items-center justify-between w-full'>
                    <button onClick={handleKeepNewLocation} className=' w-full px-5 rounded-md text-white text-lg font-medium bg-green-600 hover:bg-green-700 hover:border-green-700'>Acept</button>
                 </div>
                 </>
               )
             }       
           </div>
          )}
          </>    
        )
      }     
        {
          loading && (
            <div className='w-full h-full'>
              <div class="absolute inset-0 bg-black opacity-50"></div>
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                <Loading/>
              </div>
            </div>
          )
        }
      </div>
      {
        locationList.length > 1 && (
          showCalculateDistance ?(
            <div className='absolute bottom-8 left-0 z-50 w-full flex items-center justify-between'>
              <button className=' w-full border py-4 px-4 bg-green-600 text-white font-semibold hover:bg-green-700' onClick={handleGetDirection}>Calculate Distance</button>
            </div> 
          )
          :
          (
            <div className='absolute bottom-8 left-0 z-50 w-full flex items-center justify-between'>
            <button className='jumping-button' onClick={handleOptimizing}>Optimizing</button>
          </div> 
          )
        )
      }   
    </div>
  )
}

export default Map
