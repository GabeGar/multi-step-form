import { SubmitHandler, useForm } from 'react-hook-form';

import { useMultiStep } from '../../context/MultiStepContext';
import Form from './Form';
import StepOneRow from './StepOne/StepOneRow';
import FormSection from './FormSection';
import FormSectionHeader from './FormSectionHeader';
import StepTwoRow from './StepTwo/StepTwoRow';

const stepOneBaseStyles =
    'rounded-[.25rem] border border-l-neutral-light-gray px-4 py-3 font-bold focus:outline focus:outline-primary-purplish-blue';

const stepOneErrorOutlineStyle = 'focus:outline-primary-strawberry-red';

interface Inputs {
    name: string;
    email: string;
    phone: string;
    plan: string;
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

    const onChangePlan = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue('plan', e.target.value, { shouldDirty: true });
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
            <FormSection classes="space-y-4" formStep={1}>
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
                        className={`${stepOneBaseStyles} ${
                            nameError ? stepOneErrorOutlineStyle : ''
                        }`}
                        type="text"
                        name="name"
                        id="name"
                        placeholder="e.g. Stephen King"
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
                        className={`${stepOneBaseStyles} ${
                            emailError ? stepOneErrorOutlineStyle : ''
                        } `}
                        type="email"
                        name="email"
                        id="email"
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
                        className={`${stepOneBaseStyles} ${
                            phoneError ? stepOneErrorOutlineStyle : ''
                        }`}
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                    />
                </StepOneRow>
            </FormSection>

            <FormSection classes="space-y-3" formStep={2}>
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
                    <p className="text-neutral-cool-gray">$9/mo</p>
                    <input
                        {...register('plan')}
                        className=" absolute left-0 top-0 h-full w-full opacity-0 "
                        type="radio"
                        name="plan"
                        id="arcade"
                        value="arcade"
                        onChange={(e) => {
                            onChangePlan(e);
                        }}
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
                    <p className="text-neutral-cool-gray">$12/mo</p>
                    <input
                        {...register('plan')}
                        className="absolute left-0 top-0 h-full w-full opacity-0 "
                        type="radio"
                        name="plan"
                        id="advanced"
                        value="advanced"
                        onChange={(e) => {
                            onChangePlan(e);
                        }}
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
                    <p className="text-neutral-cool-gray">$15/mo</p>
                    <input
                        {...register('plan')}
                        className="absolute left-0 top-0 h-full w-full opacity-0 "
                        type="radio"
                        name="plan"
                        id="pro"
                        value="pro"
                        onChange={(e) => {
                            onChangePlan(e);
                        }}
                    />
                </StepTwoRow>
            </FormSection>
        </Form>
    );
};

export default MultiStepForm;
