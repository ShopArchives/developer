
const appVersion = "7.5.1";
const appType = "Dev";

const endpoints = {
    MAIN: "https://api.yapper.shop/",
    VERSION: "v3",
    USERS: "/users/",
    XP_EVENTS: "/xp-events",
    XP_LEVELS: "/xp-levels",
    TRADING_CONFIG: "/trading-config",
    TRADING_PACK_CLAIM: "/trading-pack-claim/",

    DISCORD_LEAKED_CATEGORIES: "/discord-leaked-categories",

    CLAIMABLES_PUBLISHED: "/claimables/published/",
    CLAIMABLES_REDEEM: "/claimables/redeem/",
    CLAIMABLES_PURCHASE: "/claimables/purchase/"
};

const endpnts = {
    V4: "https://api.yapper.dev/v4",
    HEARTBEAT: "/heartbeat",
    EXPERIMENTS: "/experiments",
    USER: "/users/@me",
    USERS: "/users/",
    LOGIN: "/login",

    STABLE: "/stable",
    DEV: "/dev",
    CALLBACK: "/callback",

    CATEGORY: "/category/",
    CATEGORIES: "/categories",
    CATEGORIES_HOME: "/home",
    CATEGORIES_CATALOG: "/catalog",
    CATEGORIES_ORBS: "/orbs",
    CATEGORIES_MISC: "/miscellaneous",

    REVIEWS: "/reviews",
    REVIEWS_DELETED: "/reviews/",

    PRODUCT: "/product/",
    PRODUCTS: "/products",

    DISCORD_QUESTS: "/discord-quests",
}

const redneredAPI = endpoints.MAIN + endpoints.VERSION;
const APIV4 = endpnts.V4;

const item_types = {
    NONE: 100,
    AVATAR_DECORATION: 0,
    PROFILE_EFFECT: 1,
    NAMEPLATE: 2,
    PROFILE_FRAME: 3,
    BUNDLE: 1e3,
    VARIANTS_GROUP: 2e3,
    EXTERNAL_SKU: 3e3
};

const getItemTypeName = (id) => {
    const item_type_names = {
        100: "None",
        0: "Avatar Decoration",
        1: "Profile Effect",
        2: "Nameplate",
        3: "Profile Frame",
        1e3: "Bundle",
        2e3: "VARIANTS_GROUP",
        3e3: "External SKU"
    };

    return item_type_names[id] || "Unknown";
};

const category_types = {
    HERO: 0,
    FEATURED: 1,
    FEED: 2,
    WIDE_BANNER: 3,
    SHELF: 4,
    COUNTDOWN_TIMER: 5,
    IMMERSIVE_BANNER: 6,
    REWARD_HERO: 7,
    MARVEL_RIVALS_PROMOTIONAL_BANNER: 8,
    SOCIAL_LAYER_STOREFRONT_PROMOTIONAL_BANNER: 9,
    FRAMES_BANNER: 10,
    FRAMES_PRODUCT_SHELF: 11
};

const quest_reward_types = {
    REWARD_CODE: 1,
    IN_GAME: 2,
    COLLECTIBLE: 3,
    VIRTUAL_CURRENCY: 4,
    FRACTIONAL_PREMIUM: 5
}

