import { useState, useCallback } from 'react';
import { EncryptStorage } from 'encrypt-storage';
import { setAuthToken } from '../Requests';

export const encryptStorage = EncryptStorage('5h33p-2o2i');

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setValue] = useState(() => {
        try {
            const item = encryptStorage.getItem(key); // encryptStorage === localStorage

            // if (key === 'session' && item?.token) {
            //     setAuthToken(item.token);
            // }

            return item !== null ? item : initialValue;
        } catch (e) {
            return initialValue;
        }
    });

    const setLocalStorage = useCallback(
        (value) => {
            try {
                setValue(value);
                if (value) {
                    encryptStorage.setItem(key, value);
                    // if (key === 'session' && value?.token) {
                    //     setAuthToken(value.token);
                    // }
                } else {
                    encryptStorage.removeItem(key);
                }
            } catch (e) {
                console.error(e);
            }
        },
        [key]
    );

    return [storedValue, setLocalStorage];
};
