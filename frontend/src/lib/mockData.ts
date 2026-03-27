/**
 * ROOTS EGYPT — Comprehensive Mock Data
 * Realistic Egyptian genealogy & heritage content for prototype mode.
 */

// ─────────────────────────────────────────────
// USERS
// ─────────────────────────────────────────────
export const MOCK_USERS = [
  {
    id: 1,
    email: "admin@rootsegypt.com",
    password: "password123",
    fullName: "Kamel Ibrahim Al-Masry",
    phone: "+20 10 1234 5678",
    role: 1,
    roleName: "Admin",
    status: "active",
    permissions: ["manage_users", "manage_content", "view_analytics"],
  },
  {
    id: 2,
    email: "demo@rootsegypt.com",
    password: "demo123",
    fullName: "Layla Hassan Nour",
    phone: "+20 11 9876 5432",
    role: 2,
    roleName: "Member",
    status: "active",
    permissions: [],
  },
  {
    id: 3,
    email: "researcher@rootsegypt.com",
    password: "research123",
    fullName: "Dr. Amr Fouad Al-Said",
    phone: "+20 12 5555 6666",
    role: 2,
    roleName: "Researcher",
    status: "active",
    permissions: [],
  },
];

export const MOCK_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.bW9jaw.bW9jaw";
export const MOCK_REFRESH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.cmVmcmVzaA.cmVmcmVzaA";

// ─────────────────────────────────────────────
// GEDCOM DATA FOR FAMILY TREES
// ─────────────────────────────────────────────

const GEDCOM_AL_MASRY = `0 HEAD
1 SOUR RootsEgypt
2 VERS 1.0
1 GEDC
2 VERS 5.5.1
1 CHAR UTF-8
0 @I1@ INDI
1 NAME Ahmed /Al-Masry/
1 SEX M
1 BIRT
2 DATE 1895
2 PLAC Cairo, Egypt
1 DEAT
2 DATE 1972
1 FAMC @F1@
0 @I2@ INDI
1 NAME Khadija /Salim/
1 SEX F
1 BIRT
2 DATE 1900
2 PLAC Giza, Egypt
1 DEAT
2 DATE 1985
1 FAMS @F1@
0 @I3@ INDI
1 NAME Mahmoud /Al-Masry/
1 SEX M
1 BIRT
2 DATE 1922
2 PLAC Cairo, Egypt
1 FAMS @F2@
1 FAMC @F1@
0 @I4@ INDI
1 NAME Fatima /Al-Masry/
1 SEX F
1 BIRT
2 DATE 1925
2 PLAC Cairo, Egypt
1 FAMC @F1@
0 @I5@ INDI
1 NAME Ibrahim /Al-Masry/
1 SEX M
1 BIRT
2 DATE 1928
2 PLAC Cairo, Egypt
1 FAMC @F1@
0 @I6@ INDI
1 NAME Amina /Youssef/
1 SEX F
1 BIRT
2 DATE 1924
2 PLAC Alexandria, Egypt
1 FAMS @F2@
0 @I7@ INDI
1 NAME Karim /Al-Masry/
1 SEX M
1 BIRT
2 DATE 1948
2 PLAC Cairo, Egypt
1 FAMS @F3@
1 FAMC @F2@
0 @I8@ INDI
1 NAME Nadia /Al-Masry/
1 SEX F
1 BIRT
2 DATE 1951
2 PLAC Cairo, Egypt
1 FAMC @F2@
0 @I9@ INDI
1 NAME Samira /Hassan/
1 SEX F
1 BIRT
2 DATE 1950
2 PLAC Cairo, Egypt
1 FAMS @F3@
0 @I10@ INDI
1 NAME Omar /Al-Masry/
1 SEX M
1 BIRT
2 DATE 1975
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @I11@ INDI
1 NAME Dina /Al-Masry/
1 SEX F
1 BIRT
2 DATE 1978
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @I12@ INDI
1 NAME Yasmin /Al-Masry/
1 SEX F
1 BIRT
2 DATE 1981
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @F1@ FAM
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
1 CHIL @I4@
1 CHIL @I5@
0 @F2@ FAM
1 HUSB @I3@
1 WIFE @I6@
1 CHIL @I7@
1 CHIL @I8@
0 @F3@ FAM
1 HUSB @I7@
1 WIFE @I9@
1 CHIL @I10@
1 CHIL @I11@
1 CHIL @I12@
0 TRLR`;

const GEDCOM_HASSAN = `0 HEAD
1 SOUR RootsEgypt
2 VERS 1.0
1 GEDC
2 VERS 5.5.1
1 CHAR UTF-8
0 @I1@ INDI
1 NAME Mustafa /Hassan/
1 SEX M
1 BIRT
2 DATE 1880
2 PLAC Alexandria, Egypt
1 DEAT
2 DATE 1958
1 FAMS @F1@
0 @I2@ INDI
1 NAME Zainab /Ibrahim/
1 SEX F
1 BIRT
2 DATE 1885
2 PLAC Alexandria, Egypt
1 DEAT
2 DATE 1965
1 FAMS @F1@
0 @I3@ INDI
1 NAME Abdel-Rahman /Hassan/
1 SEX M
1 BIRT
2 DATE 1908
2 PLAC Alexandria, Egypt
1 FAMC @F1@
1 FAMS @F2@
0 @I4@ INDI
1 NAME Hoda /Osman/
1 SEX F
1 BIRT
2 DATE 1912
2 PLAC Cairo, Egypt
1 FAMS @F2@
0 @I5@ INDI
1 NAME Khalil /Hassan/
1 SEX M
1 BIRT
2 DATE 1910
2 PLAC Alexandria, Egypt
1 FAMC @F1@
1 FAMS @F3@
0 @I6@ INDI
1 NAME Aisha /Mahmoud/
1 SEX F
1 BIRT
2 DATE 1915
2 PLAC Mansoura, Egypt
1 FAMS @F3@
0 @I7@ INDI
1 NAME Said /Hassan/
1 SEX M
1 BIRT
2 DATE 1935
2 PLAC Alexandria, Egypt
1 FAMC @F2@
1 FAMS @F4@
0 @I8@ INDI
1 NAME Layla /Hassan/
1 SEX F
1 BIRT
2 DATE 1938
2 PLAC Alexandria, Egypt
1 FAMC @F2@
0 @I9@ INDI
1 NAME Nour /Farid/
1 SEX F
1 BIRT
2 DATE 1937
2 PLAC Cairo, Egypt
1 FAMS @F4@
0 @I10@ INDI
1 NAME Tarek /Hassan/
1 SEX M
1 BIRT
2 DATE 1960
2 PLAC Alexandria, Egypt
1 FAMC @F4@
0 @I11@ INDI
1 NAME Mona /Hassan/
1 SEX F
1 BIRT
2 DATE 1963
2 PLAC Alexandria, Egypt
1 FAMC @F4@
0 @I12@ INDI
1 NAME Ahmed /Hassan/
1 SEX M
1 BIRT
2 DATE 1966
2 PLAC Alexandria, Egypt
1 FAMC @F4@
0 @I13@ INDI
1 NAME Rania /Hassan/
1 SEX F
1 BIRT
2 DATE 1988
2 PLAC Alexandria, Egypt
0 @F1@ FAM
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
1 CHIL @I5@
0 @F2@ FAM
1 HUSB @I3@
1 WIFE @I4@
1 CHIL @I7@
1 CHIL @I8@
0 @F3@ FAM
1 HUSB @I5@
1 WIFE @I6@
0 @F4@ FAM
1 HUSB @I7@
1 WIFE @I9@
1 CHIL @I10@
1 CHIL @I11@
1 CHIL @I12@
0 TRLR`;

