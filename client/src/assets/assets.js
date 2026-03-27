import logo from './logo.png'
import FMD1 from "./FMD1.png"
import FMP1 from "./FMP1.png"
import LTS from "./LTS.png"
import LT1 from "./LT1.png"
import LT2 from "./LT2.png"
import LT3 from "./LT3.png"
import LT4 from "./LT4.png"
import LT5 from "./LT5.png"
import LT6 from "./LT6.png"
import LT7 from "./LT7.png"
import LT8 from "./LT8.png"
import LT9 from "./LT9.png"
import LT10 from "./LT10.png"
import hero from './hero.jpeg'
import movieSelect from "./movieSelect.png"
import time from "./time.png"
import selectChar from "./selectChar.png"
import bg_logo from './wrap-bg-DuDBFbUF.png'
import p1 from './p1.avif'
import p2 from './p2.avif'
import p3 from './p3.avif'
import p4 from './p4.avif'
import p5 from './p5.avif'
import p6 from './p6.avif'
import p2_cover from './p2-cover.avif'
import download from './download.jfif'
import download1 from './download (1).jfif'
import download2 from './download (2).jfif'
import download3 from './download (3).jfif'
import download4 from './download (4).jfif'
import download5 from './download5.avif'
import images from './images.jfif'
import no_movie_found from './no-movie-found.png'
// import food1 from './LARGE-NACHOS-WITH-CHEESSALSA-56e3bea0-9c1f-11ef-a637-3dbddc68be03.jpg'
import food2 from './LARGEPOPCORN-9efb1970-a716-11ef-b945-57c02e367648.jpg'
import food3 from './POPCORN-COMBO-2-SALTED-(US)-(IP)-ba266f50-904c-11ef-b907-a19bf42cde25.jpg'
import food4 from './POPCORN-COMBO-1-SALTED-(US)-(IP)-167fe750-904c-11ef-bfcf-7fbedf4cf1d4.webp'
import oromeo_cover from './O-Romeo-09.jpeg'
import oromeo_poster from './Apqc5JSXQtUJPcBGm6tBO6wQaoq.webp'
import facebook_logo from './facebook.png'
import google_logo from './google.png'
import apple_logo from './apple_logo.png'
import news_1 from './bride.jpg'
import news_2 from './hoppersthumb.jpg'
import news_3 from './screamthumb.jpg'
import news_4 from './willpacker.jpg'

export const assets = {
  logo,
  hero,
  movieSelect,
  time,
  selectChar,
  bg_logo,
  p2,
  p2_cover,
  download,
  download1,
  download3,
  download5,
  images,
  FMD1,
  FMP1,
  LTS,
  no_movie_found,

  food2,
  food3,
  food4,
  facebook_logo,
  google_logo,
  apple_logo
}





