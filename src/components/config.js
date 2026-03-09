const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0000", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Masukkan Password", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Password salah, hint: tanggal kita main Roblox", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Kenapa pacar aku manis sekali?", // Example trending search query
    "Apakah aku sepesek itu?", // Another example query
    `Tanggal lahir Rezki `, // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "Sudah berapa lama ya kami bersama?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-07-18", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "Kita sudah bersama selama:", // Title displayed on the timer page
  timerMessage: "... aku masih ngitung ya <3", // Message shown alongside the timer
  timeUnits: {
    days: "Hari", // Label for days in the timer
    hours: "Jam", // Label for hours in the timer
    minutes: "Menit", // Label for minutes in the timer
    seconds: "Detik", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Aww liat foto bebeb aku deh", // Title for the recap page
  clickMeText: "klik aku!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Lagu ini mengingati aku dengan mu", // Title for the music page
  homeMusic: "/songs/home.mp3",
  musicGallery: [
    {
      title: "Obsessed", // Title of the song
      artist: "Mariah Carey", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
      src: "/songs/1.mp3",
    },
    {
      title: "Uno Dos Tres",
      artist: "Relle Bey",
      left: "40%",
      top: "15%",
      src: "/songs/2.mp3",
    },
    {
      title: "Is There Someone Else",
      artist: "The Weeknd",
      left: "15%",
      top: "40%",
      src: "/songs/3.mp3",
    },
    {
      title: "Company",
      artist: "Justin Bieber",
      left: "30%",
      top: "75%",
      src: "/songs/4.mp3",
    },
    {
      title: "Versace On The Floor",
      artist: "Bruno Mars",
      left: "5%",
      top: "65%",
      src: "/songs/5.mp3",
    },
    {
      title: "Die For You",
      artist: "The Weeknd, Ariana Grande",
      left: "25%",
      top: "90%",
      src: "/songs/6.mp3",
    },
    {
      title: "Earned It (Fifty Shades OF Grey)",
      artist: "The Weeknd",
      left: "35%",
      top: "50%",
      src: "/songs/7.mp3",
    },
    {
      title: "MakeItToTheMorning",
      artist: "PARTYNEXTDOOR",
      left: "10%",
      top: "25%",
      src: "/songs/8.mp3",
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "That Moment", // Title for the messages recap page
    messageGallery: [
      { title: "July 18, 2025", description: "Ingat lagi saat kita pertama kenal, hahaha lucu sekali di map TERAPI." }, // Message entry
      { title: "October 25, 2025", description: "Your BF ❤️" },
      { title: "November 25, 2025", description: "''I just wanna see you shine 'cause I know you are a stargirl'' Stargirl Interlude - Abel ''The Weeknd'' Tesfaye" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Hammy ❤️ Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "September 5, 2025", description: "Thats Official, Right? 🎉" }, // Picture entry
      { title: "October 29, 2025", description: "how cute, pinky💕, and Fancy" },
      { title: "November 27 , 2025 ", description: "Ma Mommy, I need Mommy. Hug for me mommy. Aww Mommy" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Selamat Ulang Tahun Hammy💖, cie dah 23 tahun aww", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: " Selamat ulang tahun yang ke-23, Hammy. 🎂 Terima kasih sudah hadir dalam hidupku dan membuat banyak hari terasa lebih berarti. Semoga di usia yang baru ini semua mimpi dan doa kamu perlahan menemukan jalannya. Semoga dunia selalu baik sama kamu seperti baiknya kamu hadir di hidupku. 🤍 ", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Back", // Text for the previous page button
  nextPageText: "Lanjut", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "Sudah berapa lama ya kami bersama?", // Example of a correct search query
    "Sudah berapa lama ya kami bersama", // Another example of a correct search query
  ],
};

export default config;
