'use client';

import { faker } from '@faker-js/faker';
import {
  GanttCreateMarkerTrigger,
  GanttFeatureList,
  GanttFeatureListGroup,
  GanttFeatureRow,
  GanttHeader,
  GanttMarker,
  GanttProvider,
  GanttSidebar,
  GanttSidebarGroup,
  GanttSidebarItem,
  GanttTimeline,
  GanttToday,
} from '@repo/gantt';
import groupBy from 'lodash.groupby';
import { EyeIcon, LinkIcon, TrashIcon } from 'lucide-react';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const statuses = [
  { id: faker.string.uuid(), name: 'Confirmed', color: '#10B981' },
  { id: faker.string.uuid(), name: 'Pending', color: '#F59E0B' },
  { id: faker.string.uuid(), name: 'Cancelled', color: '#EF4444' },
];

const guests = Array.from({ length: 8 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    image: faker.image.avatar(),
  }));

// Hotel rooms
const hotelRooms = Array.from({ length: 5 })
  .fill(null)
  .map((_, index) => ({
    id: faker.string.uuid(),
    name: `Room ${101 + index}`,
  }));

// Generate hotel reservations - multiple guests can book the same room for different periods
const hotelReservations = Array.from({ length: 12 })
  .fill(null)
  .map(() => {
    const startDate = faker.date.future({ years: 0.3, refDate: new Date() });
    const endDate = faker.date.future({ years: 0.1, refDate: startDate });
    const room = faker.helpers.arrayElement(hotelRooms);
    const guest = faker.helpers.arrayElement(guests);
    
    return {
      id: faker.string.uuid(),
      name: `${guest.name} - ${faker.helpers.arrayElement(['Business Trip', 'Vacation', 'Conference', 'Weekend Getaway'])}`,
      startAt: startDate,
      endAt: endDate,
      status: faker.helpers.arrayElement(statuses),
      lane: room.id, // This groups reservations by room
      // Store additional data that's not part of core GanttFeature
      metadata: {
        guest,
        room,
        group: { name: 'Hotel Reservations' },
      },
    };
  });

const exampleMarkers = Array.from({ length: 3 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    date: faker.date.future({ years: 0.2, refDate: new Date() }),
    label: faker.helpers.arrayElement(['Holiday Period', 'Conference Week', 'Peak Season']),
    className: faker.helpers.arrayElement([
      'bg-blue-100 text-blue-900',
      'bg-green-100 text-green-900',
      'bg-purple-100 text-purple-900',
    ]),
  }));

const Example = () => {
  const [reservations, setReservations] = useState(hotelReservations);
  
  // Group reservations by room (lane), then by group
  const groupedReservations = groupBy(reservations, 'metadata.group.name');
  const roomGroupedReservations = Object.fromEntries(
    Object.entries(groupedReservations).map(([groupName, groupReservations]) => [
      groupName,
      groupBy(groupReservations, 'lane'),
    ])
  );

  const handleViewReservation = (id: string) =>
    console.log(`Reservation selected: ${id}`);

  const handleCopyLink = (id: string) => console.log(`Copy link: ${id}`);

  const handleRemoveReservation = (id: string) =>
    setReservations((prev) => prev.filter((reservation) => reservation.id !== id));

  const handleRemoveMarker = (id: string) =>
    console.log(`Remove marker: ${id}`);

  const handleCreateMarker = (date: Date) =>
    console.log(`Create marker: ${date.toISOString()}`);

  const handleMoveReservation = (id: string, startAt: Date, endAt: Date | null) => {
    if (!endAt) {
      return;
    }

    setReservations((prev) =>
      prev.map((reservation) =>
        reservation.id === id ? { ...reservation, startAt, endAt } : reservation
      )
    );

    console.log(`Move reservation: ${id} from ${startAt} to ${endAt}`);
  };

  const handleAddReservation = (date: Date) =>
    console.log(`Add reservation: ${date.toISOString()}`);

  return (
    <GanttProvider
      className="border"
      onAddItem={handleAddReservation}
      range="monthly"
      zoom={100}
    >
      <GanttSidebar>
        {Object.entries(roomGroupedReservations).map(([groupName, roomReservations]) => (
          <GanttSidebarGroup key={groupName} name={groupName}>
            {Object.entries(roomReservations).map(([roomId, roomReservationList]) => {
              const room = hotelRooms.find(r => r.id === roomId);
              // Create a representative feature for the sidebar
              const representativeReservation = {
                id: roomId,
                name: room?.name || 'Unknown Room',
                startAt: new Date(Math.min(...roomReservationList.map(r => r.startAt.getTime()))),
                endAt: new Date(Math.max(...roomReservationList.map(r => r.endAt.getTime()))),
                status: roomReservationList[0].status,
              };
              
              return (
                <GanttSidebarItem
                  key={roomId}
                  feature={representativeReservation}
                  onSelectItem={() => handleViewReservation(roomId)}
                />
              );
            })}
          </GanttSidebarGroup>
        ))}
      </GanttSidebar>
      <GanttTimeline>
        <GanttHeader />
        <GanttFeatureList>
          {Object.entries(roomGroupedReservations).map(([groupName, roomReservations]) => (
            <GanttFeatureListGroup key={groupName}>
              {Object.entries(roomReservations).map(([roomId, roomReservationList]) => (
                <div key={roomId}>
                  <GanttFeatureRow
                    features={roomReservationList}
                    onMove={handleMoveReservation}
                  >
                    {(reservation) => (
                      <ContextMenu>
                        <ContextMenuTrigger asChild>
                          <div className="flex items-center gap-2 w-full">
                            <p className="flex-1 truncate text-xs">
                              {reservation.name}
                            </p>
                            {(reservation as any).metadata?.guest && (
                              <Avatar className="h-4 w-4">
                                <AvatarImage src={(reservation as any).metadata.guest.image} />
                                <AvatarFallback>
                                  {(reservation as any).metadata.guest.name?.slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <ContextMenuItem
                            className="flex items-center gap-2"
                            onClick={() => handleViewReservation(reservation.id)}
                          >
                            <EyeIcon className="text-muted-foreground" size={16} />
                            View reservation
                          </ContextMenuItem>
                          <ContextMenuItem
                            className="flex items-center gap-2"
                            onClick={() => handleCopyLink(reservation.id)}
                          >
                            <LinkIcon className="text-muted-foreground" size={16} />
                            Copy link
                          </ContextMenuItem>
                          <ContextMenuItem
                            className="flex items-center gap-2 text-destructive"
                            onClick={() => handleRemoveReservation(reservation.id)}
                          >
                            <TrashIcon size={16} />
                            Cancel reservation
                          </ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                    )}
                  </GanttFeatureRow>
                </div>
              ))}
            </GanttFeatureListGroup>
          ))}
        </GanttFeatureList>
        {exampleMarkers.map((marker) => (
          <GanttMarker
            key={marker.id}
            {...marker}
            onRemove={handleRemoveMarker}
          />
        ))}
        <GanttToday />
        <GanttCreateMarkerTrigger onCreateMarker={handleCreateMarker} />
      </GanttTimeline>
    </GanttProvider>
  );
};

export default Example;