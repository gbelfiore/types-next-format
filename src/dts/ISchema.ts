import type { eStoreAnnouncementStatusType } from "./enum/eStoreAnnouncementStatus";
import { ObjectId } from "bson";
import { IPriceTagColors, ITiming, ITransformOrigin } from "./ICommonSchema";
import { ITplSchema } from "./ITplSchema";
import { ITplComponents, TTplComponents } from "./ITplComponents";

// import eFormatPrice from '@/types/eFormatPrice';
import { FormatPrice } from "@doveconviene/next-format-ui-lib/lib/types";

type TProductImage = string;
type TMedia = "image" | "externalImage" | "video" | "externalVideo" | "gif" | "externalGif";
// type TModifier = 'cell' | 'wide' | 'cell-reverse' | 'wide-reverse'
type TModifier = "cell" | "wide" | "cell-reverse";

interface IMediaCta {
	ctaUrl?: string;
	ctaIcon?: string;
	ctaIconWidth?: string;
	ctaIconHeight?: string;
	ctaIconTranslateX?: string;
	ctaIconTranslateY?: string;
	ctaIconTransformOrigin?: ITransformOrigin;
}

interface IMediaGeneralVideo {
	autoPlay?: boolean;
	controls?: boolean;
	muted?: boolean;
	loop?: boolean;
}
interface IMediaData {
	externalGif: IMediaCta & {
		url: string;
	};
	gif: IMediaCta & {
		src: string;
	};
	externalVideo: IMediaGeneralVideo &
		IMediaCta & {
			url: string;
		};
	video: IMediaGeneralVideo &
		IMediaCta & {
			src: string;
		};
	externalImage: IMediaCta & {
		url: string;
	};
	image: IMediaCta & {
		src: string;
	};
}

interface IMedia<T extends keyof IMediaData> {
	type: T;
	props: IMediaData[T];
}

interface IMediaProduct<T extends keyof IMediaData> extends IMedia<T> {
	name: string;
	tracking: boolean;
	props: { modifier?: "wide" } & IMediaData[T];
	timing?: ITiming;
}

interface IStore {
	id?: number;
	address: string;
	isOpen?: boolean;
	hasArrow?: boolean;
	timing?: ITiming;
	lat: number;
	lon: number;
	openingHours: IOpeningHour[] | null;
	city: string;
	phone: string;
	distance: number;
}

interface IOpeningHour {
	id?: number;
	open: string;
	close: number;
	day: number;
}

interface IProductPrice extends IPriceTagColors {
	full?: string;
	discount?: string;
	discounted?: string;
	priceDecimalSeparator?: string;
	discountDecimalSeparator?: string;
	priceTagWidth?: number;
	priceTagHeight?: number;
	priceTagZoom?: number;
	priceTagZoomFlyout?: number;
	formatPrice?: FormatPrice;
	timing?: ITiming;
	textCustom1?: string;
	textCustom2?: string;
}

interface ICtaAction {
	type: "external" | "share" | "extend" | "shoppinglist";
	url?: string;
	text?: string;
	title?: string;
}

interface ICta {
	label: string;
	icon: string;
	color?: string;
	action?: ICtaAction;
	alternate?: boolean;
	validity?: {
		web: boolean;
		mobile: boolean;
	};
	timing?: ITiming;
}

interface IHighlight {
	text: string;
	isLabel?: boolean;
	timing?: ITiming;
}

interface IShopfullyProductDetail {
	key: string;
	value: string;
}

interface ICollapsibleSectionContentData {
	sfProduct: {
		data: {
			id: number;
			description: string;
		};
		key?: string;
	};
	sfProductDetails: {
		data: {
			product: {
				id: number;
			};
			details: IShopfullyProductDetail[];
		};
		key?: string;
	};
	html: {
		data: string;
		key?: string;
	};
	img: {
		data: {
			src: string;
			maxWidth: number;
			alt: string;
		};
		key?: string;
	};
	video: {
		data: {
			src: string;
		};
		key?: string;
	};
	buy: {
		key?: string;
	};
	location: {
		key?: string;
	};
	openings: {
		key?: string;
	};
	phone: {
		key?: string;
	};
}

