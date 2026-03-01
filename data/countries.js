// ============================================================
// data/countries.js — 200 Mates
// Nombres en EN / ES / PT + rebuildCountrySelect(lang)
// ============================================================

const COUNTRIES = [
  { name: "Afghanistan",                      nameEs: "Afganistán",                    namePt: "Afeganistão",                   iso3: "AFG", flag: "🇦🇫" },
  { name: "Albania",                          nameEs: "Albania",                        namePt: "Albânia",                       iso3: "ALB", flag: "🇦🇱" },
  { name: "Algeria",                          nameEs: "Argelia",                        namePt: "Argélia",                       iso3: "DZA", flag: "🇩🇿" },
  { name: "Andorra",                          nameEs: "Andorra",                        namePt: "Andorra",                       iso3: "AND", flag: "🇦🇩" },
  { name: "Angola",                           nameEs: "Angola",                         namePt: "Angola",                        iso3: "AGO", flag: "🇦🇴" },
  { name: "Antigua and Barbuda",              nameEs: "Antigua y Barbuda",              namePt: "Antígua e Barbuda",             iso3: "ATG", flag: "🇦🇬" },
  { name: "Argentina",                        nameEs: "Argentina",                      namePt: "Argentina",                     iso3: "ARG", flag: "🇦🇷" },
  { name: "Armenia",                          nameEs: "Armenia",                        namePt: "Armênia",                       iso3: "ARM", flag: "🇦🇲" },
  { name: "Australia",                        nameEs: "Australia",                      namePt: "Austrália",                     iso3: "AUS", flag: "🇦🇺" },
  { name: "Austria",                          nameEs: "Austria",                        namePt: "Áustria",                       iso3: "AUT", flag: "🇦🇹" },
  { name: "Azerbaijan",                       nameEs: "Azerbaiyán",                     namePt: "Azerbaijão",                    iso3: "AZE", flag: "🇦🇿" },
  { name: "Bahamas",                          nameEs: "Bahamas",                        namePt: "Bahamas",                       iso3: "BHS", flag: "🇧🇸" },
  { name: "Bahrain",                          nameEs: "Baréin",                         namePt: "Barein",                        iso3: "BHR", flag: "🇧🇭" },
  { name: "Bangladesh",                       nameEs: "Bangladés",                      namePt: "Bangladesh",                    iso3: "BGD", flag: "🇧🇩" },
  { name: "Barbados",                         nameEs: "Barbados",                       namePt: "Barbados",                      iso3: "BRB", flag: "🇧🇧" },
  { name: "Belarus",                          nameEs: "Bielorrusia",                    namePt: "Bielorrússia",                  iso3: "BLR", flag: "🇧🇾" },
  { name: "Belgium",                          nameEs: "Bélgica",                        namePt: "Bélgica",                       iso3: "BEL", flag: "🇧🇪" },
  { name: "Belize",                           nameEs: "Belice",                         namePt: "Belize",                        iso3: "BLZ", flag: "🇧🇿" },
  { name: "Benin",                            nameEs: "Benín",                          namePt: "Benim",                         iso3: "BEN", flag: "🇧🇯" },
  { name: "Bhutan",                           nameEs: "Bután",                          namePt: "Butão",                         iso3: "BTN", flag: "🇧🇹" },
  { name: "Bolivia",                          nameEs: "Bolivia",                        namePt: "Bolívia",                       iso3: "BOL", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina",           nameEs: "Bosnia y Herzegovina",           namePt: "Bósnia e Herzegovina",          iso3: "BIH", flag: "🇧🇦" },
  { name: "Botswana",                         nameEs: "Botsuana",                       namePt: "Botsuana",                      iso3: "BWA", flag: "🇧🇼" },
  { name: "Brazil",                           nameEs: "Brasil",                         namePt: "Brasil",                        iso3: "BRA", flag: "🇧🇷" },
  { name: "Brunei",                           nameEs: "Brunéi",                         namePt: "Brunei",                        iso3: "BRN", flag: "🇧🇳" },
  { name: "Bulgaria",                         nameEs: "Bulgaria",                       namePt: "Bulgária",                      iso3: "BGR", flag: "🇧🇬" },
  { name: "Burkina Faso",                     nameEs: "Burkina Faso",                   namePt: "Burkina Faso",                  iso3: "BFA", flag: "🇧🇫" },
  { name: "Burundi",                          nameEs: "Burundi",                        namePt: "Burundi",                       iso3: "BDI", flag: "🇧🇮" },
  { name: "Cambodia",                         nameEs: "Camboya",                        namePt: "Camboja",                       iso3: "KHM", flag: "🇰🇭" },
  { name: "Cameroon",                         nameEs: "Camerún",                        namePt: "Camarões",                      iso3: "CMR", flag: "🇨🇲" },
  { name: "Canada",                           nameEs: "Canadá",                         namePt: "Canadá",                        iso3: "CAN", flag: "🇨🇦" },
  { name: "Cape Verde",                       nameEs: "Cabo Verde",                     namePt: "Cabo Verde",                    iso3: "CPV", flag: "🇨🇻" },
  { name: "Central African Republic",         nameEs: "República Centroafricana",       namePt: "República Centro-Africana",     iso3: "CAF", flag: "🇨🇫" },
  { name: "Chad",                             nameEs: "Chad",                           namePt: "Chade",                         iso3: "TCD", flag: "🇹🇩" },
  { name: "Chile",                            nameEs: "Chile",                          namePt: "Chile",                         iso3: "CHL", flag: "🇨🇱" },
  { name: "China",                            nameEs: "China",                          namePt: "China",                         iso3: "CHN", flag: "🇨🇳" },
  { name: "Colombia",                         nameEs: "Colombia",                       namePt: "Colômbia",                      iso3: "COL", flag: "🇨🇴" },
  { name: "Comoros",                          nameEs: "Comoras",                        namePt: "Comores",                       iso3: "COM", flag: "🇰🇲" },
  { name: "Congo",                            nameEs: "Congo",                          namePt: "Congo",                         iso3: "COG", flag: "🇨🇬" },
  { name: "Costa Rica",                       nameEs: "Costa Rica",                     namePt: "Costa Rica",                    iso3: "CRI", flag: "🇨🇷" },
  { name: "Côte d'Ivoire",                    nameEs: "Costa de Marfil",                namePt: "Costa do Marfim",               iso3: "CIV", flag: "🇨🇮" },
  { name: "Croatia",                          nameEs: "Croacia",                        namePt: "Croácia",                       iso3: "HRV", flag: "🇭🇷" },
  { name: "Cuba",                             nameEs: "Cuba",                           namePt: "Cuba",                          iso3: "CUB", flag: "🇨🇺" },
  { name: "Cyprus",                           nameEs: "Chipre",                         namePt: "Chipre",                        iso3: "CYP", flag: "🇨🇾" },
  { name: "Czech Republic",                   nameEs: "República Checa",                namePt: "República Tcheca",              iso3: "CZE", flag: "🇨🇿" },
  { name: "DR Congo",                         nameEs: "RD del Congo",                   namePt: "RD do Congo",                   iso3: "COD", flag: "🇨🇩" },
  { name: "Denmark",                          nameEs: "Dinamarca",                      namePt: "Dinamarca",                     iso3: "DNK", flag: "🇩🇰" },
  { name: "Djibouti",                         nameEs: "Yibuti",                         namePt: "Djibuti",                       iso3: "DJI", flag: "🇩🇯" },
  { name: "Dominica",                         nameEs: "Dominica",                       namePt: "Dominica",                      iso3: "DMA", flag: "🇩🇲" },
  { name: "Dominican Republic",               nameEs: "República Dominicana",           namePt: "República Dominicana",          iso3: "DOM", flag: "🇩🇴" },
  { name: "Ecuador",                          nameEs: "Ecuador",                        namePt: "Equador",                       iso3: "ECU", flag: "🇪🇨" },
  { name: "Egypt",                            nameEs: "Egipto",                         namePt: "Egito",                         iso3: "EGY", flag: "🇪🇬" },
  { name: "El Salvador",                      nameEs: "El Salvador",                    namePt: "El Salvador",                   iso3: "SLV", flag: "🇸🇻" },
  { name: "Equatorial Guinea",                nameEs: "Guinea Ecuatorial",              namePt: "Guiné Equatorial",              iso3: "GNQ", flag: "🇬🇶" },
  { name: "Eritrea",                          nameEs: "Eritrea",                        namePt: "Eritreia",                      iso3: "ERI", flag: "🇪🇷" },
  { name: "Estonia",                          nameEs: "Estonia",                        namePt: "Estônia",                       iso3: "EST", flag: "🇪🇪" },
  { name: "Eswatini",                         nameEs: "Esuatini",                       namePt: "Essuatíni",                     iso3: "SWZ", flag: "🇸🇿" },
  { name: "Ethiopia",                         nameEs: "Etiopía",                        namePt: "Etiópia",                       iso3: "ETH", flag: "🇪🇹" },
  { name: "Fiji",                             nameEs: "Fiyi",                           namePt: "Fiji",                          iso3: "FJI", flag: "🇫🇯" },
  { name: "Finland",                          nameEs: "Finlandia",                      namePt: "Finlândia",                     iso3: "FIN", flag: "🇫🇮" },
  { name: "France",                           nameEs: "Francia",                        namePt: "França",                        iso3: "FRA", flag: "🇫🇷" },
  { name: "Gabon",                            nameEs: "Gabón",                          namePt: "Gabão",                         iso3: "GAB", flag: "🇬🇦" },
  { name: "Gambia",                           nameEs: "Gambia",                         namePt: "Gâmbia",                        iso3: "GMB", flag: "🇬🇲" },
  { name: "Georgia",                          nameEs: "Georgia",                        namePt: "Geórgia",                       iso3: "GEO", flag: "🇬🇪" },
  { name: "Germany",                          nameEs: "Alemania",                       namePt: "Alemanha",                      iso3: "DEU", flag: "🇩🇪" },
  { name: "Ghana",                            nameEs: "Ghana",                          namePt: "Gana",                          iso3: "GHA", flag: "🇬🇭" },
  { name: "Greece",                           nameEs: "Grecia",                         namePt: "Grécia",                        iso3: "GRC", flag: "🇬🇷" },
  { name: "Grenada",                          nameEs: "Granada",                        namePt: "Granada",                       iso3: "GRD", flag: "🇬🇩" },
  { name: "Guatemala",                        nameEs: "Guatemala",                      namePt: "Guatemala",                     iso3: "GTM", flag: "🇬🇹" },
  { name: "Guinea",                           nameEs: "Guinea",                         namePt: "Guiné",                         iso3: "GIN", flag: "🇬🇳" },
  { name: "Guinea-Bissau",                    nameEs: "Guinea-Bisáu",                   namePt: "Guiné-Bissau",                  iso3: "GNB", flag: "🇬🇼" },
  { name: "Guyana",                           nameEs: "Guyana",                         namePt: "Guiana",                        iso3: "GUY", flag: "🇬🇾" },
  { name: "Haiti",                            nameEs: "Haití",                          namePt: "Haiti",                         iso3: "HTI", flag: "🇭🇹" },
  { name: "Honduras",                         nameEs: "Honduras",                       namePt: "Honduras",                      iso3: "HND", flag: "🇭🇳" },
  { name: "Hungary",                          nameEs: "Hungría",                        namePt: "Hungria",                       iso3: "HUN", flag: "🇭🇺" },
  { name: "Iceland",                          nameEs: "Islandia",                       namePt: "Islândia",                      iso3: "ISL", flag: "🇮🇸" },
  { name: "India",                            nameEs: "India",                          namePt: "Índia",                         iso3: "IND", flag: "🇮🇳" },
  { name: "Indonesia",                        nameEs: "Indonesia",                      namePt: "Indonésia",                     iso3: "IDN", flag: "🇮🇩" },
  { name: "Iran",                             nameEs: "Irán",                           namePt: "Irã",                           iso3: "IRN", flag: "🇮🇷" },
  { name: "Iraq",                             nameEs: "Irak",                           namePt: "Iraque",                        iso3: "IRQ", flag: "🇮🇶" },
  { name: "Ireland",                          nameEs: "Irlanda",                        namePt: "Irlanda",                       iso3: "IRL", flag: "🇮🇪" },
  { name: "Israel",                           nameEs: "Israel",                         namePt: "Israel",                        iso3: "ISR", flag: "🇮🇱" },
  { name: "Italy",                            nameEs: "Italia",                         namePt: "Itália",                        iso3: "ITA", flag: "🇮🇹" },
  { name: "Jamaica",                          nameEs: "Jamaica",                        namePt: "Jamaica",                       iso3: "JAM", flag: "🇯🇲" },
  { name: "Japan",                            nameEs: "Japón",                          namePt: "Japão",                         iso3: "JPN", flag: "🇯🇵" },
  { name: "Jordan",                           nameEs: "Jordania",                       namePt: "Jordânia",                      iso3: "JOR", flag: "🇯🇴" },
  { name: "Kazakhstan",                       nameEs: "Kazajistán",                     namePt: "Cazaquistão",                   iso3: "KAZ", flag: "🇰🇿" },
  { name: "Kenya",                            nameEs: "Kenia",                          namePt: "Quênia",                        iso3: "KEN", flag: "🇰🇪" },
  { name: "Kiribati",                         nameEs: "Kiribati",                       namePt: "Quiribati",                     iso3: "KIR", flag: "🇰🇮" },
  { name: "Kosovo",                           nameEs: "Kosovo",                         namePt: "Kosovo",                        iso3: "XKX", flag: "🇽🇰" },
  { name: "Kuwait",                           nameEs: "Kuwait",                         namePt: "Kuwait",                        iso3: "KWT", flag: "🇰🇼" },
  { name: "Kyrgyzstan",                       nameEs: "Kirguistán",                     namePt: "Quirguistão",                   iso3: "KGZ", flag: "🇰🇬" },
  { name: "Laos",                             nameEs: "Laos",                           namePt: "Laos",                          iso3: "LAO", flag: "🇱🇦" },
  { name: "Latvia",                           nameEs: "Letonia",                        namePt: "Letônia",                       iso3: "LVA", flag: "🇱🇻" },
  { name: "Lebanon",                          nameEs: "Líbano",                         namePt: "Líbano",                        iso3: "LBN", flag: "🇱🇧" },
  { name: "Lesotho",                          nameEs: "Lesoto",                         namePt: "Lesoto",                        iso3: "LSO", flag: "🇱🇸" },
  { name: "Liberia",                          nameEs: "Liberia",                        namePt: "Libéria",                       iso3: "LBR", flag: "🇱🇷" },
  { name: "Libya",                            nameEs: "Libia",                          namePt: "Líbia",                         iso3: "LBY", flag: "🇱🇾" },
  { name: "Liechtenstein",                    nameEs: "Liechtenstein",                  namePt: "Liechtenstein",                 iso3: "LIE", flag: "🇱🇮" },
  { name: "Lithuania",                        nameEs: "Lituania",                       namePt: "Lituânia",                      iso3: "LTU", flag: "🇱🇹" },
  { name: "Luxembourg",                       nameEs: "Luxemburgo",                     namePt: "Luxemburgo",                    iso3: "LUX", flag: "🇱🇺" },
  { name: "Madagascar",                       nameEs: "Madagascar",                     namePt: "Madagascar",                    iso3: "MDG", flag: "🇲🇬" },
  { name: "Malawi",                           nameEs: "Malaui",                         namePt: "Malawi",                        iso3: "MWI", flag: "🇲🇼" },
  { name: "Malaysia",                         nameEs: "Malasia",                        namePt: "Malásia",                       iso3: "MYS", flag: "🇲🇾" },
  { name: "Maldives",                         nameEs: "Maldivas",                       namePt: "Maldivas",                      iso3: "MDV", flag: "🇲🇻" },
  { name: "Mali",                             nameEs: "Malí",                           namePt: "Mali",                          iso3: "MLI", flag: "🇲🇱" },
  { name: "Malta",                            nameEs: "Malta",                          namePt: "Malta",                         iso3: "MLT", flag: "🇲🇹" },
  { name: "Marshall Islands",                 nameEs: "Islas Marshall",                 namePt: "Ilhas Marshall",                iso3: "MHL", flag: "🇲🇭" },
  { name: "Mauritania",                       nameEs: "Mauritania",                     namePt: "Mauritânia",                    iso3: "MRT", flag: "🇲🇷" },
  { name: "Mauritius",                        nameEs: "Mauricio",                       namePt: "Maurício",                      iso3: "MUS", flag: "🇲🇺" },
  { name: "Mexico",                           nameEs: "México",                         namePt: "México",                        iso3: "MEX", flag: "🇲🇽" },
  { name: "Micronesia",                       nameEs: "Micronesia",                     namePt: "Micronésia",                    iso3: "FSM", flag: "🇫🇲" },
  { name: "Moldova",                          nameEs: "Moldavia",                       namePt: "Moldávia",                      iso3: "MDA", flag: "🇲🇩" },
  { name: "Monaco",                           nameEs: "Mónaco",                         namePt: "Mônaco",                        iso3: "MCO", flag: "🇲🇨" },
  { name: "Mongolia",                         nameEs: "Mongolia",                       namePt: "Mongólia",                      iso3: "MNG", flag: "🇲🇳" },
  { name: "Montenegro",                       nameEs: "Montenegro",                     namePt: "Montenegro",                    iso3: "MNE", flag: "🇲🇪" },
  { name: "Morocco",                          nameEs: "Marruecos",                      namePt: "Marrocos",                      iso3: "MAR", flag: "🇲🇦" },
  { name: "Mozambique",                       nameEs: "Mozambique",                     namePt: "Moçambique",                    iso3: "MOZ", flag: "🇲🇿" },
  { name: "Myanmar",                          nameEs: "Myanmar",                        namePt: "Mianmar",                       iso3: "MMR", flag: "🇲🇲" },
  { name: "Namibia",                          nameEs: "Namibia",                        namePt: "Namíbia",                       iso3: "NAM", flag: "🇳🇦" },
  { name: "Nauru",                            nameEs: "Nauru",                          namePt: "Nauru",                         iso3: "NRU", flag: "🇳🇷" },
  { name: "Nepal",                            nameEs: "Nepal",                          namePt: "Nepal",                         iso3: "NPL", flag: "🇳🇵" },
  { name: "Netherlands",                      nameEs: "Países Bajos",                   namePt: "Países Baixos",                 iso3: "NLD", flag: "🇳🇱" },
  { name: "New Zealand",                      nameEs: "Nueva Zelanda",                  namePt: "Nova Zelândia",                 iso3: "NZL", flag: "🇳🇿" },
  { name: "Nicaragua",                        nameEs: "Nicaragua",                      namePt: "Nicarágua",                     iso3: "NIC", flag: "🇳🇮" },
  { name: "Niger",                            nameEs: "Níger",                          namePt: "Níger",                         iso3: "NER", flag: "🇳🇪" },
  { name: "Nigeria",                          nameEs: "Nigeria",                        namePt: "Nigéria",                       iso3: "NGA", flag: "🇳🇬" },
  { name: "North Korea",                      nameEs: "Corea del Norte",                namePt: "Coreia do Norte",               iso3: "PRK", flag: "🇰🇵" },
  { name: "North Macedonia",                  nameEs: "Macedonia del Norte",            namePt: "Macedônia do Norte",            iso3: "MKD", flag: "🇲🇰" },
  { name: "Norway",                           nameEs: "Noruega",                        namePt: "Noruega",                       iso3: "NOR", flag: "🇳🇴" },
  { name: "Oman",                             nameEs: "Omán",                           namePt: "Omã",                           iso3: "OMN", flag: "🇴🇲" },
  { name: "Pakistan",                         nameEs: "Pakistán",                       namePt: "Paquistão",                     iso3: "PAK", flag: "🇵🇰" },
  { name: "Palau",                            nameEs: "Palaos",                         namePt: "Palau",                         iso3: "PLW", flag: "🇵🇼" },
  { name: "Palestine",                        nameEs: "Palestina",                      namePt: "Palestina",                     iso3: "PSE", flag: "🇵🇸" },
  { name: "Panama",                           nameEs: "Panamá",                         namePt: "Panamá",                        iso3: "PAN", flag: "🇵🇦" },
  { name: "Papua New Guinea",                 nameEs: "Papúa Nueva Guinea",             namePt: "Papua Nova Guiné",              iso3: "PNG", flag: "🇵🇬" },
  { name: "Paraguay",                         nameEs: "Paraguay",                       namePt: "Paraguai",                      iso3: "PRY", flag: "🇵🇾" },
  { name: "Peru",                             nameEs: "Perú",                           namePt: "Peru",                          iso3: "PER", flag: "🇵🇪" },
  { name: "Philippines",                      nameEs: "Filipinas",                      namePt: "Filipinas",                     iso3: "PHL", flag: "🇵🇭" },
  { name: "Poland",                           nameEs: "Polonia",                        namePt: "Polônia",                       iso3: "POL", flag: "🇵🇱" },
  { name: "Portugal",                         nameEs: "Portugal",                       namePt: "Portugal",                      iso3: "PRT", flag: "🇵🇹" },
  { name: "Qatar",                            nameEs: "Catar",                          namePt: "Catar",                         iso3: "QAT", flag: "🇶🇦" },
  { name: "Romania",                          nameEs: "Rumanía",                        namePt: "Romênia",                       iso3: "ROU", flag: "🇷🇴" },
  { name: "Russia",                           nameEs: "Rusia",                          namePt: "Rússia",                        iso3: "RUS", flag: "🇷🇺" },
  { name: "Rwanda",                           nameEs: "Ruanda",                         namePt: "Ruanda",                        iso3: "RWA", flag: "🇷🇼" },
  { name: "Saint Kitts and Nevis",            nameEs: "San Cristóbal y Nieves",         namePt: "São Cristóvão e Nevis",         iso3: "KNA", flag: "🇰🇳" },
  { name: "Saint Lucia",                      nameEs: "Santa Lucía",                    namePt: "Santa Lúcia",                   iso3: "LCA", flag: "🇱🇨" },
  { name: "Saint Vincent and the Grenadines", nameEs: "San Vicente y las Granadinas",   namePt: "São Vicente e Granadinas",      iso3: "VCT", flag: "🇻🇨" },
  { name: "Samoa",                            nameEs: "Samoa",                          namePt: "Samoa",                         iso3: "WSM", flag: "🇼🇸" },
  { name: "San Marino",                       nameEs: "San Marino",                     namePt: "San Marino",                    iso3: "SMR", flag: "🇸🇲" },
  { name: "Sao Tome and Principe",            nameEs: "Santo Tomé y Príncipe",          namePt: "São Tomé e Príncipe",           iso3: "STP", flag: "🇸🇹" },
  { name: "Saudi Arabia",                     nameEs: "Arabia Saudita",                 namePt: "Arábia Saudita",                iso3: "SAU", flag: "🇸🇦" },
  { name: "Senegal",                          nameEs: "Senegal",                        namePt: "Senegal",                       iso3: "SEN", flag: "🇸🇳" },
  { name: "Serbia",                           nameEs: "Serbia",                         namePt: "Sérvia",                        iso3: "SRB", flag: "🇷🇸" },
  { name: "Seychelles",                       nameEs: "Seychelles",                     namePt: "Seicheles",                     iso3: "SYC", flag: "🇸🇨" },
  { name: "Sierra Leone",                     nameEs: "Sierra Leona",                   namePt: "Serra Leoa",                    iso3: "SLE", flag: "🇸🇱" },
  { name: "Slovakia",                         nameEs: "Eslovaquia",                     namePt: "Eslováquia",                    iso3: "SVK", flag: "🇸🇰" },
  { name: "Slovenia",                         nameEs: "Eslovenia",                      namePt: "Eslovênia",                     iso3: "SVN", flag: "🇸🇮" },
  { name: "Solomon Islands",                  nameEs: "Islas Salomón",                  namePt: "Ilhas Salomão",                 iso3: "SLB", flag: "🇸🇧" },
  { name: "Somalia",                          nameEs: "Somalia",                        namePt: "Somália",                       iso3: "SOM", flag: "🇸🇴" },
  { name: "South Africa",                     nameEs: "Sudáfrica",                      namePt: "África do Sul",                 iso3: "ZAF", flag: "🇿🇦" },
  { name: "South Korea",                      nameEs: "Corea del Sur",                  namePt: "Coreia do Sul",                 iso3: "KOR", flag: "🇰🇷" },
  { name: "South Sudan",                      nameEs: "Sudán del Sur",                  namePt: "Sudão do Sul",                  iso3: "SSD", flag: "🇸🇸" },
  { name: "Spain",                            nameEs: "España",                         namePt: "Espanha",                       iso3: "ESP", flag: "🇪🇸" },
  { name: "Sri Lanka",                        nameEs: "Sri Lanka",                      namePt: "Sri Lanka",                     iso3: "LKA", flag: "🇱🇰" },
  { name: "Sudan",                            nameEs: "Sudán",                          namePt: "Sudão",                         iso3: "SDN", flag: "🇸🇩" },
  { name: "Suriname",                         nameEs: "Surinam",                        namePt: "Suriname",                      iso3: "SUR", flag: "🇸🇷" },
  { name: "Sweden",                           nameEs: "Suecia",                         namePt: "Suécia",                        iso3: "SWE", flag: "🇸🇪" },
  { name: "Switzerland",                      nameEs: "Suiza",                          namePt: "Suíça",                         iso3: "CHE", flag: "🇨🇭" },
  { name: "Syria",                            nameEs: "Siria",                          namePt: "Síria",                         iso3: "SYR", flag: "🇸🇾" },
  { name: "Taiwan",                           nameEs: "Taiwán",                         namePt: "Taiwan",                        iso3: "TWN", flag: "🇹🇼" },
  { name: "Tajikistan",                       nameEs: "Tayikistán",                     namePt: "Tajiquistão",                   iso3: "TJK", flag: "🇹🇯" },
  { name: "Tanzania",                         nameEs: "Tanzania",                       namePt: "Tanzânia",                      iso3: "TZA", flag: "🇹🇿" },
  { name: "Thailand",                         nameEs: "Tailandia",                      namePt: "Tailândia",                     iso3: "THA", flag: "🇹🇭" },
  { name: "Timor-Leste",                      nameEs: "Timor Oriental",                 namePt: "Timor-Leste",                   iso3: "TLS", flag: "🇹🇱" },
  { name: "Togo",                             nameEs: "Togo",                           namePt: "Togo",                          iso3: "TGO", flag: "🇹🇬" },
  { name: "Tonga",                            nameEs: "Tonga",                          namePt: "Tonga",                         iso3: "TON", flag: "🇹🇴" },
  { name: "Trinidad and Tobago",              nameEs: "Trinidad y Tobago",              namePt: "Trinidad e Tobago",             iso3: "TTO", flag: "🇹🇹" },
  { name: "Tunisia",                          nameEs: "Túnez",                          namePt: "Tunísia",                       iso3: "TUN", flag: "🇹🇳" },
  { name: "Turkey",                           nameEs: "Turquía",                        namePt: "Turquia",                       iso3: "TUR", flag: "🇹🇷" },
  { name: "Turkmenistan",                     nameEs: "Turkmenistán",                   namePt: "Turcomenistão",                 iso3: "TKM", flag: "🇹🇲" },
  { name: "Tuvalu",                           nameEs: "Tuvalu",                         namePt: "Tuvalu",                        iso3: "TUV", flag: "🇹🇻" },
  { name: "Uganda",                           nameEs: "Uganda",                         namePt: "Uganda",                        iso3: "UGA", flag: "🇺🇬" },
  { name: "Ukraine",                          nameEs: "Ucrania",                        namePt: "Ucrânia",                       iso3: "UKR", flag: "🇺🇦" },
  { name: "United Arab Emirates",             nameEs: "Emiratos Árabes Unidos",         namePt: "Emirados Árabes Unidos",        iso3: "ARE", flag: "🇦🇪" },
  { name: "United Kingdom",                   nameEs: "Reino Unido",                    namePt: "Reino Unido",                   iso3: "GBR", flag: "🇬🇧" },
  { name: "United States",                    nameEs: "Estados Unidos",                 namePt: "Estados Unidos",                iso3: "USA", flag: "🇺🇸" },
  { name: "Uruguay",                          nameEs: "Uruguay",                        namePt: "Uruguai",                       iso3: "URY", flag: "🇺🇾" },
  { name: "Uzbekistan",                       nameEs: "Uzbekistán",                     namePt: "Uzbequistão",                   iso3: "UZB", flag: "🇺🇿" },
  { name: "Vanuatu",                          nameEs: "Vanuatu",                        namePt: "Vanuatu",                       iso3: "VUT", flag: "🇻🇺" },
  { name: "Vatican City",                     nameEs: "Ciudad del Vaticano",            namePt: "Cidade do Vaticano",            iso3: "VAT", flag: "🇻🇦" },
  { name: "Venezuela",                        nameEs: "Venezuela",                      namePt: "Venezuela",                     iso3: "VEN", flag: "🇻🇪" },
  { name: "Vietnam",                          nameEs: "Vietnam",                        namePt: "Vietnã",                        iso3: "VNM", flag: "🇻🇳" },
  { name: "Yemen",                            nameEs: "Yemen",                          namePt: "Iêmen",                         iso3: "YEM", flag: "🇾🇪" },
  { name: "Zambia",                           nameEs: "Zambia",                         namePt: "Zâmbia",                        iso3: "ZMB", flag: "🇿🇲" },
  { name: "Zimbabwe",                         nameEs: "Zimbabue",                       namePt: "Zimbábue",                      iso3: "ZWE", flag: "🇿🇼" },
];


const COUNTRY_PLACEHOLDER = {
  es: "País *",
  en: "Country *",
  pt: "País *",
};


function getCountryName(c, lang) {
  if (lang === "es") return c.nameEs || c.name;
  if (lang === "pt") return c.namePt || c.name;
  return c.name; // "en" → siempre inglés
}


function rebuildCountrySelect(lang) {
  const sel = document.getElementById("country");
  if (!sel) return;

  const currentVal = sel.value; 


  sel.innerHTML = "";

  const ph = document.createElement("option");
  ph.value    = "";
  ph.disabled = true;
  ph.selected = !currentVal;
  ph.textContent = COUNTRY_PLACEHOLDER[lang] || COUNTRY_PLACEHOLDER.en;
  sel.appendChild(ph);

  const sorted = [...COUNTRIES].sort((a, b) =>
    getCountryName(a, lang).localeCompare(getCountryName(b, lang), lang)
  );

  sorted.forEach(c => {
    const opt = document.createElement("option");
    opt.value        = c.name;          
    opt.dataset.iso3 = c.iso3;
    opt.textContent  = `${c.flag} ${getCountryName(c, lang)}`;
    if (c.name === currentVal) opt.selected = true;
    sel.appendChild(opt);
  });


  sel.classList.toggle("is-placeholder", !currentVal || currentVal === "");
}


document.addEventListener("DOMContentLoaded", () => {
  const initLang = (typeof currentLang !== "undefined" ? currentLang : null)
                || localStorage.getItem("lang")
                || "es";
  rebuildCountrySelect(initLang);

  const sel = document.getElementById("country");
  if (sel) {
    sel.addEventListener("change", () => {
      sel.classList.toggle("is-placeholder", sel.value === "");
    });
  }
});