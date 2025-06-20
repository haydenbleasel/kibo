'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AvatarStack } from '@repo/avatar-stack';
import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from '@repo/cursor';
import { cn } from '@repo/shadcn-ui/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const users = [
  {
    id: 1,
    name: 'Hayden Bleasel',
    avatar: 'https://github.com/haydenbleasel.png',
  },
  {
    id: 2,
    name: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    message: 'Can we adjust the color?',
  },
  {
    id: 3,
    name: 'Lee Robinson',
    avatar: 'https://github.com/leerob.png',
  },
];

const colors = [
  {
    foreground: 'text-emerald-800',
    background: 'bg-emerald-50',
  },
  {
    foreground: 'text-rose-800',
    background: 'bg-rose-50',
  },
  {
    foreground: 'text-sky-800',
    background: 'bg-sky-50',
  },
];

// Helper function to generate random position
const getRandomPosition = () => ({
  x: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
  y: Math.floor(Math.random() * 80) + 10, // Keep within 10-90% range
});

const Example = () => {
  const [user1Position, setUser1Position] = useState({
    x: 10,
    y: 8,
  });
  const [user2Position, setUser2Position] = useState({
    x: 30,
    y: 40,
  });
  const [user3Position, setUser3Position] = useState({
    x: 70,
    y: 50,
  });

  // Store all user positions in a single array for easier access
  const userPositions = [user1Position, user2Position, user3Position];

  // Create separate useEffects for each user to move at different intervals
  useEffect(() => {
    const interval = setInterval(
      () => {
        setUser1Position(getRandomPosition());
      },
      Math.random() * 3000 + 2000
    ); // Random interval between 2-5 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setUser2Position(getRandomPosition());
      },
      Math.random() * 4000 + 3000
    ); // Random interval between 3-7 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => {
        setUser3Position(getRandomPosition());
      },
      Math.random() * 2500 + 1500
    ); // Random interval between 1.5-4 seconds

    return () => clearInterval(interval);
  }, []);

  // Assign positions to users
  const usersWithPositions = users.map((user, index) => ({
    ...user,
    position: userPositions[index],
  }));

  return (
    <div className="relative aspect-[4/3] size-full bg-[radial-gradient(var(--color-secondary),transparent_1px)] [background-size:16px_16px]">
      <div className="absolute top-8 right-8">
        <AvatarStack size={32} animate>
          {usersWithPositions.map((user) => (
            <Avatar key={user.id}>
              <AvatarImage className="mt-0 mb-0" src={user.avatar} />
              <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          ))}
        </AvatarStack>
      </div>
      {usersWithPositions.map((user, index) => (
        <Cursor
          key={user.id}
          className="absolute transition-all duration-1000"
          style={{
            top: `${user.position.y}%`,
            left: `${user.position.x}%`,
          }}
        >
          <CursorPointer
            className={cn(colors[index % colors.length].foreground)}
          />
          <CursorBody
            className={cn(
              colors[index % colors.length].background,
              colors[index % colors.length].foreground,
              'gap-1 px-3 py-2'
            )}
          >
            <div className="flex items-center gap-2 opacity-100!">
              <Image
                src={user.avatar}
                alt={user.name}
                className="mt-0 mb-0 size-4 rounded-full"
                width={16}
                height={16}
                unoptimized
              />
              <CursorName>{user.name}</CursorName>
            </div>
            {user.message && <CursorMessage>{user.message}</CursorMessage>}
          </CursorBody>
        </Cursor>
      ))}
    </div>
  );
};
export default Example;
