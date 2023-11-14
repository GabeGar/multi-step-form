import { motion as m } from 'framer-motion';

const Confirmation = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: 'tween',
                duration: 0.2,
            }}
            className="flex flex-col items-center space-y-6 py-10 text-center"
        >
            <m.img
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'tween',
                    duration: 0.5,
                    delay: 0.2,
                }}
                src="/icon-thank-you.svg"
                alt="Checkmark icon"
                className="h-16 w-16"
            />
            <m.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: 'tween',
                    duration: 0.5,
                    delay: 0.7,
                }}
                className="space-y-3"
            >
                <h2 className="text-2xl font-bold text-primary-marine-blue">
                    Thank you!
                </h2>
                <p className="text-neutral-cool-gray">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </m.div>
        </m.div>
    );
};

export default Confirmation;
