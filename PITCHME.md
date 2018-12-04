@title[Introduction]

## Testing Smart in React
#### Pramod Jacob

---

### Questions We'll Answer

- What mentality should we have when we approach testing with React?
- What should our **unit tests** look like?
  - Are there other options outside of Enzyme? What is Enzyme? Why am I even here?
- What should our **integration tests** look like?
- How should we handle **end-to-end tests**?

---

### Testing in JavaScript Isn't Easy

- Async behavior (i.e. promises)
- The high degree of complexity with user interfaces
- Mocking external calls

Note:
It's just not as simple as the "black-box" testing scenarios in our Rails code.

+++

### So What Do We Do?

- Jest
- Enzyme
- Cypress

+++

### So What Do We Do?

We should consider adding **react-testing-library** into the mix:

---

### What About Snapshot Tests?

"Snapshot testing entails an admission of defeat in capturing the essential details of a component: instead we capture them all." - [Visual Testing Handbook](https://www.chromaticqa.com/book/visual-testing-handbook)

---

### Understanding Jest

+++?code=code/jestExample.js&lang=javascript

---

### End to End Tests with Cypress

- ???
