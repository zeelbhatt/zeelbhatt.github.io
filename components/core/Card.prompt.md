Card — a bordered surface for projects and link tiles, with an optional 16:10 cover image.

```jsx
<Card
  image="../../assets/projects/slam.png"
  title="SLAM Mission & Autonomous Landing"
  meta="ORB-SLAM · ROS · Gazebo"
  href="https://github.com/zeelbhatt/autonomous-exploration"
/>
```

Pass `href` to make the entire card a link. `meta` renders as a monospace tag line; `children` render as body copy below.
