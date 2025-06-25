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
];

// Simple example showing multiple items on the same row
const sampleItems = [
  {
    id: '1',
    name: 'Task A',
    startAt: new Date('2024-02-01'),
    endAt: new Date('2024-02-05'),
    status: statuses[0],
    lane: 'row1', // Same lane = same row
  },
  {
    id: '2',
    name: 'Task B',
    startAt: new Date('2024-02-07'), // Non-overlapping
    endAt: new Date('2024-02-12'),
    status: statuses[1],
    lane: 'row1', // Same lane = same row
  },
  {
    id: '3',
    name: 'Task C',
    startAt: new Date('2024-02-03'), // Overlapping with Task A
    endAt: new Date('2024-02-08'),
    status: statuses[0],
    lane: 'row1', // Same lane = same row
  },
  {
    id: '4',
    name: 'Solo Task',
    startAt: new Date('2024-02-01'),
    endAt: new Date('2024-02-15'),
    status: statuses[1],
    lane: 'row2', // Different lane = different row
  },
];

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