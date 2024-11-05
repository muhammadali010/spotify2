import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFeaturedPlaylists, setRecentlyPlayed, setJumpBackIn, setMadeForYou } from '../Redux/playlistSlice';
import http from '../axios';

function Home() {
  const dispatch = useDispatch();
  const featuredPlaylists = useSelector((state) => state.playlist.featuredPlaylists);
  const recentlyPlayed = useSelector((state) => state.playlist.recentlyPlayed);
  const jumpBackIn = useSelector((state) => state.playlist.jumpBackIn);
  const madeForYou = useSelector((state) => state.playlist.madeForYou);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const featuredResponse = await http.get('featured-playlists');
        dispatch(setFeaturedPlaylists(featuredResponse.data.playlists.items));
    
        const recentlyPlayedResponse = await http.get('recently-played');
        dispatch(setRecentlyPlayed(recentlyPlayedResponse.data.items));

        const jumpBackInResponse = await http.get('jump-back-in');
        dispatch(setJumpBackIn(jumpBackInResponse.data.items));

        const madeForYouResponse = await http.get('made-for-you');
        dispatch(setMadeForYou(madeForYouResponse.data.items));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>Featured Playlists</h1>
      {featuredPlaylists.map((playlist) => (
        <div key={playlist.id}>
          <img src={playlist.images[0]?.url} alt={playlist.name} />
          <p>{playlist.name}</p>
        </div>
      ))}

      <h1>Recently Played</h1>
      {recentlyPlayed.map((item) => (
        <div key={item.track.id}>
          <img src={item.track.album.images[0]?.url} alt={item.track.name} />
          <p>{item.track.name}</p>
        </div>
      ))}

      <h1>Jump Back In</h1>
      {jumpBackIn.map((item) => (
        <div key={item.id}>
          <img src={item.images[0]?.url} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}

      <h1>Made For You</h1>
      {madeForYou.map((item) => (
        <div key={item.id}>
          <img src={item.images[0]?.url} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
