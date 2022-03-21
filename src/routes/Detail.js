import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMovie = async () => {
    const json = await (//await는 async 함수 내부에 있지 않으면 사용할 수 없다
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setLoading(false);
    setMovieInfo(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
         <div>
           <img src={movieInfo.medium_cover_image} alt={movieInfo.title}/>
           <h2>{movieInfo.title_long}</h2>
           <p>{movieInfo.description_intro}</p>
         </div>
       )}
     </div>
  );
}
export default Detail;
