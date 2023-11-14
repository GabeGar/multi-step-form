import { createContext, useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Props {
    children: React.ReactNode;
}

const MediaQueryContext = createContext<{
    isDesktop: boolean;
} | null>(null);

const MediaQueryContextProvider = ({ children }: Props) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <MediaQueryContext.Provider
            value={{
                isDesktop,
            }}
        >
            {children}
        </MediaQueryContext.Provider>
    );
};

const useMQuery = () => {
    const context = useContext(MediaQueryContext);
    if (context === null)
        throw new Error(
            'MediaQueryContext was used outside MediaQueryContextProvider',
        );
    return context;
};

export default MediaQueryContextProvider;
export { useMQuery };
