# ESLint Practice Project

## Objective
The goal of this project is to gain hands-on experience setting up and configuring ESLint in a Node.js project. ESLint is used to enforce consistent coding styles, detect potential errors early, and improve overall code quality.

---
## Project Setup

### 1. Initialize a Node.js Project
A new project directory was created and initialized using npm:

```bash
mkdir eslint-practice
cd eslint-practice
npm init -y
```

## ESLint Output Screenshot


<img width="863" height="501" alt="Screenshot 2026-01-29 at 17 35 07" src="https://github.com/user-attachments/assets/7bb27861-99a3-4884-89f7-85e2ddc32be7" />

<img width="863" height="501" alt="Screenshot 2026-01-29 at 17 26 16" src="https://github.com/user-attachments/assets/4e2d4bca-0452-4246-820f-5f2756210af9" />

<img width="863" height="501" alt="Screenshot 2026-01-29 at 17 25 42" src="https://github.com/user-attachments/assets/751ff293-0cd3-4bf0-a992-f63da3c24635" />


## ESLint Configuration

The following rules were added to enforce code style:

```js
rules: {
  semi: ["error", "always"],
  quotes: ["error", "single"]
}
