import { PromiseFactory } from "../models/promise";
import { CACHE_CONSTANT } from "./cache/cacheService";
import { ICacheService } from "./cache/icacheService";
import { IAuthService } from "./iauthService";
import { IoCNames } from "../ioc/enum";

let cacheService: ICacheService = window.ioc.resolve(IoCNames.ICacheService);
let authService: IAuthService = {
    getUserProfile: getUserProfile,
    setAuth: setAuth,
    getAuth: getAuth,
    removeAuth: removeAuth,
    isAuthenticated: isAuthenticated,
    isAuthorized: isAuthorized
};
export default authService;
function isAuthorized(routeInstruction: any) {
    let profile = getUserProfile();
    return isAuthenticated(profile);
}
function removeAuth(): void {
    cacheService.remove(CACHE_CONSTANT.USER_PROFILE);
    cacheService.remove(CACHE_CONSTANT.TOKEN);
}
function isAuthenticated(profile: any): boolean {
    return !!profile;
}
function setAuth(auth: any) {
    cacheService.set(CACHE_CONSTANT.USER_PROFILE, auth.profile);
    cacheService.set(CACHE_CONSTANT.TOKEN, auth.token);
    console.log("Token", cacheService.get(CACHE_CONSTANT.TOKEN));
}
function getAuth(): any {
    let auth: any = {
        profile: cacheService.get(CACHE_CONSTANT.USER_PROFILE),
        token: cacheService.get(CACHE_CONSTANT.TOKEN)
    };
    return auth;
}
function getUserProfile(): any {
    if (!cacheService.exist(CACHE_CONSTANT.USER_PROFILE)) {
        return null;
    }
    let userProfile = cacheService.get(CACHE_CONSTANT.USER_PROFILE);
    return userProfile;
}