'use client';

import { faker } from '@faker-js/faker';
import {
  GanttCreateMarkerTrigger,
  GanttFeatureItem,
  GanttFeatureList,
  GanttFeatureListGroup,
  GanttHeader,
  GanttMarker,
  GanttProvider,
  GanttSidebar,
  GanttSidebarGroup,
  GanttSidebarItem,
  GanttTimeline,
  GanttToday,
  getDependentFeatures,
  getBlockingFeatures,
  validateDependencies,
  getDependencySummary,
} from '@repo/gantt';
import groupBy from 'lodash.groupby';
import { 
  EyeIcon, 
  LinkIcon, 
  TrashIcon, 
  GitBranchIcon, 
  AlertTriangleIcon 
} from 'lucide-react';
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
  { id: faker.string.uuid(), name: 'Planned', color: '#6B7280' },
  { id: faker.string.uuid(), name: 'In Progress', color: '#F59E0B' },
  { id: faker.string.uuid(), name: 'Done', color: '#10B981' },
];

const users = Array.from({ length: 4 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    image: faker.image.avatar(),
  }));

const exampleGroups = Array.from({ length: 3 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: capitalize(faker.company.buzzPhrase()),
  }));

const exampleProducts = Array.from({ length: 2 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: capitalize(faker.company.buzzPhrase()),
  }));

const exampleInitiatives = Array.from({ length: 2 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: capitalize(faker.company.buzzPhrase()),
  }));

const exampleReleases = Array.from({ length: 2 })
  .fill(null)
  .map(() => ({
    id: faker.string.uuid(),
    name: capitalize(faker.company.buzzPhrase()),
  }));

// Create features with realistic dependencies for a software project
const featuresWithDependencies = [
  {
    id: 'database-setup',
    name: 'Database Schema Setup',
    startAt: new Date(2024, 0, 1),
    endAt: new Date(2024, 0, 10),
    status: statuses[2], // Done
    owner: users[0],
    group: exampleGroups[0],
    product: exampleProducts[0],
    initiative: exampleInitiatives[0],
    release: exampleReleases[0],
    // No dependencies - this is foundational
  },
  {
    id: 'user-auth',
    name: 'User Authentication',
    startAt: new Date(2024, 0, 8),
    endAt: new Date(2024, 0, 22),
    status: statuses[2], // Done
    owner: users[1],
    group: exampleGroups[0],
    product: exampleProducts[0],
    initiative: exampleInitiatives[0],
    release: exampleReleases[0],
    dependencies: ['database-setup'], // Depends on database
  },
  {
    id: 'user-profiles',
    name: 'User Profile Management',
    startAt: new Date(2024, 0, 20),
    endAt: new Date(2024, 1, 8),
    status: statuses[1], // In Progress
    owner: users[2],
    group: exampleGroups[0],
    product: exampleProducts[0],
    initiative: exampleInitiatives[0],
    release: exampleReleases[0],
    dependencies: ['user-auth'], // Depends on authentication
  },
  {
    id: 'api-endpoints',
    name: 'REST API Development',
    startAt: new Date(2024, 0, 15),
    endAt: new Date(2024, 1, 15),
    status: statuses[1], // In Progress
    owner: users[3],
    group: exampleGroups[1],
    product: exampleProducts[1],
    initiative: exampleInitiatives[1],
    release: exampleReleases[1],
    dependencies: ['database-setup', 'user-auth'], // Depends on both
  },
  {
    id: 'dashboard',
    name: 'User Dashboard',
    startAt: new Date(2024, 1, 5),
    endAt: new Date(2024, 1, 28),
    status: statuses[0], // Planned
    owner: users[0],
    group: exampleGroups[0],
    product: exampleProducts[0],
    initiative: exampleInitiatives[0],
    release: exampleReleases[0],
    dependencies: ['user-profiles', 'api-endpoints'], // Depends on profiles and API
  },
  {
    id: 'mobile-app',
    name: 'Mobile Application',
    startAt: new Date(2024, 1, 20),
    endAt: new Date(2024, 3, 15),
    status: statuses[0], // Planned
    owner: users[1],
    group: exampleGroups[1],
    product: exampleProducts[1],
    initiative: exampleInitiatives[1],
    release: exampleReleases[1],
    dependencies: ['api-endpoints'], // Depends on API
  },
  {
    id: 'notifications',
    name: 'Push Notifications',
    startAt: new Date(2024, 2, 1),
    endAt: new Date(2024, 2, 20),
    status: statuses[0], // Planned
    owner: users[2],
    group: exampleGroups[2],
    product: exampleProducts[0],
    initiative: exampleInitiatives[0],
    release: exampleReleases[0],
    dependencies: ['user-profiles'], // Depends on user profiles
  },
  {
    id: 'analytics',
    name: 'Analytics Dashboard',
    startAt: new Date(2024, 2, 15),
    endAt: new Date(2024, 3, 30),
    status: statuses[0], // Planned
    owner: users[3],
    group: exampleGroups[2],
    product: exampleProducts[1],
    initiative: exampleInitiatives[1],
    release: exampleReleases[1],
    dependencies: ['dashboard', 'api-endpoints'], // Depends on both dashboard and API
  },
];

