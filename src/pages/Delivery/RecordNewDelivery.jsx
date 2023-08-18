import React, { useState } from 'react';
import CustomInput, { AutoCompleteInput } from '../../components/CustomInput';
import CustomButton from '../../components/Buttons/CustomButton';
import * as yup from 'yup';
import CustomSelect from '../../components/CustomInput/Select';
import { FiPlus } from 'react-icons/fi';
import { PiCurrencyNgnLight } from 'react-icons/pi';
import PageHeader from '../../shared/PageHeader';
import AppLayoutNew from '../../layout/AppLayoutNew';
import { Form, Formik, useFormik } from 'formik';
import ValidationError from '../../components/Error/ValidationError';
import { useDispatch } from 'react-redux';
import { createDeliveryAction } from '../../store/slices/delivery/createDelivery';
import { CreateDeliveryService } from '../../Services/DeliveryServices';
import moment from 'moment';

const validationSchema = yup.object().shape({
  pickUpLocationLat: yup
    .string()
    // .matches(/^\d+\.\d{6}$/, 'Invalid format. Expected format - 1.234567')
    .required(),
  pickUpLocationLong: yup
    .string()
    // .matches(/^\d+\.\d{6}$/, 'Invalid format. Expected format - 1.234567')
    .required(),
  deliveryLocationLat: yup
    .string()
    // .matches(/^\d+\.\d{6}$/, 'Invalid format. Expected format - 1.234567')
    .required(),
  deliveryLocationLong: yup
    .string()
    // .matches(/^\d+\.\d{6}$/, 'Invalid format. Expected format - 1.234567')
    .required(),
  destinationAddress: yup.string().required('Please Select Your Delivery address'),
  pickUpAddress: yup.string().required('Please Select Your Pickup address'),
  description: yup.string().required('Description is Required'),
  recieverPhone: yup.string().required('Phone Number Required'),
  recieverName: yup.string().required('Recepient Name Required'),
  deliveryDate: yup.string(),
  tripType: yup.number().required('Select Your Trip Type'),
  weight: yup.number().required('Select Weight'),
  vehicleTypeId: yup.number(),
});

const initialValues = {
  pickUpLocationLat: '',
  pickUpLocationLong: '',
  deliveryLocationLat: '',
  deliveryLocationLong: '',
  pickUpAddress: '',
  destinationAddress: '',
  description: '',
  recieverPhone: '',
  recieverName: '',
  deliveryDate: '',
  tripType: 2,
  weight: '',
  vehicleTypeId: 1,
};

