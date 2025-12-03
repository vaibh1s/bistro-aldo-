// translations.js – client-side i18n for Bistro Aldo

// Meta info for each language (flag + display name)
window.BISTRO_LANGS = {
  en: { flag: "🇬🇧", label: "English" },
  fr: { flag: "🇫🇷", label: "Français" },
  pt: { flag: "🇵🇹", label: "Português" },
  es: { flag: "🇪🇸", label: "Español" },
  de: { flag: "🇩🇪", label: "Deutsch" },
  it: { flag: "🇮🇹", label: "Italiano" },
  ru: { flag: "🇷🇺", label: "Русский" },
  ja: { flag: "🇯🇵", label: "日本語" },
  zh: { flag: "🇨🇳", label: "中文" },
  nl: { flag: "🇳🇱", label: "Nederlands" }
};

// Full translation dictionary
window.BISTRO_TRANSLATIONS = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_menu: "Menu",
    nav_gallery: "Gallery",
    nav_reservations: "Reservations",
    nav_contact: "Contact",
    nav_tagline: "Authentic French Gastronomy",
    lang_title: "Language",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "From curated wines to cinematic plates, every detail is crafted for luxury and delight.",
    cta_book_table: "Book Your Table",

    // Section titles (Index)
    section_experience: "Michelin‑Style Experience",
    section_experience_desc: "Luxury dining with refined service and cinematic ambiance.",
    service_title: "Premium Service",
    service_desc: "Attentive, discreet staff creating a seamless evening.",
    chefs_title: "Gourmet Chefs",
    chefs_desc: "Classically trained chefs with a modern twist on French classics.",
    ambiance_title: "Elegant Ambiance",
    ambiance_desc: "Candlelit tables, velvet seating, curated music for mood.",
    ingredients_title: "Seasonal Ingredients",
    ingredients_desc: "Fresh, local produce sourced from trusted French artisans.",

    // Menu Page
    menu_title: "Our Menus",
    menu_subtitle: "Drift through a curated sequence of entrées, mains and desserts.",

    // Gallery Page
    gallery_title: "Gallery",
    gallery_subtitle: "A cinematic look at our dining room, bar and plates.",

    // Reservations Page
    reservations_title: "Book a Table",
    reservations_subtitle: "Secure your reservation online in just a few clicks.",
    reservations_form_title: "Reserve Your Table",
    form_name: "Full Name",
    form_email: "Email",
    form_phone: "Phone Number",
    form_date: "Date",
    form_time: "Time",
    form_guests: "Number of Guests",
    form_message: "Special Requests",
    reservations_confirm_btn: "Confirm Reservation",

    // Contact Page
    contact_title: "Contact Us",
    contact_subtitle: "Get in touch for reservations, private dining and special events.",
    contact_details_title: "Get in touch with us",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Opening Hours",
    contact_hours_detail: "Mon-Fri: 09:00 - 14:00 am | Sat: 12:00 - 03:00 pm | Closed Sunday"
  },

  fr: {
    // Navbar
    nav_home: "Accueil",
    nav_menu: "Carte",
    nav_gallery: "Galerie",
    nav_reservations: "Réservations",
    nav_contact: "Contact",
    nav_tagline: "Gastronomie française authentique",
    lang_title: "Langue",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "Des vins sélectionnés aux assiettes cinématiques, chaque détail est conçu pour le luxe et le plaisir.",
    cta_book_table: "Réserver une Table",

    // Section titles (Index)
    section_experience: "Expérience Michelin",
    section_experience_desc: "Dîner de luxe avec service raffiné et ambiance cinématique.",
    service_title: "Service Premium",
    service_desc: "Personnel attentif et discret créant une soirée sans faille.",
    chefs_title: "Chefs Cuisiniers",
    chefs_desc: "Chefs formés classiquement avec une touche moderne aux classiques français.",
    ambiance_title: "Ambiance Élégante",
    ambiance_desc: "Tables à la chandelle, sièges en velours, musique sélectionnée.",
    ingredients_title: "Ingrédients Saisonniers",
    ingredients_desc: "Produits frais et locaux provenant d'artisans français de confiance.",

    // Menu Page
    menu_title: "Nos Cartes",
    menu_subtitle: "Parcourez une séquence organisée d'entrées, plats et desserts.",

    // Gallery Page
    gallery_title: "Galerie",
    gallery_subtitle: "Un aperçu cinématique de notre salle à manger, bar et assiettes.",

    // Reservations Page
    reservations_title: "Réserver une Table",
    reservations_subtitle: "Sécurisez votre réservation en ligne en quelques clics.",
    reservations_form_title: "Réserver Votre Table",
    form_name: "Nom Complet",
    form_email: "Courriel",
    form_phone: "Numéro de Téléphone",
    form_date: "Date",
    form_time: "Heure",
    form_guests: "Nombre de Convives",
    form_message: "Demandes Spéciales",
    reservations_confirm_btn: "Confirmer la Réservation",

    // Contact Page
    contact_title: "Nous Contacter",
    contact_subtitle: "Contactez-nous pour réservations, dîners privés et événements spéciaux.",
    contact_details_title: "Nous contacter",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Horaires d'Ouverture",
    contact_hours_detail: "Lun-Ven: 09:00 - 14:00 | Sam: 12:00 - 15:00 | Fermé Dimanche"
  },

  pt: {
    // Navbar
    nav_home: "Início",
    nav_menu: "Cardápio",
    nav_gallery: "Galeria",
    nav_reservations: "Reservas",
    nav_contact: "Contato",
    nav_tagline: "Gastronomia francesa autêntica",
    lang_title: "Idioma",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "De vinhos selecionados a pratos cinematográficos, cada detalhe é elaborado para luxo e deleite.",
    cta_book_table: "Reservar Mesa",

    // Section titles (Index)
    section_experience: "Experiência Michelin",
    section_experience_desc: "Jantar de luxo com serviço refinado e ambiente cinematográfico.",
    service_title: "Serviço Premium",
    service_desc: "Equipe atenciosa e discreta criando uma noite perfeita.",
    chefs_title: "Chefs de Cozinha",
    chefs_desc: "Chefs treinados classicamente com um toque moderno aos clássicos franceses.",
    ambiance_title: "Ambiente Elegante",
    ambiance_desc: "Mesas à luz de velas, assentos de veludo, música selecionada.",
    ingredients_title: "Ingredientes Sazonais",
    ingredients_desc: "Produtos frescos e locais fornecidos por artesãos franceses confiáveis.",

    // Menu Page
    menu_title: "Nossos Cardápios",
    menu_subtitle: "Percorra uma sequência organizada de entradas, pratos principais e sobremesas.",

    // Gallery Page
    gallery_title: "Galeria",
    gallery_subtitle: "Uma visão cinematográfica de nossa sala de jantar, bar e pratos.",

    // Reservations Page
    reservations_title: "Reservar Mesa",
    reservations_subtitle: "Garanta sua reserva online em apenas alguns cliques.",
    reservations_form_title: "Reserve Sua Mesa",
    form_name: "Nome Completo",
    form_email: "E-mail",
    form_phone: "Número de Telefone",
    form_date: "Data",
    form_time: "Hora",
    form_guests: "Número de Hóspedes",
    form_message: "Solicitações Especiais",
    reservations_confirm_btn: "Confirmar Reserva",

    // Contact Page
    contact_title: "Entre em Contato",
    contact_subtitle: "Entre em contato para reservas, jantares privados e eventos especiais.",
    contact_details_title: "Entre em contato conosco",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Horário de Funcionamento",
    contact_hours_detail: "Seg-Sex: 09:00 - 14:00 | Sáb: 12:00 - 15:00 | Fechado Domingo"
  },

  es: {
    // Navbar
    nav_home: "Inicio",
    nav_menu: "Menú",
    nav_gallery: "Galería",
    nav_reservations: "Reservas",
    nav_contact: "Contacto",
    nav_tagline: "Gastronomía francesa auténtica",
    lang_title: "Idioma",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "De vinos curados a platos cinematográficos, cada detalle está diseñado para el lujo y el deleite.",
    cta_book_table: "Reservar Mesa",

    // Section titles (Index)
    section_experience: "Experiencia Michelin",
    section_experience_desc: "Cena de lujo con servicio refinado y ambiente cinematográfico.",
    service_title: "Servicio Premium",
    service_desc: "Personal atento y discreto creando una noche perfecta.",
    chefs_title: "Chefs de Cocina",
    chefs_desc: "Chefs entrenados clásicamente con un toque moderno de los clásicos franceses.",
    ambiance_title: "Ambiente Elegante",
    ambiance_desc: "Mesas a la luz de las velas, asientos de terciopelo, música seleccionada.",
    ingredients_title: "Ingredientes de Temporada",
    ingredients_desc: "Productos frescos y locales de artesanos franceses confiables.",

    // Menu Page
    menu_title: "Nuestros Menús",
    menu_subtitle: "Recorra una secuencia organizada de entradas, platos principales y postres.",

    // Gallery Page
    gallery_title: "Galería",
    gallery_subtitle: "Una vista cinematográfica de nuestro comedor, bar y platos.",

    // Reservations Page
    reservations_title: "Reservar Mesa",
    reservations_subtitle: "Asegure su reserva en línea en solo unos pocos clics.",
    reservations_form_title: "Reserve Su Mesa",
    form_name: "Nombre Completo",
    form_email: "Correo Electrónico",
    form_phone: "Número de Teléfono",
    form_date: "Fecha",
    form_time: "Hora",
    form_guests: "Número de Huéspedes",
    form_message: "Solicitudes Especiales",
    reservations_confirm_btn: "Confirmar Reserva",

    // Contact Page
    contact_title: "Contáctenos",
    contact_subtitle: "Contáctenos para reservas, cenas privadas y eventos especiales.",
    contact_details_title: "Póngase en contacto con nosotros",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Horario de Atención",
    contact_hours_detail: "Lun-Vie: 09:00 - 14:00 | Sáb: 12:00 - 15:00 | Cerrado Domingo"
  },

  de: {
    // Navbar
    nav_home: "Startseite",
    nav_menu: "Speisekarte",
    nav_gallery: "Galerie",
    nav_reservations: "Reservierungen",
    nav_contact: "Kontakt",
    nav_tagline: "Authentische französische Gastronomie",
    lang_title: "Sprache",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "Von kuratierten Weinen bis zu filmischen Tellern ist jedes Detail für Luxus und Genuss gestaltet.",
    cta_book_table: "Tisch Reservieren",

    // Section titles (Index)
    section_experience: "Michelin-Erlebnis",
    section_experience_desc: "Luxus-Dinner mit verfeinerten Service und filmischer Atmosphäre.",
    service_title: "Premium-Service",
    service_desc: "Aufmerksames und diskretes Personal, das einen nahtlosen Abend schafft.",
    chefs_title: "Gourmet-Köche",
    chefs_desc: "Klassisch ausgebildete Köche mit moderner Interpretation französischer Klassiker.",
    ambiance_title: "Elegante Atmosphäre",
    ambiance_desc: "Tische bei Kerzenlicht, Samtsitze, kuratierte Musik.",
    ingredients_title: "Saisonale Zutaten",
    ingredients_desc: "Frische, lokale Produkte von vertrauenswürdigen französischen Handwerkern.",

    // Menu Page
    menu_title: "Unsere Menüs",
    menu_subtitle: "Blättern Sie durch eine kuratierte Abfolge von Vorspeisen, Hauptgängen und Desserts.",

    // Gallery Page
    gallery_title: "Galerie",
    gallery_subtitle: "Ein filmischer Blick auf unser Esszimmer, die Bar und die Teller.",

    // Reservations Page
    reservations_title: "Tisch Reservieren",
    reservations_subtitle: "Sichern Sie Ihre Reservierung online in wenigen Klicks.",
    reservations_form_title: "Reservieren Sie Ihren Tisch",
    form_name: "Vollständiger Name",
    form_email: "E-Mail",
    form_phone: "Telefonnummer",
    form_date: "Datum",
    form_time: "Uhrzeit",
    form_guests: "Anzahl der Gäste",
    form_message: "Spezielle Wünsche",
    reservations_confirm_btn: "Reservierung Bestätigen",

    // Contact Page
    contact_title: "Kontaktieren Sie Uns",
    contact_subtitle: "Kontaktieren Sie uns für Reservierungen, private Dinners und spezielle Events.",
    contact_details_title: "Kontaktieren Sie uns",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Öffnungszeiten",
    contact_hours_detail: "Mo-Fr: 09:00 - 14:00 | Sa: 12:00 - 15:00 | Sonntag geschlossen"
  },

  it: {
    // Navbar
    nav_home: "Home",
    nav_menu: "Menu",
    nav_gallery: "Galleria",
    nav_reservations: "Prenotazioni",
    nav_contact: "Contatti",
    nav_tagline: "Autentica gastronomia francese",
    lang_title: "Lingua",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "Dai vini curati ai piatti cinematografici, ogni dettaglio è progettato per il lusso e il piacere.",
    cta_book_table: "Prenota un Tavolo",

    // Section titles (Index)
    section_experience: "Esperienza Michelin",
    section_experience_desc: "Cena di lusso con servizio raffinato e atmosfera cinematografica.",
    service_title: "Servizio Premium",
    service_desc: "Personale attento e discreto che crea una serata senza interruzioni.",
    chefs_title: "Chef Gourmet",
    chefs_desc: "Chef classicamente addestrati con un tocco moderno ai classici francesi.",
    ambiance_title: "Atmosfera Elegante",
    ambiance_desc: "Tavoli a lume di candela, sedute in velluto, musica curata.",
    ingredients_title: "Ingredienti Stagionali",
    ingredients_desc: "Prodotti freschi e locali da artigiani francesi affidabili.",

    // Menu Page
    menu_title: "I Nostri Menu",
    menu_subtitle: "Sfoglia una sequenza curata di antipasti, piatti principali e dessert.",

    // Gallery Page
    gallery_title: "Galleria",
    gallery_subtitle: "Uno sguardo cinematografico alla nostra sala da pranzo, bar e piatti.",

    // Reservations Page
    reservations_title: "Prenota un Tavolo",
    reservations_subtitle: "Assicura la tua prenotazione online in pochi clic.",
    reservations_form_title: "Prenota il Tuo Tavolo",
    form_name: "Nome Completo",
    form_email: "Email",
    form_phone: "Numero di Telefono",
    form_date: "Data",
    form_time: "Ora",
    form_guests: "Numero di Ospiti",
    form_message: "Richieste Speciali",
    reservations_confirm_btn: "Conferma Prenotazione",

    // Contact Page
    contact_title: "Contattaci",
    contact_subtitle: "Contattaci per prenotazioni, cene private e eventi speciali.",
    contact_details_title: "Contattaci",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Orari di Apertura",
    contact_hours_detail: "Lun-Ven: 09:00 - 14:00 | Sab: 12:00 - 15:00 | Domenica Chiuso"
  },

  ru: {
    // Navbar
    nav_home: "Главная",
    nav_menu: "Меню",
    nav_gallery: "Галерея",
    nav_reservations: "Бронирование",
    nav_contact: "Контакты",
    nav_tagline: "Аутентичная французская гастрономия",
    lang_title: "Язык",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "От отобранных вин до кинематографических блюд, каждая деталь создана для роскоши и удовольствия.",
    cta_book_table: "Забронировать столик",

    // Section titles (Index)
    section_experience: "Опыт Мишлен",
    section_experience_desc: "Люкс-ужин с изысканным обслуживанием и кинематографической атмосферой.",
    service_title: "Премиум-сервис",
    service_desc: "Внимательный и деликатный персонал, создающий безупречный вечер.",
    chefs_title: "Гурме-повара",
    chefs_desc: "Классически обученные повара с современным подходом к французской классике.",
    ambiance_title: "Элегантная Атмосфера",
    ambiance_desc: "Столы при свечах, бархатные кресла, подобранная музыка.",
    ingredients_title: "Сезонные Ингредиенты",
    ingredients_desc: "Свежие местные продукты от надежных французских ремесленников.",

    // Menu Page
    menu_title: "Наши Меню",
    menu_subtitle: "Просмотрите подобранную последовательность закусок, основных блюд и десертов.",

    // Gallery Page
    gallery_title: "Галерея",
    gallery_subtitle: "Кинематографический взгляд на нашу столовую, бар и блюда.",

    // Reservations Page
    reservations_title: "Забронировать столик",
    reservations_subtitle: "Забронируйте свой столик онлайн всего в несколько кликов.",
    reservations_form_title: "Забронируйте Свой Столик",
    form_name: "Полное имя",
    form_email: "Электронная почта",
    form_phone: "Номер телефона",
    form_date: "Дата",
    form_time: "Время",
    form_guests: "Количество гостей",
    form_message: "Специальные пожелания",
    reservations_confirm_btn: "Подтвердить Бронирование",

    // Contact Page
    contact_title: "Свяжитесь с нами",
    contact_subtitle: "Свяжитесь с нами для бронирования, частных ужинов и спецсобытий.",
    contact_details_title: "Свяжитесь с нами",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Часы работы",
    contact_hours_detail: "Пн-Пт: 09:00 - 14:00 | Сб: 12:00 - 15:00 | Воскресенье закрыто"
  },

  ja: {
    // Navbar
    nav_home: "ホーム",
    nav_menu: "メニュー",
    nav_gallery: "ギャラリー",
    nav_reservations: "予約",
    nav_contact: "お問い合わせ",
    nav_tagline: "本格フレンチガストロノミー",
    lang_title: "言語",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "厳選されたワインから映画的なプレートまで、すべての詳細が贅沢と喜びのために作られています。",
    cta_book_table: "テーブルを予約",

    // Section titles (Index)
    section_experience: "ミシュラン体験",
    section_experience_desc: "上質なサービスと映画的な雰囲気を備えたラグジュアリーダイニング。",
    service_title: "プレミアムサービス",
    service_desc: "注意深く配慮あるスタッフがシームレスな夜を演出します。",
    chefs_title: "グルメシェフ",
    chefs_desc: "古典的な訓練を受けたシェフが、フレンチクラシックに現代的な工夫を加えます。",
    ambiance_title: "優雅な雰囲気",
    ambiance_desc: "ろうそくの光が灯るテーブル、ベルベットのシーティング、厳選された音楽。",
    ingredients_title: "季節の食材",
    ingredients_desc: "信頼できるフランスの職人から仕入れた新鮮な地元産の食材。",

    // Menu Page
    menu_title: "私たちのメニュー",
    menu_subtitle: "前菜、メインディッシュ、デザートの厳選されたシーケンスを閲覧してください。",

    // Gallery Page
    gallery_title: "ギャラリー",
    gallery_subtitle: "ダイニングルーム、バー、プレートの映画的な眺め。",

    // Reservations Page
    reservations_title: "テーブルを予約",
    reservations_subtitle: "わずか数クリックでオンラインで予約を確保してください。",
    reservations_form_title: "テーブルを予約",
    form_name: "フルネーム",
    form_email: "メール",
    form_phone: "電話番号",
    form_date: "日付",
    form_time: "時間",
    form_guests: "ゲスト数",
    form_message: "特別なリクエスト",
    reservations_confirm_btn: "予約を確認",

    // Contact Page
    contact_title: "お問い合わせ",
    contact_subtitle: "予約、プライベートディニング、スペシャルイベントについてお問い合わせください。",
    contact_details_title: "お問い合わせ",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "営業時間",
    contact_hours_detail: "月-金: 09:00 - 14:00 | 土: 12:00 - 15:00 | 日曜日 休業"
  },

  zh: {
    // Navbar
    nav_home: "首页",
    nav_menu: "菜单",
    nav_gallery: "画廊",
    nav_reservations: "预订",
    nav_contact: "联系我们",
    nav_tagline: "正宗法式高级料理",
    lang_title: "语言",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "从精选葡萄酒到电影般的盘子，每一个细节都为奢华和喜悦而精心打造。",
    cta_book_table: "预订餐位",

    // Section titles (Index)
    section_experience: "米其林体验",
    section_experience_desc: "具有精致服务和电影般氛围的豪华用餐。",
    service_title: "高级服务",
    service_desc: "周到细致的员工打造完美夜晚。",
    chefs_title: "美食大厨",
    chefs_desc: "经过古典培训的厨师，赋予法国经典菜肴现代风味。",
    ambiance_title: "优雅氛围",
    ambiance_desc: "烛光摇曳的餐桌、天鹅绒座椅、精心挑选的音乐。",
    ingredients_title: "季节食材",
    ingredients_desc: "来自可信任的法国工匠的新鲜本地农产品。",

    // Menu Page
    menu_title: "我们的菜单",
    menu_subtitle: "浏览精心策划的前菜、主菜和甜点序列。",

    // Gallery Page
    gallery_title: "画廊",
    gallery_subtitle: "我们餐厅、酒吧和菜肴的电影般视角。",

    // Reservations Page
    reservations_title: "预订餐位",
    reservations_subtitle: "仅需几次点击即可在线预订。",
    reservations_form_title: "预订您的餐位",
    form_name: "全名",
    form_email: "电子邮件",
    form_phone: "电话号码",
    form_date: "日期",
    form_time: "时间",
    form_guests: "客人人数",
    form_message: "特殊要求",
    reservations_confirm_btn: "确认预订",

    // Contact Page
    contact_title: "联系我们",
    contact_subtitle: "联系我们进行预订、私人用餐和特殊活动。",
    contact_details_title: "联系我们",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "营业时间",
    contact_hours_detail: "周一至周五: 09:00 - 14:00 | 周六: 12:00 - 15:00 | 周日休息"
  },

  nl: {
    // Navbar
    nav_home: "Home",
    nav_menu: "Menu",
    nav_gallery: "Galerij",
    nav_reservations: "Reserveringen",
    nav_contact: "Contact",
    nav_tagline: "Authentieke Franse gastronomie",
    lang_title: "Taal",

    // Index/Hero
    hero_title: "Bistro Aldo",
    hero_subtitle: "Van geselecteerde wijnen tot cinematische borden, elk detail is ontworpen voor luxe en genot.",
    cta_book_table: "Tafel Reserveren",

    // Section titles (Index)
    section_experience: "Michelin-ervaring",
    section_experience_desc: "Luxe dineren met verfijnd service en cinematische sfeer.",
    service_title: "Premium Service",
    service_desc: "Attent en discreet personeel dat een naadloze avond creëert.",
    chefs_title: "Gourmet-koks",
    chefs_desc: "Klassiek opgeleid koks met een modern tintje op Franse klassieken.",
    ambiance_title: "Elegante Sfeer",
    ambiance_desc: "Tafels bij kaarslicht, fluwelen zitplaatsen, geselecteerde muziek.",
    ingredients_title: "Seizoensingrediënten",
    ingredients_desc: "Verse, lokale producten van vertrouwde Franse ambachtslieden.",

    // Menu Page
    menu_title: "Onze Menu's",
    menu_subtitle: "Blader door een geselecteerde reeks voorgerechten, hoofdgangen en desserts.",

    // Gallery Page
    gallery_title: "Galerij",
    gallery_subtitle: "Een cinematische blik op onze eetkamer, bar en borden.",

    // Reservations Page
    reservations_title: "Tafel Reserveren",
    reservations_subtitle: "Zorg voor uw reservering online in slechts een paar klikken.",
    reservations_form_title: "Reserveer Uw Tafel",
    form_name: "Volledige Naam",
    form_email: "E-mailadres",
    form_phone: "Telefoonnummer",
    form_date: "Datum",
    form_time: "Tijd",
    form_guests: "Aantal Gasten",
    form_message: "Speciale Verzoeken",
    reservations_confirm_btn: "Reservering Bevestigen",

    // Contact Page
    contact_title: "Neem Contact Op",
    contact_subtitle: "Neem contact op voor reserveringen, privé dineren en speciale evenementen.",
    contact_details_title: "Neem contact op",
    contact_address: "42 Rue de l'Elysée, Paris 75008",
    contact_phone: "+33 (0)1 23 45 67 89",
    contact_email: "bistroaldo@gmail.com",
    contact_hours: "Openingstijden",
    contact_hours_detail: "Ma-Vr: 09:00 - 14:00 | Za: 12:00 - 15:00 | Zondag Gesloten"
  }
};