const discord_categories = {
    FANTASY: "1144003461608906824",
    ANIME: "1144302037593497701",
    BREAKFAST: "1144054000099012659",
    DISXCORE: "1144058340327047249",
    FALL: "1157406994873991284",
    HALLOWEEN: "1157410718711304313",
    WINTER: "1174459301239197856",
    MONSTERS: "1179493515038818325",
    CYBERPUNK: "1197342727608746044",
    LUNAR_NEW_YEAR: "1202069709281828935",
    ELEMENTS: "1207046915880124426",
    ANIME_V2: "1212565175790473246",
    SPECIAL_EVENTS: "1217175518781243583",
    SPECIAL_EVENTS_2: "1309309974266118144",
    ADS: "1382445856384487567",
    SPRINGTOONS: "1217622942175727736",
    SHY: "1220513972189663413",
    LOFI_VIBES: "1228243842684162121",
    GALAXY: "1232029045928099922",
    FEELIN_RETRO: "1237649643073044491",
    PIRATES: "1237653589896200272",
    ARCADE: "1245086656973901894",
    TIDE: "1252404112650407998",
    DARK_FANTASY: "1256321669388308595",
    ROBERT: "1262491137386614805",
    STORM: "1265375293397270650",
    DOJO: "1266520267946201099",
    THE_VAULT: "1277733175191277721",
    AUTUMN_EQUINOX: "1282816432056569866",
    BAND: "1285465421339693076",
    SPOOKY_NIGHT: "1287835634089594972",
    CHANCE: "1293373563494993952",
    MYTHICAL_CREATURES: "1298033986811068497",
    WARRIOR: "1303490165284802580",
    KAWAII_MODE: "1306330663213072494",
    LOFI_GIRL: "1309668861943218229",
    WINTER_WONDERLAND: "1314020997204283476",
    FANTASY_V2: "1324454241254903829",
    STEAMPUNK: "1326333074241486859",
    PROGRESS: "1333278032999485461",
    RADIATE: "1336483992429658112",
    VALENTINES: "1333866045521395723",
    ORB: "1332505418219655258",
    ANIME_V3: "1341506445249609728",
    INSOMNIA: "1343751621364027462",
    NAMEPLATE_TEST: "1344802365307621427",
    AESPA: "1346499610977243196",
    NAMEPLATE: "1349849614353829990",
    HOLIDAYS: "1349486948942745691",
    SHENANIGANS: "1352407446500675708",
    CHIBI_CAFE: "1354894010849820852",
    GGEZ: "1357589632723849316",
    HELLO: "1365410896222097539",
    COZY_VALLEY: "1369434230962262128",
    RC_TEST: "1370467303782617118",
    LEAF: "1373015260595884082",
    NAMEPLATE_V2: "1377377712200744990",
    SPELL: "1379220459316445257",
    ZEN_PROTOCOL: "1366494385746874428",
    NAMEPLATES_V3: "1382845914355470457",
    ODDS: "1385035256133849130",
    SUMMER_BLISS: "1385050947985735701",
    PAPER: "1387888352891764947",
    PETAL: "1394404301496914173",
    TWO_SQUARED: "1395905165990694922",
    ROCK: "1400163655689043998",
    RAWR_XD: "1402782203099746314",
    SECRET_GARDEN: "1402783991349772371",
    LUNAR_ECLIPSE: "1409898408076116140",
    BOX: "1409898408392748561",
    NAMEPLATE_BONANZA: "1416443525192614001",
    TRICK_OR_TREAT: "1418326116485038320",
    WOODLAND_FRIENDS: "1420045363351654441",
    ITS_SHOWTIME: "1420052355516338216"
};

const category_client_overrides = [
    {
        sku_id: "1",
        animatedBanner: "https://cdn.discordapp.com/assets/content/6f72be1e45f627e6b43894ca7dcda02c2851a3120a643a85c5132e87af6b50c4.webm",
        animatedBanner__credits: "643945264868098049"
    },
    {
        sku_id: "4",
        addLogo: !0
    },
    {
        sku_id: discord_categories.ROBERT,
        showDarkBannerText: !0,
        modal_hero_banner: "https://cdn.yapper.shop/discord-assets/64.png"
    },
    {
        sku_id: discord_categories.BAND,
        animatedBanner: "https://cdn.discordapp.com/assets/content/7e328a07e057745faad2366c9ebdf03e2bd69d22dfe8d41c81a10d29a8de7cf7.png"
    },
    {
        sku_id: discord_categories.WARRIOR,
        animatedBanner: "https://cdn.discordapp.com/assets/content/db9fb34f490b777a6e9712b129f9e23ad930595d2df73ca85d2b54f247806e01.png"
    },
    {
        sku_id: discord_categories.KAWAII_MODE,
        showDarkBannerText: !0,
        heroBanner: {
            darker: !0,
            gradientLeft: "linear-gradient(284deg, rgba(228, 23, 180, 0.00) 29.64%, rgba(228, 23, 180, 0.30) 68.69%)",
            gradientRight: "linear-gradient(76deg, rgba(228, 23, 180, 0.00) 29.64%, rgba(228, 23, 180, 0.30) 68.69%)",
            animationSource: "https://cdn.discordapp.com/assets/collectibles/drops/kawaii_mode/hero_banner.webm"
        },
        animatedBanner: "https://cdn.discordapp.com/assets/collectibles/drops/kawaii_mode/banner_animated.webm"
    },
    {
        sku_id: discord_categories.LOFI_GIRL,
        heroBanner: {
            animationSource: "https://cdn.discordapp.com/assets/collectibles/drops/lofi_girl/hero_banner.webm"
        },
        animatedBanner: "https://cdn.discordapp.com/assets/collectibles/drops/lofi_girl/banner_animated.webm"
    }
];

