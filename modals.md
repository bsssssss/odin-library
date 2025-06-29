# Modal Dialogs Reference

## HTML Structure

```html
<dialog class="my-modal">
  <form>
    <!-- form content -->
  </form>
  <button class="close-btn">Close</button>
</dialog>
```

## JavaScript Controls

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

## Key Points

- Use `<dialog>` element for semantic modals
- `showModal()` opens modal with backdrop
- `close()` closes modal
- Modal traps focus automatically