export const nowShowingMovies = [
  {
    id: 1,
    title: "Avatar: The Way of Water",
    poster: p1,
    rating: 7.8,
    duration: "3h 12m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 2,
        title: "Top 10 Sci-Fi Masterpieces Arriving",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Listicle",
        date: "Feb 17, 2026",
        description: "From space epics to AI thrillers, here is what you must watch this year."
      },
    ],
    casts: [
      { name: "Prosenjit Chatterjee", image: download, title: "Actor" },
      { name: "Aryann Bhowmik", image: images, title: "Actor" },
      { name: "Satyam Bhattacharya", image: download1, title: "Actor" },
      { name: "Sreya Bhattacharyya", image: download5, title: "Actor" },
      { name: "Chiranjeet Chakraborty", image: download3, title: "Actor" }
    ],
    crews: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 2,
    title: "Oppenheimer",
    poster: p2,
    rating: 8.9,
    duration: "3h 0m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 2,
        title: "Top 10 Sci-Fi Masterpieces Arriving",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Listicle",
        date: "Feb 17, 2026",
        description: "From space epics to AI thrillers, here is what you must watch this year."
      },
      {
        id: 3,
        title: "Behind the Scenes: How 'Mars 2099' Filmed in Zero Gravity",
        image: "https://images.unsplash.com",
        hasVideo: true,
        videoUrl: "https://www.youtube.com",
        category: "Production",
        date: "Feb 16, 2026",
        description: "Director Christopher Nolan explains the practical effects used in his latest epic."
      }
    ],
    casts: [
      { name: "Cillian Murphy", image: download, title: "Actor" },
      { name: "Emily Blunt", image: images, title: "Actor" },
      { name: "Matt Damon", image: download1, title: "Actor" }
    ],
    crews: [
      { name: "Christopher Nolan", image: FMD1, title: "Director" },
      { name: "Emma Thomas", image: FMP1, title: "Producer" }
    ]
  },

  {
    id: 3,
    title: "Barbie",
    poster: p3,
    rating: 7.1,
    duration: "1h 54m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      },
      {
        id: 5,
        title: "Official Teaser: Marvel's 'X-Men Origins' Reboots the Franchise",
        image: "https://images.unsplash.com",
        hasVideo: true,
        videoUrl: "https://www.youtube.com",
        category: "Trailer",
        date: "Feb 14, 2026",
        description: "The mutants are finally home. Watch the first official teaser for the MCU reboot."
      }
    ],
    casts: [
      { name: "Margot Robbie", image: download, title: "Actor" },
      { name: "Ryan Gosling", image: images, title: "Actor" }
    ],
    crews: [
      { name: "Greta Gerwig", image: FMD1, title: "Director" },
      { name: "David Heyman", image: FMP1, title: "Producer" }
    ]
  },

  {
    id: 4,
    title: "The Super Mario Bros. Movie",
    poster: p4,
    rating: 7.3,
    duration: "1h 32m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      }
    ],
    casts: [
      { name: "Chris Pratt", image: download, title: "Voice Actor" },
      { name: "Anya Taylor-Joy", image: images, title: "Voice Actor" }
    ],
    crews: [
      { name: "Aaron Horvath", image: FMD1, title: "Director" }
    ]
  },

  {
    id: 5,
    title: "The Batman",
    poster: p6,
    rating: 8.2,
    duration: "2h 55m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      }
    ],
    casts: [
      { name: "Robert Pattinson", image: download, title: "Actor" },
      { name: "Zoë Kravitz", image: images, title: "Actor" }
    ],
    crews: [
      { name: "Matt Reeves", image: FMD1, title: "Director" }
    ]
  },

  {
    id: 6,
    title: "Spider-Man: No Way Home",
    poster: p5,
    rating: 8.7,
    duration: "2h 28m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      }
    ],
    casts: [
      { name: "Tom Holland", image: download, title: "Actor" },
      { name: "Zendaya", image: images, title: "Actor" }
    ],
    crews: [
      { name: "Jon Watts", image: FMD1, title: "Director" }
    ]
  },

  {
    id: 7,
    title: "Guardians of the Galaxy Vol. 3",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    rating: 8.1,
    duration: "2h 30m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      }
    ],
    casts: [
      { name: "Chris Pratt", image: download, title: "Actor" },
      { name: "Zoe Saldana", image: images, title: "Actor" }
    ],
    crews: [
      { name: "James Gunn", image: FMD1, title: "Director" }
    ]
  },

  {
    id: 8,
    title: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    rating: 8.0,
    duration: "2h 50m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      }
    ],
    casts: [
      { name: "Timothée Chalamet", image: download, title: "Actor" },
      { name: "Zendaya", image: images, title: "Actor" }
    ],
    crews: [
      { name: "Denis Villeneuve", image: FMD1, title: "Director" }
    ]
  },

  {
    id: 9,
    title: "Mission: Impossible – Dead Reckoning Part One",
    poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    rating: 7.9,
    duration: "2h 45m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      }
    ],
    casts: [
      { name: "Tom Cruise", image: download, title: "Actor" }
    ],
    crews: [
      { name: "Christopher McQuarrie", image: FMD1, title: "Director" }
    ]
  },

  {
    id: 10,
    title: "John Wick: Chapter 4",
    poster: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    rating: 8.3,
    duration: "2h 49m",
    genres: ["Action", "Adventure", "Sci-Fi"],
    release: '25 jan, 2026',
    languages: ['English', 'Hinid', 'Bangla'],
    aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
    featureNews: [
      {
        id: 1,
        title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
        image: assets.p2,
        hasVideo: true,
        videoUrl: "https://www.youtube.com", // Example Trailer
        category: "Exclusive",
        date: "Feb 18, 2026",
        description: "After years of waiting, the detective returns to the big screen for a final case."
      },
      {
        id: 4,
        title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
        image: "https://images.unsplash.com",
        hasVideo: false, // Article only
        category: "Awards",
        date: "Feb 15, 2026",
        description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
      }
    ],
    casts: [
      { name: "Keanu Reeves", image: download, title: "Actor" }
    ],
    crews: [
      { name: "Chad Stahelski", image: FMD1, title: "Director" }
    ]
  }
]


