import { SubmitHandler, useForm } from 'react-hook-form';

import { useMultiStep } from '../../context/MultiStepContext';
import Form from './Form';
import FormRow from './FormRow';
import FormSection from './FormSection';
import FormSectionHeader from './FormSectionHeader';

const stepOneBaseStyles =
    'rounded-[.25rem] border border-l-neutral-light-gray px-4 py-3 font-bold focus:outline focus:outline-primary-purplish-blue';

const stepOneErrorOutlineStyle = 'focus:outline-primary-strawberry-red';

interface Inputs {
    name: string;
    email: string;
    phone: string;
}

const MultiStepForm = () => {
    const { step, increaseStep } = useMultiStep();
    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit,
        reset,
    } = useForm<Inputs>();

    const { email: emailError, phone: phoneError, name: nameError } = errors;

    const onSubmit: SubmitHandler<Inputs> = () => {
        console.log('Form submitted');

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
                    <p>
                        Please provide your name, email address, and phone
                        number.
                    </p>
                </FormSectionHeader>

                <FormRow
                    label="Name *"
                    htmlFor="name"
                    error={errors.name ? errors.name.message : ''}
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
                </FormRow>
                <FormRow
                    label="Email Address *"
                    htmlFor="email"
                    error={errors.email ? errors.email.message : ''}
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
                </FormRow>
                <FormRow
                    label="Phone Number *"
                    htmlFor="phone"
                    error={errors.phone ? errors.phone.message : ''}
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
                </FormRow>
            </FormSection>
        </Form>
    );
};

export default MultiStepForm;