interface ICollapsibleSectionContent<T extends keyof ICollapsibleSectionContentData> {
	type: keyof ICollapsibleSectionContentData;
	props: Record<string, any> & ICollapsibleSectionContentData[T];
}

interface ICollapsibleSection {
	title: string;
	contents: ICollapsibleSectionContent<"sfProduct" | "sfProductDetails" | "html" | "img" | "video" | "buy" | "location" | "openings" | "phone">[];
	isDefaultOpen?: boolean;
	timing?: ITiming;
}

interface IPairedProduct {
	id: string | number;
	heading: string;
	description: string;
	productImage: TProductImage;
	backgroundColor?: string;
	textColor?: string;
}

interface ISpec {
	src: string;
	size: "small" | "large";
	timing?: ITiming;
}

interface IProduct {
	id: string;
	subName: string;
	unitType: string;
	highlightedDiscount: boolean;
	brandText?: string;
	brandImage?: string;
	brandImageWidth?: string;
	brandImageHeight?: string;
	brandImageMargin?: string;
	description?: string;
	modifier: TModifier;
	name: string;
	price: IProductPrice;
	backgroundImage?: string;
	productImage: TProductImage;
	productMultiImages: Array<TProductImage>;
	specs?: ISpec[];
	available?: boolean;
	highlights?: IHighlight[][][];
	collapsibleSections?: ICollapsibleSection[];
	pairedProduct?: IPairedProduct;
	backgroundColor?: string;
	textColor?: string;
	subTextColor?: string;
	flyoutTextColor?: string;
	flyoutSubTextColor?: string;
	ctas?: ICta[];
	selectedBadge?: string;
	position?: number;
	timing?: ITiming;
	categoryId?: number;
	hideBottomLine?: boolean;
	templateComponents?: ITplComponents;
	childrens?: IProduct[];
}

interface ISection {
	id: string;
	name: string;
	headingBackgroundColor?: string;
	headingTextColor?: string;
	footer?: IMedia<TMedia>;
	header?: IMedia<TMedia>;
	backgroundPattern?: string;
	modifier?: "slider";
	products: (IProduct | IMediaProduct<TMedia>)[];
	template?: ITplSchema["_id"];
	templateComponents?: ITplComponents;
	timing?: ITiming;
}

interface IOpening {
	closed: boolean;
	schedules: {
		opening: string;
		closing: string;
	};
	timing?: ITiming;
}

interface IRetailer {
	name: string;
	address: string;
	street: string;
	civic: string;
	postalCode: string;
	city: string;
	phoneNumber: string;
	openings: IOpening[];
	ctas?: ICta[];
	timing?: ITiming;
}

interface ISchema {
	_id?: ObjectId;
	id: number;
	template: ITplSchema["_id"];
	templates: ITplSchema[];
	templatesComponents: TTplComponents[];
	retailerId: number;
	flyerId: number;
	name?: string;
	dateFrom?: string;
	dateTo?: string;
	backcoverImage: string;
	colophon: string;
	coverImage: string;
	sections: ISection[];
	retailer: IRetailer;
	frequentSearches: string[];
	stores?: IStore[];
	nearestStore?: IStore;
	redirectUrl?: string;
	basePath: string;
	active: boolean;
	jobExecution: Partial<{ autoTagged: boolean }>;
	status?: eStoreAnnouncementStatusType;
	saved: boolean;
	numRetrys?: number;
	timing?: ITiming;
	columnsCount: number;
	allowOrphanProducts: boolean;
}

interface ISchemaToSaveTemp {
	templates: ObjectId[];
	templatesComponents: ObjectId[] | string[];
}
type ISchemaToSave = ISchema & ISchemaToSaveTemp;

export {
	TModifier,
	TProductImage,
	IProductPrice,
	IProduct,
	ISection,
	ISchema,
	ISchemaToSave,
	IRetailer,
	IStore,
	IOpeningHour,
	ICollapsibleSection,
	ICollapsibleSectionContent,
	IOpening,
	IHighlight,
	ICta,
	IPairedProduct,
	ICtaAction,
	ICollapsibleSectionContentData,
	ISpec,
	ITiming,
	IMediaData,
	IMedia,
	IMediaProduct,
	TMedia,
};

export { IShopfullyProductDetail };
