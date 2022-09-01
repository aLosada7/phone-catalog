# Phone Catalog challenge

## Execution

To run the project, you just have to serve the api & the react application.

```
yarn nx serve api
yarn nx serve phone-catalog-react
```

Alternatively, using the [Nx console Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) you can easily execute serve, tests or linting. I have not deployed it because I believe showing it in Netlify won't make the difference. At the end of this documentation I mention some projects I have already deployed.

## About the project

### Why I am using Nx

Nx gave me full confidence to develop this project. It gives me the flexibility to have an agnostic framework & business logic + an app all in the same repository.

Besides this, apps and libraries are created with the best lint and test practices, which makes my app consistent.

### Phone module

Although this is a small, I believe there are some concepts to be applied when we want to build a consistent software. I use an hexagonal architecture approach, but I am not gonna implement filter or API adapters, and no more than one repository implementation (dependency inversion). This way I made the application & de business layer agnostic. I called this library _core_.

### REST API: CRUD

As you already know, I am not an expert in Node. What's why i have created Nx with the express preset. Apart from that I have created a basic CRUD which handles phone entities. I understand this part would need some refactoring in a future. I would use a .env file for setting the _HOST_ & _PORT_ but that's an extra step I would like to avoid for this small project, so you have to use port 3333.

### React

Finally, I implemented a complete backoffice module (cockpit & entity) to show some complex concepts like composition. The main reason to divide my components in pages, containers & components is separating reponsibilities.
I use Edene for styling, a library made by me, that showcase my expertise in a much more complex challenge

### Tests

I have added some unit tests for business logic (use cases), API interaction tests, and hook tests in the framework part. The visual tests are usually divided following the guide of https://storybook.js.org/tutorials/ui-testing-handbook/react/en/visual-testing/ but being such a small application I didn't think it was necessary to add Storybook.

### Git

I use Conventional commits to make my atomic commits explanatory. You can found the repository at [https://github.com/aLosada7/phone-catalog](https://github.com/aLosada7/phone-catalog)

### Dev Container

I have added dev container to ease the install of all the extensions I use (minimum). This is a very interesting feature for teams.

### Github Actions

I have used them basically to be sure every test passed. You can see complex CI/CD at [Edene Github Actions](https://github.com/aLosada7/edene/actions)

## Final words

I would like you to take on account **Edene**. Edene aims to give you everything you need to create a Design System. It contains a list of completely customizable and reusable React components, animations and hooks. It has been written entirely in Typescript. I can bring you all my experience written it after a through investigation of known libraries as Chakra UI, Mantine or Material UI and wonderful works by The Guardian, BBC or the Storybook team itself.

- [Edene](https://edene.netlify.app/)
- [Edene Template](https://edene-template.netlify.app/)

Here is also my personal webpage (new blogs will be published soon)

- [My personal webpage](https://alvarolosada.com/)

The app still has weaknesses and refactoring to be made, but it's consistent, scalable, and I did't wanna take forever to finish it.

I has been a pleasure to me to face this challenge. I am looking forward to hearing from you.
