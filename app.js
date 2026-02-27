/* ============================================================
   200 Mates — app.js
   ============================================================ */

   /* ============================================================
   200 Mates — app.js
   ============================================================ */

const SUPABASE_URL  = "https://qpwwexlxiksmaaehqsev.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwd3dleGx4aWtzbWFhZWhxc2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE5ODk5MjEsImV4cCI6MjA4NzU2NTkyMX0.zfrepatjz41WDVIbxp61FblT8lKPyNpU-HB0RElIpgc";
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// ── State ────────────────────────────────────────────────────
let allMates         = [];
let countriesColored = [];
let countriesGeo     = [];
let arcInterval      = null;
let polyTimer        = null;
let lastMarkerIds    = "";
let currentLang      = "es";

// ── i18n ─────────────────────────────────────────────────────
function t(key) {
  return window.i18n?.[currentLang]?.[key] ?? window.i18n?.es?.[key] ?? key;
}
function applyI18n() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const v = t(el.dataset.i18n);
    if (v && v !== el.dataset.i18n) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const v = t(el.dataset.i18nPlaceholder);
    if (v) el.placeholder = v;
  });
  renderGallery();
}

// ── ISO tables ───────────────────────────────────────────────
const numericToIso3 = {
  "4":"AFG","8":"ALB","12":"DZA","24":"AGO","32":"ARG","36":"AUS","40":"AUT",
  "50":"BGD","56":"BEL","64":"BTN","68":"BOL","76":"BRA","100":"BGR","104":"MMR",
  "116":"KHM","120":"CMR","124":"CAN","144":"LKA","152":"CHL","156":"CHN","170":"COL",
  "178":"COG","180":"COD","188":"CRI","191":"HRV","192":"CUB","203":"CZE","208":"DNK",
  "214":"DOM","218":"ECU","818":"EGY","222":"SLV","231":"ETH","246":"FIN","250":"FRA",
  "266":"GAB","276":"DEU","288":"GHA","300":"GRC","320":"GTM","332":"HTI","340":"HND",
  "348":"HUN","356":"IND","360":"IDN","364":"IRN","368":"IRQ","372":"IRL","376":"ISR",
  "380":"ITA","388":"JAM","392":"JPN","400":"JOR","398":"KAZ","404":"KEN","408":"PRK",
  "410":"KOR","414":"KWT","418":"LAO","422":"LBN","430":"LBR","434":"LBY","442":"LUX",
  "454":"MWI","458":"MYS","484":"MEX","504":"MAR","508":"MOZ","516":"NAM","524":"NPL",
  "528":"NLD","554":"NZL","558":"NIC","566":"NGA","578":"NOR","586":"PAK","591":"PAN",
  "598":"PNG","600":"PRY","604":"PER","608":"PHL","616":"POL","620":"PRT","634":"QAT",
  "642":"ROU","643":"RUS","646":"RWA","682":"SAU","686":"SEN","694":"SLE","706":"SOM",
  "710":"ZAF","724":"ESP","729":"SDN","752":"SWE","756":"CHE","760":"SYR","764":"THA",
  "792":"TUR","800":"UGA","804":"UKR","784":"ARE","826":"GBR","840":"USA","858":"URY",
  "860":"UZB","862":"VEN","704":"VNM","887":"YEM","894":"ZMB","716":"ZWE",
  "31":"AZE","51":"ARM","70":"BIH","72":"BWA","84":"BLZ","96":"BRN","108":"BDI",
  "112":"BLR","132":"CPV","140":"CAF","148":"TCD","174":"COM","196":"CYP","204":"BEN",
  "226":"GNQ","232":"ERI","233":"EST","242":"FJI","256":"BFA","262":"DJI","270":"GMB",
  "275":"PSE","296":"KIR","308":"GRD","324":"GIN","328":"GUY","344":"HKG","352":"ISL",
  "384":"CIV","417":"KGZ","426":"LSO","428":"LVA","438":"LIE","440":"LTU","450":"MDG",
  "462":"MDV","466":"MLI","470":"MLT","478":"MRT","480":"MUS","492":"MCO","496":"MNG",
  "498":"MDA","512":"OMN","520":"NRU","548":"VUT","562":"NER","583":"FSM","585":"PLW",
  "624":"GNB","626":"TLS","659":"KNA","662":"LCA","670":"VCT","674":"SMR","688":"SRB",
  "690":"SYC","703":"SVK","705":"SVN","728":"SSD","740":"SUR","748":"SWZ","762":"TJK",
  "768":"TGO","776":"TON","780":"TTO","788":"TUN","795":"TKM","807":"MKD","834":"TZA",
  "882":"WSM","499":"MNE"
};

