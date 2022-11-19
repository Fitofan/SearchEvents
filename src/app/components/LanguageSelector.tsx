import React from "react";
import { useTranslation } from "react-i18next";
import { wsCallback } from "./../../createSocket";
import { API } from "../API";

export const updateProfileLanguage = (language: string) => {
	try {
		wsCallback(
			{
				op: API.USER.updateLanguage,
				d: {
					lng: language,
				},
			},
			(fd: any) => {
				if (fd?.error) {
					return false;
				}
				if (fd?.success) {
				}
			}
		);
	} catch (err) {}
};

interface LanguageSelectorProps {}

export const LanguageSelector: React.FC<LanguageSelectorProps> = () => {
	const options = [
		{ value: "en", label: "English" },
		{ value: "uk", label: "Українська" },
		{ value: "ru", label: "Русский" },
	];
	const { i18n } = useTranslation();
	const l = i18n.language.substring(0, 2);

	const onChangeLng = (e: any) => {
		i18n.changeLanguage(e.target.value);
		updateProfileLanguage(e.target.value);
	};
	return (
		<>
			<select className="expanded-input" value={l} onChange={onChangeLng}>
				{options.map((o) => (
					<option key={o.value} value={o.value}>
						{o.label}
					</option>
				))}
			</select>
		</>
	);
};