const nameplate_palettes = {
    crimson: {
        "darkBackground": "#900007",
        "lightBackground": "#E7040F"
    },
    berry: {
        "darkBackground": "#893A99",
        "lightBackground": "#B11FCF"
    },
    sky: {
        "darkBackground": "#0080B7",
        "lightBackground": "#56CCFF"
    },
    teal: {
        "darkBackground": "#086460",
        "lightBackground": "#7DEED7"
    },
    forest: {
        "darkBackground": "#2D5401",
        "lightBackground": "#6AA624"
    },
    bubble_gum: {
        "darkBackground": "#DC3E97",
        "lightBackground": "#F957B3"
    },
    violet: {
        "darkBackground": "#730BC8",
        "lightBackground": "#972FED"
    },
    cobalt: {
        "darkBackground": "#0131C2",
        "lightBackground": "#4278FF"
    },
    clover: {
        "darkBackground": "#047B20",
        "lightBackground": "#63CD5A"
    },
    lemon: {
        "darkBackground": "#F6CD12",
        "lightBackground": "#FED400"
    },
    white: {
        "darkBackground": "#FFFFFF",
        "lightBackground": "#FFFFFF"
    }
};

const display_name_styles_fonts = {
    DEFAULT: 11,
    BANGERS: 1,
    BIO_RHYME: 2,
    CHERRY_BOMB: 3,
    CHICLE: 4,
    COMPAGNON: 5,
    MUSEO_MODERNO: 6,
    NEO_CASTEL: 7,
    PIXELIFY: 8,
    RIBES: 9,
    SINISTRE: 10,
    ZILLA_SLAB: 12
};

const display_name_styles_colors = {
    SOLID: 1,
    GRADIENT: 2,
    NEON: 3,
    TOON: 4,
    POP: 5,
    GLOW: 6
};

