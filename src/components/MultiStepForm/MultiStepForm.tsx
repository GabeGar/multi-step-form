import { SubmitHandler, useForm } from 'react-hook-form';

import { useMultiStep } from '../../context/MultiStepContext';
import { STEPS } from '../../shared/constants';
import Form from './Form';
import StepOneRow from './StepOne/StepOneRow';
import FormSection from './FormSection';
import FormSectionHeader from './FormSectionHeader';
import StepTwoRow from './StepTwo/StepTwoRow';
import ToggleSwitch from './StepTwo/ToggleSwitch';
import PriceTierPara from './StepTwo/PriceTierPara';

const stepOneBaseInputStyles =
    'rounded-[.25rem] border border-l-neutral-light-gray px-4 py-3 font-bold focus:outline focus:outline-primary-purplish-blue';

const stepOneInputErrorOutlineStyle = 'focus:outline-primary-strawberry-red';

interface Inputs {
    name: string;
    email: string;
    phone: string;
    plan: string;
    yearly: boolean;
}

const MultiStepForm = () => {
    const { step, increaseStep } = useMultiStep();

    const {
        register,
        formState,
        getValues,
        handleSubmit,
        reset,
        setValue,
        watch,
    } = useForm<Inputs>();

    const {
        email: emailError,
        phone: phoneError,
        name: nameError,
    } = formState.errors;

    const selectedPlan = watch('plan');
    const isToggledYearly = watch('yearly', false);

    const onChangePlan = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('plan', e.target.value, { shouldDirty: true });
    };

    const onToggleYearly = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('yearly', e.target.checked, { shouldDirty: true });
    };

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log('Form submitted');

        console.log(data);
        // if (step === 3) {
        //     console.log('Successfully completed the form');
        //     return;
        // }

        increaseStep();
    };

    return (
        <Form onSubmit={(e) => void handleSubmit(onSubmit)(e)} id="multiStep">
            <FormSection
                key={STEPS.ONE}
                classes="space-y-4"
                formStep={STEPS.ONE}
            >
                <FormSectionHeader>
                    <h2 className="text-2xl font-bold text-primary-marine-blue">
                        Personal info
                    </h2>
                    <p className="text-neutral-cool-gray">
                        Please provide your name, email address, and phone
                        number.
                    </p>
                </FormSectionHeader>

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
                            nameError ? stepOneInputErrorOutlineStyle : ''
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
                                message: 'Please provide a valid email address',
                            },
                        })}
                        className={`${stepOneBaseInputStyles} ${
                            emailError ? stepOneInputErrorOutlineStyle : ''
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
                                message: 'Please provide a valid phone number',
                            },
                        })}
                        className={`${stepOneBaseInputStyles} ${
                            phoneError ? stepOneInputErrorOutlineStyle : ''
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
                classes="space-y-3"
                formStep={STEPS.TWO}
            >
                <FormSectionHeader>
                    <h2 className="text-2xl font-bold text-primary-marine-blue">
                        Select your plan
                    </h2>
                    <p className="text-neutral-cool-gray">
                        You have the option of monthly or yearly billing.
                    </p>
                </FormSectionHeader>

                <StepTwoRow
                    selectedPlan={selectedPlan}
                    imageSrc="/icon-arcade.svg"
                    alt="Arcade plan icon"
                    id="arcade"
                >
                    <label
                        htmlFor="arcade"
                        className="font-bold text-primary-marine-blue"
                    >
                        Arcade
                    </label>
                    <PriceTierPara
                        isToggledYearly={isToggledYearly}
                        priceMonthly="9"
                    />
                    <input
                        {...register('plan')}
                        className=" absolute left-0 top-0 h-full w-full opacity-0 "
                        type="radio"
                        name="plan"
                        id="arcade"
                        value="arcade"
                        onChange={onChangePlan}
                        defaultChecked={!selectedPlan}
                    />
                </StepTwoRow>
                <StepTwoRow
                    selectedPlan={selectedPlan}
                    imageSrc="/icon-advanced.svg"
                    alt="Advanced plan icon"
                    id="advanced"
                >
                    <label
                        htmlFor="advanced"
                        className="font-bold text-primary-marine-blue"
                    >
                        Advanced
                    </label>
                    <PriceTierPara
                        isToggledYearly={isToggledYearly}
                        priceMonthly="12"
                    />
                    <input
                        {...register('plan')}
                        className="absolute left-0 top-0 h-full w-full opacity-0 "
                        type="radio"
                        name="plan"
                        id="advanced"
                        value="advanced"
                        onChange={onChangePlan}
                    />
                </StepTwoRow>
                <StepTwoRow
                    selectedPlan={selectedPlan}
                    imageSrc="/icon-pro.svg"
                    alt="Prop plan icon"
                    id="pro"
                >
                    <label
                        htmlFor="pro"
                        className="font-bold text-primary-marine-blue"
                    >
                        Pro
                    </label>
                    <PriceTierPara
                        isToggledYearly={isToggledYearly}
                        priceMonthly="15"
                    />
                    <input
                        {...register('plan')}
                        className="absolute left-0 top-0 h-full w-full opacity-0 "
                        type="radio"
                        name="plan"
                        id="pro"
                        value="pro"
                        onChange={onChangePlan}
                    />
                </StepTwoRow>
                <ToggleSwitch>
                    {/* https://flowbite.com/docs/forms/toggle/ */}
                    <span
                        className={`${
                            !isToggledYearly
                                ? 'text-primary-marine-blue'
                                : 'text-neutral-cool-gray'
                        } font-bold`}
                    >
                        Monthly
                    </span>
                    <label className="relative cursor-pointer self-center">
                        <input
                            {...register('yearly')}
                            className="peer sr-only"
                            name="toggle"
                            type="checkbox"
                            onChange={onToggleYearly}
                        />
                        <div className="peer h-6 w-11 rounded-full bg-primary-marine-blue after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border  after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-marine-blue peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full"></div>
                    </label>
                    <span
                        className={`${
                            isToggledYearly
                                ? 'text-primary-marine-blue'
                                : 'text-neutral-cool-gray'
                        } font-bold`}
                    >
                        Yearly
                    </span>
                </ToggleSwitch>
            </FormSection>
        </Form>
    );
};

export default MultiStepForm;