export const trailers = [
  {
    id: 1,
    title: "Rampage",
    genre: ["Action", "Adventure"],
    duration: "2.3m",
    year: "2012",
    description:
      "The epic conclusion to the Dark Knight trilogy. Bane forces Batman to return from exile.",
    thumbnail: LT1,
    videoUrl: "coOKvrsmQiI",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 2,
    title: "Coolie",
    genre: ["Adventure", "Thriller", "Action"],
    duration: "2.8m",
    year: "2010",
    description:
      "A thief who steals corporate secrets through dream-sharing technology.",
    thumbnail: LT2,
    videoUrl: "PuzNA314WCI",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" },
      { name: "Subhash Kapoor", image: FMD1, title: "Singer" }
    ]
  },

  {
    id: 3,
    title: "The Avengers",
    genre: ["Action", "Adventure"],
    duration: "2h 23m",
    year: "2012",
    description:
      "Earth's mightiest heroes must come together to fight Loki and his alien army.",
    thumbnail: LT3,
    videoUrl: "eOrNdBpGMv8",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 4,
    title: "The Bengal Files",
    genre: ["History", "Crime-Fiction", "Thriller"],
    duration: "2h 22m",
    year: "1994",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
    thumbnail: LT4,
    videoUrl: "3MfsZFAeNO8",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 5,
    title: "Saiyaara",
    genre: ["Romance"],
    duration: "2h 34m",
    year: "1994",
    description:
      "The lives of two mob hitmen, a boxer, and a pair of diner bandits intertwine in four tales of violence.",
    thumbnail: LT5,
    videoUrl: "9r-tT5IN0vg",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 6,
    title: "Baaghi 4",
    genre: ["Action", "Adventure", "Thriller", "Drama"],
    duration: "2.30m",
    year: "1972",
    description:
      "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    thumbnail: LT6,
    videoUrl: "6OnQ3EP1NGw",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 7,
    title: "Fighter",
    genre: ["Action", "Adventure", "Thriller"],
    duration: "2m",
    year: "1999",
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    thumbnail: LT7,
    videoUrl: "GJ-wYUcp8Dg",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 8,
    title: "Mirai",
    genre: ["Adventure", "Action", "Science-Fiction"],
    duration: "4m",
    year: "2014",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    thumbnail: LT8,
    videoUrl: "IAx8-DPm59A",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  },

  {
    id: 9,
    title: "Jolly LLB 3",
    genre: ["Comedy", "Drama", "Crime-film"],
    duration: "3m",
    year: "2019",
    description:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy and the poor.",
    thumbnail: LT9,
    videoUrl: "eSgJ8PfSUSk",
    credits: [
      { name: "Subhash Kapoor", image: FMD1, title: "Director" },
      { name: "Alok Jain", image: FMP1, title: "Producer" },
      { name: "Huma Qureshi", image: LTS, title: "Singer" }
    ]
  }
];





export const languages = [
  { id: "en", name: "English" },
  { id: "hi", name: "Hindi" },
  { id: "bn", name: "Bangla" },
  { id: "ta", name: "Tamil" },
  { id: "te", name: "Telugu" },
  { id: "ml", name: "Malayalam" },
  { id: "kn", name: "Kannada" },
];


export const genres = [
  { id: "action", name: "Action" },
  { id: "adventure", name: "Adventure" },
  { id: "comedy", name: "Comedy" },
  { id: "drama", name: "Drama" },
  { id: "thriller", name: "Thriller" },
  { id: "sci-fi", name: "Sci-Fi" },
  { id: "fantasy", name: "Fantasy" },
  { id: "romance", name: "Romance" },
  { id: "horror", name: "Horror" },
  { id: "animation", name: "Animation" },
  { id: "crime", name: "Crime" },
  { id: "mystery", name: "Mystery" },
];


export const formats = [
  { id: "2d", name: "2D" },
  { id: "3d", name: "3D" },
  { id: "imax", name: "IMAX" },
  { id: "imax-3d", name: "IMAX 3D" },
  { id: "4dx", name: "4DX" },
  { id: "screenx", name: "ScreenX" },
];



export const movieFilters = [
  {
    id: "genres",
    label: "Genres",
    options: [
      { label: "Action", value: "action" },
      { label: "Comedy", value: "comedy" },
      { label: "Drama", value: "drama" },
      { label: "Sci-Fi", value: "sci-fi" },
      { label: "Horror", value: "horror" },
      { label: "Thriller", value: "thriller" },
      { label: "Animation", value: "animation" },
      { label: "Documentary", value: "documentary" }
    ]
  },
  {
    id: "languages",
    label: "Languages",
    options: [
      { label: "English", value: "en" },
      { label: "Bengali", value: "bn" },
      { label: "Hindi", value: "hi" },
      { label: "Spanish", value: "es" },
      { label: "Korean", value: "ko" }
    ]
  },
  {
    id: "formats",
    label: "Formats",
    options: [
      { label: "4K Ultra HD", value: "4k" },
      { label: "Full HD (1080p)", value: "1080p" },
      { label: "HD (720p)", value: "720p" },
      { label: "CAM Rip", value: "cam" }
    ]
  }
];




