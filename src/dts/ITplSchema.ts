import { IPriceTagColors, ITiming, ITransformOrigin } from "./ICommonSchema";
import { ObjectId } from "bson";
import { ITplComponents } from "./ITplComponents";

import { FormatPrice } from "@doveconviene/next-format-ui-lib/lib/types";

interface ITplRetailerInfo {
	logo: string;
	poi?: string;
	icon: string;
	favicon: string;
	performanceCheckLimit?: number;
	timing?: ITiming;
}

interface ITplPriceInfo {
	priceTrasform?: string;
	centerPriceVertically: boolean;
	priceDecimalSeparator: string;
	discountDecimalSeparator: string;
	priceTagWidth?: number;
	priceTagHeight?: number;
	priceTagZoom?: number;
	priceTagZoomFlyout?: number;
	timing?: ITiming;
}

interface ITplFont {
	name: string;
	source?: string;
}

interface ITplFonts {
	source?: string;
	families?: ITplFont[];
	timing?: ITiming;
}

interface ITplCssVars extends IPriceTagColors {
	withShadows?: boolean;
	bodyBackgroundColor: string;
	sectionBackgroundColor: string;
	sectionHeadingBackgroundColor: string;
	sectionHeadingTextColor: string;
	headerBackgroundColor: string;
	headerTextColor: string;
	pillBackgroundColor: string;
	pillTextColor: string;
	activePillBackgroundColor: string;
	activePillTextColor: string;
	dotColor: string;
	activeDotColor: string;
	phoneTextColor: string;
	searchInputBackgroundColor: string;
	searchInputTextColor: string;
	searchInputCaretColor: string;
	colophonBackgroundColor: string;
	colophonTextColor: string;
	productTextColor: string;
	productSubTextColor: string;
	productBackgroundColor: string;
	productBackgroundAlternativeColor: string;
	productBackgroundWideColor: string;
	navShadowBackgroundColor: string;
	flyoutProductNameTextColor: string;
	flyoutProductSubNameTextColor: string;
	highlightBackgroundColor: string;
	highlightTextColor: string;
	collapsibleBlockBackgroundColor: string;
	collapsibleBlockTextColor: string;
	flyoutHandlerColor: string;
	flyoutCloseBackgroundColor: string;
	flyoutCloseIconColor: string;
	flyoutBackgroundColor: string;
	pairedProductBackgroundColor: string;
	availabilityTextColor: string;
	retailerLocationTextColor: string;
	flyoutShadowColor: string;
	ctaBackgroundColor: string;
	ctaTextColor: string;
	alternateCtaBackgroundColor: string;
	alternateCtaTextColor: string;
	pageSectionTitleTextColor: string;
	pageSectionBackIconColor: string;
	pageSectionSearchIconColor: string;
	storeAddressTextColor: string;
	storeCityTextColor: string;
	storeDistanceTextColor: string;
	storeDetailAddressTextColor: string;
	storeDetailTitleTextColor: string;
	storeOpenBadgeTextColor: string;
	storeOpenBadgeBackgroundColor: string;
	storeOpenBadgeActiveTextColor: string;
	storeOpenBadgeActiveBackgroundColor: string;
	storeDayColor: string;
	storeOpeningHoursColor: string;
	storeDetailSeparatedLineColor: string;

	timing?: ITiming;
}

interface ITplBadge {
	name: string;
	src: string;
	width?: string;
	height?: string;
	top?: string;
	left?: string;
	transformOrigin?: ITransformOrigin;
	translateX?: string;
	translateY?: string;
	rotation?: string;
	flyoutTop?: string;
	flyoutLeft?: string;
	flyoutWidth?: string;
	flyoutHeight?: string;
	flyoutTransformOrigin?: ITransformOrigin;
	flyoutTranslateX?: string;
	flyoutTranslateY?: string;
	flyoutRotation?: string;
	timing?: ITiming;
}

interface ITplFontInfoCssVars {
	pairedProductTextFontSize: string;
	pairedProductTextFontWeight: string;
	pairedProductTextFontFamily: string;
	pairedProductTextLineHeight: string;
	pairedProductTextLetterSpacing: string;
	pairedProductTextTextTransform: string;

	storeItemFontSize: string;
	storeItemFontWeight: string;
	storeItemFontFamily: string;
	storeItemLineHeight: string;
	storeItemLetterSpacing: string;
	storeItemTextTransform: string;

	searchSectionTitleFontSize: string;
	searchSectionTitleFontWeight: string;
	searchSectionTitleFontFamily: string;
	searchSectionTitleLineHeight: string;
	searchSectionTitleLetterSpacing: string;
	searchSectionTitleTextTransform: string;

