import { createContext, useState } from "react";

export const AddPhotosContext = createContext();
AddPhotosContext.displayName = "AddPhotos";

export default function AddPhotosProvider({ children }) {
    const [photos, setPhotos] = useState([]);
    return (
        <AddPhotosContext.Provider
            value={{ photos, setPhotos }}>
            {children}
        </AddPhotosContext.Provider>
    )
}