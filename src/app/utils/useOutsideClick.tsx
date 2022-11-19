import { useEffect } from "react";

export const useOutsideClick = (
    ref: any,
    callback: any,
    additional: any = undefined
) => {
    const handleClick = (e: any) => {
        if (    
            ref.current &&
			!ref.current.contains(e.target) &&
			(additional?.current ? !additional.current.contains(e.target) : true)
        ) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};