const nameToIso3 = {
  "afghanistan":"AFG","albania":"ALB","algeria":"DZA","angola":"AGO","argentina":"ARG",
  "australia":"AUS","austria":"AUT","bangladesh":"BGD","belgium":"BEL","bhutan":"BTN",
  "bolivia":"BOL","brazil":"BRA","brasil":"BRA","bulgaria":"BGR","myanmar":"MMR",
  "cambodia":"KHM","cameroon":"CMR","canada":"CAN","sri lanka":"LKA","chile":"CHL",
  "china":"CHN","colombia":"COL","congo":"COG","costa rica":"CRI","croatia":"HRV",
  "cuba":"CUB","czech republic":"CZE","czechia":"CZE","denmark":"DNK",
  "dominican republic":"DOM","ecuador":"ECU","egypt":"EGY","el salvador":"SLV",
  "ethiopia":"ETH","finland":"FIN","france":"FRA","gabon":"GAB","germany":"DEU",
  "alemania":"DEU","ghana":"GHA","greece":"GRC","guatemala":"GTM","haiti":"HTI",
  "honduras":"HND","hungary":"HUN","india":"IND","indonesia":"IDN","iran":"IRN",
  "iraq":"IRQ","ireland":"IRL","israel":"ISR","italy":"ITA","jamaica":"JAM",
  "japan":"JPN","jordan":"JOR","kazakhstan":"KAZ","kenya":"KEN","north korea":"PRK",
  "south korea":"KOR","kuwait":"KWT","laos":"LAO","lebanon":"LBN","liberia":"LBR",
  "libya":"LBY","luxembourg":"LUX","malawi":"MWI","malaysia":"MYS","mexico":"MEX",
  "méxico":"MEX","morocco":"MAR","marruecos":"MAR","mozambique":"MOZ","namibia":"NAM",
  "nepal":"NPL","netherlands":"NLD","new zealand":"NZL","nicaragua":"NIC",
  "nigeria":"NGA","norway":"NOR","pakistan":"PAK","panama":"PAN","panamá":"PAN",
  "papua new guinea":"PNG","paraguay":"PRY","peru":"PER","perú":"PER",
  "philippines":"PHL","poland":"POL","portugal":"PRT","qatar":"QAT","romania":"ROU",
  "russia":"RUS","rusia":"RUS","rwanda":"RWA","saudi arabia":"SAU","senegal":"SEN",
  "sierra leone":"SLE","somalia":"SOM","south africa":"ZAF","spain":"ESP",
  "españa":"ESP","sudan":"SDN","sweden":"SWE","switzerland":"CHE","suiza":"CHE",
  "syria":"SYR","thailand":"THA","turkey":"TUR","turquía":"TUR","uganda":"UGA",
  "ukraine":"UKR","ucrania":"UKR","united arab emirates":"ARE","united kingdom":"GBR",
  "reino unido":"GBR","united states":"USA","estados unidos":"USA","usa":"USA",
  "eeuu":"USA","uruguay":"URY","uzbekistan":"UZB","venezuela":"VEN","vietnam":"VNM",
  "yemen":"YEM","zambia":"ZMB","zimbabwe":"ZWE","zimbabue":"ZWE","serbia":"SRB",
  "bosnia":"BIH","north macedonia":"MKD","montenegro":"MNE","belarus":"BLR",
  "bielorrusia":"BLR","estonia":"EST","latvia":"LVA","lithuania":"LTU",
  "moldova":"MDA","georgia":"GEO","armenia":"ARM","azerbaijan":"AZE",
  "tajikistan":"TJK","turkmenistan":"TKM","kyrgyzstan":"KGZ","mongolia":"MNG",
  "tanzania":"TZA","eritrea":"ERI","djibouti":"DJI","comoros":"COM",
  "madagascar":"MDG","seychelles":"SYC","mauritius":"MUS","lesotho":"LSO",
  "eswatini":"SWZ","botswana":"BWA","cape verde":"CPV","cabo verde":"CPV",
  "guinea-bissau":"GNB","guinea":"GIN","mali":"MLI","niger":"NER","chad":"TCD",
  "mauritania":"MRT","gambia":"GMB","togo":"TGO","benin":"BEN",
  "central african republic":"CAF","equatorial guinea":"GNQ","burundi":"BDI",
  "south sudan":"SSD","iceland":"ISL","slovakia":"SVK","slovenia":"SVN",
  "malta":"MLT","cyprus":"CYP","liechtenstein":"LIE","monaco":"MCO",
  "san marino":"SMR","timor-leste":"TLS","east timor":"TLS","vanuatu":"VUT",
  "samoa":"WSM","tonga":"TON","kiribati":"KIR","micronesia":"FSM","palau":"PLW",
  "nauru":"NRU","fiji":"FJI","solomon islands":"SLB","brunei":"BRN",
  "maldives":"MDV","oman":"OMN","bahrain":"BHR","trinidad and tobago":"TTO",
  "guyana":"GUY","suriname":"SUR","tunisia":"TUN","túnez":"TUN",
  "taiwan":"TWN","taiwán":"TWN",
  "afganistán":"AFG","argelia":"DZA","arabia saudita":"SAU","arabia saudí":"SAU",
  "bélgica":"BEL","birmania":"MMR","camboya":"KHM","camerún":"CMR","canadá":"CAN",
  "corea del norte":"PRK","corea del sur":"KOR","costa de marfil":"CIV",
  "dinamarca":"DNK","emiratos árabes unidos":"ARE","eslovenia":"SVN",
  "eslovaquia":"SVK","etiopía":"ETH","filipinas":"PHL","finlandia":"FIN",
  "grecia":"GRC","hungría":"HUN","irán":"IRN","irak":"IRQ","irlanda":"IRL",
  "japón":"JPN","jordania":"JOR","kazajistán":"KAZ","kirguistán":"KGZ",
  "letonia":"LVA","líbano":"LBN","libia":"LBY","lituania":"LTU",
  "luxemburgo":"LUX","malasia":"MYS","moldavia":"MDA","namibia":"NAM",
  "noruega":"NOR","nueva zelanda":"NZL","países bajos":"NLD","holanda":"NLD",
  "pakistán":"PAK","polonia":"POL","república checa":"CZE",
  "república dominicana":"DOM","rumania":"ROU","rumanía":"ROU","siria":"SYR",
  "sudáfrica":"ZAF","sudán":"SDN","suecia":"SWE","tailandia":"THA",
  "tayikistán":"TJK","turkmenistán":"TKM","uzbekistán":"UZB"
};

