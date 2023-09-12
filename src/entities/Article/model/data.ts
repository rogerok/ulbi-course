export const data = [
  {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: ["IT", "SCIENCE", "POLITICS", "POLITICS"],
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "4",
        type: "CODE",
        code: `<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n  \n  </body>\n</html>`,
      },
      {
        id: "5",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "2",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "3",
        type: "CODE",
        code: `const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser)`,
      },
      {
        id: "7",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "8",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "9",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: ["IT"],
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "4",
        type: "CODE",
        code: `<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>`,
      },
      {
        id: "5",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "2",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "3",
        type: "CODE",
        code: `const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);`,
      },
      {
        id: "7",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "8",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "9",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: ["IT"],
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "4",
        type: "CODE",
        code: `<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;`,
      },
      {
        id: "5",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "2",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "3",
        type: "CODE",
        code: `const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);`,
      },
      {
        id: "7",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "8",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "9",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png",
    views: 1022,
    createdAt: "26.02.2022",
    type: ["IT"],
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "4",
        type: "CODE",
        code: `<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\"hello\"></p>\n\n    <script>\n      document.getElementById(\"hello\").innerHTML = \"Hello, world!\";\n    </script>\n  </body>\n</html>;`,
      },
      {
        id: "5",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "2",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "3",
        type: "CODE",
        code: `const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);`,
      },
      {
        id: "7",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
          "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
        ],
      },
      {
        id: "8",
        type: "IMAGE",
        src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
        title: "Рисунок 1 - скриншот сайта",
      },
      {
        id: "9",
        type: "TEXT",
        title: "Заголовок этого блока",
        paragraphs: [
          "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Python News",
    subtitle: "What's New in Python for 2022?",
    img: "https://example.com/python-logo.png",
    views: 1500,
    createdAt: "15.03.2022",
    type: ["IT"],
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Introduction to Python",
        paragraphs: [
          "Python is a versatile programming language known for its simplicity and readability.",
          "It is widely used in various fields, including web development, data analysis, and machine learning.",
          "Python allows you to write clear and concise code, making it a popular choice among developers.",
        ],
      },
      {
        id: "2",
        type: "CODE",
        code: "print('Hello, world!')",
      },
      {
        id: "3",
        type: "TEXT",
        title: "Python Web Development",
        paragraphs: [
          "Python is often used in web development with frameworks like Django and Flask.",
          "These frameworks simplify the process of building web applications and websites using Python.",
          "Python's versatility and large community make it a great choice for web development projects.",
        ],
      },
      {
        id: "4",
        type: "IMAGE",
        src: "https://example.com/python-web.png",
        title: "Python Web Development",
      },
      {
        id: "5",
        type: "TEXT",
        title: "Conclusion",
        paragraphs: [
          "Python continues to grow in popularity in 2022 and beyond.",
          "Its ease of use and wide range of applications make it a valuable programming language for developers.",
        ],
      },
    ],
  },
  {
    id: "6",
    title: "Machine Learning Advances",
    subtitle: "Recent Developments in Machine Learning",
    img: "https://example.com/ml-advances.png",
    views: 2500,
    createdAt: "10.05.2022",
    type: ["Technology", "AI"],
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Introduction to Machine Learning",
        paragraphs: [
          "Machine learning is a subset of artificial intelligence (AI) that focuses on the development of algorithms and statistical models.",
          "It enables computers to learn from and make predictions or decisions based on data, without being explicitly programmed.",
          "Machine learning has applications in various fields, including healthcare, finance, and autonomous vehicles.",
        ],
      },
      {
        id: "2",
        type: "CODE",
        code: `import tensorflow as tf\nfrom sklearn.model_selection import train_test_split\n# ... (machine learning code here),`,
      },
      {
        id: "3",
        type: "TEXT",
        title: "Recent Breakthroughs",
        paragraphs: [
          "In recent years, there have been significant breakthroughs in machine learning.",
          "Advances in deep learning, natural language processing, and reinforcement learning have led to improved AI systems.",
          "These developments are driving innovations in areas like chatbots, autonomous vehicles, and healthcare diagnostics.",
        ],
      },
      {
        id: "4",
        type: "IMAGE",
        src: "https://example.com/ml-breakthrough.png",
        title: "Recent Breakthroughs in Machine Learning",
      },
      {
        id: "5",
        type: "TEXT",
        title: "Future Prospects",
        paragraphs: [
          "The future of machine learning looks promising.",
          "Researchers are exploring new techniques, and the integration of AI into everyday life is expected to increase.",
          "Machine learning will continue to impact industries and shape the way we interact with technology.",
        ],
      },
    ],
  },
  {
    id: "7",
    title: "Blockchain Technology Explained",
    subtitle: "Understanding the Basics of Blockchain",
    img: "https://example.com/blockchain-explained.png",
    views: 1800,
    createdAt: "20.07.2022",
    type: ["Technology", "Finance"],
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Introduction to Blockchain",
        paragraphs: [
          "Blockchain is a distributed ledger technology that underlies cryptocurrencies like Bitcoin.",
          "It consists of a chain of blocks, each containing a record of multiple transactions.",
          "Blockchain is known for its security, transparency, and immutability.",
        ],
      },
      {
        id: "2",
        type: "CODE",
        code: `const blockchain = new Blockchain();\n// ... (blockchain code here)`,
      },
      {
        id: "3",
        type: "TEXT",
        title: "Use Cases of Blockchain",
        paragraphs: [
          "Blockchain has applications beyond cryptocurrencies.",
          "It is being used in supply chain management, voting systems, and digital identity verification.",
          "Blockchain's decentralized nature eliminates the need for intermediaries in various processes.",
        ],
      },
      {
        id: "4",
        type: "IMAGE",
        src: "https://example.com/blockchain-usecases.png",
        title: "Use Cases of Blockchain Technology",
      },
      {
        id: "5",
        type: "TEXT",
        title: "Challenges and Future of Blockchain",
        paragraphs: [
          "While blockchain has immense potential, it also faces challenges such as scalability and energy consumption.",
          "Researchers are working on solutions, and blockchain's future looks promising.",
          "It could revolutionize industries and how data is managed globally.",
        ],
      },
    ],
  },
];
