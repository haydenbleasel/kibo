'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SIDEBAR_SCROLL_KEY = 'kibo-sidebar-scroll-position';

export function SidebarScrollPreserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Function to save scroll position
    const saveScrollPosition = () => {
      // Look for the sidebar scroll viewport - it's inside the sidebar and has the Radix scroll area viewport attribute
      const sidebar = document.querySelector(
        '#nd-sidebar [data-radix-scroll-area-viewport]'
      );
      if (sidebar) {
        const scrollTop = sidebar.scrollTop;
        sessionStorage.setItem(SIDEBAR_SCROLL_KEY, scrollTop.toString());
      }
    };

    // Function to restore scroll position
    const restoreScrollPosition = () => {
      const sidebar = document.querySelector(
        '#nd-sidebar [data-radix-scroll-area-viewport]'
      );
      if (sidebar) {
        const savedPosition = sessionStorage.getItem(SIDEBAR_SCROLL_KEY);
        if (savedPosition) {
          sidebar.scrollTop = Number.parseInt(savedPosition, 10);
        }
      }
    };

    // Add scroll event listener to save position when user scrolls
    const sidebar = document.querySelector(
      '#nd-sidebar [data-radix-scroll-area-viewport]'
    );
    if (sidebar) {
      sidebar.addEventListener('scroll', saveScrollPosition, { passive: true });
    }

    // Restore scroll position when pathname changes
    // Use setTimeout to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      restoreScrollPosition();
    }, 100);

    return () => {
      if (sidebar) {
        sidebar.removeEventListener('scroll', saveScrollPosition);
      }
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
