import * as React from "react";
import { useConfirmModalStore } from "./../../stores/useConfirmModalStore";
import Button from "@mui/material/Button";
import { useTypeSafeTranslation } from "../utils/useTypeSafeTranslation";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

export const ModalContent = styled(DialogContent)`
	padding: 24px;
	@media (max-width: 663px) {
		padding: 16px;
	}
`;

export const TransparentModalTitle = styled.div`
	display: flex;
	align-items: flex-start;
	/* align-items: center; */
	justify-content: space-between;
	padding: 0;
	font-size: 18px;
	color: #fff;
	padding: 20px 6px 0px 24px;
	@media (max-width: 999px) {
		padding: 12px 6px 0px 16px;
	}
	& .MuiIconButton-root {
		margin-top: -4px;
		padding: 6px;
		.MuiSvgIcon-root {
			font-size: 30px;
			width: 30px;
			height: 30px;
		}
	}

	@media (max-width: 768px) {
		font-size: 14px;
		& .MuiIconButton-root {
			.MuiSvgIcon-root {
				font-size: 20px;
				width: 20px;
				height: 20px;
			}
		}
	}
`;
export const CloseModalIcon = (props: any) => {
	return (
		<IconButton edge="start" color="inherit" aria-label="close" {...props}>
			<CloseIcon />
		</IconButton>
	);
};

interface Props {}

const ConfirmModal: React.FC<Props> = () => {
	const { onConfirm, type, message, close } = useConfirmModalStore();
	const { t } = useTypeSafeTranslation();
	return (
		<Dialog
			open={!!onConfirm}
			onClose={() => close()}
			fullWidth={true}
			maxWidth="xs">
			<TransparentModalTitle>
				<div>{message}</div>
				<CloseModalIcon
					onClick={() => {
						close();
					}}
				/>
			</TransparentModalTitle>
			<ModalContent>
				<div
					style={{
						marginTop: 16,
						display: "flex",
						justifyContent: "flex-start",
					}}>
					<Button
						color="primary"
						variant="contained"
						size="medium"
						sx={{ minWidth: 100 }}
						onClick={() => {
							close();
						}}
						type="submit"
						className={`mr-15`}>
						{t("cancel")}
					</Button>
					{type === "delete" ? (
						<Button
							color="error"
							variant="contained"
							size="medium"
							sx={{ minWidth: 100 }}
							className={`ml-1.5`}
							onClick={() => {
								close();
								onConfirm?.();
							}}>
							{t("delete")}
						</Button>
					) : type == "leave" ? (
						<Button
							color="error"
							variant="contained"
							size="medium"
							sx={{ minWidth: 100 }}
							className={`ml-1.5`}
							onClick={() => {
								close();
								onConfirm?.();
							}}>
							{t("leave")}
						</Button>
					) : (
						<Button
							color="success"
							variant="contained"
							size="medium"
							sx={{ minWidth: 100 }}
							className={`ml-1.5`}
							onClick={() => {
								close();
								onConfirm?.();
							}}>
							{t("confirm")}
						</Button>
					)}
				</div>
			</ModalContent>
		</Dialog>
	);
};

export default ConfirmModal;
