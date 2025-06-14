// QUIZ APP WITH TIMER JS LOGICS !!!!!

// ---------------------  QUESTIONS BY CATEGORY ------------------------------
const allQuestions = {
 science: [
    { 
        question: "What is the main gas found in the air we breathe?", 
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], 
        answer: "Nitrogen" },
    { 
        question: "Which part of the plant conducts photosynthesis?", 
        options: ["Roots", "Stem", "Leaves", "Flowers"], 
        answer: "Leaves" },
    { 
        question: "Which of these animals is a mammal?", 
        options: ["Shark", "Frog", "Whale", "Turtle"], 
        answer: "Whale" },
    { 
        question: "What is the boiling point of water?", 
        options: ["90°C", "100°C", "110°C", "120°C"], 
        answer: "100°C" },
    { 
        question: "Which planet is known as the 'Morning Star'?", 
        options: ["Mars", "Venus", "Saturn", "Mercury"], 
        answer: "Venus" },
    { 
        question: "Which organ pumps blood in the human body?", 
        options: ["Brain", "Kidney", "Heart", "Lungs"], 
        answer: "Heart" },
    { 
        question: "Which of these is not a sense organ?", 
        options: ["Eye", "Ear", "Liver", "Nose"], 
        answer: "Liver" },
    { 
        question: "What do you call animals that eat only plants?", 
        options: ["Herbivores", "Carnivores", "Omnivores", "Decomposers"], 
        answer: "Herbivores" },
    { 
        question: "How many days does Earth take to orbit the Sun?", 
        options: ["24", "7", "365", "30"], 
        answer: "365" },
    { 
        question: "Which metal is used to make wires for electricity?", 
        options: ["Iron", "Copper", "Aluminum", "Silver"], 
        answer: "Copper" },
    { 
        question: "Which part of the cell contains genetic material?", 
        options: ["Cytoplasm", "Cell Membrane", "Nucleus", "Ribosome"], 
        answer: "Nucleus" },
    { 
        question: "What causes the common cold?", 
        options: ["Bacteria", "Virus", "Fungus", "Mosquito"], 
        answer: "Virus" },
    { 
        question: "Which state of matter has no fixed shape but has a fixed volume?", 
        options: ["Solid", "Liquid", "Gas", "Plasma"], 
        answer: "Liquid" },
    { 
        question: "Which planet has the Great Red Spot?", 
        options: ["Earth", "Jupiter", "Mars", "Saturn"], 
        answer: "Jupiter" },
    { 
        question: "Which of the following is a conductor of electricity?", 
        options: ["Rubber", "Wood", "Plastic", "Copper"], 
        answer: "Copper" },
    { 
        question: "What is the process by which plants lose water through their leaves?", 
        options: ["Respiration", "Photosynthesis", "Transpiration", "Evaporation"], 
        answer: "Transpiration" },
    { 
        question: "Which vitamin helps in blood clotting?", 
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"], 
        answer: "Vitamin K" },
    { 
        question: "Which of these is NOT a renewable resource?", 
        options: ["Sunlight", "Wind", "Coal", "Water"], 
        answer: "Coal" },
    { 
        question: "Which part of the brain controls hunger?", 
        options: ["Cerebrum", "Hypothalamus", "Cerebellum", "Medulla"], 
        answer: "Hypothalamus" },
    { 
        question: "What force pulls objects toward the center of the Earth?", 
        options: ["Friction", "Gravity", "Magnetism", "Pressure"], 
        answer: "Gravity" },
    { 
        question: "Which of the following is a chemical change?", 
        options: ["Melting ice", "Boiling water", "Rusting iron", "Cutting paper"], 
        answer: "Rusting iron" },
    { 
        question: "Which animal can survive without drinking water for long periods?", 
        options: ["Elephant", "Camel", "Giraffe", "Lion"], 
        answer: "Camel" },
    { 
        question: "Which planet has the most extreme greenhouse effect?", 
        options: ["Earth", "Mars", "Venus", "Mercury"], 
        answer: "Venus" },
    { 
        question: "Which part of the ear helps maintain balance?", 
        options: ["Cochlea", "Eardrum", "Semicircular Canals", "Hammer"], 
        answer: "Semicircular Canals" },
    { 
        question: "Which of the following is a non-metal that conducts electricity?", 
        options: ["Graphite", "Sulfur", "Phosphorus", "Chlorine"], 
        answer: "Graphite" },
    { 
        question: "Which gas is released during photosynthesis?", 
        options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], 
        answer: "Oxygen" },
    { 
        question: "Which instrument measures atmospheric pressure?", 
        options: ["Thermometer", "Barometer", "Anemometer", "Hygrometer"], 
        answer: "Barometer" },
    { 
        question: "Which of the following is a vertebrate?", 
        options: ["Snail", "Worm", "Fish", "Spider"], 
        answer: "Fish" },
    { 
        question: "Which acid is present in lemon?", 
        options: ["Citric Acid", "Acetic Acid", "Hydrochloric Acid", "Sulfuric Acid"], 
        answer: "Citric Acid" },
    { 
        question: "Which of the following is a primary color of light?", 
        options: ["Yellow", "Green", "Brown", "Black"], 
        answer: "Green" },
     { 
        question: "Which gas is most responsible for the 'Greenhouse Effect' on Earth?", 
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], 
        answer: "Carbon Dioxide" 
    },
    { 
        question: "What is the SI unit of electric charge?", 
        options: ["Volt", "Ampere", "Ohm", "Coulomb"], 
        answer: "Coulomb" 
    },
    { 
        question: "Which part of the human brain controls body temperature and hunger?", 
        options: ["Cerebrum", "Hypothalamus", "Medulla", "Cerebellum"], 
        answer: "Hypothalamus" 
    },
    { 
        question: "Which element has the lowest atomic number?", 
        options: ["Helium", "Hydrogen", "Lithium", "Oxygen"], 
        answer: "Hydrogen" 
    },
    { 
        question: "Which type of electromagnetic radiation has the highest frequency?", 
        options: ["Radio waves", "Microwaves", "Gamma rays", "Visible light"], 
        answer: "Gamma rays" 
    },
    { 
        question: "What is the process called when a liquid turns into a gas at the surface?", 
        options: ["Boiling", "Sublimation", "Condensation", "Evaporation"], 
        answer: "Evaporation" 
    },
    { 
        question: "Which planet in our solar system has the shortest day?", 
        options: ["Earth", "Mars", "Jupiter", "Venus"], 
        answer: "Jupiter" 
    },
    { 
        question: "Which vitamin is essential for blood clotting?", 
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"], 
        answer: "Vitamin K" 
    },
    { 
        question: "What is the function of xylem in plants?", 
        options: ["Transport food", "Transport water and minerals", "Photosynthesis", "Storage"], 
        answer: "Transport water and minerals" 
    },
    { 
        question: "Which law states that every action has an equal and opposite reaction?", 
        options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"], 
        answer: "Newton's Third Law" 
    },
    { 
        question: "Which part of the eye changes size to control the amount of light entering?", 
        options: ["Retina", "Iris", "Cornea", "Lens"], 
        answer: "Iris" 
    },
    { 
        question: "What is the chemical formula for baking soda?", 
        options: ["NaCl", "NaHCO₃", "CaCO₃", "KOH"], 
        answer: "NaHCO₃" 
    },
    { 
        question: "Which organ produces insulin in the human body?", 
        options: ["Liver", "Kidney", "Pancreas", "Stomach"], 
        answer: "Pancreas" 
    },
    { 
        question: "What is the freezing point of water at standard pressure?", 
        options: ["0°C", "32°C", "100°C", "-5°C"], 
        answer: "0°C" 
    },
    { 
        question: "Which scientist is known for the laws of motion and gravity?", 
        options: ["Thomas Edison", "Isaac Newton", "Albert Einstein", "Nikola Tesla"], 
        answer: "Isaac Newton" 
    },
    { 
        question: "Which of the following is a non-renewable resource?", 
        options: ["Solar energy", "Wind energy", "Natural gas", "Biomass"], 
        answer: "Natural gas" 
    },
    { 
        question: "Which blood cells carry oxygen throughout the body?", 
        options: ["White blood cells", "Platelets", "Plasma", "Red blood cells"], 
        answer: "Red blood cells" 
    },
    { 
        question: "Which force keeps planets in orbit around the Sun?", 
        options: ["Friction", "Magnetism", "Gravity", "Tension"], 
        answer: "Gravity" 
    },
    { 
        question: "Which state of matter has a definite shape and volume?", 
        options: ["Solid", "Liquid", "Gas", "Plasma"], 
        answer: "Solid" 
    },
    { 
        question: "Which metal is the best conductor of electricity?", 
        options: ["Iron", "Copper", "Silver", "Aluminum"], 
        answer: "Silver" 
    }
],
   math: [
    { 
        question: "What is 20% of 150?", 
        options: ["20", "25", "30", "35"], 
        answer: "30" },
    { 
        question: "How many sides does a hexagon have?", 
        options: ["4", "5", "6", "7"], 
        answer: "6" },
    { 
        question: "Which number is a prime number?", 
        options: ["9", "15", "21", "23"], 
        answer: "23" },
    { 
        question: "If you divide 48 by 4 and then add 5, what do you get?", 
        options: ["12", "15", "17", "20"], 
        answer: "17" },
    { 
        question: "What is the next number in the sequence: 2, 4, 8, 16, ___?", 
        options: ["20", "24", "32", "30"], 
        answer: "32" },
    { 
        question: "What is the square root of 81?", 
        options: ["7", "8", "9", "10"], 
        answer: "9" },
    { 
        question: "How many degrees are in a right angle?", 
        options: ["45°", "90°", "120°", "180°"], 
        answer: "90°" },
    { 
        question: "What is the value of π (pi) approximately?", 
        options: ["3.00", "3.14", "3.50", "4.00"], 
        answer: "3.14" },
    { 
        question: "Which number is divisible by both 2 and 3?", 
        options: ["10", "12", "14", "16"], 
        answer: "12" },
    { 
        question: "If 5 pencils cost $1.25, how much does one pencil cost?", 
        options: ["$0.20", "$0.25", "$0.30", "$0.35"], 
        answer: "$0.25" },
    { 
        question: "What is the sum of all numbers from 1 to 10?", 
        options: ["45", "50", "55", "60"], 
        answer: "55" },
    { 
        question: "What is the area of a rectangle with length 8 and width 5?", 
        options: ["13", "30", "40", "45"], 
        answer: "40" },
    { 
        question: "What is the result of 5 + 2 × 3?", 
        options: ["11", "21", "9", "15"], 
        answer: "11" },
    { 
        question: "Which shape has exactly three equal sides?", 
        options: ["Square", "Rectangle", "Equilateral Triangle", "Circle"], 
        answer: "Equilateral Triangle" },
    { 
        question: "What is the place value of 5 in 357?", 
        options: ["Tens", "Ones", "Hundreds", "Thousands"], 
        answer: "Tens" },
    { 
        question: "How many minutes are there in 3 hours?", 
        options: ["120", "150", "180", "200"], 
        answer: "180" },
    { 
        question: "What is half of one-fourth?", 
        options: ["One-eighth", "One-sixth", "One-third", "One-half"], 
        answer: "One-eighth" },
    { 
        question: "Which number is neither positive nor negative?", 
        options: ["1", "-1", "0", "None of these"], 
        answer: "0" },
    { 
        question: "What is 3 squared plus 4 squared?", 
        options: ["7", "12", "25", "49"], 
        answer: "25" },
    { 
        question: "Which fraction is equivalent to 0.5?", 
        options: ["1/2", "1/3", "1/4", "1/5"], 
        answer: "1/2" },
    { 
        question: "How many edges does a cube have?", 
        options: ["6", "8", "12", "16"], 
        answer: "12" },
    { 
        question: "If x = 3, what is 2x + 4?", 
        options: ["6", "8", "10", "12"], 
        answer: "10" },
    { 
        question: "What is the perimeter of a square with side 6 cm?", 
        options: ["12 cm", "18 cm", "24 cm", "36 cm"], 
        answer: "24 cm" },
    { 
        question: "What is 100 divided by half?", 
        options: ["200", "100", "50", "25"], 
        answer: "200" },
    { 
        question: "What is the average of 4, 6, and 8?", 
        options: ["6", "7", "8", "9"], 
        answer: "6" },
    { 
        question: "How many seconds are there in one minute?", 
        options: ["30", "45", "60", "75"], 
        answer: "60" },
    { 
        question: "Which of these numbers is divisible by 9?", 
        options: ["108", "103", "112", "121"], 
        answer: "108" },
    { 
        question: "What is the product of 7 and 8?", 
        options: ["54", "56", "63", "64"], 
        answer: "56" },
    { 
        question: "What is the smallest two-digit prime number?", 
        options: ["11", "12", "13", "15"], 
        answer: "11" },
    { 
        question: "If a car travels at 60 km/h, how far will it go in 2 hours?", 
        options: ["60 km", "100 km", "120 km", "140 km"], 
        answer: "120 km" },
     { 
        question: "What is the value of π (pi) approximately?", 
        options: ["3.00", "3.14", "3.50", "4.00"], 
        answer: "3.14" 
    },
    { 
        question: "Which number is divisible by both 2 and 3?", 
        options: ["10", "12", "14", "16"], 
        answer: "12" 
    },
    { 
        question: "If 5 pencils cost $1.25, how much does one pencil cost?", 
        options: ["$0.20", "$0.25", "$0.30", "$0.35"], 
        answer: "$0.25" 
    },
    { 
        question: "What is the sum of all numbers from 1 to 10?", 
        options: ["45", "50", "55", "60"], 
        answer: "55" 
    },
    { 
        question: "What is the area of a square with side length 6 cm?", 
        options: ["12 cm²", "18 cm²", "36 cm²", "24 cm²"], 
        answer: "36 cm²" 
    },
    { 
        question: "Which number is halfway between 10 and 20?", 
        options: ["12", "14", "15", "16"], 
        answer: "15" 
    },
    { 
        question: "What is 3³ (3 cubed)?", 
        options: ["9", "18", "27", "30"], 
        answer: "27" 
    },
    { 
        question: "How many seconds are in 2 minutes?", 
        options: ["60", "90", "120", "150"], 
        answer: "120" 
    },
    { 
        question: "What is the result of 5 + 2 × 3?", 
        options: ["11", "21", "9", "15"], 
        answer: "11" 
    },
    { 
        question: "What is half of one-fourth?", 
        options: ["One-eighth", "One-sixth", "One-third", "One-half"], 
        answer: "One-eighth" 
    },
    { 
        question: "Which fraction is equivalent to 0.5?", 
        options: ["1/2", "1/3", "1/4", "1/5"], 
        answer: "1/2" 
    },
    { 
        question: "How many edges does a cube have?", 
        options: ["6", "8", "12", "16"], 
        answer: "12" 
    },
    { 
        question: "If x = 3, what is 2x + 4?", 
        options: ["6", "8", "10", "12"], 
        answer: "10" 
    },
    { 
        question: "What is the perimeter of an equilateral triangle with side 5 cm?", 
        options: ["10 cm", "15 cm", "20 cm", "25 cm"], 
        answer: "15 cm" 
    },
    { 
        question: "What is 100 divided by half?", 
        options: ["200", "100", "50", "25"], 
        answer: "200" 
    },
    { 
        question: "What is the average of 4, 6, and 8?", 
        options: ["6", "7", "8", "9"], 
        answer: "6" 
    },
    { 
        question: "Which of these numbers is divisible by 9?", 
        options: ["108", "103", "112", "121"], 
        answer: "108" 
    },
    { 
        question: "What is the product of 7 and 8?", 
        options: ["54", "56", "63", "64"], 
        answer: "56" 
    },
    { 
        question: "What is the smallest two-digit prime number?", 
        options: ["11", "12", "13", "15"], 
        answer: "11" 
    },
    { 
        question: "If a car travels at 60 km/h, how far will it go in 2 hours?", 
        options: ["60 km", "100 km", "120 km", "140 km"], 
        answer: "120 km" 
    }
],
   cosmos: [
    { 
        question: "Which is the largest planet in our solar system?", 
        options: ["Earth", "Mars", "Saturn", "Jupiter"], 
        answer: "Jupiter" },
    { 
        question: "What is the name of our galaxy?", 
        options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"], 
        answer: "Milky Way" },
    { 
        question: "Which planet is known as the 'Red Planet'?", 
        options: ["Venus", "Mars", "Jupiter", "Saturn"], 
        answer: "Mars" },
    { 
        question: "How many natural satellites does Earth have?", 
        options: ["1", "2", "3", "4"], 
        answer: "1" },
    { 
        question: "Which planet is closest to the Sun?", 
        options: ["Mercury", "Venus", "Earth", "Mars"], 
        answer: "Mercury" },
    { 
        question: "Which celestial body is a star?", 
        options: ["Moon", "Sun", "Earth", "Titan"], 
        answer: "Sun" },
    { 
        question: "What causes day and night on Earth?", 
        options: ["Revolution around the Sun", "Tilted axis", "Rotation on its axis", "Moon's orbit"], 
        answer: "Rotation on its axis" },
    { 
        question: "Which of these is NOT a gas giant?", 
        options: ["Jupiter", "Saturn", "Uranus", "Mars"], 
        answer: "Mars" },
    { 
        question: "Which planet has the most moons?", 
        options: ["Earth", "Mars", "Saturn", "Jupiter"], 
        answer: "Jupiter" },
    { 
        question: "What is a light year a unit of?", 
        options: ["Time", "Speed", "Distance", "Brightness"], 
        answer: "Distance" },
    { 
        question: "Which planet takes the longest to orbit the Sun?", 
        options: ["Earth", "Neptune", "Uranus", "Saturn"], 
        answer: "Neptune" },
    { 
        question: "What is the hottest planet in our solar system?", 
        options: ["Mercury", "Venus", "Earth", "Mars"], 
        answer: "Venus" },
    { 
        question: "Which planet spins in the opposite direction to most others?", 
        options: ["Earth", "Mars", "Venus", "Jupiter"], 
        answer: "Venus" },
    { 
        question: "What is the center of the solar system?", 
        options: ["Earth", "Moon", "Sun", "Jupiter"], 
        answer: "Sun" },
    { 
        question: "What are shooting stars actually?", 
        options: ["Stars", "Planets", "Comets", "Meteoroids"], 
        answer: "Meteoroids" },
    { 
        question: "Which planet has a ring system that can be seen from Earth?", 
        options: ["Jupiter", "Mars", "Saturn", "Venus"], 
        answer: "Saturn" },
    { 
        question: "Which of the following is a dwarf planet?", 
        options: ["Earth", "Pluto", "Mars", "Mercury"], 
        answer: "Pluto" },
    { 
        question: "What is the name of the first human-made satellite in space?", 
        options: ["Hubble", "Chandrayaan", "Sputnik", "ISS"], 
        answer: "Sputnik" },
    { 
        question: "Where is the asteroid belt located?", 
        options: ["Between Earth and Mars", "Between Mars and Jupiter", "Beyond Neptune", "Around the Moon"], 
        answer: "Between Mars and Jupiter" },
    { 
        question: "What do we call a group of stars forming a pattern?", 
        options: ["Galaxy", "Nebula", "Constellation", "Cluster"], 
        answer: "Constellation" },
    { 
        question: "Which force keeps planets in orbit around the Sun?", 
        options: ["Friction", "Magnetism", "Gravity", "Air Resistance"], 
        answer: "Gravity" },
    { 
        question: "Which moon is the largest in our solar system?", 
        options: ["Titan", "Ganymede", "Europa", "Enceladus"], 
        answer: "Ganymede" },
    { 
        question: "Which planet has the Great Red Spot?", 
        options: ["Saturn", "Neptune", "Jupiter", "Uranus"], 
        answer: "Jupiter" },
    { 
        question: "Which planet was reclassified as a dwarf planet in 2006?", 
        options: ["Ceres", "Eris", "Pluto", "Haumea"], 
        answer: "Pluto" },
    { 
        question: "Which object in the solar system has a tail?", 
        options: ["Star", "Planet", "Comet", "Moon"], 
        answer: "Comet" },
    { 
        question: "Which spacecraft landed humans on the Moon?", 
        options: ["Apollo 11", "Voyager", "Hubble", "Sputnik"], 
        answer: "Apollo 11" },
    { 
        question: "What is the name of the space between stars?", 
        options: ["Interstellar space", "Atmosphere", "Orbit", "Oort Cloud"], 
        answer: "Interstellar space" },
    { 
        question: "Which planet has the shortest orbital period around the Sun?", 
        options: ["Venus", "Earth", "Mercury", "Mars"], 
        answer: "Mercury" },
    { 
        question: "What is the most abundant element in the universe?", 
        options: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"], 
        answer: "Hydrogen" },
    { 
        question: "Which planet has the longest day?", 
        options: ["Earth", "Venus", "Mars", "Saturn"], 
        answer: "Venus" },
     { 
        question: "Which planet has the most Earth-like day?", 
        options: ["Mars", "Venus", "Mercury", "Saturn"], 
        answer: "Mars" 
    },
    { 
        question: "What is the Great Red Spot on Jupiter?", 
        options: ["A volcano", "A storm", "A lake", "A crater"], 
        answer: "A storm" 
    },
    { 
        question: "Which moon in our solar system has its own atmosphere?", 
        options: ["Europa", "Titan", "Io", "Enceladus"], 
        answer: "Titan" 
    },
    { 
        question: "How long does light from the Sun take to reach Earth?", 
        options: ["8 seconds", "8 minutes", "8 hours", "Instantly"], 
        answer: "8 minutes" 
    },
    { 
        question: "Which galaxy is closest to the Milky Way?", 
        options: ["Whirlpool Galaxy", "Sombrero Galaxy", "Andromeda Galaxy", "Pinwheel Galaxy"], 
        answer: "Andromeda Galaxy" 
    },
    { 
        question: "Which planet has the strongest gravity in our solar system?", 
        options: ["Earth", "Neptune", "Jupiter", "Saturn"], 
        answer: "Jupiter" 
    },
    { 
        question: "Which spacecraft was the first to land humans on the Moon?", 
        options: ["Sputnik", "Vostok", "Apollo 11", "Voyager"], 
        answer: "Apollo 11" 
    },
    { 
        question: "Which planet has a day longer than its year?", 
        options: ["Venus", "Mercury", "Uranus", "Pluto"], 
        answer: "Venus" 
    },
    { 
        question: "What is the name of the black hole image captured in 2019?", 
        options: ["EHT-1", "M87*", "Sagittarius A*", "Cygnus X-1"], 
        answer: "M87*" 
    },
    { 
        question: "What is the brightest star in the night sky?", 
        options: ["Polaris", "Sirius", "Betelgeuse", "Vega"], 
        answer: "Sirius" 
    },
    { 
        question: "Which mission discovered water on the Moon?", 
        options: ["Chandrayaan-1", "Apollo 11", "Luna 9", "Viking"], 
        answer: "Chandrayaan-1" 
    },
    { 
        question: "What is the coldest known place in the universe?", 
        options: ["Boomerang Nebula", "Orion Nebula", "Crab Nebula", "Helix Nebula"], 
        answer: "Boomerang Nebula" 
    },
    { 
        question: "What is the name of the largest known star?", 
        options: ["Sun", "Betelgeuse", "UY Scuti", "Rigel"], 
        answer: "UY Scuti" 
    },
    { 
        question: "Which planet is sometimes called Earth's 'twin'?", 
        options: ["Mars", "Venus", "Mercury", "Jupiter"], 
        answer: "Venus" 
    },
    { 
        question: "What event marks the beginning of the universe according to the Big Bang Theory?", 
        options: ["Black Hole", "Supernova", "Cosmic explosion", "White Hole"], 
        answer: "Cosmic explosion" 
    },
    { 
        question: "What is the term for a planet outside our solar system?", 
        options: ["Moon", "Dwarf Planet", "Exoplanet", "Comet"], 
        answer: "Exoplanet" 
    },
    { 
        question: "Which planet has the fastest rotation in the solar system?", 
        options: ["Earth", "Jupiter", "Saturn", "Mars"], 
        answer: "Jupiter" 
    },
    { 
        question: "Which astronaut said, 'That's one small step for man...'?", 
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"], 
        answer: "Neil Armstrong" 
    },
    { 
        question: "Which planet has the most rings?", 
        options: ["Jupiter", "Uranus", "Neptune", "Saturn"], 
        answer: "Saturn" 
    },
    { 
        question: "What is at the center of the Milky Way galaxy?", 
        options: ["A neutron star", "A white dwarf", "A supermassive black hole", "A quasar"], 
        answer: "A supermassive black hole" 
    }
],
   coding: [
    { 
        question: "Which symbol is used to select an element by ID in CSS?", 
        options: [".", "#", "*", "&"], 
        answer: "#" 
    },
    { 
        question: "How do you write a comment in HTML?", 
        options: ["// comment", "/* comment */", "<!-- comment -->", "' comment"], 
        answer: "<!-- comment -->" 
    },
    { 
        question: "Which JavaScript method converts a JSON string into an object?", 
        options: ["JSON.parse()", "JSON.stringify()", "Object.convert()", "parse.JSON()"], 
        answer: "JSON.parse()" 
    },
    { 
        question: "What does CSS stand for?", 
        options: ["Creative Style Sheets", "Colorful Style Syntax", "Cascading Style Sheets", "Computer Style System"], 
        answer: "Cascading Style Sheets" 
    },
    { 
        question: "Which tag is used to create a hyperlink in HTML?", 
        options: ["<link>", "<url>", "<a>", "<href>"], 
        answer: "<a>" 
    },
    { 
        question: "Which keyword is used to declare a variable in JavaScript?", 
        options: ["var", "int", "string", "float"], 
        answer: "var" 
    },
    { 
        question: "Which property changes the background color in CSS?", 
        options: ["bgcolor", "background-color", "color", "bg-color"], 
        answer: "background-color" 
    },
    { 
        question: "In JavaScript, what is the result of '5' + 2?", 
        options: ["7", "52", "error", "undefined"], 
        answer: "52" 
    },
    { 
        question: "Which tag is used for the largest heading in HTML?", 
        options: ["<h1>", "<h6>", "<heading>", "<head>"], 
        answer: "<h1>" 
    },
    { 
        question: "Which operator is used to assign a value to a variable?", 
        options: ["==", "=", "===", "!="], 
        answer: "=" 
    },
    { 
        question: "Which function shows a message box in JavaScript?", 
        options: ["alert()", "prompt()", "confirm()", "msg()"], 
        answer: "alert()" 
    },
    { 
        question: "Which attribute specifies the URL of an image in HTML?", 
        options: ["src", "href", "alt", "target"], 
        answer: "src" 
    },
    { 
        question: "How do you center-align text in CSS?", 
        options: ["text-align: center;", "align: center;", "center-text: yes;", "text-center: true;"], 
        answer: "text-align: center;" 
    },
    { 
        question: "Which of these is NOT a JavaScript data type?", 
        options: ["Number", "String", "Boolean", "Array"], 
        answer: "Array" 
    },
    { 
        question: "Which tag is used to run JavaScript in HTML?", 
        options: ["<script>", "<js>", "<javascript>", "<code>"], 
        answer: "<script>" 
    },
    { 
        question: "Which language controls the style of a web page?", 
        options: ["HTML", "CSS", "JavaScript", "Python"], 
        answer: "CSS" 
    },
    { 
        question: "Which statement stops a loop in JavaScript?", 
        options: ["break", "stop", "exit", "continue"], 
        answer: "break" 
    },
    { 
        question: "What is the correct syntax for referring to an external script called 'main.js'?", 
        options: ["<script src='main.js'>", "<script href='main.js'>", "<include src='main.js'>", "<link rel='main.js'>"], 
        answer: "<script src='main.js'>" 
    },
    { 
        question: "Which event occurs when a user clicks on an HTML element?", 
        options: ["onmouseover", "onclick", "onchange", "onload"], 
        answer: "onclick" 
    },
    { 
        question: "Which CSS property changes the font size?", 
        options: ["font-family", "font-size", "text-style", "font-weight"], 
        answer: "font-size" 
    },
    { 
        question: "Which of the following is a client-side scripting language?", 
        options: ["PHP", "Node.js", "JavaScript", "Python"], 
        answer: "JavaScript" 
    },
    { 
        question: "How do you write an array in JavaScript?", 
        options: ["let colors = [1, 2, 3];", "let colors = (1, 2, 3);", "let colors = 1, 2, 3;", "array colors = [1, 2, 3];"], 
        answer: "let colors = [1, 2, 3];" 
    },
    { 
        question: "Which selector targets all <p> elements in CSS?", 
        options: ["#p", ".p", "p", "*p"], 
        answer: "p" 
    },
    { 
        question: "Which method adds an item to the end of an array in JavaScript?", 
        options: ["push()", "pop()", "shift()", "unshift()"], 
        answer: "push()" 
    },
    { 
        question: "Which attribute makes an input required in HTML?", 
        options: ["placeholder", "required", "readonly", "validate"], 
        answer: "required" 
    },
    { 
        question: "Which CSS property controls the spacing between letters?", 
        options: ["word-spacing", "letter-spacing", "text-spacing", "spacing"], 
        answer: "letter-spacing" 
    },
    { 
        question: "Which function parses a string to an integer in JavaScript?", 
        options: ["parseInt()", "parseFloat()", "Number()", "String()"], 
        answer: "parseInt()" 
    },
    { 
        question: "Which layout system allows responsive design in CSS?", 
        options: ["Flexbox", "Floats", "Tables", "Frames"], 
        answer: "Flexbox" 
    },
    { 
        question: "What does DOM stand for in JavaScript?", 
        options: ["Data Object Model", "Document Order Model", "Document Object Model", "Display Object Management"], 
        answer: "Document Object Model" 
    },
    { 
        question: "Which keyword starts a function in JavaScript?", 
        options: ["function", "fun", "def", "func"], 
        answer: "function" 
    },
     { 
        question: "Which operator checks both value and type in JavaScript?", 
        options: ["==", "===", "=", "!="], 
        answer: "===" 
    },
    { 
        question: "How do you select an element by class name in JavaScript?", 
        options: ["document.getElementById()", "document.querySelector()", "document.getElementsByClassName()", "Both B and C"], 
        answer: "Both B and C" 
    },
    { 
        question: "What does 'DOM' stand for in web development?", 
        options: ["Document Object Model", "Data Output Module", "Document Order Mode", "Direct Object Manipulation"], 
        answer: "Document Object Model" 
    },
    { 
        question: "Which CSS property is used to change the text color of an element?", 
        options: ["font-color", "text-color", "color", "foreground"], 
        answer: "color" 
    },
    { 
        question: "Which keyword is used to create a function in JavaScript?", 
        options: ["function", "def", "fun", "method"], 
        answer: "function" 
    },
    { 
        question: "Which tag is used to define an internal style sheet in HTML?", 
        options: ["<link>", "<script>", "<style>", "<css>"], 
        answer: "<style>" 
    },
    { 
        question: "Which method adds an item to the end of an array in JavaScript?", 
        options: ["push()", "pop()", "shift()", "unshift()"], 
        answer: "push()" 
    },
    { 
        question: "Which attribute specifies that an input field must be filled out?", 
        options: ["placeholder", "required", "validate", "readonly"], 
        answer: "required" 
    },
    { 
        question: "Which CSS property controls the space between lines of text?", 
        options: ["letter-spacing", "line-height", "text-spacing", "word-spacing"], 
        answer: "line-height" 
    },
    { 
        question: "Which of the following is NOT a valid JavaScript variable name?", 
        options: ["_value", "$amount", "2ndPlace", "userAge"], 
        answer: "2ndPlace" 
    },
    { 
        question: "Which event occurs when a user clicks on an HTML element?", 
        options: ["onmouseover", "onclick", "onchange", "onload"], 
        answer: "onclick" 
    },
    { 
        question: "Which CSS unit is relative to the font size of the element?", 
        options: ["px", "%", "em", "cm"], 
        answer: "em" 
    },
    { 
        question: "How do you stop an event from bubbling up in JavaScript?", 
        options: ["event.stopPropagation()", "event.preventDefault()", "event.stop()", "event.cancelBubble()"], 
        answer: "event.stopPropagation()" 
    },
    { 
        question: "Which of these is a block-level HTML element?", 
        options: ["<span>", "<a>", "<div>", "<img>"], 
        answer: "<div>" 
    },
    { 
        question: "Which JavaScript function is used to schedule code execution after a delay?", 
        options: ["setTimeout()", "setInterval()", "delay()", "wait()"], 
        answer: "setTimeout()" 
    },
    { 
        question: "Which CSS display value allows elements to be displayed in a row?", 
        options: ["block", "inline-block", "flex", "grid"], 
        answer: "flex" 
    },
    { 
        question: "Which statement is used to exit a loop prematurely in JavaScript?", 
        options: ["continue", "break", "exit", "return"], 
        answer: "break" 
    },
    { 
        question: "Which selector targets all <p> elements in CSS?", 
        options: ["#p", ".p", "p", "*p"], 
        answer: "p" 
    },
    { 
        question: "What will typeof null return in JavaScript?", 
        options: ["object", "null", "undefined", "boolean"], 
        answer: "object" 
    },
    { 
        question: "Which of the following is a correct way to comment in JavaScript?", 
        options: ["<!-- comment -->", "// comment", "# comment", "All of the above"], 
        answer: "// comment" 
    }
],
   cricket: [
    { 
        question: "How many players are there in a cricket team on the field?", 
        options: ["10", "11", "12", "9"], 
        answer: "11" 
    },
    { 
        question: "What is the maximum number of overs in a One Day International (ODI) match?", 
        options: ["20", "50", "40", "60"], 
        answer: "50" 
    },
    { 
        question: "Which country won the first ICC Cricket World Cup in 1975?", 
        options: ["India", "Australia", "West Indies", "England"], 
        answer: "West Indies" 
    },
    { 
        question: "In cricket, what is 'LBW' an abbreviation for?", 
        options: ["Leg Behind Wicket", "Left Back Wicket", "Leg Before Wicket", "Long Ball Wicket"], 
        answer: "Leg Before Wicket" 
    },
    { 
        question: "Which cricketer is known as 'The Wall'?", 
        options: ["Virat Kohli", "Sachin Tendulkar", "Rahul Dravid", "Anil Kumble"], 
        answer: "Rahul Dravid" 
    },
    { 
        question: "How many runs is a 'Century' in cricket?", 
        options: ["50", "75", "100", "200"], 
        answer: "100" 
    },
    { 
        question: "What is the length of a cricket pitch in meters?", 
        options: ["18.12 m", "20.12 m", "22.86 m", "25.44 m"], 
        answer: "20.12 m" 
    },
    { 
        question: "Which bowler bowls to the batsman in a game of cricket?", 
        options: ["Spinner", "Fast Bowler", "Opposite Batsman", "Fielder"], 
        answer: "Fast Bowler" 
    },
    { 
        question: "What is the term used when a bowler dismisses all 10 wickets in a single innings?", 
        options: ["Hat-trick", "All out", "Double century", "Five-wicket haul"], 
        answer: "All out" 
    },
    { 
        question: "Which format of cricket is played in The Indian Premier League (IPL)?", 
        options: ["Test", "ODI", "T20", "Twenty20 Internationals"], 
        answer: "T20" 
    },
    { 
        question: "What happens if the ball hits the bat and then the stumps in cricket?", 
        options: ["Run-out", "Hit wicket", "Caught", "Stumped"], 
        answer: "Hit wicket" 
    },
    { 
        question: "Which cricketer has scored the most international centuries?", 
        options: ["Kumar Sangakkara", "Sachin Tendulkar", "Virat Kohli", "Ricky Ponting"], 
        answer: "Sachin Tendulkar" 
    },
    { 
        question: "What is the shape of a cricket ball?", 
        options: ["Oval", "Round", "Square", "Cylindrical"], 
        answer: "Round" 
    },
    { 
        question: "How many fielders can be inside the 30-yard circle in ODI cricket during non-powerplay?", 
        options: ["2", "3", "4", "5"], 
        answer: "4" 
    },
    { 
        question: "Which country won the 2019 ICC Cricket World Cup?", 
        options: ["India", "New Zealand", "Australia", "England"], 
        answer: "England" 
    },
    { 
        question: "What does 'Duck' mean in cricket?", 
        options: ["Zero run", "A fast delivery", "A wide ball", "A no-ball"], 
        answer: "Zero run" 
    },
    { 
        question: "What is the name of the trophy awarded to the winner of the Ashes series?", 
        options: ["Freedom Trophy", "Wisden Trophy", "Ashes Urn", "ICC World Cup"], 
        answer: "Ashes Urn" 
    },
    { 
        question: "Which player is allowed to wear gloves while fielding?", 
        options: ["Captain", "Batsman", "Wicketkeeper", "All fielders"], 
        answer: "Wicketkeeper" 
    },
    { 
        question: "How many runs are given if the ball crosses the boundary after touching the ground?", 
        options: ["4", "5", "6", "7"], 
        answer: "4" 
    },
    { 
        question: "Which cricketer is known as the 'God of Cricket'?", 
        options: ["Rahul Dravid", "Mahendra Singh Dhoni", "Sachin Tendulkar", "Kapil Dev"], 
        answer: "Sachin Tendulkar" 
    },
    { 
        question: "What is the term for a delivery that doesn't bounce before reaching the batsman?", 
        options: ["Yorker", "Bouncer", "Full toss", "Slower ball"], 
        answer: "Full toss" 
    },
    { 
        question: "What is the minimum age to play in the Under-19 Cricket World Cup?", 
        options: ["Under 16", "Under 17", "Under 19", "Under 21"], 
        answer: "Under 19" 
    },
    { 
        question: "Which country was the first to win three ICC T20 World Cups?", 
        options: ["India", "Pakistan", "West Indies", "England"], 
        answer: "West Indies" 
    },
    { 
        question: "What is the height of each stump in a cricket wicket?", 
        options: ["28 inches", "30 inches", "32 inches", "34 inches"], 
        answer: "28 inches" 
    },
    { 
        question: "What is the full form of DRS in cricket?", 
        options: ["Decision Review System", "Direct Runout Signal", "Deliberate Run Steal", "Digital Replay Software"], 
        answer: "Decision Review System" 
    },
    { 
        question: "Who is the only cricketer to score 100 international hundreds?", 
        options: ["Sachin Tendulkar", "Kumar Sangakkara", "Virat Kohli", "Ricky Ponting"], 
        answer: "Sachin Tendulkar" 
    },
    { 
        question: "Which city is known as the 'Mecca of Indian Cricket'?", 
        options: ["Mumbai", "Chennai", "Kolkata", "Delhi"], 
        answer: "Kolkata" 
    },
    { 
        question: "What is the term used when a bowler takes three wickets in three consecutive deliveries?", 
        options: ["Hattrick", "Triple Strike", "Three-in-three", "Golden Hat-trick"], 
        answer: "Hattrick" 
    },
    { 
        question: "Which country did India defeat in the final of the 2007 ICC T20 World Cup?", 
        options: ["Australia", "Pakistan", "England", "Sri Lanka"], 
        answer: "Pakistan" 
    },
    { 
        question: "Which cricketer scored the fastest century in Test cricket (in terms of balls faced)?", 
        options: ["Adam Gilchrist", "Kapil Dev", "Brendon McCullum", "Chris Gayle"], 
        answer: "Brendon McCullum" 
    },
    { 
        question: "What is the term used when a bowler takes two wickets with consecutive deliveries?", 
        options: ["Double Wicket", "Double Take", "Hattrick", "Two-in-Two"], 
        answer: "Two-in-Two" 
    },
    { 
        question: "Which country has won the most ICC Cricket World Cups?", 
        options: ["Australia", "India", "England", "West Indies"], 
        answer: "Australia" 
    },
    { 
        question: "Who was the first Indian bowler to take a Test hat-trick?", 
        options: ["Anil Kumble", "Kapil Dev", "Harbhajan Singh", "Javagal Srinath"], 
        answer: "Harbhajan Singh" 
    },
    { 
        question: "Which city hosted the first-ever day-night Test match?", 
        options: ["Chennai", "Kolkata", "Ahmedabad", "Eden Gardens"], 
        answer: "Kolkata" 
    },
    { 
        question: "Which batsman holds the record for the highest individual score in ODI cricket?", 
        options: ["Sachin Tendulkar", "Rohit Sharma", "Chris Gayle", "Martin Guptill"], 
        answer: "Rohit Sharma" 
    },
    { 
        question: "In which year did India win its first Cricket World Cup?", 
        options: ["1975", "1983", "1992", "2011"], 
        answer: "1983" 
    },
    { 
        question: "Which team won the inaugural edition of the ICC Champions Trophy?", 
        options: ["India", "Australia", "South Africa", "New Zealand"], 
        answer: "Australia" 
    },
    { 
        question: "Which bowler is known as the 'Sultan of Swing'?", 
        options: ["Glenn McGrath", "Wasim Akram", "Shoaib Akhtar", "James Anderson"], 
        answer: "Wasim Akram" 
    },
    { 
        question: "How many runs are awarded if the ball hits the helmet behind the wicket?", 
        options: ["4", "5", "6", "7"], 
        answer: "5" 
    },
    { 
        question: "Which Indian cricketer is also known as 'Mr. 360'?", 
        options: ["Virat Kohli", "Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma"], 
        answer: "Virat Kohli" 
    },
    { 
        question: "Which country does not play Test cricket?", 
        options: ["Ireland", "Bangladesh", "Zimbabwe", "West Indies"], 
        answer: "Ireland" 
    },
    { 
        question: "Which stadium in India is known as 'The Eden Gardens'?", 
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"], 
        answer: "Kolkata" 
    },
    { 
        question: "What is the term used when a batsman leaves the crease without playing a shot?", 
        options: ["Leave", "Block", "Defense", "Stumped"], 
        answer: "Leave" 
    },
    { 
        question: "Which bowler has taken the most wickets in T20 International cricket?", 
        options: ["Lasith Malinga", "Shane Watson", "Umar Gul", "Lasith Embuldeniya"], 
        answer: "Lasith Malinga" 
    },
    { 
        question: "Which country won the 2023 ICC Cricket World Cup?", 
        options: ["India", "Australia", "England", "New Zealand"], 
        answer: "Australia" 
    },
    { 
        question: "What is the name of the rule that restricts field placements in powerplay overs?", 
        options: ["Fielding Circle", "Powerplay Rule", "Field Restrictions", "3-4 Field Rule"], 
        answer: "Field Restrictions" 
    },
    { 
        question: "Which Indian player scored a century on his ODI debut?", 
        options: ["Sachin Tendulkar", "Virat Kohli", "Rahul Dravid", "Shikhar Dhawan"], 
        answer: "Shikhar Dhawan" 
    },
    { 
        question: "What is the maximum number of overs a bowler can bowl in a T20 match?", 
        options: ["4", "5", "6", "8"], 
        answer: "4" 
    },
    { 
        question: "Which Indian spinner took a fifer in the 2023 ICC World Cup final?", 
        options: ["Yuzvendra Chahal", "Ravindra Jadeja", "Ravichandran Ashwin", "Kuldeep Yadav"], 
        answer: "Kuldeep Yadav" 
    }
],
   gk: [
    { 
        question: "Which is the largest country in the world by area?", 
        options: ["Canada", "China", "USA", "Russia"], 
        answer: "Russia" 
    },
    { 
        question: "Who wrote the play 'Romeo and Juliet'?", 
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "George Orwell"], 
        answer: "William Shakespeare" 
    },
    { 
        question: "Which planet is known as the 'Blue Planet'?", 
        options: ["Earth", "Mars", "Neptune", "Uranus"], 
        answer: "Earth" 
    },
    { 
        question: "What is the capital of Japan?", 
        options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], 
        answer: "Tokyo" 
    },
    { 
        question: "Which element has the symbol 'O' on the periodic table?", 
        options: ["Osmium", "Oxygen", "Gold", "Ozone"], 
        answer: "Oxygen" 
    },
    { 
        question: "In which city would you find the Eiffel Tower?", 
        options: ["London", "New York", "Paris", "Rome"], 
        answer: "Paris" 
    },
    { 
        question: "Which language is most widely spoken in the world?", 
        options: ["English", "Spanish", "Hindi", "Mandarin Chinese"], 
        answer: "Mandarin Chinese" 
    },
    { 
        question: "Who was the first person to step on the Moon?", 
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Alan Shepard"], 
        answer: "Neil Armstrong" 
    },
    { 
        question: "Which ocean is the deepest in the world?", 
        options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"], 
        answer: "Pacific Ocean" 
    },
    { 
        question: "What is the smallest country in the world?", 
        options: ["Bhutan", "Maldives", "Vatican City", "Nepal"], 
        answer: "Vatican City" 
    },
    { 
        question: "Which famous scientist developed the theory of general relativity?", 
        options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"], 
        answer: "Albert Einstein" 
    },
    { 
        question: "How many colors are there in a rainbow?", 
        options: ["5", "6", "7", "8"], 
        answer: "7" 
    },
    { 
        question: "Which river is the longest in the world?", 
        options: ["Amazon", "Mississippi", "Yangtze", "Nile"], 
        answer: "Nile" 
    },
    { 
        question: "Which animal is considered the tallest in the world?", 
        options: ["Elephant", "Tyrannosaurus Rex", "Giraffe", "Whale"], 
        answer: "Giraffe" 
    },
    { 
        question: "Which continent has the most countries?", 
        options: ["Asia", "Europe", "Africa", "South America"], 
        answer: "Africa" 
    },
    { 
        question: "What is the currency of the United Kingdom?", 
        options: ["Dollar", "Euro", "Pound Sterling", "Rupee"], 
        answer: "Pound Sterling" 
    },
    { 
        question: "Which bird is often associated with peace?", 
        options: ["Eagle", "Peacock", "Sparrow", "Dove"], 
        answer: "Dove" 
    },
    { 
        question: "Which fruit is known as the 'King of Fruits'?", 
        options: ["Apple", "Banana", "Mango", "Orange"], 
        answer: "Mango" 
    },
    { 
        question: "Which organ is responsible for filtering blood in the human body?", 
        options: ["Heart", "Lungs", "Liver", "Kidneys"], 
        answer: "Kidneys" 
    },
    { 
        question: "Which mountain is the tallest in the world?", 
        options: ["K2", "Mount Everest", "Annapurna", "Kilimanjaro"], 
        answer: "Mount Everest" 
    },
    { 
        question: "Which gas do humans primarily breathe in during respiration?", 
        options: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], 
        answer: "Oxygen" 
    },
    { 
        question: "Who painted the Mona Lisa?", 
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], 
        answer: "Leonardo da Vinci" 
    },
    { 
        question: "Which instrument is used to measure temperature?", 
        options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"], 
        answer: "Thermometer" 
    },
    { 
        question: "Which is the largest desert in the world?", 
        options: ["Sahara Desert", "Arabian Desert", "Antarctic Desert", "Gobi Desert"], 
        answer: "Antarctic Desert" 
    },
    { 
        question: "Which year did India gain independence from British rule?", 
        options: ["1942", "1945", "1947", "1950"], 
        answer: "1947" 
    },
    { 
        question: "Which vitamin is known to improve vision?", 
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], 
        answer: "Vitamin A" 
    },
    { 
        question: "What is the hardest natural substance on Earth?", 
        options: ["Iron", "Diamond", "Graphite", "Quartz"], 
        answer: "Diamond" 
    },
    { 
        question: "Which animal is known as the 'Ship of the Desert'?", 
        options: ["Donkey", "Cow", "Camel", "Goat"], 
        answer: "Camel" 
    },
    { 
        question: "Which planet is also known as the 'Morning Star' or 'Evening Star'?", 
        options: ["Mercury", "Venus", "Mars", "Jupiter"], 
        answer: "Venus" 
    },
    { 
        question: "Which is the fastest land animal in the world?", 
        options: ["Cheetah", "Leopard", "Lion", "Tiger"], 
        answer: "Cheetah" 
    },
     { 
        question: "Which country is known as the 'Land of the Rising Sun'?", 
        options: ["China", "Japan", "South Korea", "Thailand"], 
        answer: "Japan" 
    },
    { 
        question: "Who was the first woman to win a Nobel Prize?", 
        options: ["Marie Curie", "Rosalind Franklin", "Mother Teresa", "Malala Yousafzai"], 
        answer: "Marie Curie" 
    },
    { 
        question: "Which organ in the human body produces insulin?", 
        options: ["Liver", "Kidney", "Pancreas", "Heart"], 
        answer: "Pancreas" 
    },
    { 
        question: "What is the smallest continent by land area?", 
        options: ["Europe", "Australia", "Antarctica", "South America"], 
        answer: "Australia" 
    },
    { 
        question: "Which famous painting features a woman smiling mysteriously?", 
        options: ["The Starry Night", "The Last Supper", "Mona Lisa", "The Birth of Venus"], 
        answer: "Mona Lisa" 
    },
    { 
        question: "Which element is most abundant in Earth's atmosphere?", 
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], 
        answer: "Nitrogen" 
    },
    { 
        question: "In which city would you find the Leaning Tower of Pisa?", 
        options: ["Venice", "Florence", "Pisa", "Rome"], 
        answer: "Pisa" 
    },
    { 
        question: "Who wrote the novel '1984'?", 
        options: ["George Orwell", "Aldous Huxley", "J.R.R. Tolkien", "Ernest Hemingway"], 
        answer: "George Orwell" 
    },
    { 
        question: "Which mountain is the second highest in the world?", 
        options: ["K2", "Mount Everest", "Annapurna", "Kangchenjunga"], 
        answer: "K2" 
    },
    { 
        question: "Which language has the most native speakers worldwide?", 
        options: ["English", "Spanish", "Hindi", "Mandarin Chinese"], 
        answer: "Mandarin Chinese" 
    },
    { 
        question: "Which planet is often called the 'Red Planet'?", 
        options: ["Venus", "Earth", "Mars", "Jupiter"], 
        answer: "Mars" 
    },
    { 
        question: "Which river flows through Egypt?", 
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"], 
        answer: "Nile" 
    },
    { 
        question: "Which vitamin is produced when the skin is exposed to sunlight?", 
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], 
        answer: "Vitamin D" 
    },
    { 
        question: "Which country is both an island and a continent?", 
        options: ["Madagascar", "Greenland", "Australia", "New Zealand"], 
        answer: "Australia" 
    },
    { 
        question: "Which scientist is credited with the theory of evolution by natural selection?", 
        options: ["Gregor Mendel", "Isaac Newton", "Charles Darwin", "Louis Pasteur"], 
        answer: "Charles Darwin" 
    },
    { 
        question: "Which gas do plants absorb during photosynthesis?", 
        options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"], 
        answer: "Carbon Dioxide" 
    },
    { 
        question: "Which is the longest river in Africa?", 
        options: ["Congo River", "Zambezi River", "Niger River", "Nile River"], 
        answer: "Nile River" 
    },
    { 
        question: "Who painted 'The Starry Night'?", 
        options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"], 
        answer: "Vincent van Gogh" 
    },
    { 
        question: "Which country hosted the first modern Olympic Games in 1896?", 
        options: ["France", "USA", "Greece", "Italy"], 
        answer: "Greece" 
    },
    { 
        question: "Which bird is often associated with delivering babies in folklore?", 
        options: ["Eagle", "Sparrow", "Stork", "Peacock"], 
        answer: "Stork" 
    }
],
};

    // ---------- Utility Function to get random numbers ----------
    function getRandomQuestions(categoryArray, numQuestions = 5){
        const shuffled = [...categoryArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    }

let currentQuestionIndex = 0 ;
let score = 0;
let time = 10;
let timer;
let questions = [];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timeEl = document.getElementById("time");
const timeSpan = document.getElementById("timer-text");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const categoryBox = document.getElementById("category-box");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const currentQEl = document.getElementById("current-q");
const totalQEl = document.getElementById("total-q");

// ---------- Event Listeners ----------
document.querySelectorAll(".category-card").forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");

        // get 5 random number questions from selected category
        questions = getRandomQuestions(allQuestions[category], 5);

        totalQEl.textContent = questions.length;
        categoryBox.classList.add("hide");
        quizBox.classList.remove("hide");
        showQuestion();
    });
});

