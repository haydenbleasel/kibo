'use client';

import { faker } from '@faker-js/faker';
import {
  GanttFeatureList,
  GanttFeatureListGroup,
  GanttFeatureRow,
  GanttHeader,
  GanttProvider,
  GanttSidebar,
  GanttSidebarGroup,
  GanttSidebarItem,
  GanttTimeline,
  GanttToday,
} from '@repo/gantt';
import { useState } from 'react';

const statuses = [
  { id: faker.string.uuid(), name: 'Active', color: '#10B981' },
  { id: faker.string.uuid(), name: 'Pending', color: '#F59E0B' },
  { id: faker.string.uuid(), name: 'Completed', color: '#6366F1' },
];

// Simple example showing multiple items on the same row
const sampleItems = Array.from({ length: 6 })
  .fill(null)
  .map(() => {
    const startDate = faker.date.future({ years: 0.2, refDate: new Date() });
    const endDate = faker.date.future({ years: 0.1, refDate: startDate });
    
    return {
      id: faker.string.uuid(),
      name: faker.company.buzzPhrase(),
      startAt: startDate,
      endAt: endDate,
      status: faker.helpers.arrayElement(statuses),
      lane: faker.helpers.arrayElement(['row1', 'row1', 'row1', 'row2']), // More items in row1 to demonstrate multi-item functionality
    };
  });

const Example = () => {
  const [items, setItems] = useState(sampleItems);
  
  // Group by lane
  const groupedByLane = items.reduce((acc, item) => {
    if (!acc[item.lane]) {
      acc[item.lane] = [];
    }
    acc[item.lane].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  const handleMoveItem = (id: string, startAt: Date, endAt: Date | null) => {
    if (!endAt) return;
    
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, startAt, endAt } : item
      )
    );
  };

  return (
    <GanttProvider
      className="border"
      range="monthly"
      zoom={100}
    >
      <GanttSidebar>
        <GanttSidebarGroup name="Multi-Item Rows">
          {Object.entries(groupedByLane).map(([lane, laneItems]) => {
            const representativeItem = {
              id: lane,
              name: `${lane.toUpperCase()} (${laneItems.length} items)`,
              startAt: new Date(Math.min(...laneItems.map(item => item.startAt.getTime()))),
              endAt: new Date(Math.max(...laneItems.map(item => item.endAt.getTime()))),
              status: laneItems[0].status,
            };
            
            return (
              <GanttSidebarItem
                key={lane}
                feature={representativeItem}
              />
            );
          })}
        </GanttSidebarGroup>
      </GanttSidebar>
      <GanttTimeline>
        <GanttHeader />
        <GanttFeatureList>
          <GanttFeatureListGroup>
            {Object.entries(groupedByLane).map(([lane, laneItems]) => (
              <GanttFeatureRow
                key={lane}
                features={laneItems}
                onMove={handleMoveItem}
              >
                {(item) => (
                  <div className="flex items-center gap-2 w-full">
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: item.status.color }}
                    />
                    <p className="flex-1 truncate text-xs">
                      {item.name}
                    </p>
                  </div>
                )}
              </GanttFeatureRow>
            ))}
          </GanttFeatureListGroup>
        </GanttFeatureList>
        <GanttToday />
      </GanttTimeline>
    </GanttProvider>
  );
};

export default Example;