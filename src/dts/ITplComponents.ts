import { ITiming, IPriceTagColors } from "./ICommonSchema";
// import eFormatPrice from "@/types/eFormatPrice";
import { FormatPrice } from "@doveconviene/next-format-ui-lib";

type TTypePrice = "price";
type TType = TTypePrice;

interface ITplGenericComponent {
	_id: string;
	type: TType;
	retailerId: number;
	name: string;
	saved: boolean;
	timing?: ITiming;
}

interface IFontInfoCssVars {
	fontSize?: string;
	fontWeight?: string;
	fontFamily?: string;
	lineHeight?: string;
	letterSpacing?: string;
	textTransform?: string;
}

interface ITplPriceComponentFontInfoCssVars {
	priceTagDiscounted?: IFontInfoCssVars;
	discounted?: IFontInfoCssVars;
	discountedCurrency?: IFontInfoCssVars;
	discount?: IFontInfoCssVars;
	price?: IFontInfoCssVars;
	priceCurrency?: IFontInfoCssVars;
	unitType?: IFontInfoCssVars;
}

interface ITplPriceComponentInfo {
	priceDecimalSeparator: string;
	discountDecimalSeparator: string;
	priceTagWidth?: number;
	priceTagHeight?: number;
	priceTagZoom?: number;
	priceTagZoomFlyout?: number;
	priceTrasform?: string;
	formatPrice: FormatPrice;
	centerPriceVertically: boolean;
}

interface ITplPriceComponentCssVars extends IPriceTagColors {}

interface ITplPriceComponent extends ITplGenericComponent {
	type: "price";
	priceInfo?: ITplPriceComponentInfo;
	cssVars?: ITplPriceComponentCssVars;
	fontInfoCssVars?: ITplPriceComponentFontInfoCssVars;
}

type TTplComponents = ITplPriceComponent;

interface ITplComponents {
	price?: ITplPriceComponent["_id"];
}

export {
	IFontInfoCssVars,
	ITplPriceComponent,
	ITplPriceComponentInfo,
	TTplComponents,
	ITplGenericComponent,
	TType,
	ITplComponents,
	ITplPriceComponentCssVars,
	ITplPriceComponentFontInfoCssVars,
};