const iso2ToIso3 = {
  "AF":"AFG","AL":"ALB","DZ":"DZA","AO":"AGO","AR":"ARG","AU":"AUS","AT":"AUT",
  "BD":"BGD","BE":"BEL","BT":"BTN","BO":"BOL","BR":"BRA","BG":"BGR","MM":"MMR",
  "KH":"KHM","CM":"CMR","CA":"CAN","LK":"LKA","CL":"CHL","CN":"CHN","CO":"COL",
  "CG":"COG","CD":"COD","CR":"CRI","HR":"HRV","CU":"CUB","CZ":"CZE","DK":"DNK",
  "DO":"DOM","EC":"ECU","EG":"EGY","SV":"SLV","ET":"ETH","FI":"FIN","FR":"FRA",
  "GA":"GAB","DE":"DEU","GH":"GHA","GR":"GRC","GT":"GTM","HT":"HTI","HN":"HND",
  "HU":"HUN","IN":"IND","ID":"IDN","IR":"IRN","IQ":"IRQ","IE":"IRL","IL":"ISR",
  "IT":"ITA","JM":"JAM","JP":"JPN","JO":"JOR","KZ":"KAZ","KE":"KEN","KP":"PRK",
  "KR":"KOR","KW":"KWT","LA":"LAO","LB":"LBN","LR":"LBR","LY":"LBY","LU":"LUX",
  "MW":"MWI","MY":"MYS","MX":"MEX","MA":"MAR","MZ":"MOZ","NA":"NAM","NP":"NPL",
  "NL":"NLD","NZ":"NZL","NI":"NIC","NG":"NGA","NO":"NOR","PK":"PAK","PA":"PAN",
  "PG":"PNG","PY":"PRY","PE":"PER","PH":"PHL","PL":"POL","PT":"PRT","QA":"QAT",
  "RO":"ROU","RU":"RUS","RW":"RWA","SA":"SAU","SN":"SEN","SL":"SLE","SO":"SOM",
  "ZA":"ZAF","ES":"ESP","SD":"SDN","SE":"SWE","CH":"CHE","SY":"SYR","TH":"THA",
  "TR":"TUR","UG":"UGA","UA":"UKR","AE":"ARE","GB":"GBR","US":"USA","UY":"URY",
  "UZ":"UZB","VE":"VEN","VN":"VNM","YE":"YEM","ZM":"ZMB","ZW":"ZWE","RS":"SRB",
  "ME":"MNE","MK":"MKD","BA":"BIH","XK":"XKX","BY":"BLR","EE":"EST","LV":"LVA",
  "LT":"LTU","MD":"MDA","GE":"GEO","AM":"ARM","AZ":"AZE","TJ":"TJK","TM":"TKM",
  "KG":"KGZ","MN":"MNG","TZ":"TZA","ER":"ERI","DJ":"DJI","KM":"COM","MG":"MDG",
  "SC":"SYC","MU":"MUS","LS":"LSO","SZ":"SWZ","BW":"BWA","CV":"CPV","GW":"GNB",
  "GN":"GIN","CI":"CIV","BF":"BFA","ML":"MLI","NE":"NER","TD":"TCD","MR":"MRT",
  "GM":"GMB","TG":"TGO","BJ":"BEN","CF":"CAF","GQ":"GNQ","BI":"BDI","SS":"SSD",
  "IS":"ISL","SK":"SVK","SI":"SVN","MT":"MLT","CY":"CYP","LI":"LIE","MC":"MCO",
  "SM":"SMR","TL":"TLS","VU":"VUT","WS":"WSM","TO":"TON","KI":"KIR","FM":"FSM",
  "PW":"PLW","NR":"NRU","FJ":"FJI","SB":"SLB","BN":"BRN","MV":"MDV","OM":"OMN",
  "BH":"BHR","TT":"TTO","BB":"BRB","DM":"DMA","LC":"LCA","GD":"GRD","VC":"VCT",
  "KN":"KNA","BZ":"BLZ","GY":"GUY","SR":"SUR","TN":"TUN","TW":"TWN"
};