const GEDCOM_AL_SAID = `0 HEAD
1 SOUR RootsEgypt
2 VERS 1.0
1 GEDC
2 VERS 5.5.1
1 CHAR UTF-8
0 @I1@ INDI
1 NAME Ramadan /Al-Said/
1 SEX M
1 BIRT
2 DATE 1910
2 PLAC Luxor, Egypt
1 FAMS @F1@
0 @I2@ INDI
1 NAME Umm-Kulthum /Barakat/
1 SEX F
1 BIRT
2 DATE 1915
2 PLAC Assiut, Egypt
1 FAMS @F1@
0 @I3@ INDI
1 NAME Saad /Al-Said/
1 SEX M
1 BIRT
2 DATE 1938
2 PLAC Luxor, Egypt
1 FAMC @F1@
1 FAMS @F2@
0 @I4@ INDI
1 NAME Mariam /Al-Said/
1 SEX F
1 BIRT
2 DATE 1941
2 PLAC Luxor, Egypt
1 FAMC @F1@
0 @I5@ INDI
1 NAME Soha /Mansour/
1 SEX F
1 BIRT
2 DATE 1940
2 PLAC Qena, Egypt
1 FAMS @F2@
0 @I6@ INDI
1 NAME Hassan /Al-Said/
1 SEX M
1 BIRT
2 DATE 1965
2 PLAC Luxor, Egypt
1 FAMC @F2@
1 FAMS @F3@
0 @I7@ INDI
1 NAME Dalia /Al-Said/
1 SEX F
1 BIRT
2 DATE 1968
2 PLAC Luxor, Egypt
1 FAMC @F2@
0 @I8@ INDI
1 NAME Iman /Gouda/
1 SEX F
1 BIRT
2 DATE 1967
2 PLAC Sohag, Egypt
1 FAMS @F3@
0 @I9@ INDI
1 NAME Youssef /Al-Said/
1 SEX M
1 BIRT
2 DATE 1990
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @I10@ INDI
1 NAME Salma /Al-Said/
1 SEX F
1 BIRT
2 DATE 1993
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @F1@ FAM
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
1 CHIL @I4@
0 @F2@ FAM
1 HUSB @I3@
1 WIFE @I5@
1 CHIL @I6@
1 CHIL @I7@
0 @F3@ FAM
1 HUSB @I6@
1 WIFE @I8@
1 CHIL @I9@
1 CHIL @I10@
0 TRLR`;

const GEDCOM_AL_NUBA = `0 HEAD
1 SOUR RootsEgypt
2 VERS 1.0
1 GEDC
2 VERS 5.5.1
1 CHAR UTF-8
0 @I1@ INDI
1 NAME Hajj /Idris/
1 SEX M
1 BIRT
2 DATE 1900
2 PLAC Wadi Halfa, Nubia
1 DEAT
2 DATE 1978
1 FAMS @F1@
0 @I2@ INDI
1 NAME Miriam /Saleh/
1 SEX F
1 BIRT
2 DATE 1905
2 PLAC Aswan, Egypt
1 FAMS @F1@
0 @I3@ INDI
1 NAME Mustafa /Idris/
1 SEX M
1 BIRT
2 DATE 1928
2 PLAC Nubia, Egypt
1 FAMC @F1@
1 FAMS @F2@
0 @I4@ INDI
1 NAME Fatna /Idris/
1 SEX F
1 BIRT
2 DATE 1932
2 PLAC Nubia, Egypt
1 FAMC @F1@
0 @I5@ INDI
1 NAME Halima /Omar/
1 SEX F
1 BIRT
2 DATE 1930
2 PLAC Kom Ombo, Egypt
1 FAMS @F2@
0 @I6@ INDI
1 NAME Karim /Idris/
1 SEX M
1 BIRT
2 DATE 1955
2 PLAC Aswan, Egypt
1 FAMC @F2@
1 FAMS @F3@
0 @I7@ INDI
1 NAME Nadia /Idris/
1 SEX F
1 BIRT
2 DATE 1958
2 PLAC Aswan, Egypt
1 FAMC @F2@
0 @I8@ INDI
1 NAME Safia /Taha/
1 SEX F
1 BIRT
2 DATE 1957
2 PLAC Aswan, Egypt
1 FAMS @F3@
0 @I9@ INDI
1 NAME Amir /Idris/
1 SEX M
1 BIRT
2 DATE 1980
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @I10@ INDI
1 NAME Hana /Idris/
1 SEX F
1 BIRT
2 DATE 1983
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @F1@ FAM
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
1 CHIL @I4@
0 @F2@ FAM
1 HUSB @I3@
1 WIFE @I5@
1 CHIL @I6@
1 CHIL @I7@
0 @F3@ FAM
1 HUSB @I6@
1 WIFE @I8@
1 CHIL @I9@
1 CHIL @I10@
0 TRLR`;

