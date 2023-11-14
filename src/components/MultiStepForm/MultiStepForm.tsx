import { SubmitHandler, useForm } from 'react-hook-form';

import { useMultiStep } from '../../context/MultiStepContext';
import { useMQuery } from '../../context/MediaQueryContext';
import { STEPS } from '../../shared/constants';
import { Inputs, Plans } from '../../shared/types';
import Form from './Form';
import StepOneRow from './StepOne/StepOneRow';
import FormSection from './FormSection';
import FormSectionHeader from './FormSectionHeader';
import StepTwoRow from './StepTwo/StepTwoRow';
import ToggleSwitch from './StepTwo/ToggleSwitch';
import StepThreeRow from './StepThree/StepThreeRow';
import AddOnsPara from './StepThree/AddOnsPara';
import Summary from './StepFour/Summary';
import Confirmation from '../ui/Confirmation';
import MultiStepFormActions from '../MultiStepFormActions/MultiStepFormActions';

const stepOneBaseInputStyles =
    'rounded-[.25rem] border border-neutral-light-gray px-4 py-3 font-bold focus:outline focus:outline-primary-purplish-blue md:rounded-lg';

const stepOneInputErrorOutlineStyle =
    'focus:outline-primary-strawberry-red border-primary-strawberry-red';

const stepTwoBaseInputStyles =
    'absolute left-0 top-0 h-full w-full opacity-0 hover:cursor-pointer';

const stepThreeBaseInputStyles =
    'form-checkbox self-center text-primary-purplish-blue focus:ring-0 h-5 w-5 rounded-md';

type ChangeEventInputElement = React.ChangeEvent<HTMLInputElement>;

