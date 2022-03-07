import { createContext, useState } from 'react';

// creamos el context con la api de createContext
export const AppContext = createContext();

const Provider = ({ children }) => {
        // this state will be shared with all components 
    const [state, setState] = useState({  
      name: "",
      age: 27,
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export default Provider;