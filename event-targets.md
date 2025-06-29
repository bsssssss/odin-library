# Event Targets Reference

## Accessing Event Target

```javascript
element.addEventListener('click', (e) => {
  const target = e.target; // The element that triggered the event
});
```

## Common Event Target Methods

- `e.target.closest('.selector')` - Find nearest ancestor matching selector
- `e.target.remove()` - Remove element from DOM
- `e.target.classList.add/remove/toggle()` - Manipulate CSS classes
- `e.target.dataset.property` - Access data-\* attributes
- `e.target.parentElement` - Get parent element
- `e.target.querySelector()` - Find child elements

## Documentation

- [Element interface](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [HTMLElement interface](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

