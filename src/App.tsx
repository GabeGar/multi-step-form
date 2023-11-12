import MultiStepIndicator from './components/MultiStepIndicator/MultiStepIndicator';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import MultiStepFormActions from './components/MultiStepForm/MultiStepFormActions';

const App = () => {
    return (
        <div className="bg-sideBarMobile flex min-h-[100dvh] flex-col items-center gap-6 bg-primary-light-blue/40 bg-contain bg-no-repeat">
            <MultiStepIndicator />
            <MultiStepForm />
            <MultiStepFormActions />
        </div>
    );
};

export default App;
