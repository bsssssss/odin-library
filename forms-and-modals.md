# Forms and Modals Quick Reference

## Form Handling

### HTML Form Structure
```html
<form id="my-form">
  <input type="text" name="title" required>
  <button type="submit">Submit</button>
</form>
```

### JavaScript Event Handling
```javascript
const form = document.querySelector('#my-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevents page refresh
  // Handle form data here
});
```

### Key Points
- HTML `required` attributes validate automatically before submit event fires
- Use `e.preventDefault()` to stop page refresh
- Submit event only fires if HTML validation passes
- Button with `type="submit"` triggers form submission

## Modal Dialogs

### HTML Structure
```html
<dialog class="my-modal">
  <form>
    <!-- form content -->
  </form>
  <button class="close-btn">Close</button>
</dialog>
```

### JavaScript Controls
```javascript
const modal = document.querySelector('.my-modal');
const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
  modal.showModal(); // Opens modal
});

closeBtn.addEventListener('click', () => {
  modal.close(); // Closes modal
});
```

### Key Points
- Use `<dialog>` element for semantic modals
- `showModal()` opens modal with backdrop
- `close()` closes modal
- Modal traps focus automatically