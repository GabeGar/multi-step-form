import MultiStepIndicator from './components/MultiStepIndicator/MultiStepIndicator';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import MultiStepFormActions from './components/MultiStepForm/MultiStepFormActions';
import { AnimatePresence } from 'framer-motion';

const App = () => {
    return (
        <AnimatePresence>
            <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 bg-primary-light-blue/40 bg-sideBarMobile bg-contain bg-no-repeat">
                <MultiStepIndicator />
                <MultiStepForm />
                <MultiStepFormActions />
            </div>
        </AnimatePresence>
    );
};

export default App;
