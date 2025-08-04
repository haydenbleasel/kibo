'use client';

import { Deck, DeckCards, DeckEmpty, DeckItem } from '@repo/deck';
import { HeartIcon, XIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const profiles = [
  {
    id: 1,
    name: 'Sarah Cai',
    age: 28,
    bio: 'Product designer who loves hiking and coffee',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?&w=636&q=80',
    interests: ['Design', 'Hiking', 'Coffee'],
  },
  {
    id: 2,
    name: 'Alex Rivera',
    age: 32,
    bio: 'Software engineer and amateur photographer',
    image:
      'https://images.unsplash.com/photo-1594234591488-128c2968837a?&w=636&q=80',
    interests: ['Tech', 'Photography', 'Travel'],
  },
  {
    id: 3,
    name: 'Jamie Taylor',
    age: 26,
    bio: 'Artist and musician living in the city',
    image:
      'https://images.unsplash.com/photo-1754006320747-a90ba54b93cd?&w=636&q=80',
    interests: ['Art', 'Music', 'Concerts'],
  },
  {
    id: 4,
    name: 'Morgan Kim',
    age: 30,
    bio: 'Yoga instructor and wellness coach',
    image:
      'https://images.unsplash.com/photo-1753993981167-32a3b29e3065?&w=636&q=80',
    interests: ['Yoga', 'Wellness', 'Nature'],
  },
];

const Example = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="mx-auto">
      <Deck className="w-80">
        <DeckCards
          className="aspect-[2/3]"
          currentIndex={currentIndex}
          onCurrentIndexChange={setCurrentIndex}
          onSwipe={console.log}
        >
          {profiles.map((profile) => (
            <DeckItem className="relative overflow-hidden p-0" key={profile.id}>
              <Image
                alt={profile.name}
                className="h-full w-full object-cover"
                draggable={false}
                height={600}
                src={profile.image}
                unoptimized
                width={400}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="font-bold text-xl">
                  {profile.name}, {profile.age}
                </h3>
                <p className="text-sm opacity-90">{profile.bio}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {profile.interests.map((interest) => (
                    <span
                      className="rounded-full bg-white/20 px-2 py-1 text-xs backdrop-blur-sm"
                      key={interest}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </DeckItem>
          ))}
        </DeckCards>
        <DeckEmpty />
      </Deck>

      <div className="mt-6 flex justify-center gap-4">
        <Button
          className="h-12 w-12 rounded-full"
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          size="icon"
          variant="outline"
        >
          <XIcon className="h-5 w-5" />
        </Button>
        <Button
          className="h-12 w-12 rounded-full bg-red-500 hover:bg-red-600"
          onClick={() => setCurrentIndex(Math.min(profiles.length - 1, currentIndex + 1))}
          size="icon"
        >
          <HeartIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Example;
