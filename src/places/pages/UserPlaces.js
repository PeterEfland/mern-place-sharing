import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "http://1.bp.blogspot.com/_l5YBdUJdaDM/TPTslKsDOtI/AAAAAAAAASU/fN3S1vmnSHk/s1600/empire_state_building1.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: -23.0073844,
      lng: -43.3671822
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "http://1.bp.blogspot.com/_l5YBdUJdaDM/TPTslKsDOtI/AAAAAAAAASU/fN3S1vmnSHk/s1600/empire_state_building1.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.748441,
      lng: -73.985664
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