const NewDelivery = ({ closeHanlder }) => {
  // const dispatch = useDispatch()
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [confirmationData, setConfirmationData] = useState({});
  const [delivery, setDelivery] = useState(2);
  const [vehicleType, setVehicleType] = useState(1);
  const [weight, setWeight] = useState();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  // const address = [
  //   { label: 'Select One', value: '0' },
  //   { label: 'JEDO Estate, Abuja', value: '1' },
  //   { label: 'Victoria Island, Lagos', value: '2' },
  // ];

  const vehicle = [
    { label: 'Bike', value: 1 },
    { label: 'Car', value: 2 },
    { label: 'Truck', value: 3 },
  ];
  const deliveryType = [
    { label: 'Batched', value: 2 },
    { label: 'Instant', value: 1 },
    { label: 'Schedulled', value: 3 },
  ];

  const weights = [
    { label: '< 0.5kg', value: 0.1 },
    // { label: '0.5kg', value: 0.5 },
    // { label: '50kg', value: 0.6 },
    // { label: '100kg', value: 0.8 },
    // { label: '500kg', value: 0.9 },
    { label: '< 1kg', value: 1 },
    { label: '< 2kg', value: 2 },
  ];

  const formik = useFormik({
    initialValues: {
      ...initialValues,
    },
    validationSchema: validationSchema,
    onSubmit(values) {
      console.log({
        ...values,
        deliveryDate: delivery === 3 ? moment(values.deliveryDate).toISOString() : moment().toISOString(),
      });
      // setLoading(true);
      return CreateDeliveryService({
        ...values,
        deliveryDate: delivery === 3 ? moment(values.deliveryDate).toISOString() : moment().toISOString(),
      })
        .then((res) => {
          console.log(res);
          setConfirmationData(res);
          setOpenConfirmation(true);
          // setLoading(false)
          return;
        })
        .catch((err) => {
          console.log(err, '----error---');
          // setLoading(false)
          return;
        });
    },
  });

  const { handleSubmit, getFieldProps, errors, touched, setFieldValue, values, isSubmitting } = formik;

  return (
    <AppLayoutNew noHeader={true}>
      <div className="mx-4 lg:mx-7 my-10 min-w-[300px]">
        <PageHeader children={'Request Delivery'} />
        <div className="">
          <form onSubmit={handleSubmit} className="min-h-[300px] overflow-auto py-4">
            <div className="grid lg:grid-cols-[3.5fr,2fr] gap-8">
              <div className="bg-dimmed_white p-5 rounded">
                <div className="mt-6">
                  <p className="text-sm mb-1">Select Delivery Type</p>
                  <div className="grid grid-cols-3 gap-5 justify-between items-center">
                    {deliveryType.map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setDelivery(item.value);
                          setFieldValue('tripType', item.value);
                        }}
                        className={`flex gap-3 items-center border py-2.5 px-3 rounded ${
                          delivery === item.value && 'border-primary'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border  ${delivery === item.value && 'bg-primary'}`}
                        ></div>
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid gap-5 mt-7">
                  <div>
                    <AutoCompleteInput
                      className={'!bg-bg !py-3 '}
                      label={'Pickup Address'}
                      id={'pickup'}
                      onChange={(v) => {
                        setFieldValue('pickUpLocationLat', v?.lat);
                        setFieldValue('pickUpLocationLong', v?.long);
                        setFieldValue('pickUpAddress', v?.label);
                      }}
                    />
                    {touched.pickUpAddress && touched.pickUpAddress && <ValidationError msg={errors.pickUpAddress} />}
                  </div>
                  <div>
                    <AutoCompleteInput
                      className={'!bg-bg !py-3 '}
                      label={'Delivery Address'}
                      id={'pickup'}
                      onChange={(v) => {
                        setFieldValue('deliveryLocationLat', v?.lat);
                        setFieldValue('deliveryLocationLong', v?.long);
                        setFieldValue('destinationAddress', v?.label);
                      }}
                    />
                    {touched.destinationAddress && touched.destinationAddress && (
                      <ValidationError msg={errors.destinationAddress} />
                    )}
                  </div>
                </div>
                <div className="mt-5">
                  <CustomInput
                    value={values.recieverName}
                    className={'!bg-bg !py-3 '}
                    label={'Recipient Name'}
                    id={'name'}
                    {...getFieldProps('recieverName')}
                  />
                  {touched.recieverName && touched.recieverName && <ValidationError msg={errors.recieverName} />}
                </div>
                {delivery === 3 && (
                  <>
                    <div className="mt-7">
                      <CustomInput
                        // value={values.deliveryDate}
                        className={'!bg-bg !py-3 '}
                        label={'Preferred Pickup Date'}
                        id={'time'}
                        type="date"
                        {...getFieldProps('deliveryDate')}
                      />
                    </div>
                    {touched.deliveryDate && touched.deliveryDate && <ValidationError msg={errors.deliveryDate} />}
                  </>
                )}

                <div className="mt-5">
                  {/* <CustomInput
                          className={'!bg-bg !py-3 '}
                          label={'Recipient Email'}
                          id={'email'}
                          type="email"
                          {...getFieldProps('recieverName')}
                        /> */}
                  <CustomInput
                    className={'!bg-bg !py-3 '}
                    label={'Phone Number'}
                    id={'phone'}
                    // value={values.recieverPhone}
                    {...getFieldProps('recieverPhone')}
                  />
                  {touched.recieverPhone && touched.recieverPhone && <ValidationError msg={errors.recieverPhone} />}
                </div>
                <div className="mt-6">
                  <p className="text-sm mb-1">Select Vehicle Type</p>
                  <div className="grid grid-cols-3 gap-5 justify-between items-center">
                    {vehicle.map((item, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setVehicleType(item.value);
                          setFieldValue('vehicleTypeId', parseInt(item.value));
                        }}
                        className={`flex gap-3 items-center border py-2.5 px-3 rounded ${
                          vehicleType === item.value && 'border-primary'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-full border  ${vehicleType === item.value && 'bg-primary'}`}
                        ></div>
                        {item.label}
                      </button>
                    ))}

                    {/* {touched.vehicleTypeId && touched.vehicleTypeId && (
                            <ValidationError msg={errors.vehicleTypeId} />
                          )} */}
                  </div>
                </div>

                {vehicleType === 1 ? (
                  <div className="mt-5">
                    <label htmlFor="" className="text-sm">
                      Weight
                    </label>
                    <div className="mt-2 sm:mt-0 flex items-center justify-center sm:justify-between gap-2 flex-wrap ">
                      {weights.map((w, idx) => (
                        <button
                          type="button"
                          className={`flex gap-3 items-center border py-2.5 px-6 rounded ${
                            weight === w.value && 'border-primary'
                          }`}
                          key={idx}
                          onClick={() => {
                            setWeight(w.value);
                            setFieldValue('weight', w.value);
                          }}
                        >
                          <div className={`w-5 h-5 rounded-full border  ${weight === w.value && 'bg-primary'}`}></div>
                          {w.label}
                        </button>
                      ))}
                    </div>
                    <span className="text-sm italic text-red-500">
                      Kindly Note Your Package Will Be Measured on Arrival
                    </span>
                    <br />
                    {touched.weight && touched.weight && <ValidationError msg={errors.weight} />}
                  </div>
                ) : (
                  <div className="mt-2">
                    <ValidationError msg={'Vehicle Type Coming soon!!!'} />
                  </div>
                )}
                <div className="col-span-2 mt-4">
                  <label htmlFor="" className="text-sm">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe the delivery item"
                    rows={5}
                    // value={values.description}
                    className="w-full border rounded  text-sm placeholder:text-sm p-2 outline-none resize-none !bg-bg"
                    {...getFieldProps('description')}
                  />
                  {touched.description && touched.description && <ValidationError msg={errors.description} />}
                </div>

                {/* <div className="grid grid-cols-3 gap-5 mt-7 ">
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
                      </div> */}
                {/* <div className="mt-6">
                        <CustomInput
                          className={'!bg-bg !py-3 '}
                          label={'Preferred Pickup Time'}
                          id={'time'}
                          type="time"
                        />{' '}
                      </div> */}
                <div className="mt-10">
                  {/* <CustomButton
                    clickHandler={() => setStep(1)}
                    type={'button'}
                    className={
                      'w-full !bg-white !border border-primary  !text-primary !px-7 font-semibold  !py-3 rounded-md'
                    }
                  >
                    Go Back
                  </CustomButton> */}
                  {/* <CustomButton
                    clickHandler={() => setOpenConfirmation(true)}
                    // type={'submit'}
                    // loading={isSubmitting}
                    // disabled={isSubmitting}
                    className={'w-full  border !px-7  font-semibold !py-3 rounded-md'}
                  >
                    Request Now
                  </CustomButton> */}
                  <CustomButton
                    // clickHandler={() => null}
                    type={'submit'}
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className={'w-full  border !px-7  font-semibold !py-3 rounded-md'}
                  >
                    Request Now
                  </CustomButton>
                </div>
              </div>

              <div className="hidden lg:block w-full ">
                <p className="font-medium opacity-75">
                  You may also import your inventory in bulk by uploading a .xlxs file in a specific format
                </p>
                <p className="text-sm opacity-70 mt-6">
                  Streamline data integration by effortlessly importing your CSV file and unlocking a world of
                  possibilities for seamless content management and organization. You may click on the button below to
                  download a sample csv file on how to prepare your own .csv file for your inventory for upload.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <CustomButton
                    className={
                      ' !bg-[rgba(0,158,170,0.3)] !px-3 font-semibold !text-[rgba(0,158,170,1)] border !border-[rgba(0,158,170,1)]  !py-2.5 rounded-lg'
                    }
                  >
                    Import Inventory
                  </CustomButton>
                  <CustomButton
                    className={
                      '!bg-transparent border !px-3 !border-[rgba(0,158,170,.4)] !text-[rgba(0,158,170,1)] font-semibold  !py-2.5 rounded-lg'
                    }
                  >
                    Download Sample
                  </CustomButton>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {openConfirmation && (
        <DeliveryConfirmationModal closeHanlder={() => setOpenConfirmation(false)} data={confirmationData} />
      )}
    </AppLayoutNew>
  );
};

