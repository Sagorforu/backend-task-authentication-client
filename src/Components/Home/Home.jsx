import Header from "../Header.jsx/Header";
import HotelCards from "../Hotels/HotelCards/HotelCards";


const Home = () => {
    return (
        <div className="overflow-y-hidden">
            <Header></Header>
            <HotelCards></HotelCards>
        </div>
    );
};

export default Home;