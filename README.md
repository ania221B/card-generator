# About

- This template aims to speed up setting up and working on a project by providing basic code that you can reuse in your works
- it uses Vite, React and Sass
- The Sass files organization is based on [the 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern)

# How to use

- Once you have the template in your repos, you can use it as a base for your project

## With GitHub

1. Go to GitHub
2. Find the repo with the template
3. Click the **Use this template** button on the **Code** tab
4. Enter the name for a new repo with the project you're going to work on
5. Add the description if you want
6. Choose if you want it to be public or private
7. Click **Create repository from template** button
8. A new repo based on the template will be created

## With degit

1. Install [degit](https://github.com/Rich-Harris/degit), if you don't have it yet

```
npm install -g degit
```

2. Open up the terminal and use:

```
degit github-user-name/template-mame my-new-project
```

where:

- `github-user-name` is the username you use on GitHub
- `template-name` is the name of the template that will be base of your project (such as `website-starter-react-template`)
- `my-new-project` name of the project you're going to work on

In my case the above could look the following:

```
degit ania221b/website-starter-react-template to-do-list
```

You can use the terminal in VS Code, Command Prompt, Windows Powershell or a tool like [Hyper](https://hyper.is/)

3. Navigate to your new project, so:

```
cd my-new-project
```

4. Perform the installation

```
npm install
```

5. Open your project up in VS code

```
code .
```

# Acknowledgements

- This template was build as part of [Beyond CSS](https://www.beyondcss.dev/) course by [Kevin Powell](https://www.kevinpowell.co/)
- You can find Kevin's template on [his GitHub](https://github.com/kevin-powell)

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