const GEDCOM_KHALIL = `0 HEAD
1 SOUR RootsEgypt
2 VERS 1.0
1 GEDC
2 VERS 5.5.1
1 CHAR UTF-8
0 @I1@ INDI
1 NAME Naguib /Khalil/
1 SEX M
1 BIRT
2 DATE 1905
2 PLAC Suez, Egypt
1 DEAT
2 DATE 1982
1 FAMS @F1@
0 @I2@ INDI
1 NAME Nashwa /Aziz/
1 SEX F
1 BIRT
2 DATE 1910
2 PLAC Port Said, Egypt
1 FAMS @F1@
0 @I3@ INDI
1 NAME George /Khalil/
1 SEX M
1 BIRT
2 DATE 1932
2 PLAC Suez, Egypt
1 FAMC @F1@
1 FAMS @F2@
0 @I4@ INDI
1 NAME Maryam /Khalil/
1 SEX F
1 BIRT
2 DATE 1935
2 PLAC Suez, Egypt
1 FAMC @F1@
0 @I5@ INDI
1 NAME Cecilia /Boulos/
1 SEX F
1 BIRT
2 DATE 1933
2 PLAC Cairo, Egypt
1 FAMS @F2@
0 @I6@ INDI
1 NAME Michel /Khalil/
1 SEX M
1 BIRT
2 DATE 1958
2 PLAC Cairo, Egypt
1 FAMC @F2@
1 FAMS @F3@
0 @I7@ INDI
1 NAME Irene /Khalil/
1 SEX F
1 BIRT
2 DATE 1961
2 PLAC Cairo, Egypt
1 FAMC @F2@
0 @I8@ INDI
1 NAME Sandra /Aziz/
1 SEX F
1 BIRT
2 DATE 1960
2 PLAC Alexandria, Egypt
1 FAMS @F3@
0 @I9@ INDI
1 NAME Mark /Khalil/
1 SEX M
1 BIRT
2 DATE 1985
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @I10@ INDI
1 NAME Christine /Khalil/
1 SEX F
1 BIRT
2 DATE 1988
2 PLAC Cairo, Egypt
1 FAMC @F3@
0 @F1@ FAM
1 HUSB @I1@
1 WIFE @I2@
1 CHIL @I3@
1 CHIL @I4@
0 @F2@ FAM
1 HUSB @I3@
1 WIFE @I5@
1 CHIL @I6@
1 CHIL @I7@
0 @F3@ FAM
1 HUSB @I6@
1 WIFE @I8@
1 CHIL @I9@
1 CHIL @I10@
0 TRLR`;

// ─────────────────────────────────────────────
// TREES
// ─────────────────────────────────────────────
export const MOCK_TREES = [
  {
    id: 1,
    title: "Al-Masry Family Tree",
    description: "Four-generation family lineage from Cairo, traced through Ottoman tax records and civil registers from 1895 to present day.",
    owner_name: "Kamel Ibrahim Al-Masry",
    owner: "kameladmin",
    isPublic: true,
    hasGedcom: true,
    gedcom_path: "/api/trees/1/gedcom",
    gedcomPath: "/api/trees/1/gedcom",
    data_format: "gedcom",
    archiveSource: "Dar Al-Wathaeq Al-Qawmiya",
    documentCode: "EGY-CAI-1895",
    createdAt: "2025-01-15T10:00:00Z",
    gedcom: GEDCOM_AL_MASRY,
  },
  {
    id: 2,
    title: "Hassan-Ibrahim Family (Alexandria)",
    description: "A prominent Alexandrian family lineage spanning five generations, including records from the Greek-Egyptian community and port authority archives.",
    owner_name: "Dr. Amr Fouad Al-Said",
    owner: "researcher",
    isPublic: true,
    hasGedcom: true,
    gedcom_path: "/api/trees/2/gedcom",
    gedcomPath: "/api/trees/2/gedcom",
    data_format: "gedcom",
    archiveSource: "Alexandria Municipal Archives",
    documentCode: "EGY-ALX-1880",
    createdAt: "2025-02-03T14:30:00Z",
    gedcom: GEDCOM_HASSAN,
  },
  {
    id: 3,
    title: "Al-Said Family — Luxor Lineage",
    description: "Upper Egyptian family with roots in Luxor, documented through Coptic church birth registries and Sharia court marriage records from 1910.",
    owner_name: "Layla Hassan Nour",
    owner: "layla",
    isPublic: true,
    hasGedcom: true,
    gedcom_path: "/api/trees/3/gedcom",
    gedcomPath: "/api/trees/3/gedcom",
    data_format: "gedcom",
    archiveSource: "Luxor Church of the Holy Virgin",
    documentCode: "EGY-LUX-1910",
    createdAt: "2025-03-10T09:15:00Z",
    gedcom: GEDCOM_AL_SAID,
  },
  {
    id: 4,
    title: "Idris Family — Nubian Heritage",
    description: "Nubian family from Wadi Halfa region, displaced during the construction of the High Dam in 1964. Oral history and community records preserved.",
    owner_name: "Kamel Ibrahim Al-Masry",
    owner: "kameladmin",
    isPublic: true,
    hasGedcom: true,
    gedcom_path: "/api/trees/4/gedcom",
    gedcomPath: "/api/trees/4/gedcom",
    data_format: "gedcom",
    archiveSource: "Nubian Heritage Documentation Project",
    documentCode: "EGY-NUB-1900",
    createdAt: "2025-03-22T16:00:00Z",
    gedcom: GEDCOM_AL_NUBA,
  },
  {
    id: 5,
    title: "Khalil Family — Coptic Lineage (Suez)",
    description: "Coptic Christian family from Suez with connections to Port Said trade community. Records sourced from Episcopal Diocese registers 1905-1990.",
    owner_name: "Dr. Amr Fouad Al-Said",
    owner: "researcher",
    isPublic: true,
    hasGedcom: true,
    gedcom_path: "/api/trees/5/gedcom",
    gedcomPath: "/api/trees/5/gedcom",
    data_format: "gedcom",
    archiveSource: "Coptic Diocese of Suez",
    documentCode: "EGY-SUZ-1905",
    createdAt: "2025-04-01T11:00:00Z",
    gedcom: GEDCOM_KHALIL,
  },
];

