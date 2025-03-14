# LSK – UX packages
> Huge customizeble React-based framework with many cases.
## Easy to implement. Simple in usage. Just like a lego constructor.
## [Tutorial](/blog/tutorial.md)
## [Storybook](https://lskjs.github.io/ux)

## Packages

- [@lskjs/button](./packages/button/README.md)
- [@lskjs/tag](./packages/tag/README.md)
-----
- [@lskjs/article](./packages/article/README.md)
- [@lskjs/chat](./packages/chat/README.md)
- [@lskjs/dashboard](./packages/dashboard/README.md)
- [@lskjs/dev](./packages/dev/README.md)
- [@lskjs/form](./packages/form/README.md)
- [@lskjs/form-input](./packages/form-input/README.md)
- [@lskjs/form-select](./packages/form-select/README.md)
- [@lskjs/form-calendar](./packages/form-calendar/README.md) – контрол формы для календарей
- [@lskjs/form-geo](./packages/form-geo/README.md) – контрол формы для карт
- [@lskjs/form-files](./packages/form-files/README.md) – контролы формы  для загрузки файлов, дропзоун, загрузка изображений и кроппер
- [@lskjs/form-phone](./packages/form-phone/README.md) – тут реакт враперы для загрузки файлов, дропзоун, загрузка изображений и кроппер
- [@lskjs/grid](./packages/grid/README.md) – тут наши реакт компоненты для сетки (по аналогии с сеткой бутстрапа)
- [@lskjs/gridtable](./packages/gridtable/README.md) – это эксперимент, таблица на гридах с watchерами mobx
- [@lskjs/link](./packages/link/README.md) – это реакт компонент для ссылок и провайдер ссылок
- [@lskjs/list](./packages/list/README.md) – это компонент для умных таблиц-списков с функциями автоподгрузки фильтрации и тп
- [@lskjs/modal](./packages/modal/README.md) – это компонент для модалок построенный на основе react-modal
- [@lskjs/navbar](./packages/navbar/README.md) – это компонент react-bootstrap навбар, адаптированный для emotion
- [@lskjs/page](./packages/page/README.md) – это компонент для разметки страниц, и прокидывания разных layout'ов для этих страниц
- [@lskjs/theme](./packages/theme/README.md) – тут тема, getter свойств темы и дефолтная тема TODO: подумать как сделать real-time загрузку
- [@lskjs/ui](./packages/ui/README.md) – тут ВСЯКАЯ ВСЯЧЕНА TODO: надо разобрать
- [@lskjs/landing](./packages/landing/README.md) – ХЗХЗХЗХЗХ
 => @lskjs/experiment?
 => ....  стабильное
- [@lskjs/typo](./packages/typo/README.md) – тут типографика, реализация: цвета, формы, размеры, шрифты
- [@lskjs/progress](./packages/progress/README.md) – компонент прогресса построенный вокруг нанобара
- [@lskjs/image](./packages/image/README.md) – кейсы по работе с изображениями, аспектратио, бэекграунд, фолбеки изображений
- [@lskjs/t](./packages/t/README.md) – тут i18 <T>
- [@lskjs/table](./packages/table/README.md) – наверное вынести таблички
- [@lskjs/flag](./packages/flag/README.md) – отдедельно все что связано с флагами
- [@lskjs/notify](./packages/notify/README.md) – тут центрнотификация и тосты


## TODO

[If you could help us](TODO.md)


## How to develop

```sh
git clone git@github.com:lskjs/ux.git lskjs-ux
cd lskjs-ux
npm install
npm run bootstrap
cd packages/ui
npm run storybook
```

## How to add new package 
To create a new package with Storybook, do the following:

1. Release new package:
```sh
npm run release
```
2. Install it in ```packages/docs```:
```sh
cd packages/docs
npm i package_name
```
3. Go to ```packages/docs/.storybook/contexts.js``` to add line with your package's name.
```js
...
require.context('../node_modules/@lskjs/package_name', true, /.story.js$|.story.jsx$|.story.tsx$/),
...
```
4. Push & build docs:
```sh
git push
npm run release 
```
You could check before release that the ``` npm run build-storybook``` in ```packages/docs``` is successful.
