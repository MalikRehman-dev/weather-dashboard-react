import "../css/RecentSearches.css";

function RecentSearches({ searches, onSearch }) {
  return (
    <div className="recent-searches">
    <h2>Recent Searches ({searches.length})</h2>

      {searches.length === 0 ? (
        <p>No recent searches</p>
      ) : (
        <ul>
          {searches.map((city, index) => (
            <li key={index} onClick={() => onSearch(city)}>
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecentSearches;