# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Props Drilling Demo (Assignment Q2)

This project demonstrates props drilling by passing values through a deep component tree, including components that do not use those values but forward them to children.

### Component Structure
- Component1: Receives `a,b,c,d,e,f`; renders `Component2` and passes all props.
- Component2: Does not use any props; forwards to `Component3`.
- Component3: Displays `a,b`; renders `Component4` with remaining `c,d,e,f`.
- Component4: Displays `c,d`; renders `Component5` with remaining `e,f`.
- Component5: Displays `f`; forwards `e` to `Component6`.
- Component6: Displays `e`.

Key observation: `Component2` does not use props; `Component5` does not use `e` but must forward it. This illustrates why props drilling becomes hard to manage as depth grows.

### Run Locally
```
npm install
npm run dev
```

Open the shown URL to view the demo.
