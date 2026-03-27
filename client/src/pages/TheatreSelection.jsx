import React from "react";
import { shows, theatres } from "../assets/assets";


const TheatreSelection = () => {
  const selectedMovieId = "m1"; // dummy (normally from route / state)

  const movieShows = shows.filter(
    (show) => show.movieId === selectedMovieId
  );

  return (
    <div className="min-h-screen bg-[#0b0617] text-white px-6 md:px-20 py-10">
      
      {/* PAGE TITLE */}
      <h1 className="text-3xl font-semibold mb-8">
        Select Theatre & Showtime
      </h1>

      {/* THEATRE LIST */}
      <div className="space-y-6">
        {theatres.map((theatre) => {
          const theatreShows = movieShows.filter(
            (show) => show.theatreId === theatre.id
          );

          if (theatreShows.length === 0) return <p>nbhjbvhb</p>;

          return (
            <div
              key={theatre.id}
              className="bg-[#140c2e] rounded-xl p-6"
            >
              {/* THEATRE INFO */}
              <div className="mb-4">
                <h2 className="text-xl font-medium">
                  {theatre.name}
                </h2>
                <p className="text-sm text-gray-400">
                  {theatre.branch}, {theatre.city}
                </p>
              </div>

              {/* SHOWTIMES */}
              {theatreShows.map((show) => (
                <div key={show.id} className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-sm rounded bg-red-600">
                      {show.screen}
                    </span>
                    <span className="text-sm text-gray-300">
                      {show.format}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {show.times.map((slot, index) => (
                      <button
                        key={index}
                        className="px-4 py-2 rounded border border-gray-500 hover:bg-red-600 hover:border-red-600 transition"
                        onClick={() =>
                          alert(
                            `Selected ${slot.time} | ৳${slot.price}`
                          )
                        }
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheatreSelection;
