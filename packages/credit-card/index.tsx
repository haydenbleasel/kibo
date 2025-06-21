'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { NfcIcon } from 'lucide-react';
import {
  type HTMLAttributes,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Amex,
  type CardNetworkIcon,
  type CardNetworkIconProps,
  type CardNetworkIconType,
  Diners,
  Discover,
  JCB,
  Mastercard,
  UnionPay,
  Visa,
} from 'react-card-network-icons';

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
      enableBackground="new 0 0 132 92"
      viewBox="0 0 132 92"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[16%] shrink-0 rounded-[18%]"
      {...props}
    >
      <title>Chip</title>
      <rect
        x="0.5"
        y="0.5"
        width="131"
        height="91"
        rx="20.5"
        fill="url(#kibo-credit-card-chip-gradient)"
        stroke="#CECCC8"
      />
      <rect
        x="9.5"
        y="9.5"
        width="48"
        height="21"
        rx="10.5"
        fill="#EAEAEA"
        stroke="#95958E"
      />
      <rect
        x="9.5"
        y="61.5"
        width="48"
        height="21"
        rx="10.5"
        fill="#EAEAEA"
        stroke="#95958E"
      />
      <rect
        x="9.5"
        y="35.5"
        width="48"
        height="21"
        rx="10.5"
        fill="#EAEAEA"
        stroke="#95958E"
      />
      <rect
        x="74.5"
        y="9.5"
        width="48"
        height="21"
        rx="10.5"
        fill="#EAEAEA"
        stroke="#95958E"
      />
      <rect
        x="74.5"
        y="61.5"
        width="48"
        height="21"
        rx="10.5"
        fill="#EAEAEA"
        stroke="#95958E"
      />
      <rect
        x="74.5"
        y="35.5"
        width="48"
        height="21"
        rx="10.5"
        fill="#EAEAEA"
        stroke="#95958E"
      />
      <defs>
        <linearGradient
          id="kibo-credit-card-chip-gradient"
          x1="1"
          y1="46"
          x2="131"
          y2="91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F2F2F2" />
          <stop offset="1" stopColor="#BFBFBF" />
        </linearGradient>
      </defs>
    </svg>
    {withNfcIcon && <NfcIcon className="aspect-square h-auto w-[8%]" />}
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
  referenceHeight?: CardNetworkIconProps['referenceHeight'];
  type?: CardNetworkIconType;
};

const icons: Record<
  NonNullable<CreditCardServiceProviderProps['type']>,
  CardNetworkIcon
> = {
  visa: Visa,
  mastercard: Mastercard,
  amex: Amex,
  discover: Discover,
  diners: Diners,
  jcb: JCB,
  'union-pay': UnionPay,
};

export const CreditCardServiceProvider = ({
  className,
  children,
  type = 'visa',
  referenceHeight,
  ...props
}: CreditCardServiceProviderProps) => {
  const Icon = icons[type];

  if (children) {
    return children;
  }
  return (
    <Icon
      className={cn('absolute right-0 bottom-0 max-h-[25%]', className)}
      referenceHeight={referenceHeight}
      {...props}
    />
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
