import React from "react";

export const FormatCurrencyPrice = (price: number, currency: string) => {
    const p = Number(price).toFixed(2);
    if (currency == "UAH") {
        return `${p}UAH`;
    }
    if (currency == "USD") {
        return `$${p}`;
    }
    if (currency == "CAD") {
        return `CA$${p}`;
    }
    return `${currency} ${p}`;
};

interface FormatPriceProps {
	price: number;
	currency: string;
}
export const FormatSubPrice: React.FC<FormatPriceProps> = (props) => {
    const { price, currency } = props;
    const p = Number(price);
    if (currency == "UAH") {
        return (
            <>
                <span>UAH</span>
                {p.toFixed(2)}
            </>
        );
    }
    if (currency == "USD") {
        return (
            <>
                <span>US$</span>
                {p.toFixed(2)}
            </>
        );
    }
    if (currency == "CAD") {
        return (
            <>
                <span>CA$</span>
                {p.toFixed(2)}
            </>
        );
    }
    return (
        <div>
            <>${currency}</> {price.toFixed(2)}
        </div>
    );
};