const capitalCoords = {
  "AFG":{"lat":34.52,"lng":69.18},"ALB":{"lat":41.33,"lng":19.82},"DZA":{"lat":36.75,"lng":3.06},
  "AGO":{"lat":-8.84,"lng":13.23},"ARG":{"lat":-34.60,"lng":-58.38},"AUS":{"lat":-35.29,"lng":149.13},
  "AUT":{"lat":48.21,"lng":16.37},"BGD":{"lat":23.72,"lng":90.41},"BEL":{"lat":50.85,"lng":4.35},
  "BOL":{"lat":-16.49,"lng":-68.12},"BRA":{"lat":-15.79,"lng":-47.88},"BGR":{"lat":42.70,"lng":23.32},
  "MMR":{"lat":19.76,"lng":96.08},"KHM":{"lat":11.57,"lng":104.92},"CMR":{"lat":3.87,"lng":11.52},
  "CAN":{"lat":45.42,"lng":-75.70},"LKA":{"lat":6.93,"lng":79.85},"CHL":{"lat":-33.45,"lng":-70.67},
  "CHN":{"lat":39.90,"lng":116.41},"COL":{"lat":4.71,"lng":-74.07},"COG":{"lat":-4.27,"lng":15.28},
  "COD":{"lat":-4.33,"lng":15.31},"CRI":{"lat":9.93,"lng":-84.08},"HRV":{"lat":45.81,"lng":15.98},
  "CUB":{"lat":23.13,"lng":-82.38},"CZE":{"lat":50.09,"lng":14.42},"DNK":{"lat":55.68,"lng":12.57},
  "DOM":{"lat":18.49,"lng":-69.90},"ECU":{"lat":-0.23,"lng":-78.52},"EGY":{"lat":30.06,"lng":31.25},
  "SLV":{"lat":13.70,"lng":-89.19},"ETH":{"lat":9.03,"lng":38.74},"FIN":{"lat":60.17,"lng":24.94},
  "FRA":{"lat":48.86,"lng":2.35},"GAB":{"lat":0.39,"lng":9.45},"DEU":{"lat":52.52,"lng":13.41},
  "GHA":{"lat":5.55,"lng":-0.22},"GRC":{"lat":37.98,"lng":23.72},"GTM":{"lat":14.64,"lng":-90.51},
  "HTI":{"lat":18.54,"lng":-72.33},"HND":{"lat":14.08,"lng":-87.21},"HUN":{"lat":47.50,"lng":19.04},
  "IND":{"lat":28.64,"lng":77.22},"IDN":{"lat":-6.21,"lng":106.85},"IRN":{"lat":35.70,"lng":51.42},
  "IRQ":{"lat":33.34,"lng":44.40},"IRL":{"lat":53.33,"lng":-6.25},"ISR":{"lat":31.79,"lng":35.20},
  "ITA":{"lat":41.90,"lng":12.48},"JAM":{"lat":17.98,"lng":-76.77},"JPN":{"lat":35.68,"lng":139.77},
  "JOR":{"lat":31.96,"lng":35.95},"KAZ":{"lat":51.18,"lng":71.45},"KEN":{"lat":-1.28,"lng":36.81},
  "PRK":{"lat":39.02,"lng":125.74},"KOR":{"lat":37.51,"lng":126.98},"KWT":{"lat":29.37,"lng":47.98},
  "LAO":{"lat":17.97,"lng":102.60},"LBN":{"lat":33.89,"lng":35.51},"LBR":{"lat":6.31,"lng":-10.80},
  "LBY":{"lat":32.90,"lng":13.18},"LUX":{"lat":49.61,"lng":6.13},"MWI":{"lat":-13.96,"lng":33.77},
  "MYS":{"lat":3.15,"lng":101.70},"MEX":{"lat":19.43,"lng":-99.13},"MAR":{"lat":33.99,"lng":-6.87},
  "MOZ":{"lat":-25.97,"lng":32.58},"NAM":{"lat":-22.57,"lng":17.08},"NPL":{"lat":27.72,"lng":85.32},
  "NLD":{"lat":52.35,"lng":4.92},"NZL":{"lat":-41.30,"lng":174.78},"NIC":{"lat":12.13,"lng":-86.28},
  "NGA":{"lat":9.06,"lng":7.49},"NOR":{"lat":59.91,"lng":10.75},"PAK":{"lat":33.70,"lng":73.04},
  "PAN":{"lat":8.99,"lng":-79.52},"PNG":{"lat":-9.44,"lng":147.18},"PRY":{"lat":-25.29,"lng":-57.65},
  "PER":{"lat":-12.04,"lng":-77.03},"PHL":{"lat":14.58,"lng":120.97},"POL":{"lat":52.23,"lng":21.01},
  "PRT":{"lat":38.71,"lng":-9.14},"QAT":{"lat":25.29,"lng":51.53},"ROU":{"lat":44.45,"lng":26.10},
  "RUS":{"lat":55.76,"lng":37.62},"RWA":{"lat":-1.94,"lng":30.06},"SAU":{"lat":24.69,"lng":46.72},
  "SEN":{"lat":14.72,"lng":-17.46},"SLE":{"lat":8.49,"lng":-13.23},"SOM":{"lat":2.04,"lng":45.34},
  "ZAF":{"lat":-25.75,"lng":28.19},"ESP":{"lat":40.42,"lng":-3.70},"SDN":{"lat":15.55,"lng":32.53},
  "SWE":{"lat":59.33,"lng":18.06},"CHE":{"lat":46.95,"lng":7.45},"SYR":{"lat":33.51,"lng":36.29},
  "THA":{"lat":13.76,"lng":100.50},"TUR":{"lat":39.93,"lng":32.86},"UGA":{"lat":0.31,"lng":32.58},
  "UKR":{"lat":50.45,"lng":30.52},"ARE":{"lat":24.47,"lng":54.37},"GBR":{"lat":51.50,"lng":-0.13},
  "USA":{"lat":38.91,"lng":-77.04},"URY":{"lat":-34.88,"lng":-56.18},"UZB":{"lat":41.30,"lng":69.24},
  "VEN":{"lat":10.50,"lng":-66.90},"VNM":{"lat":21.03,"lng":105.85},"YEM":{"lat":15.35,"lng":44.21},
  "ZMB":{"lat":-15.42,"lng":28.28},"ZWE":{"lat":-17.82,"lng":31.04},"SRB":{"lat":44.80,"lng":20.48},
  "MNE":{"lat":42.46,"lng":19.26},"MKD":{"lat":42.00,"lng":21.44},"BIH":{"lat":43.86,"lng":18.42},
  "BLR":{"lat":53.90,"lng":27.56},"EST":{"lat":59.44,"lng":24.75},"LVA":{"lat":56.95,"lng":24.11},
  "LTU":{"lat":54.69,"lng":25.28},"MDA":{"lat":47.01,"lng":28.86},"GEO":{"lat":41.69,"lng":44.84},
  "ARM":{"lat":40.16,"lng":44.51},"AZE":{"lat":40.41,"lng":49.87},"TJK":{"lat":38.57,"lng":68.77},
  "TKM":{"lat":37.96,"lng":58.33},"KGZ":{"lat":42.87,"lng":74.59},"MNG":{"lat":47.91,"lng":106.92},
  "TZA":{"lat":-6.17,"lng":35.74},"ERI":{"lat":15.34,"lng":38.93},"DJI":{"lat":11.58,"lng":43.14},
  "COM":{"lat":-11.70,"lng":43.26},"MDG":{"lat":-18.91,"lng":47.54},"SYC":{"lat":-4.62,"lng":55.45},
  "MUS":{"lat":-20.17,"lng":57.49},"LSO":{"lat":-29.32,"lng":27.48},"SWZ":{"lat":-26.32,"lng":31.13},
  "BWA":{"lat":-24.65,"lng":25.91},"CPV":{"lat":14.92,"lng":-23.51},"GNB":{"lat":11.86,"lng":-15.58},
  "GIN":{"lat":9.51,"lng":-13.71},"MLI":{"lat":12.65,"lng":-8.00},"NER":{"lat":13.52,"lng":2.12},
  "TCD":{"lat":12.10,"lng":15.03},"MRT":{"lat":18.09,"lng":-15.98},"GMB":{"lat":13.45,"lng":-16.58},
  "TGO":{"lat":6.12,"lng":1.23},"BEN":{"lat":6.37,"lng":2.42},"CAF":{"lat":4.37,"lng":18.56},
  "GNQ":{"lat":3.75,"lng":8.78},"BDI":{"lat":-3.38,"lng":29.36},"SSD":{"lat":4.85,"lng":31.58},
  "ISL":{"lat":64.14,"lng":-21.90},"SVK":{"lat":48.14,"lng":17.11},"SVN":{"lat":46.05,"lng":14.51},
  "MLT":{"lat":35.90,"lng":14.51},"CYP":{"lat":35.17,"lng":33.37},"LIE":{"lat":47.14,"lng":9.52},
  "MCO":{"lat":43.73,"lng":7.42},"SMR":{"lat":43.94,"lng":12.45},"TLS":{"lat":-8.55,"lng":125.58},
  "VUT":{"lat":-17.73,"lng":168.32},"WSM":{"lat":-13.81,"lng":-171.77},"TON":{"lat":-21.18,"lng":-175.20},
  "FJI":{"lat":-18.14,"lng":178.44},"SLB":{"lat":-9.43,"lng":160.03},"BRN":{"lat":4.94,"lng":114.94},
  "MDV":{"lat":4.17,"lng":73.51},"OMN":{"lat":23.61,"lng":58.59},"BHR":{"lat":26.22,"lng":50.58},
  "TTO":{"lat":10.65,"lng":-61.52},"TUN":{"lat":36.82,"lng":10.17},"TWN":{"lat":25.05,"lng":121.53}
};

