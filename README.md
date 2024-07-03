Run `npm start` for all project commands.

# Editing style

Your custom style can go to `src/style/style.scss`.

Configure default theme color in `src/style/theme.scss`.

By default, color support light and dark theme base on navigator preferences.

You should cut off animation if user want to reduce motion.
You can multiply your time by the --motion css custom properties, or use `@media`:

```scss
@media (prefers-reduced-motion: reduce) {
  // Style to apply to stop animation
}
```
