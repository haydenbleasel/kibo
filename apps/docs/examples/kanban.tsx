'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { faker } from '@faker-js/faker';
import {
  KanbanBoard,
  KanbanCard,
  KanbanCards,
  KanbanHeader,
  KanbanProvider,
} from '@repo/kanban';
import { endOfMonth, startOfMonth, subDays, subMonths } from 'date-fns';
import { useState } from 'react';

const today = new Date();

const exampleStatuses = [
  { id: faker.string.uuid(), name: 'Planned', color: '#6B7280' },
  { id: faker.string.uuid(), name: 'In Progress', color: '#F59E0B' },
  { id: faker.string.uuid(), name: 'Done', color: '#10B981' },
];

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const exampleFeatures = new Array(20).fill(null).map((_, index) => ({
  id: faker.string.uuid(),
  name: capitalize(faker.company.buzzPhrase()),
  startAt: startOfMonth(subMonths(today, index)),
  endAt: subDays(endOfMonth(today), index),
  column: exampleStatuses[index % exampleStatuses.length].id,
  owner: {
    id: faker.string.uuid(),
    image: faker.image.avatar(),
    name: faker.person.fullName(),
  },
}));

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

const shortDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
});

const Example = () => {
  const [features, setFeatures] = useState(exampleFeatures);

  return (
    <KanbanProvider
      onDataChange={setFeatures}
      columns={exampleStatuses}
      data={features}
    >
      {(column) => (
        <KanbanBoard key={column.id} id={column.id}>
          <KanbanHeader>
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: column.color }}
              />
              <span>{column.name}</span>
            </div>
          </KanbanHeader>
          <KanbanCards id={column.id}>
            {(feature: (typeof features)[number]) => (
              <KanbanCard
                key={feature.id}
                id={feature.id}
                name={feature.name}
                column={column.id}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="m-0 flex-1 font-medium text-sm">
                      {feature.name}
                    </p>
                    <p className="m-0 text-muted-foreground text-xs">
                      {feature.owner.name}
                    </p>
                  </div>
                  {feature.owner && (
                    <Avatar className="h-4 w-4 shrink-0">
                      <AvatarImage src={feature.owner.image} />
                      <AvatarFallback>
                        {feature.owner.name?.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
                <p className="m-0 text-muted-foreground text-xs">
                  {shortDateFormatter.format(feature.startAt)} -{' '}
                  {dateFormatter.format(feature.endAt)}
                </p>
              </KanbanCard>
            )}
          </KanbanCards>
        </KanbanBoard>
      )}
    </KanbanProvider>
  );
};

export default Example;
