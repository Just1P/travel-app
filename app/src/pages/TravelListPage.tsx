import TravelList from "../components/TravelList";

const TravelListPage = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-red-400 text-4xl mb-10">Share your travel</h1>

      <TravelList />
    </div>
  );
};

export default TravelListPage;