// ─────────────────────────────────────────────
// BOOKS & DOCUMENTS
// ─────────────────────────────────────────────
export const MOCK_BOOKS = [
  // --- Books ---
  {
    id: 101,
    title: "Tracing Your Egyptian Roots: A Complete Guide",
    author: "Dr. Hisham Al-Wakil",
    description: "The definitive guide to Egyptian genealogical research, covering Ottoman archives, Coptic church records, civil registration, and tribal nasab manuscripts. Includes bilingual research templates.",
    category: "Genealogy",
    rating: 5,
    downloads: 2847,
    coverUrl: "https://picsum.photos/seed/book-egypt-roots/400/600",
    createdAt: "2024-09-01T00:00:00Z",
    fileSize: 4200000,
    filePath: null,
  },
  {
    id: 102,
    title: "Egyptian Family Names: Origins & Distribution",
    author: "Prof. Amal Osman",
    description: "Comprehensive etymological study of Egyptian surnames across Arab, Coptic, Nubian, and Bedouin traditions. Maps showing regional distribution of major family clans.",
    category: "Linguistics",
    rating: 4,
    downloads: 1534,
    coverUrl: "https://picsum.photos/seed/book-names-egypt/400/600",
    createdAt: "2024-10-15T00:00:00Z",
    fileSize: 3100000,
    filePath: null,
  },
  {
    id: 103,
    title: "The Nile Valley Civilizations: Genealogy & Lineage",
    author: "Dr. Saad Abdel-Hakim",
    description: "An academic exploration of dynastic lineages from the Pharaonic period through the Arab conquest, drawing from hieroglyphic records, papyri, and Greek documentation.",
    category: "History",
    rating: 5,
    downloads: 3201,
    coverUrl: "https://picsum.photos/seed/book-nile-valley/400/600",
    createdAt: "2024-08-20T00:00:00Z",
    fileSize: 8500000,
    filePath: null,
  },
  {
    id: 104,
    title: "Alexandria: A City of Many Families",
    author: "Mona Hilal",
    description: "Social history of Alexandria's multicultural families — Greek, Jewish, Italian, Armenian, and Arab communities — from the 1800s through post-revolution Egypt.",
    category: "Social History",
    rating: 4,
    downloads: 987,
    coverUrl: "https://picsum.photos/seed/book-alexandria/400/600",
    createdAt: "2024-11-10T00:00:00Z",
    fileSize: 5400000,
    filePath: null,
  },
  {
    id: 105,
    title: "Nubian Heritage: People, Migration & Memory",
    author: "Dr. Ibrahim Suleiman",
    description: "Documents the forced relocation of Nubian communities after the Aswan High Dam and traces family lineages using oral traditions, photographs, and community records.",
    category: "Heritage",
    rating: 5,
    downloads: 1876,
    coverUrl: "https://picsum.photos/seed/book-nubian/400/600",
    createdAt: "2024-12-01T00:00:00Z",
    fileSize: 6200000,
    filePath: null,
  },
  {
    id: 106,
    title: "Coptic Christianity: Records of Faith and Family",
    author: "Father Bishoy Marcus",
    description: "A guide to researching Coptic family heritage through baptismal records, marriage registers, and monastery archives spanning 2,000 years of continuous tradition.",
    category: "Religion & Heritage",
    rating: 4,
    downloads: 743,
    coverUrl: "https://picsum.photos/seed/book-coptic/400/600",
    createdAt: "2025-01-05T00:00:00Z",
    fileSize: 3900000,
    filePath: null,
  },
  {
    id: 107,
    title: "Sinai Tribes: Bedouin Genealogies of the Peninsula",
    author: "Maj. Ahmad Al-Tarabin",
    description: "Oral and documented genealogies of the 14 major Sinai Bedouin tribes, including the Tarabin, Tiyaha, and Azazma clans, with maps and photographic evidence.",
    category: "Tribal Studies",
    rating: 4,
    downloads: 621,
    coverUrl: "https://picsum.photos/seed/book-sinai/400/600",
    createdAt: "2025-01-20T00:00:00Z",
    fileSize: 4700000,
    filePath: null,
  },
  {
    id: 108,
    title: "The Muhammad Ali Dynasty: A Royal Family History",
    author: "Dr. Khaled Fahmy",
    description: "Detailed genealogical history of Egypt's ruling dynasty from Muhammad Ali Pasha (1769-1849) to King Farouk, with court records, portraits, and European diplomatic sources.",
    category: "Royalty & Politics",
    rating: 5,
    downloads: 4102,
    coverUrl: "https://picsum.photos/seed/book-dynasty/400/600",
    createdAt: "2024-07-15T00:00:00Z",
    fileSize: 12100000,
    filePath: null,
  },
  // --- Documents ---
  {
    id: 201,
    title: "Ottoman Tax Registers of Egypt: 1800-1882 (Digital Edition)",
    author: "Turkish National Archives — Cairo Branch",
    description: "Digitized Ottoman miri tax registers listing Egyptian household heads, occupations, and property by village across all provinces of Egypt. Essential for pre-1882 genealogical research.",
    category: "Archives & Records",
    rating: 5,
    downloads: 1203,
    coverUrl: "https://picsum.photos/seed/doc-ottoman-tax/400/600",
    createdAt: "2024-11-01T00:00:00Z",
    fileSize: 45000000,
    filePath: null,
  },
  {
    id: 202,
    title: "Coptic Diocese Birth & Death Registry: Cairo 1850–1950",
    author: "Coptic Orthodox Archdiocese of Cairo",
    description: "Scanned baptismal and burial records from 23 Cairo parishes covering 100 years. Includes handwritten entries in Coptic and Arabic with transliteration guide.",
    category: "Archives & Records",
    rating: 4,
    downloads: 876,
    coverUrl: "https://picsum.photos/seed/doc-coptic-reg/400/600",
    createdAt: "2024-12-15T00:00:00Z",
    fileSize: 78000000,
    filePath: null,
  },
  {
    id: 203,
    title: "Cairo Sharia Court Marriage Records: 1700–1900",
    author: "Dar Al-Wathaeq Al-Qawmiya",
    description: "Transcribed marriage contracts (aqd zawaj) from Cairo's Islamic courts, listing names, witnesses, dowry, and family connections for over 35,000 couples.",
    category: "Archives & Records",
    rating: 5,
    downloads: 2341,
    coverUrl: "https://picsum.photos/seed/doc-sharia-court/400/600",
    createdAt: "2025-01-10T00:00:00Z",
    fileSize: 32000000,
    filePath: null,
  },
  {
    id: 204,
    title: "Egypt's First Modern Census: Muhammad Ali's 1848 Survey",
    author: "Egyptian Survey Authority",
    description: "The first comprehensive population survey of Egypt under Muhammad Ali, recording names, ages, occupations, and village locations for over 2 million individuals.",
    category: "Archives & Records",
    rating: 5,
    downloads: 3087,
    coverUrl: "https://picsum.photos/seed/doc-census-1848/400/600",
    createdAt: "2025-02-01T00:00:00Z",
    fileSize: 28000000,
    filePath: null,
  },
  {
    id: 205,
    title: "Nile Delta Land Deeds Collection: 1882–1920",
    author: "Egyptian Land Registry",
    description: "Scanned land ownership documents (hayyaza) from the Nile Delta provinces listing landowners, heirs, and property transactions during the British administration period.",
    category: "Archives & Records",
    rating: 4,
    downloads: 654,
    coverUrl: "https://picsum.photos/seed/doc-land-deeds/400/600",
    createdAt: "2025-02-20T00:00:00Z",
    fileSize: 56000000,
    filePath: null,
  },
  {
    id: 206,
    title: "Alexandria Jewish Community Records: 1850–1960",
    author: "Cairo Geniza Project",
    description: "Birth, marriage, and death records of Alexandria's Jewish community from the Ben Ezra Synagogue archives, covering Sephardic, Ashkenazi, and Karaite families.",
    category: "Archives & Records",
    rating: 4,
    downloads: 891,
    coverUrl: "https://picsum.photos/seed/doc-jewish-alx/400/600",
    createdAt: "2025-03-05T00:00:00Z",
    fileSize: 41000000,
    filePath: null,
  },
];

