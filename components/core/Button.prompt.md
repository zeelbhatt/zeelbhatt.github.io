Button — the primary call-to-action; blue by default, with bordered and ghost alternates.

```jsx
<Button variant="primary" size="md">View project ↗</Button>
<Button variant="secondary" as="a" href="#">Read more</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (theme blue, white text), `secondary` (white, bordered ink), `ghost` (transparent, blue text). Sizes: `sm` · `md` · `lg`. Pass `as="a"` to render an anchor. All other props (onClick, href, etc.) pass through.
