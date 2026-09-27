// Tim's Geoguesser - Country Data
// 193 UN Member States with metadata

const COUNTRY_DATA = {
    // All countries with their metadata
    countries: {
        // North/Central America
        "USA": { name: "United States", exactName: "United States of America", aliases: ["USA", "US", "America", "United States of America"], pronunciation: "United States of America", populationRank: 3, areaRank: 4 },
        "CAN": { name: "Canada", exactName: "Canada", aliases: ["Canada"], pronunciation: "Canada", populationRank: 38, areaRank: 2 },
        "MEX": { name: "Mexico", exactName: "Mexico", aliases: ["Mexico"], pronunciation: "Mexico", populationRank: 10, areaRank: 13 },

        // Central America
        "GTM": { name: "Guatemala", exactName: "Guatemala", aliases: ["Guatemala"], pronunciation: "Guatemala", populationRank: 67, areaRank: 106 },
        "BLZ": { name: "Belize", exactName: "Belize", aliases: ["Belize"], pronunciation: "Belize", populationRank: 176, areaRank: 150 },
        "SLV": { name: "El Salvador", exactName: "El Salvador", aliases: ["El Salvador", "Salvador"], pronunciation: "El Salvador", populationRank: 111, areaRank: 152 },
        "HND": { name: "Honduras", exactName: "Honduras", aliases: ["Honduras"], pronunciation: "Honduras", populationRank: 93, areaRank: 101 },
        "NIC": { name: "Nicaragua", exactName: "Nicaragua", aliases: ["Nicaragua"], pronunciation: "Nicaragua", populationRank: 113, areaRank: 96 },
        "CRI": { name: "Costa Rica", exactName: "Costa Rica", aliases: ["Costa Rica"], pronunciation: "Costa Rica", populationRank: 122, areaRank: 125 },
        "PAN": { name: "Panama", exactName: "Panama", aliases: ["Panama"], pronunciation: "Panama", populationRank: 128, areaRank: 116 },

        // Caribbean
        "CUB": { name: "Cuba", exactName: "Cuba", aliases: ["Cuba"], pronunciation: "Cuba", populationRank: 83, areaRank: 104 },
        "JAM": { name: "Jamaica", exactName: "Jamaica", aliases: ["Jamaica"], pronunciation: "Jamaica", populationRank: 140, areaRank: 160 },
        "HTI": { name: "Haiti", exactName: "Haiti", aliases: ["Haiti"], pronunciation: "Haiti", populationRank: 82, areaRank: 143 },
        "DOM": { name: "Dominican Republic", exactName: "Dominican Republic", aliases: ["Dominican Republic", "DR"], pronunciation: "Dominican Republic", populationRank: 84, areaRank: 128 },
        "TTO": { name: "Trinidad and Tobago", exactName: "Trinidad and Tobago", aliases: ["Trinidad and Tobago", "Trinidad", "TT"], pronunciation: "Trinidad and Tobago", populationRank: 153, areaRank: 164 },
        "BHS": { name: "Bahamas", exactName: "Bahamas", aliases: ["Bahamas", "The Bahamas"], pronunciation: "Bahamas", populationRank: 177, areaRank: 155 },
        "BRB": { name: "Barbados", exactName: "Barbados", aliases: ["Barbados"], pronunciation: "Barbados", populationRank: 182, areaRank: 183 },
        "LCA": { name: "Saint Lucia", exactName: "Saint Lucia", aliases: ["Saint Lucia", "St Lucia", "St. Lucia"], pronunciation: "Saint Lucia", populationRank: 185, areaRank: 176 },
        "GRD": { name: "Grenada", exactName: "Grenada", aliases: ["Grenada"], pronunciation: "Grenada", populationRank: 188, areaRank: 185 },
        "VCT": { name: "Saint Vincent and the Grenadines", exactName: "Saint Vincent and the Grenadines", aliases: ["Saint Vincent", "St Vincent", "St. Vincent and the Grenadines"], pronunciation: "Saint Vincent and the Grenadines", populationRank: 189, areaRank: 184 },
        "ATG": { name: "Antigua and Barbuda", exactName: "Antigua and Barbuda", aliases: ["Antigua and Barbuda", "Antigua"], pronunciation: "Antigua and Barbuda", populationRank: 190, areaRank: 182 },
        "DMA": { name: "Dominica", exactName: "Dominica", aliases: ["Dominica"], pronunciation: "Dominica", populationRank: 191, areaRank: 172 },
        "KNA": { name: "Saint Kitts and Nevis", exactName: "Saint Kitts and Nevis", aliases: ["Saint Kitts and Nevis", "St Kitts", "St. Kitts and Nevis"], pronunciation: "Saint Kitts and Nevis", populationRank: 192, areaRank: 189 },

        // South America
        "BRA": { name: "Brazil", exactName: "Brazil", aliases: ["Brazil", "Brasil"], pronunciation: "Brazil", populationRank: 7, areaRank: 5 },
        "ARG": { name: "Argentina", exactName: "Argentina", aliases: ["Argentina"], pronunciation: "Argentina", populationRank: 32, areaRank: 8 },
        "COL": { name: "Colombia", exactName: "Colombia", aliases: ["Colombia"], pronunciation: "Colombia", populationRank: 28, areaRank: 25 },
        "PER": { name: "Peru", exactName: "Peru", aliases: ["Peru"], pronunciation: "Peru", populationRank: 43, areaRank: 19 },
        "VEN": { name: "Venezuela", exactName: "Venezuela", aliases: ["Venezuela"], pronunciation: "Venezuela", populationRank: 51, areaRank: 32 },
        "CHL": { name: "Chile", exactName: "Chile", aliases: ["Chile"], pronunciation: "Chile", populationRank: 64, areaRank: 37 },
        "ECU": { name: "Ecuador", exactName: "Ecuador", aliases: ["Ecuador"], pronunciation: "Ecuador", populationRank: 68, areaRank: 73 },
        "BOL": { name: "Bolivia", exactName: "Bolivia", aliases: ["Bolivia"], pronunciation: "Bolivia", populationRank: 80, areaRank: 27 },
        "PRY": { name: "Paraguay", exactName: "Paraguay", aliases: ["Paraguay"], pronunciation: "Paraguay", populationRank: 107, areaRank: 58 },
        "URY": { name: "Uruguay", exactName: "Uruguay", aliases: ["Uruguay"], pronunciation: "Uruguay", populationRank: 134, areaRank: 89 },
        "GUY": { name: "Guyana", exactName: "Guyana", aliases: ["Guyana"], pronunciation: "Guyana", populationRank: 165, areaRank: 83 },
        "SUR": { name: "Suriname", exactName: "Suriname", aliases: ["Suriname"], pronunciation: "Suriname", populationRank: 171, areaRank: 90 },

        // Europe - Northern
        "GBR": { name: "United Kingdom", exactName: "United Kingdom", aliases: ["United Kingdom", "UK", "Britain", "Great Britain", "England"], pronunciation: "United Kingdom", populationRank: 21, areaRank: 78 },
        "IRL": { name: "Ireland", exactName: "Ireland", aliases: ["Ireland"], pronunciation: "Ireland", populationRank: 125, areaRank: 118 },
        "ISL": { name: "Iceland", exactName: "Iceland", aliases: ["Iceland"], pronunciation: "Iceland", populationRank: 180, areaRank: 105 },
        "NOR": { name: "Norway", exactName: "Norway", aliases: ["Norway"], pronunciation: "Norway", populationRank: 117, areaRank: 67 },
        "SWE": { name: "Sweden", exactName: "Sweden", aliases: ["Sweden"], pronunciation: "Sweden", populationRank: 89, areaRank: 55 },
        "FIN": { name: "Finland", exactName: "Finland", aliases: ["Finland"], pronunciation: "Finland", populationRank: 116, areaRank: 64 },
        "DNK": { name: "Denmark", exactName: "Denmark", aliases: ["Denmark"], pronunciation: "Denmark", populationRank: 114, areaRank: 130 },
        "EST": { name: "Estonia", exactName: "Estonia", aliases: ["Estonia"], pronunciation: "Estonia", populationRank: 157, areaRank: 129 },
        "LVA": { name: "Latvia", exactName: "Latvia", aliases: ["Latvia"], pronunciation: "Latvia", populationRank: 152, areaRank: 122 },
        "LTU": { name: "Lithuania", exactName: "Lithuania", aliases: ["Lithuania"], pronunciation: "Lithuania", populationRank: 141, areaRank: 121 },

        // Europe - Southern
        "ESP": { name: "Spain", exactName: "Spain", aliases: ["Spain"], pronunciation: "Spain", populationRank: 30, areaRank: 51 },
        "PRT": { name: "Portugal", exactName: "Portugal", aliases: ["Portugal"], pronunciation: "Portugal", populationRank: 90, areaRank: 109 },
        "ITA": { name: "Italy", exactName: "Italy", aliases: ["Italy"], pronunciation: "Italy", populationRank: 23, areaRank: 71 },
        "GRC": { name: "Greece", exactName: "Greece", aliases: ["Greece"], pronunciation: "Greece", populationRank: 87, areaRank: 95 },
        "MLT": { name: "Malta", exactName: "Malta", aliases: ["Malta"], pronunciation: "Malta", populationRank: 174, areaRank: 186 },
        "CYP": { name: "Cyprus", exactName: "Cyprus", aliases: ["Cyprus"], pronunciation: "Cyprus", populationRank: 159, areaRank: 162 },
        "SVN": { name: "Slovenia", exactName: "Slovenia", aliases: ["Slovenia"], pronunciation: "Slovenia", populationRank: 148, areaRank: 150 },
        "HRV": { name: "Croatia", exactName: "Croatia", aliases: ["Croatia"], pronunciation: "Croatia", populationRank: 131, areaRank: 124 },
        "BIH": { name: "Bosnia and Herzegovina", exactName: "Bosnia and Herzegovina", aliases: ["Bosnia and Herzegovina", "Bosnia"], pronunciation: "Bosnia and Herzegovina", populationRank: 135, areaRank: 126 },
        "SRB": { name: "Serbia", exactName: "Serbia", aliases: ["Serbia"], pronunciation: "Serbia", populationRank: 106, areaRank: 111 },
        "MNE": { name: "Montenegro", exactName: "Montenegro", aliases: ["Montenegro"], pronunciation: "Montenegro", populationRank: 166, areaRank: 156 },
        "ALB": { name: "Albania", exactName: "Albania", aliases: ["Albania"], pronunciation: "Albania", populationRank: 142, areaRank: 140 },
        "MKD": { name: "North Macedonia", exactName: "North Macedonia", aliases: ["North Macedonia", "Macedonia"], pronunciation: "North Macedonia", populationRank: 149, areaRank: 148 },
        "AND": { name: "Andorra", exactName: "Andorra", aliases: ["Andorra"], pronunciation: "Andorra", populationRank: 193, areaRank: 178 },
        "SMR": { name: "San Marino", exactName: "San Marino", aliases: ["San Marino"], pronunciation: "San Marino", populationRank: 194, areaRank: 190 },
        "VAT": { name: "Vatican City", exactName: "Vatican City", aliases: ["Vatican City", "Vatican", "Holy See"], pronunciation: "Vatican City", populationRank: 195, areaRank: 193 },
        "MCO": { name: "Monaco", exactName: "Monaco", aliases: ["Monaco"], pronunciation: "Monaco", populationRank: 196, areaRank: 192 },

        // Europe - Eastern
        "RUS": { name: "Russia", exactName: "Russia", aliases: ["Russia", "Russian Federation"], pronunciation: "Russia", populationRank: 9, areaRank: 1 },
        "UKR": { name: "Ukraine", exactName: "Ukraine", aliases: ["Ukraine"], pronunciation: "Ukraine", populationRank: 36, areaRank: 44 },
        "POL": { name: "Poland", exactName: "Poland", aliases: ["Poland"], pronunciation: "Poland", populationRank: 37, areaRank: 69 },
        "ROU": { name: "Romania", exactName: "Romania", aliases: ["Romania"], pronunciation: "Romania", populationRank: 61, areaRank: 81 },
        "CZE": { name: "Czech Republic", exactName: "Czech Republic", aliases: ["Czech Republic", "Czechia"], pronunciation: "Czech Republic", populationRank: 86, areaRank: 115 },
        "HUN": { name: "Hungary", exactName: "Hungary", aliases: ["Hungary"], pronunciation: "Hungary", populationRank: 94, areaRank: 108 },
        "BGR": { name: "Bulgaria", exactName: "Bulgaria", aliases: ["Bulgaria"], pronunciation: "Bulgaria", populationRank: 108, areaRank: 103 },
        "SVK": { name: "Slovakia", exactName: "Slovakia", aliases: ["Slovakia"], pronunciation: "Slovakia", populationRank: 118, areaRank: 127 },
        "BLR": { name: "Belarus", exactName: "Belarus", aliases: ["Belarus"], pronunciation: "Belarus", populationRank: 96, areaRank: 84 },
        "MDA": { name: "Moldova", exactName: "Moldova", aliases: ["Moldova"], pronunciation: "Moldova", populationRank: 133, areaRank: 135 },

        // Europe - Western
        "DEU": { name: "Germany", exactName: "Germany", aliases: ["Germany"], pronunciation: "Germany", populationRank: 19, areaRank: 62 },
        "FRA": { name: "France", exactName: "France", aliases: ["France"], pronunciation: "France", populationRank: 22, areaRank: 42 },
        "NLD": { name: "Netherlands", exactName: "Netherlands", aliases: ["Netherlands", "Holland"], pronunciation: "Netherlands", populationRank: 69, areaRank: 131 },
        "BEL": { name: "Belgium", exactName: "Belgium", aliases: ["Belgium"], pronunciation: "Belgium", populationRank: 79, areaRank: 136 },
        "AUT": { name: "Austria", exactName: "Austria", aliases: ["Austria"], pronunciation: "Austria", populationRank: 98, areaRank: 112 },
        "CHE": { name: "Switzerland", exactName: "Switzerland", aliases: ["Switzerland"], pronunciation: "Switzerland", populationRank: 99, areaRank: 132 },
        "LUX": { name: "Luxembourg", exactName: "Luxembourg", aliases: ["Luxembourg"], pronunciation: "Luxembourg", populationRank: 168, areaRank: 167 },
        "LIE": { name: "Liechtenstein", exactName: "Liechtenstein", aliases: ["Liechtenstein"], pronunciation: "Liechtenstein", populationRank: 197, areaRank: 191 },

        // Africa - Northern
        "EGY": { name: "Egypt", exactName: "Egypt", aliases: ["Egypt"], pronunciation: "Egypt", populationRank: 14, areaRank: 29 },
        "DZA": { name: "Algeria", exactName: "Algeria", aliases: ["Algeria"], pronunciation: "Algeria", populationRank: 33, areaRank: 10 },
        "MAR": { name: "Morocco", exactName: "Morocco", aliases: ["Morocco"], pronunciation: "Morocco", populationRank: 40, areaRank: 57 },
        "TUN": { name: "Tunisia", exactName: "Tunisia", aliases: ["Tunisia"], pronunciation: "Tunisia", populationRank: 78, areaRank: 91 },
        "LBY": { name: "Libya", exactName: "Libya", aliases: ["Libya"], pronunciation: "Libya", populationRank: 109, areaRank: 16 },
        "SDN": { name: "Sudan", exactName: "Sudan", aliases: ["Sudan"], pronunciation: "Sudan", populationRank: 35, areaRank: 15 },
        "MRT": { name: "Mauritania", exactName: "Mauritania", aliases: ["Mauritania"], pronunciation: "Mauritania", populationRank: 127, areaRank: 28 },

        // Africa - Western
        "NGA": { name: "Nigeria", exactName: "Nigeria", aliases: ["Nigeria"], pronunciation: "Nigeria", populationRank: 6, areaRank: 31 },
        "GHA": { name: "Ghana", exactName: "Ghana", aliases: ["Ghana"], pronunciation: "Ghana", populationRank: 47, areaRank: 80 },
        "CIV": { name: "Ivory Coast", exactName: "Ivory Coast", aliases: ["Ivory Coast", "Cote d'Ivoire", "Cote dIvoire"], pronunciation: "Ivory Coast", populationRank: 53, areaRank: 68 },
        "NER": { name: "Niger", exactName: "Niger", aliases: ["Niger"], pronunciation: "Niger", populationRank: 55, areaRank: 21 },
        "BFA": { name: "Burkina Faso", exactName: "Burkina Faso", aliases: ["Burkina Faso", "Burkina"], pronunciation: "Burkina Faso", populationRank: 58, areaRank: 72 },
        "MLI": { name: "Mali", exactName: "Mali", aliases: ["Mali"], pronunciation: "Mali", populationRank: 59, areaRank: 23 },
        "SEN": { name: "Senegal", exactName: "Senegal", aliases: ["Senegal"], pronunciation: "Senegal", populationRank: 71, areaRank: 86 },
        "GIN": { name: "Guinea", exactName: "Guinea", aliases: ["Guinea"], pronunciation: "Guinea", populationRank: 76, areaRank: 77 },
        "BEN": { name: "Benin", exactName: "Benin", aliases: ["Benin"], pronunciation: "Benin", populationRank: 77, areaRank: 100 },
        "TGO": { name: "Togo", exactName: "Togo", aliases: ["Togo"], pronunciation: "Togo", populationRank: 101, areaRank: 123 },
        "SLE": { name: "Sierra Leone", exactName: "Sierra Leone", aliases: ["Sierra Leone"], pronunciation: "Sierra Leone", populationRank: 102, areaRank: 117 },
        "LBR": { name: "Liberia", exactName: "Liberia", aliases: ["Liberia"], pronunciation: "Liberia", populationRank: 121, areaRank: 102 },
        "GMB": { name: "Gambia", exactName: "Gambia", aliases: ["Gambia", "The Gambia"], pronunciation: "Gambia", populationRank: 143, areaRank: 159 },
        "GNB": { name: "Guinea-Bissau", exactName: "Guinea-Bissau", aliases: ["Guinea-Bissau", "Guinea Bissau"], pronunciation: "Guinea-Bissau", populationRank: 150, areaRank: 134 },
        "CPV": { name: "Cabo Verde", exactName: "Cabo Verde", aliases: ["Cabo Verde", "Cape Verde"], pronunciation: "Cabo Verde", populationRank: 172, areaRank: 166 },

        // Africa - Central
        "COD": { name: "Democratic Republic of the Congo", exactName: "Democratic Republic of the Congo", aliases: ["DRC", "DR Congo", "Democratic Republic of Congo", "Congo-Kinshasa"], pronunciation: "Democratic Republic of the Congo", populationRank: 16, areaRank: 11 },
        "AGO": { name: "Angola", exactName: "Angola", aliases: ["Angola"], pronunciation: "Angola", populationRank: 45, areaRank: 22 },
        "CMR": { name: "Cameroon", exactName: "Cameroon", aliases: ["Cameroon"], pronunciation: "Cameroon", populationRank: 52, areaRank: 53 },
        "TCD": { name: "Chad", exactName: "Chad", aliases: ["Chad"], pronunciation: "Chad", populationRank: 70, areaRank: 20 },
        "COG": { name: "Republic of the Congo", exactName: "Republic of the Congo", aliases: ["Republic of Congo", "Congo", "Congo-Brazzaville"], pronunciation: "Republic of the Congo", populationRank: 124, areaRank: 63 },
        "CAF": { name: "Central African Republic", exactName: "Central African Republic", aliases: ["Central African Republic", "CAR"], pronunciation: "Central African Republic", populationRank: 119, areaRank: 43 },
        "GAB": { name: "Gabon", exactName: "Gabon", aliases: ["Gabon"], pronunciation: "Gabon", populationRank: 145, areaRank: 75 },
        "GNQ": { name: "Equatorial Guinea", exactName: "Equatorial Guinea", aliases: ["Equatorial Guinea"], pronunciation: "Equatorial Guinea", populationRank: 154, areaRank: 141 },
        "STP": { name: "Sao Tome and Principe", exactName: "Sao Tome and Principe", aliases: ["Sao Tome and Principe", "Sao Tome"], pronunciation: "Sao Tome and Principe", populationRank: 186, areaRank: 171 },

        // Africa - Eastern
        "ETH": { name: "Ethiopia", exactName: "Ethiopia", aliases: ["Ethiopia"], pronunciation: "Ethiopia", populationRank: 12, areaRank: 26 },
        "TZA": { name: "Tanzania", exactName: "Tanzania", aliases: ["Tanzania"], pronunciation: "Tanzania", populationRank: 24, areaRank: 30 },
        "KEN": { name: "Kenya", exactName: "Kenya", aliases: ["Kenya"], pronunciation: "Kenya", populationRank: 27, areaRank: 48 },
        "UGA": { name: "Uganda", exactName: "Uganda", aliases: ["Uganda"], pronunciation: "Uganda", populationRank: 31, areaRank: 79 },
        "MOZ": { name: "Mozambique", exactName: "Mozambique", aliases: ["Mozambique"], pronunciation: "Mozambique", populationRank: 46, areaRank: 35 },
        "MDG": { name: "Madagascar", exactName: "Madagascar", aliases: ["Madagascar"], pronunciation: "Madagascar", populationRank: 50, areaRank: 46 },
        "MWI": { name: "Malawi", exactName: "Malawi", aliases: ["Malawi"], pronunciation: "Malawi", populationRank: 62, areaRank: 98 },
        "ZMB": { name: "Zambia", exactName: "Zambia", aliases: ["Zambia"], pronunciation: "Zambia", populationRank: 63, areaRank: 38 },
        "ZWE": { name: "Zimbabwe", exactName: "Zimbabwe", aliases: ["Zimbabwe"], pronunciation: "Zimbabwe", populationRank: 73, areaRank: 59 },
        "SOM": { name: "Somalia", exactName: "Somalia", aliases: ["Somalia"], pronunciation: "Somalia", populationRank: 72, areaRank: 42 },
        "RWA": { name: "Rwanda", exactName: "Rwanda", aliases: ["Rwanda"], pronunciation: "Rwanda", populationRank: 75, areaRank: 144 },
        "BDI": { name: "Burundi", exactName: "Burundi", aliases: ["Burundi"], pronunciation: "Burundi", populationRank: 74, areaRank: 142 },
        "SSD": { name: "South Sudan", exactName: "South Sudan", aliases: ["South Sudan"], pronunciation: "South Sudan", populationRank: 92, areaRank: 41 },
        "ERI": { name: "Eritrea", exactName: "Eritrea", aliases: ["Eritrea"], pronunciation: "Eritrea", populationRank: 130, areaRank: 99 },
        "MUS": { name: "Mauritius", exactName: "Mauritius", aliases: ["Mauritius"], pronunciation: "Mauritius", populationRank: 158, areaRank: 169 },
        "DJI": { name: "Djibouti", exactName: "Djibouti", aliases: ["Djibouti"], pronunciation: "Djibouti", populationRank: 160, areaRank: 147 },
        "COM": { name: "Comoros", exactName: "Comoros", aliases: ["Comoros"], pronunciation: "Comoros", populationRank: 167, areaRank: 170 },
        "SYC": { name: "Seychelles", exactName: "Seychelles", aliases: ["Seychelles"], pronunciation: "Seychelles", populationRank: 187, areaRank: 181 },

        // Africa - Southern
        "ZAF": { name: "South Africa", exactName: "South Africa", aliases: ["South Africa"], pronunciation: "South Africa", populationRank: 25, areaRank: 24 },
        "NAM": { name: "Namibia", exactName: "Namibia", aliases: ["Namibia"], pronunciation: "Namibia", populationRank: 144, areaRank: 33 },
        "BWA": { name: "Botswana", exactName: "Botswana", aliases: ["Botswana"], pronunciation: "Botswana", populationRank: 146, areaRank: 45 },
        "LSO": { name: "Lesotho", exactName: "Lesotho", aliases: ["Lesotho"], pronunciation: "Lesotho", populationRank: 147, areaRank: 137 },
        "SWZ": { name: "Eswatini", exactName: "Eswatini", aliases: ["Eswatini", "Swaziland"], pronunciation: "Eswatini", populationRank: 156, areaRank: 154 },

        // Asia - South
        "IND": { name: "India", exactName: "India", aliases: ["India"], pronunciation: "India", populationRank: 1, areaRank: 7 },
        "PAK": { name: "Pakistan", exactName: "Pakistan", aliases: ["Pakistan"], pronunciation: "Pakistan", populationRank: 5, areaRank: 33 },
        "BGD": { name: "Bangladesh", exactName: "Bangladesh", aliases: ["Bangladesh"], pronunciation: "Bangladesh", populationRank: 8, areaRank: 92 },
        "NPL": { name: "Nepal", exactName: "Nepal", aliases: ["Nepal"], pronunciation: "Nepal", populationRank: 48, areaRank: 93 },
        "LKA": { name: "Sri Lanka", exactName: "Sri Lanka", aliases: ["Sri Lanka"], pronunciation: "Sri Lanka", populationRank: 57, areaRank: 120 },
        "AFG": { name: "Afghanistan", exactName: "Afghanistan", aliases: ["Afghanistan"], pronunciation: "Afghanistan", populationRank: 41, areaRank: 40 },
        "BTN": { name: "Bhutan", exactName: "Bhutan", aliases: ["Bhutan"], pronunciation: "Bhutan", populationRank: 164, areaRank: 133 },
        "MDV": { name: "Maldives", exactName: "Maldives", aliases: ["Maldives"], pronunciation: "Maldives", populationRank: 175, areaRank: 187 },

        // Asia - Southeast
        "IDN": { name: "Indonesia", exactName: "Indonesia", aliases: ["Indonesia"], pronunciation: "Indonesia", populationRank: 4, areaRank: 14 },
        "PHL": { name: "Philippines", exactName: "Philippines", aliases: ["Philippines"], pronunciation: "Philippines", populationRank: 13, areaRank: 72 },
        "VNM": { name: "Vietnam", exactName: "Vietnam", aliases: ["Vietnam", "Viet Nam"], pronunciation: "Vietnam", populationRank: 15, areaRank: 65 },
        "THA": { name: "Thailand", exactName: "Thailand", aliases: ["Thailand"], pronunciation: "Thailand", populationRank: 20, areaRank: 50 },
        "MMR": { name: "Myanmar", exactName: "Myanmar", aliases: ["Myanmar", "Burma"], pronunciation: "Myanmar", populationRank: 26, areaRank: 39 },
        "MYS": { name: "Malaysia", exactName: "Malaysia", aliases: ["Malaysia"], pronunciation: "Malaysia", populationRank: 44, areaRank: 66 },
        "KHM": { name: "Cambodia", exactName: "Cambodia", aliases: ["Cambodia"], pronunciation: "Cambodia", populationRank: 71, areaRank: 88 },
        "LAO": { name: "Laos", exactName: "Laos", aliases: ["Laos"], pronunciation: "Laos", populationRank: 104, areaRank: 82 },
        "SGP": { name: "Singapore", exactName: "Singapore", aliases: ["Singapore"], pronunciation: "Singapore", populationRank: 115, areaRank: 175 },
        "TLS": { name: "Timor-Leste", exactName: "Timor-Leste", aliases: ["Timor-Leste", "East Timor", "Timor Leste"], pronunciation: "Timor-Leste", populationRank: 155, areaRank: 157 },
        "BRN": { name: "Brunei", exactName: "Brunei", aliases: ["Brunei", "Brunei Darussalam"], pronunciation: "Brunei", populationRank: 173, areaRank: 163 },

        // Asia - East
        "CHN": { name: "China", exactName: "China", aliases: ["China", "PRC"], pronunciation: "China", populationRank: 2, areaRank: 3 },
        "JPN": { name: "Japan", exactName: "Japan", aliases: ["Japan"], pronunciation: "Japan", populationRank: 11, areaRank: 61 },
        "KOR": { name: "South Korea", exactName: "South Korea", aliases: ["South Korea", "Korea", "Republic of Korea"], pronunciation: "South Korea", populationRank: 29, areaRank: 107 },
        "PRK": { name: "North Korea", exactName: "North Korea", aliases: ["North Korea", "DPRK"], pronunciation: "North Korea", populationRank: 54, areaRank: 97 },
        "MNG": { name: "Mongolia", exactName: "Mongolia", aliases: ["Mongolia"], pronunciation: "Mongolia", populationRank: 136, areaRank: 18 },

        // Asia - Central
        "KAZ": { name: "Kazakhstan", exactName: "Kazakhstan", aliases: ["Kazakhstan"], pronunciation: "Kazakhstan", populationRank: 65, areaRank: 9 },
        "UZB": { name: "Uzbekistan", exactName: "Uzbekistan", aliases: ["Uzbekistan"], pronunciation: "Uzbekistan", populationRank: 42, areaRank: 56 },
        "TKM": { name: "Turkmenistan", exactName: "Turkmenistan", aliases: ["Turkmenistan"], pronunciation: "Turkmenistan", populationRank: 112, areaRank: 52 },
        "TJK": { name: "Tajikistan", exactName: "Tajikistan", aliases: ["Tajikistan"], pronunciation: "Tajikistan", populationRank: 95, areaRank: 94 },
        "KGZ": { name: "Kyrgyzstan", exactName: "Kyrgyzstan", aliases: ["Kyrgyzstan"], pronunciation: "Kyrgyzstan", populationRank: 110, areaRank: 85 },

        // Asia - Middle East / Western Asia
        "TUR": { name: "Turkey", exactName: "Turkey", aliases: ["Turkey", "Turkiye"], pronunciation: "Turkey", populationRank: 17, areaRank: 36 },
        "IRN": { name: "Iran", exactName: "Iran", aliases: ["Iran"], pronunciation: "Iran", populationRank: 18, areaRank: 17 },
        "IRQ": { name: "Iraq", exactName: "Iraq", aliases: ["Iraq"], pronunciation: "Iraq", populationRank: 34, areaRank: 54 },
        "SAU": { name: "Saudi Arabia", exactName: "Saudi Arabia", aliases: ["Saudi Arabia", "Saudi"], pronunciation: "Saudi Arabia", populationRank: 39, areaRank: 12 },
        "YEM": { name: "Yemen", exactName: "Yemen", aliases: ["Yemen"], pronunciation: "Yemen", populationRank: 49, areaRank: 49 },
        "SYR": { name: "Syria", exactName: "Syria", aliases: ["Syria"], pronunciation: "Syria", populationRank: 56, areaRank: 87 },
        "JOR": { name: "Jordan", exactName: "Jordan", aliases: ["Jordan"], pronunciation: "Jordan", populationRank: 85, areaRank: 110 },
        "ARE": { name: "United Arab Emirates", exactName: "United Arab Emirates", aliases: ["United Arab Emirates", "UAE", "Emirates"], pronunciation: "United Arab Emirates", populationRank: 91, areaRank: 114 },
        "ISR": { name: "Israel", exactName: "Israel", aliases: ["Israel"], pronunciation: "Israel", populationRank: 97, areaRank: 149 },
        "LBN": { name: "Lebanon", exactName: "Lebanon", aliases: ["Lebanon"], pronunciation: "Lebanon", populationRank: 123, areaRank: 158 },
        "OMN": { name: "Oman", exactName: "Oman", aliases: ["Oman"], pronunciation: "Oman", populationRank: 126, areaRank: 70 },
        "KWT": { name: "Kuwait", exactName: "Kuwait", aliases: ["Kuwait"], pronunciation: "Kuwait", populationRank: 129, areaRank: 153 },
        "GEO": { name: "Georgia", exactName: "Georgia", aliases: ["Georgia"], pronunciation: "Georgia", populationRank: 132, areaRank: 119 },
        "ARM": { name: "Armenia", exactName: "Armenia", aliases: ["Armenia"], pronunciation: "Armenia", populationRank: 137, areaRank: 138 },
        "AZE": { name: "Azerbaijan", exactName: "Azerbaijan", aliases: ["Azerbaijan"], pronunciation: "Azerbaijan", populationRank: 88, areaRank: 113 },
        "QAT": { name: "Qatar", exactName: "Qatar", aliases: ["Qatar"], pronunciation: "Qatar", populationRank: 139, areaRank: 161 },
        "BHR": { name: "Bahrain", exactName: "Bahrain", aliases: ["Bahrain"], pronunciation: "Bahrain", populationRank: 151, areaRank: 173 },

        // Oceania
        "AUS": { name: "Australia", exactName: "Australia", aliases: ["Australia"], pronunciation: "Australia", populationRank: 56, areaRank: 6 },
        "NZL": { name: "New Zealand", exactName: "New Zealand", aliases: ["New Zealand", "NZ"], pronunciation: "New Zealand", populationRank: 120, areaRank: 74 },
        "PNG": { name: "Papua New Guinea", exactName: "Papua New Guinea", aliases: ["Papua New Guinea", "PNG"], pronunciation: "Papua New Guinea", populationRank: 100, areaRank: 54 },
        "FJI": { name: "Fiji", exactName: "Fiji", aliases: ["Fiji"], pronunciation: "Fiji", populationRank: 161, areaRank: 151 },
        "SLB": { name: "Solomon Islands", exactName: "Solomon Islands", aliases: ["Solomon Islands"], pronunciation: "Solomon Islands", populationRank: 169, areaRank: 139 },
        "VUT": { name: "Vanuatu", exactName: "Vanuatu", aliases: ["Vanuatu"], pronunciation: "Vanuatu", populationRank: 178, areaRank: 146 },
        "WSM": { name: "Samoa", exactName: "Samoa", aliases: ["Samoa"], pronunciation: "Samoa", populationRank: 183, areaRank: 165 },
        "KIR": { name: "Kiribati", exactName: "Kiribati", aliases: ["Kiribati"], pronunciation: "Kiribati", populationRank: 184, areaRank: 174 },
        "FSM": { name: "Micronesia", exactName: "Micronesia", aliases: ["Micronesia", "Federated States of Micronesia"], pronunciation: "Micronesia", populationRank: 179, areaRank: 177 },
        "TON": { name: "Tonga", exactName: "Tonga", aliases: ["Tonga"], pronunciation: "Tonga", populationRank: 181, areaRank: 179 },
        "MHL": { name: "Marshall Islands", exactName: "Marshall Islands", aliases: ["Marshall Islands"], pronunciation: "Marshall Islands", populationRank: 193, areaRank: 188 },
        "PLW": { name: "Palau", exactName: "Palau", aliases: ["Palau"], pronunciation: "Palau", populationRank: 198, areaRank: 180 },
        "NRU": { name: "Nauru", exactName: "Nauru", aliases: ["Nauru"], pronunciation: "Nauru", populationRank: 199, areaRank: 194 },
        "TUV": { name: "Tuvalu", exactName: "Tuvalu", aliases: ["Tuvalu"], pronunciation: "Tuvalu", populationRank: 200, areaRank: 195 }
    },

    // Category to country ISO mapping
    categories: {
        // North/Central America - All
        "north-central-america": ["USA", "CAN", "MEX", "GTM", "BLZ", "SLV", "HND", "NIC", "CRI", "PAN", "CUB", "JAM", "HTI", "DOM", "TTO", "BHS", "BRB", "LCA", "GRD", "VCT", "ATG", "DMA", "KNA"],

        // Central America only
        "central-america": ["GTM", "BLZ", "SLV", "HND", "NIC", "CRI", "PAN"],

        // Caribbean only
        "caribbean": ["CUB", "JAM", "HTI", "DOM", "TTO", "BHS", "BRB", "LCA", "GRD", "VCT", "ATG", "DMA", "KNA"],

        // South America
        "south-america": ["BRA", "ARG", "COL", "PER", "VEN", "CHL", "ECU", "BOL", "PRY", "URY", "GUY", "SUR"],

        // Europe - All
        "europe": ["GBR", "IRL", "ISL", "NOR", "SWE", "FIN", "DNK", "EST", "LVA", "LTU", "ESP", "PRT", "ITA", "GRC", "MLT", "CYP", "SVN", "HRV", "BIH", "SRB", "MNE", "ALB", "MKD", "AND", "SMR", "VAT", "MCO", "RUS", "UKR", "POL", "ROU", "CZE", "HUN", "BGR", "SVK", "BLR", "MDA", "DEU", "FRA", "NLD", "BEL", "AUT", "CHE", "LUX", "LIE"],

        // Europe - Northern
        "europe-north": ["GBR", "IRL", "ISL", "NOR", "SWE", "FIN", "DNK", "EST", "LVA", "LTU"],

        // Europe - Southern
        "europe-south": ["ESP", "PRT", "ITA", "GRC", "MLT", "CYP", "SVN", "HRV", "BIH", "SRB", "MNE", "ALB", "MKD", "AND", "SMR", "VAT", "MCO"],

        // Europe - Eastern
        "europe-east": ["RUS", "UKR", "POL", "ROU", "CZE", "HUN", "BGR", "SVK", "BLR", "MDA"],

        // Europe - Western
        "europe-west": ["DEU", "FRA", "NLD", "BEL", "AUT", "CHE", "LUX", "LIE"],

        // Africa - All
        "africa": ["EGY", "DZA", "MAR", "TUN", "LBY", "SDN", "MRT", "NGA", "GHA", "CIV", "NER", "BFA", "MLI", "SEN", "GIN", "BEN", "TGO", "SLE", "LBR", "GMB", "GNB", "CPV", "COD", "AGO", "CMR", "TCD", "COG", "CAF", "GAB", "GNQ", "STP", "ETH", "TZA", "KEN", "UGA", "MOZ", "MDG", "MWI", "ZMB", "ZWE", "SOM", "RWA", "BDI", "SSD", "ERI", "MUS", "DJI", "COM", "SYC", "ZAF", "NAM", "BWA", "LSO", "SWZ"],

        // Africa - Central
        "africa-central": ["COD", "AGO", "CMR", "TCD", "COG", "CAF", "GAB", "GNQ", "STP"],

        // Africa - Eastern
        "africa-east": ["ETH", "TZA", "KEN", "UGA", "MOZ", "MDG", "MWI", "ZMB", "ZWE", "SOM", "RWA", "BDI", "SSD", "ERI", "MUS", "DJI", "COM", "SYC"],

        // Africa - Northern
        "africa-north": ["EGY", "DZA", "MAR", "TUN", "LBY", "SDN", "MRT"],

        // Africa - Southern
        "africa-south": ["ZAF", "NAM", "BWA", "LSO", "SWZ"],

        // Africa - Western
        "africa-west": ["NGA", "GHA", "CIV", "NER", "BFA", "MLI", "SEN", "GIN", "BEN", "TGO", "SLE", "LBR", "GMB", "GNB", "CPV"],

        // Asia - All
        "asia": ["IND", "PAK", "BGD", "NPL", "LKA", "AFG", "BTN", "MDV", "IDN", "PHL", "VNM", "THA", "MMR", "MYS", "KHM", "LAO", "SGP", "TLS", "BRN", "CHN", "JPN", "KOR", "PRK", "MNG", "KAZ", "UZB", "TKM", "TJK", "KGZ", "TUR", "IRN", "IRQ", "SAU", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "KWT", "GEO", "ARM", "AZE", "QAT", "BHR"],

        // Asia - South
        "asia-south": ["IND", "PAK", "BGD", "NPL", "LKA", "AFG", "BTN", "MDV"],

        // Asia - Southeast
        "asia-southeast": ["IDN", "PHL", "VNM", "THA", "MMR", "MYS", "KHM", "LAO", "SGP", "TLS", "BRN"],

        // Asia - Middle East
        "asia-middle-east": ["TUR", "IRN", "IRQ", "SAU", "YEM", "SYR", "JOR", "ARE", "ISR", "LBN", "OMN", "KWT", "GEO", "ARM", "AZE", "QAT", "BHR"],

        // Oceania
        "oceania": ["AUS", "NZL", "PNG", "FJI", "SLB", "VUT", "WSM", "KIR", "FSM", "TON", "MHL", "PLW", "NRU", "TUV"],

        // World - Most Populous (sorted by population rank)
        "populous-30": ["IND", "CHN", "USA", "IDN", "PAK", "NGA", "BRA", "BGD", "RUS", "MEX", "JPN", "ETH", "PHL", "EGY", "VNM", "COD", "TUR", "IRN", "DEU", "THA", "GBR", "FRA", "ITA", "TZA", "ZAF", "MMR", "KEN", "COL", "KOR", "ESP"],

        "populous-50": ["IND", "CHN", "USA", "IDN", "PAK", "NGA", "BRA", "BGD", "RUS", "MEX", "JPN", "ETH", "PHL", "EGY", "VNM", "COD", "TUR", "IRN", "DEU", "THA", "GBR", "FRA", "ITA", "TZA", "ZAF", "MMR", "KEN", "COL", "KOR", "ESP", "UGA", "ARG", "DZA", "IRQ", "SDN", "UKR", "POL", "CAN", "SAU", "MAR", "AFG", "UZB", "PER", "MYS", "AGO", "MOZ", "GHA", "NPL", "YEM", "MDG"],

        "populous-70": ["IND", "CHN", "USA", "IDN", "PAK", "NGA", "BRA", "BGD", "RUS", "MEX", "JPN", "ETH", "PHL", "EGY", "VNM", "COD", "TUR", "IRN", "DEU", "THA", "GBR", "FRA", "ITA", "TZA", "ZAF", "MMR", "KEN", "COL", "KOR", "ESP", "UGA", "ARG", "DZA", "IRQ", "SDN", "UKR", "POL", "CAN", "SAU", "MAR", "AFG", "UZB", "PER", "MYS", "AGO", "MOZ", "GHA", "NPL", "YEM", "MDG", "VEN", "CMR", "CIV", "PRK", "NER", "SYR", "LKA", "BFA", "MLI", "ROU", "CHL", "MWI", "ZMB", "ECU", "KAZ", "NLD", "TCD", "SEN", "GTM", "SOM"],

        "populous-90": ["IND", "CHN", "USA", "IDN", "PAK", "NGA", "BRA", "BGD", "RUS", "MEX", "JPN", "ETH", "PHL", "EGY", "VNM", "COD", "TUR", "IRN", "DEU", "THA", "GBR", "FRA", "ITA", "TZA", "ZAF", "MMR", "KEN", "COL", "KOR", "ESP", "UGA", "ARG", "DZA", "IRQ", "SDN", "UKR", "POL", "CAN", "SAU", "MAR", "AFG", "UZB", "PER", "MYS", "AGO", "MOZ", "GHA", "NPL", "YEM", "MDG", "VEN", "CMR", "CIV", "PRK", "NER", "SYR", "LKA", "BFA", "MLI", "ROU", "CHL", "MWI", "ZMB", "ECU", "KAZ", "NLD", "TCD", "SEN", "GTM", "SOM", "ZWE", "BDI", "RWA", "GIN", "BEN", "TUN", "BEL", "BOL", "CUB", "HTI", "DOM", "JOR", "CZE", "GRC", "AZE", "SWE", "PRT", "ARE", "SSD", "HND"],

        // World - Largest (sorted by area rank)
        "largest-30": ["RUS", "CAN", "CHN", "USA", "BRA", "AUS", "IND", "ARG", "KAZ", "DZA", "COD", "SAU", "MEX", "IDN", "SDN", "LBY", "IRN", "MNG", "PER", "TCD", "NER", "AGO", "MLI", "ZAF", "COL", "ETH", "BOL", "MRT", "EGY", "TZA"],

        "largest-50": ["RUS", "CAN", "CHN", "USA", "BRA", "AUS", "IND", "ARG", "KAZ", "DZA", "COD", "SAU", "MEX", "IDN", "SDN", "LBY", "IRN", "MNG", "PER", "TCD", "NER", "AGO", "MLI", "ZAF", "COL", "ETH", "BOL", "MRT", "EGY", "TZA", "NGA", "VEN", "NAM", "PAK", "MOZ", "TUR", "CHL", "ZMB", "MMR", "AFG", "SSD", "SOM", "CAF", "UKR", "BWA", "MDG", "KEN", "FRA", "YEM", "THA"],

        "largest-70": ["RUS", "CAN", "CHN", "USA", "BRA", "AUS", "IND", "ARG", "KAZ", "DZA", "COD", "SAU", "MEX", "IDN", "SDN", "LBY", "IRN", "MNG", "PER", "TCD", "NER", "AGO", "MLI", "ZAF", "COL", "ETH", "BOL", "MRT", "EGY", "TZA", "NGA", "VEN", "NAM", "PAK", "MOZ", "TUR", "CHL", "ZMB", "MMR", "AFG", "SSD", "SOM", "CAF", "UKR", "BWA", "MDG", "KEN", "FRA", "YEM", "THA", "ESP", "TKM", "CMR", "PNG", "SWE", "UZB", "MAR", "PRY", "ZWE", "JPN", "DEU", "COG", "FIN", "VNM", "MYS", "NOR", "CIV", "POL", "OMN", "ITA"],

        "largest-90": ["RUS", "CAN", "CHN", "USA", "BRA", "AUS", "IND", "ARG", "KAZ", "DZA", "COD", "SAU", "MEX", "IDN", "SDN", "LBY", "IRN", "MNG", "PER", "TCD", "NER", "AGO", "MLI", "ZAF", "COL", "ETH", "BOL", "MRT", "EGY", "TZA", "NGA", "VEN", "NAM", "PAK", "MOZ", "TUR", "CHL", "ZMB", "MMR", "AFG", "SSD", "SOM", "CAF", "UKR", "BWA", "MDG", "KEN", "FRA", "YEM", "THA", "ESP", "TKM", "CMR", "PNG", "SWE", "UZB", "MAR", "PRY", "ZWE", "JPN", "DEU", "COG", "FIN", "VNM", "MYS", "NOR", "CIV", "POL", "OMN", "ITA", "PHL", "ECU", "BFA", "NZL", "GAB", "GIN", "GBR", "UGA", "GHA", "ROU", "LAO", "GUY", "BLR", "KGZ", "SEN", "SYR", "KHM", "URY", "SUR", "TUN"],

        // World - Smallest 32 (by area)
        "smallest-32": ["VAT", "MCO", "NRU", "TUV", "SMR", "LIE", "MHL", "KNA", "MDV", "MLT", "GRD", "VCT", "BRB", "ATG", "SYC", "PLW", "AND", "DMA", "TON", "FSM", "SGP", "BHR", "KIR", "STP", "COM", "MUS", "LUX", "WSM", "CPV", "TLS", "BRN", "TTO"]
    }
};