	suggestionItemFontSize: string;
	suggestionItemFontWeight: string;
	suggestionItemFontFamily: string;
	suggestionItemLineHeight: string;
	suggestionItemLetterSpacing: string;

	suggestionTextTransform: string;

	searchInputFontSize: string;
	searchInputFontWeight: string;
	searchInputFontFamily: string;
	searchInputLineHeight: string;
	searchInputLetterSpacing: string;
	searchInputTextTransform: string;

	searchClearFontSize: string;
	searchClearFontWeight: string;
	searchClearFontFamily: string;
	searchClearLineHeight: string;
	searchClearLetterSpacing: string;
	searchClearTextTransform: string;

	searchDataFontSize: string;
	searchDataFontWeight: string;
	searchDataFontFamily: string;
	searchDataLineHeight: string;
	searchDataLetterSpacing: string;
	searchDataTextTransform: string;

	retailerLocationFontSize: string;
	retailerLocationFontWeight: string;
	retailerLocationFontFamily: string;
	retailerLocationLineHeight: string;
	retailerLocationLetterSpacing: string;
	retailerLocationTextTransform: string;

	pillFontSize: string;
	pillFontWeight: string;
	pillFontFamily: string;
	pillLineHeight: string;
	pillLetterSpacing: string;
	pillTextTransform: string;

	searchItemFontSize: string;
	searchItemFontWeight: string;
	searchItemFontFamily: string;
	searchItemLineHeight: string;
	searchItemLetterSpacing: string;
	searchItemTextTransform: string;

	flyoutProductNameFontSize: string;
	flyoutProductNameFontWeight: string;
	flyoutProductNameFontFamily: string;
	flyoutProductNameLineHeight: string;
	flyoutProductNameLetterSpacing: string;

	flyoutProductNameReducedFontSize: string;
	flyoutProductNameReducedFontWeight: string;
	flyoutProductNameReducedFontFamily: string;
	flyoutProductNameReducedLineHeight: string;
	flyoutProductNameReducedLetterSpacing: string;
	flyoutProductNameReducedTextTransform: string;

	flyoutProductSubNameFontSize: string;
	flyoutProductSubNameFontWeight: string;
	flyoutProductSubNameFontFamily: string;
	flyoutProductSubNameLineHeight: string;
	flyoutProductSubNameLetterSpacing: string;

	flyoutProductSubNameReducedFontSize: string;
	flyoutProductSubNameReducedFontWeight: string;
	flyoutProductSubNameReducedFontFamily: string;
	flyoutProductSubNameReducedLineHeight: string;
	flyoutProductSubNameReducedLetterSpacing: string;
	flyoutProductSubNameReducedTextTransform: string;

	flyoutProductDescriptionFontSize: string;
	flyoutProductDescriptionFontWeight: string;
	flyoutProductDescriptionFontFamily: string;
	flyoutProductDescriptionLineHeight: string;
	flyoutProductDescriptionLetterSpacing: string;
	flyoutProductDescriptionTextTransform: string;

	highlightsSmallFontSize: string;
	highlightsSmallFontWeight: string;
	highlightsSmallFontFamily: string;
	highlightsSmallLineHeight: string;
	highlightsSmallLetterSpacing: string;
	highlightsSmallTextTransform: string;

	highlightsFontSize: string;
	highlightsFontWeight: string;
	highlightsFontFamily: string;
	highlightsLineHeight: string;
	highlightsLetterSpacing: string;
	highlightsTextTransform: string;

	collapsibleBlockHandlerFontSize: string;
	collapsibleBlockHandlerFontWeight: string;
	collapsibleBlockHandlerFontFamily: string;
	collapsibleBlockHandlerLineHeight: string;
	collapsibleBlockHandlerLetterSpacing: string;
	collapsibleBlockHandlerTextTransform: string;

	ctaFontSize: string;
	ctaFontWeight: string;
	ctaFontFamily: string;
	ctaLineHeight: string;
	ctaLetterSpacing: string;
	ctaTextTransform: string;

	fullFontSize: string;
	fullFontWeight: string;
	fullFontFamily: string;
	fullLineHeight: string;
	fullLetterSpacing: string;
	fullTextTransform: string;

	availabilityFontSize: string;
	availabilityFontWeight: string;
	availabilityFontFamily: string;
	availabilityLineHeight: string;
	availabilityLetterSpacing: string;
	availabilityTextTransform: string;

	blockFontSize: string;
	blockFontWeight: string;
	blockFontFamily: string;
	blockLineHeight: string;
	blockLetterSpacing: string;
	blockTextTransform: string;

