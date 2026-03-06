-- ═══════════════════════════════════════════════════════════════════════════
-- SALES COACH — Seed Lessons
-- Migration: 003_seed_lessons
-- ═══════════════════════════════════════════════════════════════════════════

INSERT INTO lessons (title, description, content, duration_minutes, is_premium, sort_order)
VALUES
-- ═══════════════════════════════════════════════════════════════════════════
-- LESSON 1: Anatomía de una Objeción
-- ═══════════════════════════════════════════════════════════════════════════
(
  'Anatomía de una Objeción',
  'Entiende por qué los clientes objetan y cómo cada objeción es una oportunidad disfrazada.',
  '[
    {
      "type": "text",
      "content": "Las objeciones no son rechazos. Son solicitudes de más información disfrazadas de resistencia. Cuando un cliente dice \"está muy caro\", lo que realmente dice es \"no entiendo el valor todavía\"."
    },
    {
      "type": "tip",
      "title": "Mentalidad clave",
      "content": "Cada objeción es una pregunta. \"No tengo presupuesto\" = \"¿Cómo justifico esta inversión?\" Tu trabajo es responder la pregunta real, no la superficial."
    },
    {
      "type": "text",
      "content": "Las objeciones más comunes se dividen en 4 categorías:\n\n1. **Precio**: \"Está caro\", \"No hay presupuesto\"\n2. **Tiempo**: \"No es el momento\", \"Necesito pensarlo\"\n3. **Autoridad**: \"No soy quien decide\"\n4. **Necesidad**: \"Ya tenemos proveedor\", \"No lo necesitamos\""
    },
    {
      "type": "example",
      "title": "Objeción vs Realidad",
      "content": "**Cliente dice**: \"Necesito pensarlo\"\n**Realidad posible**: Tiene miedo de tomar una mala decisión, necesita aprobación de alguien más, o no está convencido del valor.\n\n**Tu siguiente paso**: Preguntar \"¿Qué específicamente te gustaría evaluar?\" para descubrir la objeción real."
    },
    {
      "type": "takeaway",
      "content": "Nunca respondas a la objeción superficial. Siempre busca entender la preocupación real detrás de las palabras."
    }
  ]'::jsonb,
  8,
  false,
  1
),

-- ═══════════════════════════════════════════════════════════════════════════
-- LESSON 2: El Framework de Respuesta
-- ═══════════════════════════════════════════════════════════════════════════
(
  'El Framework LAER',
  'Un sistema de 4 pasos para manejar cualquier objeción con confianza y profesionalismo.',
  '[
    {
      "type": "text",
      "content": "LAER es un framework probado para manejar objeciones:\n\n**L** - Listen (Escucha)\n**A** - Acknowledge (Reconoce)\n**E** - Explore (Explora)\n**R** - Respond (Responde)"
    },
    {
      "type": "tip",
      "title": "Error común",
      "content": "La mayoría de vendedores saltan directamente a Responder. Esto se siente como confrontación. Los pasos de Escuchar, Reconocer y Explorar construyen la confianza necesaria para que tu respuesta sea recibida."
    },
    {
      "type": "example",
      "title": "LAER en acción",
      "content": "**Cliente**: \"Está muy caro\"\n\n**L (Escucha)**: [Silencio, deja que termine]\n\n**A (Reconoce)**: \"Entiendo que el presupuesto es una consideración importante...\"\n\n**E (Explora)**: \"¿Comparado con qué te parece caro? ¿Hay un presupuesto específico que tenías en mente?\"\n\n**R (Responde)**: [Basado en lo que descubriste en Explorar]"
    },
    {
      "type": "text",
      "content": "**Por qué funciona:**\n\n- Escuchar muestra respeto\n- Reconocer valida sus preocupaciones\n- Explorar te da información para una respuesta precisa\n- Responder con contexto es 3x más efectivo"
    },
    {
      "type": "takeaway",
      "content": "Dedica el 70% de tu tiempo a los primeros 3 pasos (L-A-E) y solo el 30% a Responder. La mayoría hace lo opuesto y por eso fallan."
    }
  ]'::jsonb,
  10,
  false,
  2
),

