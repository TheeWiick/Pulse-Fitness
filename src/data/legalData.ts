import type { LegalDocument } from '../types'

const updatedAt = '11 de noviembre de 2026'

const company = 'Pulse Fitness Studio S.L., con CIF B-12345678 y domicilio social en Calle Castaños 12, 03001 Alicante'

export const condiciones: LegalDocument = {
  slug: 'condiciones',
  title: 'Condiciones generales',
  intro:
    'Estas condiciones regulan el acceso y uso de las instalaciones de Pulse Fitness Studio, así como la contratación de los servicios y cuotas ofrecidos a través de este sitio web.',
  updatedAt,
  sections: [
    {
      id: 'objeto',
      title: '1. Objeto y ámbito de aplicación',
      paragraphs: [
        'Las presentes condiciones generales tienen por objeto regular la relación entre Pulse Fitness Studio y las personas usuarias que accedan a sus instalaciones, contraten alguno de sus planes o utilicen los servicios disponibles en este sitio web.',
        'El acceso al sitio web es gratuito y no requiere registro previo. La contratación de cualquier plan implica la aceptación expresa de estas condiciones, así como de la política de privacidad y de la política de cookies.',
      ],
    },
    {
      id: 'acceso',
      title: '2. Requisitos de acceso',
      bullets: [
        'Ser mayor de 16 años. Las personas de entre 14 y 16 años deberán contar con autorización firmada de su padre, madre o tutor legal.',
        'Acreditar la identidad mediante documento oficial en el momento de la primera visita.',
        'Declarar que se encuentra en condiciones psicofísicas adecuadas para la práctica de actividad física.',
        'Aceptar las normas de uso de las instalaciones y el plan de limpieza y seguridad vigente.',
      ],
    },
    {
      id: 'cuotas',
      title: '3. Cuotas, pagos y facturación',
      paragraphs: [
        'Los precios mostrados en la sección de planes se expresan en euros e incluyen los impuestos aplicables. La cuota mensual se cobra por adelantado el mismo día de cada mes, tomando como referencia la fecha de alta.',
        'La modalidad anual se factura en un único pago y supone un descuento equivalente a dos mensualidades. En caso de baja anticipada, no se realizará devolución proporcional del importe abonado salvo que la ley aplicable disponga lo contrario.',
        'Pulse Fitness Studio se reserva el derecho de actualizar las cuotas previa comunicación con al menos treinta (30) días de antelación. La persona socia podrá cancelar su plan sin penalización si no acepta la nueva tarifa.',
      ],
    },
    {
      id: 'reservas',
      title: '4. Reservas y cancelaciones',
      bullets: [
        'Las plazas para clases colectivas se reservan a través de la app o de la web y se liberan automáticamente 10 minutos antes del inicio.',
        'La cancelación de una clase debe realizarse con un mínimo de 4 horas de antelación para evitar el consumo de la reserva.',
        'Las sesiones de entrenamiento personal deben cancelarse con al menos 24 horas de antelación; en caso contrario se considerarán realizadas.',
        'La semana de prueba gratuita incluye acceso a la sala y una clase colectiva, y no es acumulable con otras promociones.',
      ],
    },
    {
      id: 'normas',
      title: '5. Normas de uso de las instalaciones',
      bullets: [
        'Es obligatorio el uso de calzado deportivo limpio y ropa adecuada para la actividad física.',
        'El material debe devolverse a su lugar después de cada uso y limpiarse con los productos disponibles.',
        'No está permitido comer en las zonas de entrenamiento ni introducir bebidas alcohólicas.',
        'Se debe respetar el descanso de las demás personas usuarias y el uso compartido de las máquinas.',
        'El personal del estudio podrá solicitar el abandono de las instalaciones a quien incumpla estas normas.',
      ],
    },
    {
      id: 'responsabilidad',
      title: '6. Responsabilidad',
      paragraphs: [
        'Pulse Fitness Studio no se hace responsable de las lesiones derivadas de un uso inadecuado de las instalaciones, de la omisión de la información médica relevante o del incumplimiento de las indicaciones del personal técnico.',
        'La persona usuaria es responsable de sus pertenencias. El estudio dispone de taquillas de uso temporal y no asume responsabilidad por objetos olvidados o sustraídos.',
        'El servicio podría verse interrumpido temporalmente por labores de mantenimiento, causas de fuerza mayor o cumplimiento de la normativa vigente. En tal caso se informará con la mayor antelación posible.',
      ],
    },
    {
      id: 'propiedad',
      title: '7. Propiedad intelectual',
      paragraphs: [
        'Todos los contenidos de este sitio web, incluidos textos, imágenes, logotipos, diseño y código fuente, son titularidad de Pulse Fitness Studio o se utilizan con la debida autorización. Queda prohibida su reproducción total o parcial sin consentimiento previo por escrito.',
      ],
    },
    {
      id: 'modificaciones',
      title: '8. Modificaciones y nulidad',
      paragraphs: [
        'Pulse Fitness Studio podrá modificar estas condiciones para adaptarlas a cambios normativos o de servicio. La versión vigente será siempre la publicada en este sitio web.',
        'Si alguna de las cláusulas fuese declarada nula o inaplicable, el resto de condiciones mantendrán su validez y se interpretarán conforme a la normativa aplicable.',
      ],
    },
    {
      id: 'legislacion',
      title: '9. Legislación aplicable',
      paragraphs: [
        `Estas condiciones se rigen por la legislación española. Cualquier controversia derivada de su interpretación o cumplimiento se someterá a los juzgados y tribunales de Alicante, sin perjuicio de los derechos que asisten a las personas consumidoras.`,
        `Para cualquier duda puedes escribirnos a hola@pulsefitness.es o dirigirte a ${company}.`,
      ],
    },
  ],
}