	colophonFontSize: string;
	colophonFontWeight: string;
	colophonFontFamily: string;
	colophonLineHeight: string;
	colophonLetterSpacing: string;
	colophonTextTransform: string;

	sectionHeaderFontSize: string;
	sectionHeaderFontWeight: string;
	sectionHeaderFontFamily: string;
	sectionHeaderLineHeight: string;
	sectionHeaderLetterSpacing: string;
	sectionHeaderTextTransform: string;

	productCellSingleNameFontSize: string;
	productCellSingleNameFontWeight: string;
	productCellSingleNameFontFamily: string;
	productCellSingleNameLineHeight: string;
	productCellSingleNameLetterSpacing: string;
	productCellSingleNameTextTransform: string;

	productCellWideNameFontSize: string;
	productCellWideNameFontWeight: string;
	productCellWideNameFontFamily: string;
	productCellWideNameLineHeight: string;
	productCellWideNameLetterSpacing: string;
	productCellWideNameTextTransform: string;

	productCellSingleSubNameFontSize: string;
	productCellSingleSubNameFontWeight: string;
	productCellSingleSubNameFontFamily: string;
	productCellSingleSubNameLineHeight: string;
	productCellSingleSubNameLetterSpacing: string;
	productCellSingleSubNameTextTransform: string;

	productCellWideSubNameFontSize: string;
	productCellWideSubNameFontWeight: string;
	productCellWideSubNameFontFamily: string;
	productCellWideSubNameLineHeight: string;
	productCellWideSubNameLetterSpacing: string;
	productCellWideSubNameTextTransform: string;

	//--- price block ---
	priceTagDiscountedFontSize: string;
	priceTagDiscountedFontWeight: string;
	priceTagDiscountedFontFamily: string;
	priceTagDiscountedLineHeight: string;
	priceTagDiscountedLetterSpacing: string;
	priceTagDiscountedTextTransform: string;

	//--- discounted ---
	discountedFontSize: string;
	discountedFontWeight: string;
	discountedFontFamily: string;
	discountedLineHeight: string;
	discountedLetterSpacing: string;
	discountedTextTransform: string;

	//--- discounted currency ---
	discountedCurrencyFontSize: string;
	discountedCurrencyFontWeight: string;
	discountedCurrencyFontFamily: string;
	discountedCurrencyLineHeight: string;
	discountedCurrencyLetterSpacing: string;
	discountedCurrencyTextTransform: string;

	//--- discount ---
	discountFontSize: string;
	discountFontWeight: string;
	discountFontFamily: string;
	discountLineHeight: string;
	discountLetterSpacing: string;
	discountTextTransform: string;

	//--- price ---
	priceFontSize: string;
	priceFontWeight: string;
	priceFontFamily: string;
	priceLineHeight: string;
	priceLetterSpacing: string;
	priceTextTransform: string;

	//--- price currency ---
	priceCurrencyFontSize: string;
	priceCurrencyFontWeight: string;
	priceCurrencyFontFamily: string;
	priceCurrencyLineHeight: string;
	priceCurrencyLetterSpacing: string;
	priceCurrencyTextTransform: string;

	//--- unit type ---
	unitTypeFontSize: string;
	unitTypeFontWeight: string;
	unitTypeFontFamily: string;
	unitTypeLineHeight: string;
	unitTypeLetterSpacing: string;
	unitTypeTextTransform: string;

	timing?: ITiming;
}

interface ITplProductInfo {
	iconPlusActive: boolean;
	iconPlusWidth: string;
	iconPlusHeight: string;
	iconPlusLevel: number;
	iconPlusImage: string;
	iconPlusPositionX: string;
	iconPlusPositionY: string;
	iconPlusBlinkTimes: number;
	iconPlusAnimationDuration: string;
	iconPlusOpacity: string;
	singleCellHeight: string;
	wideCellHeight: string;
	formatPrice: FormatPrice;
	bottomSheetSingleMode?: boolean;
	timing?: ITiming;
}

interface ITplSchema {
	_id: ObjectId;
	retailerId: number;
	name: string;
	retailerInfo: ITplRetailerInfo;
	productInfo?: ITplProductInfo;
	priceInfo?: ITplPriceInfo;
	fonts?: ITplFonts;
	fontInfoCssVars: ITplFontInfoCssVars;
	cssVars: ITplCssVars;
	badges?: ITplBadge[];
	basePath: string;
	templateComponents?: ITplComponents;
	timing?: ITiming;
	saved: boolean;
}

export { ITplSchema, ITplRetailerInfo, ITplProductInfo, ITplPriceInfo, ITplFont, ITplFonts, ITplCssVars, ITplBadge, ITplFontInfoCssVars };
