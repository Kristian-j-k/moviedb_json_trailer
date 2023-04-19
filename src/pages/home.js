import MovieImage from '../assets/Image/movie_black2.jpg';

function Home() {    
  
return (
    <div className="row row-cols-3 row-cols-md-2 m-4">
      <div className='Logo'>MovieFinder</div>
      <img className='rounded movie_img' src={MovieImage} width="460" height="460" alt=''/>
      
    </div>
  );
}
export default Home;