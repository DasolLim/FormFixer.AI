/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/register`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Settings` | `/Settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Video` | `/Video`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/GlobalStyleContext`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/UserContext`; params?: Router.UnknownInputParams; } | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/register`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Settings` | `/Settings`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/Video` | `/Video`; params?: Router.UnknownOutputParams; } | { pathname: `/hooks/GlobalStyleContext`; params?: Router.UnknownOutputParams; } | { pathname: `/hooks/UserContext`; params?: Router.UnknownOutputParams; } | { pathname: `/+not-found`, params: Router.UnknownOutputParams & {  } };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/register${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Home${`?${string}` | `#${string}` | ''}` | `/Home${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Settings${`?${string}` | `#${string}` | ''}` | `/Settings${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/Video${`?${string}` | `#${string}` | ''}` | `/Video${`?${string}` | `#${string}` | ''}` | `/hooks/GlobalStyleContext${`?${string}` | `#${string}` | ''}` | `/hooks/UserContext${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/register`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Home` | `/Home`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Settings` | `/Settings`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/Video` | `/Video`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/GlobalStyleContext`; params?: Router.UnknownInputParams; } | { pathname: `/hooks/UserContext`; params?: Router.UnknownInputParams; } | `/+not-found` | { pathname: `/+not-found`, params: Router.UnknownInputParams & {  } };
    }
  }
}