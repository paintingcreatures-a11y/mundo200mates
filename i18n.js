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
    statCountries:    "Paises",
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

  en: {
      // Header & counters
    title:            "Vuelta al Mundo en unos 200 Mates",
    mates:            "Mates",
    countries:        "Países",
    spinHint:         "← Girá el globo →",

    // Gallery
    statMates:        "Mates",
    statCountries:    "Paises",
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

  pt: {
    title:            "Volta ao Mundo em cerca de 200 Mates",
    mates:            "mates",
    countries:        "países",
    spinHint:         "← gire o globo →",
    recentMates:      "Últimos Mates",
    recentTag:        "RECENTES",
    formDesc:         "Preencha os dados, escolha seu país no globo e envie uma foto.",
    gpsRequesting:    "📍 Solicitando localização…",
    gpsDetecting:     "📍 Detectando localização…",
    gpsNoGps:         "⚠️ GPS indisponível — insira seu país manualmente.",
    gpsNoPermission:  "⚠️ Sem GPS — insira seu país manualmente.",
    gpsManual:        " — escreva seu país",
    gpsSelected:      "🌍 País selecionado: ",
    labelName:        "Nome *",
    labelCountry:     "País *",
    labelYerba:       "Erva *",
    labelPrep:        "Doce ou amargo? *",
    labelMateType:    "Tipo de cuia",
    labelPhoto:       "Foto do mate *",
    optional:         "opcional",
    placeholderName:  "Qual é o seu nome?",
    placeholderCountry: "Seu país",
    placeholderYerba: "Marca de erva",
    placeholderMateType: "Cuia, garrafa, vidro…",
    bitter:           "Amargo",
    sweet:            "Doce",
    terere:           "Tereré",
    fileDropText:     "Arraste ou clique para enviar",
    fileDropSub:      "JPG, PNG — máx 5MB",
    submitBtn:        "Enviar mate 🧉",
    submitBtnLoading: "Enviando…",
    alertRequired:    "Por favor preencha todos os campos obrigatórios e anexe uma foto.",
    alertSuccess:     "Mate enviado! Aparecerá no mapa após aprovação. 🧉",
    alertError:       "Erro ao enviar: ",
    noMates:          "Seja o primeiro a compartilhar um mate! 🧉",
    errorLoading:     "Erro ao carregar mates.",
    anonymous:        "Anônimo",
    mateId:           "ID do mate: ",
    copyId:           "copiar",
    copied:           "✓ copiado",
    deleteNote:       "Para solicitar a exclusão do seu mate, compartilhe este ID conosco.",
    menuAbout:        "Sobre",
    menuSupport:      "Apoie",
    menuModeration:   "Moderação",
    menuPress:        "Imprensa",
    menuFaqs:         "FAQs",
    menuTerms:        "Termos de Uso",
    menuPrivacy:      "Privacidade",
    menuContact:      "Contato",
    aboutText1:       "200 Mates é uma plataforma comunitária de cartografia cultural que arquiva digitalmente a experiência global do chimarrão em relação ao espaço físico.",
    aboutText2:       "O projeto oferece uma interface para registrar colaborativamente a cartografia da cultura do mate — de praças e escritórios ao meio do oceano — a fim de preservar nossas histórias e realidades coletivas.",
    aboutText3:       "Ao mapear a cultura do mate em suas múltiplas dimensões, o projeto gera afinidades através das diferenças e além das fronteiras, revelando as formas pelas quais estamos intimamente conectados.",
    supportText1:     "200 Mates é um projeto independente mantido por voluntários. Seu apoio nos ajuda a manter o servidor, o domínio e o desenvolvimento de novas funcionalidades.",
    supportText2:     "Se quiser contribuir com o projeto, pode nos contatar ou compartilhar o app com seus amigos mater@s ao redor do mundo.",
    supportCta:       "Contatar / Doar",
    modText1:         "Todos os mates enviados são revisados antes de aparecer no mapa. Nossa equipe de moderação verifica se o conteúdo é apropriado e relacionado à cultura do mate.",
    modText2:         "Se encontrar conteúdo inadequado ou quiser reportar um mate, entre em contato diretamente com o ID do mate.",
    modText3:         "Os mates são revisados em até 24-48 horas após o envio.",
    pressText1:       "É jornalista ou veículo de comunicação interessado em cobrir o 200 Mates? Adoraríamos conversar.",
    pressText2:       "Para consultas de imprensa, entrevistas ou material gráfico, entre em contato.",
    pressCta:         "press@200mates.com",
    faqTitle:         "Perguntas Frequentes",
    faq1q:            "Como o meu mate aparece no mapa?",
    faq1a:            "Após enviar sua foto e dados, nossa equipe os revisa. Se o conteúdo for apropriado, o mate aparece no globo em 24-48 horas.",
    faq2q:            "E se eu não tiver GPS?",
    faq2a:            "Sem problema. Você pode digitar seu país manualmente ou clicar diretamente no globo para selecioná-lo. Usaremos a capital do país como localização.",
    faq3q:            "Posso apagar o meu mate?",
    faq3a:            "Sim. Cada mate tem um ID único visível na galeria e no lightbox. Envie esse ID para contato@200mates.com e o removemos.",
    faq4q:            "Que tipo de fotos são aceitas?",
    faq4a:            "Qualquer foto com um mate ou o momento de tomá-lo. Fotos inadequadas, ofensivas ou sem relação com o mate serão rejeitadas.",
    faq5q:            "É necessário se registrar?",
    faq5a:            "Não. O 200 Mates não exige registro ou conta. Basta preencher o formulário, enviar a foto e pronto.",
    faq6q:            "Em quais países está disponível?",
    faq6a:            "200 Mates é global. Qualquer pessoa em qualquer lugar do mundo pode compartilhar seu mate.",
    termsTitle:       "Termos de Uso",
    termsSub:         "Última atualização: fevereiro de 2026",
    terms1title:      "1. Aceitação",
    terms1text:       "Ao usar o 200 Mates você concorda com estes termos. Se não concordar, por favor não use o serviço.",
    terms2title:      "2. Conteúdo do usuário",
    terms2text:       "Ao enviar uma foto ou dados, você garante que possui os direitos necessários sobre esse conteúdo. Não envie imagens de terceiros sem o consentimento deles.",
    terms3title:      "3. Moderação",
    terms3text:       "Reservamo-nos o direito de rejeitar ou remover qualquer conteúdo que consideremos inadequado, ofensivo ou não relacionado à cultura do mate.",
    terms4title:      "4. Propriedade intelectual",
    terms4text:       "Ao enviar conteúdo, você nos concede uma licença não exclusiva para exibi-lo na plataforma. Você continua sendo o proprietário das suas fotos.",
    terms5title:      "5. Limitação de responsabilidade",
    terms5text:       "O 200 Mates é fornecido 'como está'. Não somos responsáveis por danos diretos ou indiretos decorrentes do uso do serviço.",
    terms6title:      "6. Alterações",
    terms6text:       "Podemos modificar estes termos a qualquer momento. O uso continuado do serviço implica aceitação dos novos termos.",
    privacyTitle:     "Política de Privacidade",
    privacySub:       "Última atualização: fevereiro de 2026",
    priv1title:       "Que dados coletamos?",
    priv1text:        "Coletamos o nome (pode ser apelido), país, marca de erva, tipo de cuia, foto e coordenadas GPS opcionais que você fornece ao preencher o formulário.",
    priv2title:       "Para que usamos os dados?",
    priv2text:        "Os dados são usados exclusivamente para exibir seu mate no globo interativo e na galeria. Não usamos seus dados para publicidade nem os vendemos a terceiros.",
    priv3title:       "Onde são armazenados?",
    priv3text:        "Os dados são armazenados no Supabase (infraestrutura em nuvem). As fotos ficam em um bucket público, acessível a qualquer visitante do site.",
    priv4title:       "Como excluir seus dados?",
    priv4text:        "Você pode solicitar a exclusão do seu mate a qualquer momento enviando o ID do mate para contato@200mates.com. As solicitações são processadas em 48 horas.",
    priv5title:       "Cookies",
    priv5text:        "Não usamos cookies de rastreamento nem análises de terceiros. O site pode usar armazenamento local do navegador exclusivamente para sua preferência de idioma.",
    priv6title:       "Contato",
    priv6text:        "Para dúvidas sobre privacidade, escreva para: privacidade@200mates.com",
    contactTitle:     "Contato",
    contactSub:       "Estamos aqui para ajudar.",
    contactGeneral:   "Dúvidas gerais",
    contactMod:       "Moderação e denúncias",
    contactPress:     "Imprensa e mídia",
    contactPrivacy:   "Privacidade e dados",
    contactDelete:    "Excluir meu mate",
    contactDeleteNote: "Envie-nos o ID do seu mate e o removeremos em 48h.",
    contactSocial:    "Você também pode nos encontrar nas redes sociais. Compartilhe seu mate com a hashtag #200Mates",
    successTitle:  "Chimarrão enviado! 🧉",
    successBody1:  "Seu mate está em revisão. Após aprovado, aparecerá no mapa para o mundo inteiro ver.",
    successBody2:  "Obrigado por se juntar à volta ao mundo. Saúde!",
    successBtn:    "Perfeito, saúde!",
  }
};

// Export para uso global
window.i18n = i18n;