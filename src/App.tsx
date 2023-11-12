import MultiStepIndicator from './components/MultiStepIndicator';
import MultiStepForm from './components/MultiStepForm';

const App = () => {
    return (
        <div className="min-h-[100dvh] bg-[url('/bg-sidebar-mobile.svg')] bg-no-repeat flex flex-col items-center bg-primary-light-blue/40">
            <MultiStepIndicator />
            <MultiStepForm />
        </div>
    );
};

export default App;
