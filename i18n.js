/* ============================================================
   200 Mates — i18n.js — ES / EN / PT
   ============================================================ */

const i18n = {
  es: {
    // Header & counters
    title:            "Vuelta al Mundo en unos 200 Mates",
    mates:            "Mates",
    countries:        "Países",
    spinHint:         "← Girá el globo →",

    // Gallery
    statMates:        "Mates",
    statCountries:    "Países",
    recentMates:      "Últimos Mates",  

    // Form
    //                "Cebate uno",  //FALTA LA PARTE DE CEBATE UNO, NO ENCUENTRO LA ETIQUETA EN EL HTML
    gpsRequesting:    "📍 Solicitando ubicación…",
    gpsDetecting:     "📍 Detectando ubicación…",
    gpsNoGps:         "⚠️ GPS no disponible — ingresá tu país manualmente.",
    gpsNoPermission:  "⚠️ Sin GPS — ingresá tu país manualmente.",
    gpsManual:        " — escribí tu país",
    gpsSelected:        "País seleccionado: ", //Que hace esto? Nunca lo vi aparecer, si no aparece nunca eliminar
   // labelCountry:     "País*",
   // labelYerba:       "Yerba *",
   labelPrep:           "Estilo favorito*",
   labelMateType:       "Tipo de mate",
   labelPhoto:          "Foto *",
   // optional:         "opcional",
    placeholderName:    "Nombre*",
    placeholderCountry: "País",
    placeholderYerba:   "Marca de yerba",
    placeholderMateType:"Madera, Acero, Vidrio,...",
    bitter:           "Amargo",
    sweet:            "Dulce",
    terere:           "Tereré",
    brewedMateTea:    "Mate Cocido", //Ver de agregarlo
    fileDropText:     "Arrastrá o hacé clic para subir",
    fileDropSub:      "JPG, PNG — máx 5MB",
    submitBtn:        "Enviar",
   // submitBtnLoading: "Enviando…",

    // Alerts
    alertRequired:    "Por favor completá los campos obligatorios y adjuntá una foto.",
    alertSuccess:     "¡Mate enviado! Aparecerá en el mapa una vez aprobado.",
    alertError:       "Error al enviar: ",

    // Gallery & lightbox
    // noMates:          "¡Sé el primero en cebar un mate! 🧉",
    errorLoading:     "Error cargando mates.",
    anonymous:        "Anónimo", //Que hace esto? Nunca lo vi aparecer, si no aparece nunca eliminar
    mateId:           "#: ",
    copyId:           "copiar", 
    copied:           "copiado",
    deleteNote:       "Para solicitar la eliminación de tu mate, compartí este # con nosotros.",

    // Menu nav
    menuAbout:        "El proyecto",
    menuSupport:      "Colaborá",
    menuModeration:   "Convivencia",
    menuPress:        "Noticias y Medios",
    menuFaqs:         "FAQs",
    menuTerms:        "Reglas y Consejos",
    menuPrivacy:      "Privacidad",
    menuContact:      "Contacto",

    // About
    aboutText1:       "Somos un proyecto colaborativo que nace del deseo de visibilizar una tradición profundamente arraigada en el sur de América del Sur: el mate.",
    aboutText2:       "Más que una bebida, el mate es hospitalidad, encuentro y pertenencia.",
    aboutText3:       "Este proyecto busca mapear el mate en el mundo para entender cómo viaja y cómo se transforma. Queremos saber cuándo se toma y en qué contextos: solo o acompañado; por la mañana, por la tarde o por la noche; trabajando o descansando; en casa o al aire libre; con pan, galletas, bizcochos, queso o fruta; dulce o amargo; caliente o frío; con o sin yuyos.",
    aboutText4:       "En tiempos en los que lo extranjero suele mirarse con desconfianza, creemos que compartir prácticas cotidianas es una manera de generar cercanía. Conocer cómo vive el otro, qué rituales sostiene y qué tradiciones lo acompañan nos permite entendernos más allá de las fronteras.",

    // Support
    supportText1:     "Por ahora, todos los recursos que usamos son gratuitos, pero en el futuro podría ser necesario migrar a plataformas de pago. Cuando eso ocurra, habrá una opción de donación para ayudar a mantener el sitio activo.",
    supportText2:     "Mientras tanto, la forma más valiosa en que nos podés ayudar es mejorando las traducciones. Si tenés sugerencias, ¡enviánoslas a <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>!", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
  
    // Moderation
    modText1:         "Antes de aparecer en el mapa, todos los registros son revisados por un pequeño grupo de voluntarios. Esto nos ayuda a que el contenido sea seguro, respetuoso y que todos podamos disfrutar del proyecto.",
    modText2:         "No publicaremos registros que:",
    modText3:         "Comprometan tu anonimato o el de otros: no se aprobarán publicaciones que incluyan apellidos, números de teléfono, correos electrónicos, perfiles de redes sociales, fotos donde se vean claramente los rostros o direcciones exactas.",
    modText4:         "Inciten al odio: no permitimos publicaciones que degraden, amenacen o discriminen a alguien por su raza, etnia, nacionalidad, capacidades, orientación sexual, sexo, identidad de género o clase social.",
    modText5:         "Sean spam o publicidad: no se publicará contenido publicitario ni mensajes repetitivos.",
    modText6:         "No estén relacionadas con el mate: solo publicamos fotos y registros sobre esta tradición.",
    modText7:         "La revisión puede tomar un poquito de tiempo. ¡Gracias por tu paciencia y por formar parte de esta comunidad!",

    // Press
    pressText1:       "¿Sos periodista o creador de contenido y querés escribir sobre este proyecto? ¡Nos encantaría que lo hagas!",

    // FAQs
    //faqTitle:         "Preguntas Frecuentes",
    faq1q:            "¿Por qué no veo mi registro en el mapa?",
    faq1a:            "No te preocupes, en la mayoría de los casos es porque todavía no hemos tenido tiempo de revisarlo. Todos los registros son revisados por un pequeño grupo de voluntarios antes de aparecer en el mapa, para asegurarnos de que sean respetuosos y seguros. Tan pronto como lo revisemos, aparecerá en el mapa.",
   
    faq2q:            "¿Puedo eliminar mi registro?",
    faq2a:            "Sí, claro. Si querés que eliminemos tu registro, envíanos un correo a <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>! con el # de tu registro y el asunto "Eliminar mi registro". Lo borraremos lo antes posible.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    
    faq3q:            "¿Qué datos se recopilan?",
    faq3a:            "Solo usamos la información que compartís en el formulario, la ubicación que decidiste mostrar en el mapa y la fecha y hora de envío. No recolectamos ningún otro dato personal.",

    // Terms
    //termsTitle:       "Términos de Uso",
    //termsSub:         "Última actualización: febrero 2026",
    terms1title:      "Condiciones de Uso",
    terms1text:       "Al usar nuestros servicios, aceptas nuestras Condiciones de Uso y nuestra Política de Privacidad. Si no estás de acuerdo, por favor, no uses nuestros servicios.",
    
    terms2title:      "Publicar contenido",
    terms2text:       "Al subir contenido, nos das permiso a nosotros y a otros usuarios para verlo, compartirlo y usarlo de manera personal y respetuosa.",
   
    terms3title:      "Eliminar contenido",
    terms3text:       "Podés pedir que eliminemos un registro. Envianos un correo a <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>! indicando el # registro que querés eliminar.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    
    terms4title:      "Normas sobre el contenido",
    terms4text:       "- No publiques contenido que comprometa la privacidad de nadie.", // No se poner viñetas
    terms5text:       "- No se permiten publicaciones que promuevan odio, violencia o discriminación.", // No se poner viñetas
    terms6text:       "- No se permite spam ni publicidad.",// No se poner viñetas
    terms7text:       "- Solo publicamos contenido relacionado con la tradición del mate.",// No se poner viñetas
    
    terms8title:      "Uso personal",
    terms8text:       "La plataforma es solo para uso personal y no comercial.",

    // Privacy
   // privacyTitle:     "Política de Privacidad",
    privacySub:       "Última actualización: febrero 2026",
    
    priv1text:        "Gracias por ser parte y por compartir tu experiencia. Sabemos que detrás de cada aporte hay una historia, y queremos cuidar ese gesto.",
    
    priv2title:       "Qué se publica",
    priv2text:        "Cuando enviás tu aporte, se muestra en el mapa la información que completás en el formulario (nombre o seudónimo, detalles y foto) junto con el punto que elegís. También guardamos la fecha del envío.",
    
    priv3title:       "Participación simple y anónima",
    priv3text:        "No necesitás crear una cuenta ni compartir correo electrónico, contraseña o redes sociales. Podés participar con tu nombre o con un seudónimo.",
    
    priv4title:       "Cuidado de la información",
    priv4text:        "Tomamos medidas razonables para proteger lo que se publica. Aun así, como en cualquier espacio en internet, no podemos garantizar seguridad absoluta.",
    
    priv5title:       "Datos técnicos",
    priv5text:        "Podemos recopilar información técnica sobre el uso del sitio (como cantidad de visitas) para mejorar la experiencia de uso, pero esta información no se vincula con aportes individuales.",
    
    priv6title:       "Servicios externos",
    priv6text:        "Para que el sitio funcione, utilizamos algunas herramientas técnicas de terceros, que cuentan con sus propias políticas de privacidad.",
    
    priv7title:       "Edad mínima",
    priv7text:        "La plataforma está pensada para personas mayores de 13 años.",
    
    priv8title:       "Cambios",
    priv8text:        "Si en algún momento actualizamos este texto, la versión publicada será la vigente.",

    // Contact
    //contactTitle:     "Contacto",
    contactSub:       "¿Tenés preguntas, sugerencias o querés colaborar con el proyecto? Escribinos a <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>! y te responderemos lo antes posible.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    //contactGeneral:   "Consultas generales",
    //contactMod:       "Moderación y reportes",
    //contactPress:     "Prensa y medios",
    //contactPrivacy:   "Privacidad y datos",
    //contactDelete:    "Eliminar mi mate",
    //contactDeleteNote: "Envianos el ID de tu mate y lo eliminamos en 48 hs.",
    //contactSocial:    "También podés encontrarnos en redes sociales. Compartí tu mate con el hashtag #200Mates",
    
    //modal
    successTitle:  "¡Mate enviado!",
    successBody1:  "Tu mate está en revisión. Una vez aprobado, aparecerá en el mapa.",
    //successBody2:  "Gracias por sumarte a la vuelta al mundo. ¡Salud!",
    //successBtn:    "Perfecto, ¡salud!",
  },

  //EN ===============================================================================================================================

  en: {
      // Header & counters
    title:            "Around the World in about 200 Mates",
    mates:            "Mates",
    countries:        "Countries",
    spinHint:         "← Spin the globe →",

    // Gallery
    statMates:        "Mates",
    statCountries:    "Countries",
    recentMates:      "Last Mates",  

    // Form
    //                "Make yourself a mate",  //FALTA LA PARTE DE CEBATE UNO, NO ENCUENTRO LA ETIQUETA EN EL HTML
    gpsRequesting:   "📍 Requesting your location…",
    gpsDetecting:    "📍 Detecting your location…",
    gpsNoGps:        "⚠️ GPS not available — please enter your country manually.",
    gpsNoPermission: "⚠️ Location access not enabled — please enter your country manually.",
    gpsManual:       " — type your country",
    gpsSelected:        "País seleccionado: ", //Que hace esto? Nunca lo vi aparecer, si no aparece nunca eliminar
   // labelCountry:     "País*",
   // labelYerba:       "Yerba *",
   labelPrep:           "Favorite style*",
   labelMateType:       "Mate Type",
   labelPhoto:          "Photo *",
   // optional:         "opcional",
    placeholderName:    "Name*",
    placeholderCountry: "Country*",
    placeholderYerba:   "Yerba Brand*",
    placeholderMateType:"Wood, Stainless Steel, Glass,...",
    bitter:           "Bitter",
    sweet:            "Sweet",
    terere:           "Tereré",
    brewedMateTea:    "Brewed Mate Tea" //Ver de agregarlo
    fileDropText:     "Drag or click to upload",
    fileDropSub:      "JPG, PNG — máx 5MB",
    submitBtn:        "Submit",
   // submitBtnLoading: "Enviando…",

    // Alerts
    alertRequired: "Please complete the required fields and add a photo.",
    alertSuccess:  "Your mate is on its way! It will show up on the map once approved.",
    alertError:    "Oops! Something went wrong: ",

    // Gallery & lightbox
    // noMates:          "¡Sé el primero en cebar un mate! 🧉",
    errorLoading: "Error loading mates.",
    anonymous:    "Anonymous",
    mateId:       "#: ",
    copyId:       "copy",
    copied:       "copied",
    deleteNote:   "If you'd like to request your mate’s removal, just share this # with us.",

    // Menu nav
    menuAbout:        "The Project",
    menuSupport:      "Help Us",
    menuModeration:   "Getting Along",
    menuPress:        "News & Media",
    menuFaqs:         "FAQs",
    menuTerms:        "Rules & Tips",
    menuPrivacy:      "Privacy Policy",
    menuContact:      "Contact",

    // About
    aboutText1:       "We are a collaborative project born from the desire to make visible a tradition deeply rooted in the southern part of South America: mate.",
    aboutText2:       "More than a drink, mate is hospitality, connection, and belonging.",
    aboutText3:       "This project seeks to map mate around the world to understand how it travels and how it transforms. We want to know when it's shared and in what contexts: alone or with others; in the morning, afternoon, or at night; while working or resting; at home or outdoors; with bread, cookies, pastries, cheese, or fruit; sweet or bitter; hot or cold; with or without herbs.",
    aboutText4:       "At a time when what is foreign is often met with suspicion, we believe that sharing everyday practices is a way of creating closeness. Understanding how others live, the rituals they keep, and the traditions that accompany them allows us to connect beyond borders.",
    
    // Support
    supportText1:     "For now, all the resources we use are free, but in the future it might be necessary to move to paid platforms. When that happens, there will be an option to donate to help keep the site running.",
    supportText2:     "In the meantime, the most valuable way you can help is by improving the translations. If you have suggestions, please send them to <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>!", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
  
    // Moderation
    modText1:         "Before appearing on the map, all submissions are reviewed by a small group of volunteers. This helps ensure that the content is safe, respectful, and that everyone can enjoy the project.",
    modText2:         "We will not publish submissions that:",
    modText3:         "Compromise your privacy or others': submissions containing last names, phone numbers, email addresses, social media profiles, photos where faces are clearly visible, or exact addresses will not be approved.",
    modText4:         "Incite hate: we do not allow submissions that degrade, threaten, or discriminate against anyone based on race, ethnicity, nationality, ability, sexual orientation, sex, gender identity, or social class.",
    modText5:         "Are spam or advertising: no advertising content or repeated messages will be published.",
    modText6:         "Are unrelated to mate: we only publish photos and submissions about this tradition.",
    modText7:         "Reviews may take a little time. Thank you for your patience and for being part of this community!",

    // Press
    pressText1:       "Are you a journalist or content creator and want to write about this project? We'd love for you to do it!",

    // FAQs
    //faqTitle:         "Preguntas Frecuentes",
    faq1q:            "Why can't I see my post on the map?",
    faq1a:            "Don't worry! In most cases, it's simply because we haven't had time to review it yet. All posts are reviewed by a small group of volunteers before appearing on the map, to make sure they are respectful and safe. As soon as we review it, your post will be visible!",
   
    faq2q:            "Can I delete my post?",
    faq2a:            "Of course! If you'd like us to delete your post, please send an email to <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>! with your post's tag and the subject "Delete my post". We'll remove it as soon as possible.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    
    faq3q:            "What data does the site collect?",
    faq3a:            "We only use the information you provide in the form, the location you chose to show on the map, and the date and time of submission. We don't collect any other personal data.";
    
    // Terms
    //termsTitle:       "Términos de Uso",
    //termsSub:         "Última actualización: febrero 2026",
    terms1title:      "Terms of Use",
    terms1text:       "By using our services, you agree to our Terms of Use and Privacy Policy. If you do not agree, please do not use our services.",
    
    terms2title:      "Posting content",
    terms2text:       "When you upload content, you give us and other users permission to view, share, and use it in a personal and respectful way.",
   
    terms3title:      "Deleting content",
    terms3text:       "You can always request to remove a post. Send us an email at <a href="mailto:paintingcreatures+200mates@gmail.com" indicating # post you want deleted.>200mates</a>! ", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    
    terms4title:      "Content guidelines",
    terms4text:       "- Do not post anything that compromises anyone's privacy.", // No se poner viñetas
    terms5text:       "- Do not post content that promotes hate, violence, or discrimination.", // No se poner viñetas
    terms6text:       "- No spam or advertising is allowed.",// No se poner viñetas
    terms7text:       "- Only content related to the mate tradition will be published.",// No se poner viñetas
    
    terms8title:      "Personal use only",
    terms8text:       "The platform is for personal, non-commercial use only.",

    // Privacy
   // privacyTitle:     "Política de Privacidad",
    privacySub:       "Last updated: February 26, 2026",
    
    priv1text:        "Thank you for being part of this and for sharing your experience. We know that behind every contribution there is a story, and we want to care for that gesture.",
    
    priv2title:       "What is published",
    priv2text:        "When you submit your contribution, the information you include in the form (name or pseudonym, details and photo) appears on the map along with the point you choose. We also store the date of submission.",
    
    priv3title:       "Simple and anonymous participation",
    priv3text:        "You do not need to create an account or share an email address, password, or social media profile. You may participate using your name or a pseudonym.",
    
    priv4title:       "Caring for your information",
    priv4text:        "We take reasonable measures to protect what is published. Even so, as with any space on the internet, we cannot guarantee absolute security.",

    priv5title:       "Technical data",
    priv5text:        "We may collect basic technical information about how the site is used (such as number of visits) to improve the experience. This information is not linked to individual contributions.",
    
    priv6title:       "Third-party services",
    priv6text:        "To keep the site running, we use certain technical tools provided by third parties. These services have their own privacy policies.",
    
    priv7title:       "Minimum age",
    priv7text:        "The platform is intended for people aged 13 and older.",
    
    priv8title:       "Changes",
    priv8text:        "If we update this text, the version published on the site will be the current one.",

    // Contact
    //contactTitle:     "Contacto",
    contactSub:       "Do you have questions, suggestions, or want to collaborate with the project? Write to us at <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>! and we'll get back to you as soon as possible.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    //contactGeneral:   "Consultas generales",
    //contactMod:       "Moderación y reportes",
    //contactPress:     "Prensa y medios",
    //contactPrivacy:   "Privacidad y datos",
    //contactDelete:    "Eliminar mi mate",
    //contactDeleteNote: "Envianos el ID de tu mate y lo eliminamos en 48 hs.",
    //contactSocial:    "También podés encontrarnos en redes sociales. Compartí tu mate con el hashtag #200Mates",
    
    //modal
    successTitle: "Your mate is on its way!",
    successBody1: "It’s now under review and will appear on the map once approved.",
    //successBody2:  "Gracias por sumarte a la vuelta al mundo. ¡Salud!",
    //successBtn:    "Perfecto, ¡salud!",  
  
  },

  //PT ===============================================================================================================================

  pt: {
     // Header & counters
    title:            "Volta ao Mundo em cerca de 200 Mates",
    mates:            "Mates",
    countries:        "Países na rodada",
    spinHint:         "← Gira o globo →",

    // Gallery
    statMates:        "Mates",
    statCountries:    "Paises",
    recentMates:      "Últimos Mates",  

    // Form
    //                "Cebate uno",  //FALTA LA PARTE DE CEBATE UNO, NO ENCUENTRO LA ETIQUETA EN EL HTML
    gpsRequesting:   "📍 Solicitando sua localização…",
    gpsDetecting:    "📍 Detectando sua localização…",
    gpsNoGps:        "⚠️ GPS não disponível — por favor, informe seu país manualmente.",
    gpsNoPermission: "⚠️ Sem acesso à localização — por favor, informe seu país manualmente.",
    gpsManual:       " — digite seu país",
    gpsSelected:     "País selecionado: ", //Que hace esto? Nunca lo vi aparecer, si no aparece nunca eliminar
   // labelCountry:     "País*",
   // labelYerba:       "Yerba *",
   labelPrep:           "Estilo favorito*",
   labelMateType:       "Tipo de mate",
   labelPhoto:          "Foto *",
   // optional:         "opcional",
    placeholderName:    "Nome*",
    placeholderCountry: "País",
    placeholderYerba:   "Marca de Erva-Mate",
    placeholderMateType: "Madeira, Aço, Vidro,...",
    bitter:              "Amargo",
    sweet:               "Doce",
    terere:              "Tererê",
    brewedMateTea:        "Chá Mate" //Ver de agregarlo
    fileDropText:        "Arraste ou clique para enviar",
    fileDropSub:         "JPG, PNG — máx. 5MB",
    submitBtn:           "Enviar",
   // submitBtnLoading: "Enviando…",

    // Alerts
    alertRequired: "Por favor, complete os campos obrigatórios e envie uma foto.",
    alertSuccess:  "Seu mate foi enviado! Ele aparecerá no mapa assim que for aprovado.",
    alertError:    "Ops! Algo deu errado ao enviar: ",

    // Gallery & lightbox
    // noMates:          "¡Sé el primero en cebar un mate! 🧉",
    errorLoading:     "Erro ao carregar mates.",
    anonymous:        "Anônimo", //Que hace esto? Nunca lo vi aparecer, si no aparece nunca eliminar
    mateId:       "#: ",
    copyId:       "copiar",
    copied:       "copiado",
    deleteNote: "Se quiser remover seu mate, é só compartilhar este # com a gente.",

    // Menu nav
    menuAbout:      "O projeto",
    menuSupport:    "Colabore",
    menuModeration: "Convivência",
    menuPress:      "Notícias e Mídia",
    menuFaqs:       "FAQs",
    menuTerms:      "Regras e Dicas",
    menuPrivacy:    "Privacidade",
    menuContact:    "Contato",

    // About
    aboutText1:  "Somos um projeto colaborativo, que nasceu do desejo de dar visibilidade a uma tradição profundamente enraizada no sul da América do Sul: o mate.",     
    aboutText2:  "Mais do que uma bebida, o mate é hospitalidade, encontro e pertencimento.",
    aboutText3:  "Este projeto busca mapear o mate pelo mundo para entender como ele viaja e como se transforma. Queremos saber quando ele é consumido e em que contextos: sozinho ou acompanhado; de manhã, à tarde ou à noite; trabalhando ou descansando; em casa ou ao ar livre; com pão, biscoitos, queijo ou fruta; doce ou amargo; quente ou frio; com ou sem ervas.",
    aboutText4:  "Em tempos em que o que é estrangeiro muitas vezes é visto com desconfiança, acreditamos que compartilhar práticas cotidianas é uma forma de criar proximidade. Conhecer como o outro vive, quais rituais mantém e quais tradições acompanham sua vida nos permite nos entender além das fronteiras.",

    // Support
    supportText1:     "Por enquanto, todos os recursos que usamos são gratuitos, mas no futuro pode ser necessário migrar para plataformas pagas. Quando isso acontecer, haverá uma opção de doação para ajudar a manter o site ativo.",
    supportText2:     "Enquanto isso, a forma mais valiosa de nos ajudar é aprimorando as traduções. Se tiver sugestões, envie para <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>!", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
  
    // Moderation
    modText1:         "Antes de aparecer no mapa, todos os registros são revisados por um pequeno grupo de voluntários. Isso nos ajuda a garantir que o conteúdo seja seguro, respeitoso e que todos possam aproveitar o projeto.",
    modText2:         "Não publicaremos registros que:",
    modText3:         "Comprometam o anonimato seu ou de outros: não serão aprovadas publicações com sobrenomes, números de telefone, e-mails, perfis de redes sociais, fotos com rostos visíveis ou endereços exatos.",
    modText4:         "Incitem ao ódio: não permitimos publicações que degradem, ameacem ou discriminem alguém por raça, etnia, nacionalidade, capacidades, orientação sexual, sexo, identidade de gênero ou classe social.",
    modText5:         "Sejam spam ou publicidade: nenhum conteúdo publicitário ou mensagem repetitiva será publicado.",
    modText6:         "Não estejam relacionados ao mate: publicamos apenas fotos e registros sobre essa tradição.",
    modText7:         "A revisão pode levar um pouquinho. Obrigado pela paciência e por fazer parte desta comunidade!",

    // Press
    pressText1:       "Você é jornalista ou criador de conteúdo e quer escrever sobre este projeto? Adoraríamos!",

    // FAQs
    //faqTitle:         "Preguntas Frecuentes",
    faq1q:            "Por que não vejo meu registro no mapa?",
    faq1a:            "Fique tranquilo/a, na maioria dos casos é porque ainda não tivemos tempo de revisá-lo. Todos os registros passam por um pequeno grupo de voluntários antes de aparecer no mapa, para garantir que sejam respeitosos e seguros. Assim que for revisado, seu registro aparecerá no mapa!",
   
    faq2q:            "Posso excluir meu registro?",
    faq2a:            "Claro que sim! Se você quiser que removamos seu registro, envie um e-mail para <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>!com o # do seu registro e o assunto "Excluir meu registro". Nós o retiraremos o mais rápido possível.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    
    faq3q:            "Quais dados o site coleta?",
    faq3a:            "Usamos apenas as informações que você compartilha no formulário, a localização que escolheu mostrar no mapa, e a data e hora do envio. Não coletamos nenhum outro dado pessoal.",

    // Terms
    //termsTitle:       "Términos de Uso",
    //termsSub:         "Última actualización: febrero 2026",
    terms1title:      "Termos de Uso",
    terms1text:       "Ao usar nossos serviços, você concorda com nossos Termos de Uso e Política de Privacidade. Se não concordar, por favor, não utilize nossos serviços.",
    
    terms2title:      "Publicar conteúdo",
    terms2text:       "Ao enviar conteúdo, você nos dá permissão e aos outros usuários para visualizá-lo, compartilhá-lo e usá-lo de forma pessoal e respeitosa.",
   
    terms3title:      "Excluir conteúdo",
    terms3text:       "Você pode solicitar a exclusão de um registro. Envie um e-mail para <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>! informando qual é o # que deseja remover.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    
    terms4title:      "Regras de conteúdo",
    terms4text:       "- Não publique nada que comprometa a privacidade de alguém.", // No se poner viñetas
    terms5text:       "- Não publique conteúdo que promova ódio, violência ou discriminação.", // No se poner viñetas
    terms6text:       "- Não é permitido spam ou publicidade.",// No se poner viñetas
    terms7text:       "- Só publicamos conteúdo relacionado à tradição do mate.",// No se poner viñetas
    
    terms8title:      "Uso pessoal",
    terms8text:       "A plataforma é para uso pessoal e não comercial.",

    // Privacy
   // privacyTitle:     "Política de Privacidad",
    privacySub:       "Última atualização: 26 de fevereiro de 2026",
    
    priv1text:        "Obrigado por fazer parte e por compartilhar sua experiência. Sabemos que por trás de cada contribuição existe uma história, e queremos cuidar desse gesto.",
    
    priv2title:       "O que é publicado",
    priv2text:        "Quando você envia sua contribuição, as informações preenchidas no formulário (nome ou pseudônimo, detalhes e foto) aparecem no mapa junto com o ponto que você escolhe. Também registramos a data do envio.",
    
    priv3title:       "Participação simples e anônima",
    priv3text:        "Não é necessário criar conta nem compartilhar e-mail, senha ou redes sociais. Você pode participar usando seu nome ou um pseudônimo.",
    
    priv4title:       "Cuidado com as informações",
    priv4text:        ".Adotamos medidas razoáveis para proteger o que é publicado. Ainda assim, como em qualquer espaço na internet, não podemos garantir segurança absoluta.",
    
    priv5title:       "Dados técnicos",
    priv5text:        "Podemos coletar informações técnicas básicas sobre o uso do site (como número de visitas) para melhorar a experiência. Essas informações não são vinculadas a contribuições individuais.",
    
    priv6title:       "Serviços de terceiros",
    priv6text:        "Para que o site funcione, utilizamos algumas ferramentas técnicas de terceiros. Cada uma possui sua própria política de privacidade.",
    
    priv7title:       "Idade mínima",
    priv7text:        "A plataforma é destinada a pessoas com 13 anos ou mais.",
    
    priv8title:       "Alterações",
    priv8text:        "Se atualizarmos este texto, a versão publicada no site será a vigente.",

    // Contact
    //contactTitle:     "Contacto",
    contactSub:       "Você tem perguntas, sugestões ou quer colaborar com o projeto? Escreva para <a href="mailto:paintingcreatures+200mates@gmail.com">200mates</a>! e responderemos o mais rápido possível.", //Esto fue lo que hice en HTML para que no aparezca el correo visible y solo aparezca como un link, no se como hacerlo en este lenguaje
    //contactGeneral:   "Consultas generales",
    //contactMod:       "Moderación y reportes",
    //contactPress:     "Prensa y medios",
    //contactPrivacy:   "Privacidad y datos",
    //contactDelete:    "Eliminar mi mate",
    //contactDeleteNote: "Envianos el ID de tu mate y lo eliminamos en 48 hs.",
    //contactSocial:    "También podés encontrarnos en redes sociales. Compartí tu mate con el hashtag #200Mates",
    
    //modal
    successTitle: "Seu mate foi enviado!",
    successBody1: "Ele está em revisão e aparecerá no mapa assim que for aprovado.",
    //successBody2:  "Gracias por sumarte a la vuelta al mundo. ¡Salud!",
    //successBtn:    "Perfecto, ¡salud!",
  },

  }
};

// Export para uso global
window.i18n = i18n;