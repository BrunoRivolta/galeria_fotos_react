import { createContext, useState } from "react";

export const AddPhotosContext = createContext();
AddPhotosContext.displayName = "AddPhotos";

export default function AddPhotosProvider({ children }) {
    const [photos, setphotos] = useState([]);
    return (
        <AddPhotosContext.Provider
            value={{ photos, setphotos }}>
            {children}
        </AddPhotosContext.Provider>
    )
}