const MultiStepForm = () => {
    const { isDesktop } = useMQuery();
    const { step, increaseStep, complete, onComplete } = useMultiStep();

    const { register, formState, handleSubmit, setValue, watch } =
        useForm<Inputs>();

    const {
        email: emailError,
        phone: phoneError,
        name: nameError,
    } = formState.errors;

    const selectedPlan = watch('plan') as keyof Plans;
    const isToggledYearly = watch('yearly', false);
    const wantsOnlineService = watch('onlineService', false);
    const wantsLargeStorage = watch('largeStorage', false);
    const wantsCustomizableProfile = watch('customizableProfile', false);

    const onChangePlan = (e: ChangeEventInputElement) => {
        setValue('plan', e.target.value);
    };

    const onToggleYearly = () => {
        setValue('yearly', !isToggledYearly);
    };

    const onChangeAddons = (
        e: ChangeEventInputElement,
        checkBoxName: keyof Inputs,
    ) => {
        setValue(checkBoxName, e.target.checked);
    };

    const onSubmit: SubmitHandler<Inputs> = () => {
        if (step === 3) {
            onComplete();
            return;
        }

        increaseStep();
    };

    return (
        <Form onSubmit={(e) => void handleSubmit(onSubmit)(e)} id="multiStep">
            {!complete ? (
                <>
                    <FormSection
                        key={STEPS.ONE}
                        classes="space-y-4"
                        formStep={STEPS.ONE}
                    >
                        <FormSectionHeader
                            title="Personal info"
                            description="Please provide your name, email address, and phone
                        number."
                        />
                        <StepOneRow
                            label="Name *"
                            htmlFor="name"
                            error={nameError ? nameError.message : ''}
                        >
                            <input
                                {...register('name', {
                                    required: 'This field is required',
                                })}
                                className={`${stepOneBaseInputStyles} ${
                                    nameError
                                        ? stepOneInputErrorOutlineStyle
                                        : ''
                                }`}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="e.g. Stephen King"
                                autoComplete="name"
                            />
                        </StepOneRow>
                        <StepOneRow
                            label="Email Address *"
                            htmlFor="email"
                            error={emailError ? emailError.message : ''}
                        >
                            <input
                                {...register('email', {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message:
                                            'Please provide a valid email address',
                                    },
                                })}
                                className={`${stepOneBaseInputStyles} ${
                                    emailError
                                        ? stepOneInputErrorOutlineStyle
                                        : ''
                                } `}
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder="e.g. stephenking@lorem.com"
                            />
                        </StepOneRow>
                        <StepOneRow
                            label="Phone Number *"
                            htmlFor="phone"
                            error={phoneError ? phoneError.message : ''}
                        >
                            <input
                                {...register('phone', {
                                    required: 'This field is required',
                                    pattern: {
                                        // https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
                                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message:
                                            'Please provide a valid phone number',
                                    },
                                })}
                                className={`${stepOneBaseInputStyles} ${
                                    phoneError
                                        ? stepOneInputErrorOutlineStyle
                                        : ''
                                }`}
                                type="text"
                                name="phone"
                                id="phone"
                                autoComplete="phone"
                                placeholder="e.g. +1 234 567 890"
                            />
                        </StepOneRow>
                    </FormSection>

                    <FormSection
                        key={STEPS.TWO}
                        classes="space-y-3 md:space-y-5"
                        formStep={STEPS.TWO}
                    >
                        <FormSectionHeader
                            title="Select your plan"
                            description="You have the option of monthly or yearly billing."
                        />
                        <div className="space-y-3 md:grid md:grid-cols-3 md:gap-3 md:space-y-0">
                            <StepTwoRow
                                isToggledYearly={isToggledYearly}
                                selectedPlan={selectedPlan}
                                imageSrc="/icon-arcade.svg"
                                alt="Arcade plan icon"
                                id="arcade"
                            >
                                <input
                                    {...register('plan')}
                                    className={stepTwoBaseInputStyles}
                                    type="radio"
                                    name="plan"
                                    id="arcade"
                                    value="arcade"
                                    onChange={onChangePlan}
                                    defaultChecked={!selectedPlan}
                                />
                            </StepTwoRow>
                            <StepTwoRow
                                isToggledYearly={isToggledYearly}
                                selectedPlan={selectedPlan}
                                imageSrc="/icon-advanced.svg"
                                alt="Advanced plan icon"
                                id="advanced"
                            >
                                <input
                                    {...register('plan')}
                                    className={stepTwoBaseInputStyles}
                                    type="radio"
                                    name="plan"
                                    id="advanced"
                                    value="advanced"
                                    onChange={onChangePlan}
                                />
                            </StepTwoRow>
                            <StepTwoRow
                                isToggledYearly={isToggledYearly}
                                selectedPlan={selectedPlan}
                                imageSrc="/icon-pro.svg"
                                alt="Prop plan icon"
                                id="pro"
                            >
                                <input
                                    {...register('plan')}
                                    className={stepTwoBaseInputStyles}
                                    type="radio"
                                    name="plan"
                                    id="pro"
                                    value="pro"
                                    onChange={onChangePlan}
                                />
                            </StepTwoRow>
                        </div>
                        <ToggleSwitch isToggledYearly={isToggledYearly}>
                            <input
                                {...register('yearly')}
                                className="peer sr-only"
                                name="toggle"
                                type="checkbox"
                                onChange={onToggleYearly}
                            />
                        </ToggleSwitch>
                    </FormSection>

                    <FormSection
                        key={STEPS.THREE}
                        classes="space-y-3"
                        formStep={STEPS.THREE}
                    >
                        <FormSectionHeader
                            title="Pick add-ons"
                            description="Add-ons help enhance your gaming experience."
                        />
                        <StepThreeRow
                            isAddOnSelected={wantsOnlineService}
                            isToggledYearly={isToggledYearly}
                            htmlFor="Online service"
                            addOn="onlineService"
                            description="Access to multiplayer games"
                        >
                            <input
                                {...register('onlineService')}
                                className={stepThreeBaseInputStyles}
                                type="checkbox"
                                id="Online service"
                                name="onlineService"
                                onChange={(e) => {
                                    onChangeAddons(e, 'onlineService');
                                }}
                            />
                        </StepThreeRow>
                        <StepThreeRow
                            isToggledYearly={isToggledYearly}
                            htmlFor="Large storage"
                            addOn="largeStorage"
                            description="Extra 1TB of cloud save"
                            isAddOnSelected={wantsLargeStorage}
                        >
                            <input
                                {...register('largeStorage')}
                                className={stepThreeBaseInputStyles}
                                type="checkbox"
                                id="Large storage"
                                name="largeStorage"
                                onChange={(e) => {
                                    onChangeAddons(e, 'largeStorage');
                                }}
                            />
                        </StepThreeRow>
                        <StepThreeRow
                            isAddOnSelected={wantsCustomizableProfile}
                            isToggledYearly={isToggledYearly}
                            htmlFor="Customizable profile"
                            addOn="customizableProfile"
                            description="Custom theme on your profile"
                        >
                            <input
                                {...register('customizableProfile')}
                                className={stepThreeBaseInputStyles}
                                type="checkbox"
                                id="Customizable profile"
                                name="customizableProfile"
                                onChange={(e) => {
                                    onChangeAddons(e, 'customizableProfile');
                                }}
                            />
                        </StepThreeRow>
                    </FormSection>

                    <FormSection
                        key={STEPS.FOUR}
                        classes="space-y-3"
                        formStep={STEPS.FOUR}
                    >
                        <FormSectionHeader
                            title="Finishing up"
                            description="Double-check everything looks OK before confirming."
                        />
                        <Summary
                            onToggleYearly={onToggleYearly}
                            selectedPlan={selectedPlan}
                            isToggledYearly={isToggledYearly}
                            wantsOnlineService={wantsOnlineService}
                            wantsLargeStorage={wantsLargeStorage}
                            wantsCustomizableProfile={wantsCustomizableProfile}
                        />
                    </FormSection>
                    {isDesktop && <MultiStepFormActions />}
                </>
            ) : (
                <Confirmation />
            )}
        </Form>
    );
};

export default MultiStepForm;
