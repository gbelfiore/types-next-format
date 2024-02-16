import {
	IProductPrice,
	IProduct,
	ISection,
	ISchema,
	IRetailer,
	IStore,
	ICollapsibleSection,
	ICollapsibleSectionContent,
	IOpening,
	IHighlight,
	ICta,
	IPairedProduct,
	ICtaAction,
	ICollapsibleSectionContentData,
	ISpec,
	IMediaData,
	IShopfullyProductDetail,
	IMedia,
	TMedia,
	IOpeningHour,
} from "./ISchema";
import { IPriceTagColors } from "./ICommonSchema";

interface IMediaOpt<T extends keyof IMediaData> {
	name?: string;
	type?: IMedia<TMedia>["type"];
	props?: IMedia<TMedia>["props"];
}

interface IMediaProductOpt<T extends keyof IMediaData> extends IMediaOpt<T> {
	tracking: boolean;
	props?: { modifier?: "wide" } & IMediaData[T];
}

interface IOpeningHourOpt extends IOpeningHour {
	open?: IOpeningHour["open"];
	close?: IOpeningHour["close"];
	day?: IOpeningHour["day"];
}

interface IStoreOpt extends IStore {
	id?: IStore["id"];
	address?: IStore["address"];
	lat?: IStore["lat"];
	lon?: IStore["lon"];
	openingHours?: IOpeningHourOpt[];
	city?: IStore["city"];
	phone?: IStore["phone"];
	distance?: IStore["distance"];
}

interface IProductPriceOpt extends IProductPrice, IPriceTagColorsOpt {}

interface ICtaActionOpt extends ICtaAction {
	type?: ICtaAction["type"];
}

interface ICtaOpt extends ICta {
	label?: ICta["label"];
	icon?: ICta["icon"];
}

interface IHighlightOpt extends IHighlight {
	text?: IHighlight["text"];
}

interface IShopfullyProductDetailOpt extends IShopfullyProductDetail {
	key?: IShopfullyProductDetail["key"];
	value?: IShopfullyProductDetail["value"];
}

interface ICollapsibleSectionContentDataOpt extends ICollapsibleSectionContentData {
	sfProduct?: {
		data?: {
			description?: ICollapsibleSectionContentData["sfProduct"]["data"]["description"];
		};
	};
	sfProductDetails?: {
		data?: {
			details?: IShopfullyProductDetailOpt[];
		};
		key?: ICollapsibleSectionContentData["sfProductDetails"]["key"];
	};
	html?: {
		data?: ICollapsibleSectionContentData["html"]["data"];
		key?: ICollapsibleSectionContentData["html"]["key"];
	};
	img?: {
		data?: {
			src?: ICollapsibleSectionContentData["img"]["data"]["src"];
			maxWidth?: ICollapsibleSectionContentData["img"]["data"]["maxWidth"];
			alt?: ICollapsibleSectionContentData["img"]["data"]["alt"];
		};
		key?: ICollapsibleSectionContentData["img"]["key"];
	};
	video?: {
		data?: {
			src?: ICollapsibleSectionContentData["video"]["data"]["src"];
		};
		key?: ICollapsibleSectionContentData["video"]["key"];
	};
	buy?: {
		key?: ICollapsibleSectionContentData["buy"]["key"];
	};
	location?: {
		key?: ICollapsibleSectionContentData["location"]["key"];
	};
	openings?: {
		key?: ICollapsibleSectionContentData["openings"]["key"];
	};
	phone?: {
		key?: ICollapsibleSectionContentData["phone"]["key"];
	};
}

interface ICollapsibleSectionContentOpt<T extends keyof ICollapsibleSectionContentDataOpt> extends ICollapsibleSectionContent<T> {
	type?: ICollapsibleSectionContent<T>["type"];
	props?: ICollapsibleSectionContent<T>["props"] & ICollapsibleSectionContentDataOpt;
}

interface ICollapsibleSectionOptTemp {
	title?: ICollapsibleSection["title"];
	contents?: ICollapsibleSectionContentOpt<"sfProduct" | "sfProductDetails" | "html" | "img" | "video" | "buy" | "location" | "openings" | "phone">[];
}
type ICollapsibleSectionOpt = ICollapsibleSection & ICollapsibleSectionOptTemp;

interface IPairedProductOptTemp {
	id?: IPairedProduct["id"];
	heading?: IPairedProduct["heading"];
	description?: IPairedProduct["description"];
	productImage?: IPairedProduct["productImage"];
}
type IPairedProductOpt = IPairedProduct & IPairedProductOptTemp;