// ─────────────────────────────────────────────
// GALLERY
// ─────────────────────────────────────────────
export const MOCK_GALLERY = [
  { id: 1, title: "Al-Masry Family Portrait — Cairo 1952", description: "Three generations of the Al-Masry family photographed at their home in Heliopolis district. Original silver gelatin print.", author: "Family Collection", archiveSource: "Private Archive", category: "Family Portraits", createdAt: "2025-01-10T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-portrait-1/800/600" },
  { id: 2, title: "Nubian Village Before the Dam — Aswan 1958", description: "Rare photograph of a traditional Nubian village taken before the area was flooded by the Aswan High Dam reservoir in 1964.", author: "Nubian Documentation Project", archiveSource: "Aswan Museum", category: "Historical Sites", createdAt: "2025-01-15T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-nubia-1/800/600" },
  { id: 3, title: "Ottoman-Era Marriage Certificate — Cairo 1887", description: "Original Arabic marriage contract (aqd zawaj) from the Cairo Sharia court. Names of both families and 8 witnesses are legible.", author: "Dar Al-Wathaeq", archiveSource: "Cairo National Archives", category: "Documents", createdAt: "2025-01-20T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-document-1/800/600" },
  { id: 4, title: "Coptic Baptism Record — Alexandria Diocese 1921", description: "Handwritten baptism registry page from the Church of St. Mark, Alexandria, recording 47 baptisms in a single year.", author: "Coptic Archives", archiveSource: "Alexandria Diocese", category: "Documents", createdAt: "2025-01-25T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-coptic-doc/800/600" },
  { id: 5, title: "Hassan Family Wedding — Alexandria 1945", description: "Wedding photograph of Abdel-Rahman Hassan and Hoda Osman taken at the Cecil Hotel, Alexandria. Note the traditional dress.", author: "Hassan Family Archive", archiveSource: "Private Collection", category: "Family Portraits", createdAt: "2025-02-01T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-wedding-1/800/600" },
  { id: 6, title: "Luxor Temple — Evening View, 1900", description: "Rare early photographic print of Luxor Temple by an unknown photographer, showing the site before modern restoration works.", author: "Egyptian Antiquities", archiveSource: "Egyptian Museum", category: "Historical Sites", createdAt: "2025-02-05T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-luxor/800/600" },
  { id: 7, title: "Nile Felucca with Family — Aswan 1970", description: "Colorized photograph of a Nubian family crossing the Nile on a traditional felucca. The High Dam is visible in the background.", author: "Ahmed Said", archiveSource: "Personal Archive", category: "Family Portraits", createdAt: "2025-02-10T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-nile-boat/800/600" },
  { id: 8, title: "Egyptian Civil Registry — Minieh Province 1902", description: "Page from the civil birth register (sijil al-mawaledat) of Minieh province showing handwritten entries for 15 newborns.", author: "Civil Registry Office", archiveSource: "Dar Al-Wathaeq", category: "Documents", createdAt: "2025-02-15T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-registry/800/600" },
  { id: 9, title: "Khan El-Khalili Market — Cairo 1930s", description: "Black and white photograph of a family-owned shop in Khan El-Khalili, with three generations of the Habib merchant family.", author: "Pierre Moreau", archiveSource: "Cairo Library", category: "Historical Sites", createdAt: "2025-02-20T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-cairo-market/800/600" },
  { id: 10, title: "Al-Said Family Elder — Luxor 1982", description: "Portrait of Saad Al-Said, patriarch of the Al-Said family, taken in the family courtyard surrounded by his grandchildren.", author: "Dr. Amr Fouad", archiveSource: "Al-Said Family Archive", category: "Family Portraits", createdAt: "2025-02-25T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-elder/800/600" },
  { id: 11, title: "Sinai Tribal Gathering — 1975", description: "Representatives of the Tarabin and Tiyaha tribes meeting for a reconciliation council (majlis). Traditional dress and customs visible.", author: "Maj. Ahmad Al-Tarabin", archiveSource: "Sinai Documentation Project", category: "Tribal Heritage", createdAt: "2025-03-01T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-sinai-tribe/800/600" },
  { id: 12, title: "Jewish Synagogue — Alexandria 1950", description: "Interior view of the Eliyahu Hanavi Synagogue, showing the ornate decoration before the mass emigration of Egypt's Jewish community.", author: "Unknown Photographer", archiveSource: "Cairo Geniza Project", category: "Historical Sites", createdAt: "2025-03-05T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-synagogue/800/600" },
  { id: 13, title: "Manuscript Fragment — Fatimid Period", description: "Digitized fragment of a 12th-century Fatimid-era genealogical manuscript (nasab) tracing a prominent Cairo family back 7 generations.", author: "Egyptian Museum", archiveSource: "Egyptian Museum", category: "Manuscripts", createdAt: "2025-03-10T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-manuscript/800/600" },
  { id: 14, title: "Khalil Family Christmas — Cairo 1963", description: "The Khalil Coptic family celebrating Christmas in their home in Shubra, Cairo. Traditional Coptic decorations and garments.", author: "Khalil Family", archiveSource: "Private Collection", category: "Family Portraits", createdAt: "2025-03-15T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-coptic-family/800/600" },
  { id: 15, title: "Suez Canal Opening Ceremony — 1869", description: "Historical engraving of the Suez Canal inaugural festivities showing Egyptian dignitaries and their families at Port Said.", author: "Illustrated London News", archiveSource: "British Library", category: "Historical Sites", createdAt: "2025-03-20T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-suez-canal/800/600" },
  { id: 16, title: "Ismailia Family Beach Portrait — 1955", description: "Summer portrait of a middle-class Egyptian family on the shores of Lake Timsah, Ismailia, during the pre-revolution golden era.", author: "Studio Orientale", archiveSource: "Private Archive", category: "Family Portraits", createdAt: "2025-03-25T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-beach-family/800/600" },
  { id: 17, title: "Pharaonic Genealogy — Ramesses II Lineage", description: "Reproduction of the royal cartouche lineage inscription from Abu Simbel temple showing Ramesses II's ancestors across 6 generations.", author: "Egyptian Museum", archiveSource: "Abu Simbel Temple Archive", category: "Manuscripts", createdAt: "2025-04-01T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-pharaonic/800/600" },
  { id: 18, title: "Delta Village Families — Kafr El-Sheikh 1965", description: "Documentary photograph of three neighboring farming families from the Nile Delta before modernization of the agricultural system.", author: "Agricultural Survey Agency", archiveSource: "Ministry of Agriculture Archive", category: "Family Portraits", createdAt: "2025-04-05T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-delta-village/800/600" },
  { id: 19, title: "Tax Register Page — Upper Egypt 1830", description: "Handwritten Ottoman fiscal register (daftar miri) for a village in Asyut province listing 67 household heads with their tax obligations.", author: "Ottoman Archives", archiveSource: "Turkish State Archives", category: "Documents", createdAt: "2025-04-10T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-tax-register/800/600" },
  { id: 20, title: "Nile Flood Season — Cairo, Circa 1890", description: "Pre-High Dam photograph showing the annual Nile flood at its peak near Cairo. Several families are seen in boats navigating flooded streets.", author: "G. Lekegian & Co.", archiveSource: "Rare Books Library AUC", category: "Historical Sites", createdAt: "2025-04-15T00:00:00Z", image_path: "https://picsum.photos/seed/gallery-nile-flood/800/600" },
];

