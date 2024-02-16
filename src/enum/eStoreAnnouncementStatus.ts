export const eStoreAnnouncementStatus = {
	PENDING: "pending",
	PROCESSING: "processing",
	PROCESSED: "processed",
};

export type eStoreAnnouncementStatusType = (typeof eStoreAnnouncementStatus)[keyof typeof eStoreAnnouncementStatus];
