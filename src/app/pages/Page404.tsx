import React, { useEffect } from "react";

interface Page404props {}

export const Page404: React.FC<Page404props> = () => {
    useEffect(() => {
        document.title = "Page not found";
    }, []);

    return (
        <>
            <h1
                style={{
                    height: "calc(100vh - 100px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    color: '#fff"',
                }}>
				Page not found
            </h1>
        </>
    );
};
