# Laboratory Report No. 1

**Student:** [Andriy Vlonha]
**Group:** [42-CS]  
**Date:** [15/01/2026]

---

## Objective
To learn how to configure a development environment, utilize Git for version control, create basic projects using React (Vite), and document the development process in reports.

---

## Procedure

### 1. Software Installation

**Node.js:**
- PS C:\Users\User\Projects\Web_College> node--version
- Output: v24.11.1
- Verification command: `node --version`

**Git:**
- PS C:\Users\User\Projects\Web_College> git--version 
- Output: git version 2.52.0.windows.1
- Verification command: `git --version`

**Code Editor:**
- Name: [VS Code]

**Screenshots:**  
![Git](Images/Git.png)
![Node](Images/Node.png)
![Npm init](Images/Npm_init.png)
![React start](Images/run.png)

---

### 2. Repository Cloning
```bash
git clone https://github.com/AndriyVlonha/Lab1_Web
cd laba1
npm run dev
```

---

### 3. Creating a React Project
```bash
pnpm create vite@latest laba1 -- --template react
cd laba1
pnpm install
```

---

## Results

1. The development environment was successfully installed and configured.
2. A React project was created using the Vite build tool.
3. Commits were performed following each major stage of the process.

---

## Conclusion

During this laboratory work, I successfully configured a working environment for React application development. I mastered basic Git commands for version control and initialized a baseline React project using the modern Vite tool.

---

## References

- GitHub Repository: [\[link\]](https://github.com/AndriyVlonha/Lab1_Web)
- Vite Documentation: https://vitejs.dev/
- React Documentation: https://react.dev/