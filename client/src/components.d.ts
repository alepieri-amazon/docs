/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ToggleInView, } from "./amplify-ui/sidebar-layout/sidebar-layout.types";
import { SetContent, } from "./amplify-ui/toc/toc.types";
import { SelectedFilters, } from "./docs-ui/page/page.types";
import { MenuGroup, Page, } from "./api";
import { MatchResults, } from "@stencil/router";
import { SwitchOption, } from "./docs-ui/version-switch/version-switch.types";
export namespace Components {
    interface AmplifyBlock {
        /**
          * Block name
         */
        "name"?: string;
    }
    interface AmplifyBlockSwitcher {
    }
    interface AmplifyCallout {
        /**
          * * is it a warning?
         */
        "warning"?: boolean;
    }
    interface AmplifyCodeBlock {
        /**
          * what language are we displaying
         */
        "language"?: string;
        /**
          * the number of lines of the code block
         */
        "lineCount"?: string;
    }
    interface AmplifyCodeBlockSwitcher {
        /**
          * the tab headings, comma-separated as a single string
         */
        "tabHeadingList"?: string;
    }
    interface AmplifyContainer {
        /**
          * * incase users want to add a class to the inner div
         */
        "innerClass"?: string;
    }
    interface AmplifyExternalLink {
        /**
          * * Title attr same as for `a`
         */
        "anchorTitle"?: string;
        /**
          * * Whether to display the external link graphic to the right of the anchor child text
         */
        "graphic"?: "black" | "white";
        /**
          * * The URL to open / to which the anchor should redirect
         */
        "href"?: string;
        /**
          * * Whether to cancel the overriden target behavior (defaults to "_blank")
         */
        "redirect"?: boolean;
    }
    interface AmplifyHero {
    }
    interface AmplifyLorem {
    }
    interface AmplifyResponsiveGrid {
        /**
          * default column count for laptop
         */
        "columns": number;
        /**
          * how much space in between grid items (ems)
         */
        "gridGap": number;
    }
    interface AmplifySidebarLayout {
    }
    interface AmplifySidebarLayoutMain {
        /**
          * * whether or not the sidebar is in view, provided by `sidebar-layout`
         */
        "inView"?: boolean;
    }
    interface AmplifySidebarLayoutSidebar {
        /**
          * * is the sidebar hidden? This prop is passed via `sidebar-context`
         */
        "inView"?: boolean;
        /**
          * * toggles the state provided by `sidebar-layout`
         */
        "toggleInView"?: ToggleInView;
        /**
          * * at what distance from the viewport top should the bar be affixed?
         */
        "top"?: number;
    }
    interface AmplifySidebarLayoutToggle {
        /**
          * * whether or not the sidebar is in view, provided by `sidebar-layout`
         */
        "inView"?: boolean;
        /**
          * * when the sidebar is in view, what class should be appended to the button?
         */
        "inViewClass"?: string;
        /**
          * * toggles the state provided by `sidebar-layout`
         */
        "toggleInView"?: ToggleInView;
    }
    interface AmplifyToc {
        /**
          * A list of `h2` and/or `h3` nodes, provided by either of 2 means: 1. User-provided (`<amplify-toc elements={[...h2h3DomNodes]} />`) 2. Provider-injected (within parent `amplify-toc-provider`, sibling an `amplify-toc-content` instance)
         */
        "elements"?: HTMLElement[];
        /**
          * * the title of the page on which this TOC is being rendered
         */
        "pageTitle"?: string;
        /**
          * * offset the active item (useful when combatting sticky header)
         */
        "stickyHeaderHeight": 54;
    }
    interface AmplifyTocContents {
        /**
          * Sets `content` prop within parent `amplify-toc-provider`, which propogates into the provider's child `amplify-toc` instances
         */
        "setContent"?: SetContent;
    }
    interface AmplifyTocProvider {
    }
    interface Docs404Page {
    }
    interface DocsCard {
        /**
          * * link tag to use
         */
        "containerTag": string;
        /**
          * * whether or not to show external link graphic
         */
        "external"?: boolean;
        /**
          * * the global filter state
         */
        "selectedFilters"?: SelectedFilters;
        /**
          * * url
         */
        "url"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForAndroidFilter"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForIOSFilter"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForJSFilter"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForMobileFilter"?: string;
        /**
          * * if true, the thumbnail gets rendered to the left of the detail (not above)
         */
        "vertical"?: boolean;
    }
    interface DocsChatButton {
    }
    interface DocsChooseAnchor {
        /**
          * * the current page's data
         */
        "page": Page;
    }
    interface DocsChooseIntegrationAnchor {
        /**
          * * the current page's data
         */
        "page"?: Page;
    }
    interface DocsFeedbackCallout {
    }
    interface DocsFilterTarget {
        /**
          * * the conditions off of which to style the host visible vs. hidden
         */
        "filters"?: Record<string, string>;
        /**
          * * the currently-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsFooter {
    }
    interface DocsFourOFour {
    }
    interface DocsInPageLink {
        /**
          * * the selected filter state
         */
        "selectedFilters": SelectedFilters;
        /**
          * * the id of the element this link points to
         */
        "targetId": string;
    }
    interface DocsInternalLink {
        /**
          * * class name to attach to link when active
         */
        "activeClass"?: string;
        /**
          * * override `isChildActive` to true
         */
        "additionalActiveChildRoots"?: string[];
        /**
          * * class name to attach a subpage is active
         */
        "childActiveClass"?: string;
        /**
          * * the route to render out
         */
        "href": string;
        /**
          * * the global selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsInternalLinkButton {
        /**
          * * the path to redirect to (internal only!)
         */
        "href"?: string;
    }
    interface DocsLandingHeroCta {
    }
    interface DocsLinkBanner {
    }
    interface DocsMenu {
        /**
          * * the filter key
         */
        "filterKey"?: string;
        /**
          * * the `Page` instance for which this menu is being rendered
         */
        "page"?: Page;
        /**
          * * the currently-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsMenuGroup {
        /**
          * * the filter key that applies to this product section
         */
        "filterKey"?: string;
        /**
          * * whether or not the menu is in view
         */
        "inView"?: boolean;
        /**
          * * the group to render
         */
        "menuGroup"?: MenuGroup;
        /**
          * * the currently-selected filters
         */
        "selectedFilters": SelectedFilters;
        /**
          * * the menu toggle
         */
        "toggleInView": ToggleInView;
    }
    interface DocsNextPrevious {
        /**
          * * page from with `next` and `previous` can be attained
         */
        "page"?: Page;
        /**
          * * currently-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsPage {
        /**
          * match path
         */
        "match": MatchResults;
    }
    interface DocsRepoActions {
        /**
          * * the page from which a subpath can be attained
         */
        "page"?: Page;
    }
    interface DocsRouter {
    }
    interface DocsSecondaryNav {
        /**
          * * the current filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsSelectAnchor {
        /**
          * * whether or not the menu is in view
         */
        "inView"?: boolean;
        /**
          * the current page's data
         */
        "page"?: Page;
        /**
          * * the globally-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
        /**
          * * the menu toggle
         */
        "toggleInView": ToggleInView;
    }
    interface DocsUniversalNav {
        /**
          * * determines whether transparent background styles & starker text/logo colors are applied
         */
        "blend"?: boolean;
        /**
          * * image url for brand icon
         */
        "brandIcon"?: string;
        /**
          * * image url for brand icon when nav in blend mode
         */
        "brandIconBlend"?: string;
        /**
          * * what label should go next to the brand icon?
         */
        "heading"?: string;
    }
    interface DocsVersionSwitch {
        /**
          * * Switcher option appearing to the left **
         */
        "leftOption": SwitchOption;
        /**
          * * Switcher option appearing to the right **
         */
        "rightOption": SwitchOption;
    }
    interface UiComponentProps {
        /**
          * * component tag for documented component page
         */
        "tag": string;
        /**
          * * whether or not the table contains header tags
         */
        "useTableHeaders": boolean;
    }
}
declare global {
    interface HTMLAmplifyBlockElement extends Components.AmplifyBlock, HTMLStencilElement {
    }
    var HTMLAmplifyBlockElement: {
        prototype: HTMLAmplifyBlockElement;
        new (): HTMLAmplifyBlockElement;
    };
    interface HTMLAmplifyBlockSwitcherElement extends Components.AmplifyBlockSwitcher, HTMLStencilElement {
    }
    var HTMLAmplifyBlockSwitcherElement: {
        prototype: HTMLAmplifyBlockSwitcherElement;
        new (): HTMLAmplifyBlockSwitcherElement;
    };
    interface HTMLAmplifyCalloutElement extends Components.AmplifyCallout, HTMLStencilElement {
    }
    var HTMLAmplifyCalloutElement: {
        prototype: HTMLAmplifyCalloutElement;
        new (): HTMLAmplifyCalloutElement;
    };
    interface HTMLAmplifyCodeBlockElement extends Components.AmplifyCodeBlock, HTMLStencilElement {
    }
    var HTMLAmplifyCodeBlockElement: {
        prototype: HTMLAmplifyCodeBlockElement;
        new (): HTMLAmplifyCodeBlockElement;
    };
    interface HTMLAmplifyCodeBlockSwitcherElement extends Components.AmplifyCodeBlockSwitcher, HTMLStencilElement {
    }
    var HTMLAmplifyCodeBlockSwitcherElement: {
        prototype: HTMLAmplifyCodeBlockSwitcherElement;
        new (): HTMLAmplifyCodeBlockSwitcherElement;
    };
    interface HTMLAmplifyContainerElement extends Components.AmplifyContainer, HTMLStencilElement {
    }
    var HTMLAmplifyContainerElement: {
        prototype: HTMLAmplifyContainerElement;
        new (): HTMLAmplifyContainerElement;
    };
    interface HTMLAmplifyExternalLinkElement extends Components.AmplifyExternalLink, HTMLStencilElement {
    }
    var HTMLAmplifyExternalLinkElement: {
        prototype: HTMLAmplifyExternalLinkElement;
        new (): HTMLAmplifyExternalLinkElement;
    };
    interface HTMLAmplifyHeroElement extends Components.AmplifyHero, HTMLStencilElement {
    }
    var HTMLAmplifyHeroElement: {
        prototype: HTMLAmplifyHeroElement;
        new (): HTMLAmplifyHeroElement;
    };
    interface HTMLAmplifyLoremElement extends Components.AmplifyLorem, HTMLStencilElement {
    }
    var HTMLAmplifyLoremElement: {
        prototype: HTMLAmplifyLoremElement;
        new (): HTMLAmplifyLoremElement;
    };
    interface HTMLAmplifyResponsiveGridElement extends Components.AmplifyResponsiveGrid, HTMLStencilElement {
    }
    var HTMLAmplifyResponsiveGridElement: {
        prototype: HTMLAmplifyResponsiveGridElement;
        new (): HTMLAmplifyResponsiveGridElement;
    };
    interface HTMLAmplifySidebarLayoutElement extends Components.AmplifySidebarLayout, HTMLStencilElement {
    }
    var HTMLAmplifySidebarLayoutElement: {
        prototype: HTMLAmplifySidebarLayoutElement;
        new (): HTMLAmplifySidebarLayoutElement;
    };
    interface HTMLAmplifySidebarLayoutMainElement extends Components.AmplifySidebarLayoutMain, HTMLStencilElement {
    }
    var HTMLAmplifySidebarLayoutMainElement: {
        prototype: HTMLAmplifySidebarLayoutMainElement;
        new (): HTMLAmplifySidebarLayoutMainElement;
    };
    interface HTMLAmplifySidebarLayoutSidebarElement extends Components.AmplifySidebarLayoutSidebar, HTMLStencilElement {
    }
    var HTMLAmplifySidebarLayoutSidebarElement: {
        prototype: HTMLAmplifySidebarLayoutSidebarElement;
        new (): HTMLAmplifySidebarLayoutSidebarElement;
    };
    interface HTMLAmplifySidebarLayoutToggleElement extends Components.AmplifySidebarLayoutToggle, HTMLStencilElement {
    }
    var HTMLAmplifySidebarLayoutToggleElement: {
        prototype: HTMLAmplifySidebarLayoutToggleElement;
        new (): HTMLAmplifySidebarLayoutToggleElement;
    };
    interface HTMLAmplifyTocElement extends Components.AmplifyToc, HTMLStencilElement {
    }
    var HTMLAmplifyTocElement: {
        prototype: HTMLAmplifyTocElement;
        new (): HTMLAmplifyTocElement;
    };
    interface HTMLAmplifyTocContentsElement extends Components.AmplifyTocContents, HTMLStencilElement {
    }
    var HTMLAmplifyTocContentsElement: {
        prototype: HTMLAmplifyTocContentsElement;
        new (): HTMLAmplifyTocContentsElement;
    };
    interface HTMLAmplifyTocProviderElement extends Components.AmplifyTocProvider, HTMLStencilElement {
    }
    var HTMLAmplifyTocProviderElement: {
        prototype: HTMLAmplifyTocProviderElement;
        new (): HTMLAmplifyTocProviderElement;
    };
    interface HTMLDocs404PageElement extends Components.Docs404Page, HTMLStencilElement {
    }
    var HTMLDocs404PageElement: {
        prototype: HTMLDocs404PageElement;
        new (): HTMLDocs404PageElement;
    };
    interface HTMLDocsCardElement extends Components.DocsCard, HTMLStencilElement {
    }
    var HTMLDocsCardElement: {
        prototype: HTMLDocsCardElement;
        new (): HTMLDocsCardElement;
    };
    interface HTMLDocsChatButtonElement extends Components.DocsChatButton, HTMLStencilElement {
    }
    var HTMLDocsChatButtonElement: {
        prototype: HTMLDocsChatButtonElement;
        new (): HTMLDocsChatButtonElement;
    };
    interface HTMLDocsChooseAnchorElement extends Components.DocsChooseAnchor, HTMLStencilElement {
    }
    var HTMLDocsChooseAnchorElement: {
        prototype: HTMLDocsChooseAnchorElement;
        new (): HTMLDocsChooseAnchorElement;
    };
    interface HTMLDocsChooseIntegrationAnchorElement extends Components.DocsChooseIntegrationAnchor, HTMLStencilElement {
    }
    var HTMLDocsChooseIntegrationAnchorElement: {
        prototype: HTMLDocsChooseIntegrationAnchorElement;
        new (): HTMLDocsChooseIntegrationAnchorElement;
    };
    interface HTMLDocsFeedbackCalloutElement extends Components.DocsFeedbackCallout, HTMLStencilElement {
    }
    var HTMLDocsFeedbackCalloutElement: {
        prototype: HTMLDocsFeedbackCalloutElement;
        new (): HTMLDocsFeedbackCalloutElement;
    };
    interface HTMLDocsFilterTargetElement extends Components.DocsFilterTarget, HTMLStencilElement {
    }
    var HTMLDocsFilterTargetElement: {
        prototype: HTMLDocsFilterTargetElement;
        new (): HTMLDocsFilterTargetElement;
    };
    interface HTMLDocsFooterElement extends Components.DocsFooter, HTMLStencilElement {
    }
    var HTMLDocsFooterElement: {
        prototype: HTMLDocsFooterElement;
        new (): HTMLDocsFooterElement;
    };
    interface HTMLDocsFourOFourElement extends Components.DocsFourOFour, HTMLStencilElement {
    }
    var HTMLDocsFourOFourElement: {
        prototype: HTMLDocsFourOFourElement;
        new (): HTMLDocsFourOFourElement;
    };
    interface HTMLDocsInPageLinkElement extends Components.DocsInPageLink, HTMLStencilElement {
    }
    var HTMLDocsInPageLinkElement: {
        prototype: HTMLDocsInPageLinkElement;
        new (): HTMLDocsInPageLinkElement;
    };
    interface HTMLDocsInternalLinkElement extends Components.DocsInternalLink, HTMLStencilElement {
    }
    var HTMLDocsInternalLinkElement: {
        prototype: HTMLDocsInternalLinkElement;
        new (): HTMLDocsInternalLinkElement;
    };
    interface HTMLDocsInternalLinkButtonElement extends Components.DocsInternalLinkButton, HTMLStencilElement {
    }
    var HTMLDocsInternalLinkButtonElement: {
        prototype: HTMLDocsInternalLinkButtonElement;
        new (): HTMLDocsInternalLinkButtonElement;
    };
    interface HTMLDocsLandingHeroCtaElement extends Components.DocsLandingHeroCta, HTMLStencilElement {
    }
    var HTMLDocsLandingHeroCtaElement: {
        prototype: HTMLDocsLandingHeroCtaElement;
        new (): HTMLDocsLandingHeroCtaElement;
    };
    interface HTMLDocsLinkBannerElement extends Components.DocsLinkBanner, HTMLStencilElement {
    }
    var HTMLDocsLinkBannerElement: {
        prototype: HTMLDocsLinkBannerElement;
        new (): HTMLDocsLinkBannerElement;
    };
    interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {
    }
    var HTMLDocsMenuElement: {
        prototype: HTMLDocsMenuElement;
        new (): HTMLDocsMenuElement;
    };
    interface HTMLDocsMenuGroupElement extends Components.DocsMenuGroup, HTMLStencilElement {
    }
    var HTMLDocsMenuGroupElement: {
        prototype: HTMLDocsMenuGroupElement;
        new (): HTMLDocsMenuGroupElement;
    };
    interface HTMLDocsNextPreviousElement extends Components.DocsNextPrevious, HTMLStencilElement {
    }
    var HTMLDocsNextPreviousElement: {
        prototype: HTMLDocsNextPreviousElement;
        new (): HTMLDocsNextPreviousElement;
    };
    interface HTMLDocsPageElement extends Components.DocsPage, HTMLStencilElement {
    }
    var HTMLDocsPageElement: {
        prototype: HTMLDocsPageElement;
        new (): HTMLDocsPageElement;
    };
    interface HTMLDocsRepoActionsElement extends Components.DocsRepoActions, HTMLStencilElement {
    }
    var HTMLDocsRepoActionsElement: {
        prototype: HTMLDocsRepoActionsElement;
        new (): HTMLDocsRepoActionsElement;
    };
    interface HTMLDocsRouterElement extends Components.DocsRouter, HTMLStencilElement {
    }
    var HTMLDocsRouterElement: {
        prototype: HTMLDocsRouterElement;
        new (): HTMLDocsRouterElement;
    };
    interface HTMLDocsSecondaryNavElement extends Components.DocsSecondaryNav, HTMLStencilElement {
    }
    var HTMLDocsSecondaryNavElement: {
        prototype: HTMLDocsSecondaryNavElement;
        new (): HTMLDocsSecondaryNavElement;
    };
    interface HTMLDocsSelectAnchorElement extends Components.DocsSelectAnchor, HTMLStencilElement {
    }
    var HTMLDocsSelectAnchorElement: {
        prototype: HTMLDocsSelectAnchorElement;
        new (): HTMLDocsSelectAnchorElement;
    };
    interface HTMLDocsUniversalNavElement extends Components.DocsUniversalNav, HTMLStencilElement {
    }
    var HTMLDocsUniversalNavElement: {
        prototype: HTMLDocsUniversalNavElement;
        new (): HTMLDocsUniversalNavElement;
    };
    interface HTMLDocsVersionSwitchElement extends Components.DocsVersionSwitch, HTMLStencilElement {
    }
    var HTMLDocsVersionSwitchElement: {
        prototype: HTMLDocsVersionSwitchElement;
        new (): HTMLDocsVersionSwitchElement;
    };
    interface HTMLUiComponentPropsElement extends Components.UiComponentProps, HTMLStencilElement {
    }
    var HTMLUiComponentPropsElement: {
        prototype: HTMLUiComponentPropsElement;
        new (): HTMLUiComponentPropsElement;
    };
    interface HTMLElementTagNameMap {
        "amplify-block": HTMLAmplifyBlockElement;
        "amplify-block-switcher": HTMLAmplifyBlockSwitcherElement;
        "amplify-callout": HTMLAmplifyCalloutElement;
        "amplify-code-block": HTMLAmplifyCodeBlockElement;
        "amplify-code-block-switcher": HTMLAmplifyCodeBlockSwitcherElement;
        "amplify-container": HTMLAmplifyContainerElement;
        "amplify-external-link": HTMLAmplifyExternalLinkElement;
        "amplify-hero": HTMLAmplifyHeroElement;
        "amplify-lorem": HTMLAmplifyLoremElement;
        "amplify-responsive-grid": HTMLAmplifyResponsiveGridElement;
        "amplify-sidebar-layout": HTMLAmplifySidebarLayoutElement;
        "amplify-sidebar-layout-main": HTMLAmplifySidebarLayoutMainElement;
        "amplify-sidebar-layout-sidebar": HTMLAmplifySidebarLayoutSidebarElement;
        "amplify-sidebar-layout-toggle": HTMLAmplifySidebarLayoutToggleElement;
        "amplify-toc": HTMLAmplifyTocElement;
        "amplify-toc-contents": HTMLAmplifyTocContentsElement;
        "amplify-toc-provider": HTMLAmplifyTocProviderElement;
        "docs-404-page": HTMLDocs404PageElement;
        "docs-card": HTMLDocsCardElement;
        "docs-chat-button": HTMLDocsChatButtonElement;
        "docs-choose-anchor": HTMLDocsChooseAnchorElement;
        "docs-choose-integration-anchor": HTMLDocsChooseIntegrationAnchorElement;
        "docs-feedback-callout": HTMLDocsFeedbackCalloutElement;
        "docs-filter-target": HTMLDocsFilterTargetElement;
        "docs-footer": HTMLDocsFooterElement;
        "docs-four-o-four": HTMLDocsFourOFourElement;
        "docs-in-page-link": HTMLDocsInPageLinkElement;
        "docs-internal-link": HTMLDocsInternalLinkElement;
        "docs-internal-link-button": HTMLDocsInternalLinkButtonElement;
        "docs-landing-hero-cta": HTMLDocsLandingHeroCtaElement;
        "docs-link-banner": HTMLDocsLinkBannerElement;
        "docs-menu": HTMLDocsMenuElement;
        "docs-menu-group": HTMLDocsMenuGroupElement;
        "docs-next-previous": HTMLDocsNextPreviousElement;
        "docs-page": HTMLDocsPageElement;
        "docs-repo-actions": HTMLDocsRepoActionsElement;
        "docs-router": HTMLDocsRouterElement;
        "docs-secondary-nav": HTMLDocsSecondaryNavElement;
        "docs-select-anchor": HTMLDocsSelectAnchorElement;
        "docs-universal-nav": HTMLDocsUniversalNavElement;
        "docs-version-switch": HTMLDocsVersionSwitchElement;
        "ui-component-props": HTMLUiComponentPropsElement;
    }
}
declare namespace LocalJSX {
    interface AmplifyBlock {
        /**
          * Block name
         */
        "name"?: string;
    }
    interface AmplifyBlockSwitcher {
    }
    interface AmplifyCallout {
        /**
          * * is it a warning?
         */
        "warning"?: boolean;
    }
    interface AmplifyCodeBlock {
        /**
          * what language are we displaying
         */
        "language"?: string;
        /**
          * the number of lines of the code block
         */
        "lineCount"?: string;
    }
    interface AmplifyCodeBlockSwitcher {
        /**
          * the tab headings, comma-separated as a single string
         */
        "tabHeadingList"?: string;
    }
    interface AmplifyContainer {
        /**
          * * incase users want to add a class to the inner div
         */
        "innerClass"?: string;
    }
    interface AmplifyExternalLink {
        /**
          * * Title attr same as for `a`
         */
        "anchorTitle"?: string;
        /**
          * * Whether to display the external link graphic to the right of the anchor child text
         */
        "graphic"?: "black" | "white";
        /**
          * * The URL to open / to which the anchor should redirect
         */
        "href"?: string;
        /**
          * * Whether to cancel the overriden target behavior (defaults to "_blank")
         */
        "redirect"?: boolean;
    }
    interface AmplifyHero {
    }
    interface AmplifyLorem {
    }
    interface AmplifyResponsiveGrid {
        /**
          * default column count for laptop
         */
        "columns"?: number;
        /**
          * how much space in between grid items (ems)
         */
        "gridGap"?: number;
    }
    interface AmplifySidebarLayout {
    }
    interface AmplifySidebarLayoutMain {
        /**
          * * whether or not the sidebar is in view, provided by `sidebar-layout`
         */
        "inView"?: boolean;
    }
    interface AmplifySidebarLayoutSidebar {
        /**
          * * is the sidebar hidden? This prop is passed via `sidebar-context`
         */
        "inView"?: boolean;
        /**
          * * toggles the state provided by `sidebar-layout`
         */
        "toggleInView"?: ToggleInView;
        /**
          * * at what distance from the viewport top should the bar be affixed?
         */
        "top"?: number;
    }
    interface AmplifySidebarLayoutToggle {
        /**
          * * whether or not the sidebar is in view, provided by `sidebar-layout`
         */
        "inView"?: boolean;
        /**
          * * when the sidebar is in view, what class should be appended to the button?
         */
        "inViewClass"?: string;
        /**
          * * toggles the state provided by `sidebar-layout`
         */
        "toggleInView"?: ToggleInView;
    }
    interface AmplifyToc {
        /**
          * A list of `h2` and/or `h3` nodes, provided by either of 2 means: 1. User-provided (`<amplify-toc elements={[...h2h3DomNodes]} />`) 2. Provider-injected (within parent `amplify-toc-provider`, sibling an `amplify-toc-content` instance)
         */
        "elements"?: HTMLElement[];
        /**
          * * the title of the page on which this TOC is being rendered
         */
        "pageTitle"?: string;
        /**
          * * offset the active item (useful when combatting sticky header)
         */
        "stickyHeaderHeight"?: 54;
    }
    interface AmplifyTocContents {
        /**
          * Sets `content` prop within parent `amplify-toc-provider`, which propogates into the provider's child `amplify-toc` instances
         */
        "setContent"?: SetContent;
    }
    interface AmplifyTocProvider {
    }
    interface Docs404Page {
    }
    interface DocsCard {
        /**
          * * link tag to use
         */
        "containerTag"?: string;
        /**
          * * whether or not to show external link graphic
         */
        "external"?: boolean;
        /**
          * * the global filter state
         */
        "selectedFilters"?: SelectedFilters;
        /**
          * * url
         */
        "url"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForAndroidFilter"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForIOSFilter"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForJSFilter"?: string;
        /**
          * * add a different url when mobile selected
         */
        "urlOverrideForMobileFilter"?: string;
        /**
          * * if true, the thumbnail gets rendered to the left of the detail (not above)
         */
        "vertical"?: boolean;
    }
    interface DocsChatButton {
    }
    interface DocsChooseAnchor {
        /**
          * * the current page's data
         */
        "page"?: Page;
    }
    interface DocsChooseIntegrationAnchor {
        /**
          * * the current page's data
         */
        "page"?: Page;
    }
    interface DocsFeedbackCallout {
    }
    interface DocsFilterTarget {
        /**
          * * the conditions off of which to style the host visible vs. hidden
         */
        "filters"?: Record<string, string>;
        /**
          * * the currently-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsFooter {
    }
    interface DocsFourOFour {
    }
    interface DocsInPageLink {
        /**
          * * the selected filter state
         */
        "selectedFilters"?: SelectedFilters;
        /**
          * * the id of the element this link points to
         */
        "targetId"?: string;
    }
    interface DocsInternalLink {
        /**
          * * class name to attach to link when active
         */
        "activeClass"?: string;
        /**
          * * override `isChildActive` to true
         */
        "additionalActiveChildRoots"?: string[];
        /**
          * * class name to attach a subpage is active
         */
        "childActiveClass"?: string;
        /**
          * * the route to render out
         */
        "href"?: string;
        /**
          * * the global selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsInternalLinkButton {
        /**
          * * the path to redirect to (internal only!)
         */
        "href"?: string;
    }
    interface DocsLandingHeroCta {
    }
    interface DocsLinkBanner {
    }
    interface DocsMenu {
        /**
          * * the filter key
         */
        "filterKey"?: string;
        /**
          * * the `Page` instance for which this menu is being rendered
         */
        "page"?: Page;
        /**
          * * the currently-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsMenuGroup {
        /**
          * * the filter key that applies to this product section
         */
        "filterKey"?: string;
        /**
          * * whether or not the menu is in view
         */
        "inView"?: boolean;
        /**
          * * the group to render
         */
        "menuGroup"?: MenuGroup;
        /**
          * * the currently-selected filters
         */
        "selectedFilters"?: SelectedFilters;
        /**
          * * the menu toggle
         */
        "toggleInView"?: ToggleInView;
    }
    interface DocsNextPrevious {
        /**
          * * page from with `next` and `previous` can be attained
         */
        "page"?: Page;
        /**
          * * currently-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsPage {
        /**
          * match path
         */
        "match"?: MatchResults;
    }
    interface DocsRepoActions {
        /**
          * * the page from which a subpath can be attained
         */
        "page"?: Page;
    }
    interface DocsRouter {
    }
    interface DocsSecondaryNav {
        /**
          * * the current filter state
         */
        "selectedFilters"?: SelectedFilters;
    }
    interface DocsSelectAnchor {
        /**
          * * whether or not the menu is in view
         */
        "inView"?: boolean;
        /**
          * the current page's data
         */
        "page"?: Page;
        /**
          * * the globally-selected filter state
         */
        "selectedFilters"?: SelectedFilters;
        /**
          * * the menu toggle
         */
        "toggleInView"?: ToggleInView;
    }
    interface DocsUniversalNav {
        /**
          * * determines whether transparent background styles & starker text/logo colors are applied
         */
        "blend"?: boolean;
        /**
          * * image url for brand icon
         */
        "brandIcon"?: string;
        /**
          * * image url for brand icon when nav in blend mode
         */
        "brandIconBlend"?: string;
        /**
          * * what label should go next to the brand icon?
         */
        "heading"?: string;
    }
    interface DocsVersionSwitch {
        /**
          * * Switcher option appearing to the left **
         */
        "leftOption"?: SwitchOption;
        /**
          * * Switcher option appearing to the right **
         */
        "rightOption"?: SwitchOption;
    }
    interface UiComponentProps {
        /**
          * * component tag for documented component page
         */
        "tag"?: string;
        /**
          * * whether or not the table contains header tags
         */
        "useTableHeaders"?: boolean;
    }
    interface IntrinsicElements {
        "amplify-block": AmplifyBlock;
        "amplify-block-switcher": AmplifyBlockSwitcher;
        "amplify-callout": AmplifyCallout;
        "amplify-code-block": AmplifyCodeBlock;
        "amplify-code-block-switcher": AmplifyCodeBlockSwitcher;
        "amplify-container": AmplifyContainer;
        "amplify-external-link": AmplifyExternalLink;
        "amplify-hero": AmplifyHero;
        "amplify-lorem": AmplifyLorem;
        "amplify-responsive-grid": AmplifyResponsiveGrid;
        "amplify-sidebar-layout": AmplifySidebarLayout;
        "amplify-sidebar-layout-main": AmplifySidebarLayoutMain;
        "amplify-sidebar-layout-sidebar": AmplifySidebarLayoutSidebar;
        "amplify-sidebar-layout-toggle": AmplifySidebarLayoutToggle;
        "amplify-toc": AmplifyToc;
        "amplify-toc-contents": AmplifyTocContents;
        "amplify-toc-provider": AmplifyTocProvider;
        "docs-404-page": Docs404Page;
        "docs-card": DocsCard;
        "docs-chat-button": DocsChatButton;
        "docs-choose-anchor": DocsChooseAnchor;
        "docs-choose-integration-anchor": DocsChooseIntegrationAnchor;
        "docs-feedback-callout": DocsFeedbackCallout;
        "docs-filter-target": DocsFilterTarget;
        "docs-footer": DocsFooter;
        "docs-four-o-four": DocsFourOFour;
        "docs-in-page-link": DocsInPageLink;
        "docs-internal-link": DocsInternalLink;
        "docs-internal-link-button": DocsInternalLinkButton;
        "docs-landing-hero-cta": DocsLandingHeroCta;
        "docs-link-banner": DocsLinkBanner;
        "docs-menu": DocsMenu;
        "docs-menu-group": DocsMenuGroup;
        "docs-next-previous": DocsNextPrevious;
        "docs-page": DocsPage;
        "docs-repo-actions": DocsRepoActions;
        "docs-router": DocsRouter;
        "docs-secondary-nav": DocsSecondaryNav;
        "docs-select-anchor": DocsSelectAnchor;
        "docs-universal-nav": DocsUniversalNav;
        "docs-version-switch": DocsVersionSwitch;
        "ui-component-props": UiComponentProps;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "amplify-block": LocalJSX.AmplifyBlock & JSXBase.HTMLAttributes<HTMLAmplifyBlockElement>;
            "amplify-block-switcher": LocalJSX.AmplifyBlockSwitcher & JSXBase.HTMLAttributes<HTMLAmplifyBlockSwitcherElement>;
            "amplify-callout": LocalJSX.AmplifyCallout & JSXBase.HTMLAttributes<HTMLAmplifyCalloutElement>;
            "amplify-code-block": LocalJSX.AmplifyCodeBlock & JSXBase.HTMLAttributes<HTMLAmplifyCodeBlockElement>;
            "amplify-code-block-switcher": LocalJSX.AmplifyCodeBlockSwitcher & JSXBase.HTMLAttributes<HTMLAmplifyCodeBlockSwitcherElement>;
            "amplify-container": LocalJSX.AmplifyContainer & JSXBase.HTMLAttributes<HTMLAmplifyContainerElement>;
            "amplify-external-link": LocalJSX.AmplifyExternalLink & JSXBase.HTMLAttributes<HTMLAmplifyExternalLinkElement>;
            "amplify-hero": LocalJSX.AmplifyHero & JSXBase.HTMLAttributes<HTMLAmplifyHeroElement>;
            "amplify-lorem": LocalJSX.AmplifyLorem & JSXBase.HTMLAttributes<HTMLAmplifyLoremElement>;
            "amplify-responsive-grid": LocalJSX.AmplifyResponsiveGrid & JSXBase.HTMLAttributes<HTMLAmplifyResponsiveGridElement>;
            "amplify-sidebar-layout": LocalJSX.AmplifySidebarLayout & JSXBase.HTMLAttributes<HTMLAmplifySidebarLayoutElement>;
            "amplify-sidebar-layout-main": LocalJSX.AmplifySidebarLayoutMain & JSXBase.HTMLAttributes<HTMLAmplifySidebarLayoutMainElement>;
            "amplify-sidebar-layout-sidebar": LocalJSX.AmplifySidebarLayoutSidebar & JSXBase.HTMLAttributes<HTMLAmplifySidebarLayoutSidebarElement>;
            "amplify-sidebar-layout-toggle": LocalJSX.AmplifySidebarLayoutToggle & JSXBase.HTMLAttributes<HTMLAmplifySidebarLayoutToggleElement>;
            "amplify-toc": LocalJSX.AmplifyToc & JSXBase.HTMLAttributes<HTMLAmplifyTocElement>;
            "amplify-toc-contents": LocalJSX.AmplifyTocContents & JSXBase.HTMLAttributes<HTMLAmplifyTocContentsElement>;
            "amplify-toc-provider": LocalJSX.AmplifyTocProvider & JSXBase.HTMLAttributes<HTMLAmplifyTocProviderElement>;
            "docs-404-page": LocalJSX.Docs404Page & JSXBase.HTMLAttributes<HTMLDocs404PageElement>;
            "docs-card": LocalJSX.DocsCard & JSXBase.HTMLAttributes<HTMLDocsCardElement>;
            "docs-chat-button": LocalJSX.DocsChatButton & JSXBase.HTMLAttributes<HTMLDocsChatButtonElement>;
            "docs-choose-anchor": LocalJSX.DocsChooseAnchor & JSXBase.HTMLAttributes<HTMLDocsChooseAnchorElement>;
            "docs-choose-integration-anchor": LocalJSX.DocsChooseIntegrationAnchor & JSXBase.HTMLAttributes<HTMLDocsChooseIntegrationAnchorElement>;
            "docs-feedback-callout": LocalJSX.DocsFeedbackCallout & JSXBase.HTMLAttributes<HTMLDocsFeedbackCalloutElement>;
            "docs-filter-target": LocalJSX.DocsFilterTarget & JSXBase.HTMLAttributes<HTMLDocsFilterTargetElement>;
            "docs-footer": LocalJSX.DocsFooter & JSXBase.HTMLAttributes<HTMLDocsFooterElement>;
            "docs-four-o-four": LocalJSX.DocsFourOFour & JSXBase.HTMLAttributes<HTMLDocsFourOFourElement>;
            "docs-in-page-link": LocalJSX.DocsInPageLink & JSXBase.HTMLAttributes<HTMLDocsInPageLinkElement>;
            "docs-internal-link": LocalJSX.DocsInternalLink & JSXBase.HTMLAttributes<HTMLDocsInternalLinkElement>;
            "docs-internal-link-button": LocalJSX.DocsInternalLinkButton & JSXBase.HTMLAttributes<HTMLDocsInternalLinkButtonElement>;
            "docs-landing-hero-cta": LocalJSX.DocsLandingHeroCta & JSXBase.HTMLAttributes<HTMLDocsLandingHeroCtaElement>;
            "docs-link-banner": LocalJSX.DocsLinkBanner & JSXBase.HTMLAttributes<HTMLDocsLinkBannerElement>;
            "docs-menu": LocalJSX.DocsMenu & JSXBase.HTMLAttributes<HTMLDocsMenuElement>;
            "docs-menu-group": LocalJSX.DocsMenuGroup & JSXBase.HTMLAttributes<HTMLDocsMenuGroupElement>;
            "docs-next-previous": LocalJSX.DocsNextPrevious & JSXBase.HTMLAttributes<HTMLDocsNextPreviousElement>;
            "docs-page": LocalJSX.DocsPage & JSXBase.HTMLAttributes<HTMLDocsPageElement>;
            "docs-repo-actions": LocalJSX.DocsRepoActions & JSXBase.HTMLAttributes<HTMLDocsRepoActionsElement>;
            "docs-router": LocalJSX.DocsRouter & JSXBase.HTMLAttributes<HTMLDocsRouterElement>;
            "docs-secondary-nav": LocalJSX.DocsSecondaryNav & JSXBase.HTMLAttributes<HTMLDocsSecondaryNavElement>;
            "docs-select-anchor": LocalJSX.DocsSelectAnchor & JSXBase.HTMLAttributes<HTMLDocsSelectAnchorElement>;
            "docs-universal-nav": LocalJSX.DocsUniversalNav & JSXBase.HTMLAttributes<HTMLDocsUniversalNavElement>;
            "docs-version-switch": LocalJSX.DocsVersionSwitch & JSXBase.HTMLAttributes<HTMLDocsVersionSwitchElement>;
            "ui-component-props": LocalJSX.UiComponentProps & JSXBase.HTMLAttributes<HTMLUiComponentPropsElement>;
        }
    }
}