// ─────────────────────────────────────────────
// ARTICLES (pre-seeded)
// ─────────────────────────────────────────────
export const MOCK_ARTICLES = [
  {
    id: "art-mock-001",
    title: "Tracing Your Egyptian Roots: A Beginner's Complete Guide",
    body: `Starting your Egyptian genealogy journey can feel overwhelming, but the records are richer than most people expect.\n\n**Start with Civil Registration**\nEgypt established a civil registration system in 1839 under Muhammad Ali. Birth, marriage, and death records from this period are held at Dar Al-Wathaeq Al-Qawmiya (National Archives) in Cairo. Records after 1957 are at the Ministry of Interior.\n\n**Sharia Court Records**\nIslamic court (mahkama shar'iyya) records are invaluable. Marriage contracts, inheritance disputes, and property deeds list not just names but entire family networks. Cairo courts alone hold millions of documents dating to the 16th century.\n\n**Coptic Church Registers**\nFor Christian families, the Coptic Orthodox Church has maintained baptismal and marriage records since the 4th century. Contact the diocese where your family worshipped — many have been digitized.\n\n**The Ottoman Connection**\nFrom 1517 to 1882, Egypt was an Ottoman province. Tax registers (daftar miri), military conscription lists, and land surveys from this period survive in Istanbul's archives as well as in Cairo.\n\n**Start at Home First**\nBefore any archive visit, collect documents at home — ID cards (bitaqa), birth certificates, military service books, passports, and old photographs. Interview the oldest family members and record everything.`,
    authorName: "Dr. Amr Fouad Al-Said",
    authorId: 3,
    roleLabel: "Researcher",
    createdAt: Date.now() - 30 * 24 * 3600 * 1000,
    coverImage: "https://picsum.photos/seed/article-cover-1/800/400",
    categories: ["genealogy", "archives"],
  },
  {
    id: "art-mock-002",
    title: "The Ottoman Influence on Egyptian Family Names",
    body: `Egyptian family names (laqab or nasab) carry centuries of history, and the Ottoman period (1517-1882) left a particularly deep imprint.\n\n**Turkish-Origin Names**\nMany Egyptian families today bear surnames derived from Turkish official titles: Basha (Pasha), Bey, Agha, and Effendi were Ottoman ranks that became hereditary family markers. Families like Al-Turki, Bashawat, and similar surnames trace directly to Ottoman officials who settled in Egypt.\n\n**Geographical Origins**\nPre-modern Egyptians often used their village or province of origin as an identifier. Names like Al-Masry ("The Egyptian"), Al-Saidi ("From Upper Egypt"), Al-Qahiri ("From Cairo"), and Al-Iskandrani ("From Alexandria") persist to this day.\n\n**Occupational Surnames**\nCraft guilds and occupations became surnames: Al-Najjar (carpenter), Al-Haddad (blacksmith), Al-Khayyat (tailor), Al-Tabbakh (cook). The Ottoman guild system solidified these occupational identities.\n\n**The Nasab Tradition**\nThe formal Arabic genealogical chain (nasab) — "Ibn" (son of) chains — was the traditional way of naming. Many rural families maintained 5-7 generation nasab chains for legal and social purposes, often recorded in mosque registers.`,
    authorName: "Kamel Ibrahim Al-Masry",
    authorId: 1,
    roleLabel: "Admin",
    createdAt: Date.now() - 22 * 24 * 3600 * 1000,
    coverImage: "https://picsum.photos/seed/article-cover-2/800/400",
    categories: ["islamic", "genealogy"],
  },
  {
    id: "art-mock-003",
    title: "Nubian Families: Preserving Identity After Displacement",
    body: `The construction of the Aswan High Dam (1960-1968) resulted in the forced relocation of over 100,000 Nubian people from their ancestral lands. This displacement threatened not just homes but the very fabric of family identity.\n\n**What Was Lost**\nNubian villages had maintained family records through a combination of oral traditions (maintained by specialized griots called "fakkis"), community elders, and mosque records. The flooding destroyed physical records but oral memory survived.\n\n**Community Documentation Efforts**\nSince the 1970s, organizations like the Nubian General Union have worked to document displaced family trees. Their archive in Cairo holds over 50,000 family records compiled from oral interviews.\n\n**The Role of Women**\nNubian women were the primary keepers of genealogical knowledge, maintaining "familial maps" — informal oral records connecting extended family networks across dispersed communities.\n\n**Digital Preservation Today**\nModern tools like this platform allow Nubian families to rebuild their trees using oral history recordings, old photographs, and community knowledge. Several complete village genealogies have been reconstructed.\n\nIf your family is from Old Nubia, our platform partners with the Aswan Heritage Center to help you trace your lineage.`,
    authorName: "Layla Hassan Nour",
    authorId: 2,
    roleLabel: "Member",
    createdAt: Date.now() - 15 * 24 * 3600 * 1000,
    coverImage: "https://picsum.photos/seed/article-cover-3/800/400",
    categories: ["nubia", "heritage"],
  },
  {
    id: "art-mock-004",
    title: "How to Read Old Arabic Genealogy Documents",
    body: `Arabic genealogical manuscripts can look intimidating, but with a basic understanding of the script style and common formulas, most researchers can begin extracting useful information.\n\n**The Nasab Formula**\nThe classic nasab chain reads: [Name] ibn [Father] ibn [Grandfather] ibn [Great-grandfather]. For women, "bint" (daughter of) replaces "ibn". This chain tells you the patrilineal lineage directly.\n\n**Common Archival Terms**\n- توفي (tuwaffiya) — "passed away" + death date\n- وُلد (wulida) — "was born" + birth date\n- تزوج (tazawwaja) — "married"\n- ابنة/بنت — daughter of\n- ابن — son of\n- عقد الزواج (aqd al-zawaj) — marriage contract\n- شهود (shuhud) — witnesses\n\n**Ottoman Sijill Documents**\nSharia court sijill records used a standard Ottoman formula. The plaintiff/subject is named first, followed by their nasab chain, their quarter (hara) and city of residence.\n\n**Diacritics Matter**\nOld Arabic manuscripts often omit vowel diacritics (tashkeel), which can make names ambiguous. Cross-reference with known family members to establish pronunciation of uncertain names.`,
    authorName: "Dr. Amr Fouad Al-Said",
    authorId: 3,
    roleLabel: "Researcher",
    createdAt: Date.now() - 10 * 24 * 3600 * 1000,
    coverImage: "https://picsum.photos/seed/article-cover-4/800/400",
    categories: ["archives", "genealogy"],
  },
  {
    id: "art-mock-005",
    title: "Alexandria's Lost Communities: Jewish, Greek & Armenian Heritage",
    body: `For much of the 19th and early 20th centuries, Alexandria was one of the most cosmopolitan cities on earth. Multiple non-Muslim communities maintained their own institutions — and their own genealogical records.\n\n**The Jewish Community**\nAt its peak in the 1940s, Egypt's Jewish population numbered 80,000, largely concentrated in Cairo and Alexandria. The Ben Ezra Synagogue archives and the Cairo Geniza Project have preserved marriage, birth, and death records. After the 1956 Suez Crisis, most families emigrated. Their records are now accessible through the Yad Vashem database and the Cairo Geniza digitization project.\n\n**The Greek Community**\nGreek families (Rum) ran major businesses in Alexandria for generations. The Greek Orthodox Patriarchate of Alexandria holds birth and marriage records dating to the 1700s, available to descendants.\n\n**The Armenian Community**\nArmeni refugees who arrived in Egypt after 1915 built churches and schools that maintained genealogical records. The Armenian Apostolic Church in Cairo preserves these documents.\n\n**Connecting With Diaspora**\nMany families from these communities scattered globally. If your family has Egyptian roots from one of these communities, this platform's networks can help connect you with relatives in Greece, France, Israel, the UK, and the Americas.`,
    authorName: "Kamel Ibrahim Al-Masry",
    authorId: 1,
    roleLabel: "Admin",
    createdAt: Date.now() - 5 * 24 * 3600 * 1000,
    coverImage: "https://picsum.photos/seed/article-cover-5/800/400",
    categories: ["alexandria", "modern"],
  },
  {
    id: "art-mock-006",
    title: "Understanding Egyptian Naming Conventions Across Eras",
    body: `Egyptian naming traditions have evolved across millennia but retain certain consistent patterns that genealogists can use to trace lineage.\n\n**The Classical Arabic System**\nTraditional Egyptian names follow the pattern: Given name + Ibn/Bint + Father's name + Ibn + Grandfather's name. Legal documents required at least three generations of names to identify an individual uniquely.\n\n**The Kunya Tradition**\nEgyptian parents traditionally took "kunya" — honorific names based on their eldest child. A father named Ahmed with a son named Ibrahim would become "Abu Ibrahim" (father of Ibrahim); his wife became "Umm Ibrahim".\n\n**Regional Variations**\n- Upper Egypt: Strong tribal naming patterns, often adding the tribe or village name\n- Delta: More Ottoman/Turkish influence, especially in official families\n- Nubia: Nubian language names mixed with Arabic names; two-name system common\n- Alexandria: Greek, Italian, and French names appear in Coptic and Jewish families\n\n**Modern Change**\nAfter 1952, Egypt introduced the fixed family surname system for civil ID purposes. Many families adopted the grandfather's name as the permanent surname — creating the modern 3-part name: First, Father's, Family name.`,
    authorName: "Layla Hassan Nour",
    authorId: 2,
    roleLabel: "Member",
    createdAt: Date.now() - 2 * 24 * 3600 * 1000,
    coverImage: "https://picsum.photos/seed/article-cover-6/800/400",
    categories: ["genealogy", "pharaonic"],
  },
];