export const theatreList = [
  /* ===================== t1 ===================== */
  {
    id: "t1",
    name: "Star Cineplex",
    location: {
      address: "Bashundhara City, Dhaka",
      divisionId: 'dhaka',
      cityId: 'dhaka-city',
      coordinates: { type: "Point", coordinates: [90.42, 23.7806] }
    },
    rating: 4.5,
    screens: 10,
    image: "https://images.unsplash.com/photo-1585647347483-22b66260dfff",
    facilities: [
      "Online Booking",
      "Wheelchair Access",
      "WiFi",
      "Food Court",
      "Recliner Seats",
      "Parking Available"
    ],
    formats: ['2D', '3D', 'IMAX'],
    reviews: [
      { user: "Rahim Ahmed", rating: 5, comment: "Amazing sound system and very comfortable seats." },
      { user: "Nusrat Jahan", rating: 4, comment: "Clean environment, booking process was smooth." }
    ],
    nowShowingMovies: [
      {
        movieId: "m1",
        title: "Avatar: The Way of Water",
        poster: "/src/assets/p2.avif",
        duration: "2 hr 30 min",
        genres: ["Action", "Adventure", "Sci-Fi"],
        release: '25 jan, 2026',
        languages: ['English', 'Hinid', 'Bangla'],
        aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
        featureNews: [
          {
            id: 1,
            title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
            image: assets.p2,
            hasVideo: true,
            videoUrl: "https://www.youtube.com", // Example Trailer
            category: "Exclusive",
            date: "Feb 18, 2026",
            description: "After years of waiting, the detective returns to the big screen for a final case."
          },
          {
            id: 4,
            title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
            image: "https://images.unsplash.com",
            hasVideo: false, // Article only
            category: "Awards",
            date: "Feb 15, 2026",
            description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
          }
        ],
        casts: [
          { name: "Keanu Reeves", image: download, title: "Actor" }
        ],
        crews: [
          { name: "Chad Stahelski", image: FMD1, title: "Director" }
        ],
        shows: [
          { showId: "t1_m1_1", format: "IMAX", date: "2026-03-17", hall: "Hall 1", time: "10:00 AM", language: "English" },
          { showId: "t1_m1_2", format: "IMAX", date: "2026-03-17", hall: "Hall 5", time: "1:00 PM", language: "Hindi" },
          { showId: "t1_m1_3", format: "IMAX", date: "2026-03-17", hall: "Hall 1", time: "7:00 PM", language: "English" },
          { showId: "t1_m1_7", format: "IMAX", date: "2026-03-17", hall: "Hall 2", time: "2:00 PM", language: "English" },
          { showId: "t1_m1_8", format: "IMAX", date: "2026-03-12", hall: "Hall 3", time: "6:00 PM", language: "Hindi" },

          { showId: "t1_m1_4", format: "3D", date: "2026-03-17", hall: "Hall 2", time: "11:00 AM", language: "English" },
          { showId: "t1_m1_5", format: "3D", date: "2026-02-27", hall: "Hall 2", time: "4:00 PM", language: "Hindi" },
          { showId: "t1_m1_6", format: "2D", date: "2026-03-14", hall: "Hall 2", time: "6:00 PM", language: "English" },
          { showId: "t1_m1_6", format: "4DX", date: "2026-03-07", hall: "Hall 2", time: "6:00 PM", language: "English" }
        ]
      },
      {
        movieId: "m2",
        title: "Jawan",
        poster: "https://image.tmdb.org/t/p/w500/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
        duration: "2 hr 30 min",
        genres: ["Action", "Adventure", "Sci-Fi"],
        release: '25 jan, 2026',
        languages: ['English', 'Hinid', 'Bangla'],
        aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
        featureNews: [
          {
            id: 1,
            title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
            image: assets.p2,
            hasVideo: true,
            videoUrl: "https://www.youtube.com", // Example Trailer
            category: "Exclusive",
            date: "Feb 18, 2026",
            description: "After years of waiting, the detective returns to the big screen for a final case."
          },
          {
            id: 4,
            title: "Oscar Predictions: Is 'The Last Piano' the Frontrunner for Best Picture?",
            image: "https://images.unsplash.com",
            hasVideo: false, // Article only
            category: "Awards",
            date: "Feb 15, 2026",
            description: "Critics are calling it a masterpiece, but the competition is tougher than ever."
          }
        ],
        casts: [
          { name: "Keanu Reeves", image: download, title: "Actor" }
        ],
        crews: [
          { name: "Chad Stahelski", image: FMD1, title: "Director" }
        ],
        shows: [
          { showId: "t1_m2_1", format: "2D", date: "2026-03-14", hall: "Hall 3", time: "11:30 AM", language: "Hindi" },
          { showId: "t1_m2_2", format: "2D", date: "2026-03-14", hall: "Hall 3", time: "4:00 PM", language: "Hindi" },
          { showId: "t1_m2_3", format: "2D", date: "2026-02-23", hall: "Hall 3", time: "9:30 PM", language: "Hindi" },

          { showId: "t1_m2_4", format: "IMAX", date: "2026-03-14", hall: "Hall 3", time: "11:30 PM", language: "English" }
        ]
      },
      {
        movieId: "m3",
        title: "Oppenheimer",
        poster: p4,
        duration: "2 hr 30 min",
        genres: ["Action", "Adventure", "Sci-Fi"],
        release: '25 jan, 2026',
        languages: ['English', 'Hinid', 'Bangla'],
        aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
        featureNews: [
          {
            id: 1,
            title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
            image: assets.p2,
            hasVideo: true,
            videoUrl: "https://www.youtube.com", // Example Trailer
            category: "Exclusive",
            date: "Feb 18, 2026",
            description: "After years of waiting, the detective returns to the big screen for a final case."
          }
        ],
        casts: [
          { name: "Keanu Reeves", image: download, title: "Actor" }
        ],
        crews: [
          { name: "Chad Stahelski", image: FMD1, title: "Director" }
        ],
        shows: [
          { showId: "t1_m3_1", format: "IMAX", date: "2026-03-17", hall: "Hall 4", time: "2:00 PM", language: "English" },
          { showId: "t1_m3_2", format: "IMAX", date: "2026-02-17", hall: "Hall 4", time: "6:00 PM", language: "English" }
        ]
      },
        {
        movieId: "m3",
        title: "Dumketu",
        poster: p4,
        duration: "2 hr 30 min",
        genres: ["Action", "Adventure", "Sci-Fi"],
        release: '25 jan, 2026',
        languages: ['English', 'Hinid', 'Bangla'],
        aboutMovie: 'Kakababu embarks on a quest for a legendary treasure, unravelling ancient mysteries and confronting deadly adversaries. As danger lurks at every turn. What secrets lie within the legendary treasure Kakababu seeks as he unravels ancient mysteries and battles deadly adversaries. Will his relentless pursuit lead to glory or peril?',
        featureNews: [
          {
            id: 1,
            title: "The Return of Sherlock: Benedict Cumberbatch Confirms New Movie",
            image: assets.p2,
            hasVideo: true,
            videoUrl: "https://www.youtube.com", // Example Trailer
            category: "Exclusive",
            date: "Feb 18, 2026",
            description: "After years of waiting, the detective returns to the big screen for a final case."
          }
        ],
        casts: [
          { name: "Keanu Reeves", image: download, title: "Actor" }
        ],
        crews: [
          { name: "Chad Stahelski", image: FMD1, title: "Director" }
        ],
        shows: [
          { showId: "t1_m3_1", format: "IMAX", date: "2026-03-17", hall: "Hall 4", time: "2:00 PM", language: "English" },
          { showId: "t1_m3_2", format: "IMAX", date: "2026-02-17", hall: "Hall 4", time: "6:00 PM", language: "English" }
        ]
      }
    ]
  },

  /* ===================== t2 ===================== */
  {
    id: "t2",
    name: "Ruposhi Bangla Cinema",
    location: {
      address: "Mohakhali, Dhaka",
      divisionId: 'dhaka',
      cityId: 'dhaka-city',
      coordinates: { type: "Point", coordinates: [90.4, 23.78] }
    },
    rating: 4.1,
    screens: 6,
    image: "https://images.unsplash.com/photo-1604975701397-6365ccbd028a",
    facilities: ["Online Booking", "WiFi", "Food Court", "Recliner Seats", "Parking Available"],
    formats: ['2D', '3D', 'IMAX'],
    reviews: [
      { user: "Sabbir Khan", rating: 4, comment: "Good experience, seats were comfy." },
      { user: "Tania Islam", rating: 4, comment: "Nice place for family movie nights." }
    ],
    nowShowingMovies: [
      {
        movieId: "m4",
        title: "Shurongo",
        poster: "https://image.tmdb.org/t/p/w500/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
        shows: [
          { showId: "t2_m4_1", format: "2D", date: "2026-02-17", hall: "Hall 1", time: "12:00 PM", language: "Bangla" },
          { showId: "t2_m4_2", format: "2D", date: "2026-03-16", hall: "Hall 1", time: "3:30 PM", language: "Bangla" },
          { showId: "t2_m4_3", format: "2D", date: "2026-02-17", hall: "Hall 1", time: "8:30 PM", language: "Bangla" }
        ]
      },
      {
        movieId: "m1",
        title: "Avatar: The Way of Water",
        poster: "/src/assets/p2.avif",
        duration: "2 hr 30 min",
        shows: [
          { showId: "t1_m1_1", format: "IMAX", date: "2026-03-17", hall: "Hall 1", time: "10:00 AM", language: "English" },
          { showId: "t1_m1_2", format: "IMAX", date: "2026-03-17", hall: "Hall 5", time: "10:00 PM", language: "Hindi" },
          { showId: "t1_m1_2", format: "2D", date: "2026-03-12", hall: "Hall 5", time: "1:00 PM", language: "Hindi" },
        ]
      },
    ]
  },

  /* ===================== t3 ===================== */
  {
    id: "t3",
    name: "Balaka Cinema Hall",
    location: {
      address: "Motijheel, Dhaka",
      divisionId: 'dhaka',
      cityId: 'dhaka-city',
      coordinates: { type: "Point", coordinates: [90.42, 23.73] }
    },
    rating: 3.9,
    screens: 4,
    image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0",
    facilities: ["Wheelchair Access", "WiFi", "Food Court"],
    formats: ['2D', '3D', 'IMAX'],
    reviews: [
      { user: "Arif Hossain", rating: 4, comment: "Budget-friendly and decent overall." },
      { user: "Mithila Roy", rating: 3, comment: "Could improve screen quality." }
    ],
    nowShowingMovies: [
      {
        movieId: "m7",
        title: "Monpura",
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/Monpura_film_poster.jpg",
        shows: [
          { showId: "t3_m7_1", format: "2D", date: "2026-02-08", hall: "Hall 1", time: "10:30 AM", language: "Bangla" },
          { showId: "t3_m7_2", format: "2D", date: "2026-02-08", hall: "Hall 1", time: "1:30 PM", language: "Bangla" },
          { showId: "t3_m7_3", format: "2D", date: "2026-02-08", hall: "Hall 1", time: "4:30 PM", language: "Bangla" }
        ]
      }
    ]
  },

  /* ===================== t4 ===================== */
  {
    id: "t4",
    name: "Shyamoli Cinema",
    location: {
      address: "Shyamoli, Dhaka",
      divisionId: 'dhaka',
      cityId: 'gazipur',
      coordinates: { type: "Point", coordinates: [90.37, 23.7805] }
    },
    rating: 4.3,
    screens: 7,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
    facilities: ["Online Booking", "WiFi", "Recliner Seats", "QR Entry"],
    formats: ['2D', '3D', 'IMAX'],
    reviews: [
      { user: "Imran Chowdhury", rating: 5, comment: "Dolby Atmos experience is top-notch!" },
      { user: "Farhana Akter", rating: 4, comment: "Great ambience and easy entry." }
    ],
    nowShowingMovies: [
      {
        movieId: "m9",
        title: "Salaar",
        poster: "https://image.tmdb.org/t/p/w500/1yppMeTNQwDrzaUH4dRCx4mr8We.jpg",
        shows: [
          { showId: "t4_m9_1", format: "IMAX", date: "2026-03-03", hall: "Hall 1", time: "12:00 PM", language: "Hindi" },
          { showId: "t4_m9_2", format: "IMAX", date: "2026-03-03", hall: "Hall 1", time: "4:00 PM", language: "Hindi" },
          { showId: "t4_m9_3", format: "IMAX", date: "2026-03-03", hall: "Hall 1", time: "10:00 PM", language: "Hindi" }
        ]
      }
    ]
  },

  /* ===================== t5 ===================== */
  {
    id: "t5",
    name: "Impress Cineplex",
    location: {
      address: "Jamuna Future Park, Dhaka",
      divisionId: 'dhaka',
      cityId: 'gazipur',
      coordinates: { type: "Point", coordinates: [90.4205, 23.816] }
    },
    rating: 4.6,
    screens: 9,
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b",
    facilities: [
      "Online Booking",
      "Wheelchair Access",
      "WiFi",
      "Food Court",
      "Recliner Seats",
      "Parking Available"
    ],
    formats: ['2D', '3D', 'IMAX'],
    reviews: [
      { user: "Tanvir Hasan", rating: 5, comment: "Best cineplex in Dhaka, premium experience." },
      { user: "Sadia Rahman", rating: 4, comment: "Seats and screen quality are excellent." }
    ],
    nowShowingMovies: [
      {
        movieId: "m19",
        title: "Movie A",
        poster: "https://via.placeholder.com/200x300?text=Movie+A",
        shows: [
          { showId: "t5_m19_1", format: "2D", date: "2026-03-03", hall: "Hall 1", time: "10:15 AM", language: "English" },
          { showId: "t5_m19_2", format: "2D", date: "2026-03-03", hall: "Hall 1", time: "1:15 PM", language: "English" },
          { showId: "t5_m19_3", format: "2D", date: "2026-03-03", hall: "Hall 1", time: "4:15 PM", language: "English" }
        ]
      }
    ]
  }
];





