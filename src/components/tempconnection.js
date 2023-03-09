import { useState, useEffect } from "react";


const TempConnection = () => {
  const [player, setPlayer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  let id = 34160000;
/*   useEffect(() => {
    console.log("selam: ", id);
    setIsLoading(true);
    //fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Messi')
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
    //fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League')
      .then(response => response.json())
      .then(data => {
        //setPlayer(data?.players[0]);
        setIsLoading(false);
        id++;
        console.log("basarili oyuncu: ", data.players[0].strPlayer)
      })
      .catch(error => console.log(error));
  }, 2001); */

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("selam: ", id);
      setIsLoading(true);
      //fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=Messi')
      fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
      //fetch('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League')
        .then(response => response.json())
        .then(data => {
          setIsLoading(false);
          id++;
          console.log("basarili oyuncu: ", data.players[0].strPlayer)
        })
      .catch(error => console.log(error));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [id]);
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {player ? (
        <div>
          <h1>{player.strPlayer}</h1>
          <p>Position: {player.strPosition}</p>
          <p>Team: {player.strTeam}</p>
          <p>Country: {player.strNationality}</p>
          <img src={player.strRender}/>
        </div>
      ) : (
        <div>No player information available</div>
      )}
    </div>
  );
}

export default TempConnection;
