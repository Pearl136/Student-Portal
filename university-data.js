// University & program database for the Pakistan Student Career Portal
// Edit this file to add/update universities — no need to touch page2.html
// Each entry: name, campus, field, sector (Public/Private), cutoff (approx merit %), fee (string), website (optional, official link)

const universityDatabase = [
  {
    "name": "COMSATS University Islamabad",
    "campus": "Islamabad Campus (Main)",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 86.2,
    "fee": "~PKR 145,000 / Sem",
    "website": "https://www.comsats.edu.pk"
  },
  {
    "name": "COMSATS University Islamabad",
    "campus": "Lahore Campus",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 83.5,
    "fee": "~PKR 140,000 / Sem (per-credit-hour billing)",
    "website": "https://lahore.comsats.edu.pk/fee-structure.aspx"
  },
  {
    "name": "COMSATS University Islamabad",
    "campus": "Wah Campus",
    "field": "Software Engineering",
    "sector": "Public",
    "cutoff": 74,
    "fee": "~PKR 125,000 / Sem",
    "website": "https://www.comsats.edu.pk"
  },
  {
    "name": "COMSATS University Islamabad",
    "campus": "Wah Campus",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 76,
    "fee": "~PKR 125,000 / Sem",
    "website": "https://www.comsats.edu.pk"
  },
  {
    "name": "COMSATS University Islamabad",
    "campus": "Attock Campus",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 68.5,
    "fee": "~PKR 115,000 / Sem",
    "website": "https://www.comsats.edu.pk"
  },
  {
    "name": "COMSATS University Islamabad",
    "campus": "Abbottabad Campus",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 70,
    "fee": "~PKR 120,000 / Sem",
    "website": "https://www.comsats.edu.pk"
  },
  {
    "name": "COMSATS University Islamabad",
    "campus": "Sahiwal Campus",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 65,
    "fee": "PKR 133,000 / Sem (verified, Spring 2025)",
    "website": "https://sahiwal.comsats.edu.pk"
  },
  {
    "name": "COMSATS University Islamabad",
    "campus": "Vehari Campus",
    "field": "Software Engineering",
    "sector": "Public",
    "cutoff": 62,
    "fee": "~PKR 110,000 / Sem",
    "website": "https://www.comsats.edu.pk"
  },
  {
    "name": "FAST NUCES",
    "campus": "Islamabad Campus",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 78.5,
    "fee": "~PKR 150,000–180,000 / Sem (per-credit-hour)",
    "website": "https://www.nu.edu.pk/Admissions/FeeStructure"
  },
  {
    "name": "FAST NUCES",
    "campus": "Lahore Campus",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 77,
    "fee": "~PKR 150,000–180,000 / Sem (per-credit-hour)",
    "website": "https://www.nu.edu.pk/Admissions/FeeStructure"
  },
  {
    "name": "FAST NUCES",
    "campus": "Peshawar Campus",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 68,
    "fee": "~PKR 130,000–160,000 / Sem (per-credit-hour)",
    "website": "https://pwr.nu.edu.pk/pages/fee-structure"
  },
  {
    "name": "FAST NUCES",
    "campus": "Karachi Campus",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 76.5,
    "fee": "~PKR 150,000–180,000 / Sem (per-credit-hour)",
    "website": "https://khi.nu.edu.pk"
  },
  {
    "name": "FAST NUCES",
    "campus": "Chiniot-Faisalabad Campus",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 70,
    "fee": "~PKR 130,000–160,000 / Sem (per-credit-hour)",
    "website": "https://www.nu.edu.pk/Admissions/FeeStructure"
  },
  {
    "name": "NUST (SEECS)",
    "campus": "H-12, Islamabad (Main)",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 84,
    "fee": "PKR 197,050 / Sem (verified, 2025-26)",
    "website": "https://nust.edu.pk/admissions/fee-structure/undergraduate-financial-matters/"
  },
  {
    "name": "NUST (SEECS)",
    "campus": "H-12, Islamabad (Main)",
    "field": "Artificial Intelligence",
    "sector": "Public",
    "cutoff": 85,
    "fee": "PKR 197,050 / Sem (verified, 2025-26)",
    "website": "https://nust.edu.pk/admissions/fee-structure/undergraduate-financial-matters/"
  },
  {
    "name": "NUST (CME)",
    "campus": "Risalpur Campus",
    "field": "Civil Engineering",
    "sector": "Public",
    "cutoff": 67,
    "fee": "PKR 197,050 / Sem (verified, 2025-26)",
    "website": "https://nust.edu.pk/admissions/fee-structure/undergraduate-financial-matters/"
  },
  {
    "name": "NUST (SMME)",
    "campus": "H-12, Islamabad",
    "field": "Mechanical Engineering",
    "sector": "Public",
    "cutoff": 80,
    "fee": "PKR 197,050 / Sem (verified, 2025-26)",
    "website": "https://nust.edu.pk/admissions/fee-structure/undergraduate-financial-matters/"
  },
  {
    "name": "UET Lahore",
    "campus": "Main Campus, Lahore",
    "field": "Electrical Engineering",
    "sector": "Public",
    "cutoff": 75,
    "fee": "~PKR 40,000–88,000 / Sem (open merit, subsidized)",
    "website": "https://uet.edu.pk"
  },
  {
    "name": "UET Lahore",
    "campus": "KSK Campus",
    "field": "Electrical Engineering",
    "sector": "Public",
    "cutoff": 66,
    "fee": "~PKR 40,000–88,000 / Sem (open merit, subsidized)",
    "website": "https://uet.edu.pk"
  },
  {
    "name": "UET Lahore",
    "campus": "Main Campus, Lahore",
    "field": "Mechanical Engineering",
    "sector": "Public",
    "cutoff": 73,
    "fee": "~PKR 40,000–88,000 / Sem (open merit, subsidized)",
    "website": "https://uet.edu.pk"
  },
  {
    "name": "UET Taxila",
    "campus": "Main Campus, Taxila",
    "field": "Mechanical Engineering",
    "sector": "Public",
    "cutoff": 68,
    "fee": "~PKR 72,000 / Sem"
  },
  {
    "name": "UET Peshawar",
    "campus": "Main Campus, Peshawar",
    "field": "Civil Engineering",
    "sector": "Public",
    "cutoff": 64,
    "fee": "~PKR 65,000 / Sem"
  },
  {
    "name": "GIK Institute (GIKI)",
    "campus": "Topi, Swabi",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 80,
    "fee": "PKR 470,000 / Sem (verified, incl. mandatory hostel)",
    "website": "https://giki.edu.pk/admissions/admissions-undergraduates/ugrad-fees-and-expenses/"
  },
  {
    "name": "GIK Institute (GIKI)",
    "campus": "Topi, Swabi",
    "field": "Electrical Engineering",
    "sector": "Private",
    "cutoff": 79,
    "fee": "PKR 470,000 / Sem (verified, incl. mandatory hostel)",
    "website": "https://giki.edu.pk/admissions/admissions-undergraduates/ugrad-fees-and-expenses/"
  },
  {
    "name": "PIEAS",
    "campus": "Nilore, Islamabad",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 88,
    "fee": "~PKR 60,000 / Sem"
  },
  {
    "name": "Institute of Space Technology (IST)",
    "campus": "Islamabad",
    "field": "Artificial Intelligence",
    "sector": "Public",
    "cutoff": 75,
    "fee": "~PKR 130,000 / Sem"
  },
  {
    "name": "NED University of Engineering & Technology",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 72,
    "fee": "~PKR 55,000 / Sem"
  },
  {
    "name": "NED University of Engineering & Technology",
    "campus": "Karachi",
    "field": "Civil Engineering",
    "sector": "Public",
    "cutoff": 68,
    "fee": "~PKR 55,000 / Sem"
  },
  {
    "name": "NED University of Engineering & Technology",
    "campus": "Karachi",
    "field": "Electrical Engineering",
    "sector": "Public",
    "cutoff": 70,
    "fee": "~PKR 55,000 / Sem"
  },
  {
    "name": "Mehran UET",
    "campus": "Jamshoro",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 65,
    "fee": "~PKR 48,000 / Sem"
  },
  {
    "name": "Mehran UET",
    "campus": "Jamshoro",
    "field": "Civil Engineering",
    "sector": "Public",
    "cutoff": 60,
    "fee": "~PKR 48,000 / Sem"
  },
  {
    "name": "SZABIST",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 65,
    "fee": "~PKR 145,000 / Sem"
  },
  {
    "name": "IoBM",
    "campus": "Karachi",
    "field": "Business Administration (BBA)",
    "sector": "Private",
    "cutoff": 62,
    "fee": "~PKR 150,000 / Sem"
  },
  {
    "name": "Iqra University",
    "campus": "Karachi",
    "field": "Business Administration (BBA)",
    "sector": "Private",
    "cutoff": 60,
    "fee": "~PKR 110,000 / Sem"
  },
  {
    "name": "Air University",
    "campus": "E-9, Islamabad",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 73,
    "fee": "~PKR 135,000 / Sem"
  },
  {
    "name": "Bahria University",
    "campus": "E-8, Islamabad",
    "field": "Software Engineering",
    "sector": "Private",
    "cutoff": 66,
    "fee": "~PKR 125,000 / Sem"
  },
  {
    "name": "Punjab University (PUCIT)",
    "campus": "Lahore",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 71,
    "fee": "~PKR 45,000 / Sem"
  },
  {
    "name": "Quaid-i-Azam University",
    "campus": "Islamabad",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 82,
    "fee": "~PKR 40,000 / Sem"
  },
  {
    "name": "University of Balochistan",
    "campus": "Quetta",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 55,
    "fee": "~PKR 40,000 / Sem"
  },
  {
    "name": "BUITEMS",
    "campus": "Quetta",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 58,
    "fee": "~PKR 60,000 / Sem"
  },
  {
    "name": "University of the Punjab",
    "campus": "Lahore",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 68,
    "fee": "~PKR 35,000 / Sem"
  },
  {
    "name": "University of the Punjab",
    "campus": "Lahore",
    "field": "Software Engineering",
    "sector": "Public",
    "cutoff": 67,
    "fee": "~PKR 35,000 / Sem"
  },
  {
    "name": "Government College University",
    "campus": "Lahore",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 70,
    "fee": "~PKR 33,000 / Sem"
  },
  {
    "name": "Government College University",
    "campus": "Faisalabad",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 62,
    "fee": "~PKR 30,000 / Sem"
  },
  {
    "name": "University of Agriculture",
    "campus": "Faisalabad",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 61,
    "fee": "~PKR 32,000 / Sem"
  },
  {
    "name": "Bahauddin Zakariya University",
    "campus": "Multan",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 60,
    "fee": "~PKR 32,000 / Sem"
  },
  {
    "name": "Islamia University of Bahawalpur",
    "campus": "Bahawalpur",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 58,
    "fee": "~PKR 30,000 / Sem"
  },
  {
    "name": "University of Sargodha",
    "campus": "Sargodha",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 57,
    "fee": "~PKR 28,000 / Sem"
  },
  {
    "name": "University of Gujrat",
    "campus": "Gujrat",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 59,
    "fee": "~PKR 30,000 / Sem"
  },
  {
    "name": "National Textile University",
    "campus": "Faisalabad",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 63,
    "fee": "~PKR 55,000 / Sem"
  },
  {
    "name": "University of Karachi",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 60,
    "fee": "~PKR 30,000 / Sem"
  },
  {
    "name": "University of Sindh",
    "campus": "Jamshoro",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 55,
    "fee": "~PKR 25,000 / Sem"
  },
  {
    "name": "Shah Abdul Latif University",
    "campus": "Khairpur",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 50,
    "fee": "~PKR 22,000 / Sem"
  },
  {
    "name": "Sukkur IBA University",
    "campus": "Sukkur",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 72,
    "fee": "~PKR 60,000 / Sem"
  },
  {
    "name": "Sukkur IBA University",
    "campus": "Sukkur",
    "field": "Business Administration (BBA)",
    "sector": "Public",
    "cutoff": 70,
    "fee": "~PKR 60,000 / Sem"
  },
  {
    "name": "Dawood University of Engineering & Technology",
    "campus": "Karachi",
    "field": "Civil Engineering",
    "sector": "Public",
    "cutoff": 55,
    "fee": "~PKR 50,000 / Sem"
  },
  {
    "name": "University of Peshawar",
    "campus": "Peshawar",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 58,
    "fee": "~PKR 28,000 / Sem"
  },
  {
    "name": "Abdul Wali Khan University",
    "campus": "Mardan",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 54,
    "fee": "~PKR 26,000 / Sem"
  },
  {
    "name": "Hazara University",
    "campus": "Mansehra",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 53,
    "fee": "~PKR 25,000 / Sem"
  },
  {
    "name": "University of Malakand",
    "campus": "Chakdara",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 50,
    "fee": "~PKR 24,000 / Sem"
  },
  {
    "name": "Karakoram International University",
    "campus": "Gilgit",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 50,
    "fee": "~PKR 30,000 / Sem"
  },
  {
    "name": "University of Azad Jammu & Kashmir",
    "campus": "Muzaffarabad",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 53,
    "fee": "~PKR 35,000 / Sem"
  },
  {
    "name": "Mirpur University of Science & Technology (MUST)",
    "campus": "Mirpur, AJK",
    "field": "Computer Science",
    "sector": "Public",
    "cutoff": 55,
    "fee": "~PKR 40,000 / Sem"
  },
  {
    "name": "Mirpur University of Science & Technology (MUST)",
    "campus": "Mirpur, AJK",
    "field": "Civil Engineering",
    "sector": "Public",
    "cutoff": 52,
    "fee": "~PKR 40,000 / Sem"
  },
  {
    "name": "LUMS",
    "campus": "Lahore",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 85,
    "fee": "~PKR 700,000+ / Sem (per-credit-hour, ~45,800/CH)",
    "website": "https://lums.edu.pk"
  },
  {
    "name": "University of Management and Technology (UMT)",
    "campus": "Lahore",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 63,
    "fee": "~PKR 130,000 / Sem"
  },
  {
    "name": "Superior University",
    "campus": "Lahore",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 58,
    "fee": "~PKR 95,000 / Sem"
  },
  {
    "name": "Forman Christian College (FCC)",
    "campus": "Lahore",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 65,
    "fee": "~PKR 140,000 / Sem"
  },
  {
    "name": "National College of Business Administration & Economics (NCBA&E)",
    "campus": "Lahore",
    "field": "Business Administration (BBA)",
    "sector": "Private",
    "cutoff": 55,
    "fee": "~PKR 90,000 / Sem"
  },
  {
    "name": "Riphah International University",
    "campus": "Islamabad",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 64,
    "fee": "~PKR 140,000 / Sem"
  },
  {
    "name": "Sir Syed University of Engineering & Technology",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 60,
    "fee": "~PKR 120,000 / Sem"
  },
  {
    "name": "Sir Syed University of Engineering & Technology",
    "campus": "Karachi",
    "field": "Electrical Engineering",
    "sector": "Private",
    "cutoff": 58,
    "fee": "~PKR 120,000 / Sem"
  },
  {
    "name": "Hamdard University",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 55,
    "fee": "~PKR 110,000 / Sem"
  },
  {
    "name": "Hamdard University",
    "campus": "Karachi",
    "field": "MBBS / BDS",
    "sector": "Private",
    "cutoff": 78,
    "fee": "~PKR 850,000 / Year"
  },
  {
    "name": "PAF-KIET (Karachi Institute of Economics & Technology)",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 60,
    "fee": "~PKR 130,000 / Sem"
  },
  {
    "name": "Muhammad Ali Jinnah University",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 58,
    "fee": "~PKR 115,000 / Sem"
  },
  {
    "name": "DHA Suffa University",
    "campus": "Karachi",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 62,
    "fee": "~PKR 150,000 / Sem"
  },
  {
    "name": "Institute of Southern Punjab",
    "campus": "Multan",
    "field": "Computer Science",
    "sector": "Private",
    "cutoff": 50,
    "fee": "~PKR 70,000 / Sem"
  },
  {
    "name": "King Edward Medical University",
    "campus": "Lahore",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 92.4,
    "fee": "~PKR 50,000 / Year (open merit); self-finance seats far higher",
    "website": "https://kemu.edu.pk/fee-structure/"
  },
  {
    "name": "Allama Iqbal Medical College",
    "campus": "Lahore",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 89,
    "fee": "~PKR 48,000 / Year"
  },
  {
    "name": "Fatima Jinnah Medical University",
    "campus": "Lahore",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 87,
    "fee": "~PKR 48,000 / Year"
  },
  {
    "name": "Nishtar Medical University",
    "campus": "Multan",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 85,
    "fee": "~PKR 46,000 / Year"
  },
  {
    "name": "Rawalpindi Medical University",
    "campus": "Rawalpindi",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 86,
    "fee": "~PKR 47,000 / Year"
  },
  {
    "name": "Dow University of Health Sciences",
    "campus": "Karachi",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 88,
    "fee": "~PKR 50,000 / Year"
  },
  {
    "name": "Jinnah Sindh Medical University",
    "campus": "Karachi",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 84,
    "fee": "~PKR 45,000 / Year"
  },
  {
    "name": "Liaquat University of Medical & Health Sciences",
    "campus": "Jamshoro",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 80,
    "fee": "~PKR 42,000 / Year"
  },
  {
    "name": "Bolan Medical College",
    "campus": "Quetta",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 75,
    "fee": "~PKR 40,000 / Year"
  },
  {
    "name": "Gomal Medical College",
    "campus": "D.I. Khan",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 72,
    "fee": "~PKR 38,000 / Year"
  },
  {
    "name": "Ziauddin University",
    "campus": "Karachi",
    "field": "MBBS / BDS",
    "sector": "Private",
    "cutoff": 80,
    "fee": "~PKR 900,000 / Year"
  },
  {
    "name": "Khyber Medical University",
    "campus": "Peshawar",
    "field": "MBBS / BDS",
    "sector": "Public",
    "cutoff": 83,
    "fee": "~PKR 44,000 / Year"
  },
  {
    "name": "Aga Khan University",
    "campus": "Karachi",
    "field": "MBBS / BDS",
    "sector": "Private",
    "cutoff": 90,
    "fee": "~PKR 950,000 / Year"
  },
  {
    "name": "IBA Karachi",
    "campus": "Main Campus, Karachi",
    "field": "Business Administration (BBA)",
    "sector": "Public",
    "cutoff": 78,
    "fee": "~PKR 100,000–200,000 / Sem (per-credit-hour)",
    "website": "https://www.iba.edu.pk/fee-structure.php"
  },
  {
    "name": "LUMS",
    "campus": "Lahore",
    "field": "Business Administration (BBA)",
    "sector": "Private",
    "cutoff": 82,
    "fee": "~PKR 700,000+ / Sem (per-credit-hour, ~45,800/CH)",
    "website": "https://lums.edu.pk"
  },
  {
    "name": "Lahore School of Economics (LSE)",
    "campus": "Lahore",
    "field": "Business Administration (BBA)",
    "sector": "Private",
    "cutoff": 68,
    "fee": "~PKR 190,000 / Sem"
  }
];