function showQuestion(){
    if(currentQuestionIndex >= questions.length){
        showResult();
        return;
    }

    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    currentQEl.textContent = currentQuestionIndex + 1; // Update Progress

    // Shuffle options too (this is optional but I think it will be fun)
    const shuffledOptions = [...currentQuestion.options].sort(() => 0.5 - Math.random());

    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", selectAnswer);
        optionsEl.appendChild(button);
    });

    startTimer();
}

function resetState(){
    clearInterval(timer);
    time = 10;
    timeEl.textContent = time;
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
}

function startTimer(){
    timer = setInterval(() => {
        time --;

       // Update only the time number...
        document.getElementById("time").textContent = time;
        // timeEl.textContent = time;
        
        if(time <=3){
            timeSpan.classList.add("red"); // Red color added when time is 3 seconds and less ..
        }
        // else {
        //     timeEl.classList.remove("red");
        // }

        if(time === 0){
            clearInterval(timer);

            //Highlight correct answer
            const correctAnswer = questions[currentQuestionIndex].answer;
            Array.from(optionsEl.children).forEach(button => {
                if( button.textContent === correctAnswer){
                    button.style.backgroundColor = "#a3e4a2"; // Green color for correct Answer..
                }
                    button.disabled = true; // Disable all buttons
            });
            nextBtn.style.display = "block";
        }
    }, 1000);
}

