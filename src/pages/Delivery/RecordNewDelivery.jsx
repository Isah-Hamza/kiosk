import React, { useState } from 'react';
import CustomInput, { AutoCompleteInput } from '../../components/CustomInput';
import CustomButton from '../../components/Buttons/CustomButton';
import CustomSelect from '../../components/CustomInput/Select';
import { FiPlus } from 'react-icons/fi';
import { PiCurrencyNgnLight } from 'react-icons/pi';
const NewDelivery = ({ closeHanlder }) => {
  const [step, setStep] = useState(1);
  const address = [
    { label: 'Select One', value: '0' },
    { label: 'JEDO Estate, Abuja', value: '1' },
    { label: 'Victoria Island, Lagos', value: '2' },
  ];

  const vehicle = [
    { label: 'Bike', value: '1' },
    { label: 'Car', value: '2' },
    { label: 'Truck', value: '3' },
  ];

  const category = [
    { label: 'Select One', value: '0' },
    { label: 'Services / Maintenance', value: '1' },
    { label: 'Salary', value: '2' },
    { label: 'Workmanship', value: '3' },
    { label: 'Food', value: '4' },
    { label: 'Transport', value: '5' },
    { label: 'Others', value: '6' },
  ];
  const weights = ['<5kg', '10kg', '50kg', '100kg', '500kg', '500kg>'];
  function payWithMonnify() {
    MonnifySDK.initialize({
      amount: 100,
      currency: 'NGN',
      reference: new String(new Date().getTime()),
      customerFullName: 'Damilare Ogunnaike',
      customerEmail: 'ogunnaike.damilare@gmail.com',
      apiKey: 'MK_PROD_FLX4P92EDF',
      contractCode: '626609763141',
      paymentDescription: 'Lahray World',
      metadata: {
        'name': 'Damilare',
        'age': 45,
      },
      incomeSplitConfig: [
        {
          'subAccountCode': 'MFY_SUB_342113621921',
          'feePercentage': 50,
          'splitAmount': 1900,
          'feeBearer': true,
        },
        {
          'subAccountCode': 'MFY_SUB_342113621922',
          'feePercentage': 50,
          'splitAmount': 2100,
          'feeBearer': true,
        },
      ],
      onLoadStart: () => {
        console.log('loading has started');
      },
      onLoadComplete: () => {
        console.log('SDK is UP');
      },
      onComplete: function (response) {
        //Implement what happens when the transaction is completed.
        console.log(response);
      },
      onClose: function (data) {
        //Implement what should happen when the modal is closed here
        console.log(data);
      },
    });
  }

  return (
    <div className="fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
      <form
        // onSubmit={handleSubmit}
        className="min-h-[300px] overflow-auto bg-white max-h-[98vh] rounded-xl w-full sm:w-[500px] p-7 px-8"
      >
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary capitalize ">Record New Order</p>
          <button onClick={closeHanlder}>
            <FiPlus className="rotate-45" size={22} />
          </button>
        </div>
        {step == 1 ? (
          <>
            <div className="grid gap-5 mt-7">
              <div>
                <AutoCompleteInput className={'!bg-bg !py-3 '} label={'Pickup Address'} id={'pickup'} />
              </div>
              <div>
                <AutoCompleteInput className={'!bg-bg !py-3 '} label={'Delivery Address'} id={'pickup'} />
              </div>
            </div>
            <div className="mt-5">
              <CustomInput className={'!bg-bg !py-3 '} label={'Recipient Name'} id={'name'} />{' '}
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mt-5">
              <CustomInput className={'!bg-bg !py-3 '} label={'Recipient Email'} id={'email'} type="email" />{' '}
              <CustomInput className={'!bg-bg !py-3 '} label={'Phone Number'} id={'phone'} />{' '}
            </div>
            <div className="mt-5">
              <label htmlFor="" className="text-sm">
                Weight
              </label>
              <div className="mt-2 sm:mt-0 flex items-center justify-center sm:justify-between gap-2 flex-wrap ">
                {weights.map((w, idx) => (
                  <button type="button" className="border rounded-lg p-2 px-3 text-sm" key={idx}>
                    {w}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-span-2 mt-4">
              <label htmlFor="" className="text-sm">
                Description
              </label>
              <textarea
                placeholder="Describe the delivery item"
                className="w-full border rounded h-20 text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
              ></textarea>
            </div>
            <CustomButton
              clickHandler={() => setStep(2)}
              type={'button'}
              className={'w-full mt-5 border !px-7font-semibold  !py-3 rounded-md'}
            >
              Proceed to Next
            </CustomButton>
          </>
        ) : (
          <>
            <div className="mt-6">
              <p className="text-sm mb-1">Select Vehicle Type</p>
              <div className="grid grid-cols-3 gap-5 justify-between items-center">
                {vehicle.map((item, idx) => (
                  <button
                    type="button"
                    key={idx}
                    className={`flex gap-3 items-center border py-2.5 px-3 rounded ${idx == 0 && 'border-primary'}`}
                  >
                    <div className={`w-5 h-5 rounded-full border  ${idx == 0 && 'bg-primary'}`}></div>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-5 mt-7 ">
              <div className="">
                <label htmlFor="" className="text-sm">
                  Price
                </label>
                <p className="txt-lg font-semibold flex items-center gap-1">
                  {' '}
                  <PiCurrencyNgnLight />
                  300.00
                </p>
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">
                  Speed
                </label>
                <p className="txt-lg font-semibold flex items-center gap-1"> 44km/hr</p>
              </div>
              <div className="">
                <label htmlFor="" className="text-sm">
                  Engine
                </label>
                <p className="txt-lg font-semibold flex items-center gap-1"> Super Fast</p>
              </div>
            </div>
            <div className="mt-7">
              <CustomInput className={'!bg-bg !py-3 '} label={'Preferred Pickup Date'} id={'time'} type="date" />{' '}
            </div>
            <div className="mt-6">
              <CustomInput className={'!bg-bg !py-3 '} label={'Preferred Pickup Time'} id={'time'} type="time" />{' '}
            </div>
            <div className="grid grid-cols-2 gap-5 mt-10">
              <CustomButton
                clickHandler={() => setStep(1)}
                type={'button'}
                className={
                  'w-full !bg-white !border border-primary  !text-primary !px-7 font-semibold  !py-3 rounded-md'
                }
              >
                Go Back
              </CustomButton>
              <CustomButton
                clickHandler={() => payWithMonnify()}
                type={'button'}
                className={'w-full  border !px-7  font-semibold !py-3 rounded-md'}
              >
                Proceed to Pay
              </CustomButton>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default NewDelivery;