export const privacidad: LegalDocument = {
  slug: 'privacidad',
  title: 'Política de privacidad',
  intro:
    'En Pulse Fitness Studio tratamos tus datos personales con transparencia y con la única finalidad de prestarte el servicio que nos solicites. Aquí te explicamos qué recogemos, para qué y cómo puedes ejercer tus derechos.',
  updatedAt,
  sections: [
    {
      id: 'responsable',
      title: '1. Responsable del tratamiento',
      paragraphs: [
        `El responsable del tratamiento de tus datos es ${company}. Puedes contactar con nosotros en hola@pulsefitness.es o en el teléfono 600 000 000.`,
      ],
    },
    {
      id: 'datos',
      title: '2. Datos que recopilamos',
      bullets: [
        'Datos identificativos: nombre, apellidos, fecha de nacimiento y documento de identidad.',
        'Datos de contacto: dirección de correo electrónico, teléfono y dirección postal.',
        'Datos de salud: únicamente aquellos que declares voluntariamente para adaptar el entrenamiento (lesiones, patologías o limitaciones).',
        'Datos de uso: reservas de clases, accesos al estudio y preferencias de entrenamiento.',
        'Datos de facturación: información necesaria para emitir recibos y facturas.',
      ],
    },
    {
      id: 'finalidad',
      title: '3. Finalidad del tratamiento',
      bullets: [
        'Gestionar el alta, la reserva de la semana gratuita y la relación contractual contigo.',
        'Organizar clases, sesiones de entrenamiento y el acceso a las instalaciones.',
        'Enviarte comunicaciones informativas y comerciales sobre servicios similares, siempre que hayas prestado tu consentimiento.',
        'Atender consultas, incidencias y solicitudes de ejercicio de derechos.',
        'Cumplir con las obligaciones legales, contables y fiscales que nos resulten aplicables.',
      ],
    },
    {
      id: 'base',
      title: '4. Base jurídica',
      paragraphs: [
        'El tratamiento de tus datos se basa en la ejecución del contrato o de medidas precontractuales (alta y reservas), en el cumplimiento de obligaciones legales (facturación), en tu consentimiento (comunicaciones comerciales y datos de salud) y en nuestro interés legítimo en mejorar la seguridad y la calidad del servicio.',
      ],
    },
    {
      id: 'conservacion',
      title: '5. Plazo de conservación',
      paragraphs: [
        'Conservaremos tus datos mientras se mantenga la relación contractual y, una vez finalizada, durante los plazos legalmente exigidos (con carácter general, seis años para documentación contable y fiscal). Los datos facilitados en una reserva que no llegue a formalizarse se eliminarán en un plazo máximo de doce meses.',
      ],
    },
    {
      id: 'destinatarios',
      title: '6. Destinatarios y encargados',
      paragraphs: [
        'No cedemos tus datos a terceros salvo obligación legal. Para prestar el servicio contamos con proveedores tecnológicos que actúan como encargados del tratamiento (alojamiento web, gestión de reservas, pasarela de pago y envío de comunicaciones), todos ellos vinculados por contratos que garantizan la confidencialidad y la seguridad de la información.',
      ],
    },
    {
      id: 'derechos',
      title: '7. Tus derechos',
      paragraphs: [
        'Puedes ejercer en cualquier momento los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento, portabilidad y a no ser objeto de decisiones individuales automatizadas.',
        'Para ello, escríbenos a hola@pulsefitness.es indicando el derecho que deseas ejercer y adjuntando una copia de tu documento de identidad. Responderemos en el plazo máximo de un mes.',
        'Si consideras que no hemos atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).',
      ],
    },
    {
      id: 'seguridad',
      title: '8. Seguridad de la información',
      paragraphs: [
        'Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos frente a accesos no autorizados, pérdida o alteración, incluyendo cifrado de comunicaciones, control de accesos y copias de seguridad periódicas.',
      ],
    },
    {
      id: 'menores',
      title: '9. Menores de edad',
      paragraphs: [
        'No recopilamos conscientemente datos de menores de 14 años sin la autorización de sus padres o tutores legales. Si detectamos un tratamiento no autorizado, procederemos a su eliminación inmediata.',
      ],
    },
  ],
}

