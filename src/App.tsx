import { AnimatePresence } from 'framer-motion';
import MultiStepIndicator from './components/MultiStepIndicator/MultiStepIndicator';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import MultiStepFormActions from './components/MultiStepFormActions/MultiStepFormActions';
import MultiStepContextProvider from './context/MultiStepContext';

const App = () => {
    return (
        <MultiStepContextProvider>
            <AnimatePresence>
                <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 bg-primary-light-blue/40 bg-sideBarMobile bg-contain bg-no-repeat">
                    <MultiStepIndicator />
                    <MultiStepForm />
                    <MultiStepFormActions />
                </div>
            </AnimatePresence>
        </MultiStepContextProvider>
    );
};

export default App;
