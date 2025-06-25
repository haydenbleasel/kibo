import {
  CreditCard,
  CreditCardBack,
  CreditCardCvv,
  CreditCardExpiry,
  CreditCardMagStripe,
  CreditCardName,
  CreditCardNumber,
} from '@repo/credit-card';

const Example = () => (
  <>
    <CreditCard>
      <CreditCardBack
        hideInformation={false}
        className="bg-[#9EE672] text-black"
      >
        <CreditCardMagStripe />
        <CreditCardNumber className="absolute bottom-0 left-0">
          0123 4567 8901 2345
        </CreditCardNumber>
        <div className="absolute @xs:bottom-12 bottom-8 flex w-full @xs:flex-row flex-col @xs:justify-between gap-4">
          <CreditCardName className="flex-1">John R. Doe</CreditCardName>
          <div className="flex flex-1 @xs:justify-between gap-4">
            <CreditCardExpiry>01/24</CreditCardExpiry>
            <CreditCardCvv>123</CreditCardCvv>
          </div>
        </div>
      </CreditCardBack>
    </CreditCard>
  </>
);

export default Example;