export const MOCK_ARTICLE_COMMENTS = [
  { id: "cmt-001", articleId: "art-mock-001", authorName: "Layla Hassan Nour", authorId: 2, body: "This is exactly what I needed! I've been trying to find my great-grandfather's records from Minieh and had no idea where to start. Thank you!", createdAt: Date.now() - 28 * 24 * 3600 * 1000, parentId: null },
  { id: "cmt-002", articleId: "art-mock-001", authorName: "Dr. Amr Fouad Al-Said", authorId: 3, body: "Great question if you want to follow up — the Dar Al-Wathaeq has a reading room in Cairo that's open to the public on weekdays. You'll need your national ID.", createdAt: Date.now() - 27 * 24 * 3600 * 1000, parentId: null },
  { id: "cmt-003", articleId: "art-mock-001", authorName: "Mariam Adel", authorId: null, body: "Do they have records online? My family is in Australia and I can't travel easily.", createdAt: Date.now() - 26 * 24 * 3600 * 1000, parentId: null },
  { id: "cmt-004", articleId: "art-mock-002", authorName: "Youssef Al-Nubi", authorId: null, body: "Fascinating article. My family name 'Al-Masri' literally just means 'the Egyptian' — never thought about how that became a surname!", createdAt: Date.now() - 20 * 24 * 3600 * 1000, parentId: null },
  { id: "cmt-005", articleId: "art-mock-003", authorName: "Hana Idris", authorId: null, body: "As a Nubian Egyptian myself, this article means a lot. My grandmother could recite our family tree going back 10 generations purely from memory. That knowledge is priceless.", createdAt: Date.now() - 12 * 24 * 3600 * 1000, parentId: null },
  { id: "cmt-006", articleId: "art-mock-003", authorName: "Kamel Ibrahim Al-Masry", authorId: 1, body: "Thank you for sharing, Hana. If your grandmother is willing to be recorded, our audio oral history feature would be perfect for preserving her knowledge.", createdAt: Date.now() - 11 * 24 * 3600 * 1000, parentId: "cmt-005" },
];