export const theatres = [
  {
    id: "t1",
    name: "Star Cineplex",
    branch: "Bashundhara City",
    city: "Dhaka",
    screens: ["IMAX", "2D", "VIP"],
  },
  {
    id: "t2",
    name: "Star Cineplex",
    branch: "Shimanto Square",
    city: "Dhaka",
    screens: ["2D", "3D"],
  },
  {
    id: "t3",
    name: "Blockbuster Cinemas",
    branch: "Jamuna Future Park",
    city: "Dhaka",
    screens: ["IMAX", "2D"],
  },
  {
    id: "t4",
    name: "Lion Cinemas",
    branch: "Chattogram",
    city: "Chattogram",
    screens: ["2D"],
  },
  {
    id: "t5",
    name: "Silver Screen",
    branch: "Sylhet",
    city: "Sylhet",
    screens: ["2D", "VIP"],
  },
];





export const movieTheatreMap = [
  {
    movieId: "m1",
    theatreIds: ["t1", "t3"],
  },
  {
    movieId: "m2",
    theatreIds: ["t1", "t2", "t5"],
  },
  {
    movieId: "m3",
    theatreIds: ["t2", "t4"],
  },
  {
    movieId: "m4",
    theatreIds: ["t1", "t3", "t5"],
  },
  {
    movieId: "m5",
    theatreIds: ["t3"],
  },
];