export const cookies: LegalDocument = {
  slug: 'cookies',
  title: 'Política de cookies',
  intro:
    'Utilizamos cookies y tecnologías similares para que el sitio funcione correctamente, recordar tus preferencias y entender cómo se utiliza la web. Puedes aceptarlas, rechazarlas o configurarlas en cualquier momento.',
  updatedAt,
  sections: [
    {
      id: 'que-son',
      title: '1. ¿Qué son las cookies?',
      paragraphs: [
        'Una cookie es un pequeño archivo de texto que se almacena en tu dispositivo al visitar un sitio web. Permite, entre otras cosas, recordar tus preferencias, mantener la sesión activa o generar estadísticas de uso agregadas.',
      ],
    },
    {
      id: 'tipos',
      title: '2. Tipos de cookies que utilizamos',
      bullets: [
        'Cookies técnicas: imprescindibles para el funcionamiento de la web y para gestionar el formulario de reserva.',
        'Cookies de preferencias: recuerdan ajustes como el idioma o la modalidad de precios seleccionada.',
        'Cookies analíticas: nos ayudan a comprender de forma agregada cómo se navega por la web para mejorar su contenido.',
        'Cookies de marketing: solo se activan con tu consentimiento y permiten medir la eficacia de nuestras campañas.',
      ],
    },
    {
      id: 'detalle',
      title: '3. Cookies concretas que podemos instalar',
      table: {
        headers: ['Cookie', 'Finalidad', 'Duración'],
        rows: [
          ['pulse_session', 'Mantener la sesión y la seguridad del formulario', 'Sesión'],
          ['pulse_prefs', 'Recordar la modalidad de precios (mensual o anual)', '6 meses'],
          ['pulse_cookie_consent', 'Guardar tu decisión sobre las cookies', '12 meses'],
          ['_ga', 'Medición agregada de visitas con Google Analytics', '24 meses'],
          ['_gid', 'Distinguir usuarios de forma anónima', '24 horas'],
          ['_fbp', 'Medición de campañas en Meta, solo con consentimiento', '3 meses'],
        ],
      },
    },
    {
      id: 'gestion',
      title: '4. Cómo gestionar o desactivar las cookies',
      paragraphs: [
        'Al acceder por primera vez a la web verás un aviso desde el que puedes aceptar todas las cookies o rechazar las no esenciales. También puedes cambiar tu decisión en cualquier momento desde el enlace «Configurar cookies» disponible en el pie de página.',
        'Además, puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Ten en cuenta que desactivar las cookies técnicas puede impedir el correcto funcionamiento de algunas partes del sitio.',
      ],
    },
    {
      id: 'terceros',
      title: '5. Cookies de terceros',
      paragraphs: [
        'Algunos servicios integrados, como la analítica web o la medición de campañas, pueden instalar cookies de terceros. Dichos terceros actúan bajo sus propias políticas de privacidad, que puedes consultar en sus sitios web oficiales.',
      ],
    },
    {
      id: 'actualizacion',
      title: '6. Actualizaciones de esta política',
      paragraphs: [
        'Podemos actualizar esta política de cookies para reflejar cambios técnicos o normativos. Te recomendamos revisarla periódicamente. La fecha de la última actualización aparece al inicio de esta página.',
        'Si tienes cualquier duda, puedes escribirnos a hola@pulsefitness.es.',
      ],
    },
  ],
}