-- ═══════════════════════════════════════════════════════════════════════════
-- LESSON 3: Manejando "Está muy caro"
-- ═══════════════════════════════════════════════════════════════════════════
(
  'Manejando "Está muy caro"',
  'Técnicas específicas para la objeción de precio más común en ventas.',
  '[
    {
      "type": "text",
      "content": "\"Está muy caro\" es la objeción más común y la más malentendida. Rara vez es sobre el número absoluto. Casi siempre es sobre valor percibido vs precio."
    },
    {
      "type": "tip",
      "title": "Nunca hagas esto",
      "content": "No bajes el precio inmediatamente. Esto confirma que estabas cobrando de más y destruye tu credibilidad. Primero, entiende QUÉ es caro y comparado con QUÉ."
    },
    {
      "type": "text",
      "content": "**Preguntas poderosas para precio:**\n\n1. \"¿Comparado con qué te parece caro?\"\n2. \"¿Hay un presupuesto específico que tenías en mente?\"\n3. \"Si el precio no fuera un factor, ¿sería la solución correcta?\"\n4. \"¿Qué tendría que incluir la propuesta para que el precio hiciera sentido?\""
    },
    {
      "type": "example",
      "title": "Respuesta efectiva",
      "content": "**Cliente**: \"$5,000 mensuales es mucho.\"\n\n**Tú**: \"Entiendo. Ayúdame a entender mejor - ¿comparado con qué te parece mucho? ¿Otra cotización que recibiste o el presupuesto que tenías asignado?\"\n\n**Cliente**: \"Teníamos pensado gastar máximo $3,000.\"\n\n**Tú**: \"Gracias por compartir eso. ¿Qué pasaría si pudiéramos empezar con una implementación en fases que comience en $2,800 el primer mes?\""
    },
    {
      "type": "takeaway",
      "content": "El precio solo es \"caro\" cuando el valor no es claro. Tu trabajo es clarificar el valor O encontrar un punto de entrada que tenga sentido para ambos."
    }
  ]'::jsonb,
  12,
  false,
  3
),

-- ═══════════════════════════════════════════════════════════════════════════
-- LESSON 4: Creando Urgencia sin Presión
-- ═══════════════════════════════════════════════════════════════════════════
(
  'Creando Urgencia sin Presión',
  'Cómo motivar decisiones rápidas sin parecer desesperado o manipulador.',
  '[
    {
      "type": "text",
      "content": "La urgencia falsa destruye confianza. \"Esta oferta solo es válida hoy\" es una técnica de los 80s que los compradores modernos detectan inmediatamente."
    },
    {
      "type": "tip",
      "title": "Urgencia legítima vs artificial",
      "content": "Urgencia legítima: basada en la situación del cliente. Urgencia artificial: basada en tácticas de presión. La primera construye relaciones; la segunda las destruye."
    },
    {
      "type": "text",
      "content": "**3 formas de crear urgencia legítima:**\n\n1. **Costo de inacción**: Cuantifica qué pierde el cliente cada mes que no actúa\n2. **Timing natural**: Sincroniza con eventos del cliente (fin de trimestre, proyectos, temporadas)\n3. **Capacidad limitada**: Si genuinamente tienes límites de capacidad, comunícalos honestamente"
    },
    {
      "type": "example",
      "title": "Urgencia bien ejecutada",
      "content": "**En lugar de**: \"Esta oferta vence el viernes\"\n\n**Di**: \"Mencionaste que quieren lanzar antes del Q4. Si empezamos esta semana, llegamos cómodos. Si esperamos a octubre, va a ser muy ajustado. ¿Qué necesitas para tomar la decisión esta semana?\""
    },
    {
      "type": "takeaway",
      "content": "La mejor urgencia viene del propio cliente. Tu trabajo es ayudarles a ver las consecuencias de la inacción, no presionarlos con fechas límite artificiales."
    }
  ]'::jsonb,
  10,
  false,
  4
),

-- ═══════════════════════════════════════════════════════════════════════════
-- LESSON 5: El Arte del Silencio
-- ═══════════════════════════════════════════════════════════════════════════
(
  'El Arte del Silencio',
  'Por qué callar es una de las técnicas más poderosas en ventas.',
  '[
    {
      "type": "text",
      "content": "Los vendedores novatos llenan cada silencio con palabras. Los profesionales usan el silencio estratégicamente. El silencio es incómodo, y la incomodidad lleva a la acción."
    },
    {
      "type": "tip",
      "title": "La regla de los 3 segundos",
      "content": "Después de hacer una pregunta importante o dar el precio, cuenta mentalmente hasta 3 antes de hablar de nuevo. Estos 3 segundos se sienten eternos pero son poderosos."
    },
    {
      "type": "text",
      "content": "**Cuándo usar el silencio:**\n\n1. Después de preguntar por la decisión\n2. Después de dar el precio\n3. Cuando el cliente está procesando información\n4. Después de manejar una objeción\n5. Cuando sientes la urgencia de justificar o explicar más"
    },
    {
      "type": "example",
      "title": "Silencio después del precio",
      "content": "**Tú**: \"La inversión es de $8,000 mensuales.\"\n\n**[SILENCIO - cuenta hasta 3 o más]**\n\n**Cliente**: \"Es más de lo que esperaba...\"\n\n**Tú**: [Ahora explora] \"Entiendo. ¿Qué rango tenías en mente?\"\n\nSi hubieras llenado el silencio con justificaciones, habrías debilitado tu posición."
    },
    {
      "type": "takeaway",
      "content": "El silencio demuestra confianza. Cuando llenas silencios nerviosamente, comunicas inseguridad. Deja que el silencio trabaje para ti."
    }
  ]'::jsonb,
  8,
  false,
  5
);