// ── Utils ────────────────────────────────────────────────────
function esc(s) {
  const d = document.createElement("div"); d.textContent = s || ""; return d.innerHTML;
}

function displayId(m) {
  return m.public_id || String(m.id);
}

function resolveCoords(m) {
  if (m.lat != null && m.lng != null) return { lat: m.lat, lng: m.lng };
  const iso3 = (m.country_code?.trim().toUpperCase()) ||
               (m.country && nameToIso3[m.country.toLowerCase().trim()]);
  return iso3 && capitalCoords[iso3] ? capitalCoords[iso3] : null;
}

// ── Success Modal ─────────────────────────────────────────────
function showSuccessModal() {
  const modal = document.getElementById("successModal");
  if (!modal) return;

  const titleEl = modal.querySelector(".smodal-title");
  const body1El = modal.querySelector(".smodal-body1");
  const body2El = modal.querySelector(".smodal-body2");
  const btnEl   = modal.querySelector(".smodal-btn");
  if (titleEl) titleEl.textContent = t("successTitle");
  if (body1El) body1El.textContent = t("successBody1");
  if (body2El) body2El.textContent = t("successBody2");
  if (btnEl)   btnEl.textContent   = t("successBtn");

  modal.classList.add("open");

  const steam = modal.querySelector(".smodal-steam");
  if (steam) {
    steam.innerHTML = "";
    for (let i = 0; i < 6; i++) {
      const p = document.createElement("span");
      p.className = "steam-particle";
      p.style.cssText = `left:${30 + i * 8}%;animation-delay:${i * 0.3}s;animation-duration:${1.8 + i * 0.2}s`;
      steam.appendChild(p);
    }
  }
}

function hideSuccessModal() {
  const modal = document.getElementById("successModal");
  if (modal) modal.classList.remove("open");
}

// ── Globe ────────────────────────────────────────────────────
const globeEl = document.getElementById("globe");
function getGlobeDimensions() {
  const s = globeEl.closest(".globe-section") || globeEl.parentElement;
  return { w: s?.clientWidth || 600, h: s?.clientHeight || 600 };
}
const { w: initW, h: initH } = getGlobeDimensions();
globeEl.style.width  = initW + "px";
globeEl.style.height = initH + "px";

const globe = Globe()(globeEl)
  .width(initW).height(initH)
  .globeImageUrl("//unpkg.com/three-globe/example/img/earth-dark.jpg")
  .backgroundColor("#000000")
  .pointOfView({ lat: 20, lng: -20, altitude: 2.5 });

globe.controls().autoRotate      = true;
globe.controls().autoRotateSpeed = 0.6;

globeEl.addEventListener("mousedown",  () => { globe.controls().autoRotate = false; });
globeEl.addEventListener("touchstart", () => { globe.controls().autoRotate = false; });
let rotateTimer;
["mouseup", "touchend"].forEach(ev => globeEl.addEventListener(ev, () => {
  clearTimeout(rotateTimer);
  rotateTimer = setTimeout(() => { globe.controls().autoRotate = true; }, 3000);
}));
window.addEventListener("resize", () => {
  const { w, h } = getGlobeDimensions();
  globeEl.style.width = w + "px"; globeEl.style.height = h + "px";
  globe.width(w).height(h);
});

