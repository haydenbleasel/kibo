'use client';

import { subscribe } from '@/app/(home)/actions/subscribe';
import { cn } from '@repo/shadcn-ui/lib/utils';
import type { FC } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const SubmitButton: FC = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        'absolute top-0.5 right-0.5 select-none rounded-full bg-primary px-6 py-2 font-medium text-sm text-primary-foreground',
        'disabled:cursor-not-allowed disabled:opacity-50'
      )}
      type="submit"
      disabled={pending}
    >
      Join the waitlist
    </button>
  );
};

export const Waitlist: FC = () => {
  const [state, formAction] = useFormState(subscribe as never, {
    message: '',
  });

  return (
    <div className="w-full space-y-2">
      <form action={formAction} className="relative max-w-96 mx-auto w-full">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          aria-label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="jane@acme.com"
          pattern=".+@.+\..+"
          required
          className={cn(
            'w-full rounded-full py-2.5 pr-[94px] pl-4 text-sm',
            'bg-neutral-100 text-neutral-950 outline-secondary placeholder:text-neutral-500',
            'dark:bg-neutral-900 dark:text-white dark:placeholder-text-neutral-600'
          )}
        />
        <SubmitButton />
      </form>
      {state.message ? (
        <p
          aria-live="polite"
          className="m-0 mt-4 block text-sm mx-auto text-center"
        >
          {state.message}
        </p>
      ) : undefined}
    </div>
  );
};