export default NewDelivery;

const DeliveryConfirmationModal = ({ closeHanlder, data }) => {
  function payWithMonnify() {
    MonnifySDK.initialize({
      amount: data?.amount.toFixed(2),
      currency: 'NGN',
      reference: new String(new Date().getTime()),
      customerFullName: 'Damilare Ogunnaike',
      customerEmail: 'ogunnaike.damilare@gmail.com',
      apiKey: 'MK_TEST_AFDD667FKD',
      contractCode: '9146461192',
      paymentDescription: 'Lahray World',
      metadata: {
        'name': 'Damilare Ogunnaike',
        'distance': data?.distance.toFixed(3),
      },
      // incomeSplitConfig: [
      //   {
      //     'subAccountCode': 'MFY_SUB_342113621921',
      //     'feePercentage': 50,
      //     'splitAmount': 1900,
      //     'feeBearer': true,
      //   },
      //   {
      //     'subAccountCode': 'MFY_SUB_342113621922',
      //     'feePercentage': 50,
      //     'splitAmount': 2100,
      //     'feeBearer': true,
      //   },
      // ],
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
      <div className="min-h-[300px] overflow-auto bg-white max-h-[98vh] rounded-xl w-full sm:w-[500px] p-7 px-8">
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-primary capitalize ">Delivery Details</p>
          <button onClick={closeHanlder}>
            <FiPlus className="rotate-45" size={22} />
          </button>
        </div>

        <div className="my-3">
          <label htmlFor="" className="text-xs">
            Pick Up Location
          </label>
          <p className=" font-medium wrap">{data?.pickUpAddress ? data?.pickUpAddress : '...'}</p>
        </div>
        <div className="">
          <label htmlFor="" className="text-xs">
            Delivery Location
          </label>
          <p className="font-medium wrap">{data?.destinationAddress ? data?.destinationAddress : '...'}</p>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-7 ">
          <div className="">
            <label htmlFor="" className="text-sm">
              Price
            </label>
            <p className="text-md font-semibold flex items-center gap-1">
              <PiCurrencyNgnLight />
              {data?.amount ? data?.amount.toFixed(2) : '...'}
            </p>
          </div>
          <div className="">
            <label htmlFor="" className="text-sm">
              Distance
            </label>
            <p className="text-md font-semibold flex items-center gap-1">
              {data?.distance ? data?.distance.toFixed(3) : '..'}km
            </p>
          </div>
          <div className="">
            <label htmlFor="" className="text-sm">
              Type
            </label>
            <p className="text-md font-semibold flex items-center gap-1">
              {data.tripType
                ? data?.tripType === 1
                  ? 'Instant'
                  : data?.tripType === 2
                  ? 'Batched'
                  : data?.tripType === 3 && 'Schedulled'
                : '...'}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10">
          <CustomButton
            clickHandler={() => closeHanlder()}
            type={'button'}
            className={'w-full !bg-white !border border-primary  !text-primary !px-7 font-semibold  !py-3 rounded-md'}
          >
            Close
          </CustomButton>
          <CustomButton
            clickHandler={() => payWithMonnify()}
            type={'button'}
            className={'w-full  border !px-7  font-semibold !py-3 rounded-md'}
          >
            Proceed to Pay
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="fixed inset-0 bg-black/60 overflow-hidden grid place-content-center z-[10001]">
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
</div> */
}
