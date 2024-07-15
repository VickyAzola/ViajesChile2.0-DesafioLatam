# Viajes Chile (HTML5, SASS, Bootstrap, JQuery)

## Tabla de Contenidos

- [Descripción](#descripción)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Autores](#autores)

## Descripción

Viajes Chile es una página web creada para ofrecer información sobre destinos turísticos en Chile, 
mostrar los lugares más destacados y permitir a los usuarios ponerse en contacto con los dueños 
para obtener más información. La página incluye una barra de navegación, un carrusel de imágenes, 
secciones informativas y un formulario de contacto.

[Revisa el resultado aqui](https://vickyazola.github.io/ViajesChile2.0-DesafioLatam/)

![Frame 1](https://github.com/user-attachments/assets/5a90d721-940d-4713-aae6-f717e7ee3f33)


## Estructura del Proyecto

```plaintext
ViajesChile2.0-DesafioLatam/
│
├── assets/
│   ├── css/
│   │     └── main.css
│   ├── img/...
│   │     
│   ├── js/
│   │    └── scripts.js
│   └── sass/
│        ├── abstracts/
│        │     └── _variables.scss
│        ├── base/
│        │     ├── _reset.scss
│        │     └── _tipography.scss
│        ├── components/
│        │     ├── _nav.scss
│        │     └── _testimony.scss
│        ├── layout/
│        │     ├── _carousel.scss
│        │     ├── _form.scss
│        │     ├── _navbar.scss
│        │     └── _section.scss
│        ├── pages/
│        ├── themes/
│        ├── vendors/
│        │     └── _bootstrap.scss
│        └── main.scss
│
├── .gitignore
├── package.json
├── package-lock.json
├── index.html
└── README.md
```

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del sitio web.
- **SASS**: Para el diseño y la presentación del sitio web.
- **Bootstrap 5.3.3**: Framework CSS para facilitar el diseño responsivo y componentes predefinidos.
- **Font Awesome**: Biblioteca de iconos. Se utilizaron los iconos:
    ```html
    <i class="fas fa-plane"></i>
    <i class="fab fa-circle-info"></i>
    <i class="fab fa-phone"></i>
    <i class="fab fa-envelope"></i>
    <i class="fab fa-linkedin"></i>
    <i class="fab fa-instagram"></i>
 
    ```
- **Google Fonts**: Biblioteca de fuentes de texto. Se utilizaron las fuentes:
  - [Open Sans](https://fonts.google.com/specimen/Open+Sans?query=open+sans)
- **jQuery 3.7.1.**: Para manejar el scroll del navbar.


## Instalación

1. **Clonar el repositorio**:
    ```bash
    git clone git@github.com:VickyAzola/ViajesChile2.0-DesafioLatam.git
    ```
2. **Navega al directorio del proyecto**
    ```bash
    cd ViajesChile2.0-DesafioLatam
    ```
3. Abrir `index.html` en tu navegadorpara ver el sitio web.


## Autores

- **Desarrollador Principal**: [Victoria Azola Silva](https://github.com/VickyAzola) - Responsable del desarrollo del código.
- **Diseñador**: [Desafío Latam](https://desafiolatam.com/admision/?utm_term=desafio%20latam&utm_campaign=Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=1239562006&hsa_cam=16998643182&hsa_grp=136655824715&hsa_ad=596057942540&hsa_src=g&hsa_tgt=kwd-340546658839&hsa_kw=desafio%20latam&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwvvmzBhA2EiwAtHVrbzEJGJPqUuTuFDuNIFtSh4eKqGXcLXmCO9u12vwlU553fGXV93Q5zxoCGmEQAvD_BwE) - Responsable del diseño gráfico y visual del proyecto.