function selectAnswer(e){
    const selected = e.target;
    const correct = questions[currentQuestionIndex].answer;

    // Prevent clicking the buttons after the time is up.
    if(time <=0 || selected.disabled) return;

    clearInterval(timer); //stop timer immediately

    if(selected.textContent === correct){
        score++;
        selected.style.backgroundColor = "#a3e4a2";
    }
    else 
     {
        // Wrong answer is selected !
         selected.style.backgroundColor = "#f6b2b2";

         //Highlight correct answer
        Array.from(optionsEl.children).forEach(button => {
        if (button.textContent === correct) {
             button.style.backgroundColor = "#a3e4a2"; // Highlight correct answer
             }
            });
     }
        //Disable all other buttons
        Array.from(optionsEl.children).forEach(button => {
        button.disabled = true;
        });
     nextBtn.style.display = "block";
}

      nextBtn.addEventListener("click", () => {
        currentQuestionIndex++;

        if(currentQuestionIndex < questions.length){
                showQuestion();
        }

        else{
            showResult();
        }
     });

     function showResult(){
        quizBox.classList.add("hide");
        resultBox.classList.remove("hide");
        // scoreEl.textContent = `${score} / ${questions.length}`;

        // Adding a Trophy emoji and the Final Score ..
        scoreEl.innerHTML = `<span style="font-size: 1.5rem;">🏆</span><br><br>${score} / ${questions.length}`;
     }

     restartBtn.addEventListener("click", () => {
        currentQuestionIndex = 0;
        score = 0;
        resultBox.classList.add("hide");
        categoryBox.classList.remove("hide"); // show categories again from the beginning ...
     });