export const MOCK_ARTICLE_LIKE_COUNTS = {
  "art-mock-001": 47,
  "art-mock-002": 31,
  "art-mock-003": 63,
  "art-mock-004": 28,
  "art-mock-005": 44,
  "art-mock-006": 19,
};

export const MOCK_ARTICLE_SHARE_COUNTS = {
  "art-mock-001": 12,
  "art-mock-002": 8,
  "art-mock-003": 22,
  "art-mock-004": 6,
  "art-mock-005": 15,
  "art-mock-006": 4,
};

// ─────────────────────────────────────────────
// ADMIN STATS
// ─────────────────────────────────────────────
export const MOCK_STATS = {
  users: 1247,
  books: 89,
  trees: 342,
  people: 4891,
  gallery: 1456,
  articles: 203,
};

// ─────────────────────────────────────────────
// ACTIVITY LOG
// ─────────────────────────────────────────────
export const MOCK_ACTIVITY = [
  { id: 1, action: "User registered", user: "mariam.adel@gmail.com", timestamp: new Date(Date.now() - 2 * 3600 * 1000).toISOString(), type: "user" },
  { id: 2, action: "Family tree uploaded", user: "youssef.nubi@hotmail.com", timestamp: new Date(Date.now() - 5 * 3600 * 1000).toISOString(), type: "tree" },
  { id: 3, action: "Book downloaded: Ottoman Tax Registers", user: "researcher@rootsegypt.com", timestamp: new Date(Date.now() - 8 * 3600 * 1000).toISOString(), type: "book" },
  { id: 4, action: "Gallery image uploaded", user: "layla.hassan@example.com", timestamp: new Date(Date.now() - 12 * 3600 * 1000).toISOString(), type: "gallery" },
  { id: 5, action: "Article published", user: "admin@rootsegypt.com", timestamp: new Date(Date.now() - 18 * 3600 * 1000).toISOString(), type: "article" },
  { id: 6, action: "User registered", user: "ibrahim.khalil@outlook.com", timestamp: new Date(Date.now() - 24 * 3600 * 1000).toISOString(), type: "user" },
  { id: 7, action: "Family tree uploaded", user: "amr.said@research.eg", timestamp: new Date(Date.now() - 30 * 3600 * 1000).toISOString(), type: "tree" },
  { id: 8, action: "Book downloaded: Coptic Diocese Registry", user: "mariam.adel@gmail.com", timestamp: new Date(Date.now() - 36 * 3600 * 1000).toISOString(), type: "book" },
];

// ─────────────────────────────────────────────
// ADMIN USERS LIST
// ─────────────────────────────────────────────
export const MOCK_USERS_LIST = [
  { id: 1, email: "admin@rootsegypt.com", fullName: "Kamel Ibrahim Al-Masry", role: 1, roleName: "Admin", status: "active", createdAt: "2024-01-01T00:00:00Z" },
  { id: 2, email: "demo@rootsegypt.com", fullName: "Layla Hassan Nour", role: 2, roleName: "Member", status: "active", createdAt: "2024-03-15T00:00:00Z" },
  { id: 3, email: "researcher@rootsegypt.com", fullName: "Dr. Amr Fouad Al-Said", role: 2, roleName: "Researcher", status: "active", createdAt: "2024-04-20T00:00:00Z" },
  { id: 4, email: "mariam.adel@gmail.com", fullName: "Mariam Adel", role: 2, roleName: "Member", status: "active", createdAt: "2024-06-10T00:00:00Z" },
  { id: 5, email: "youssef.nubi@hotmail.com", fullName: "Youssef Al-Nubi", role: 2, roleName: "Member", status: "active", createdAt: "2024-07-05T00:00:00Z" },
  { id: 6, email: "ibrahim.khalil@outlook.com", fullName: "Ibrahim Khalil Aziz", role: 2, roleName: "Member", status: "pending", createdAt: "2025-04-01T00:00:00Z" },
  { id: 7, email: "hana.idris@nubia.eg", fullName: "Hana Idris Mohamed", role: 2, roleName: "Member", status: "active", createdAt: "2024-09-22T00:00:00Z" },
  { id: 8, email: "george.khalil@example.com", fullName: "George Khalil Boulos", role: 2, roleName: "Member", status: "active", createdAt: "2024-11-18T00:00:00Z" },
];

// ─────────────────────────────────────────────
// NOTIFICATIONS
// ─────────────────────────────────────────────
export const MOCK_NOTIFICATIONS = [
  { id: 1, title: "New family tree shared", message: "Youssef Al-Nubi shared the 'Idris Nubian Heritage' tree with you.", read: false, createdAt: new Date(Date.now() - 3600 * 1000).toISOString() },
  { id: 2, title: "New comment on your article", message: "Layla Hassan commented on 'Tracing Your Egyptian Roots'.", read: false, createdAt: new Date(Date.now() - 7200 * 1000).toISOString() },
  { id: 3, title: "New book available", message: "Muhammad Ali Dynasty genealogy book has been added to the library.", read: true, createdAt: new Date(Date.now() - 86400 * 1000).toISOString() },
];
