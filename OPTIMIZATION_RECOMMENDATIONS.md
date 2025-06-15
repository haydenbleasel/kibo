# Additional Optimization Recommendations

## Overview

This document outlines additional performance optimizations that were identified but could not be immediately implemented due to configuration constraints or complexity.

## Inline Event Handler Optimizations

### High Impact Components

#### 1. Theme Switcher (`packages/theme-switcher/index.tsx:70`)
**Issue**: Inline arrow function creates new function reference on each render
```typescript
onClick={() => setTheme(key as 'light' | 'dark' | 'system')}
```
**Recommended Fix**:
```typescript
const handleThemeClick = useCallback((themeKey: 'light' | 'dark' | 'system') => {
  setTheme(themeKey);
}, [setTheme]);

// In render:
onClick={() => handleThemeClick(key as 'light' | 'dark' | 'system')}
```

#### 2. Calendar Component (`packages/calendar/index.tsx:369-372`)
**Issue**: Inline arrow functions in navigation buttons
```typescript
<Button onClick={() => handlePreviousMonth()} variant="ghost" size="icon">
<Button onClick={() => handleNextMonth()} variant="ghost" size="icon">
```
**Recommended Fix**: Extract to useCallback hooks

#### 3. Rating Component (`packages/rating/index.tsx:74`)
**Issue**: Inline event handler with complex logic
```typescript
onClick={(event) => handleValueChange(event, index + 1)}
```

#### 4. Editor Table Components (`packages/editor/index.tsx`)
**Multiple Issues**: Lines 1608, 1626, 1644, 1662, 1680, 1698, etc.
```typescript
onClick={() => editor.chain().focus().addColumnBefore().run()}
onClick={() => editor.chain().focus().addColumnAfter().run()}
// ... and many more
```

### Medium Impact Components

#### 5. Sandbox Component (`packages/sandbox/index.tsx:161`)
```typescript
onClick={() => setSelectedTab(value)}
```

#### 6. Dialog Stack (`packages/dialog-stack/index.tsx:176`)
```typescript
onClick={() => context.setIsOpen(false)}
```

#### 7. AI Conversation (`packages/ai/conversation.tsx:44`)
```typescript
onClick={() => scrollToBottom()}
```

## Bundle Optimization Opportunities

### 1. Dynamic Imports for Heavy Dependencies

#### Editor Component (`packages/editor/index.tsx`)
- **lowlight** (large language syntax highlighting library)
- **fuse.js** (fuzzy search library)
- **@tiptap/pm/model** and other ProseMirror modules

**Recommendation**: Use dynamic imports for these heavy dependencies
```typescript
const loadLowlight = () => import('lowlight').then(m => m.createLowlight);
const loadFuse = () => import('fuse.js');
```

### 2. Code Splitting Opportunities

#### Large Components
- **Editor** (1909 lines) - Split into sub-components
- **Gantt** (1262 lines) - Already optimized in first PR

## React Performance Patterns

### 1. React.memo for Pure Components

Components that would benefit from memoization:
- `ColorPickerSelection`
- `TableHead`
- `GanttMarker`
- `CalendarItem`

### 2. useMemo for Expensive Calculations

Additional candidates beyond Gantt component:
- Color calculations in `ColorPicker`
- Date parsing in `Calendar`
- Complex table sorting operations

## Configuration Issues Encountered

### React Import Problems
- Multiple components had TypeScript errors when adding React imports
- Suggests project may be using automatic React imports (React 17+ JSX transform)
- Need to verify tsconfig.json and build configuration

### Recommended Investigation
1. Check `tsconfig.json` for React JSX configuration
2. Verify if `@types/react` is properly installed
3. Confirm React version and JSX transform settings

## Implementation Priority

### Phase 1 (Immediate - Low Risk)
- ✅ Gantt component optimizations (completed)
- ✅ Table inline handlers (completed)
- ✅ Color picker useState optimization (completed)

### Phase 2 (Short Term - Medium Risk)
- Theme switcher optimization
- Calendar navigation optimization
- Rating component optimization

### Phase 3 (Long Term - High Risk/Effort)
- Editor component splitting and optimization
- Bundle optimization with dynamic imports
- Comprehensive React.memo implementation

## Testing Recommendations

### Performance Testing
1. Add performance monitoring to identify actual bottlenecks
2. Test with large datasets (1000+ items in tables/lists)
3. Monitor memory usage during drag operations
4. Test bundle size impact of optimizations

### A/B Testing
1. Compare render counts before/after optimizations
2. Measure interaction response times
3. Monitor Core Web Vitals metrics

## Conclusion

While the first wave of optimizations addressed the most critical performance issues, these additional improvements could provide further benefits for applications using many components or handling large datasets.

The configuration issues should be resolved to enable the remaining optimizations, particularly around React import patterns and TypeScript configuration.

---

*Document created to track remaining optimization opportunities*