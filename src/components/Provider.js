import { createContext, useState } from 'react';

// creamos nuestro context con la api de createContext
export const AppContext = createContext();

const Provider = ({ children }) => {
    // Éste es el state que se compartirá con todos los componentes
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