---
title: Contribution Graph
description: A GitHub-style contribution graph component that displays activity levels over time.
icon: LayoutGrid
installer: contribution-graph
---

## Features

- GitHub-style activity calendar visualization
- Fully composable architecture with render props
- CSS-based theming with data attributes
- Configurable block size, margin, and radius
- Tooltip support with render prop
- Month and week labels
- Activity count and legend
- Responsive design with horizontal scrolling
- Server-side data fetching support
- TypeScript support

## Data Fetching

This component is the visualization layer only, it doesn't handle data fetching or state management.

I highly recommend using Jonathan Gruber's [GitHub Contributions API](https://github.com/grubersjoe/github-contributions-api) to fetch your data.

Here's an example of how to fetch and cache your data:

```ts
const username = 'haydenbleasel';

const getCachedContributions = unstable_cache(
  async () => {
    const url = new URL(`/v4/${username}`, 'https://github-contributions-api.jogruber.de');
    const response = await fetch(url);
    const data = (await response.json()) as Response;
    const total = data.total[new Date().getFullYear()];

    return { contributions: data.contributions, total };
  },
  ['github-contributions'],
  { revalidate: 60 * 60 * 24 },
);
```

## Examples

### Custom GitHub theme

Use GitHub's color scheme with data attributes:

<Preview path="contribution-graph-custom-theme" />

### Minimal view

Hide labels and footer for a compact display:

<Preview path="contribution-graph-minimal" />

### With tooltips

Add interactive tooltips to show detailed information:

<Preview path="contribution-graph-tooltip" />

### Custom size

Adjust block size and spacing:

<Preview path="contribution-graph-size" />

### Custom block styling

Customize individual blocks with className and style props:

<Preview path="contribution-graph-custom-blocks" />

### Custom footer

Create a custom footer with composable components:

<Preview path="contribution-graph-custom-footer" />

## Usage Tips

- For missing dates in the data array, no activity is assumed
- The calendar will automatically fill gaps between dates with zero activity
- You can control the calendar's date range by including empty entries as the first and last items
- The component automatically handles dark mode when using the system color scheme