// ── GPS ──────────────────────────────────────────────────────
function initGPS() {
  const statusEl  = document.getElementById("gpsStatus");
  const latIn     = document.getElementById("lat");
  const lngIn     = document.getElementById("lng");
  const ccIn      = document.getElementById("countryCode");
  const countryIn = document.getElementById("country");

  if (!navigator.geolocation) { statusEl.textContent = t("gpsNoGps"); return; }
  statusEl.textContent = t("gpsDetecting");
  countryIn.readOnly   = true;

  navigator.geolocation.getCurrentPosition(pos => {
    latIn.value = pos.coords.latitude.toFixed(4);
    lngIn.value = pos.coords.longitude.toFixed(4);
    statusEl.textContent = `📍 ${latIn.value}, ${lngIn.value}`;
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`,
      { headers: { "User-Agent": "200Mates/1.0" } }
    )
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(d => {
      const cc   = d?.address?.country_code?.toUpperCase();
      const name = d?.address?.country || "";
      const iso3 = iso2ToIso3[cc] || "";
      if (name && iso3) {
        countryIn.value    = name;
        countryIn.readOnly = true;
        ccIn.value         = iso3;
        countryIn.style.background = "rgba(74,103,65,.1)";
      } else throw new Error();
    })
    .catch(() => {
      countryIn.readOnly   = false;
      statusEl.textContent += t("gpsManual");
    });
  },
  () => {
    countryIn.readOnly   = false;
    statusEl.textContent = t("gpsNoPermission");
  },
  { enableHighAccuracy: true, timeout: 10000 });
}

// ── Geo ──────────────────────────────────────────────────────
fetch("https://unpkg.com/world-atlas@2/countries-110m.json")
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(world => {
    const raw = topojson.feature(world, world.objects.countries).features;
    countriesGeo = raw.map(f => ({
      ...f, iso3: numericToIso3[String(parseInt(f.id, 10))] || null
    }));
    renderPolygons();
  });

// ── Load mates ────────────────────────────────────────────────
async function loadMates() {
  try {
    const { data, error } = await sb
      .from("mates")
      .select("*")
      .not("approved", "eq", false)
      .order("created_at", { ascending: false });

    if (error) throw error;

    allMates = data || [];

    const matesWithCoords = allMates
      .map(m => { const c = resolveCoords(m); return c ? { ...m, ...c } : null; })
      .filter(Boolean);

    countriesColored = [...new Set(allMates.map(m => {
      if (m.country_code) return m.country_code.toUpperCase().trim();
      if (m.country)      return nameToIso3[m.country.toLowerCase().trim()] || null;
      return null;
    }).filter(Boolean))];

    renderPolygons();

    const ids = matesWithCoords.map(m => m.id).join(",");
    if (ids !== lastMarkerIds) {
      lastMarkerIds = ids;
      renderMarkers(matesWithCoords);
    }
    renderArcs(matesWithCoords);
    renderGallery();
    updateStats();

    if (matesWithCoords.length > 0)
      globe.pointOfView({ lat: matesWithCoords[0].lat, lng: matesWithCoords[0].lng, altitude: 2 }, 1000);

  } catch (err) {
    console.error("loadMates error:", err);
    const gallery = document.getElementById("gallery");
    if (gallery) gallery.innerHTML = `<p class="error-msg">⚠️ ${t("errorLoading")}</p>`;
  }
}

// ── Country select ────────────────────────────────────────────
let selectedIso3 = null;
function selectCountry(f) {
  const iso3 = f.iso3; if (!iso3) return;
  selectedIso3 = iso3;
  const entry  = Object.entries(nameToIso3).find(([, v]) => v === iso3);
  const pretty = (entry?.[0] || iso3).replace(/\b\w/g, c => c.toUpperCase());
  const ci     = document.getElementById("country");
  ci.value     = pretty; ci.readOnly = false;
  document.getElementById("countryCode").value = iso3;
  const cap = capitalCoords[iso3];
  if (cap) {
    if (!document.getElementById("lat").value) document.getElementById("lat").value = cap.lat;
    if (!document.getElementById("lng").value) document.getElementById("lng").value = cap.lng;
    globe.pointOfView({ lat: cap.lat, lng: cap.lng, altitude: 2 }, 800);
  }
  const s = document.getElementById("gpsStatus");
  s.textContent      = `${t("gpsSelected")}${pretty}`;
  s.style.color       = "#8aad5e";
  s.style.borderColor = "rgba(138,173,94,.4)";
  renderPolygons();
}

// ── Polygons ──────────────────────────────────────────────────
function renderPolygons() {
  if (!countriesGeo.length) return;
  if (polyTimer) clearTimeout(polyTimer);
  polyTimer = setTimeout(() => {
    const colored = [...countriesColored], sel = selectedIso3;
    globe
      .polygonsData([])
      .polygonCapColor(d =>
        sel && d.iso3 === sel    ? "#c8a46e" :
        colored.includes(d.iso3) ? "#6A8F60" :
        "rgba(255,255,255,.04)"
      )
      .polygonSideColor(()  => "rgba(0,0,0,.2)")
      .polygonStrokeColor(() => "#2a2e24")
      .polygonAltitude(d =>
        sel && d.iso3 === sel    ? .02 :
        colored.includes(d.iso3) ? .012 :
        0
      )
      .onPolygonClick(p => { globe.controls().autoRotate = false; selectCountry(p); })
      .onPolygonHover(h => { globeEl.style.cursor = h ? "pointer" : "default"; })
      .polygonsData(countriesGeo.slice());
  }, 60);
}

// ── Photo URL ─────────────────────────────────────────────────
function getPhotoUrl(path) {
  if (!path) return null;
  const { data } = sb.storage.from("mate-photos").getPublicUrl(path);
  return data?.publicUrl || null;
}

// ── Markers ───────────────────────────────────────────────────
function applyJitter(mates) {
  const groups = {};
  mates.forEach((m, i) => {
    const k = `${m.lat.toFixed(1)},${m.lng.toFixed(1)}`;
    if (!groups[k]) groups[k] = [];
    groups[k].push({ ...m, _uid: `${m.id}_${i}` });
  });
  const out = [];
  Object.values(groups).forEach(g => {
    if (g.length === 1) { out.push(g[0]); return; }
    g.forEach((m, i) => {
      const a = (i / g.length) * 2 * Math.PI;
      out.push({ ...m, lat: m.lat + 1.2 * Math.cos(a), lng: m.lng + 1.2 * Math.sin(a) });
    });
  });
  return out;
}

function renderMarkers(mates) {
  const dispersed = applyJitter(mates);
  globe
    .htmlElementsData(dispersed)
    .htmlLat(d => d.lat).htmlLng(d => d.lng)
    .htmlAltitude(0.012).htmlTransitionDuration(0)
    .htmlElement(d => {
      const photoUrl = getPhotoUrl(d.photo_path);
      const wrapper  = document.createElement("div");
      wrapper.style.cssText = "position:relative;display:flex;flex-direction:column;align-items:center;pointer-events:auto;";

      const card = document.createElement("div");
      card.style.cssText = `position:absolute;bottom:36px;left:50%;transform:translateX(-50%) scale(.85);opacity:0;pointer-events:none;transition:opacity .18s,transform .18s;background:rgba(10,12,8,.96);border:1px solid rgba(138,173,94,.35);border-radius:12px;overflow:hidden;width:160px;box-shadow:0 8px 32px rgba(0,0,0,.8);z-index:9999;`;

      if (photoUrl) {
        const img = document.createElement("img");
        img.src = photoUrl;
        img.style.cssText = "width:160px;height:110px;object-fit:cover;display:block;";
        img.onerror = () => img.style.display = "none";
        card.appendChild(img);
      }

      const info = document.createElement("div");
      info.style.cssText = "padding:8px 10px;";
      info.innerHTML = `
        <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:600;color:#e8e4da;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(d.name || t("anonymous"))}</div>
        ${d.country ? `<div style="font-size:10px;color:#9a9888;margin-top:2px">🌍 ${esc(d.country)}</div>` : ""}
        ${d.brand   ? `<div style="font-size:10px;color:#8aad5e;margin-top:2px">🌿 ${esc(d.brand)}</div>`   : ""}
        <div style="font-size:9px;color:#5a5a4e;margin-top:3px">${esc(displayId(d))}</div>
      `;
      card.appendChild(info);

      const emoji = document.createElement("div");
      emoji.textContent = "🧉";
      emoji.style.cssText = "font-size:22px;cursor:pointer;transition:transform .15s;user-select:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.6))";

      wrapper.appendChild(card);
      wrapper.appendChild(emoji);

      wrapper.addEventListener("mouseenter", () => {
        card.style.opacity    = "1";
        card.style.transform  = "translateX(-50%) scale(1)";
        emoji.style.transform = "scale(1.35)";
        globe.controls().autoRotate = false;
      });
      wrapper.addEventListener("mouseleave", () => {
        card.style.opacity    = "0";
        card.style.transform  = "translateX(-50%) scale(.85)";
        emoji.style.transform = "scale(1)";
      });
      wrapper.addEventListener("click", () => openLightbox(d));

      return wrapper;
    });
}

// ── Arcs ─────────────────────────────────────────────────────
function renderArcs(mates) {
  if (arcInterval) { clearInterval(arcInterval); arcInterval = null; }
  if (mates.length < 2) { globe.arcsData([]); return; }
  let i = 0;
  function next() {
    const idx = i % (mates.length - 1);
    globe
      .arcsData([{ startLat: mates[idx].lat, startLng: mates[idx].lng, endLat: mates[idx+1].lat, endLng: mates[idx+1].lng }])
      .arcColor(()    => ["rgba(106,143,96,.6)", "rgba(200,164,110,.6)"])
      .arcAltitudeAutoScale(0.4).arcStroke(0.5)
      .arcDashLength(0.4).arcDashGap(0.2).arcDashAnimateTime(2500);
    i++;
  }
  next();
  arcInterval = setInterval(next, 2500);
}

// ── Lightbox ──────────────────────────────────────────────────
const lightbox = document.getElementById("lightbox");
const lbImg    = document.getElementById("lightboxImg");
const lbInfo   = document.getElementById("lightboxInfo");

function openLightbox(d) {
  const pid = displayId(d);
  lbImg.src = getPhotoUrl(d.photo_path) || "placeholder.png";
  lbInfo.innerHTML = `
    <span class="lb-name">${esc(d.name || t("anonymous"))}</span>
    ${d.country ? `<span class="lb-country">🌍 ${esc(d.country)}</span>`     : ""}
    ${d.brand   ? `<span class="lb-detail">🌿 ${esc(d.brand)}</span>`        : ""}
    <div class="lb-id">
      <span>${esc(t("mateId"))}<strong>${esc(pid)}</strong></span>
      <button class="lb-id-copy" data-pid="${esc(pid)}">${t("copyId")}</button>
    </div>
    <div class="delete-note">${esc(t("deleteNote"))}</div>
  `;
  const copyBtn = lbInfo.querySelector(".lb-id-copy");
  copyBtn?.addEventListener("click", () => {
    navigator.clipboard.writeText(pid).then(() => {
      copyBtn.textContent = t("copied");
      copyBtn.classList.add("copied");
      setTimeout(() => { copyBtn.textContent = t("copyId"); copyBtn.classList.remove("copied"); }, 2000);
    }).catch(() => { copyBtn.textContent = pid; });
  });
  lightbox.style.display = "flex";
}

document.getElementById("lightboxClose").addEventListener("click", () => lightbox.style.display = "none");
document.getElementById("lightboxBg").addEventListener("click",    () => lightbox.style.display = "none");

// ── Stats counter ─────────────────────────────────────────────
function animateCount(el, target) {
  if (!el) return;
  const start    = parseInt(el.textContent) || 0;
  const duration = 600;
  const startTs  = performance.now();
  const step = ts => {
    const p    = Math.min((ts - startTs) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(start + (target - start) * ease);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function updateStats() {
  animateCount(document.getElementById("statMates"),     allMates.length);
  animateCount(document.getElementById("statCountries"), countriesColored.length);
}

// ── Gallery ───────────────────────────────────────────────────
function renderGallery() {
  const el = document.getElementById("gallery"); if (!el) return;
  const recent = allMates.slice(0, 3);
  if (!recent.length) {
    el.innerHTML = `<p class="no-mates">${t("noMates")}</p>`;
    return;
  }
  el.innerHTML = recent.map((m, i) => {
    const url = getPhotoUrl(m.photo_path);
    return `<div class="gallery-card" style="animation-delay:${i * .08}s">
      <img src="${esc(url || "placeholder.png")}" onerror="this.src='placeholder.png'" alt="mate">
      <div class="gallery-info">
        <span class="gallery-name">${esc(m.name || t("anonymous"))}</span>
        <span class="gallery-country">${esc(m.country || "")}</span>
      </div>
    </div>`;
  }).join("");
  el.querySelectorAll(".gallery-card").forEach((c, i) =>
    c.addEventListener("click", () => openLightbox(recent[i]))
  );
}

// ── Prep toggle ───────────────────────────────────────────────
document.querySelectorAll(".prep-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".prep-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("preparation").value = btn.dataset.val;
  });
});

// ── File preview ──────────────────────────────────────────────
document.getElementById("photo").addEventListener("change", e => {
  const file = e.target.files[0]; if (!file) return;
  const preview = document.getElementById("photoPreview");
  const inner   = document.getElementById("fileDropInner");
  const r = new FileReader();
  r.onload = ev => {
    preview.src           = ev.target.result;
    preview.style.display = "block";
    inner.style.display   = "none";
  };
  r.readAsDataURL(file);
});
const fileDrop = document.getElementById("fileDrop");
fileDrop.addEventListener("dragover",  e => { e.preventDefault(); fileDrop.classList.add("drag-over"); });
fileDrop.addEventListener("dragleave", () => fileDrop.classList.remove("drag-over"));
fileDrop.addEventListener("drop",      e => { e.preventDefault(); fileDrop.classList.remove("drag-over"); });

// ── Form submit ───────────────────────────────────────────────
document.getElementById("mateForm").addEventListener("submit", async e => {
  e.preventDefault();
  const name        = document.getElementById("name").value.trim();
  const country     = document.getElementById("country").value.trim();
  const brand       = document.getElementById("brand").value.trim();
  const preparation = document.getElementById("preparation").value;
  const mate_type   = document.getElementById("mate_type").value.trim();
  const photo       = document.getElementById("photo").files[0];
  let lat           = parseFloat(document.getElementById("lat").value);
  let lng           = parseFloat(document.getElementById("lng").value);
  let countryCode   = document.getElementById("countryCode").value;

  if (!name || !country || !brand || !photo) { alert(t("alertRequired")); return; }

  if (isNaN(lat) || isNaN(lng)) {
    const iso3 = countryCode || nameToIso3[country.toLowerCase().trim()];
    if (iso3) {
      countryCode = iso3;
      const cap = capitalCoords[iso3];
      if (cap) { lat = cap.lat; lng = cap.lng; }
    }
  }
  if (!countryCode) {
    const iso3 = nameToIso3[country.toLowerCase().trim()];
    if (iso3) countryCode = iso3;
  }

  const btn     = document.getElementById("submitBtn");
  const btnText = document.getElementById("submitBtnText");
  const btnLoad = document.getElementById("submitBtnLoader");
  btn.disabled = true; btnText.style.display = "none"; btnLoad.style.display = "flex";

  try {
    const ext      = photo.name.split(".").pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
    const { error: ue } = await sb.storage.from("mate-photos").upload(fileName, photo, { contentType: photo.type });
    if (ue) throw ue;
    const { error: ie } = await sb.from("mates").insert([{
      name, country, country_code: countryCode || null,
      brand, preparation,
      mate_type:  mate_type || null,
      photo_path: fileName,
      lat: isNaN(lat) ? null : lat,
      lng: isNaN(lng) ? null : lng,
      approved: null
    }]);
    if (ie) throw ie;
    if (!isNaN(lat) && !isNaN(lng)) globe.pointOfView({ lat, lng, altitude: 2 }, 1000);

    showSuccessModal();

    e.target.reset();
    document.getElementById("photoPreview").style.display = "none";
    document.getElementById("fileDropInner").style.display = "flex";
    document.getElementById("gpsStatus").textContent = t("gpsRequesting");
    initGPS();
  } catch (err) {
    console.error(err);
    alert(`${t("alertError")}${err.message}`);
  } finally {
    btn.disabled = false; btnText.style.display = ""; btnLoad.style.display = "none";
  }
});

// ── Success modal close ───────────────────────────────────────
document.getElementById("successModalBg")?.addEventListener("click", hideSuccessModal);
document.querySelector(".smodal-btn")?.addEventListener("click", hideSuccessModal);

// ── Language switcher ─────────────────────────────────────────
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    document.querySelectorAll(".lang-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    document.documentElement.lang = currentLang;
    applyI18n();
  });
});

// ── Dropdown menu ─────────────────────────────────────────────
const hamburgerBtn = document.getElementById("hamburgerBtn");
const dropMenu     = document.getElementById("dropMenu");
const dropBackdrop = document.getElementById("dropBackdrop");

function activateTab(tabId) {
  document.querySelectorAll(".drop-tab, .drop-foot-btn").forEach(el => {
    el.classList.toggle("active", el.dataset.tab === tabId);
  });
  document.querySelectorAll(".drop-pane").forEach(p => {
    p.classList.toggle("active", p.id === "tab-" + tabId);
  });
}
function positionPanel() {
  const rect  = hamburgerBtn.getBoundingClientRect();
  const panel = dropMenu.querySelector(".drop-panel");
  const topPos = rect.bottom + 8;
  panel.style.top     = topPos + "px";
  panel.style.left    = rect.left + "px";
  panel.style.right   = "auto";
  panel.style.maxHeight = (window.innerHeight - topPos - 12) + "px";
}

function openMenu(tabId) {
  positionPanel();
  dropMenu.classList.add("open");
  hamburgerBtn.classList.add("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "true");
  if (tabId) activateTab(tabId);
}
function closeMenu() {
  dropMenu.classList.remove("open");
  hamburgerBtn.classList.remove("is-open");
  hamburgerBtn.setAttribute("aria-expanded", "false");
}

hamburgerBtn.addEventListener("click", () => {
  dropMenu.classList.contains("open") ? closeMenu() : openMenu();
});
dropBackdrop.addEventListener("click", closeMenu);

document.querySelectorAll(".drop-tab").forEach(tab => {
  tab.addEventListener("click", () => activateTab(tab.dataset.tab));
});
document.querySelectorAll(".drop-foot-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!dropMenu.classList.contains("open")) openMenu(btn.dataset.tab);
    else activateTab(btn.dataset.tab);
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeMenu(); lightbox.style.display = "none"; }
});

// ── Boot ─────────────────────────────────────────────────────
applyI18n();
initGPS();
loadMates();
setInterval(loadMates, 30_000);