interface ISpecOptTemp {
	src?: ISpec["src"];
	size?: ISpec["size"];
}
type ISpecOpt = ISpec & ISpecOptTemp;

interface IProductOptTemp {
	id?: IProduct["id"];
	modifier?: IProduct["modifier"];
	name?: IProduct["name"];
	subName?: IProduct["subName"];
	unitType?: IProduct["unitType"];
	price?: IProductPriceOpt;
	productImage?: IProduct["productImage"];
	pairedProduct?: IPairedProductOpt;
	highlightedDiscount?: IProduct["highlightedDiscount"];
}
type IProductOpt = IProduct & IProductOptTemp;

interface ISectionOptTemp {
	id?: ISection["id"];
	name?: ISection["name"];
	products?: (IProductOpt | IMediaProductOpt<TMedia>)[];
}
type ISectionOpt = ISection & ISectionOptTemp;

interface IPriceTagColorsOptTemp {
	discountedPriceColor?: IPriceTagColors["discountedPriceColor"];
	discountedPriceStrokeWidth?: IPriceTagColors["discountedPriceStrokeWidth"];
	discountedPriceStrokeColor?: IPriceTagColors["discountedPriceStrokeColor"];
	discountedPriceShadowColor?: IPriceTagColors["discountedPriceShadowColor"];
	priceTagTopBorderColor?: IPriceTagColors["priceTagTopBorderColor"];
	priceTagTopTextColor?: IPriceTagColors["priceTagTopTextColor"];
	priceTagTopBackgroundColor?: IPriceTagColors["priceTagTopBackgroundColor"];
	discountPriceTextColor?: IPriceTagColors["discountPriceTextColor"];
	discountPriceBackgroundColor?: IPriceTagColors["discountPriceBackgroundColor"];
	priceTagBackgroundColor?: IPriceTagColors["priceTagBackgroundColor"];
	priceTagTextColor?: IPriceTagColors["priceTagTextColor"];
	priceTagBorderColor?: IPriceTagColors["priceTagBorderColor"];
	unitTypeTextColor?: IPriceTagColors["unitTypeTextColor"];
	unitTypeBackgroundColor?: IPriceTagColors["unitTypeBackgroundColor"];
	discountedCurrencyTextColor?: IPriceTagColors["discountedCurrencyTextColor"];
	discountedCurrencyBackgroundColor?: IPriceTagColors["discountedCurrencyBackgroundColor"];
	priceCurrencyTextColor?: IPriceTagColors["priceCurrencyTextColor"];
	priceCurrencyBackgroundColor?: IPriceTagColors["priceCurrencyBackgroundColor"];
}
type IPriceTagColorsOpt = IPriceTagColors & IPriceTagColorsOptTemp;

interface IOpeningOptTemp {
	closed?: IOpening["closed"];
	schedules?: {
		opening?: IOpening["schedules"]["opening"];
		closing?: IOpening["schedules"]["closing"];
	};
}
type IOpeningOpt = IOpening & IOpeningOptTemp;

interface IRetailerOptTemp {
	name?: IRetailer["name"];
	address?: IRetailer["address"];
	street?: IRetailer["street"];
	civic?: IRetailer["civic"];
	postalCode?: IRetailer["postalCode"];
	city?: IRetailer["city"];
	phoneNumber?: IRetailer["phoneNumber"];
	openings?: IOpeningOpt[];
}
type IRetailerOpt = IRetailer & IRetailerOptTemp;

interface ISchemaOptTemp {
	id?: ISchema["id"];
	backcoverImage?: ISchema["backcoverImage"];
	colophon?: ISchema["colophon"];
	coverImage?: ISchema["coverImage"];
	sections?: ISectionOpt[];
	retailer?: IRetailerOpt;
	frequentSearches?: ISchema["frequentSearches"];
	retailerId?: ISchema["retailerId"];
	basePath?: ISchema["basePath"];
	template?: ISchema["template"];
	templates?: ISchema["templates"];
	templatesComponents?: ISchema["templatesComponents"];
}
type ISchemaOpt = ISchema & ISchemaOptTemp;

export {
	IProductPriceOpt,
	IProductOpt,
	ISectionOpt,
	ISchemaOpt,
	IRetailerOpt,
	IStoreOpt,
	IOpeningHourOpt,
	ICollapsibleSectionOpt,
	ICollapsibleSectionContentOpt,
	IOpeningOpt,
	IHighlightOpt,
	ICtaOpt,
	IPairedProductOpt,
	ICtaActionOpt,
	ICollapsibleSectionContentDataOpt,
	ISpecOpt,
	IPriceTagColorsOpt,
	IMediaOpt,
	IMediaProductOpt,
};
