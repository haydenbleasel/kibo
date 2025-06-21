'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  SiAmericanexpress,
  SiDinersclub,
  SiDiscover,
  SiJcb,
  SiMastercard,
  SiVisa,
} from '@icons-pack/react-simple-icons';
import { NfcIcon } from 'lucide-react';
import {
  type HTMLAttributes,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

export type CreditCardProps = HTMLAttributes<HTMLDivElement>;

export const CreditCard = ({ className, ...props }: CreditCardProps) => (
  <div
    className={cn(
      'group/kibo-credit-card perspective-distant aspect-[8560/5398] w-96 text-white',
      className
    )}
    {...props}
  />
);
CreditCard.displayName = 'CreditCard';

export type CreditCardFlipperProps = HTMLAttributes<HTMLDivElement>;

export const CreditCardFlipper = ({
  className,
  ...props
}: CreditCardFlipperProps) => (
  <div
    className={cn(
      'h-full w-full rounded-2xl transition duration-700 ease-in-out',
      'group-hover/kibo-credit-card:-rotate-y-180 transform-3d group-hover/kibo-credit-card:shadow-lg',
      className
    )}
    {...props}
  />
);
CreditCardFlipper.displayName = 'CreditCardFlipper';

export type CreditCardNameProps = HTMLAttributes<HTMLParagraphElement>;

export const CreditCardName = ({
  className,
  ...props
}: CreditCardNameProps) => (
  <p
    className={cn(
      'absolute bottom-0 left-0 font-semibold uppercase',
      className
    )}
    {...props}
  />
);
CreditCardName.displayName = 'CreditCardName';

export type CreditCardChipProps = HTMLAttributes<SVGSVGElement> & {
  withNfcIcon?: boolean;
};

export const CreditCardChip = ({
  className,
  withNfcIcon = true,
  ...props
}: CreditCardChipProps) => (
  <div
    className={cn(
      '-translate-y-1/2 absolute top-1/2 flex w-full items-center gap-[1%]',
      className
    )}
  >
    <svg
      enableBackground="new 0 0 42.2 32.4"
      viewBox="0 0 42.2 32.4"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[14%] shrink-0 rounded-[18%] bg-[#c6b784]"
      {...props}
    >
      <title>Chip</title>
      <path
        d="m34.8.7h-27.3c-3.6 0-6.5 2.9-6.5 6.5v17.7c0 3.6 2.9 6.5 6.5 6.5h27.2c3.6 0 6.5-2.9 6.5-6.5v-17.7c0-3.6-2.9-6.5-6.4-6.5zm-.1 29.4h-6.5c-.4-.3-.7-.8-.8-1.3-.1-.6 0-1.3.4-1.8 1-1.3 1.1-2.5 1.1-4.8v-.9h11v3.5c.1 3-2.3 5.3-5.2 5.3zm-5.7-18c0-.1 0-.3.3-.3h10.7v8.3h-11zm-1.2 0v10.1c0 2-.1 3.1-.9 4-.6.8-.8 1.7-.6 2.7.1.4.2.8.4 1.1h-11c.2-.3.3-.7.4-1.1.2-1-.1-1.9-.6-2.7-.8-1-.9-2-.9-4v-12.6c0-2 .1-3 .9-4 .6-.7.8-1.6.6-2.6-.1-.4-.2-.8-.4-1.1h11.1c-.2.3-.3.7-.4 1.1-.2 1 .1 1.9.7 2.7.3.4.6.9.7 1.5l.1.4 1.2-.3-.1-.4c-.2-.7-.5-1.3-.9-1.9-.4-.5-.5-1.1-.4-1.7.1-.5.4-1.1.7-1.3h6.4.1c2.9 0 5.2 2.4 5.2 5.3v3.5h-10.8c-.9-.2-1.5.4-1.5 1.3zm-25.6 8v-8.2h11.2v8.2zm12.8-16.9c.1.6 0 1.2-.4 1.7-1 1.2-1.1 2.5-1.1 4.7v1.1h-11.3v-3.5c0-2.9 2.4-5.3 5.3-5.3h6.7c.4.3.7.8.8 1.3zm-12.8 18.1h11.2v1c0 2.2.2 3.5 1.1 4.7.4.5.5 1.1.4 1.7s-.4 1.1-.8 1.3h-6.6c-2.9 0-5.3-2.4-5.3-5.3z"
        fill="#000"
        stroke="#000"
        strokeWidth={0.1}
        opacity={0.4}
      />
    </svg>
    {withNfcIcon && <NfcIcon className="aspect-square h-auto w-[7%]" />}
  </div>
);
CreditCardChip.displayName = 'CreditCardChip';

export type CreditCardLogoProps = HTMLAttributes<HTMLDivElement>;

export const CreditCardLogo = ({
  className,
  ...props
}: CreditCardLogoProps) => (
  <div
    className={cn('absolute top-0 right-0 h-full max-h-1/4', className)}
    {...props}
  />
);
CreditCardLogo.displayName = 'CreditCardLogo';

export type CreditCardFrontProps = HTMLAttributes<HTMLDivElement> & {
  safeArea?: number;
};

export const CreditCardFront = ({
  className,
  safeArea = 20,
  children,
  ...props
}: CreditCardFrontProps) => (
  <div
    className={cn(
      'backface-hidden absolute inset-0 flex overflow-hidden rounded-2xl bg-foreground/90',
      className
    )}
    {...props}
  >
    <div
      className="relative flex-1"
      style={{
        margin: `${safeArea}px`,
      }}
    >
      {children}
    </div>
  </div>
);
CreditCardFront.displayName = 'CreditCardFront';

export type CreditCardServiceProviderProps = HTMLAttributes<HTMLDivElement> & {
  type?:
    | 'visa'
    | 'mastercard'
    | 'american-express'
    | 'discover'
    | 'diners-club'
    | 'jcb';
};

const icons: Record<
  NonNullable<CreditCardServiceProviderProps['type']>,
  typeof SiVisa
> = {
  visa: SiVisa,
  mastercard: SiMastercard,
  'american-express': SiAmericanexpress,
  discover: SiDiscover,
  'diners-club': SiDinersclub,
  jcb: SiJcb,
};

export const CreditCardServiceProvider = ({
  className,
  children,
  type,
  ...props
}: CreditCardServiceProviderProps) => {
  const Icon = type ? icons[type] : 'div';

  return (
    <div
      className={cn(
        'absolute right-0 bottom-0 h-full max-h-[25%] w-auto',
        className
      )}
      {...props}
    >
      {children ?? <Icon className="size-full" />}
    </div>
  );
};

export type CreditCardMagStripeProps = HTMLAttributes<HTMLDivElement>;

export type CreditCardBackContextValue = {
  hideInformation: boolean;
  setHideInformation: (value: boolean) => void;
  safeArea: number;
};

const CreditCardBackContext = createContext<CreditCardBackContextValue>({
  hideInformation: true,
  setHideInformation: () => {},
  safeArea: 20,
});

export type CreditCardBackProps = HTMLAttributes<HTMLDivElement> & {
  hideInformation?: boolean;
  safeArea?: number;
};

export const CreditCardBack = ({
  hideInformation: hideInformationProp,
  safeArea = 16,
  children,
  className,
  ...props
}: CreditCardBackProps) => {
  const [hideInformation, setHideInformation] = useState(
    hideInformationProp ?? true
  );

  useEffect(() => {
    if (hideInformationProp !== undefined) {
      setHideInformation(hideInformationProp);
    }
  }, [hideInformationProp]);

  return (
    <CreditCardBackContext.Provider
      value={{ hideInformation, setHideInformation, safeArea }}
    >
      <div
        className={cn(
          'backface-hidden absolute inset-0 flex rotate-y-180 overflow-hidden rounded-2xl bg-foreground/90',
          className
        )}
        {...props}
      >
        <div
          className="relative flex-1"
          style={{
            margin: `${safeArea}px`,
          }}
        >
          {children}
        </div>
      </div>
    </CreditCardBackContext.Provider>
  );
};
CreditCardBack.displayName = 'CreditCardBack';

export const CreditCardMagStripe = ({
  className,
  ...props
}: CreditCardMagStripeProps) => {
  const context = useContext(CreditCardBackContext);

  if (context.hideInformation) {
    return null;
  }
  return (
    <div
      className={cn(
        '-translate-x-1/2 absolute top-[3%] left-1/2 h-1/4 bg-gray-900',
        className
      )}
      {...props}
      style={{
        width: `calc(100% + 2 * ${context.safeArea}px)`,
      }}
    />
  );
};
CreditCardMagStripe.displayName = 'CreditCardMagStripe';

export type CreditCardNumberProps = HTMLAttributes<HTMLParagraphElement>;

export const CreditCardNumber = ({
  className,
  children,
  ...props
}: CreditCardNumberProps) => {
  const context = useContext(CreditCardBackContext);

  if (context.hideInformation) {
    return null;
  }
  return (
    <p
      className={cn('absolute bottom-0 left-0 font-mono text-2xl', className)}
      {...props}
    >
      {children}
    </p>
  );
};
CreditCardNumber.displayName = 'CreditCardNumber';

export type CreditCardExpiryProps = HTMLAttributes<HTMLParagraphElement>;

export const CreditCardExpiry = ({
  className,
  ...props
}: CreditCardExpiryProps) => {
  const context = useContext(CreditCardBackContext);

  if (context.hideInformation) {
    return null;
  }
  return <p className={cn('font-mono', className)} {...props} />;
};
CreditCardExpiry.displayName = 'CreditCardExpiry';

export type CreditCardCvvProps = HTMLAttributes<HTMLParagraphElement>;

export const CreditCardCvv = ({ className, ...props }: CreditCardCvvProps) => {
  const context = useContext(CreditCardBackContext);

  if (context.hideInformation) {
    return null;
  }
  return <p className={cn('font-mono', className)} {...props} />;
};
CreditCardCvv.displayName = 'CreditCardCvv';

export type CreditCardRevealButtonProps = HTMLAttributes<HTMLButtonElement>;

export const CreditCardRevealButton = ({
  children,
  className,
  ...props
}: CreditCardRevealButtonProps) => {
  const context = useContext(CreditCardBackContext);

  return (
    <Button
      variant="secondary"
      className={cn(
        'absolute transition-all ease-in-out',
        context.hideInformation
          ? '-translate-y-1/2 top-1/2 right-1/2 translate-x-1/2'
          : 'top-0 right-0',
        className
      )}
      onClick={() => context.setHideInformation(!context.hideInformation)}
      {...props}
    >
      {(children ?? context.hideInformation) ? 'Reveal' : 'Hide'}
    </Button>
  );
};