const exampleMarkers = [
  {
    id: faker.string.uuid(),
    date: new Date(2024, 0, 15),
    label: 'Alpha Release',
    className: 'bg-blue-100 text-blue-900',
  },
  {
    id: faker.string.uuid(),
    date: new Date(2024, 1, 28),
    label: 'Beta Release',
    className: 'bg-green-100 text-green-900',
  },
  {
    id: faker.string.uuid(),
    date: new Date(2024, 3, 30),
    label: 'Public Launch',
    className: 'bg-purple-100 text-purple-900',
  },
];

const Example = () => {
  const [features, setFeatures] = useState(featuresWithDependencies);
  const groupedFeatures = groupBy(features, 'group.name');
  const sortedGroupedFeatures = Object.fromEntries(
    Object.entries(groupedFeatures).sort(([nameA], [nameB]) =>
      nameA.localeCompare(nameB)
    )
  );

  const handleViewFeature = (id: string) => {
    const feature = features.find(f => f.id === id);
    if (feature) {
      console.log(`📋 Feature: ${feature.name}`);
      console.log(`📅 Timeline: ${feature.startAt.toDateString()} - ${feature.endAt.toDateString()}`);
      console.log(`👤 Owner: ${feature.owner.name}`);
      console.log(`📊 Status: ${feature.status.name}`);
    }
  };

  const handleViewDependencies = (id: string) => {
    const feature = features.find(f => f.id === id);
    if (!feature) return;
    
    const dependencies = getDependentFeatures(feature, features);
    const blocking = getBlockingFeatures(feature, features);
    const validation = validateDependencies(feature, features);
    
    console.group(`🔗 Dependencies for "${feature.name}"`);
    
    if (dependencies.length > 0) {
      console.log(`📋 Depends on (${dependencies.length}):`);
      dependencies.forEach(dep => {
        console.log(`  • ${dep.name} (${dep.status.name})`);
      });
    } else {
      console.log('📋 No dependencies');
    }
    
    if (blocking.length > 0) {
      console.log(`🚧 Blocking (${blocking.length}):`);
      blocking.forEach(blocked => {
        console.log(`  • ${blocked.name} (${blocked.status.name})`);
      });
    } else {
      console.log('🚧 Not blocking any features');
    }
    
    if (!validation.isValid) {
      console.warn('⚠️ Dependency conflicts:');
      validation.conflicts.forEach(conflict => {
        console.warn(`  • ${conflict}`);
      });
    } else {
      console.log('✅ Dependencies are valid');
    }
    
    console.groupEnd();
  };

  const handleShowSummary = () => {
    const summary = getDependencySummary(features);
    console.group('📊 Project Dependency Summary');
    console.log(`📋 Total features: ${summary.totalFeatures}`);
    console.log(`🔗 Features with dependencies: ${summary.featuresWithDependencies}`);
    console.log(`📈 Total dependencies: ${summary.totalDependencies}`);
    
    if (summary.conflicts.length > 0) {
      console.warn(`⚠️ Conflicts found in ${summary.conflicts.length} features:`);
      summary.conflicts.forEach(({ feature, conflicts }) => {
        console.warn(`  • ${feature.name}: ${conflicts.join('; ')}`);
      });
    } else {
      console.log('✅ No dependency conflicts');
    }
    
    if (summary.cyclicDependency.hasCycle && summary.cyclicDependency.cycle) {
      console.warn('🔄 Cyclic dependency detected:');
      console.warn(`  Cycle: ${summary.cyclicDependency.cycle.join(' → ')}`);
    } else {
      console.log('✅ No cyclic dependencies');
    }
    
    console.groupEnd();
  };

  const handleCopyLink = (id: string) => console.log(`Copy link: ${id}`);

  const handleRemoveFeature = (id: string) =>
    setFeatures((prev) => prev.filter((feature) => feature.id !== id));

  const handleRemoveMarker = (id: string) =>
    console.log(`Remove marker: ${id}`);

  const handleCreateMarker = (date: Date) =>
    console.log(`Create marker: ${date.toISOString()}`);

  const handleMoveFeature = (id: string, startAt: Date, endAt: Date | null) => {
    if (!endAt) {
      return;
    }

    setFeatures((prev) => {
      const updatedFeatures = prev.map((feature) =>
        feature.id === id ? { ...feature, startAt, endAt } : feature
      );
      
      // Validate dependencies after the move
      const movedFeature = updatedFeatures.find(f => f.id === id);
      if (movedFeature) {
        const validation = validateDependencies(movedFeature, updatedFeatures);
        if (!validation.isValid) {
          console.warn(`⚠️ Moving "${movedFeature.name}" created dependency conflicts:`);
          validation.conflicts.forEach(conflict => {
            console.warn(`  • ${conflict}`);
          });
        }
      }
      
      return updatedFeatures;
    });

    console.log(`📅 Moved feature: ${id} from ${startAt.toLocaleDateString()} to ${endAt.toLocaleDateString()}`);
  };

  const handleAddFeature = (date: Date) =>
    console.log(`Add feature: ${date.toISOString()}`);

  return (
    <div className="space-y-4">
      <div className="flex gap-2 text-sm">
        <button
          onClick={handleShowSummary}
          className="px-3 py-1 bg-blue-100 text-blue-800 rounded hover:bg-blue-200"
          type="button"
        >
          📊 Show Dependency Summary
        </button>
        <div className="text-muted-foreground">
          💡 Right-click features to explore dependencies, drag to test validation
        </div>
      </div>
      
      <GanttProvider
        className="border"
        onAddItem={handleAddFeature}
        range="monthly"
        zoom={100}
      >
        <GanttSidebar>
          {Object.entries(sortedGroupedFeatures).map(([group, features]) => (
            <GanttSidebarGroup key={group} name={group}>
              {features.map((feature) => (
                <GanttSidebarItem
                  feature={feature}
                  key={feature.id}
                  onSelectItem={handleViewFeature}
                />
              ))}
            </GanttSidebarGroup>
          ))}
        </GanttSidebar>
        <GanttTimeline>
          <GanttHeader />
          <GanttFeatureList>
            {Object.entries(sortedGroupedFeatures).map(([group, features]) => (
              <GanttFeatureListGroup key={group}>
                {features.map((feature) => (
                  <div className="flex" key={feature.id}>
                    <ContextMenu>
                      <ContextMenuTrigger asChild>
                        <button
                          onClick={() => handleViewFeature(feature.id)}
                          type="button"
                        >
                          <GanttFeatureItem
                            onMove={handleMoveFeature}
                            {...feature}
                          >
                            <div className="flex items-center gap-1 flex-1">
                              {feature.dependencies?.length && (
                                <GitBranchIcon 
                                  className="text-muted-foreground shrink-0" 
                                  size={12}
                                />
                              )}
                              {(() => {
                                const validation = validateDependencies(feature, features);
                                return !validation.isValid && (
                                  <AlertTriangleIcon 
                                    className="text-destructive shrink-0" 
                                    size={12}
                                  />
                                );
                              })()}
                              <p className="flex-1 truncate text-xs">
                                {feature.name}
                              </p>
                            </div>
                            {feature.owner && (
                              <Avatar className="h-4 w-4">
                                <AvatarImage src={feature.owner.image} />
                                <AvatarFallback>
                                  {feature.owner.name?.slice(0, 2)}
                                </AvatarFallback>
                              </Avatar>
                            )}
                          </GanttFeatureItem>
                        </button>
                      </ContextMenuTrigger>
                      <ContextMenuContent>
                        <ContextMenuItem
                          className="flex items-center gap-2"
                          onClick={() => handleViewFeature(feature.id)}
                        >
                          <EyeIcon className="text-muted-foreground" size={16} />
                          View feature
                        </ContextMenuItem>
                        <ContextMenuItem
                          className="flex items-center gap-2"
                          onClick={() => handleViewDependencies(feature.id)}
                        >
                          <GitBranchIcon className="text-muted-foreground" size={16} />
                          View dependencies
                        </ContextMenuItem>
                        <ContextMenuItem
                          className="flex items-center gap-2"
                          onClick={() => handleCopyLink(feature.id)}
                        >
                          <LinkIcon className="text-muted-foreground" size={16} />
                          Copy link
                        </ContextMenuItem>
                        <ContextMenuItem
                          className="flex items-center gap-2 text-destructive"
                          onClick={() => handleRemoveFeature(feature.id)}
                        >
                          <TrashIcon size={16} />
                          Remove from roadmap
                        </ContextMenuItem>
                      </ContextMenuContent>
                    </ContextMenu>
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
    </div>
  );
};

export default Example;