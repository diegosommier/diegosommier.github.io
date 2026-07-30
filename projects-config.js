// ============================================================================
// CONFIGURACIÓN DE PROYECTOS - PORTFOLIO PROFESIONAL
// ============================================================================
// 
// INSTRUCCIONES PARA AÑADIR/MODIFICAR PROYECTOS:
// 
// 1. AÑADIR UN NUEVO PROYECTO:
//    - Copia el template de proyecto de abajo
//    - Completa todos los campos requeridos
//    - Añade el proyecto al array 'projects' al final
//    - Incrementa el ID para cada nuevo proyecto
//
// 2. MODIFICAR UN PROYECTO EXISTENTE:
//    - Encuentra el proyecto por su ID o título
//    - Modifica los campos que necesites
//
// 3. ELIMINAR UN PROYECTO:
//    - Simplemente elimina el objeto del proyecto del array
//
// 4. CAMBIAR ENLACES:
//    - Para enlaces reales: github: "https://github.com/tu-usuario/repo"
//    - Para enlaces no disponibles: github: "#"
//    - Para demos reales: demo: "https://tu-demo.com"
//    - Para demos no disponibles: demo: "#"
//
// TEMPLATE DE PROYECTO:
/*
{
    id: 11, // Incrementa el ID para cada nuevo proyecto
    title: "Nombre del Proyecto",
    description: "Descripción corta (aparece en la tarjeta del proyecto)",
    fullDescription: "Descripción completa y detallada (aparece en el modal al hacer clic)",
    image: "imagenes/nombre-imagen.jpg", // Imagen en la carpeta imagenes/
    technologies: ["Tecnología 1", "Tecnología 2", "Tecnología 3"],
    tags: ["Básico"], // Opciones: ["Básico"], ["Avanzado"], ["Profesional"]
    github: "https://github.com/tu-usuario/nombre-repo", // Enlace real o "#" si no está disponible
    demo: "https://tu-demo.com" // Enlace real o "#" si no está disponible
}
*/