const experiments = [
    {
        title: `Disable XP`,
        codename: `disable_xp`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    },
    {
        title: `Client Side Currency Changer`,
        codename: `client_side_currency_changer`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    },
    {
        title: `Use Bundle Preview Assets`,
        codename: `use_bundle_preview_assets`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    },
    {
        title: `Product Assets Tab`,
        codename: `product_assets_tab`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled w/ ZIP Download`
            },
            {
                title: `Enabled w/o ZIP Download`
            }
        ]
    },
    {
        title: `Daily dose of Collectibles`,
        codename: `daily_dose_of_collectibles`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    },
    {
        title: `Review Specific Item`,
        codename: `review_specific_item`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    },
    {
        title: `XP Revamp`,
        codename: `xp_system_v2`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    },
    {
        title: `Display Name Style Render`,
        codename: `display_name_style_render`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    },
    {
        title: `Display Name Style XP Level Perk`,
        codename: `display_name_style_xp_level_perk`,
        treatments: [
            {
                title: `Disabled`
            },
            {
                title: `Enabled`
            }
        ]
    }
];

const external_skus = {
    ORB_PROFILE_BADGE: "1342211853484429445",
    NITRO_CREDITS_3_DAYS: "1333912750274904064",
    NITRO_CREDITS_1_DAY: "1298745361602449479"
};

const defaultThemes = [
    {
        name: "Legacy Dark",
        codename: "legacy",
        summary: "Legacy Dark",
        color: "#2B2D31"
    },
    {
        name: "Dark",
        codename: "dark",
        summary: "Easy on the eyes.",
        color: "#202124"
    },
    {
        name: "Midnight",
        codename: "midnight",
        summary: "Perfect for late-night browsing.",
        color: "#000000"
    }
];


const customCategoryAssets = {
    0: "https://cdn.yapper.shop/assets/217.png",
    1: "https://cdn.yapper.shop/assets/231.png",
    2: "https://cdn.yapper.shop/assets/232.png",
    // Try Before You Buy!
    8: {
        sku_id: "1428539043993358497",
        catalog_banner_asset: {
            static: "https://cdn.yapper.shop/assets/240.png",
            credits: "1049207768785100880"
        }
    }
}

const reviews_system_types = [
    {
        id: 1,
        codename: "info"
    },
    {
        id: 2,
        codename: "critical"
    },
    {
        id: 3,
        codename: "warning"
    },
    {
        id: 4,
        codename: "positive"
    }
];

const settings = {
    "us_time_format": 0,
    "profile_effect_tweaks_fix": 0,
    "dev": 0,
    "currency": 0,
    "show_product_id": 0,

    "staff_force_leaks_dummy": 0,
    "staff_force_viewable_reviews_tab": 0,
    "staff_simulate_banned": 0,
    "staff_simulate_guidelines_block": 0,
    "staff_simulate_sus_block": 0,
    "staff_show_unpublished_xp_events": 0,
    "staff_allow_category_only_event_claiming_in_events_tab": 0,
    "staff_show_test_categories_on_misc_page": 0,
    "staff_auth_remove_none_promt": 0,

    "dismissible_daily_tab_new": 0
};

const leaks_dummy_data = {
    version: 0,
    categories: [
        {
            "sku_id": "1",
            "name": "Reviews Test Category",
            "summary": "Reviews Test Category",
            "store_listing_id": "1",
            "unpublished_at": null,
            "styles": {
                "background_colors": [
                    1335620,
                    137742
                ],
                "button_colors": [
                    165687,
                    26954
                ],
                "confetti_colors": [
                    15706103,
                    11945665,
                    5682099,
                    1737113,
                    7430319,
                    11454463
                ]
            },
            "assets": {
                "id": {
                    "banner": "1336165352392097853"
                },
                "json": {},
                "url": {},
                "overrides": {}
            },
            "text_config": {},
            "products": []
        }
    ]
};

const dummy_products = [
    {
        "sku_id": "1392240398998573140",
        "name": "Phoenix ",
        "summary": "Jean Grey with her fiery Phoenix form",
        "store_listing_id": "1392240399459942416",
        "banner": "1382445856384487569",
        "unpublished_at": null,
        "expires_at": "2025-09-16T23:00:00+00:00",
        "styles": {
            "background_colors": [
                4620287,
                1396431
            ],
            "button_colors": [
                4507647,
                40447
            ],
            "confetti_colors": [
                4047871,
                2718463,
                16616447,
                16727029
            ]
        },
        "prices": {
            "0": {
                "country_prices": {
                    "country_code": "US",
                    "prices": [
                        {
                            "amount": 0,
                            "currency": "usd",
                            "exponent": 2
                        }
                    ]
                }
            },
            "4": {
                "country_prices": {
                    "country_code": "US",
                    "prices": [
                        {
                            "amount": 0,
                            "currency": "usd",
                            "exponent": 2
                        }
                    ]
                }
            }
        },
        "items": [
            {
                "type": 0,
                "id": "1392240399459942416",
                "sku_id": "1392240398998573140",
                "asset": "a_7adfbfb44f2aa08b4b375366bd6a96d6",
                "label": "Jean Grey floats side-by-side with her fiery form—one in armor, one glowing bright."
            }
        ],
        "type": 0,
        "premium_type": 0,
        "category_sku_id": "1382445856384487567",
        "google_sku_ids": {}
    }
];

const user_preview_usernames = [
    {
        id: "643945264868098049",
        name: "Discord"
    },
    {
        id: "1049207768785100880",
        name: "TrellTrell"
    }
];

const favorites_category = {
    "sku_id": "5",
    "name": "My Favorites",
    "summary": " ",
    "store_listing_id": "5",
    "assets": {
        "id": {},
        "json": {},
        "url": {
            "catalog_banner": "https://cdn.yapper.shop/assets/213.png",
            "logo": "https://cdn.yapper.shop/assets/210.png",
            "pdp_bg": "https://cdn.yapper.shop/assets/209.png"
        },
        "overrides": {}
    },
    "text_config": {},
    "products": []
};

const daily_dose_of_collectibles = {
    "sku_id": "6",
    "name": "Daily dose of Collectibles",
    "summary": " ",
    "store_listing_id": "6",
    "assets": {
        "id": {},
        "json": {},
        "url": {
            "pdp_bg": "https://cdn.yapper.shop/assets/209.png"
        },
        "overrides": {}
    },
    "text_config": {},
    "products": []
};

const claimable_types = {
    REDEEM: 0,
    CLAIM: 1,
    MULTI_CLAIM: 2,
    EXTERNAL: 3,
    CATEGORY: 4,
    CATEGORY_LEAK: 5,
    TRADING_CARD_PACK: 6
};

const profileEffectBG = `
    <svg width="383" height="764" viewBox="0 0 383 764" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_628_8)">
    <rect width="383" height="142" fill="#1F2223"/>
    <rect y="142" width="383" height="625" fill="#171A1B"/>
    <rect x="21.5" y="90.5" width="99" height="99" rx="49.5" fill="#1F2223"/>
    <rect x="21.5" y="90.5" width="99" height="99" rx="49.5" stroke="#171A1B" stroke-width="7"/>
    <path d="M90.5029 121.958C86.8116 120.235 82.919 119.019 78.919 118.336C78.3686 119.333 77.872 120.358 77.429 121.411C73.174 120.755 68.8384 120.755 64.5699 121.411C64.127 120.358 63.6303 119.333 63.08 118.336C59.08 119.033 55.1739 120.249 51.4826 121.971C44.1538 133.015 42.1672 143.786 43.1605 154.407C47.4558 157.632 52.2612 160.093 57.3619 161.665C58.5162 160.093 59.5363 158.411 60.4088 156.662C58.7444 156.033 57.1471 155.254 55.6169 154.338C56.0196 154.038 56.4088 153.737 56.7981 153.436C65.7914 157.742 76.2075 157.742 85.2009 153.436C85.5901 153.751 85.9794 154.065 86.3821 154.338C84.8519 155.254 83.2411 156.033 81.5767 156.676C82.4492 158.425 83.4693 160.093 84.6237 161.665C89.7378 160.093 94.5432 157.646 98.8385 154.407C100.006 142.091 96.8519 131.43 90.4895 121.958H90.5029ZM61.684 147.873C58.9189 147.873 56.6236 145.317 56.6236 142.173C56.6236 139.03 58.8249 136.446 61.6706 136.446C64.5162 136.446 66.7847 139.03 66.731 142.173C66.6773 145.317 64.5028 147.873 61.684 147.873ZM80.3418 147.873C77.5633 147.873 75.2948 145.317 75.2948 142.173C75.2948 139.03 77.4961 136.446 80.3418 136.446C83.1874 136.446 85.4425 139.03 85.3888 142.173C85.3351 145.317 83.1606 147.873 80.3418 147.873Z" fill="#373939"/>
    <rect x="90.5" y="159.5" width="23" height="23" rx="11.5" fill="#0F3B2B"/>
    <rect x="90.5" y="159.5" width="23" height="23" rx="11.5" stroke="#171A1B" stroke-width="5"/>
    <rect x="12" y="208" width="359" height="540" rx="9" fill="#141718"/>
    <rect x="27" y="222" width="168" height="25" rx="10" fill="#1F2223"/>
    <rect x="27" y="405" width="106" height="25" rx="10" fill="#1F2223"/>
    <rect x="120" y="482" width="107" height="29" rx="10" fill="#1F2223"/>
    <rect x="27" y="476" width="74" height="74" rx="10" fill="#1F2223"/>
    <rect x="27" y="565" width="329" height="36" rx="4" fill="#171A1B"/>
    <rect x="27" y="336" width="316" height="25" rx="10" fill="#1F2223"/>
    <rect x="27" y="252" width="83" height="15" rx="7.5" fill="#1F2223"/>
    <rect x="27" y="384" width="186" height="15" rx="7.5" fill="#1F2223"/>
    <rect x="27" y="453" width="118" height="15" rx="7.5" fill="#1F2223"/>
    <rect x="120" y="517" width="69" height="18" rx="9" fill="#1F2223"/>
    <rect x="37" y="647" width="18" height="18" rx="9" fill="#1F2223"/>
    <rect x="69" y="648" width="106" height="16" rx="8" fill="#1F2223"/>
    <path d="M333.564 652.993C333.259 652.726 333.243 652.257 333.53 651.97C333.793 651.707 334.217 651.695 334.494 651.945L338.174 655.257C338.615 655.654 338.615 656.346 338.174 656.743L334.494 660.055C334.217 660.305 333.793 660.293 333.53 660.03C333.243 659.743 333.259 659.274 333.564 659.007L336.14 656.753C336.595 656.354 336.595 655.646 336.14 655.247L333.564 652.993Z" fill="#1F2223"/>
    <path d="M333.564 710.493C333.259 710.226 333.243 709.757 333.53 709.47C333.793 709.207 334.217 709.195 334.494 709.445L338.174 712.757C338.615 713.154 338.615 713.846 338.174 714.243L334.494 717.555C334.217 717.805 333.793 717.793 333.53 717.53C333.243 717.243 333.259 716.774 333.564 716.507L336.14 714.253C336.595 713.854 336.595 713.146 336.14 712.747L333.564 710.493Z" fill="#1F2223"/>
    <rect x="69" y="706" width="106" height="16" rx="8" fill="#1F2223"/>
    <rect x="37" y="705" width="18" height="18" rx="9" fill="#1F2223"/>
    <rect x="27" y="315" width="71" height="15" rx="7.5" fill="#1F2223"/>
    <rect x="27" y="290" width="329" height="1" rx="0.5" fill="#1F2223"/>
    </g>
    <defs>
    <clipPath id="clip0_628_8">
    <rect width="383" height="764" rx="21" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    <div class="effectBundleContainerDiv"></div>
    <div class="frameContainerDiv"></div>
    <div class="frameContainerDivback"></div>
`;

const currency_types = {
    0: "USD",
    1: "TRY",
    2: "BRL",
    4: "PHP",
    5: "PEN",
    6: "MXN",
    7: "VND",
    8: "COP",
    9: "EUR",
    10: "GBP",
    11: "CAD",
    12: "AUD",
    13: "JPY",
    14: "PLN"
};

const converted_currencies = {
    // United States Dollar | USD (US)
    0: {
        name: "United States Dollar",
        currency: "USD",
        extension: "US$",
        display_type: "fixed",
        amounts: {
            39999: 39999,
            3499: 3499,
            2899: 2899,
            2599: 2599,
            2399: 2399,
            2299: 2299,
            2199: 2199,
            2099: 2099,
            1999: 1999,
            1799: 1799,
            1599: 1599,
            1499: 1499,
            1399: 1399,
            1299: 1299,
            1199: 1199,
            1099: 1099,
            999: 999,
            899: 899,
            849: 849,
            799: 799,
            699: 699,
            599: 599,
            549: 549,
            499: 499,
            399: 399,
            299: 299,
            199: 199,
            0: 0
        }
    },
    // Turkish Lira | TRY (TR)
    1: {
        name: "Turkish Lira",
        currency: "TRY",
        extension: "TRY ",
        display_type: "fixed",
        amounts: {
            39999: 600000,
            3499: 36799,
            2899: 30499,
            2599: 27399,
            2399: 25299,
            2299: 24199,
            2199: 23199,
            2099: 22099,
            1999: 21099,
            1799: 18999,
            1599: 16899,
            1499: 15799,
            1399: 14799,
            1299: 13699,
            1199: 12699,
            1099: 11599,
            999: 10499,
            899: 9499,
            849: 8999,
            799: 8399,
            699: 7399,
            599: 6299,
            549: 5799,
            499: 5299,
            399: 4199,
            299: 3199,
            199: 2099,
            0: 0
        }
    },
    // Brazilian Real | BRL (BR)
    2: {
        name: "Brazilian Real",
        currency: "BRL",
        extension: "R$",
        display_type: "fixed",
        amounts: {
            39999: 150990,
            3499: 8590,
            2899: 6590,
            2599: 5590,
            2399: 4990,
            2299: 4850,
            2199: 4700,
            2099: 4599,
            1999: 4490,
            1799: 4200,
            1599: 3990,
            1499: 3850,
            1399: 3700,
            1299: 3599,
            1199: 3490,
            1099: 3350,
            999: 3200,
            899: 2899,
            849: 2700,
            799: 2590,
            699: 2250,
            599: 1900,
            549: 1750,
            499: 1599,
            399: 1290,
            299: 950,
            199: 600,
            0: 0
        }
    },
    // Philippine Peso | PHP (PH)
    4: {
        name: "Philippine Peso",
        currency: "PHP",
        extension: "&#x20B1;",
        display_type: "fixed",
        amounts: {
            39999: 1469000,
            3499: 101000,
            2899: 86000,
            2599: 78900,
            2399: 73900,
            2299: 71000,
            2199: 68900,
            2099: 66000,
            1999: 63900,
            1799: 58900,
            1599: 53900,
            1499: 51000,
            1399: 49000,
            1299: 47500,
            1199: 45900,
            1099: 44000,
            999: 42500,
            899: 38000,
            849: 35900,
            799: 33900,
            699: 29500,
            599: 25000,
            549: 22900,
            499: 20900,
            399: 16500,
            299: 12000,
            199: 8000,
            0: 0
        }
    },
    // Peruvian Sol | PEN (PE)
    5: {
        name: "Peruvian Sol",
        currency: "PEN",
        extension: "PEN ",
        display_type: "fixed",
        amounts: {
            39999: 128990,
            3499: 7490,
            2899: 6090,
            2599: 5400,
            2399: 4990,
            2299: 4850,
            2199: 4700,
            2099: 4599,
            1999: 4490,
            1799: 4200,
            1599: 3990,
            1499: 3850,
            1399: 3700,
            1299: 3599,
            1199: 3490,
            1099: 3350,
            999: 3200,
            899: 2899,
            849: 2700,
            799: 2590,
            699: 2250,
            599: 1900,
            549: 1750,
            499: 1599,
            399: 1290,
            299: 950,
            199: 600,
            0: 0
        }
    },
    // Mexican Peso | MXN (MX)
    6: {
        name: "Mexican Peso",
        currency: "MXN",
        extension: "MX$",
        display_type: "fixed",
        amounts: {
            39999: 419900,
            3499: 38900,
            2899: 28900,
            2599: 23900,
            2399: 20500,
            2299: 19600,
            2199: 19100,
            2099: 18600,
            1999: 18100,
            1799: 17100,
            1599: 16100,
            1499: 15600,
            1399: 15100,
            1299: 14600,
            1199: 14100,
            1099: 13600,
            999: 13100,
            899: 11800,
            849: 11100,
            799: 10500,
            699: 9200,
            599: 7900,
            549: 7200,
            499: 6600,
            399: 5300,
            299: 4000,
            199: 2700,
            0: 0
        }
    },
    // Vietnamese Dong | VND (VN)
    7: {
        name: "Vietnamese Dong",
        currency: "VND",
        extension: "&#x20AB;",
        display_type: "locale",
        amounts: {
            39999: 8199000,
            3499: 495000,
            2899: 399000,
            2599: 349000,
            2399: 319000,
            2299: 300000,
            2199: 285000,
            2099: 269000,
            1999: 250000,
            1799: 220000,
            1599: 189000,
            1499: 170000,
            1399: 155000,
            1299: 146000,
            1199: 141000,
            1099: 136000,
            999: 131000,
            899: 118000,
            849: 111000,
            799: 105000,
            699: 92000,
            599: 79000,
            549: 72000,
            499: 66000,
            399: 53000,
            299: 40000,
            199: 27000,
            0: 0
        }
    },
    // Colombian Peso | COP (CO)
    8: {
        name: "Colombian Peso",
        currency: "COP",
        extension: "COP ",
        display_type: "locale",
        amounts: {
            39999: 150990000,
            3499: 9500000,
            2899: 8190000,
            2599: 7550000,
            2399: 7090000,
            2299: 6900000,
            2199: 6690000,
            2099: 6490000,
            1999: 6250000,
            1799: 5850000,
            1599: 5390000,
            1499: 5150000,
            1399: 4950000,
            1299: 4790000,
            1199: 4600000,
            1099: 4450000,
            999: 4290000,
            899: 3850000,
            849: 3600000,
            799: 3400000,
            699: 2990000,
            599: 2550000,
            549: 2300000,
            499: 2100000,
            399: 1690000,
            299: 1250000,
            199: 800000,
            0: 0
        }
    },
    // Euro | EUR (DE)
    9: {
        name: "Euro",
        currency: "EUR",
        extension: "&#x20AC;",
        display_type: "fixed",
        amounts: {
            39999: 40000,
            3499: 3499,
            2899: 2899,
            2599: 2599,
            2399: 2399,
            2299: 2299,
            2199: 2199,
            2099: 2099,
            1999: 1999,
            1799: 1799,
            1599: 1599,
            1499: 1499,
            1399: 1399,
            1299: 1299,
            1199: 1199,
            1099: 1099,
            999: 999,
            899: 899,
            849: 849,
            799: 799,
            699: 699,
            599: 599,
            549: 549,
            499: 499,
            399: 399,
            299: 299,
            199: 199,
            0: 0
        }
    },
    // British Pound | GBP (GB)
    10: {
        name: "British Pound",
        currency: "GBP",
        extension: "&#xA3;",
        display_type: "fixed",
        amounts: {
            39999: 40000,
            3499: 3499,
            2899: 2899,
            2599: 2599,
            2399: 2399,
            2299: 2299,
            2199: 2199,
            2099: 2099,
            1999: 1999,
            1799: 1799,
            1599: 1599,
            1499: 1499,
            1399: 1399,
            1299: 1299,
            1199: 1199,
            1099: 1099,
            999: 999,
            899: 899,
            849: 849,
            799: 799,
            699: 699,
            599: 599,
            549: 549,
            499: 499,
            399: 399,
            299: 299,
            199: 199,
            0: 0
        }
    },
    // Canadian Dollar | CAD (CA)
    11: {
        name: "Canadian Dollar",
        currency: "CAD",
        extension: "CA$",
        display_type: "fixed",
        amounts: {
            39999: 40900,
            3499: 3499,
            2899: 2899,
            2599: 2599,
            2399: 2399,
            2299: 2299,
            2199: 2199,
            2099: 2099,
            1999: 1999,
            1799: 1799,
            1599: 1599,
            1499: 1499,
            1399: 1399,
            1299: 1299,
            1199: 1199,
            1099: 1099,
            999: 999,
            899: 899,
            849: 849,
            799: 799,
            699: 699,
            599: 599,
            549: 549,
            499: 499,
            399: 399,
            299: 299,
            199: 199,
            0: 0
        }
    },
    // Australian Dollar | AUD (AU)
    12: {
        name: "Australian Dollar",
        currency: "AUD",
        extension: "A$",
        display_type: "fixed",
        amounts: {
            39999: 43999,
            3499: 3500,
            2899: 2900,
            2599: 2600,
            2399: 2400,
            2299: 2300,
            2199: 2200,
            2099: 2100,
            1999: 2000,
            1799: 1800,
            1599: 1600,
            1499: 1500,
            1399: 1400,
            1299: 1300,
            1199: 1200,
            1099: 1100,
            999: 1000,
            899: 900,
            849: 859,
            799: 800,
            699: 700,
            599: 600,
            549: 559,
            499: 500,
            399: 400,
            299: 300,
            199: 200,
            0: 0
        }
    },
    // Japanese Yen | JPY (JP)
    13: {
        name: "Japanese Yen",
        currency: "JPY",
        extension: "JP&#x00A5;",
        display_type: "locale",
        amounts: {
            39999: 58000,
            3499: 3890,
            2899: 2890,
            2599: 2390,
            2399: 2080,
            2299: 1960,
            2199: 1910,
            2099: 1860,
            1999: 1810,
            1799: 1710,
            1599: 1610,
            1499: 1560,
            1399: 1510,
            1299: 1460,
            1199: 1410,
            1099: 1360,
            999: 1810,
            899: 1180,
            849: 1110,
            799: 1050,
            699: 920,
            599: 790,
            549: 720,
            499: 660,
            399: 530,
            299: 400,
            199: 270,
            0: 0
        }
    },
    // Polish złoty | PLN (PL)
    14: {
        name: "Polish z&#322;oty",
        currency: "PLN",
        extension: "PLN ",
        display_type: "fixed",
        amounts: {
            39999: 118999,
            3499: 9700,
            2899: 8299,
            2599: 7599,
            2399: 7099,
            2299: 6899,
            2199: 6600,
            2099: 6399,
            1999: 6100,
            1799: 5699,
            1599: 5199,
            1499: 4990,
            1399: 4800,
            1299: 4649,
            1199: 4499,
            1099: 4300,
            999: 4149,
            899: 3749,
            849: 3500,
            799: 3300,
            699: 2900,
            599: 2499,
            549: 2249,
            499: 2049,
            399: 1649,
            299: 1200,
            199: 800,
            0: 0
        }
    }
};

const discLaimer = `
    <a>Shop Archives is an independent, unofficial fan resource created for the purpose of exploring Discord shop items and quests. We are not part of, affiliated with, or endorsed by Discord Inc.</a>
    <a>This website does not sell official Discord products; all links provided for shop items and quests lead directly to Discord's official platform. All Discord logos, trademarks, and intellectual property are the property of Discord Inc.</a>
`;

function noticeBlock({
    type = 1,
    message = "",
    autoRemove = true,
    removeTime = 5000
} = {}) {
    let noticeBlock = document.createElement("div");

    noticeBlock.classList.add('notice-block-container');

    if (type === 1) {
        noticeBlock.innerHTML = `
            <svg class="notice-block-close-svg" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path fill="currentColor" d="M17.3 18.7a1 1 0 0 0 1.4-1.4L13.42 12l5.3-5.3a1 1 0 0 0-1.42-1.4L12 10.58l-5.3-5.3a1 1 0 0 0-1.4 1.42L10.58 12l-5.3 5.3a1 1 0 1 0 1.42 1.4L12 13.42l5.3 5.3Z" class=""></path>
            </svg>
            <h3>Error</h3>
            <p>${message}</p>
        `;
    }

    noticeBlock.querySelector('.notice-block-close-svg').addEventListener("click", () => {
        removeNoticeBlock();
    });
                 
    document.querySelector('.notice-block-container-container').appendChild(noticeBlock);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            noticeBlock.classList.add('show');
        });
    });

    if (autoRemove) {
        noticeBlock.querySelector('.notice-block-close-svg').remove()
        setTimeout(() => {
            removeNoticeBlock();
        }, removeTime);
    }
    function removeNoticeBlock() {
        noticeBlock.classList.remove('show');
        setTimeout(() => {
            noticeBlock.remove();
        }, 500);
    }
}

const fetchAPI = {
    async request(endpoint, options = {}) {
        const baseUrl = "https://api.yapper.dev/v4";
        const url = `${baseUrl}${endpoint}`;
        
        const headers = {
            "Content-Type": "application/json",
            "Authorization": localStorage.token ?? "bazinga",
            ...options.headers,
        };

        try {
            const response = await fetch(url, { ...options, headers });
            
            if (!response.ok) {
                noticeBlock({
                    type: 1,
                    message: `Failed to fetch '${url}': ${response.status}`,
                    autoRemove: true,
                    removeTime: 5000
                });
                throw JSON.stringify(await response.json());
            }
            
            return await response.json();
        } catch (error) {
            console.error("fetchAPI failed:", error);
            throw error;
        }
    },

    get(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: "GET" });
    },

    post(endpoint, body, options = {}) {
        const postOptions = { ...options, method: "POST" };
        
        if (body !== undefined) {
            postOptions.body = JSON.stringify(body);
        }
        
        return this.request(endpoint, postOptions);
    }
};