export const shows = [
  {
    id: "s1",
    movieId: "m1",
    theatreId: "t1",
    screen: "IMAX",
    format: "IMAX 2D",
    date: "2026-02-05",
    times: [
      { time: "12:30 PM", price: 600 },
      { time: "4:00 PM", price: 650 },
      { time: "9:30 PM", price: 700 },
    ],
  },
  {
    id: "s2",
    movieId: "m1",
    theatreId: "t3",
    screen: "IMAX",
    format: "IMAX 2D",
    date: "2026-02-05",
    times: [
      { time: "3:00 PM", price: 650 },
      { time: "8:45 PM", price: 720 },
    ],
  },
  {
    id: "s3",
    movieId: "m2",
    theatreId: "t2",
    screen: "3D",
    format: "3D",
    date: "2026-02-05",
    times: [
      { time: "2:15 PM", price: 500 },
      { time: "7:00 PM", price: 550 },
    ],
  },
  {
    id: "s4",
    movieId: "m2",
    theatreId: "t5",
    screen: "VIP",
    format: "2D",
    date: "2026-02-05",
    times: [
      { time: "6:30 PM", price: 800 },
    ],
  },
  {
    id: "s5",
    movieId: "m3",
    theatreId: "t4",
    screen: "2D",
    format: "2D",
    date: "2026-02-05",
    times: [
      { time: "1:00 PM", price: 350 },
      { time: "5:30 PM", price: 400 },
    ],
  },
];


