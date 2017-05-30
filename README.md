# angular4-web-test-directions

**Postium** es un _amago_ de clon de [Medium](https://medium.com/). Sus pretensiones son mucho más humildes que las del conocido portal, pero a la vez contribuyen a una grandiosa causa: que aprendas a familiarizarte con Angular.

Lee detenidamente estas instrucciones **hasta el final**, las vas a necesitar para completar la práctica.


## Estructura del proyecto

Aunque el árbol del proyecto sea sencillo y esté muy claro, te detallo donde está cada cosa:

- **app/components**: en esta ruta tienes los Componentes de la app.
- **app/directives**: en esta ruta tienes las Directivas de la app.
- **app/models**: en esta ruta tienes las Entidades de la app.
- **app/pipes**: en esta ruta tienes los Pipes de la app.
- **app/services**: en esta ruta tienes los Servicios y Resolves de la app.

Aprovecho este momento para contarte un poco sobre las entidades. Son estas tres: `Post`, `User` y `Category`. Como puedes imaginar, la entidad `Post` es la que más peso tiene y sobre la que gira **Postium**. Tiene todos los atributos necesarios para almacenar los datos propios de un post, además de mantener relación con `User` para establecer el autor del mismo y con `Category` para enlazar las categorías en las que se publica. Están definidas de la siguiente forma:

Entidad `Post`:

- `id` de tipo `number`.
- `title` de tipo `string`.
- `intro` de tipo `string`.
- `body` de tipo `string`.
- `media` de tipo `string`.
- `publicationDate` de tipo `number`.
- `categories` de tipo `Category[]`.
- `author` de tipo `User`.
- `likes` de tipo `number[]`.

Entidad `User`:

- `id` de tipo `number`.
- `name` de tipo `string`.
- `username` de tipo `string`.
- `email` de tipo `string`.
- `avatar` de tipo `string`.

Entidad `Category`:

- `id` de tipo `number`.
- `name` de tipo `string`.

## Puesta a punto

Antes de empezar a completar **Postium**, que sé que tienes ganas, tienes que clonarlo e instalar sus dependencias. Puedes descargar el código desde [su repositorio en GitHub](https://github.com/vermicida/kc-postium-seed), o bien clonarlo desde una terminal:

```bash
$ git clone https://github.com/vermicida/kc-postium-seed.git
```

Recuerda que debes teber instalado [Angular CLI](https://cli.angular.io) a nivel global para trabajar con **Postium**:

```bash
$ npm install -g @angular/cli
```

Una vez descargado y descomprimido, o bien clonado, vamos al directorio correspondiente e instalamos las dependencias:

```bash
$ cd Postium-angular4
$ npm install
```

Y para iniciarlo:

```bash
$ npm start
```

