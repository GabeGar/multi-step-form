import { AnimatePresence } from 'framer-motion';
import { useMQuery } from './context/MediaQueryContext';
import MultiStepIndicator from './components/MultiStepIndicator/MultiStepIndicator';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import MultiStepFormActions from './components/MultiStepFormActions/MultiStepFormActions';

const App = () => {
    const { isDesktop } = useMQuery();

    return (
        <AnimatePresence>
            <div className="min-h-[100dvh] bg-primary-light-blue/40 md:grid md:items-center md:justify-center">
                <div className="flex min-h-[100dvh] flex-col items-center justify-center gap-6 bg-sideBarMobile bg-contain bg-no-repeat md:grid md:min-h-0  md:grid-cols-desktopGrid md:rounded-xl md:bg-white md:bg-none md:p-3">
                    <MultiStepIndicator />
                    <MultiStepForm />
                    {!isDesktop && <MultiStepFormActions />}
                </div>
            </div>
        </AnimatePresence>
    );
};

export default App;