export const heroMovies = [
  {
    id: 1,
    title: "O Romeo",
    description: "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.",
    duration: "2h 46m",
    rating: "8.8",
    genre: "Sci-Fi, Adventure",
    poster: oromeo_poster, // Vertical
    cover: oromeo_cover,  // Landscape for Hero
    releaseYear: 2024
  },
  {
    id: 2,
    title: "The Batman",
    description: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
    duration: "2h 56m",
    rating: "7.8",
    genre: "Action, Crime, Drama",
    poster: oromeo_poster,
    cover: oromeo_cover,
    releaseYear: 2022
  },
  {
    id: 3,
    title: "Spider-Man: Across the Spider-Verse",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its existence.",
    duration: "2h 20m",
    rating: "8.6",
    genre: "Animation, Action",
    poster: p2,
    cover: p2,
    releaseYear: 2023
  },
  {
    id: 4,
    title: "Oppenheimer",
    description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
    duration: "3h 0m",
    rating: "8.4",
    genre: "Biography, Drama",
    poster: p3,
    cover: p3,
    releaseYear: 2023
  },
  {
    id: 5,
    title: "Interstellar",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    duration: "2h 49m",
    rating: "8.7",
    genre: "Sci-Fi, Drama",
    poster: "https://image.tmdb.org",
    cover: "https://image.tmdb.org",
    releaseYear: 2014
  }
];