// Array de proyectos
const projects = [
    {
        id: 1,
        title: "Organización en el Cloud",
        description: "Proyecto centrado en la gestión de cuentas AWS con buenas prácticas organizativas",
        fullDescription: "Arquitectura multi cuenta con AWS Organizations, ideal para separar entornos, controlar facturación y aplicar políticas centralizadas de seguridad y acceso.",
        image: "imagenes/AWS_Organization.jpg",
        technologies: ["AWS Organizations", "IAM", "CloudTrail", "Config"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 2,
        title: "Aplicación Web con Angular desplegada en AWS",
        description: "Muestra cómo servir sitios web estáticos o SPA en la nube",
        fullDescription: "Sitio web estático Angular alojado en Amazon S3, distribuido globalmente con CloudFront y protegido con HTTPS mediante AWS Certificate Manager.",
        image: "imagenes/App_Web_Desplegada_AWS.jpg",
        technologies: ["Amazon S3", "CloudFront", "Route 53", "Certificate Manager"],
        tags: ["Básico"],
        github: "#",
        demo: "#"
    },
    {
        id: 3,
        title: "Arquitectura ECS",
        description: "Enfocado en orquestación, escalabilidad y arquitectura de microservicios",
        fullDescription: "Despliegue escalable de servicios en contenedores usando Amazon ECS, balanceador ALB, subredes privadas y públicas, con monitoreo en CloudWatch.",
        image: "imagenes/Arquitectura_ECS.jpg",
        technologies: ["Amazon ECS", "Amazon CloudWatch", "Amazon ECR", "Amazon VPC", "ALB", "NAT Gateway"],
        tags: ["Avanzado"],
        github: "#",
        demo: "#"
    },
    {
        id: 4,
        title: "Kubernetes en AWS",
        description: "CI/CD, despliegue con contenedores y uso de múltiples lenguajes y tecnologías",
        fullDescription: "Aplicación distribuida en clúster de Kubernetes gestionado con múltiples APIs backend en contenedores, base de datos MongoDB y servicios de AWS.",
        image: "imagenes/Kubernetes_AWS.jpg",
        technologies: ["Angular", "Docker", "Amazon ECR", "MongoDB", "Amazon SES", "Minikube"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 6,
        title: "Seguimiento de ubicación",
        description: "Integran dispositivos IoT, rastreo de ubicación y procesamiento en tiempo real",
        fullDescription: "Sistema IoT con rastreo en tiempo real usando AWS IoT, Lambda, DynamoDB, EventBridge, y visualización de eventos con Amazon Location Service.",
        image: "imagenes/Seguimiento_Ubicacion.jpg",
        technologies: ["AWS IoT Core", "Location Service", "Lambda", "Cognito", "WebSocket", "EventBridge", "DynamoDB"],
        tags: ["Avanzado"],
        github: "#",
        demo: "#"
    },
    {
        id: 7,
        title: "Migración de base de datos de EC2 a RDS",
        description: "Migración de bases de datos alojadas en instancias EC2 hacia Amazon RDS usando RDS Proxy para optimizar conexiones",
        fullDescription: "Este proyecto muestra cómo migrar una base de datos administrada en EC2 hacia Amazon RDS, mejorando la eficiencia de conexión con RDS Proxy. Se asegura el acceso mediante políticas IAM y una subred privada para mayor seguridad. Ideal para entornos productivos con múltiples instancias",
        image: "imagenes/bases_datos_ec2_a_RDS.jpg",
        technologies: ["EC2", "Amazon RDS", "RDS Proxy", "IAM", "VPC"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 8,
        title: "ETL con instancias spot y bucket S3",
        description: "Proceso de ETL económico usando instancias EC2 Spot para procesar datos y almacenarlos en Amazon S3",
        fullDescription: "Se utiliza una instancia EC2 Spot para ejecutar un proceso ETL que toma un archivo de entrada, lo transforma y almacena el resultado en un bucket de S3. El proyecto destaca la optimización de costos usando Spot y el uso correcto de permisos IAM para acceso a S3",
        image: "imagenes/Ejecución_proceso_ETL.jpg",
        technologies: ["EC2 Spot", "Amazon S3", "IAM"],
        tags: ["Básico"],
        github: "#",
        demo: "#"
    },
    {
        id: 9,
        title: "Lambda con acceso multi cuenta",
        description: "Función Lambda que permite llamadas entre cuentas de AWS con políticas de identidad y recursos.",
        fullDescription: "El proyecto permite invocar funciones Lambda entre cuentas A y B de AWS. Se emplean políticas de identidad (salida) y de recursos (entrada) para establecer la confianza necesaria. Ideal para arquitecturas multi cuenta donde Lambda centraliza el procesamiento",
        image: "imagenes/lambda_acceso_multicuenta.jpg",
        technologies: ["AWS Lambda", "IAM", "Cross-account", "Resource Policy"],
        tags: ["Avanzado"],
        github: "#",
        demo: "#"
    },
    {
        id: 10,
        title: "Monitorización con Prometheus y Grafana",
        description: "Arquitectura para monitoreo de contenedores usando Prometheus, Grafana, Loki y Alloy",
        fullDescription: "Este proyecto implementa una solución completa de observabilidad que incluye métricas con Prometheus, logs centralizados con Loki y visualización unificada con Grafana. La recolección de datos se realiza mediante Grafana Alloy, que extrae métricas como uso de CPU, memoria y actividad de servicios desarrollados en Python o C#. Toda la solución se despliega mediante Docker Compose, lo que facilita su puesta en marcha local o en entornos de desarrollo. Prometheus almacena y expone las métricas, Loki centraliza los logs de aplicación, y Grafana permite su consulta desde paneles personalizados y alertas automáticas, habilitando al equipo de ingeniería a tomar decisiones basadas en datos en tiempo real.",
        image: "imagenes/Prometheus_Grafana.jpg",
        technologies: ["Prometheus", "Grafana", "Loki", "Alloy", "Docker", "Docker Compose", "Python", "C#"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 11,
        title: "Reconocimiento de imágenes y vídeos con IA",
        description: "Arquitectura serverless en AWS para cargar, procesar y analizar imágenes y vídeos mediante Amazon Rekognition.",
        fullDescription: "Este proyecto implementa una solución de reconocimiento automático de imágenes y vídeos utilizando servicios administrados de AWS. Los usuarios interactúan con un frontend que se conecta a través de Amazon API Gateway, el cual invoca funciones AWS Lambda encargadas de recibir y subir archivos a Amazon S3. Una vez almacenados, otra Lambda identifica el tipo de archivo (imagen o vídeo) y lo procesa con Amazon Rekognition. Para imágenes, los resultados del análisis (detección de objetos, rostros, etiquetas, etc.) se devuelven al sistema; en el caso de vídeos, los eventos detectados son enviados a Amazon SNS para notificaciones o flujos adicionales. Toda la arquitectura es altamente escalable, serverless y orientada a eventos, permitiendo extender las capacidades de análisis con IA sin necesidad de administrar servidores.",
        image: "imagenes/Reconocimiento_IA.jpg",
        technologies: ["AWS Lambda", "API Gateway", "Amazon S3", "Amazon Rekognition", "Amazon SNS"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    },
    {
        id: 12,
        title: "Portal inmobiliario impulsado por IA",
        description: "Plataforma web para gestión y búsqueda de propiedades, optimizada con inteligencia artificial para recomendar inmuebles y mejorar la experiencia del usuario.",
        fullDescription: "Este proyecto desarrolla un portal inmobiliario moderno que aprovecha Amazon Bedrock y servicios serverless en AWS para transformar la experiencia de compra, renta y venta de propiedades. Los usuarios interactúan con un frontend intuitivo. Amazon S3 se encarga del almacenamiento seguro de los archivos, mientras que Amazon Bedrock permite integrar modelos de IA generativa combinando la flexibilidad de la nube con el poder de la IA generativa, ofreciendo una experiencia ágil, confiable y personalizada en el sector inmobiliario.",
        image: "imagenes/Portal-Inmobiliario.jpg",
        technologies: ["Amazon Bedrock", "Amazon S3", "Python", "Docker", "Docker Compose"],
        tags: ["Profesional"],
        github: "#",
        demo: "#"
    }
];

// Exportar para uso en script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects };
} 