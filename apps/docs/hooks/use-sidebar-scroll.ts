'use client';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

const SIDEBAR_SCROLL_KEY = 'kibo-sidebar-scroll-position';

export function useSidebarScroll() {
  const pathname = usePathname();
  const scrollElementRef = useRef<HTMLDivElement>(null);
  const isRestoringRef = useRef(false);

  // Save scroll position to sessionStorage
  const saveScrollPosition = useCallback(() => {
    const element = scrollElementRef.current;
    if (element && !isRestoringRef.current) {
      const scrollTop = element.scrollTop;
      sessionStorage.setItem(SIDEBAR_SCROLL_KEY, scrollTop.toString());
    }
  }, []);

  // Restore scroll position from sessionStorage
  const restoreScrollPosition = useCallback(() => {
    const element = scrollElementRef.current;
    if (element) {
      const savedPosition = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
      if (savedPosition) {
        isRestoringRef.current = true;
        element.scrollTop = Number.parseInt(savedPosition, 10);
        // Reset flag after a short delay to allow for smooth scrolling
        setTimeout(() => {
          isRestoringRef.current = false;
        }, 100);
      }
    }
  }, []);

  // Set up scroll event listener to save position
  useEffect(() => {
    const element = scrollElementRef.current;
    if (element) {
      element.addEventListener('scroll', saveScrollPosition, { passive: true });
      return () => {
        element.removeEventListener('scroll', saveScrollPosition);
      };
    }
  }, [saveScrollPosition]);

  // Restore scroll position when pathname changes
  useEffect(() => {
    // Use requestAnimationFrame to ensure the DOM is ready
    requestAnimationFrame(() => {
      restoreScrollPosition();
    });
  }, [pathname, restoreScrollPosition]);

  return {
    scrollElementRef,
    saveScrollPosition,
    restoreScrollPosition,
  };
}