export const FeatureNews = [
  {
    id: "feat_001",
    layout_type: "hero_video",
    content_type: "exclusive_interview",
    title: "Will Packer Interview",
    headline: "Will Packer: Why Rom-Coms Need a Theatrical Comeback in 2026",
    content_blocks: [
      {
        type: "paragraph",
        text: "In an exclusive sit-down with <span class='highlight'>Jacqueline Coley</span>, blockbuster producer Will Packer opens up about the changing landscape of cinema. After years of streaming dominance, Packer argues that the collective experience of laughing and crying in a dark theater is something that can never be replicated at home. 'There is a certain electricity in a shared moment,' Packer notes during our 20-minute conversation."
      },
      {
        type: "sub_headline",
        text: "The Vision Behind 'You, Me & Tuscany'"
      },
      {
        type: "paragraph",
        text: "Packer’s latest venture, <span class='highlight'>'You, Me & Tuscany'</span>, isn't just a romance; it's a celebration of Black joy set against the most breathtaking landscapes of Italy. He explains that choosing the Amalfi Coast was intentional—it provides a cinematic scale that demands a big screen. The film follows a young chef (Halle Bailey) who finds herself in a complicated web of lies and love after a chance encounter in a historic villa."
      },
      {
        type: "quote_box",
        text: "We didn't just want to make a movie; we wanted to create a cultural event that feels both specific to our roots and undeniably universal for everyone who has ever been in love.",
        author: "Will Packer"
      },
      {
        type: "paragraph",
        text: "The interview also touches on the incredible chemistry between the leads. According to Packer, from the very first chemistry read, <span class='highlight'>Halle Bailey</span> and <span class='highlight'>Regé-Jean Page</span> had a spark that reminded the production team of the classic Hollywood era of Hepburn and Tracy."
      }
    ],
    media: {
      thumbnail: news_1,
      video_url: "https://www.youtube.com",
      duration: "12:45"
    },
    metadata: {
      author: "Jacqueline Coley",
      category: "Seen on the Screen",
      date: "March 9, 2026"
    }
  },
  {
    id: "feat_002",
    layout_type: "standard_article",
    content_type: "movie_news",
    title: "Halle Bailey's Adventure",
    headline: "Exclusive: How Halle Bailey Prepared for Her Most Romantic Role Yet",
    content_blocks: [
      {
        type: "paragraph",
        text: "Fresh off the global phenomenon of 'The Little Mermaid', <span class='highlight'>Halle Bailey</span> is diving into a very different kind of role. In 'You, Me & Tuscany', she plays Mia, a culinary student who finds herself entangled in a fake engagement with a charming Italian villa owner’s son. To prepare for the role, Halle spent three weeks in Florence learning traditional pasta-making and perfecting her Italian accent."
      },
      {
        type: "sub_headline",
        text: "Finding Magic in the Amalfi Coast"
      },
      {
        type: "paragraph",
        text: "The production was not without its challenges. Filming during the height of the Italian summer meant long days under the sun, but the cast found inspiration in the local culture. 'Every morning we woke up to the smell of fresh lemon groves and the sound of the ocean,' Halle told Fandango. This atmospheric beauty is captured in every frame of the film, thanks to the visionary direction of <span class='highlight'>Kat Coiro</span>."
      },
      {
        type: "quote_box",
        text: "This movie is about finding your voice and your heart in a place where you're meant to be a complete stranger. It's a journey of self-discovery as much as it is a romance.",
        author: "Halle Bailey"
      },
      {
        type: "paragraph",
        text: "Industry insiders are already predicting a massive opening weekend, as fans are eager to see Halle transition from fantasy to a grounded, heart-warming romantic comedy that celebrates her range as a leading lady."
      }
    ],
    media: {
      thumbnail: news_2,
      image_alt: "Halle Bailey on set at a historic Italian villa"
    },
    metadata: {
      author: "Fandango News Desk",
      category: "News",
      date: "March 8, 2026"
    }
  },
  {
    id: "feat_003",
    layout_type: "listicle_card",
    content_type: "box_office",
    title: "Weekend Box Office",
    headline: "Box Office Analysis: Why 'You, Me & Tuscany' is Over-Performing",
    content_blocks: [
      {
        type: "paragraph",
        text: "The box office landscape in March 2026 is seeing a massive shift. While action sequels usually dominate this time of year, a mid-budget romantic comedy has shocked analysts by taking the top spot. Experts attribute this to a 'hunger for escapism' and the massive social media following of its stars."
      },
      {
        type: "sub_headline",
        text: "Breaking Down the Numbers"
      },
      {
        type: "paragraph",
        text: "With an estimated <span class='highlight'>$45 million</span> opening weekend, 'You, Me & Tuscany' has outperformed several blockbusters. The film's success is particularly strong in urban markets and among Gen Z audiences who have turned the film’s catchy soundtrack into a viral sensation."
      }
    ],
    list_data: [
      { rank: 1, movie_name: "You, Me & Tuscany", score: "98%", status: "New" },
      { rank: 2, movie_name: "Dune: Part Two", score: "94%", status: "Holding" },
      { rank: 3, movie_name: "Spider-Man: Beyond the Spider-Verse", score: "97%", status: "Holding" },
      { rank: 4, movie_name: "Kung Fu Panda 4", score: "89%", status: "Dropping" },
      { rank: 5, movie_name: "The Batman II", score: "91%", status: "Classic" }
    ],
    media: {
      thumbnail: news_3
    },
    metadata: {
      author: "Market Analysts",
      category: "Charts",
      date: "March 7, 2026"
    }
  },
  {
    id: "feat_004",
    layout_type: "gallery_view",
    content_type: "photo_gallery",
    title: "Tuscany Gallery",
    headline: "Behind the Lens: The Visual Artistry of Tuscany’s Amalfi Coast",
    content_blocks: [
      {
        type: "paragraph",
        text: "Cinematography is at the heart of this year’s most beautiful film. Our exclusive gallery takes you behind the scenes to see how the lighting and natural landscapes of Italy were used to create a dreamy, romantic atmosphere that feels like a painting come to life."
      },
      {
        type: "sub_headline",
        text: "Capturing the Golden Hour"
      },
      {
        type: "paragraph",
        text: "The director of photography, <span class='highlight'>Autumn Durald Arkapaw</span>, utilized the natural light of the Italian coast to give the film its signature glow. From candlelit dinners in ancient gardens to sunset walks on the beach, these photos show the meticulous effort that went into every shot."
      }
    ],
    media: {
      thumbnail: news_4,
      gallery_images: [
        "https://images.example.com",
        "https://images.example.com",
        "https://images.example.com",
        "https://images.example.com"
      ]
    },
    metadata: {
      author: "Photography Team",
      category: "Photos",
      date: "March 5, 2026"
    }
  }
];

