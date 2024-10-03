export type TimezoneType =
  | "UTC" // Coordinated Universal Time
  | "America/New_York" // Eastern Standard Time
  | "America/Tortola"
  | "America/Thule"
  | "America/Thunder_Bay"
  | "America/Tijuana"
  | "America/Sitka"
  | "America/St_Barthelemy"
  | "America/St_Johns"
  | "America/St_Kitts"
  | "America/St_Lucia"
  | "America/St_Thomas"
  | "America/St_Vincent"
  | "America/Chicago" // Central Standard Time
  | "America/Denver" // Mountain Standard Time
  | "America/Los_Angeles" // Pacific Standard Time
  | "America/Adak" // Aleutian Standard Time
  | "America/Anchorage" // Alaska Standard Time
  | "America/Anguilla" // Atlantic Standard Time
  | "America/Antigua" // Atlantic Standard Time
  | "America/Argentina/Buenos_Aires" // Argentina Time
  | "America/Argentina/Catamarca" // Argentina Time
  | "America/Argentina/ComodRivadavia" // Argentina Time
  | "America/Argentina/Cordoba" // Argentina Time
  | "America/Argentina/Jujuy" // Argentina Time
  | "America/Argentina/La_Rioja" // Argentina Time
  | "America/Argentina/Mendoza" // Argentina Time
  | "America/Argentina/Rio_Gallegos" // Argentina Time
  | "America/Argentina/Salta" // Argentina Time
  | "America/Argentina/San_Juan" // Argentina Time
  | "America/Argentina/San_Luis" // Argentina Time
  | "America/Argentina/Tucuman" // Argentina Time
  | "America/Argentina/Ushuaia" // Argentina Time
  | "America/Aruba" // Atlantic Standard Time
  | "America/Asuncion" // Paraguay Time
  | "America/Atikokan" // Eastern Standard Time
  | "America/Barbados" // Atlantic Standard Time
  | "America/Belize" // Central Standard Time
  | "America/Bogota" // Colombia Time
  | "America/Boise" // Mountain Daylight Time
  | "America/Cambridge_Bay" // Central Daylight Time
  | "America/Campo_Grande" // Brazil Time
  | "America/Cancun" // Eastern Standard Time
  | "America/Caracas" // Venezuela Time
  | "America/Chicago" // Central Standard Time
  | "America/Chihuahua" // Mountain Standard Time
  | "America/Colombia" // Colombia Time
  | "America/Detroit" // Eastern Daylight Time
  | "America/Dominica" // Atlantic Standard Time
  | "America/Edmonton" // Mountain Standard Time
  | "America/El_Salvador" // Central Standard Time
  | "America/Fortaleza" // Brazil Time
  | "America/Glace_Bay" // Atlantic Standard Time
  | "America/Goose_Bay" // Atlantic Standard Time
  | "America/Grand_Turk" // Eastern Daylight Time
  | "America/Grenada" // Atlantic Standard Time
  | "America/Guadaloupe" // Atlantic Standard Time
  | "America/Guatemala" // Central Standard Time
  | "America/Guayaquil" // Ecuador Time
  | "America/Guyana" // Guyana Time
  | "America/Halifax" // Atlantic Standard Time
  | "America/Havana" // Cuba Time
  | "America/Indiana/Indianapolis" // Eastern Daylight Time
  | "America/Indiana/Knox" // Central Daylight Time
  | "America/Indiana/Marengo" // Eastern Daylight Time
  | "America/Indiana/Petersburg" // Eastern Daylight Time
  | "America/Indiana/Tell_City" // Central Daylight Time
  | "America/Indiana/Vincennes" // Eastern Daylight Time
  | "America/Indiana/Winamac" // Eastern Daylight Time
  | "America/Indianapolis" // Eastern Daylight Time
  | "America/Inuvik" // Mountain Daylight Time
  | "America/Iqaluit" // Eastern Daylight Time
  | "America/Jamaica" // Eastern Standard Time
  | "America/Juneau" // Alaska Daylight Time
  | "America/Kentucky/Louisville" // Eastern Daylight Time
  | "America/Kentucky/Monticello" // Eastern Daylight Time
  | "America/Konakry" // Guinea Time
  | "America/La_Paz" // Bolivia Time
  | "America/Lima" // Peru Time
  | "America/Los_Angeles" // Pacific Daylight Time
  | "America/Maceio" // Brazil Time
  | "America/Managua" // Nicaragua Time
  | "America/Manaus" // Brazil Time
  | "America/Moncton" // Atlantic Standard Time
  | "America/Monterrey" // Central Daylight Time
  | "America/Montevideo" // Uruguay Time
  | "America/New_York" // Eastern Daylight Time
  | "America/Noronha" // Brazil Time
  | "America/North_Dakota/Beulah" // Central Daylight Time
  | "America/North_Dakota/Center" // Central Daylight Time
  | "America/North_Dakota/New_Salem" // Central Daylight Time
  | "America/Ojinaga" // Mountain Standard Time
  | "America/Panama" // Eastern Standard Time
  | "America/Phoenix" // Mountain Standard Time
  | "America/Port-au-Prince" // Eastern Daylight Time
  | "America/Porto_Velho" // Brazil Time
  | "America/Puerto_Rico" // Atlantic Standard Time
  | "America/Regina" // Central Standard Time
  | "America/Rio_Branco" // Brazil Time
  | "America/Santa_Isabel" // Central Standard Time
  | "America/Santiago" // Chile Time
  | "America/Sao_Paulo" // Brazil Time
  | "America/Scoresbysund" // Greenland Time
  | "America/Tegucigalpa" // Central Standard Time
  | "America/Toronto" // Eastern Daylight Time
  | "America/Vancouver" // Pacific Daylight Time
  | "America/Whitehorse" // Mountain Standard Time
  | "America/Winnipeg" // Central Standard Time
  | "America/Yakutat" // Alaska Daylight Time
  | "America/Yellowknife" // Mountain Standard Time
  | "Antarctica/Casey" // Casey Time
  | "Antarctica/Davis" // Davis Time
  | "Antarctica/DumontDUrville" // Dumont d'Urville Time
  | "Antarctica/McMurdo" // New Zealand Time
  | "Antarctica/Syowa" // Syowa Time
  | "Antarctica/Troll" // Troll Time
  | "Antarctica/Vostok" // Vostok Time
  | "Arctic/Longyearbyen" // Longyearbyen Time
  | "Asia/Almaty" // Kazakhstan Time
  | "Asia/Amman" // Jordan Time
  | "Asia/Aqtau" // Kazakhstan Time
  | "Asia/Aqtobe" // Kazakhstan Time
  | "Asia/Ashgabat" // Turkmenistan Time
  | "Asia/Ashkhabad" // Turkmenistan Time
  | "Asia/Baghdad" // Iraq Time
  | "Asia/Baku" // Azerbaijan Time
  | "Asia/Bangkok" // Thailand Time
  | "Asia/Beirut" // Lebanon Time
  | "Asia/Bishkek" // Kyrgyzstan Time
  | "Asia/Brunei" // Brunei Time
  | "Asia/Chita" // Chita Time
  | "Asia/Chongqing" // China Time
  | "Asia/Colombo" // Sri Lanka Time
  | "Asia/Dhaka" // Bangladesh Time
  | "Asia/Dili" // Timor-Leste Time
  | "Asia/Dubai" // UAE Time
  | "Asia/Dushanbe" // Tajikistan Time
  | "Asia/Famagusta" // Cyprus Time
  | "Asia/Gaza" // Gaza Time
  | "Asia/Hebron" // Palestine Time
  | "Asia/Hong_Kong" // Hong Kong Time
  | "Asia/Irkutsk" // Russia Time
  | "Asia/Jakarta" // Indonesia Time
  | "Asia/Jerusalem" // Israel Time
  | "Asia/Kabul" // Afghanistan Time
  | "Asia/Kamchatka" // Russia Time
  | "Asia/Karachi" // Pakistan Time
  | "Asia/Kathmandu" // Nepal Time
  | "Asia/Kuala_Lumpur" // Malaysia Time
  | "Asia/Kuching" // Malaysia Time
  | "Asia/Magadan" // Russia Time
  | "Asia/Makassar" // Indonesia Time
  | "Asia/Muscat" // Oman Time
  | "Asia/Nicosia" // Cyprus Time
  | "Asia/Novokuznetsk" // Russia Time
  | "Asia/Novosibirsk" // Russia Time
  | "Asia/Omsk" // Russia Time
  | "Asia/Oral" // Kazakhstan Time
  | "Asia/Phnom_Penh" // Cambodia Time
  | "Asia/Pontianak" // Indonesia Time
  | "Asia/Qatar" // Qatar Time
  | "Asia/Qyzylorda" // Kazakhstan Time
  | "Asia/Riyadh" // Saudi Arabia Time
  | "Asia/Sakhalin" // Russia Time
  | "Asia/Samarkand" // Uzbekistan Time
  | "Asia/Seoul" // South Korea Time
  | "Asia/Shanghai" // China Time
  | "Asia/Singapore" // Singapore Time
  | "Asia/Taipei" // Taiwan Time
  | "Asia/Tashkent" // Uzbekistan Time
  | "Asia/Tbilisi" // Georgia Time
  | "Asia/Tehran" // Iran Time
  | "Asia/Thimphu" // Bhutan Time
  | "Asia/Tokyo" // Japan Standard Time
  | "Asia/Tomsk" // Russia Time
  | "Asia/Ulaanbaatar" // Mongolia Time
  | "Asia/Urumqi" // China Time
  | "Asia/Vientiane" // Laos Time
  | "Asia/Vladivostok" // Russia Time
  | "Asia/Yangon" // Myanmar Time
  | "Asia/Yekaterinburg" // Russia Time
  | "Asia/Yerevan" // Armenia Time
  | "Atlantic/Azores" // Azores Time
  | "Atlantic/Bermuda" // Bermuda Time
  | "Atlantic/Canary" // Canary Islands Time
  | "Atlantic/Cape_Verde" // Cape Verde Time
  | "Atlantic/Faeroe" // Faroe Islands Time
  | "Atlantic/Faroe" // Faroe Islands Time
  | "Atlantic/Madeira" // Madeira Time
  | "Atlantic/Reykjavik" // Iceland Time
  | "Atlantic/South_Georgia" // South Georgia Time
  | "Atlantic/St_Helena" // St. Helena Time
  | "Atlantic/Stanley" // Falkland Islands Time
  | "Australia/Adelaide" // Australia Central Daylight Time
  | "Australia/Brisbane" // Australia Eastern Standard Time
  | "Australia/Broken_Hill" // Australia Central Daylight Time
  | "Australia/Currie" // Australia Eastern Daylight Time
  | "Australia/Darwin" // Australia Central Standard Time
  | "Australia/Eucla" // Australia Central Western Standard Time
  | "Australia/Hobart" // Australia Eastern Daylight Time
  | "Australia/Lindeman" // Australia Eastern Standard Time
  | "Australia/Melbourne" // Australia Eastern Daylight Time
  | "Australia/Perth" // Australia Western Standard Time
  | "Australia/Sydney" // Australia Eastern Daylight Time
  | "Australia/Tasmania" // Australia Eastern Daylight Time
  | "Australia/Canberra" // Australia Eastern Daylight Time
  | "Australia/Gold_Coast" // Australia Eastern Daylight Time
  | "Australia/Heathcote" // Australia Eastern Daylight Time
  | "Australia/North" // Australia Central Daylight Time
  | "Australia/South" // Australia Central Daylight Time
  | "Pacific/Apia" // Samoa Time
  | "Pacific/Auckland" // New Zealand Time
  | "Pacific/Bougainville" // Bougainville Time
  | "Pacific/Chatham" // Chatham Islands Time
  | "Pacific/Efate" // Vanuatu Time
  | "Pacific/Enderbury" // Phoenix Islands Time
  | "Pacific/Fakaofo" // Tokelau Time
  | "Pacific/Fiji" // Fiji Time
  | "Pacific/Funafuti" // Tuvalu Time
  | "Pacific/Galapagos" // Galapagos Time
  | "Pacific/Gambier" // Gambier Islands Time
  | "Pacific/Guadalcanal" // Solomon Islands Time
  | "Pacific/Guam" // Guam Time
  | "Pacific/Honolulu" // Hawaii-Aleutian Standard Time
  | "Pacific/Kiritimati" // Line Islands Time
  | "Pacific/Majuro" // Marshall Islands Time
  | "Pacific/Midway" // Midway Islands Time
  | "Pacific/Nauru" // Nauru Time
  | "Pacific/Niue" // Niue Time
  | "Pacific/Norfolk" // Norfolk Island Time
  | "Pacific/Pago_Pago" // Samoa Time
  | "Pacific/Palau" // Palau Time
  | "Pacific/Pitcairn" // Pitcairn Islands Time
  | "Pacific/Ponape" // Pohnpei Time
  | "Pacific/Port_Moresby" // Papua New Guinea Time
  | "Pacific/Rarotonga" // Cook Islands Time
  | "Pacific/Saipan" // Northern Mariana Islands Time
  | "Pacific/Tahiti" // Tahiti Time
  | "Pacific/Tarawa" // Gilbert Islands Time
  | "Pacific/Tongatapu" // Tonga Time
  | "Pacific/Wake" // Wake Island Time
  | "Pacific/Wallis" // Wallis and Futuna Time
  | "Pacific/Wallis_and_Futuna" // Wallis and Futuna Time
  | "Pacific/Yap" // Yap Time;
  | "Africa/Abidjan"
  | "Africa/Accra"
  | "Africa/Addis_Ababa"
  | "Africa/Algiers"
  | "Africa/Asmera"
  | "Africa/Bamako"
  | "Africa/Bangui"
  | "Africa/Banjul"
  | "Africa/Bissau"
  | "Africa/Blantyre"
  | "Africa/Brazzaville"
  | "Africa/Bujumbura"
  | "Africa/Cairo"
  | "Africa/Casablanca"
  | "Africa/Ceuta"
  | "Africa/Conakry"
  | "Africa/Dakar"
  | "Africa/Dar_es_Salaam"
  | "Africa/Djibouti"
  | "Africa/Douala"
  | "Africa/El_Aaiun"
  | "Africa/Freetown"
  | "Africa/Gaborone"
  | "Africa/Harare"
  | "Africa/Johannesburg"
  | "Africa/Juba"
  | "Africa/Kampala"
  | "Africa/Khartoum"
  | "Africa/Kigali"
  | "Africa/Kinshasa"
  | "Africa/Lagos"
  | "Africa/Libreville"
  | "Africa/Lome"
  | "Africa/Luanda"
  | "Africa/Lusaka"
  | "Africa/Malabo"
  | "Africa/Maputo"
  | "Africa/Maseru"
  | "Africa/Mbabane"
  | "Africa/Nairobi"
  | "Africa/Ndjamena"
  | "Africa/Niamey"
  | "Africa/Nouakchott"
  | "Africa/Ouagadougou"
  | "Africa/Porto-Novo"
  | "Africa/Sao_Tome"
  | "Africa/Tunis"
  | "Africa/Windhoek"
  | "America/Araguaina"
  | "America/Avon"
  | "America/Bahia"
  | "America/Bahia_Banderas"
  | "America/Blanc-Sablon"
  | "America/Boa_Vista"
  | "America/Catamarca"
  | "America/Cayenne"
  | "America/Cayman"
  | "America/Coral_Harbour"
  | "America/Costa_Rica"
  | "America/Creston"
  | "America/Cuiaba"
  | "America/Curacao"
  | "America/Dawson"
  | "America/Dawson_Creek"
  | "America/Eirunepe"
  | "America/Godthab"
  | "America/Guadeloupe"
  | "America/Hermosillo"
  | "America/Marigot"
  | "America/Martinique"
  | "America/Matamoros"
  | "America/Mazatlan"
  | "America/Mendoza"
  | "America/Menominee"
  | "America/Merida"
  | "America/Mexico_City"
  | "America/Miquelon"
  | "America/Nassau"
  | "America/Nipigon"
  | "America/Nome"
  | "America/Rainy_River"
  | "America/Rankin_Inlet"
  | "America/Recife"
  | "America/Santarem"
  | "America/Santo_Domingo"
  | "America/Knox_IN"
  | "Asia/Kolkata";
